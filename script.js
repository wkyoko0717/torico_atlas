const majorCards = [
  ["00", "愚者", "THE FOOL"], ["01", "魔術師", "THE MAGICIAN"], ["02", "女教皇", "THE HIGH PRIESTESS"],
  ["03", "女帝", "THE EMPRESS"], ["04", "皇帝", "THE EMPEROR"], ["05", "教皇", "THE HIEROPHANT"],
  ["06", "恋人たち", "THE LOVERS"], ["07", "戦車", "THE CHARIOT"], ["08", "力", "STRENGTH"],
  ["09", "隠者", "THE HERMIT"], ["10", "運命の輪", "WHEEL OF FORTUNE"], ["11", "正義", "JUSTICE"],
  ["12", "吊るされた男", "THE HANGED MAN"], ["13", "死神", "DEATH"], ["14", "節制", "TEMPERANCE"],
  ["15", "悪魔", "THE DEVIL"], ["16", "塔", "THE TOWER"], ["17", "星", "THE STAR"],
  ["18", "月", "THE MOON"], ["19", "太陽", "THE SUN"], ["20", "審判", "JUDGEMENT"], ["21", "世界", "THE WORLD"]
];

const suitInfo = {
  wands: { japanese: "ワンド", english: "WANDS", file: "wand", cards: ["エース", "2", "3", "4", "5", "6", "7", "8", "9", "10", "ペイジ", "ナイト", "クイーン", "キング"] },
  cups: { japanese: "カップ", english: "CUPS", file: "cup", cards: ["エース", "2", "3", "4", "5", "6", "7", "8", "9", "10", "ペイジ", "ナイト", "クイーン", "キング"] },
  swords: { japanese: "ソード", english: "SWORDS", file: "sword", cards: ["エース", "2", "3", "4", "5", "6", "7", "8", "9", "10", "ペイジ", "ナイト", "クイーン", "キング"] },
  pentacles: { japanese: "ペンタクル", english: "PENTACLES", file: "pentacle", cards: ["エース", "2", "3", "4", "5", "6", "7", "8", "9", "10", "ペイジ", "ナイト", "クイーン", "キング"] }
};

const englishRanks = ["ACE", "TWO", "THREE", "FOUR", "FIVE", "SIX", "SEVEN", "EIGHT", "NINE", "TEN", "PAGE", "KNIGHT", "QUEEN", "KING"];

function createCard({ image, number, name, english, isCourt = false }) {
  const figure = document.createElement("figure");
  figure.className = `tarot-card${isCourt ? " is-court" : ""}`;
  figure.innerHTML = `
    <div class="card-image"><img src="${image}" alt="${name}（${english}）" loading="lazy"></div>
    <figcaption class="card-caption"><span class="card-number">${number}</span><span class="card-name">${name}</span></figcaption>`;
  return figure;
}

const majorGrid = document.querySelector("#major-grid");
majorCards.forEach(([number, name, english]) => {
  majorGrid.append(createCard({ image: `images/tarot_${number}.png.webp`, number: number === "00" ? "0 · MAJOR" : `${Number(number)} · MAJOR`, name, english }));
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
