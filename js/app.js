// ================================
// CẤU HÌNH WEBSITE - HÃY SỬA Ở ĐÂY
// ================================
const CONFIG = {
  relationshipStartDate: "2026-06-28",
  birthdayDate: "2026-11-17"
};

const $ = (selector) => document.querySelector(selector);

function isBirthday() {
  const [year, month, day] = CONFIG.birthdayDate.split("-").map(Number);
  const today = new Date();
  return today.getFullYear() === year && today.getMonth() === month - 1 && today.getDate() === day;
}

const birthdayMode = isBirthday() || new URLSearchParams(window.location.search).get("birthday") === "preview";

if (birthdayMode) {
  $("#birthdayScreen").hidden = false;
  $("#quizEyebrow").textContent = "A BIRTHDAY QUIZ JUST FOR YOU";
  $("#quizTitle").textContent = "Quiz sinh nhật nhỏ xinh 🎂";
  $("#quizDescription").textContent = "Trả lời vài câu hỏi đáng yêu để mở lá thư sinh nhật anh viết riêng cho em.";
  $("#rewardTitle").textContent = "Em đã hoàn thành quiz sinh nhật! 🎉";
  $("#rewardDescription").textContent = "Phần quà cuối cùng là lá thư chúc mừng sinh nhật của anh. Mở ra nhé, em yêu!";
  $("#openReward").textContent = "Đọc thư chúc mừng sinh nhật 💌";
}

// 1. Bộ đếm ngày yêu nhau
function updateLoveCounter() {
  const output = $("#dayCount");
  const caption = $("#counterCaption");

  if (!CONFIG.relationshipStartDate) {
    output.textContent = "♡";
    caption.textContent = "Hãy thêm ngày bắt đầu yêu nhau trong js/app.js";
    return;
  }

  const [year, month, day] = CONFIG.relationshipStartDate.split("-").map(Number);
  const start = new Date(year, month - 1, day);

  if (Number.isNaN(start.getTime()) || start.getFullYear() !== year || start.getMonth() !== month - 1 || start.getDate() !== day) {
    output.textContent = "♡";
    caption.textContent = "Ngày bắt đầu chưa hợp lệ, hãy kiểm tra lại nhé.";
    return;
  }

  const elapsed = Math.max(0, Date.now() - start.getTime());
  const days = Math.floor(elapsed / 86400000);
  const hours = Math.floor((elapsed % 86400000) / 3600000);
  const minutes = Math.floor((elapsed % 3600000) / 60000);
  const seconds = Math.floor((elapsed % 60000) / 1000);
  output.textContent = days.toLocaleString("vi-VN");
  caption.textContent = "ngày bên nhau và còn tiếp tục đếm...";
  $("#counterClock").textContent = `${String(hours).padStart(2, "0")} giờ · ${String(minutes).padStart(2, "0")} phút · ${String(seconds).padStart(2, "0")} giây`;
}
updateLoveCounter();
setInterval(updateLoveCounter, 1000);

// 2. Thư tình: hãy thay nội dung mẫu bằng lời nhắn thật của bạn.
const letters = {
  reward: {
    title: "Gửi em yêu của anh 💌",
    text: "Gửi Minh Anh của anh,\n\nCảm ơn em đã đến và làm cho những ngày bình thường của anh trở nên thật đặc biệt. Anh mong em luôn nhớ rằng em xứng đáng được yêu thương, được lắng nghe và được vui vẻ mỗi ngày.\n\nDù hôm nay của em thế nào, anh vẫn luôn ở đây, thương em bằng tất cả sự dịu dàng của mình. Anh sẽ cố gắng tạo thêm thật nhiều kỷ niệm đẹp cùng em nhé.\n\nAnh thương em nhiều lắm! 💗"
  },
  miss: {
    title: "Khi em nhớ anh 💌",
    text: "Nếu em đang đọc những dòng này vì nhớ anh, thì anh muốn gửi em một cái ôm thật chặt. Dù lúc này không ở cạnh nhau, anh vẫn luôn nghĩ về em. Mong em luôn vui và nhớ rằng có một người thương em rất nhiều."
  },
  sad: {
    title: "Khi em cảm thấy buồn 🌷",
    text: "Em không cần lúc nào cũng phải mạnh mẽ hay vui vẻ đâu. Nếu hôm nay không ổn, cứ nghỉ ngơi một chút nhé. Anh mong mình có thể ở cạnh để lắng nghe em, ôm em và nhắc em rằng em không phải một mình."
  },
  love: {
    title: "Khi em cần được yêu thương 💗",
    text: "Anh yêu những điều nhỏ bé tạo nên em: nụ cười, giọng nói, những câu chuyện và cả những khoảnh khắc rất bình thường. Cảm ơn em vì đã xuất hiện trong thế giới của anh."
  }
};
const birthdayLetter = {
  title: "Chúc mừng sinh nhật em yêu 💖",
  text: "Gửi Minh Anh yêu dấu,\n\nChúc mừng sinh nhật cô gái đặc biệt nhất trong lòng anh! Chúc em tuổi mới luôn bình an, vui vẻ, rạng rỡ và gặp thật nhiều điều tốt đẹp. Mong những ước mơ em ấp ủ sẽ lần lượt trở thành hiện thực.\n\nCảm ơn em đã đến bên anh và khiến thế giới của anh trở nên ấm áp hơn. Hôm nay là ngày của em, hãy cười thật nhiều, nhận thật nhiều yêu thương và luôn nhớ rằng anh thương em rất nhiều.\n\nChúc em có một sinh nhật thật ngọt ngào! 🎂🎁💗"
};
function getRewardLetter() {
  return birthdayMode ? birthdayLetter : letters.reward;
}

const modal = $("#letterModal");
document.querySelectorAll("[data-letter]").forEach((button) => {
  button.addEventListener("click", () => {
    const letter = letters[button.dataset.letter];
    $("#modalTitle").textContent = letter.title;
    $("#modalText").textContent = letter.text;
    modal.hidden = false;
  });
});
function closeLetter() { modal.hidden = true; }
$("#closeModal").addEventListener("click", closeLetter);
$("#openReward").addEventListener("click", () => {
  $("#afterJourney").hidden = false;
  $("#siteNav").hidden = false;
  const letter = getRewardLetter();
  $("#modalTitle").textContent = letter.title;
  $("#modalText").textContent = letter.text;
  modal.hidden = false;
});
modal.addEventListener("click", (event) => {
  if (event.target.dataset.close === "true") closeLetter();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeLetter();
});

// 3. Quiz tình yêu - có thể sửa câu hỏi và đáp án ở đây.
const questions = [
  {
    question: "Anh thích điều gì nhất khi ở bên em?",
    answers: ["Được nhìn em cười", "Được ăn thật nhiều", "Được đi ngủ", "Cả thế giới biết anh đẹp trai"],
    correct: 0,
    message: "Chính xác! Nụ cười của em là điều anh thích nhất. 💗"
  },
  {
    question: "Nếu được chọn một ngày hoàn hảo cùng nhau, anh muốn...",
    answers: ["Ở nhà chơi game", "Cùng em đi khám phá một nơi mới", "Chỉ ngủ cả ngày", "Đi mua thật nhiều đồ"],
    correct: 1,
    message: "Đúng rồi! Đi đâu cũng được, miễn là có em. 🌷"
  },
  {
    question: "Thông điệp quan trọng nhất anh muốn gửi em là gì?",
    answers: ["Nhớ ăn uống đầy đủ", "Đừng thức khuya", "Anh thương em rất nhiều", "Tất cả đều đúng"],
    correct: 3,
    message: "Giỏi quá! Anh mong em luôn cảm nhận được tình yêu này. 🧸"
  }
];
let questionIndex = 0;
function renderQuestion() {
  const question = questions[questionIndex];
  $("#quizProgress").textContent = `Câu hỏi ${questionIndex + 1} / ${questions.length}`;
  $("#quizQuestion").textContent = question.question;
  $("#quizFeedback").textContent = "Chọn một đáp án nhé, công chúa!";
  $("#nextQuestion").hidden = true;
  const answers = $("#quizAnswers");
  answers.innerHTML = "";
  question.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.className = "answer-button";
    button.type = "button";
    button.textContent = answer;
    button.addEventListener("click", () => {
      answers.querySelectorAll("button").forEach((item) => item.disabled = true);
      $("#quizFeedback").textContent = index === question.correct
        ? question.message
        : "Chưa đúng mất rồi, nhưng anh vẫn tặng em một trái tim! 💕";
      for (let heart = 0; heart < 5; heart++) createHeart();
      $("#nextQuestion").hidden = false;
      $("#nextQuestion").textContent = questionIndex === questions.length - 1 ? "Nhận món quà của em 💌" : "Câu tiếp theo →";
    });
    answers.appendChild(button);
  });
}
function startBirthdayQuiz() {
  questionIndex = 0;
  renderQuestion();
  $("#home").hidden = true;
  $("#quiz").hidden = false;
  $("#quiz").scrollIntoView({ behavior: "smooth", block: "start" });
  playBackgroundMusic();
}
$("#nextQuestion").addEventListener("click", () => {
  if (questionIndex === questions.length - 1) {
    $("#quiz").hidden = true;
    $("#reward").hidden = false;
    $("#reward").scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }
  questionIndex += 1;
  renderQuestion();
});
$("#startJourney").addEventListener("click", () => {
  $("#quiz").hidden = false;
  $("#quiz").scrollIntoView({ behavior: "smooth", block: "start" });
  playBackgroundMusic();
});
$("#birthdayContinue").addEventListener("click", () => {
  $("#birthdayScreen").hidden = true;
  for (let heart = 0; heart < 24; heart++) createHeart();
  startBirthdayQuiz();
});
renderQuestion();

// 4. Nút bất ngờ và hiệu ứng trái tim
const surprises = [
  "Anh gửi em một cái ôm thật lâu và một nụ hôn lên trán. 💗",
  "Nhắc em một điều: em là một trong những điều tuyệt vời nhất của anh. 🌷",
  "Nếu hôm nay mệt rồi thì nghỉ ngơi nhé. Anh luôn cổ vũ em. 🧸",
  "Nhiệm vụ hôm nay: cười thật nhiều vì có người thương em lắm! ✨"
];
$("#surpriseButton").addEventListener("click", () => {
  $("#surpriseMessage").textContent = surprises[Math.floor(Math.random() * surprises.length)];
  for (let i = 0; i < 18; i++) createHeart();
});
function createHeart() {
  const heart = document.createElement("span");
  heart.className = "heart";
  heart.textContent = ["♡", "♥", "✦"][Math.floor(Math.random() * 3)];
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.fontSize = `${14 + Math.random() * 22}px`;
  $(".floating-hearts").appendChild(heart);
  setTimeout(() => heart.remove(), 3600);
}
setInterval(createHeart, 1400);

// 5. Nhạc nền - trình duyệt chỉ cho phát sau thao tác của người dùng.
const music = $("#backgroundMusic");
const musicToggle = $("#musicToggle");
let autoplayBlocked = false;
function updateMusicButton() {
  const isPlaying = !music.paused;
  musicToggle.innerHTML = isPlaying
    ? "♫ <span>Tắt nhạc</span>"
    : autoplayBlocked ? "♫ <span>Chạm để bật nhạc</span>" : "♫ <span>Bật nhạc</span>";
  musicToggle.classList.toggle("music-button--prompt", autoplayBlocked && !isPlaying);
  musicToggle.setAttribute("aria-label", isPlaying ? "Tắt nhạc nền" : "Bật nhạc nền");
  musicToggle.title = isPlaying
    ? "Tắt nhạc nền"
    : autoplayBlocked ? "Trình duyệt đã chặn tự phát. Chạm vào đây để bật nhạc." : "Bật nhạc nền";
}
music.addEventListener("play", updateMusicButton);
music.addEventListener("pause", updateMusicButton);
async function playBackgroundMusic() {
  try {
    await music.play();
    autoplayBlocked = false;
    updateMusicButton();
  } catch {
    autoplayBlocked = true;
    updateMusicButton();
  }
}
function resumeMusicOnInteraction(event) {
  if (music.paused && autoplayBlocked && !musicToggle.contains(event.target)) {
    playBackgroundMusic();
  }
}
document.addEventListener("pointerdown", resumeMusicOnInteraction);
document.addEventListener("keydown", resumeMusicOnInteraction);
musicToggle.addEventListener("click", () => {
  if (music.paused) {
    playBackgroundMusic();
  } else {
    autoplayBlocked = false;
    music.pause();
  }
});
playBackgroundMusic();
