document.addEventListener("DOMContentLoaded", () => {
  const cardArray = [
    {
      name: "bird",
      img: "images/bird.avif",
    },
    {
      name: "cat",
      img: "images/cat.avif",
    },
    {
      name: "dear",
      img: "images/dear.avif",
    },
    {
      name: "dog",
      img: "images/dog.avif",
    },
    {
      name: "giraffe",
      img: "images/giraffe.avif",
    },
    {
      name: "tiger",
      img: "images/tiger.avif",
    },
    {
      name: "bird",
      img: "images/bird.avif",
    },
    {
      name: "cat",
      img: "images/cat.avif",
    },
    {
      name: "dear",
      img: "images/dear.avif",
    },
    {
      name: "dog",
      img: "images/dog.avif",
    },
    {
      name: "giraffe",
      img: "images/giraffe.avif",
    },
    {
      name: "tiger",
      img: "images/tiger.avif",
    },
  ];
  cardArray.sort(() => 0.5 - Math.random());
  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsWon = [];
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement("img");
      card.setAttribute("src", "images/blank.avif");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    }
  }
  function checkForMatch() {
    const cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute("src", "images/blank.avif");
      cards[optionTwoId].setAttribute("src", "images/blank.avif");
      alert("You have clicked the same image!");
    } else if (cardsChosen[0] === cardsChosen[1]) {
      alert("You found a match");
      cards[optionOneId].setAttribute("src", "images/white.avif");
      cards[optionTwoId].setAttribute("src", "images/white.avif");
      cards[optionOneId].removeEventListener("click", flipCard);
      cards[optionTwoId].removeEventListener("click", flipCard);
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute("src", "images/blank.avif");
      cards[optionTwoId].setAttribute("src", "images/blank.avif");
      alert("Sorry, try again");
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = "Congratulations! You found them all!";
    }
  }
  function flipCard() {
    let cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }
  createBoard();
});
