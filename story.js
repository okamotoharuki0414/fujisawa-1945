/* V5 fixed chronology; media never gates reading. */
(function(g){'use strict';
const VERSION=5, KEY='fujisawa-film-v5', SIGNATURE='fixed-film-20261111-v5-person-media';
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
        "actor": "none",
        "speaker": "私",
        "expression": "explain",
        "pose": "explain",
        "position": "right",
        "shot": "photo",
        "photoId": "P1"
      },
      {
        "text": "私は灯（あかり）。記録を一緒に読む案内役です。この駅の北側に、何があったのでしょう。画面の先をたどってみましょう。",
        "source": null,
        "kind": "灯／架空の記録案内人",
        "camera": "face",
        "prop": "none",
        "actor": "guide",
        "expression": "welcome",
        "pose": "welcome",
        "shot": "arrival",
        "photoId": "P1",
        "position": "left",
        "speaker": "灯"
      },
      {
        "text": "この駅の北側に、どんな毎日があったと思いますか。記録には、辻堂駅北側にあった住友特殊製鋼への空襲と、岩見高明という人の回想が載っています。",
        "source": "T4",
        "kind": "灯／架空の記録案内人",
        "camera": "phone",
        "prop": "phone",
        "actor": "guide",
        "speaker": "灯",
        "expression": "listen",
        "pose": "listen",
        "position": "left",
        "shot": "face"
      },
      {
        "text": "岩見高明さん。初めて知った名前だ。見慣れたこの場所と、この知らない一人は、どうつながるのだろう。",
        "source": null,
        "kind": "私／創作の来訪者",
        "camera": "phone",
        "prop": "phone",
        "actor": "none",
        "speaker": "私",
        "expression": "listen",
        "pose": "listen",
        "position": "right",
        "shot": "overlook"
      },
      {
        "text": "画面から顔を上げると、駅の輪郭がほどけた。足を止める間もなく、私は見知らぬ時間に立っていた。",
        "source": null,
        "kind": "私／創作の来訪者",
        "camera": "crossing",
        "prop": "none",
        "actor": "none",
        "speaker": "私",
        "expression": "explain",
        "pose": "explain",
        "position": "left",
        "shot": "overlook"
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
        "text": "駅へ戻りたい。でも、何も知らないまま、あの名前だけを置いていきたくない。目の前の灯に、ここはいつなのかと尋ねる。",
        "source": null,
        "kind": "私／創作の来訪者",
        "camera": "wide",
        "prop": "none",
        "actor": "none",
        "speaker": "私",
        "expression": "explain",
        "pose": "explain",
        "position": "right",
        "shot": "overlook"
      },
      {
        "text": "1945年2月です。一緒に、空襲の日より前の暮らしからたどりましょう。私は当時を生きた証人ではなく、残された資料をあなたに渡す案内人です。",
        "source": null,
        "kind": "灯／架空の記録案内人",
        "camera": "wide",
        "prop": "none",
        "actor": "guide",
        "speaker": "灯",
        "expression": "listen",
        "pose": "listen",
        "position": "left",
        "shot": "face"
      },
      {
        "text": "まず土地を見てみましょう。これは2026年の御所見交番周辺です。当時は御所見村。この写真の交番を投弾地点とすることはできません。ここから、記録にある暮らしへ戻ります。",
        "source": null,
        "kind": "灯／架空の記録案内人",
        "camera": "face",
        "prop": "none",
        "actor": "guide",
        "photoId": "P2",
        "shot": "photo",
        "expression": "explain",
        "pose": "explain",
        "position": "left",
        "speaker": "灯"
      },
      {
        "text": "空襲の日だけでは、あの人がどんな毎日の中にいたか見えない。私はまず、食べ物や暮らしの品について聞いてみる。",
        "source": null,
        "kind": "私／創作の来訪者",
        "camera": "shelf",
        "prop": "ration",
        "actor": "none",
        "speaker": "私",
        "expression": "listen",
        "pose": "listen",
        "position": "right",
        "shot": "overlook"
      },
      {
        "text": "配給は、店で好きなだけ買うのでなく、決められた割当で品物を受け取る仕組み。藤沢では1940年の砂糖から始まり、食料や日用品へ広がった。",
        "source": "L1",
        "kind": "灯／架空の記録案内人",
        "camera": "shelf",
        "prop": "ration",
        "actor": "guide",
        "speaker": "灯",
        "expression": "think",
        "pose": "think",
        "position": "left",
        "shot": "face"
      },
      {
        "text": "戦争は暮らしの品も取り込んだ。金属回収で、1943年には遊行寺の一遍上人の銅像も回収された。今日より前から続く変化だ。",
        "source": "L2",
        "kind": "灯／架空の記録案内人",
        "camera": "shelf",
        "prop": "empty",
        "actor": "guide",
        "speaker": "灯",
        "expression": "listen",
        "pose": "listen",
        "position": "right",
        "shot": "face"
      },
      {
        "text": "これは現代の像。記録には1943年に遊行寺の銅像が回収されたとある。同じ像が残ったと考えず、暮らしの物に及んだ回収を思う。",
        "source": null,
        "kind": "灯／架空の記録案内人",
        "camera": "face",
        "prop": "none",
        "actor": "guide",
        "photoId": "P3",
        "shot": "photo",
        "expression": "explain",
        "pose": "explain",
        "position": "left",
        "speaker": "灯"
      },
      {
        "text": "2月10日、B29の1機が御所見村の山林・畑地へ投弾し、被害なしと記録された。今の藤沢市域の一部だが、当時は藤沢市とは別の村でした。",
        "source": "S1",
        "kind": "灯／架空の記録案内人",
        "camera": "window",
        "prop": "window",
        "actor": "guide",
        "speaker": "灯",
        "expression": "listen",
        "pose": "listen",
        "position": "left",
        "shot": "face"
      },
      {
        "text": "暮らしを変えていた戦争が、空からも近づいていた。私はあたりを見渡す。藤沢は、周りの町とどうつながっていたのだろう。",
        "source": null,
        "kind": "私／創作の来訪者",
        "camera": "window",
        "prop": "window",
        "actor": "none",
        "speaker": "私",
        "expression": "explain",
        "pose": "explain",
        "position": "right",
        "shot": "overlook"
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
        "text": "金属回収の記録で名前を知った遊行寺。今の境内の写真から、当時の町全体へ視野を広げ、疎開者を受け入れた藤沢と京浜の関係を聞く。",
        "source": null,
        "kind": "灯／架空の記録案内人",
        "camera": "face",
        "prop": "none",
        "actor": "guide",
        "photoId": "P8",
        "shot": "photo",
        "expression": "explain",
        "pose": "explain",
        "position": "left",
        "speaker": "灯"
      },
      {
        "text": "藤沢は、東京や横浜などから疎開者を受け入れていた。前年1944年の市の集計では、一般疎開者347世帯・1040名。空襲前から京浜と人の往来でつながっていた。",
        "source": "L3",
        "kind": "灯／架空の記録案内人",
        "camera": "window",
        "prop": "window",
        "actor": "guide",
        "speaker": "灯",
        "expression": "explain",
        "pose": "explain",
        "position": "right",
        "shot": "face"
      },
      {
        "text": "逃れて来る人がいた町にも、空襲の影響は及んだ。今度は川崎・横浜への空襲が、藤沢に何を残したかを読む。",
        "source": null,
        "kind": "私／創作の来訪者",
        "camera": "window",
        "prop": "window",
        "actor": "none",
        "speaker": "私",
        "expression": "listen",
        "pose": "listen",
        "position": "left",
        "shot": "overlook"
      },
      {
        "text": "5月24〜25日、川崎・横浜空襲の余波で、藤沢署管内に焼夷弾360発、36戸全焼、99人が罹災。藤沢警察署が担当する地域の記録で、市全体の累計ではない。",
        "source": "S2",
        "kind": "灯／架空の記録案内人",
        "camera": "window-close",
        "prop": "window",
        "actor": "guide",
        "speaker": "灯",
        "expression": "listen",
        "pose": "listen",
        "position": "right",
        "shot": "face"
      },
      {
        "text": "遠くの都市の名前だと思っていた。けれど、家を焼かれた人の数が、ここにも残っている。次の日付にも横浜の空襲が出てくる。",
        "source": null,
        "kind": "私／創作の来訪者",
        "camera": "window-close",
        "prop": "empty",
        "actor": "none",
        "speaker": "私",
        "expression": "explain",
        "pose": "explain",
        "position": "left",
        "shot": "overlook"
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
        "text": "ここで見るのは横浜への空襲の写真。藤沢の当日目撃写真ではないが、他の町への空襲の影響が藤沢にも及んだことへ視線をつなぐ。",
        "source": null,
        "kind": "灯／架空の記録案内人",
        "camera": "face",
        "prop": "none",
        "actor": "guide",
        "photoId": "P4",
        "shot": "photo",
        "expression": "explain",
        "pose": "explain",
        "position": "left",
        "speaker": "灯"
      },
      {
        "text": "続く5月29日、横浜大空襲の時にも、藤沢警察署が担当する地域で1名の死者が出たという。前の36戸・99人とは別の日の記録だ。",
        "source": "S3",
        "kind": "灯／架空の記録案内人",
        "camera": "window-close",
        "prop": "window",
        "actor": "guide",
        "speaker": "灯",
        "expression": "explain",
        "pose": "explain",
        "position": "right",
        "shot": "face"
      },
      {
        "text": "ここで、横浜空襲を経験した中島知子さんに、後年の公式記録映像で会えます。岩見高明さんとは別の方です。収録日は未確認です。顔や身振りに耳を傾けても、このまま先へ進んでも大丈夫。藤沢への影響は、いま読んだ資料の記述として受け止めましょう。",
        "source": null,
        "kind": "灯／架空の記録案内人",
        "camera": "face",
        "prop": "none",
        "actor": "guide",
        "videoId": "V3",
        "shot": "video",
        "expression": "listen",
        "pose": "listen",
        "position": "left",
        "speaker": "灯"
      },
      {
        "text": "空襲は、別の町だけの出来事ではなかった。では、私がいつも通る辻堂駅の北側では何が起きたのか。最初に見た名前へ、もう少し近づきたい。",
        "source": null,
        "kind": "私／創作の来訪者",
        "camera": "factory-reveal",
        "prop": "window",
        "actor": "none",
        "speaker": "私",
        "expression": "listen",
        "pose": "listen",
        "position": "left",
        "shot": "overlook"
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
        "text": "駅の北側は現代にはこんな眺めになっている。これは2011年の写真。1945年へ戻り、この駅北側一帯の工場にいた学生の言葉を読む。",
        "source": null,
        "kind": "灯／架空の記録案内人",
        "camera": "face",
        "prop": "none",
        "actor": "guide",
        "photoId": "P5",
        "shot": "photo",
        "expression": "explain",
        "pose": "explain",
        "position": "left",
        "speaker": "灯"
      },
      {
        "text": "駅の北側を見てから、1945年の記録へ戻りましょう。辻堂駅北側一帯にあった住友特殊製鋼は、海軍向けの鋼をつくり、軍需生産を担った工場でした。",
        "source": "S8",
        "kind": "灯／架空の記録案内人",
        "camera": "factory-reveal",
        "prop": "factory",
        "actor": "guide",
        "speaker": "灯",
        "expression": "explain",
        "pose": "explain",
        "position": "right",
        "shot": "face"
      },
      {
        "text": "最初に見た名前が、ここでつながる。岩見高明さんは藤沢商業学校の学生でした。勤労動員で工場の仕事に就き、防空本部の本部伝令をしていた。",
        "source": "T4",
        "kind": "灯／架空の記録案内人",
        "camera": "messenger",
        "prop": "dispatch",
        "actor": "guide",
        "speaker": "灯",
        "expression": "listen",
        "pose": "listen",
        "position": "left",
        "shot": "face"
      },
      {
        "text": "伝令は、連絡を伝える役だ。学生として働いていた岩見さんに、その朝、何が起きたのだろう。本人が後年に残した言葉を読む。",
        "source": null,
        "kind": "私／創作の来訪者",
        "camera": "testimony",
        "prop": "dispatch",
        "actor": "none",
        "art": "shelter",
        "speaker": "私",
        "expression": "listen",
        "pose": "listen",
        "position": "right",
        "shot": "overlook"
      },
      {
        "text": "7月30日午前8時10分頃から約30分間、艦載機（空母などから飛ぶ軍用機）約20機がこの工場を攻撃した。時刻や機数は概数として記されている。",
        "source": "S4",
        "kind": "灯／架空の記録案内人",
        "camera": "headquarters",
        "prop": "none",
        "actor": "guide",
        "art": "shelter",
        "speaker": "灯",
        "expression": "explain",
        "pose": "explain",
        "position": "left",
        "shot": "face"
      },
      {
        "text": null,
        "source": "T2",
        "kind": "岩見高明氏／後年の回想・直接引用",
        "camera": "headquarters",
        "prop": "none",
        "actor": "none",
        "art": "shelter",
        "speaker": "岩見高明氏",
        "expression": "listen",
        "pose": "listen",
        "position": "right",
        "shot": "testimony"
      },
      {
        "text": null,
        "source": "T1",
        "kind": "岩見高明氏／後年の回想・直接引用",
        "camera": "close",
        "prop": "none",
        "actor": "none",
        "art": "shelter",
        "speaker": "岩見高明氏",
        "expression": "listen",
        "pose": "listen",
        "position": "left",
        "shot": "testimony"
      },
      {
        "text": "私は、その音を聞いたわけではない。それでも「自分がねらわれているような」という言葉で、攻撃の記録が一人の恐怖につながった。",
        "source": null,
        "kind": "私／創作の来訪者",
        "camera": "headquarters",
        "prop": "none",
        "actor": "none",
        "art": "shelter",
        "speaker": "私",
        "expression": "explain",
        "pose": "explain",
        "position": "right",
        "shot": "overlook"
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
        "actor": "none",
        "speaker": "私",
        "expression": "serious",
        "pose": "serious",
        "position": "right",
        "shot": "overlook"
      },
      {
        "text": null,
        "source": "T3",
        "kind": "岩見高明氏／後年の回想・直接引用",
        "camera": "ruin-close",
        "prop": "steel",
        "actor": "none",
        "speaker": "岩見高明氏",
        "expression": "listen",
        "pose": "listen",
        "position": "left",
        "shot": "testimony"
      },
      {
        "text": "工場の被害記録では、従業員4名が即死し、重傷の1名が翌31日に亡くなった。7月30日の攻撃と翌日の死者を合わせて5名となる。",
        "source": "S5",
        "kind": "灯／架空の記録案内人",
        "camera": "ruin-wide",
        "prop": "steel",
        "actor": "guide",
        "speaker": "灯",
        "expression": "serious",
        "pose": "serious",
        "position": "right",
        "shot": "face"
      },
      {
        "text": "数字と、鉄骨だけになったという声。どちらかだけでは伝わらない。ここにいた一人を忘れず、その後の工場も確かめたい。",
        "source": null,
        "kind": "私／創作の来訪者",
        "camera": "ruin-close",
        "prop": "steel",
        "actor": "none",
        "speaker": "私",
        "expression": "serious",
        "pose": "serious",
        "position": "left",
        "shot": "overlook"
      },
      {
        "text": "さっき見た駅北側の2011年の風景を、もう一度。工場の正確な敷地を示す写真ではありません。鉄骨だけになったという言葉を読んだあとでは、同じ町の眺めにも、そこにいた一人を思い浮かべます。",
        "source": null,
        "kind": "灯／架空の記録案内人",
        "camera": "face",
        "prop": "none",
        "actor": "guide",
        "photoId": "P5",
        "shot": "photo",
        "expression": "explain",
        "pose": "explain",
        "position": "left",
        "speaker": "灯"
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
        "actor": "none",
        "speaker": "私",
        "expression": "serious",
        "pose": "serious",
        "position": "right",
        "shot": "overlook"
      },
      {
        "text": "応急修理を終え、作業を再開しようとした8月13日、工場は再び艦載機の空襲を受けた。この攻撃の死傷者はなく、工場被害も軽微でした。",
        "source": "S6",
        "kind": "灯／架空の記録案内人",
        "camera": "repair-close",
        "prop": "repair",
        "actor": "guide",
        "speaker": "灯",
        "expression": "serious",
        "pose": "serious",
        "position": "left",
        "shot": "face"
      },
      {
        "text": "しかし、生産は停止したまま敗戦の日を迎えた。",
        "source": "S6",
        "kind": "灯／架空の記録案内人",
        "camera": "repair-wide",
        "prop": "empty",
        "actor": "guide",
        "speaker": "灯",
        "expression": "serious",
        "pose": "serious",
        "position": "right",
        "shot": "face"
      },
      {
        "text": "工場が止まったまま迎えた戦争の終わり。町にある別の組織では、その日をどう過ごしたのだろう。終わり方まで確かめてから帰りたい。",
        "source": null,
        "kind": "私／創作の来訪者",
        "camera": "gate",
        "prop": "gate",
        "actor": "none",
        "speaker": "私",
        "expression": "serious",
        "pose": "serious",
        "position": "left",
        "shot": "overlook"
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
        "text": "この建物はもとはゴルフ場のクラブハウス。これは完成した1932年の写真。のちに別の組織、藤沢海軍航空隊の司令部に使われた。",
        "source": "S9",
        "kind": "灯／架空の記録案内人",
        "camera": "face",
        "prop": "none",
        "actor": "guide",
        "photoId": "P6",
        "shot": "photo",
        "expression": "explain",
        "pose": "explain",
        "position": "left",
        "speaker": "灯"
      },
      {
        "text": "ここからは工場とは別の組織、藤沢海軍航空隊の記録へ。1944年6月に発足し、無線兵器の整備員を育てる教育隊でした。",
        "source": "L4",
        "kind": "灯／架空の記録案内人",
        "camera": "radio-wide",
        "prop": "radio",
        "actor": "guide",
        "speaker": "灯",
        "expression": "serious",
        "pose": "serious",
        "position": "right",
        "shot": "face"
      },
      {
        "text": "2015年にも撮影された建物を、いま残された場所を知る窓として見る。終戦後すぐ生活が戻ったと決めつけず、隊の数日間を聞く。",
        "source": null,
        "kind": "灯／架空の記録案内人",
        "camera": "face",
        "prop": "none",
        "actor": "guide",
        "photoId": "P7",
        "shot": "photo",
        "expression": "explain",
        "pose": "explain",
        "position": "left",
        "speaker": "灯"
      },
      {
        "text": "終わりを知らせる放送のあと、何が変わったのか。私は、この教育隊に残った数日間を読む。",
        "source": null,
        "kind": "私／創作の来訪者",
        "camera": "radio-close",
        "prop": "radio",
        "actor": "none",
        "speaker": "私",
        "expression": "serious",
        "pose": "serious",
        "position": "left",
        "shot": "overlook"
      },
      {
        "text": "教育隊では8月15日に玉音放送を聞いたものの、その後どう過ごせばよいかわからず、16日と17日に演習を行って過ごしたと記録されている。",
        "source": "S7",
        "kind": "灯／架空の記録案内人",
        "camera": "radio-close",
        "prop": "radio",
        "actor": "guide",
        "speaker": "灯",
        "expression": "serious",
        "pose": "serious",
        "position": "right",
        "shot": "face"
      },
      {
        "text": "8月20日、教育隊は解散式を行った。この部隊の記録は、ここで終わっている。",
        "source": "S7",
        "kind": "灯／架空の記録案内人",
        "camera": "gate",
        "prop": "gate",
        "actor": "guide",
        "speaker": "灯",
        "expression": "serious",
        "pose": "serious",
        "position": "left",
        "shot": "face"
      },
      {
        "text": "工場の停止と、教育隊の解散。同じ終戦の前後にも違う経過があった。読み終えた記録の文字が淡くなり、私の足元に駅の線が戻ってくる。",
        "source": null,
        "kind": "私／創作の来訪者",
        "camera": "crossing",
        "prop": "gate",
        "actor": "none",
        "speaker": "私",
        "expression": "serious",
        "pose": "serious",
        "position": "right",
        "shot": "overlook"
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
        "text": "いつもの辻堂駅の輪郭が戻ってきた。スマホには、最初の記録がある。見慣れた駅と岩見高明さんのつながりを、今は自分の言葉でたどれる。",
        "source": null,
        "kind": "私／創作の来訪者",
        "camera": "return-wide",
        "prop": "phone",
        "actor": "none",
        "speaker": "私",
        "expression": "explain",
        "pose": "explain",
        "position": "right",
        "shot": "photo",
        "photoId": "P1"
      },
      {
        "text": "駅へ戻る途中でもう一人。片瀬生まれの芝実生子さんが、藤沢での暮らしを語る後年の公式記録映像です。岩見高明さんとは別の方で、7月30日の工場襲撃の直接証言ではありません。収録日は未確認です。ここで顔や身振りに会ってから、あなた自身の言葉へ戻りましょう。",
        "source": null,
        "kind": "灯／架空の記録案内人",
        "camera": "face",
        "prop": "none",
        "actor": "guide",
        "videoId": "V2",
        "shot": "video",
        "expression": "listen",
        "pose": "listen",
        "position": "left",
        "speaker": "灯"
      },
      {
        "text": "駅の北側には軍需生産を担う工場があり、岩見さんは学生として動員され、伝令をしていた。その一日に警報が鳴り、恐怖と、鉄骨だけになった光景が残った。",
        "source": null,
        "kind": "私／創作の来訪者",
        "camera": "return-close",
        "prop": "none",
        "actor": "none",
        "speaker": "私",
        "expression": "listen",
        "pose": "listen",
        "position": "left",
        "shot": "overlook"
      },
      {
        "text": "名前だけだった一人が、暮らしも仕事も戦争に組み込まれた町とつながった。私はもう、駅の北側をただの通り道としては見られない。",
        "source": null,
        "kind": "私／創作の来訪者",
        "camera": "return-wide",
        "prop": "none",
        "actor": "none",
        "speaker": "私",
        "expression": "listen",
        "pose": "listen",
        "position": "right",
        "shot": "overlook"
      },
      {
        "text": "あの人が後年に残した言葉と、私がここで考えたこと。その二つを混ぜずに、この場所にいた一人のことを話そう。",
        "source": null,
        "kind": "私／創作の来訪者",
        "camera": "return-close",
        "prop": "none",
        "actor": "none",
        "speaker": "私",
        "expression": "explain",
        "pose": "explain",
        "position": "left",
        "shot": "overlook"
      },
      {
        "text": "あなたが知りたかった場所と一人の関係を、言葉にできましたね。記録はここに残ります。また見慣れた町で、立ち止まりたくなったら。",
        "source": null,
        "kind": "灯／架空の記録案内人",
        "camera": "face",
        "prop": "none",
        "actor": "guide",
        "photoId": "P1",
        "expression": "farewell",
        "pose": "farewell",
        "shot": "face",
        "position": "right",
        "speaker": "灯"
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
