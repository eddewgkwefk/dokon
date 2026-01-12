const questionBtn = document.getElementById("questionBtn");
const answerBtn = document.getElementById("answerBtn");
const questionDiv = document.getElementById("question");
const answerDiv = document.getElementById("answer");

// KULGILI SAVOL-JAVOBLAR
const data = [
  { q: "Nega kompyuter sovuq?", a: "Chunki ichida Windows ochiq 😂" },
  { q: "Dasturchi nega kech uxlaydi?", a: "Bug: «Uxlamaysan!» dedi 😭" },
  { q: "WiFi nega sekin?", a: "Qo‘shni YouTube’da serial ko‘ryapti 😤" },
  { q: "Programmist choy ichadimi?", a: "Ha, lekin debug bilan ☕😄" },
  { q: "Nega klaviatura baqiradi?", a: "Qattiq bosyapsan 😆" },
  { q: "Telefon nega qiziydi?", a: "U ham stress qiladi 🔥" },
  { q: "ChatGPT charchaydimi?", a: "Yo‘q, faqat sen charchaysan 😎" },
  { q: "Nega kod ishlamadi?", a: "Chunki sen qarab turding 👀" },
  { q: "Bug qayerdan chiqadi?", a: "O‘zi bilan o‘zi keladi 🐛" },
  { q: "Dasturchi dam oladimi?", a: "Ha, uxlab kod ko‘radi 😴" },

  { q: "HTML nega gapirmaydi?", a: "U faqat yoziladi 😄" },
  { q: "CSS nimani yaxshi ko‘radi?", a: "Chiroyli bo‘lishni ✨" },
  { q: "JavaScript nimani yoqtirmaydi?", a: "Xatoni topishni 😡" },
  { q: "Internet uzilsa nima bo‘ladi?", a: "Hamma nerv bo‘ladi 🤯" },
  { q: "Telefon suvga tushsa nima qiladi?", a: "O‘zi ham cho‘miladi 🤿" },
  { q: "Dasturchi pulni qayerga sarflaydi?", a: "Kofe va internetga ☕📶" },
  { q: "Kompyuter kasal bo‘ladimi?", a: "Ha, virus yuqtiradi 🤒" },
  { q: "Nega monitor qora bo‘lib qoldi?", a: "U ham dam olyapti 😴" },
  { q: "Programmist nega jahl qiladi?", a: "Kod ishlamaganda 😤" },
  { q: "AI odamni almashtiradimi?", a: "Yo‘q, faqat seni uxlatmaydi 🤖" },

  { q: "Nega telefon quvvat so‘raydi?", a: "Och qolgan 🍔" },
  { q: "WiFi parolni kim o‘zgartirdi?", a: "Aynan SEN bilmagan odam 😏" },
  { q: "Dasturchi yuguradimi?", a: "Ha, deadline kelganda 🏃‍♂️" },
  { q: "GitHub nima yeydi?", a: "Commit 🍕" },
  { q: "Bug qanday o‘ladi?", a: "Debug bilan ⚔️" },
  { q: "Nega klaviatura jim?", a: "Sen uxlayapsan 😴" },
  { q: "Telefon seni tinglayaptimi?", a: "Ha… lekin sekin 😳" },
  { q: "Internet kimniki?", a: "Hech kimniki, hammaga yetmaydi 😂" },
  { q: "Dasturchi boy bo‘ladimi?", a: "Avval nervi ketadi 🤣" },
  { q: "Nega bu savol kulgili?", a: "Chunki javobi ham shunaqa 😜" }
];

let currentIndex = null;

// Savol olish
questionBtn.addEventListener("click", () => {
  currentIndex = Math.floor(Math.random() * data.length);
  questionDiv.textContent = data[currentIndex].q;
  answerDiv.style.display = "none";
  answerDiv.textContent = "";
});

// Javobini ko‘rsatish
answerBtn.addEventListener("click", () => {
  if (currentIndex === null) {
    alert("Avval savolni bos 😂");
    return;
  }
  answerDiv.textContent = data[currentIndex].a;
  answerDiv.style.display = "block";
});
