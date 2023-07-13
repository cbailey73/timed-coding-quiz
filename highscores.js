// const { getHighscores } = require('./quiz.js');
import { getHighscores } from "./quiz";

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
