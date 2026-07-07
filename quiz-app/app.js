const QUESTION_LIMIT = 30;
const STORAGE_KEY = "nkdl-quiz-9-chapters-state-v2";
const THEME_KEY = "nkdl-quiz-theme-v1";
const CHAPTERS = Array.from({ length: 9 }, (_, index) => {
  const chapter = index + 1;
  return {
    id: String(chapter),
    title: `Chương ${chapter}`,
    source: `../TracNghiem_Chuong${chapter}_NhaKhoDuLieuVaTichHop.md`,
  };
});
const HARD_QUIZ = {
  id: "hard",
  title: "Câu khó / câu bẫy",
  source: "../BoSung_CauHoi_Kho_DeThi.md",
};
const FINAL_QUIZ = {
  id: "final100",
  title: "Đề tổng hợp 100 câu",
  source: "../quiz_sources/de_tong_hop_100_nkdl_th.md",
  limit: 100,
};
const QUIZ_BANKS = [...CHAPTERS, HARD_QUIZ, FINAL_QUIZ];

const els = {
  loadingState: document.querySelector("#loadingState"),
  questionCard: document.querySelector("#questionCard"),
  summaryCard: document.querySelector("#summaryCard"),
  appTitle: document.querySelector("#appTitle"),
  quizSubtitle: document.querySelector("#quizSubtitle"),
  themeToggle: document.querySelector("#themeToggle"),
  themeIcon: document.querySelector("#themeIcon"),
  themeText: document.querySelector("#themeText"),
  sectionLabel: document.querySelector("#sectionLabel"),
  questionNumber: document.querySelector("#questionNumber"),
  questionText: document.querySelector("#questionText"),
  optionsList: document.querySelector("#optionsList"),
  feedbackBox: document.querySelector("#feedbackBox"),
  prevBtn: document.querySelector("#prevBtn"),
  nextBtn: document.querySelector("#nextBtn"),
  checkBtn: document.querySelector("#checkBtn"),
  restartBtn: document.querySelector("#restartBtn"),
  newExamBtn: document.querySelector("#newExamBtn"),
  resetBtn: document.querySelector("#resetBtn"),
  reviewWrongBtn: document.querySelector("#reviewWrongBtn"),
  summaryRestartBtn: document.querySelector("#summaryRestartBtn"),
  chapterSelect: document.querySelector("#chapterSelect"),
  modeSelect: document.querySelector("#modeSelect"),
  shuffleToggle: document.querySelector("#shuffleToggle"),
  jumpSelect: document.querySelector("#jumpSelect"),
  progressText: document.querySelector("#progressText"),
  progressBar: document.querySelector("#progressBar"),
  correctCount: document.querySelector("#correctCount"),
  wrongCount: document.querySelector("#wrongCount"),
  scoreText: document.querySelector("#scoreText"),
  summaryTitle: document.querySelector("#summaryTitle"),
  summaryText: document.querySelector("#summaryText"),
};

let allQuestions = [];
let answers = {};
let examIds = [];
let viewIds = [];
let currentIndex = 0;
let chapterMode = "mixed";
let mode = "all";
let shuffle = true;
let theme = "light";

function normalize(text) {
  return text.replace(/\r\n/g, "\n").trim();
}

function parseMarkdown(markdown, chapter) {
  const text = normalize(markdown);
  const answerStart = text.lastIndexOf("\n## ");
  const questionPart = answerStart >= 0 ? text.slice(0, answerStart) : text;
  const answerPart = answerStart >= 0 ? text.slice(answerStart) : "";
  const answerMap = {};

  for (const line of answerPart.split("\n")) {
    const match = line.match(/^(\d+)\.\s+([A-D])\s+-\s+(.*)$/);
    if (match) {
      answerMap[Number(match[1])] = {
        correct: match[2],
        explanation: match[3].trim(),
      };
    }
  }

  const lines = questionPart.split("\n");
  const parsed = [];
  let section = "";
  let current = null;

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) continue;

    const sectionMatch = line.match(/^###\s+(.+)$/);
    if (sectionMatch) {
      section = sectionMatch[1].trim();
      continue;
    }

    const questionMatch = line.match(/^\*\*\S+\s+(\d+)\.\*\*\s+(.+)$/);
    if (questionMatch) {
      if (current) parsed.push(current);
      const number = Number(questionMatch[1]);
      current = {
        uid: `${chapter === HARD_QUIZ.id ? "H" : chapter === FINAL_QUIZ.id ? "F100" : `C${chapter}`}-${number}`,
        id: number,
        chapter: String(chapter),
        chapterTitle: QUIZ_BANKS.find((item) => item.id === String(chapter))?.title || `Chương ${chapter}`,
        section,
        text: questionMatch[2].trim(),
        options: [],
        correct: answerMap[number]?.correct || "",
        explanation: answerMap[number]?.explanation || "",
      };
      continue;
    }

    const optionMatch = line.match(/^([A-D])\.\s+(.+?)\s*$/);
    if (optionMatch && current) {
      current.options.push({
        key: optionMatch[1],
        text: optionMatch[2].replace(/\s{2,}$/g, "").trim(),
      });
    }
  }

  if (current) parsed.push(current);
  return parsed.filter((item) => item.options.length === 4 && item.correct);
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    answers = saved.answers || {};
    examIds = saved.examIds || [];
    chapterMode = saved.chapterMode || "mixed";
    mode = saved.mode || "all";
    shuffle = saved.shuffle !== undefined ? Boolean(saved.shuffle) : true;
    currentIndex = Number(saved.currentIndex || 0);
  } catch {
    answers = {};
    examIds = [];
  }
}

function saveState() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({ answers, examIds, chapterMode, mode, shuffle, currentIndex })
  );
}

function applyTheme(nextTheme) {
  theme = nextTheme === "dark" ? "dark" : "light";
  document.body.classList.toggle("dark", theme === "dark");
  els.themeToggle.setAttribute("aria-pressed", String(theme === "dark"));
  els.themeIcon.textContent = theme === "dark" ? "☀" : "☾";
  els.themeText.textContent = theme === "dark" ? "Light mode" : "Dark mode";
  localStorage.setItem(THEME_KEY, theme);
}

function loadTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  if (saved) {
    applyTheme(saved);
    return;
  }
  const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
  applyTheme(prefersDark ? "dark" : "light");
}

function shuffled(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function takeRandom(items, count) {
  return shuffled(items).slice(0, Math.min(count, items.length));
}

function getQuestion(uid) {
  return allQuestions.find((item) => item.uid === uid);
}

function createExam() {
  answers = {};
  currentIndex = 0;
  mode = "all";

  if (chapterMode !== "mixed") {
    const pool = allQuestions.filter((q) => q.chapter === chapterMode);
    const bank = QUIZ_BANKS.find((item) => item.id === chapterMode);
    examIds = takeRandom(pool, bank?.limit || QUESTION_LIMIT).map((q) => q.uid);
  } else {
    const chapters = shuffled(CHAPTERS);
    const baseCount = Math.floor(QUESTION_LIMIT / CHAPTERS.length);
    let remainder = QUESTION_LIMIT % CHAPTERS.length;
    const selected = [];

    for (const chapter of chapters) {
      const target = baseCount + (remainder > 0 ? 1 : 0);
      remainder -= 1;
      const pool = allQuestions.filter((q) => q.chapter === chapter.id);
      selected.push(...takeRandom(pool, target));
    }

    examIds = shuffled(selected).slice(0, QUESTION_LIMIT).map((q) => q.uid);
  }

  if (!shuffle) {
    examIds.sort((a, b) => {
      const qa = getQuestion(a);
      const qb = getQuestion(b);
      return Number(qa.chapter) - Number(qb.chapter) || qa.id - qb.id;
    });
  }

  els.modeSelect.value = mode;
  saveState();
}

function ensureExam() {
  const validIds = new Set(allQuestions.map((q) => q.uid));
  const isUsable = examIds.length && examIds.every((id) => validIds.has(id));
  if (!isUsable) createExam();
}

function buildViewIds() {
  let list = [...examIds];
  if (mode === "wrong") {
    list = list.filter((id) => answers[id]?.checked && !answers[id]?.isCorrect);
  }
  if (mode === "unanswered") {
    list = list.filter((id) => !answers[id]?.checked);
  }
  viewIds = list;
  currentIndex = Math.min(currentIndex, Math.max(viewIds.length - 1, 0));
}

function getCurrentQuestion() {
  return getQuestion(viewIds[currentIndex]);
}

function getChapterLabel() {
  if (chapterMode === "mixed") return "Tổng hợp 9 chương";
  if (chapterMode === HARD_QUIZ.id) return HARD_QUIZ.title;
  if (chapterMode === FINAL_QUIZ.id) return FINAL_QUIZ.title;
  return `Chương ${chapterMode}`;
}

function updateTitle() {
  els.appTitle.textContent = getChapterLabel();
  const counts = CHAPTERS.map((chapter) => {
    const count = examIds.filter((id) => getQuestion(id)?.chapter === chapter.id).length;
    return count ? `C${chapter.id}: ${count}` : "";
  }).filter(Boolean);
  els.quizSubtitle.textContent =
    chapterMode === "mixed"
      ? `Đề ${examIds.length} câu - ${counts.join(", ")}`
      : chapterMode === HARD_QUIZ.id
        ? `Đề ${examIds.length} câu bẫy`
      : `Đề ${examIds.length} câu`;
}

function updateStats() {
  const checked = examIds.map((id) => answers[id]).filter((item) => item?.checked);
  const correct = checked.filter((item) => item.isCorrect).length;
  const wrong = checked.length - correct;
  const percent = checked.length ? Math.round((correct / checked.length) * 100) : 0;
  const total = viewIds.length || examIds.length;
  const progress = total ? Math.round(((currentIndex + (viewIds.length ? 1 : 0)) / total) * 100) : 0;

  els.progressText.textContent = `${viewIds.length ? currentIndex + 1 : 0}/${total}`;
  els.progressBar.style.width = `${Math.min(progress, 100)}%`;
  els.correctCount.textContent = String(correct);
  els.wrongCount.textContent = String(wrong);
  els.scoreText.textContent = `${percent}%`;
}

function updateJumpSelect() {
  els.jumpSelect.innerHTML = "";
  viewIds.forEach((uid, index) => {
    const q = getQuestion(uid);
    const option = document.createElement("option");
    const state = answers[uid]?.checked ? (answers[uid].isCorrect ? "đúng" : "sai") : "chưa làm";
    option.value = String(index);
    option.textContent = `${q.chapterTitle} - Câu ${q.id} - ${state}`;
    els.jumpSelect.appendChild(option);
  });
  els.jumpSelect.value = String(currentIndex);
}

function renderSummary(emptyMessage = "") {
  const checked = examIds.map((id) => answers[id]).filter((item) => item?.checked);
  const correct = checked.filter((item) => item.isCorrect).length;
  const wrong = checked.length - correct;
  const percent = checked.length ? Math.round((correct / checked.length) * 100) : 0;

  updateTitle();
  els.loadingState.classList.add("hidden");
  els.questionCard.classList.add("hidden");
  els.summaryCard.classList.remove("hidden");
  els.summaryTitle.textContent = emptyMessage || "Hoàn thành";
  els.summaryText.textContent = emptyMessage
    ? "Đổi chế độ, tạo đề mới hoặc bấm làm lại để tiếp tục luyện."
    : `Bạn đã làm ${checked.length}/${examIds.length} câu. Đúng ${correct}, sai ${wrong}, điểm hiện tại ${percent}%.`;
  els.reviewWrongBtn.disabled = wrong === 0;
  updateStats();
}

function renderQuestion() {
  ensureExam();
  buildViewIds();
  updateTitle();
  updateStats();
  updateJumpSelect();

  if (!viewIds.length) {
    const label =
      mode === "wrong"
        ? "Không có câu sai để ôn"
        : mode === "unanswered"
          ? "Không còn câu chưa làm"
          : "Chưa có câu hỏi";
    renderSummary(label);
    return;
  }

  const q = getCurrentQuestion();
  const selected = answers[q.uid]?.selected || "";
  const checked = Boolean(answers[q.uid]?.checked);

  els.loadingState.classList.add("hidden");
  els.summaryCard.classList.add("hidden");
  els.questionCard.classList.remove("hidden");
  els.sectionLabel.textContent = `${q.chapterTitle} - ${q.section}`;
  els.questionNumber.textContent = `Câu ${q.id}`;
  els.questionText.textContent = q.text;
  els.optionsList.innerHTML = "";
  els.feedbackBox.className = "feedback hidden";
  els.feedbackBox.textContent = "";

  q.options.forEach((option) => {
    const button = document.createElement("button");
    button.className = "option";
    button.type = "button";
    button.dataset.key = option.key;
    button.disabled = checked;
    if (selected === option.key) button.classList.add("selected");
    if (checked && option.key === q.correct) button.classList.add("correct");
    if (checked && selected === option.key && selected !== q.correct) button.classList.add("wrong");
    button.innerHTML = `<span class="option-key">${option.key}</span><span>${option.text}</span>`;
    button.addEventListener("click", () => {
      answers[q.uid] = { selected: option.key, checked: false, isCorrect: false };
      saveState();
      renderQuestion();
    });
    els.optionsList.appendChild(button);
  });

  if (checked) {
    const isCorrect = answers[q.uid].isCorrect;
    els.feedbackBox.className = `feedback ${isCorrect ? "good" : "bad"}`;
    els.feedbackBox.textContent = `${isCorrect ? "Đúng" : `Sai. Đáp án đúng là ${q.correct}`}. ${q.explanation}`;
  }

  els.prevBtn.disabled = currentIndex === 0;
  els.nextBtn.disabled = currentIndex >= viewIds.length - 1;
  els.checkBtn.disabled = !selected || checked;
  els.jumpSelect.value = String(currentIndex);
}

function checkCurrent() {
  const q = getCurrentQuestion();
  if (!q) return;
  const selected = answers[q.uid]?.selected;
  if (!selected) return;
  answers[q.uid] = {
    selected,
    checked: true,
    isCorrect: selected === q.correct,
  };
  saveState();
  renderQuestion();
}

function restartCurrentExam() {
  for (const id of examIds) {
    delete answers[id];
  }
  currentIndex = 0;
  mode = "all";
  els.modeSelect.value = mode;
  saveState();
  renderQuestion();
}

function bindEvents() {
  els.themeToggle.addEventListener("click", () => {
    applyTheme(theme === "dark" ? "light" : "dark");
  });

  els.prevBtn.addEventListener("click", () => {
    currentIndex = Math.max(0, currentIndex - 1);
    saveState();
    renderQuestion();
  });

  els.nextBtn.addEventListener("click", () => {
    if (currentIndex >= viewIds.length - 1) {
      renderSummary();
      return;
    }
    currentIndex += 1;
    saveState();
    renderQuestion();
  });

  els.checkBtn.addEventListener("click", checkCurrent);
  els.restartBtn.addEventListener("click", restartCurrentExam);
  els.summaryRestartBtn.addEventListener("click", restartCurrentExam);

  els.newExamBtn.addEventListener("click", () => {
    createExam();
    renderQuestion();
  });

  els.resetBtn.addEventListener("click", () => {
    answers = {};
    currentIndex = 0;
    saveState();
    renderQuestion();
  });

  els.reviewWrongBtn.addEventListener("click", () => {
    mode = "wrong";
    currentIndex = 0;
    els.modeSelect.value = mode;
    saveState();
    renderQuestion();
  });

  els.chapterSelect.addEventListener("change", () => {
    chapterMode = els.chapterSelect.value;
    createExam();
    renderQuestion();
  });

  els.modeSelect.addEventListener("change", () => {
    mode = els.modeSelect.value;
    currentIndex = 0;
    saveState();
    renderQuestion();
  });

  els.shuffleToggle.addEventListener("change", () => {
    shuffle = els.shuffleToggle.checked;
    createExam();
    renderQuestion();
  });

  els.jumpSelect.addEventListener("change", () => {
    currentIndex = Number(els.jumpSelect.value);
    saveState();
    renderQuestion();
  });

  document.addEventListener("keydown", (event) => {
    const q = getCurrentQuestion();
    if (!q) return;
    const key = event.key.toUpperCase();
    if (["A", "B", "C", "D"].includes(key)) {
      answers[q.uid] = { selected: key, checked: false, isCorrect: false };
      saveState();
      renderQuestion();
    }
    if (event.key === "Enter") checkCurrent();
    if (event.key === "ArrowRight" && currentIndex < viewIds.length - 1) {
      currentIndex += 1;
      saveState();
      renderQuestion();
    }
    if (event.key === "ArrowLeft" && currentIndex > 0) {
      currentIndex -= 1;
      saveState();
      renderQuestion();
    }
  });
}

async function init() {
  loadTheme();
  bindEvents();
  loadState();
  els.chapterSelect.value = chapterMode;
  els.modeSelect.value = mode;
  els.shuffleToggle.checked = shuffle;

  try {
    const sources = QUIZ_BANKS;
    const chapterQuestions = await Promise.all(
      sources.map(async (chapter) => {
        const response = await fetch(chapter.source);
        if (!response.ok) throw new Error(`${chapter.title}: HTTP ${response.status}`);
        const markdown = await response.text();
        const parsed = parseMarkdown(markdown, chapter.id);
        if (!parsed.length) throw new Error(`Không parse được ${chapter.title}`);
        return parsed;
      })
    );
    allQuestions = chapterQuestions.flat();
    ensureExam();
    renderQuestion();
  } catch (error) {
    els.loadingState.textContent =
      "Không tải được file câu hỏi. Hãy chạy app qua server local trong thư mục dự án.";
    console.error(error);
  }
}

init();
