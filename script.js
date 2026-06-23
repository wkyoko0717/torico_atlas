const majorCards = [
  ["00", "愚者", "THE FOOL"], ["01", "魔術師", "THE MAGICIAN"], ["02", "女教皇", "THE HIGH PRIESTESS"],
  ["03", "女帝", "THE EMPRESS"], ["04", "皇帝", "THE EMPEROR"], ["05", "教皇", "THE HIEROPHANT"],
  ["06", "恋人たち", "THE LOVERS"], ["07", "戦車", "THE CHARIOT"], ["08", "力", "STRENGTH"],
  ["09", "隠者", "THE HERMIT"], ["10", "運命の輪", "WHEEL OF FORTUNE"], ["11", "正義", "JUSTICE"],
  ["12", "吊るされた男", "THE HANGED MAN"], ["13", "死神", "DEATH"], ["14", "節制", "TEMPERANCE"],
  ["15", "悪魔", "THE DEVIL"], ["16", "塔", "THE TOWER"], ["17", "星", "THE STAR"],
  ["18", "月", "THE MOON"], ["19", "太陽", "THE SUN"], ["20", "審判", "JUDGEMENT"], ["21", "世界", "THE WORLD"]
];

const majorMeanings = {
  "00": { keyword: "自由・直感・新しい一歩", meaning: "まだ答えが見えなくても大丈夫。好奇心を信じて、軽やかに始めてみるときです。" },
  "01": { keyword: "創造・意志・可能性", meaning: "手元にある才能や道具を使って、思いを形にする力が育っています。" },
  "02": { keyword: "静けさ・直感・内なる声", meaning: "今は急いで結論を出すより、自分の奥にある感覚を丁寧に聴くときです。" },
  "03": { keyword: "豊かさ・愛・育む力", meaning: "心地よさや喜びを受け取り、時間をかけて育てることで実りにつながります。" },
  "04": { keyword: "安定・責任・土台", meaning: "境界線やルールを整えることが、安心して前へ進むための力になります。" },
  "05": { keyword: "学び・伝統・導き", meaning: "受け継がれてきた知恵や、信頼できる人の言葉にヒントがあります。" },
  "06": { keyword: "選択・つながり・調和", meaning: "大切にしたい価値観に沿って選ぶことで、関係や道筋がはっきりしてきます。" },
  "07": { keyword: "前進・意志・突破力", meaning: "迷いをひとつにまとめて進むとき。自分で手綱を握る意識が鍵です。" },
  "08": { keyword: "勇気・やさしい強さ・自信", meaning: "力で押し切るより、恐れや衝動に寄り添うことで本当の強さが現れます。" },
  "09": { keyword: "探求・内省・小さな灯り", meaning: "ひとりの時間が、次に進むための答えを静かに照らしてくれます。" },
  "10": { keyword: "転機・流れ・タイミング", meaning: "状況は動いています。変化を恐れず、訪れたチャンスをつかむ準備を。" },
  "11": { keyword: "公平・決断・バランス", meaning: "感情だけでなく事実にも目を向けて、納得できる選択を整えるときです。" },
  "12": { keyword: "視点を変える・手放す・待つ", meaning: "立ち止まる時間は無駄ではありません。見方を変えると、新しい意味が見えてきます。" },
  "13": { keyword: "終わり・変容・再生", meaning: "役目を終えたものを手放すことで、新しい自分や流れを迎える余白が生まれます。" },
  "14": { keyword: "調整・節度・穏やかな統合", meaning: "急がず、違うものを少しずつ混ぜ合わせることで、ちょうどよい形が見つかります。" },
  "15": { keyword: "執着・誘惑・気づき", meaning: "苦しさの正体を見つめると、自分を縛っていたものから離れる選択肢が見えてきます。" },
  "16": { keyword: "衝撃・崩壊・本音", meaning: "思い込みが崩れるとき。でも、それはより正直な土台をつくり直す始まりでもあります。" },
  "17": { keyword: "希望・癒し・素直さ", meaning: "遠くにある光を信じて。ありのままの願いを大切にするほど、心は回復していきます。" },
  "18": { keyword: "曖昧さ・想像力・無意識", meaning: "見えにくいときほど、怖さと直感を区別して。一歩ずつ確かめながら進みましょう。" },
  "19": { keyword: "喜び・生命力・肯定", meaning: "素直な喜びを分かち合うとき。自分らしさを隠さず、明るい場所へ出ていけます。" },
  "20": { keyword: "目覚め・振り返り・呼びかけ", meaning: "過去を受け止め直すことで、今の自分が向かいたい場所がはっきりしてきます。" },
  "21": { keyword: "完成・統合・次の世界", meaning: "ここまでの経験がひとつにつながるとき。達成を味わい、次の旅へ進む準備が整っています。" }
};

const suitInfo = {
  wands: {
    japanese: "ワンド", english: "WANDS", file: "wand", accent: "var(--wand)",
    cards: ["エース", "2", "3", "4", "5", "6", "7", "8", "9", "10", "ペイジ", "ナイト", "クイーン", "キング"],
    meanings: [
      ["情熱・始動・ひらめき", "心が動く方向に、小さくても最初の一歩を。新しい意欲が芽生えるときです。"],
      ["展望・選択・可能性", "今いる場所から先を見渡して。次に広げたい世界を選ぶタイミングです。"],
      ["拡大・見通し・前進", "準備してきたことが外の世界へ広がり始めます。少し先の景色を信じて。"],
      ["祝福・居場所・安心", "気の合う人と喜びを分かち合えるとき。安心できる土台を味わいましょう。"],
      ["競争・摩擦・切磋琢磨", "意見の違いや小さな衝突から、今の自分に必要な力を見つけられます。"],
      ["勝利・評価・前進", "努力が見える形になりやすいとき。受け取った評価を次の自信につなげて。"],
      ["信念・防衛・踏ん張り", "自分の大切にしたいことを守るとき。周りの声より、自分の軸を信じて。"],
      ["急展開・速度・知らせ", "物事が思った以上に速く動きます。迷いすぎず、流れに乗る準備を。"],
      ["粘り強さ・境界・備え", "ここまで積み重ねた経験が守りになります。無理はせず、境界線も大切に。"],
      ["責任・負担・抱えすぎ", "頑張りが重荷になっているかも。ひとりで背負わず、手放せるものを探して。"],
      ["ひらめき・探求心・知らせ", "新しいことへの好奇心が、次の情熱を連れてきます。まずは試してみて。"],
      ["突進・情熱・冒険", "勢いは味方です。ただし目的地を見失わないよう、熱量の向きを整えて。"],
      ["自信・魅力・創造性", "自分の中の情熱を堂々と表現するとき。周りを明るくする力があります。"],
      ["ビジョン・統率・決断", "大きな視点で道筋を示すとき。あなたの情熱が周囲を動かしていきます。"]
    ]
  },
  cups: {
    japanese: "カップ", english: "CUPS", file: "cup", accent: "var(--cup)",
    cards: ["エース", "2", "3", "4", "5", "6", "7", "8", "9", "10", "ペイジ", "ナイト", "クイーン", "キング"],
    meanings: [
      ["愛・心の開放・始まり", "気持ちが満ち、新しいつながりが育ち始めるとき。素直な感情を大切に。"],
      ["結びつき・共感・対等さ", "互いを尊重できる関係が育ちます。心を開いた対話が鍵です。"],
      ["喜び・祝福・分かち合い", "仲間や友人との時間が心を満たします。嬉しいことは遠慮なく分かち合って。"],
      ["停滞・見落とし・内省", "目の前のことに心が動かないなら、少し休んで本当に欲しいものを見つめて。"],
      ["喪失・悲しみ・残されたもの", "失ったものを悲しむ時間も大切です。同時に、まだ手元にある愛にも目を向けて。"],
      ["懐かしさ・純粋さ・贈り物", "過去の温かな記憶がヒントに。無邪気な気持ちを取り戻すときです。"],
      ["選択肢・夢・見極め", "魅力的な可能性が多いときほど、願いと現実を丁寧に見分けましょう。"],
      ["離れる・探求・次の段階", "今の場所を離れる勇気が必要なとき。心が求める深い意味を探しにいきましょう。"],
      ["満足・願い・喜び", "望んでいたものを受け取れるとき。自分を満たすことを許してあげて。"],
      ["調和・家族・心の豊かさ", "安心できるつながりの中で、喜びが広がります。感謝を言葉にしてみて。"],
      ["感受性・ときめき・優しい知らせ", "小さなときめきや直感を大切に。心に届くメッセージがありそうです。"],
      ["ロマンス・理想・誘い", "心を動かす誘いが訪れるかも。理想を描きながらも、誠実さを忘れずに。"],
      ["共感・受容・深い直感", "自分や誰かの気持ちを、判断せず受け止める力が育っています。"],
      ["安定・成熟・思いやり", "感情に飲まれず、温かなまなざしで状況を受け止められるときです。"]
    ]
  },
  swords: {
    japanese: "ソード", english: "SWORDS", file: "sword", accent: "var(--sword)",
    cards: ["エース", "2", "3", "4", "5", "6", "7", "8", "9", "10", "ペイジ", "ナイト", "クイーン", "キング"],
    meanings: [
      ["明晰さ・決断・真実", "考えがクリアになるとき。曖昧にせず、本音に沿った決断をしていきましょう。"],
      ["保留・均衡・静かな選択", "すぐに答えを出さなくても大丈夫。心と頭が整うまで、少し待つ選択もあります。"],
      ["痛み・別れ・真実", "心が痛む出来事にも、受け止めることで次へ進むための真実が含まれています。"],
      ["休息・回復・距離を置く", "考え続けることをいったん休んで。静かな時間が、次の判断力を回復させます。"],
      ["衝突・勝ち負け・後味", "勝つことよりも、何を守りたいのかを見直して。対立から離れる選択も強さです。"],
      ["移行・回復・穏やかな場所", "大変だった場所を少しずつ離れ、新しい落ち着きを求めて進むときです。"],
      ["戦略・工夫・慎重さ", "正面からぶつからず、賢く進む工夫を。自分にも周りにも誠実であることを忘れずに。"],
      ["制限・思い込み・解放", "動けない理由の一部は、心の中の思い込みかもしれません。小さな出口を探して。"],
      ["不安・心配・夜の思考", "不安をひとりで抱え込まないで。言葉にするだけで、重さが少し和らぐことがあります。"],
      ["終わり・限界・再出発", "ひとつの流れが終わるとき。底に見える場所からこそ、新しい朝が始まります。"],
      ["好奇心・観察・率直さ", "知りたい気持ちが強まるとき。集めた情報を、自分の言葉で確かめて。"],
      ["迅速・主張・突破", "迷いを断ち切って進む力があります。急ぎすぎて大切な人を置き去りにしないように。"],
      ["明晰さ・自立・境界線", "やさしさと率直さを両立するとき。自分にとっての真実を、堂々と選べます。"],
      ["知性・判断・客観性", "感情に流されず、全体を見渡す力があります。公平な判断が道を整えます。"]
    ]
  },
  pentacles: {
    japanese: "ペンタクル", english: "PENTACLES", file: "pentacle", accent: "var(--pentacle)",
    cards: ["エース", "2", "3", "4", "5", "6", "7", "8", "9", "10", "ペイジ", "ナイト", "クイーン", "キング"],
    meanings: [
      ["機会・豊かさ・種まき", "現実的なチャンスが芽生えるとき。小さな種を大切に育てていきましょう。"],
      ["調整・柔軟さ・バランス", "複数のことを軽やかにやりくりするとき。変化に合わせて優先順位を整えて。"],
      ["協働・技術・積み重ね", "ひとりで抱えず、得意な人と力を合わせて。丁寧な仕事が形になります。"],
      ["保持・安心・手放し", "守りたいものがあるとき。ただ、握りしめすぎない余白も豊かさにつながります。"],
      ["不足・孤立・助けを求める", "苦しいときほど、支えは意外と近くにあります。助けを受け取ることも力です。"],
      ["分かち合い・支援・循環", "与えることと受け取ることのバランスを。豊かさは巡らせるほど育っていきます。"],
      ["忍耐・見直し・育成", "すぐの結果を求めず、ここまでの努力を振り返って。次の手入れを考えるときです。"],
      ["習得・集中・職人気質", "地道な練習が確かな力になります。目の前のことを丁寧に仕上げましょう。"],
      ["自立・実り・心地よさ", "自分で育てた豊かさを味わうとき。今あるものに目を向けて、ゆったり受け取って。"],
      ["継承・基盤・長い豊かさ", "積み重ねてきたものが、未来の安心につながります。受け継ぐものを大切に。"],
      ["学び・実用性・着実な一歩", "知識を現実に活かす準備が整っています。好奇心を、具体的な行動へ。"],
      ["着実・責任・継続", "派手さより確かさを選ぶとき。毎日の小さな約束が、大きな信頼をつくります。"],
      ["豊かさ・世話・実用的な愛", "暮らしを整え、身近な人を大切にする力があります。心地よさを育てて。"],
      ["安定・達成・堅実な力", "長期的な視点で成果を守り育てるとき。積み上げた経験が頼もしい土台です。"]
    ]
  }
};

const englishRanks = ["ACE", "TWO", "THREE", "FOUR", "FIVE", "SIX", "SEVEN", "EIGHT", "NINE", "TEN", "PAGE", "KNIGHT", "QUEEN", "KING"];

function createCard({ image, number, name, english, isCourt = false, meaning, accent }) {
  const card = document.createElement(meaning ? "button" : "figure");
  const captionTag = meaning ? "span" : "figcaption";
  card.className = `tarot-card${isCourt ? " is-court" : ""}${meaning ? " tarot-card--interactive" : ""}`;
  if (meaning) {
    card.type = "button";
    card.setAttribute("aria-label", `${name}の意味を読む`);
    card.style.setProperty("--card-accent", accent || "var(--major)");
    card.addEventListener("click", () => showCardMeaning({ image, number, name, english, accent, ...meaning }));
  }
  card.innerHTML = `
    <div class="card-image"><img src="${image}" alt="${name}（${english}）" loading="lazy"></div>
    <${captionTag} class="card-caption"><span class="card-number">${number}</span><span class="card-name">${name}</span></${captionTag}>`;
  return card;
}

const majorGrid = document.querySelector("#major-grid");
majorCards.forEach(([number, name, english]) => {
  majorGrid.append(createCard({
    image: `images/tarot_${number}.png.webp`,
    number: number === "00" ? "0 · MAJOR" : `${Number(number)} · MAJOR`,
    name,
    english,
    meaning: majorMeanings[number]
  }));
});

Object.entries(suitInfo).forEach(([suit, info]) => {
  const grid = document.querySelector(`#${suit}-grid`);
  info.cards.forEach((rank, index) => {
    const cardNumber = String(index + 1).padStart(2, "0");
    grid.append(createCard({
      image: `images/tarot_${info.file}_${cardNumber}.png.webp`,
      number: `${cardNumber} · ${info.english}`,
      name: `${info.japanese}の${rank}`,
      english: `${englishRanks[index]} OF ${info.english}`,
      isCourt: index > 9,
      accent: info.accent,
      meaning: { keyword: info.meanings[index][0], meaning: info.meanings[index][1] }
    }));
  });
});

const sections = [...document.querySelectorAll("[data-section]")];
const filters = [...document.querySelectorAll(".filter")];
const filterMap = { all: ["major", "minor", "wands", "cups", "swords", "pentacles", "court"], minor: ["minor", "wands", "cups", "swords", "pentacles"], court: ["court", "wands", "cups", "swords", "pentacles"] };

function setFilter(filter) {
  const visible = filterMap[filter] || [filter];
  sections.forEach(section => {
    const sectionName = section.dataset.section;
    const show = visible.includes(sectionName);
    section.classList.toggle("is-hidden", !show);
    if (filter === "court" && ["wands", "cups", "swords", "pentacles"].includes(sectionName)) {
      section.querySelectorAll(".tarot-card").forEach(card => card.classList.toggle("is-hidden", !card.classList.contains("is-court")));
    } else {
      section.querySelectorAll(".tarot-card").forEach(card => card.classList.remove("is-hidden"));
    }
  });
  filters.forEach(button => button.classList.toggle("is-active", button.dataset.filter === filter));
  if (filter !== "all") document.querySelector(`[data-section="${filter}"]`)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

filters.forEach(button => button.addEventListener("click", () => setFilter(button.dataset.filter)));

const cardModal = document.querySelector("#card-modal");
const modalImage = document.querySelector("#modal-card-image");
const modalNumber = document.querySelector("#modal-card-number");
const modalName = document.querySelector("#modal-card-name");
const modalEnglish = document.querySelector("#modal-card-english");
const modalKeyword = document.querySelector("#modal-card-keyword");
const modalMeaning = document.querySelector("#modal-card-meaning");

function showCardMeaning({ image, number, name, english, keyword, meaning, accent }) {
  cardModal.style.setProperty("--modal-accent", accent || "var(--major)");
  modalImage.src = image;
  modalImage.alt = `${name}（${english}）`;
  modalNumber.textContent = number;
  modalName.textContent = name;
  modalEnglish.textContent = english;
  modalKeyword.textContent = keyword;
  modalMeaning.textContent = meaning;
  cardModal.showModal();
}

document.querySelector(".card-modal__close").addEventListener("click", () => cardModal.close());
cardModal.addEventListener("click", event => {
  if (event.target === cardModal) cardModal.close();
});
