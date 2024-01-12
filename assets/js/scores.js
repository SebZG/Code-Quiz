document.addEventListener("DOMContentLoaded", () => {
  const highScores = document.getElementById("highscores");
  const clearButton = document.getElementById("clear");

  const storedScores = localStorage.getItem("scores");
  const scores = storedScores ? JSON.parse(storedScores) : [];

  scores.sort((a, b) => b.score - a.score);

  scores.forEach(score => {
    const listItem = document.createElement("li");
    listItem.textContent = `${score.initials} - ${score.score}`;
    highScores.appendChild(listItem);
  });

  clearButton.addEventListener("click", () => {
    localStorage.removeItem("scores");

    highScores.innerHTML = "";
  });
});
