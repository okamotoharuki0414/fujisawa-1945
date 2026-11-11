/* Fixed film sequence; pure state transitions, no DOM or storage access. */
(function(g){
'use strict';
const VERSION=3, KEY='fujisawa-film-v3', SIGNATURE='fixed-film-20261111-v3';
const b=(text,source=null,kind='演出',art=null)=>({text,source,kind,art});
const q=(label,text,source,quote=false)=>({label,text,source,quote});
const scenes=[
{id:'present',date:'現代',title:'いつもの駅、その先へ',art:'station',beats:[b('改札の向こうへ歩こうとした。足元の線路が、見知らぬ時間へつながった。',null,'作者の創作／導入'),b('時計の数字がほどける。次の瞬間、町の色が変わった。')],qa:[]},
{id:'feb10',date:'1945年2月10日',title:'暮らしの輪郭',art:'town',beats:[b('道の端に、人影が立っている。そばへ行ってみる。'),b('この町に至る暮らしを、記録から見てみましょう。',null,'史料の案内役／演出'),b('1940年に砂糖の割当配給が始まり、1941年末までに食料品や日用品へ広がった。1942年には衣料品の総合点数切符制も実施された。','L1','史料解説'),b('この日、当時の御所見村の山林・畑地にB29の1機が投弾。被害なしと記録される。','S1','史料解説')],qa:[q('食べ物は自由に買えた？','1940〜42年の背景です。配給の対象が広がっていました。1945年2月10日に配られた量や現物は確認できていません。','L1'),q('暮らしの品はどう変わった？','1943年には遊行寺の一遍上人の銅像も回収され、1944年末には座布団綿まで回収されたと記載されています。この日の住民の体験談ではありません。','L2')]},
{id:'may24',date:'1945年5月24〜25日',title:'窓の向こうの空',art:'windows',beats:[b('窓の並ぶ道。同じ町の、別の日へ。'),b('数字の範囲も、日付と一緒に確かめましょう。',null,'史料の案内役／演出'),b('川崎・横浜空襲の余波で、藤沢署管内に焼夷弾360発。36戸全焼、99人罹災と記録された。','S2','史料解説')],qa:[q('この数字はどの地域？','藤沢署管内の集計です。藤沢市全体の累計でも、5月29日だけの数字でもありません。','S2'),q('避難して来た人は？','前年1944年の背景として、市の事務報告には一般疎開者347世帯・1040名の受入があります。1945年5月だけの人数ではありません。','L3')]},
{id:'may29',date:'1945年5月29日',title:'五日後の記録',art:'windows',beats:[b('窓は同じでも、日付は進んでいる。'),b('横浜大空襲の時、藤沢署管内で1名の死者が出たという記録が残る。','S3','史料解説')],qa:[q('前の空襲と同じ集計？','5月24〜25日の36戸全焼・99人罹災とは別の日の記述です。ここで示す1名は5月29日の藤沢署管内の記録です。','S3')]},
{id:'jul30',date:'1945年7月30日 朝',title:'午前8時10分頃',art:'factory-wide',beats:[b('辻堂駅北側、住友特殊製鋼を象徴する舞台へ。'),b('午前8時10分頃から約30分間、艦載機約20機による攻撃。数と時刻は概数であり、県下一覧とは範囲が異なる。','S4','史料解説'),b('防空本部を象徴する場所で、一人の回想に耳を向ける。',null,'演出','shelter'),b(null,'T1','岩見高明氏の回想・直接引用','shelter')],qa:[q('警報のあと何が？',null,'T2',true),q('爆弾の音は？',null,'T1',true)]},
{id:'jul31',date:'1945年7月30日 空襲後 → 翌31日',title:'屋根のない場所',art:'ruins',beats:[b('音のない画面に、鉄骨の線が残る。'),b(null,'T3','岩見高明氏の回想・直接引用'),b('工場の記録では従業員4名が即死し、重傷の1名が翌日亡くなった。この攻撃と翌日の死者は計5名。','S5','史料解説')],qa:[q('岩見さんはどんな立場？','昭和4年生まれ。藤沢商業学校在学中に勤労動員を受け、同工場防空本部の本部伝令でした。これは出典の紹介本文による作者解説で、本人の発話ではありません。','T4')]},
{id:'aug13',date:'1945年8月13日',title:'再開を前に',art:'repair',beats:[b('工場を象徴する骨組みに、修理の線が重なる。'),b('応急修理を終えて再開しようとした日、再び艦載機の空襲を受けた。この工場への当該攻撃では死傷者なし、工場被害は軽微。','S6','史料解説')],qa:[q('作業は再開できた？','生産は停止したまま敗戦に至ったと続きます。応急修理と生産再開を混同しないよう、出典の全文を確認できます。','S6')]},
{id:'aug20',date:'1945年8月15〜20日',title:'ラジオ、そして閉じる門',art:'radio',beats:[b('工場から、別の組織・場所である藤沢海軍航空隊の記録へ移る。'),b('15日に玉音放送を聞き、16・17日は演習、20日に解散式。','S7','史料解説'),b('門の向こうが淡くほどける。足元に、あの駅の線が戻ってくる。')],qa:[q('どんな部隊だった？','1944年6月1日発足。無線兵器の整備員養成を目的とした教育隊でした。住友特殊製鋼とは別の組織です。','L4')]},
{id:'return',date:'現代へ',title:'戻ってきた町、残った声',art:'station',beats:[b('同じ駅に戻ってきた。けれど、聞いた言葉は消えない。'),b('岩見高明さんという、名前のある一人の回想。その声と、町に残る記録を、ここから先へ持っていく。')],qa:[],ending:'one'}
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
