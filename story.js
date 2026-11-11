/* Fixed v4 chronology. Questions never gate the story. */
(function(g){
'use strict';
const VERSION=4, KEY='fujisawa-film-v4', SIGNATURE='fixed-film-20261111-v4-story';
const scenes=[
  {
    "id": "present",
    "date": "現代",
    "title": "いつもの駅、知らない名前",
    "art": "station",
    "beats": [
      {
        "text": "私は、ふだん辻堂駅を使っている。今日も通り過ぎる前に、スマホで駅の北側の戦災記録を開いた。",
        "source": null,
        "kind": "私／創作の来訪者",
        "camera": "phone",
        "prop": "phone",
        "actor": "none"
      },
      {
        "text": "記録には、辻堂駅北側にあった住友特殊製鋼への空襲と、岩見高明という人の回想が載っている。",
        "source": "T4",
        "kind": "史料解説",
        "camera": "phone",
        "prop": "phone",
        "actor": "none"
      },
      {
        "text": "岩見高明さん。初めて知った名前だ。見慣れたこの場所と、この知らない一人は、どうつながるのだろう。",
        "source": null,
        "kind": "私／創作の来訪者",
        "camera": "phone",
        "prop": "phone",
        "actor": "none"
      },
      {
        "text": "画面から顔を上げると、駅の輪郭がほどけた。足を止める間もなく、私は見知らぬ時間に立っていた。",
        "source": null,
        "kind": "私／創作の来訪者",
        "camera": "crossing",
        "prop": "none",
        "actor": "none"
      }
    ],
    "qa": []
  },
  {
    "id": "feb10",
    "date": "1945年2月10日",
    "title": "一人を知るため、暮らしを知る",
    "art": "town",
    "beats": [
      {
        "text": "駅へ戻りたい。でも、何も知らないまま、あの名前だけを置いていきたくない。そばの人影に、ここはどこかと尋ねる。",
        "source": null,
        "kind": "私／創作の来訪者",
        "camera": "wide",
        "prop": "none",
        "actor": "guide-left"
      },
      {
        "text": "私は、残された記録を案内する役です。ここからは1945年の藤沢と周辺を、日付に沿ってたどります。",
        "source": null,
        "kind": "記録の案内",
        "camera": "wide",
        "prop": "none",
        "actor": "guide-left"
      },
      {
        "text": "空襲の日だけでは、あの人がどんな毎日の中にいたか見えない。私はまず、食べ物や暮らしの品について聞いてみる。",
        "source": null,
        "kind": "私／創作の来訪者",
        "camera": "shelf",
        "prop": "ration",
        "actor": "guide-left"
      },
      {
        "text": "配給は、店で好きなだけ買うのでなく、決められた割当で品物を受け取る仕組み。藤沢では1940年の砂糖から始まり、食料や日用品へ広がった。",
        "source": "L1",
        "kind": "史料解説",
        "camera": "shelf",
        "prop": "ration",
        "actor": "none"
      },
      {
        "text": "戦争は暮らしの品も取り込んだ。金属回収で、1943年には遊行寺の一遍上人の銅像も回収された。今日より前から続く変化だ。",
        "source": "L2",
        "kind": "史料解説",
        "camera": "shelf",
        "prop": "empty",
        "actor": "none"
      },
      {
        "text": "2月10日、B29の1機が御所見村の山林・畑地へ投弾し、被害なしと記録された。今の藤沢市域の一部だが、当時は藤沢市とは別の村だった。",
        "source": "S1",
        "kind": "史料解説",
        "camera": "window",
        "prop": "window",
        "actor": "none"
      },
      {
        "text": "暮らしを変えていた戦争が、空からも近づいていた。私はあたりを見渡す。藤沢は、周りの町とどうつながっていたのだろう。",
        "source": null,
        "kind": "私／創作の来訪者",
        "camera": "window",
        "prop": "window",
        "actor": "none"
      }
    ],
    "qa": [
      {
        "label": "配給の品や量はわかる？",
        "text": "1941年末までに米や味噌などにも対象が広がり、1942年には衣料品の点数切符制も実施されました。この日の配給量や現物は確認できていません。",
        "source": "L1"
      }
    ]
  },
  {
    "id": "may24",
    "date": "1945年5月24〜25日",
    "title": "遠くの空襲が、町に及ぶ",
    "art": "windows",
    "beats": [
      {
        "text": "藤沢は、東京や横浜などから疎開者を受け入れていた。前年1944年の市の集計では、一般疎開者347世帯・1040名。空襲前から京浜と人の往来でつながっていた。",
        "source": "L3",
        "kind": "史料解説",
        "camera": "window",
        "prop": "window",
        "actor": "guide-right"
      },
      {
        "text": "逃れて来る人がいた町にも、空襲の影響は及んだ。今度は川崎・横浜への空襲が、藤沢に何を残したかを読む。",
        "source": null,
        "kind": "私／創作の来訪者",
        "camera": "window",
        "prop": "window",
        "actor": "none"
      },
      {
        "text": "5月24〜25日、川崎・横浜空襲の余波で、藤沢署管内に焼夷弾360発、36戸全焼、99人が罹災。藤沢警察署が担当する地域の記録で、市全体の累計ではない。",
        "source": "S2",
        "kind": "史料解説",
        "camera": "window-close",
        "prop": "window",
        "actor": "none"
      },
      {
        "text": "遠くの都市の名前だと思っていた。けれど、家を焼かれた人の数が、ここにも残っている。次の日付にも横浜の空襲が出てくる。",
        "source": null,
        "kind": "私／創作の来訪者",
        "camera": "window-close",
        "prop": "empty",
        "actor": "none"
      }
    ],
    "qa": [
      {
        "label": "疎開者はどこから来た？",
        "text": "1944年の内訳には東京都265世帯800名、横浜市56世帯174名があります。5月の空襲時だけの受入数ではありません。",
        "source": "L3"
      }
    ]
  },
  {
    "id": "may29",
    "date": "1945年5月29日",
    "title": "5月29日、別の空襲の記録",
    "art": "windows",
    "beats": [
      {
        "text": "続く5月29日、横浜大空襲の時にも、藤沢警察署が担当する地域で1名の死者が出たという。前の36戸・99人とは別の日の記録だ。",
        "source": "S3",
        "kind": "史料解説",
        "camera": "window-close",
        "prop": "window",
        "actor": "none"
      },
      {
        "text": "空襲は、別の町だけの出来事ではなかった。では、私がいつも通る辻堂駅の北側では何が起きたのか。最初に見た名前へ、もう少し近づきたい。",
        "source": null,
        "kind": "私／創作の来訪者",
        "camera": "factory-reveal",
        "prop": "window",
        "actor": "none"
      }
    ],
    "qa": []
  },
  {
    "id": "jul30",
    "date": "1945年7月30日 朝",
    "title": "駅の北側にいた学生",
    "art": "factory-wide",
    "beats": [
      {
        "text": "辻堂駅北側一帯にあった住友特殊製鋼。海軍向けの鋼をつくり、軍需生産を担った工場だった。",
        "source": "S8",
        "kind": "史料解説",
        "camera": "factory-reveal",
        "prop": "factory",
        "actor": "none"
      },
      {
        "text": "最初に見た名前が、ここでつながる。岩見高明さんは藤沢商業学校の学生だった。勤労動員で工場の仕事に就き、防空本部の本部伝令をしていた。",
        "source": "T4",
        "kind": "史料解説",
        "camera": "messenger",
        "prop": "dispatch",
        "actor": "guide-left"
      },
      {
        "text": "伝令は、連絡を伝える役だ。学生として働いていた岩見さんに、その朝、何が起きたのだろう。本人が後年に残した言葉を読む。",
        "source": null,
        "kind": "私／創作の来訪者",
        "camera": "testimony",
        "prop": "dispatch",
        "actor": "witness-frame",
        "art": "shelter"
      },
      {
        "text": "7月30日午前8時10分頃から約30分間、艦載機（空母などから飛ぶ軍用機）約20機がこの工場を攻撃した。時刻や機数は概数として記されている。",
        "source": "S4",
        "kind": "史料解説",
        "camera": "headquarters",
        "prop": "none",
        "actor": "none",
        "art": "shelter"
      },
      {
        "text": null,
        "source": "T2",
        "kind": "岩見高明氏／後年の回想・直接引用",
        "camera": "headquarters",
        "prop": "none",
        "actor": "witness-frame",
        "art": "shelter"
      },
      {
        "text": null,
        "source": "T1",
        "kind": "岩見高明氏／後年の回想・直接引用",
        "camera": "close",
        "prop": "none",
        "actor": "witness-frame",
        "art": "shelter"
      },
      {
        "text": "私は、その音を聞いたわけではない。それでも「自分がねらわれているような」という言葉で、攻撃の記録が一人の恐怖につながった。",
        "source": null,
        "kind": "私／創作の来訪者",
        "camera": "headquarters",
        "prop": "none",
        "actor": "none",
        "art": "shelter"
      }
    ],
    "qa": [
      {
        "label": "工場の名称や生産の経緯は？",
        "text": "1940年に海軍管理工場に指定され、1944年5月に住友特殊製鋼へ改称しました。この生産の記述から攻撃側の標的選定理由は判断できません。",
        "source": "S8"
      }
    ]
  },
  {
    "id": "jul31",
    "date": "1945年7月30日 空襲後 → 翌31日",
    "title": "音のあとに残る鉄骨",
    "art": "ruins",
    "beats": [
      {
        "text": "警報と爆弾の音のあと、外はどうなっていたのか。同じ岩見さんの回想は、空襲後に地上へ出た時の光景へ続く。",
        "source": null,
        "kind": "私／創作の来訪者",
        "camera": "ruin-wide",
        "prop": "steel",
        "actor": "none"
      },
      {
        "text": null,
        "source": "T3",
        "kind": "岩見高明氏／後年の回想・直接引用",
        "camera": "ruin-close",
        "prop": "steel",
        "actor": "none"
      },
      {
        "text": "工場の被害記録では、従業員4名が即死し、重傷の1名が翌31日に亡くなった。7月30日の攻撃と翌日の死者を合わせて5名となる。",
        "source": "S5",
        "kind": "史料解説",
        "camera": "ruin-wide",
        "prop": "steel",
        "actor": "none"
      },
      {
        "text": "数字と、鉄骨だけになったという声。どちらかだけでは伝わらない。ここにいた一人を忘れず、その後の工場も確かめたい。",
        "source": null,
        "kind": "私／創作の来訪者",
        "camera": "ruin-close",
        "prop": "steel",
        "actor": "none"
      }
    ],
    "qa": [
      {
        "label": "この回想はどこに残る？",
        "text": "総務省の本文は『市民が語る十五年戦争』（藤沢市、2000年）から掲載しています。原書は未実見で、取材日は不明です。",
        "source": "T3"
      }
    ]
  },
  {
    "id": "aug13",
    "date": "1945年8月13日",
    "title": "修理の先に、再開はなかった",
    "art": "repair",
    "beats": [
      {
        "text": "壊れた工場には修理が進められた。私は、そのあとのことが知りたい。働く場所は、また動き出せたのだろうか。",
        "source": null,
        "kind": "私／創作の来訪者",
        "camera": "repair-wide",
        "prop": "repair",
        "actor": "none"
      },
      {
        "text": "応急修理を終え、作業を再開しようとした8月13日、工場は再び艦載機の空襲を受けた。この攻撃の死傷者はなく、工場被害も軽微だった。",
        "source": "S6",
        "kind": "史料解説",
        "camera": "repair-close",
        "prop": "repair",
        "actor": "none"
      },
      {
        "text": "しかし、生産は停止したまま敗戦の日を迎えた。",
        "source": "S6",
        "kind": "史料解説",
        "camera": "repair-wide",
        "prop": "empty",
        "actor": "none"
      },
      {
        "text": "工場が止まったまま迎えた戦争の終わり。町にある別の組織では、その日をどう過ごしたのだろう。終わり方まで確かめてから帰りたい。",
        "source": null,
        "kind": "私／創作の来訪者",
        "camera": "gate",
        "prop": "gate",
        "actor": "none"
      }
    ],
    "qa": []
  },
  {
    "id": "aug20",
    "date": "1945年8月15〜20日",
    "title": "放送のあとも、日々は続いた",
    "art": "radio",
    "beats": [
      {
        "text": "ここからは工場とは別の組織、藤沢海軍航空隊の記録へ。1944年6月に発足し、無線兵器の整備員を育てる教育隊だった。",
        "source": "L4",
        "kind": "史料解説",
        "camera": "radio-wide",
        "prop": "radio",
        "actor": "guide-right"
      },
      {
        "text": "終わりを知らせる放送のあと、何が変わったのか。私は、この教育隊に残った数日間を読む。",
        "source": null,
        "kind": "私／創作の来訪者",
        "camera": "radio-close",
        "prop": "radio",
        "actor": "none"
      },
      {
        "text": "教育隊では8月15日に玉音放送を聞いたものの、その後どう過ごせばよいかわからず、16日と17日に演習を行って過ごしたと記録されている。",
        "source": "S7",
        "kind": "史料解説",
        "camera": "radio-close",
        "prop": "radio",
        "actor": "none"
      },
      {
        "text": "8月20日、教育隊は解散式を行った。この部隊の記録は、ここで終わっている。",
        "source": "S7",
        "kind": "史料解説",
        "camera": "gate",
        "prop": "gate",
        "actor": "none"
      },
      {
        "text": "工場の停止と、教育隊の解散。同じ終戦の前後にも違う経過があった。読み終えた記録の文字が淡くなり、私の足元に駅の線が戻ってくる。",
        "source": null,
        "kind": "私／創作の来訪者",
        "camera": "crossing",
        "prop": "gate",
        "actor": "none"
      }
    ],
    "qa": [
      {
        "label": "教育隊が扱った無線兵器とは？",
        "text": "出典は戦闘機電話・電波探信儀を挙げています。ここで紹介するのは整備員を養成する教育隊の役割です。",
        "source": "L4"
      }
    ]
  },
  {
    "id": "return",
    "date": "現代へ",
    "title": "戻ってきた町、残った声",
    "art": "station",
    "beats": [
      {
        "text": "いつもの辻堂駅に戻った。スマホには、最初の記録がある。見慣れた駅と岩見高明さんのつながりを、今は自分の言葉でたどれる。",
        "source": null,
        "kind": "私／創作の来訪者",
        "camera": "return-wide",
        "prop": "phone",
        "actor": "none"
      },
      {
        "text": "駅の北側には軍需生産を担う工場があり、岩見さんは学生として動員され、伝令をしていた。その一日に警報が鳴り、恐怖と、鉄骨だけになった光景が残った。",
        "source": null,
        "kind": "私／創作の来訪者",
        "camera": "return-close",
        "prop": "none",
        "actor": "none"
      },
      {
        "text": "名前だけだった一人が、暮らしも仕事も戦争に組み込まれた町とつながった。私はもう、駅の北側をただの通り道としては見られない。",
        "source": null,
        "kind": "私／創作の来訪者",
        "camera": "return-wide",
        "prop": "none",
        "actor": "none"
      },
      {
        "text": "あの人が後年に残した言葉と、私がここで考えたこと。その二つを混ぜずに、この場所にいた一人のことを話そう。",
        "source": null,
        "kind": "私／創作の来訪者",
        "camera": "return-close",
        "prop": "none",
        "actor": "none"
      }
    ],
    "qa": [],
    "ending": "one"
  }
];
const timeline=scenes.flatMap((s,scene)=>s.beats.map((beat,index)=>({scene,index,...beat})));
function initial(){return {version:VERSION,signature:SIGNATURE,index:0,seen:0,qa:null};}
function valid(x){return !!x&&x.version===VERSION&&x.signature===SIGNATURE&&Number.isInteger(x.index)&&Number.isInteger(x.seen)&&x.index>=0&&x.seen===x.index&&x.index<timeline.length&&x.scene===timeline[x.index].scene&&x.beat===timeline[x.index].index;}
function restore(raw){try{const x=JSON.parse(raw);return valid(x)?{...initial(),index:x.index,seen:x.index}:initial();}catch{return initial();}}
function save(s){return JSON.stringify({version:VERSION,signature:SIGNATURE,index:s.index,seen:s.index,scene:timeline[s.index].scene,beat:timeline[s.index].index});}
function step(s,action,value){
if(action==='ask'){const qa=scenes[timeline[s.index].scene].qa;return Number.isInteger(value)&&qa[value]?{...s,qa:value}:s;}
if(action==='close')return {...s,qa:null};
if(s.qa!==null)return s;
if(action==='next')return {...s,index:Math.min(timeline.length-1,s.index+1),seen:Math.max(s.seen,Math.min(timeline.length-1,s.index+1)),qa:null};
if(action==='back')return {...s,index:Math.max(0,s.index-1),qa:null};
if(action==='reset')return initial();
return s;
}
g.Story={VERSION,KEY,SIGNATURE,scenes,timeline,initial,restore,save,step};
})(globalThis);
