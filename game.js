(function(root){
const cards=[
{id:'boundary',title:'駅の北側、境界はまだ白紙',view:'place',sources:['S4','M1'],text:'総務省は工場の所在を辻堂駅北側一帯として記す。旧敷地の境界は未同定。現在の地図から境界を確定することはできない。'},
{id:'image',title:'写真へ続く入口',view:'place',sources:['I1','M1'],text:'文書館には「空襲をうける工場　1945年7月30日」の展示情報がある。撮影地点は未同定。現在と同じ画角とは言えない。'},
{id:'attack',title:'約、という文字を残す',view:'number',sources:['S4'],text:'7月30日午前8時10分頃から約30分、艦載機約20機による工場攻撃と記される。時刻も機数も概数で、この攻撃の範囲を示す。'},
{id:'loss',title:'翌日までを数える',view:'number',sources:['S5','S6'],text:'7月30日の攻撃で従業員4名が即死し、重傷の1名が翌日死亡した。8月13日の再空襲は死傷者なしとされる。後者は当該工場攻撃の記録に限られる。'},
{id:'voice',title:'一人称の音',view:'voice',sources:['T1'],text:'爆弾の音というのは、自分がねらわれているような感じがします。',quote:true},
{id:'archive',title:'まだ聴いていない声',view:'voice',sources:['V1'],text:'藤沢市の戦争体験アーカイブは本人の証言に基づく資料。冒頭の再生動作のみ確認、全編は未確認。発言の引用や特定の空襲との関連付けはしていない。'},
{id:'scope',title:'数字の住所',view:'number',sources:['S2','S3'],text:'5月24〜25日の全焼36戸・罹災者99人は藤沢署管内の集計。5月29日の死者1名も藤沢署管内の記録で、同じ日付の数字ではない。'},
{id:'after',title:'終わりの日の、その先',view:'place',sources:['S7','S1'],text:'藤沢海軍航空隊では8月15日の放送後も16・17日に演習を行い、20日に解散式を行った。全市民の行動ではない。2月10日の記録にある御所見村も当時の行政区分で読む。'}
];
const places=[
{id:'station',name:'駅北側',art:'station',intro:'いま、辻堂を訪れたあなたはノートを開く。目の前の風景と記録を、どうつなごう。',beat:'ノートの声〈作者の案内〉：場所の名前が同じでも、昔の敷地の線まで見えるわけではない。何を手元に残す？',choices:[['境界のわからなさを記す','boundary'],['写真への入口を探す','image']]},
{id:'factory',name:'工場記録',art:'factory',intro:'紙の上の工場へ。ここで開くのは記録であって、過去を再現した風景ではない。',beat:'ノートの声〈作者の案内〉：一行の中にも時刻、人数、期間がある。今日はどこを丁寧に読む？',choices:[['攻撃の時刻と概数を見る','attack'],['被害を数える期間を見る','loss']]},
{id:'voices',name:'声の書架',art:'shelves',intro:'書架の前で立ち止まる。一人の言葉に触れることと、その人になることは違う。',beat:'ノートの声〈作者の案内〉：引用は引用のまま残そう。ここには、まだ聴いていない映像への入口もある。',choices:[['岩見高明氏の一節を読む','voice'],['公式の映像資料を探す','archive']]},
{id:'nearby',name:'周辺の記録',art:'notebook',intro:'ノートを少し広げる。工場の外にも、異なる地域と組織の記録が並ぶ。',beat:'ノートの声〈作者の案内〉：記録の範囲を広げるときほど、主語を消さずに読んでみよう。',choices:[['5月の数字を照らす','scope'],['行政区分と組織の時間を見る','after']]}
];
const endings={number:{title:'終幕｜数字に、住所を返す',text:'あなたが残すのは、大きな合計ではなく「いつ・どこ・何を数えたか」という読み方。ノートの数字を別の期間や地域にそのまま足さず、記録の射程を次の読者にも渡す。',question:'次に数字を引用するとき、期間と地域を一緒に書けるだろうか。'},voice:{title:'終幕｜一人の声を、一人のまま',text:'あなたは声を街全体の代弁にしない読み方を選んだ。引用した言葉と自分の解釈の間に余白を残す。まだ聴いていない声は、知っている声として語らずにおく。',question:'証言のどこまでが本人の言葉で、どこからが自分の解釈だろう。'},place:{title:'終幕｜白紙の線を持ち帰る',text:'あなたの地図には、描き切らない線が残った。記録にある地域と今の風景を結びつける入口はあっても、境界や撮影地点を確定する根拠はまだない。その白紙を、次の調査の問いとして持ち帰る。',question:'旧敷地境界や写真の撮影地点を確かめるには、どんな史料が必要だろう。'}};
function initial(){return {cards:[],screen:'title',place:null,step:0,selected:null,ending:null}}
function collect(state,id){if(!cards.some(c=>c.id===id))throw Error('unknown card');return {...state,cards:[...new Set([...state.cards,id])],selected:id,screen:'card'}}
function conclude(state,view){if(state.cards.length<3)throw Error('three cards required');if(!endings[view])throw Error('unknown ending');const support=cards.filter(c=>state.cards.includes(c.id)&&c.view===view);return {...state,screen:'ending',ending:view,support:support.map(c=>c.id)}}
root.Game={cards,places,endings,initial,collect,conclude};
})(typeof module!=='undefined'?module.exports:globalThis);
