// ======================
// Easy Questions (50 Qs)
// ======================
let easyQuestions = [
    { question: "How many people were saved in Noah's Ark?", options: ["12","60","8","14"], answer: 2, verse: "2 Peter 2:5" },
    { question: "What are the names of Isaac's sons?", options: ["Abel and Cain","Shem, Ham, and Japheth","Esau and Jacob","Manasseh and Ephraim"], answer: 2, verse: "Genesis 25:24-26" },
    { question: "What did God write on the stone tablets?", options: ["7 Laws (against capital sins)","10 Commandments","7 Commandments","12 Ceremonial Laws"], answer: 1, verse: "Exodus 31:18" },
    { question: "Which of these were NOT part of the 10 Plagues of Egypt?", options: ["Plague of flies and plague of blood","Pestilence on livestock and plague of frogs","Plague of serpents and plague of infertility among Egyptians","Plague of locusts and death of the Egyptian firstborn"], answer: 2, verse: "Exodus 7-12" },
    { question: "Which city was conquered by the Israelites by marching around it for 7 days?", options: ["Midian","Jericho","Canaan","Jerusalem"], answer: 1, verse: "Joshua 5:13-6:27" },
    { question: "Who was called by God as a child to be a prophet and judge in Israel?", options: ["Samuel","Elisha","Elijah","Samson"], answer: 0, verse: "1 Samuel 3" },
    { question: "Names of Daniel's three friends thrown into a fiery furnace?", options: ["Eliphaz, Bildad, Zophar","Joshua, Caleb, Jephunneh","Jeremiah, Isaiah, Malachi","Shadrach, Meshach, Abednego"], answer: 3, verse: "Daniel 3:8-30" },
    { question: "What accusation did Satan make against Job before God?", options: ["Job was wicked and violent","Job's children sinned by blaspheming","Job feared God only for gain","Job was dishonest, ambitious, and corrupt"], answer: 2, verse: "Job 1:9-11" },
    { question: "Who sold Joseph to a caravan of Ishmaelites?", options: ["Potiphar","Jacob","The jailer","His brothers"], answer: 3, verse: "Genesis 37:27-28" },
    { question: "Psalm 119:105: God's Word is ... to my feet and ... to my path?", options: ["lamp and light","rock and direction","security and righteousness","light and peace"], answer: 0, verse: "Psalm 119:105" },
    { question: "Three patriarchs of Israel God made promises to?", options: ["Abraham, Moses, Samuel","Daniel, Joshua, Caleb","Abraham, Isaac, Jacob","Shem, Ham, Japheth"], answer: 2, verse: "Exodus 2:24" },
    { question: "With what instrument did David defeat Goliath?", options: ["An arrow","A sword","A staff","A stone"], answer: 3, verse: "1 Samuel 17:40" },
    { question: "Psalm 23 begins with:", options: ["Blessed is the man who does not walk...","The Lord is my shepherd...","I waited patiently for the Lord...","Commit your way to the Lord..."], answer: 1, verse: "Psalm 23:1" },
    { question: "Prophet who multiplied the widow of Zarephath's flour and oil?", options: ["Daniel","Elisha","Elijah","Ezekiel"], answer: 2, verse: "1 Kings 17:15-16" },
    { question: "Who was thrown into the lions' den?", options: ["Daniel","Stephen","Gabriel","Peter"], answer: 0, verse: "Daniel 6" },
    { question: "King Solomon had many wives and concubines. How many?", options: ["7 princesses and 3 concubines","27 princesses and 30 concubines","70 princesses and 130 concubines","700 princesses and 300 concubines"], answer: 3, verse: "1 Kings 11:3" },
    { question: "Moses' sister who danced at the Red Sea?", options: ["Mara","Miriam","Deborah","Zipporah"], answer: 1, verse: "Exodus 15:20-21" },
    { question: "Mother of Cain, Abel, and Seth?", options: ["Eve","Hannah","Leah","Bilhah"], answer: 0, verse: "Genesis 4:1-2, 25" },
    { question: "King Solomon's illustrious visitor?", options: ["Princess of Egypt","Beloved Shulammite","Queen of Sheba","Queen Esther"], answer: 2, verse: "1 Kings 10" },
    { question: "Samuel's mother?", options: ["Rachel","Hannah","Sarah","Abigail"], answer: 1, verse: "1 Samuel 1-2" },
    { question: "First couple created by God?", options: ["John and Mary","Abram and Sarah","Adam and Eve","Moses and Isabel"], answer: 2, verse: "Genesis 2" },
    { question: "What did God tell Noah to build?", options: ["An altar","Tower of Babel","A temple","An ark"], answer: 3, verse: "Genesis 6:13-22" },
    { question: "Sign God gave Noah?", options: ["Rainbow","Cross","Candlestick","Gold ring"], answer: 0, verse: "Genesis 9:13-16" },
    { question: "Young man who defeated Goliath?", options: ["Samuel","Daniel","David","Levi"], answer: 2, verse: "1 Samuel 17" },
    { question: "Foods multiplied by Jesus?", options: ["Bread and wine","Cakes and fig paste","Olive oil and wild honey","Bread and fish"], answer: 3, verse: "Matthew 14:17-21" },
    { question: "How many disciples did Jesus have?", options: ["12","7","14","40"], answer: 0, verse: "Luke 6:13-16" },
    { question: "First book of the Bible?", options: ["Isaiah","Matthew","Psalms","Genesis"], answer: 3, verse: "" },
    { question: "Verse: 'The Lord is my shepherd; I shall not want'?", options: ["Proverbs","Matthew","Psalms","Ecclesiastes"], answer: 2, verse: "Psalm 23:1" },
    { question: "Last book of the Old Testament?", options: ["Malachi","Revelation","Proverbs","Genesis"], answer: 0, verse: "" },
    { question: "Moses' first encounter with God?", options: ["Mount Horeb","Mount Sinai","Mount Zion","Mount Carmel"], answer: 0, verse: "Exodus 3:1-12" },
    { question: "First king of Israel?", options: ["David","Samuel","Solomon","Saul"], answer: 3, verse: "1 Samuel 9-10" },
    { question: "Miracle at the wedding in Cana?", options: ["Healed demon-possessed","Multiplication of bread & fish","Water to wine","Healed Peter's mother-in-law"], answer: 2, verse: "John 2:1-11" },
    { question: "Prophet taken to heaven in a whirlwind?", options: ["Elijah","Elisha","Ezekiel","Daniel"], answer: 0, verse: "2 Kings 2:11" },
    { question: "Jesus' last words on the cross?", options: ["Father, forgive them","Father, into Your hands","I am thirsty!","It is finished!"], answer: 1, verse: "Luke 23:46" },
    { question: "First person to find Jesus' tomb empty?", options: ["Mary, His mother","Peter, Cephas","Mary Magdalene","John, brother of James"], answer: 2, verse: "John 20:1" },
    { question: "City where Jesus was born?", options: ["Nazareth","Bethlehem","Galilee","Jerusalem"], answer: 1, verse: "Matthew 2:1" },
    { question: "Authors of the Gospels?", options: ["Mark, Timothy, Paul, John","Matthew, Peter, Luke, John, James","Matthew, Mark, Luke, John","Mark, Titus, Paul, Matthew"], answer: 2, verse: "" },
    { question: "Which apostle wrote most of the NT letters?", options: ["John","Paul","Peter","James"], answer: 1, verse: "" },
    { question: "Son promised by God to Abraham?", options: ["Judah","Jacob","Isaac","Ishmael"], answer: 2, verse: "Genesis 17:19, 21:3" },
    { question: "Animal that convinced Eve & Adam to disobey God?", options: ["Donkey","Serpent","Crocodile","Raven"], answer: 1, verse: "Genesis 3:1-5" },
    { question: "Leader used by God to free Israelites from Egypt?", options: ["Moses","Joshua","David","Samson"], answer: 0, verse: "Exodus 3:9-15" },
    { question: "Barren woman who prayed for a son?", options: ["Mary","Sarah","Elizabeth","Hannah"], answer: 3, verse: "1 Samuel 1:9-11" },
    { question: "First son of Adam who killed his brother?", options: ["Abel","Canaan","Cain","Seth"], answer: 2, verse: "Genesis 4:3-8" },
    { question: "Disciple who betrayed Jesus for 30 pieces of silver?", options: ["Peter","Thomas","Judas Thaddeus","Judas Iscariot"], answer: 3, verse: "Matthew 26:15" },
    { question: "Thrown into a lions’ den for not stopping prayer?", options: ["Daniel","Ezekiel","Elijah","Samuel"], answer: 0, verse: "Daniel 6:10-28" },
    { question: "Asked God for wisdom, became wisest man?", options: ["Abraham","Saul","Absalom","Solomon"], answer: 3, verse: "1 Kings 3:10-15" },
    { question: "Wore camel hair, ate locusts & honey, preached repentance?", options: ["Elijah","John the Baptist","Elisha","Isaiah"], answer: 1, verse: "Mark 1:1-13" },
    { question: "Came to fulfill the Father's plan, died for believers?", options: ["Moses","Paul","John","Jesus Christ"], answer: 3, verse: "John 3:16" },
    { question: "Angel who foretold births of Jesus & John the Baptist?", options: ["Michael","Gabriel","Raphael","Seraphim"], answer: 1, verse: "Luke 1:5-38" },
    { question: "Woman who was legitimate mother & nurse of adopted son?", options: ["Rachel","Hannah","Sarah","Jochebed"], answer: 3, verse: "Exodus 2:1-8, 6:20" }
];

// ======================
// Game State & Functions
// ======================
let totalQuestions = 25;
let currentQuestionIndex = 0;
let selectedQuestions = [];
let correctCount = 0;
let userProgress = JSON.parse(localStorage.getItem("userProgress")) || { correct: 0 };

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function selectQuestions() {
    selectedQuestions = shuffle([...easyQuestions]).slice(0, totalQuestions);
}

function displayQuestion() {
    if (currentQuestionIndex >= totalQuestions) { endGame(); return; }
    let q = selectedQuestions[currentQuestionIndex];
    document.getElementById("question").innerText = q.question;
    let optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";
    q.options.forEach((option, index) => {
        let btn = document.createElement("button");
        btn.innerText = option;
        btn.onclick = () => checkAnswer(index);
        btn.className = "option-btn";
        optionsDiv.appendChild(btn);
    });
    document.getElementById("progress").innerText = `Question ${currentQuestionIndex + 1} / ${totalQuestions}`;
}

function checkAnswer(selectedIndex) {
    let q = selectedQuestions[currentQuestionIndex];
    if (selectedIndex === q.answer) {
        correctCount++;
        userProgress.correct++;
        localStorage.setItem("userProgress", JSON.stringify(userProgress));
    } else {
        alert(`Check this verse for the correct answer: ${q.verse}`);
    }
    currentQuestionIndex++;
    displayQuestion();
}

function endGame() {
    let medalThreshold = 50;
    let message = `You answered ${correctCount} out of ${totalQuestions} correctly.\n`;
    if (userProgress.correct >= medalThreshold) {
        message += "🎖 You earned a medal for your cumulative correct answers!";
    } else {
        message += `You need ${medalThreshold - userProgress.correct} more correct answers to earn a medal.`;
    }
    alert(message);
    currentQuestionIndex = 0;
    correctCount = 0;
    selectQuestions();
    displayQuestion();
}

// ======================
// Initialize
// ======================
selectQuestions();
displayQuestion();
