const game = {
  questions: [
    { question: "PYTHON is programing language?", answer: "y" },
    { question: "Baku is capital?", answer: "y" },
    { question: "JAVA is programing language?", answer: "y" },
    { question: "Are you from Azerbaijan?", answer: "y" },
    {
      question:
        "Do in the method toString no changed all element to string in javascript?",
      answer: "n"
    },
    { question: "Do you like Cafe Latte", answer: "y" }
  ],

  currStep: 0,
  score: 0,
  renderDom: function() {
    if (document.querySelector("#box")) {
      document.querySelector("#box").remove();
    }
    let element = document.createElement("div");
    element.id = "box";
    let header = document.createElement("h3");
    header.innerText = this.questions[this.currStep].question;
    let paragraph = document.createElement("p");
    paragraph.innerText =
      this.questions.length +
      " questions. " +
      "Your correct answer " +
      this.score;
    element.append(header);
    element.append(paragraph);
    document.querySelector("#page-wrap").append(element);
  },

  endGame: function() {
    let userAsk = confirm("Do you want reset game");
    if (userAsk) {
      this.currStep = 0;
      this.score = 0;
      this.renderDom();
    } else {
      document.querySelector("#box h3").innerHTML = "Game Over";
    }
  }
};

window.onkeyup = function(event) {
  if (event.key === "y" || event.key === "n") {
    if (game.questions[game.currStep].answer === event.key) {
      alert("Correct");
      game.score++;
    } else {
      alert("Worng");
    }
    if (game.currStep < game.questions.length - 1) {
      game.currStep++;
      game.renderDom();
    } else {
      game.endGame();
    }
  }
};

game.renderDom();
