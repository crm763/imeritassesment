// ===== Timer: 60 minutes =====
const TOTAL_TIME_SECONDS = 60 * 60;

// ===== Questions (same 40 MCQs as earlier) =====
const questions = [
  { id: 1, text: "What is data annotation?", type: "mcq", required: true,
    options: ["Data deletion","Data labeling for ML models","Data compression","Data encryption"] },
  { id: 2, text: "Why is data annotation important?", type: "mcq", required: true,
    options: ["To increase internet speed","To train machine learning models","To store data","To secure data"] },
  { id: 3, text: "Which type of data is commonly annotated?", type: "mcq", required: true,
    options: ["Images","Text","Audio","All of the above"] },
  { id: 4, text: "Bounding boxes are mainly used in:", type: "mcq", required: true,
    options: ["Text labeling","Image classification","Object detection","Data cleaning"] },
  { id: 5, text: "What is image annotation?", type: "mcq", required: true,
    options: ["Editing photos","Adding labels to images","Compressing images","Uploading images"] },
  { id: 6, text: "What does NLP stand for?", type: "mcq", required: true,
    options: ["Neural Learning Process","Natural Language Processing","Network Language Protocol","New Learning Program"] },
  { id: 7, text: "Which tool is commonly used for annotation?", type: "mcq", required: true,
    options: ["MS Word","Excel","LabelImg","PowerPoint"] },
  { id: 8, text: "What is semantic segmentation?", type: "mcq", required: true,
    options: ["Dividing text into words","Labeling entire images","Pixel-wise classification","Audio splitting"] },
  { id: 9, text: "What is OCR related to?", type: "mcq", required: true,
    options: ["Audio recognition","Image detection","Text extraction from images","Video editing"] },
  { id: 10, text: "What is data quality?", type: "mcq", required: true,
    options: ["Speed of internet","Accuracy and consistency of data","Size of data","Color of data"] },
  { id: 11, text: "What is annotation guideline?", type: "mcq", required: true,
    options: ["Software manual","Rules for labeling data","Internet policy","Project budget"] },
  { id: 12, text: "Which format is common for annotated data?", type: "mcq", required: true,
    options: ["JPG","PNG","JSON","MP3"] },
  { id: 13, text: "What is sentiment analysis?", type: "mcq", required: true,
    options: ["Detecting objects","Finding emotions in text","Image resizing","Audio filtering"] },
  { id: 14, text: "What is entity recognition?", type: "mcq", required: true,
    options: ["Finding colors","Finding names, places, dates","Image cropping","Audio trimming"] },
  { id: 15, text: "What is audio annotation used for?", type: "mcq", required: true,
    options: ["Music creation","Speech recognition training","File compression","Virus detection"] },
  { id: 16, text: "What is polygon annotation used for?", type: "mcq", required: true,
    options: ["Square objects only","Circular objects","Irregular shaped objects","Text labeling"] },
  { id: 17, text: "What does QA mean in data annotation?", type: "mcq", required: true,
    options: ["Quick Access","Quality Assurance","Question Answer","Quantum Analysis"] },
  { id: 18, text: "What is inter-annotator agreement?", type: "mcq", required: true,
    options: ["Internet speed","Tool compatibility","Consistency between annotators","Data size"] },
  { id: 19, text: "What is classification annotation?", type: "mcq", required: true,
    options: ["Drawing boxes","Assigning category labels","Removing noise","Encrypting data"] },
  { id: 20, text: "What is transcription?", type: "mcq", required: true,
    options: ["Image editing","Converting speech to text","File transfer","Data backup"] },
  { id: 21, text: "What is tagging?", type: "mcq", required: true,
    options: ["Deleting data","Adding labels","Compressing data","Encrypting data"] },
  { id: 22, text: "Which industry uses data annotation heavily?", type: "mcq", required: true,
    options: ["AI & ML","Agriculture only","Banking only","Sports only"] },
  { id: 23, text: "What is a dataset?", type: "mcq", required: true,
    options: ["Single file","Collection of data","Software","Hardware"] },
  { id: 24, text: "What is active learning?", type: "mcq", required: true,
    options: ["Human training","Model selects data to label","Data deletion","File sharing"] },
  { id: 25, text: "What is data preprocessing?", type: "mcq", required: true,
    options: ["Final testing","Cleaning and preparing data","Model deployment","Result sharing"] },
  { id: 26, text: "What is overfitting?", type: "mcq", required: true,
    options: ["Model performs well on all data","Model memorizes training data only","Data is lost","Data is encrypted"] },
  { id: 27, text: "What is ground truth?", type: "mcq", required: true,
    options: ["Fake data","Predicted data","Correct labeled data","Random data"] },
  { id: 28, text: "What is annotation accuracy?", type: "mcq", required: true,
    options: ["Speed of labeling","Correctness of labels","Data size","Tool type"] },
  { id: 29, text: "What is metadata?", type: "mcq", required: true,
    options: ["Raw data","Data about data","Deleted data","Image data only"] },
  { id: 30, text: "What is spam classification?", type: "mcq", required: true,
    options: ["Image editing","Audio labeling","Classifying messages as spam or not","Video cutting"] },
  { id: 31, text: "What is chatbot training based on?", type: "mcq", required: true,
    options: ["Random data","Annotated conversations","Images only","Hardware"] },
  { id: 32, text: "What is data validation?", type: "mcq", required: true,
    options: ["Data deletion","Checking data correctness","Data compression","Data hiding"] },
  { id: 33, text: "What is a label?", type: "mcq", required: true,
    options: ["File name","Data category","Software","Hardware"] },
  { id: 34, text: "What is image classification?", type: "mcq", required: true,
    options: ["Drawing boxes","Labeling whole image","Pixel labeling","Audio tagging"] },
  { id: 35, text: "What is bias in data?", type: "mcq", required: true,
    options: ["Balanced data","Incorrect file format","Unfair data representation","Fast processing"] },
  { id: 36, text: "What is training data?", type: "mcq", required: true,
    options: ["Test data","Data used to train model","Deleted data","Backup data"] },
  { id: 37, text: "What is test data?", type: "mcq", required: true,
    options: ["Data for model training","Data for evaluation","Raw data","Fake data"] },
  { id: 38, text: "What is annotation tool?", type: "mcq", required: true,
    options: ["Hardware device","Software for labeling data","Network tool","Antivirus"] },
  { id: 39, text: "What is data consistency?", type: "mcq", required: true,
    options: ["Same internet speed","Same labels across data","Same file size","Same color"] },
  { id: 40, text: "What is crowd-sourcing in annotation?", type: "mcq", required: true,
    options: ["Data deletion","Automated labeling","Using many people to label data","Model training"] }
];

// ===== State =====
let currentIndex = 0;
let answers = {};
let timerRemaining = TOTAL_TIME_SECONDS;
let timerIntervalId = null;
let candidate = null; // login details (if tum baad me backend me bhejna chaho)

// ===== DOM =====
const questionProgressEl = document.getElementById("question-progress");
const questionNumberLabelEl = document.getElementById("question-number-label");
const questionTypeLabelEl = document.getElementById("question-type-label");
const questionTextEl = document.getElementById("question-text");
const answerFormEl = document.getElementById("answer-form");
const validationMessageEl = document.getElementById("validation-message");
const answeredCountEl = document.getElementById("answered-count");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const submitBtn = document.getElementById("submit-btn");
const timerEl = document.getElementById("exam-timer");

const popupOverlayEl = document.getElementById("popup-overlay");
const popupSummaryEl = document.getElementById("popup-summary");
const popupOkBtn = document.getElementById("popup-ok-btn");

const loginCardEl = document.getElementById("login-card");
const loginFormEl = document.getElementById("login-form");
const loginErrorEl = document.getElementById("login-error");

const questionCardEl = document.getElementById("question-card");
const thankyouScreenEl = document.getElementById("thankyou-screen");
const appFooterEl = document.querySelector(".app-footer");
const appHeaderEl = document.querySelector(".app-header");

// ===== Init =====
initApp();

function initApp() {
  // start: only login visible
  questionCardEl.style.display = "none";
  thankyouScreenEl.style.display = "none";
  appFooterEl.style.display = "none";
  questionProgressEl.textContent = "";

  loginFormEl.addEventListener("submit", handleLoginSubmit);
}

// ===== Login handling =====
function handleLoginSubmit(e) {
  e.preventDefault();

  const name = document.getElementById("candidate-name").value.trim();
  const mobile = document.getElementById("candidate-mobile").value.trim();
  const email = document.getElementById("candidate-email").value.trim();
  const aadhaar = document.getElementById("candidate-aadhaar").value.trim();

  // basic validation (sab required)
  if (!name || !mobile || !email || !aadhaar) {
    loginErrorEl.textContent = "All fields are required.";
    return;
  }

  if (!/^[0-9]{10}$/.test(mobile)) {
    loginErrorEl.textContent = "Please enter a valid 10 digit mobile number.";
    return;
  }

  if (!/^[0-9]{12}$/.test(aadhaar)) {
    loginErrorEl.textContent = "Please enter a valid 12 digit Aadhaar number.";
    return;
  }

  // HTML email type already basic validate karega, but thoda extra:
  if (!email.includes("@") || !email.includes(".")) {
    loginErrorEl.textContent = "Please enter a valid email address.";
    return;
  }

  loginErrorEl.textContent = "";

  candidate = { name, mobile, email, aadhaar };

  // Move to exam
  startExam();
}

function startExam() {
  loginCardEl.style.display = "none";
  questionCardEl.style.display = "flex";
  appFooterEl.style.display = "flex";

  // reset state
  currentIndex = 0;
  answers = {};
  timerRemaining = TOTAL_TIME_SECONDS;

  renderQuestion(currentIndex);
  updateNavButtons();
  startTimer();

  nextBtn.addEventListener("click", handleNext);
  prevBtn.addEventListener("click", handlePrev);
  submitBtn.addEventListener("click", handleSubmitClick);
  popupOkBtn.addEventListener("click", closePopup);
}

// ===== Timer =====
function startTimer() {
  updateTimerDisplay();
  timerIntervalId = setInterval(() => {
    timerRemaining--;
    updateTimerDisplay();
    if (timerRemaining <= 0) {
      clearInterval(timerIntervalId);
      autoSubmitOnTimeout();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const minutes = String(Math.floor(timerRemaining / 60)).padStart(2, "0");
  const seconds = String(timerRemaining % 60).padStart(2, "0");
  timerEl.textContent = `${minutes}:${seconds}`;
}

function autoSubmitOnTimeout() {
  showPopup(true);
}

// ===== Render Question =====
function renderQuestion(index) {
  const q = questions[index];
  if (!q) return;

  validationMessageEl.textContent = "";

  const num = index + 1;
  questionProgressEl.textContent = `Question ${num} of ${questions.length}`;
  questionNumberLabelEl.textContent = `Q${num}`;
  questionTypeLabelEl.textContent = "Multiple Choice";
  questionTextEl.textContent = q.text;

  answerFormEl.innerHTML = "";

  q.options.forEach((opt, optIndex) => {
    const labelWrapper = document.createElement("label");
    labelWrapper.className = "option-item";

    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = `q_${q.id}`;
    radio.value = String(optIndex);
    radio.className = "option-input";

    const labelText = document.createElement("span");
    labelText.className = "option-label";
    labelText.textContent = opt;

    labelWrapper.appendChild(radio);
    labelWrapper.appendChild(labelText);
    answerFormEl.appendChild(labelWrapper);
  });

  const saved = answers[q.id];
  if (saved && typeof saved.choiceIndex === "number") {
    const selector = `input[name="q_${q.id}"][value="${saved.choiceIndex}"]`;
    const radioToCheck = answerFormEl.querySelector(selector);
    if (radioToCheck) radioToCheck.checked = true;
  }

  updateAnsweredCount();
}

// ===== Navigation =====
function handleNext() {
  if (!validateAndStoreCurrent()) return;

  if (currentIndex < questions.length - 1) {
    currentIndex++;
    renderQuestion(currentIndex);
    updateNavButtons();
  }
}

function handlePrev() {
  if (currentIndex > 0) {
    validateAndStoreCurrent(false);
    currentIndex--;
    renderQuestion(currentIndex);
    updateNavButtons();
  }
}

function updateNavButtons() {
  prevBtn.disabled = currentIndex === 0;

  const isLast = currentIndex === questions.length - 1;
  nextBtn.style.display = isLast ? "none" : "inline-flex";
  submitBtn.style.display = isLast ? "inline-flex" : "none";
}

// ===== Validation & Storage =====
function validateAndStoreCurrent(showError = true) {
  const q = questions[currentIndex];
  const selected = answerFormEl.querySelector(`input[name="q_${q.id}"]:checked`);
  let isValid = true;

  if (q.required && !selected) {
    isValid = false;
    if (showError) {
      validationMessageEl.textContent = "Please select an option to continue.";
    }
  } else {
    validationMessageEl.textContent = "";
  }

  if (selected) {
    answers[q.id] = { choiceIndex: Number(selected.value) };
  }

  updateAnsweredCount();
  return isValid;
}

function updateAnsweredCount() {
  const requiredCount = questions.filter(q => q.required).length;
  const answeredRequired = questions.filter(q => {
    const stored = answers[q.id];
    if (!stored) return false;
    return typeof stored.choiceIndex === "number";
  }).length;

  answeredCountEl.textContent = `Answered: ${answeredRequired} / ${requiredCount}`;
}

// ===== Submit =====
function handleSubmitClick() {
  if (!validateAndStoreCurrent()) return;

  const unansweredRequired = questions.filter(q => {
    const stored = answers[q.id];
    if (!stored) return true;
    return typeof stored.choiceIndex !== "number";
  });

  if (unansweredRequired.length > 0) {
    validationMessageEl.textContent =
      "Please answer all questions before submitting.";
    return;
  }

  showPopup(false);
}

function showPopup(autoSubmitted) {
  if (timerIntervalId) {
    clearInterval(timerIntervalId);
    timerIntervalId = null;
  }

  const requiredCount = questions.filter(q => q.required).length;
  const answeredRequired = questions.filter(q => {
    const stored = answers[q.id];
    if (!stored) return false;
    return typeof stored.choiceIndex === "number";
  }).length;

  const modeMessage = autoSubmitted
    ? "Time is over. Your exam has been auto-submitted."
    : "Your exam has been submitted successfully.";

  popupSummaryEl.textContent = `${modeMessage} Answered ${answeredRequired} out of ${requiredCount} questions.`;
  popupOverlayEl.classList.add("active");
}

function closePopup() {
  popupOverlayEl.classList.remove("active");
  showFinalThankYou();
}

// After final submit: clear questions, show thank you
function showFinalThankYou() {
  answers = {};
  currentIndex = 0;

  if (questionCardEl) questionCardEl.style.display = "none";
  if (appFooterEl) appFooterEl.style.display = "none";

  if (appHeaderEl) {
    const headerCenter = appHeaderEl.querySelector(".header-center");
    const headerRight = appHeaderEl.querySelector(".header-right");
    if (headerCenter) headerCenter.style.display = "none";
    if (headerRight) headerRight.style.display = "none";
  }

  if (thankyouScreenEl) thankyouScreenEl.style.display = "flex";
}
