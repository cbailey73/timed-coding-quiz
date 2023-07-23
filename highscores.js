const highscores = localStorage.getItem("highscores");
const parsedScores = JSON.parse(highscores);

const highscoresContainer = document.getElementById("highscores-container");

function displayHighscores() {
    highscoresContainer.innerHTML = `
    <div id="highscores-list">
      ${parsedScores.map((entry, index) => `<p>${index + 1}. ${entry.initials} - ${entry.score}</p>`).join("")}
    </div>
  `;
}

displayHighscores();
