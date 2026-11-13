// ================================
// CẤU HÌNH WEBSITE - HÃY SỬA Ở ĐÂY
// ================================
const CONFIG = {
  relationshipStartDate: "2026-06-28",
  birthdayDate: "2026-11-17",
  birthdayLetterPassword: "20042006"
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
  $("#rewardDescription").textContent = "Phần quà cuối cùng là lá thư chúc mừng sinh nhật anh viết riêng cho em. 💌";
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
    text: "Gửi Minh Anh của anh,\n\nCảm ơn em đã đến và làm cho những ngày bình thường của anh trở nên thật đặc biệt. Anh mong em luôn nhớ rằng em xứng đáng được yêu thương, được lắng nghe và được vui vẻ mỗi ngày.\n\nDù hôm nay của em thế nào, anh vẫn luôn ở đây, thương em bằng tất cả sự dịu dàng của mình. Anh sẽ cố gắng tạo thêm thật nhìu kỷ niệm đẹp cùng em nhé.\n\nAnh thương em nhìu lắm! 💗"
  },
  miss: {
    title: "Khi vk nhớ anh 💌",
    text: "Nếu em đang đọc những dòng này vì nhớ anh, thì anh muốn gửi em một cái ôm thật chặt. Dù lúc này không ở cạnh nhau, anh vẫn luôn nghĩ về em. Mong em luôn vui và nhớ rằng có một người thương em rất nhìu."
  },
  sad: {
    title: "Khi vk buồn 🌷",
    text: "Em không cần lúc nào cũng phải mạnh mẽ hay vui vẻ đâu. Nếu hôm nay không ổn, cứ nghỉ ngơi một chút nhé. Anh mong mình có thể ở cạnh để lắng nghe em, ôm em và nhắc em rằng em không phải một mình."
  },
  love: {
    title: "Khi em cần được yêu thương 💗",
    text: "Anh yêu những điều nhỏ bé tạo nên em: nụ cười, giọng nói, những câu chuyện và cả những khoảnh khắc rất bình thường. Cảm ơn em vì đã xuất hiện trong thế giới của anh."
  }
};
const birthdayLetter = {
  title: "Chúc mừng sinh nhật bé Minh Anh 20 tuổi 🎂",
  text: `Gửi vk tương lai của anh ❤️,

Chào vk iu của anh!

Vậy là vk iu đã chính thức bước sang tuổi 20 rùi. Lễ cưới của chúng ta cũng lại gần thêm một năm nữa nhỉ, hi. Anh đang mong chờ từng ngày để đến cái ngày mà chúng ta có thể thực sự ở bên nhau, không còn phải tranh thủ những buổi tối để lén lút gặp nhau, không còn phải đếm xem một tuần được gặp nhau mấy lần. Mà thay vào đó, chúng ta có thể ở cạnh nhau mỗi ngày, có thể ôm nhau đi ngủ và cùng thức dậy khi những tia nắng đầu tiên chiếu qua cửa sổ. Chỉ nghĩ đến thôi là anh đã thấy hạnh phúc lắm rùi.

Vậy là chúng ta đã cùng nhau đón sinh nhật của nhau được một lần rồi đấy. Nghe thì có vẻ chưa lâu, nhưng với anh, đó cũng là một chặng đường chứa đựng rất nhiều kỷ niệm đáng nhớ. Anh từng nghe nói rằng khoảng thời gian khó khăn nhất khi yêu nhau là từ 3 đến 6 tháng, bởi đó là lúc những điều mới mẻ ban đầu dần qua đi, hai người bắt đầu nhìn thấy những thói quen, những khuyết điểm của nhau. Nhưng mà lạ thật, anh chẳng thấy tình yêu dành cho vk vơi đi chút nào, ngược lại còn ngày càng nhiều hơn. Anh càng ngày càng iu vk, iu muốn chít lun mất! Chỉ muốn ngày nào cũng được gặp vk, được ôm vk thật chặt, hun vk thật nhiều và được nghe vk kể đủ thứ chuyện trên đời.

Nhân dịp vk bước sang tuổi mới, điều đầu tiên anh muốn chúc là vk sẽ luôn được yêu thương thật nhiều, đặc biệt là được anh yêu thương mỗi ngày. Mong rằng tình yêu của chúng ta sẽ ngày càng lớn hơn, để sau này nhìn lại, chúng ta vẫn có thể tự hào rằng mình đã luôn chọn nhau, yêu thương nhau và cùng nhau đi qua thật nhiều năm tháng.

Anh chúc vk luôn có thật nhiều sức khỏe, lúc nào cũng vui vẻ, bình an và ngày càng xinh đẹp. Mà thật ra bây giờ vk đã xinh lắm rùi, anh cũng không biết nếu còn xinh đẹp hơn nữa thì sẽ như thế nào đây. Chắc anh phải giữ vk thật kỹ mất, không lại có anh nào nhìn thấy rồi cướp vk khỏi tay anh thì sao, hihi.

Anh cũng chúc cho việc học tập và công việc của vk ngày càng thuận lợi, gặt hái được thật nhiều thành công. Anh biết vk là một cô gái rất giỏi giang và có nhiều khả năng, nên anh luôn tin rằng vk sẽ làm được những điều mình mong muốn. Tất nhiên, trên hành trình ấy sẽ có những lúc khó khăn, mệt mỏi hay không được như ý. Nhưng vk hãy nhớ rằng vk không bao giờ phải một mình cả. Phía sau vk luôn có anh, sẵn sàng lắng nghe, động viên và đồng hành cùng vk. Nếu vk thành công, anh sẽ là người cười thật to và tự hào về vk nhất. Còn nếu vk thất bại, anh sẽ là người ôm vk thật lâu, để vk biết rằng dù thế nào đi nữa, anh vẫn luôn ở đây và thương vk như vậy.

Vk hãy cứ tự tin theo đuổi những điều mình thích nhé. Anh mong vk sẽ có một tuổi 20 thật rực rỡ, có thêm nhiều trải nghiệm đẹp, thực hiện được những ước mơ của mình và luôn giữ được nụ cười thật tươi trên môi.

Cuối cùng, anh chỉ muốn nói rằng: Đối với anh, vk luôn là cô gái xinh đẹp nhất, tuyệt vời nhất, hoàn hảo nhất và đảm đang nhất trên thế giới này :>>. Anh biết chúng ta vẫn còn rất nhiều điều phải học hỏi, rất nhiều thử thách phải cùng nhau vượt qua, nhưng anh tin rằng chỉ cần cả hai luôn yêu thương, thấu hiểu và không ngừng lựa chọn nhau thì chúng ta sẽ có thể đi cùng nhau thật lâu, thật lâu nữa.

Cảm ơn vk vì đã xuất hiện, vì đã yêu thương anh và vì đã cùng anh tạo nên những kỷ niệm thật đẹp. Chúc mừng sinh nhật vk iu của anh! Anh yêu vk nhiều lắm!❤️`
};
function getRewardLetter() {
  return birthdayMode ? birthdayLetter : letters.reward;
}

const modal = $("#letterModal");
const birthdayPasswordModal = $("#birthdayPasswordModal");
$("#readBirthdayLetter").addEventListener("click", () => {
  $("#birthdayPassword").value = "";
  $("#birthdayPasswordFeedback").textContent = "";
  birthdayPasswordModal.hidden = false;
  $("#birthdayPassword").focus();
});
function closeBirthdayPasswordModal() {
  birthdayPasswordModal.hidden = true;
}
$("#closeBirthdayPassword").addEventListener("click", closeBirthdayPasswordModal);
birthdayPasswordModal.addEventListener("click", (event) => {
  if (event.target.dataset.closeBirthdayPassword === "true") closeBirthdayPasswordModal();
});
$("#birthdayPasswordForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const passwordInput = $("#birthdayPassword");
  if (passwordInput.value !== CONFIG.birthdayLetterPassword) {
    $("#birthdayPasswordFeedback").textContent = "Mật khẩu chưa đúng, thử lại nhé vk iu.";
    passwordInput.select();
    return;
  }

  closeBirthdayPasswordModal();
  $("#modalTitle").textContent = birthdayLetter.title;
  $("#modalText").textContent = birthdayLetter.text;
  modal.hidden = false;
});
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
  if (event.key === "Escape") closeBirthdayPasswordModal();
});

// 3. Quiz tình yêu - có thể sửa câu hỏi và đáp án ở đây.
const questions = [
  {
    question: "Anh thích điều gì nhất khi ở bên em?",
    answers: ["Được nhìn em cười", "Được ăn thật nhìu", "Được đi ngủ", "Cả thế giới biết anh đẹp trai"],
    correct: 0,
    message: "Chính xác! Nụ cười của em là điều anh thích nhất. 💗"
  },
  {
    question: "Nếu được chọn một ngày hoàn hảo cùng nhau, anh muốn...",
    answers: ["Ở nhà chơi game", "Cùng em đi khám phá một nơi mới", "Chỉ ngủ cả ngày", "Đi mua thật nhìu đồ"],
    correct: 1,
    message: "Đúng rồi! Đi đâu cũng được, miễn là có em. 🌷"
  },
  {
    question: "Thông điệp quan trọng nhất anh muốn gửi em là gì?",
    answers: ["Nhớ ăn uống đầy đủ", "Đừng thức khuya", "Anh thương em rất nhìu", "Tất cả đều đúng"],
    correct: 3,
    message: "Giỏi quá! Anh mong em luôn cảm nhận được tình yêu này. 🧸"
  },
  {
    question: "Ảnh này được chụp khi nào?",
    image: "pics/ainh%20nhat%2023%208.jpg",
    imageAlt: "Kỷ niệm của hai đứa mình",
    answers: ["23 tháng 8", "24 tháng 8", "25 tháng 8", "22 tháng 8"],
    correct: 0,
    message: "Đúng rồi! Bức ảnh được chụp vào ngày 23 tháng 8. 💗"
  }
];
let questionIndex = 0;
function renderQuestion() {
  const question = questions[questionIndex];
  $("#quizProgress").textContent = `Câu hỏi ${questionIndex + 1} / ${questions.length}`;
  $("#quizQuestion").textContent = question.question;
  const image = $("#quizImage");
  image.hidden = !question.image;
  if (question.image) {
    image.src = question.image;
    image.alt = question.imageAlt;
  } else {
    image.removeAttribute("src");
    image.alt = "";
  }
  $("#quizFeedback").textContent = "Chọn một đáp án nhé, em yêu!";
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
  "Nhiệm vụ hôm nay: cười thật nhìu vì có người thương em lắm! ✨"
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
