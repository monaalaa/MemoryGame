function handleButtonClick() {
  let title = document.getElementById("title");
  let userNameInput = document.getElementById("userName").value;
  title.style.backgroundColor = userNameInput;
}
let defaultURL = "https://robohash.org/1?set=set5";
let cards = [1, 3, 2, 1, 2, 3];

function shuffleCards(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  console.log(array);
  return array;
}

/*function createCards() {
  shuffleCards(cards);
  console.log(cards + "new card");

  cards.forEach((card, index) => {
    let img = document.createElement("img");
    let gallery = document.getElementsByClassName("gallery");
    img.src = defaultURL;
    console.log(index + " card number" + card);
    img.setAttribute("name", `${card}`);

    gallery[0].appendChild(img);

    img.addEventListener("click", clickCard);
  });
}*/

function createCards() {
  shuffleCards(cards);
  console.log(cards + "new card");

  for (let i = 0; i < cards.length; i++) {
    let img = document.createElement("img");
    let gallery = document.getElementsByClassName("gallery");
    img.src = defaultURL;
    console.log(i + " card number" + cards[i]);
    img.setAttribute("name", `${cards[i]}`);

    gallery[0].appendChild(img);

    img.addEventListener("click", clickCard);
  }
}

let isItFirstCard = false;
let prevCard;
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
  } else {
    currentCard.src =
      "https://robohash.org/1?set=set" + currentCard.getAttribute("name");

    setTimeout(function () {
      currentCard.src = defaultURL;
      prevCard.src = defaultURL;
    }, 1000);

    console.log("wrong");
  }
}
