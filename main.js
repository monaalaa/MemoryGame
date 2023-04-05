let defaultURL = "https://robohash.org/1?set=set5";
let cards = [1, 3, 2, 1, 2, 3];
let isItFirstCard = false;
let prevCard;
let matchCardsCount = 0;
function handleButtonClick() {
  let title = document.getElementById("title");
  let userNameInput = document.getElementById("userName").value;
  title.style.backgroundColor = userNameInput;
}

function shuffleCards(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function createCards() {
  shuffleCards(cards);
  document.querySelector("#Play-button").style.display = "none";

  cards.forEach((card) => {
    let img = document.createElement("img");
    let gallery = document.getElementsByClassName("gallery");
    img.src = defaultURL;
    img.setAttribute("name", `${card}`);

    gallery[0].appendChild(img);

    img.addEventListener("click", clickCard);
  });
}

function clickCard(event) {
  if (!isItFirstCard) {
    prevCard = event.target;
    prevCard.src =
      "https://robohash.org/1?set=set" + prevCard.getAttribute("name");
  } else {
    checkSecondCard(event, prevCard);
  }
  isItFirstCard = !isItFirstCard;
  console.log(event.target.getAttribute("name"));
}

function checkSecondCard(event, prevCard) {
  let currentCard = event.target;
  if (prevCard.getAttribute("name") === currentCard.getAttribute("name")) {
    currentCard.src =
      "https://robohash.org/1?set=set" + currentCard.getAttribute("name");
    console.log("Match");
    ++matchCardsCount;
    if (matchCardsCount >= 3) {
      showWinMessage();
    }
  } else {
    currentCard.src =
      "https://robohash.org/1?set=set" + currentCard.getAttribute("name");

    setTimeout(function () {
      currentCard.src = defaultURL;
      prevCard.src = defaultURL;
    }, 1000);
  }
}

function showWinMessage() {
  document.querySelector(".overlay").style.display = "block";
}

function PlayAgain() {
  matchCardsCount = 0;
  document.querySelector(".overlay").style.display = "none";
  removePrevCards();
  createCards();
}

function removePrevCards() {
  let container = document.getElementById("image-Container");
  while (container.firstChild) {
    container.removeChild(container.firstChild);
    console.log("Remove child");
  }
}
