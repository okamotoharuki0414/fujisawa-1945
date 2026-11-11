"use strict";

// UIとtest.mjsが同じ検査を使う。データはHTMLとして挿入しない。
function validateData(data) {
  const errors = [];
  const check = (condition, message) => { if (!condition) errors.push(message); };
  const str = value => typeof value === "string" && value.trim().length > 0;
  const day = value => typeof value === "string" && /^\d{4}-\d{2}-\d{2}$/.test(value) &&
    Number.isFinite(Date.parse(value)) && new Date(value).toISOString().slice(0, 10) === value;
  const https = value => { try { const u = new URL(value); return u.protocol === "https:" && !!u.hostname && !u.username && !u.password; } catch { return false; } };
  if (!data || typeof data !== "object") return ["データはオブジェクトが必要です"];
  check(str(data.title), "titleが必要です");
  check(str(data.notice), "noticeが必要です");
  if (!Array.isArray(data.nodes) || !Array.isArray(data.sources)) return [...errors, "nodesとsourcesは配列が必要です"];
  check(data.nodes.length > 0, "nodesが空です");
  const nodes = new Map(), sources = new Map();
  for (const s of data.sources) {
    if (!s || typeof s !== "object") { errors.push("出典形式が不正です"); continue; }
    check(str(s.id) && !sources.has(s.id), "出典IDの欠落または重複");
    sources.set(s.id, s);
    for (const field of ["title", "url", "passage", "scope", "rights"]) check(str(s[field]), "出典 " + s.id + ": " + field + "が必要です");
    check(https(s.url), "出典 " + s.id + ": URLは認証情報を含まないHTTPSが必要です");
  }
  let previousDate = "";
  for (const n of data.nodes) {
    if (!n || typeof n !== "object") { errors.push("ノード形式が不正です"); continue; }
    check(str(n.id) && !nodes.has(n.id), "ノードIDの欠落または重複");
    nodes.set(n.id, n);
    check(str(n.title) && str(n.text), "ノード " + n.id + ": title/textが必要です");
    check(day(n.date), "ノード " + n.id + ": dateは実在するYYYY-MM-DDが必要です");
    check(!previousDate || n.date >= previousDate, "nodes配列が年代順ではありません: " + n.id);
    previousDate = n.date;
    check(["fact", "guide", "reflection"].includes(n.kind), "kindが不正です: " + n.id);
    check(Array.isArray(n.sourceIds), "sourceIdsは配列が必要です: " + n.id);
    check(Array.isArray(n.choices), "choicesは配列が必要です: " + n.id);
    if (Array.isArray(n.sourceIds)) {
      check(new Set(n.sourceIds).size === n.sourceIds.length, "出典参照の重複: " + n.id);
      for (const id of n.sourceIds) check(sources.has(id), "参照出典がありません: " + n.id + " → " + id);
      if (n.kind === "fact") check(n.sourceIds.length > 0, "史実には出典が必要です: " + n.id);
      // 鉤括弧を使う直接引用候補は、参照先の抜粋に完全一致すること。
      // 操作名も保守的に対象にするため、guideだけは引用検査対象外。
      if (n.kind !== "guide" && typeof n.text === "string") {
        for (const match of n.text.matchAll(/[「『]([^「」『』]+)[」』]/g)) {
          check(n.sourceIds.some(id => typeof sources.get(id)?.passage === "string" && sources.get(id).passage.includes(match[1])),
            "引用候補が出典抜粋にありません: " + n.id);
        }
      }
    }
    for (const match of String(n.text || "").matchAll(/https?:\/\/[^\s<>"「」]+/g)) check(https(match[0]), "本文URLはHTTPSが必要です: " + n.id);
  }
  check(str(data.start) && nodes.has(data.start), "startの参照先がありません");
  for (const n of nodes.values()) {
    if (!Array.isArray(n.choices)) continue;
    for (const c of n.choices) {
      check(c && str(c.label) && str(c.next), "選択肢形式が不正です: " + n.id);
      if (!c) continue;
      check(nodes.has(c.next), "分岐先がありません: " + n.id);
      if (nodes.has(c.next)) check(nodes.get(c.next).date >= n.date, "分岐が時間を逆行します: " + n.id);
    }
  }
  const visited = new Set(), active = new Set();
  function visit(id) {
    if (active.has(id)) { errors.push("循環分岐があります: " + id); return; }
    if (visited.has(id) || !nodes.has(id)) return;
    visited.add(id); active.add(id);
    for (const c of nodes.get(id).choices || []) if (c) visit(c.next);
    active.delete(id);
  }
  // 不正形式では探索せず、上の形式エラーを返す。
  if ([...nodes.values()].every(n => Array.isArray(n.choices))) visit(data.start);
  for (const id of nodes.keys()) check(visited.has(id), "startから到達できません: " + id);
  return errors;
}

if (typeof document !== "undefined") {
  const $ = id => document.getElementById(id);
  const element = (tag, text, className) => {
    const e = document.createElement(tag);
    if (text !== undefined) e.textContent = text;
    if (className) e.className = className;
    return e;
  };
  let data, nodes, visited = new Set(), returnFocus;
  const names = { fact: "史実", guide: "ガイド", reflection: "考察" };
  function showSources(ids) {
    returnFocus = document.activeElement;
    $("source-list").replaceChildren();
    const items = ids ? data.sources.filter(s => ids.includes(s.id)) : data.sources;
    if (!items.length) $("source-list").append(element("p", "出典はまだ登録されていません。現在は操作確認用のガイドです。"));
    for (const s of items) {
      const card = element("article", undefined, "source");
      card.append(element("h3", s.title));
      const link = element("a", "資料を外部サイトで開く ↗");
      link.href = s.url; link.target = "_blank"; link.rel = "noopener noreferrer"; link.referrerPolicy = "no-referrer";
      card.append(link);
      const dl = element("dl");
      for (const [label, field] of [["該当箇所・抜粋", "passage"], ["この資料が裏付ける範囲", "scope"], ["権利・利用条件", "rights"]]) {
        dl.append(element("dt", label), element("dd", s[field]));
      }
      card.append(dl); $("source-list").append(card);
    }
    $("drawer").showModal(); $("close-drawer").focus();
  }
  function render(id, focus) {
    const n = nodes.get(id);
    visited.add(id);
    const card = element("article", undefined, "message " + n.kind);
    const meta = element("div", undefined, "meta");
    const date = element("time", (n.kind === "fact" ? "記録の日付：" : "読解順の基準日：") + n.date); date.dateTime = n.date;
    meta.append(date, element("span", names[n.kind], "badge"));
    const heading = element("h3", n.title); heading.tabIndex = -1;
    card.append(meta, heading, element("p", n.text, "body"));
    if (n.sourceIds.length) {
      const button = element("button", "この記述の出典 (" + n.sourceIds.length + ")");
      button.addEventListener("click", () => showSources(n.sourceIds));
      card.append(button);
    }
    $("history").append(card);
    $("choices").replaceChildren();
    for (const choice of n.choices) {
      const button = element("button", choice.label + " →");
      button.addEventListener("click", () => {
        const reply = element("p", undefined, "reply");
        reply.append(element("span", choice.label)); $("history").append(reply);
        render(choice.next, true);
      });
      $("choices").append(button);
    }
    $("progress").max = data.nodes.length; $("progress").value = visited.size;
    $("count").textContent = visited.size + " / " + data.nodes.length;
    $("status").textContent = n.title + "。閲覧 " + visited.size + " / " + data.nodes.length + (n.choices.length ? "。選択肢を選んでください。" : "。この分岐は終了です。");
    if (focus) heading.focus();
  }
  $("close-drawer").addEventListener("click", () => $("drawer").close());
  $("drawer").addEventListener("close", () => returnFocus?.focus());
  $("sources").addEventListener("click", () => showSources());
  $("reset").addEventListener("click", () => {
    if (!window.confirm("履歴と進捗を消して、最初から始めますか？")) return;
    visited = new Set(); $("history").replaceChildren(); render(data.start, true);
  });
  async function load() {
    try {
      const embedded = $("embedded-data");
      let candidate;
      if (embedded) {
        candidate = JSON.parse(embedded.textContent);
      } else {
        const response = await fetch("./data.json", { cache: "no-store" });
        if (!response.ok) throw new Error("HTTP " + response.status);
        candidate = await response.json();
      }
      const errors = validateData(candidate);
      if (errors.length) throw new Error(errors.join("\n"));
      data = candidate; nodes = new Map(data.nodes.map(n => [n.id, n]));
      $("title").textContent = data.title; document.title = data.title;
      $("notice").textContent = data.notice;
      $("subtitle").textContent = data.subtitle || "";
      $("audience").textContent = data.audience || "";
      $("sources").disabled = false; $("reset").disabled = false;
      render(data.start, false);
    } catch (error) {
      $("notice").textContent = "教材データを読み込めませんでした。READMEの手順でローカルサーバーを起動し、data.jsonを確認してください。";
      $("status").textContent = "読み込みエラー: " + error.message;
      const retry = element("button", "再読み込み");
      retry.addEventListener("click", () => { $("choices").replaceChildren(); load(); });
      $("choices").append(retry);
    }
  }
  load();
}
