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
  wands: { japanese: "ワンド", english: "WANDS", file: "wand", cards: ["エース", "2", "3", "4", "5", "6", "7", "8", "9", "10", "ペイジ", "ナイト", "クイーン", "キング"] },
  cups: { japanese: "カップ", english: "CUPS", file: "cup", cards: ["エース", "2", "3", "4", "5", "6", "7", "8", "9", "10", "ペイジ", "ナイト", "クイーン", "キング"] },
  swords: { japanese: "ソード", english: "SWORDS", file: "sword", cards: ["エース", "2", "3", "4", "5", "6", "7", "8", "9", "10", "ペイジ", "ナイト", "クイーン", "キング"] },
  pentacles: { japanese: "ペンタクル", english: "PENTACLES", file: "pentacle", cards: ["エース", "2", "3", "4", "5", "6", "7", "8", "9", "10", "ペイジ", "ナイト", "クイーン", "キング"] }
};

const englishRanks = ["ACE", "TWO", "THREE", "FOUR", "FIVE", "SIX", "SEVEN", "EIGHT", "NINE", "TEN", "PAGE", "KNIGHT", "QUEEN", "KING"];

function createCard({ image, number, name, english, isCourt = false, meaning }) {
  const card = document.createElement(meaning ? "button" : "figure");
  const captionTag = meaning ? "span" : "figcaption";
  card.className = `tarot-card${isCourt ? " is-court" : ""}${meaning ? " tarot-card--major" : ""}`;
  if (meaning) {
    card.type = "button";
    card.setAttribute("aria-label", `${name}の意味を読む`);
    card.addEventListener("click", () => showMajorMeaning({ image, number, name, english, ...meaning }));
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
      isCourt: index > 9
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

function showMajorMeaning({ image, number, name, english, keyword, meaning }) {
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
