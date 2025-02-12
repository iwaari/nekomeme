

//popup
  function togglePopup() {
    const overlay = document.getElementById('popupOverlay');
    overlay.classList.toggle('show');
}



const scriptURL = 'https://script.google.com/macros/s/AKfycbwxrr9gY3hHl86SuG0uv8nQa0NJHnmqFYqzCzrqM0w4wWDuE-B--j9r9iwch5FHZK6o/exec'

const memes = [
  {
    title: "Эффектный vs. Эффективный",
    image: "../css/meme/rospis.jpg",
    description: "📸 Мем: Человек в блестящем костюме: «Как вам мой новый <b>эффективный</b> костюм?»",
    correction: "✔ Правильный вариант: «Как вам мой <b>эффектный</b> костюм?»",
    explanation: "💭 Разница: <br><b>Эффектный</b> – привлекающий внимание, красивый.<br><b>Эффективный</b> – приносящий результат.",
    extraExample: "✦ Этот трюк был эффектным, но неэффективным – мы все равно проиграли."
  },
  {
    title: "Эффективное vs. Эффектное",
    image: "../css/meme/effect.jpg",
    correction: "✔ Правильный вариант: «<b>Эффектное</b> платье»",
    explanation: "💭 Разница: <br><b>Эффектный</b> – привлекающий внимание, красивый.<br><b>Эффективный</b> – приносящий результат.",
    extraExample: "✦ Этот трюк был эффектным, но неэффективным – мы все равно проиграли."
  },
  {
      "title": "Искусный vs. искусственный",
      "image": "../css/meme/povare.jpg",
      "correction": "✔ Правильный вариант: «Этот повар очень <b>искусный</b>!»",
      "explanation": "💭 Разница: <br><b>Искусный</b> – умелый, мастерский.<br><b>Искусственный</b> – ненатуральный, созданный человеком.",
      "extraExample": "✦ Его искусный подход помог создать что-то уникальное, а не искусственное."
  
  }
];

let currentIndex = 0;

function showNextMeme() {
  currentIndex = (currentIndex + 1) % memes.length;
  document.getElementById("meme-title").innerHTML = memes[currentIndex].title;
  document.getElementById("meme-image").src = memes[currentIndex].image;
  document.getElementById("meme-correction").innerHTML = memes[currentIndex].correction;
  document.getElementById("meme-explanation").innerHTML = memes[currentIndex].explanation;
  document.getElementById("meme-extra-example").innerHTML = memes[currentIndex].extraExample;
}


document.querySelectorAll('.show-rule-btn').forEach(button => {
  button.addEventListener('click', () => {
      const rule = button.nextElementSibling;
      rule.style.display = rule.style.display === 'none' ? 'block' : 'none';
  });
});