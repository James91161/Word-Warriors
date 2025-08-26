// ===== Questions =====
// Only a few examples included here; expand as needed
const questions = {
  english: {
    easy: [
      {question:"How many people were saved in Noah's Ark?", options:["12","60","8","14"], answer:2, verse:"2 Peter 2:5"},
      {question:"What are the names of Isaac's sons?", options:["Abel & Cain","Shem, Ham & Japheth","Esau & Jacob","Manasseh & Ephraim"], answer:2, verse:"Genesis 25:24-26"},
      {question:"What did God write on the stone tablets?", options:["7 Laws","10 Commandments","7 Commandments","12 Ceremonial Laws"], answer:1, verse:"Exodus 31:18"},
      {question:"Which city was conquered by the Israelites by marching around it for 7 days?", options:["Midian","Jericho","Canaan","Jerusalem"], answer:1, verse:"Joshua 5:13-6:27"}
      // Add more questions here...
    ],
    medium: [
      // Add 25 medium questions here
    ],
    hard: [
      // Add 25 hard questions here
    ]
  },
  afrikaans: {
    easy: [
      {question:"Hoeveel mense is in Noag se Ark gered?", options:["12","60","8","14"], answer:2, verse:"2 Petrus 2:5"},
      {question:"Wat is die name van Isak se seuns?", options:["Abel & Kain","Sem, Cham & Jafet","Esau & Jakob","Manasse & Efraim"], answer:2, verse:"Genesis 25:24-26"},
      {question:"Wat het God op die kliptafels geskryf?", options:["7 wette","10 Gebooie","7 Gebooie","12 Seremonieë wette"], answer:1, verse:"Eksodus 31:18"},
      {question:"Watter stad is deur die Israeliete verower deur 7 dae rondom dit te marsjeer?", options:["Midian","Jerigo","Kanaän","Jerusalem"], answer:1, verse:"Josua 5:13-6:27"}
      // Add more questions here...
    ],
    medium: [
      // Add 25 medium questions here
    ],
    hard: [
      // Add 25 hard questions here
    ]
  }
};

// ===== Game Variables =====
let currentLanguage = "english";
let difficulty = "easy";
let sessionQuestions = [];
let questionIndex = 0;
let score = 0;
let playerName = "";

// ===== DOM Elements =====
const questionText = document.getElementById("questionText");
const optionButtons = document.querySelectorAll(".optionBtn");
const scoreSpan = document.getElementById("score");
const medal = document.getElementById("medal");
const restartBtn = document.getElementById("restartBtn");

// ===== Event Listeners =====
document.getElementById("languageSelect").addEventListener("change", function() {
  currentLanguage = this.value;
});
document.getElementById("startBtn").addEventListener("click", startGame);
restartBtn.addEventListener("click", () => location.reload());
optionButtons.forEach((btn, idx) => btn.addEventListener("click", () => checkAnswer(idx)));

// ===== Functions =====
function startGame() {
  playerName = document.getElementById("playerName").value.trim();
  if(!playerName) { alert("Enter your name"); return; }

  difficulty = document.getElementById("difficultySelect").value;
  document.getElementById("setup").style.display = "none";
  document.getElementById("game").style.display = "flex";

  loadSessionQuestions();
  showQuestion();
}

function loadSessionQuestions() {
  let allQuestions = [...questions[currentLanguage][difficulty]];
  allQuestions.sort(() => Math.random() - 0.5); // shuffle
  sessionQuestions = allQuestions.slice(0, Math.min(25, allQuestions.length)); // pick 25 or fewer
  questionIndex = 0;
  score = 0;
  scoreSpan.textContent = score;
}

function showQuestion() {
  if(questionIndex >= sessionQuestions.length) { endGame(); return; }
  const q = sessionQuestions[questionIndex];
  questionText.textContent = q.question;
  optionButtons.forEach((btn, idx) => btn.textContent = q.options[idx]);
}

function checkAnswer(selected) {
  const q = sessionQuestions[questionIndex];
  if(selected === q.answer){ 
    score++; 
    scoreSpan.textContent = score; 
  } else { 
    alert((currentLanguage==="afrikaans"?"Sien die Bybelvers":"See Bible verse")+": "+q.verse); 
  }
  questionIndex++;
  showQuestion();
}

function endGame() {
  restartBtn.style.display = "block";
  saveSessionScore();
  showLeaderboard();

  // Show medal if cumulative correct answers ≥ threshold
  const usersData = JSON.parse(localStorage.getItem("usersData") || "{}");
  if(usersData[playerName] && usersData[playerName].cumulativeScore >= 50){
    medal.style.display = "block";
  } else {
    medal.style.display = "none";
  }
}

function saveSessionScore() {
  // Update leaderboard for this session
  const leaderboard = JSON.parse(localStorage.getItem("leaderboard") || "[]");
  const now = new Date();
  leaderboard.push({name: playerName, score: score, date: now.toLocaleDateString(), time: now.toLocaleTimeString()});
  leaderboard.sort((a, b) => b.score - a.score || a.time.localeCompare(b.time));
  localStorage.setItem("leaderboard", JSON.stringify(leaderboard));

  // Update cumulative score per user
  const usersData = JSON.parse(localStorage.getItem("usersData") || "{}");
  if(!usersData[playerName]) usersData[playerName] = {cumulativeScore: 0};
  usersData[playerName].cumulativeScore += score;
  usersData[playerName].lastSession = now.toISOString();
  localStorage.setItem("usersData", JSON.stringify(usersData));
}

function showLeaderboard() {
  const leaderboard = JSON.parse(localStorage.getItem("leaderboard")||"[]");
  const table = document.getElementById("leaderboardTable");
  table.innerHTML = "<tr><th>Name</th><th>Score</th><th>Date</th><th>Time</th></tr>";
  leaderboard.forEach(entry => {
    const row = table.insertRow();
    row.insertCell(0).innerText = entry.name;
    row.insertCell(1).innerText = entry.score;
    row.insertCell(2).innerText = entry.date;
    row.insertCell(3).innerText = entry.time;
  });
}
