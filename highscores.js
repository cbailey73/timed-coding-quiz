// const { getHighscores } = require('./quiz.js');
import { getHighscores } from "./quiz";
// localStorage.getItem("highscores");

// function getHighscores() {
//   return JSON.parse(localStorage.getItem("highscores")) || [];
// };

const highscores = getHighscores();

const highscoresContainer = document.getElementById("highscores-container");

function displayHighscores() {
    highscoresContainer.innerHTML = `
    <h2>Highscores</h2>
    <div id="highscores-list">
      ${highscores.map((entry, index) => `<p>${index + 1}. ${entry.initials} - ${entry.score}</p>`).join("")}
    </div>
  `;
}

displayHighscores();
