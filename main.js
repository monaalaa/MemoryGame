function handleButtonClick() {
  let title = document.getElementById("title");
  let userNameInput = document.getElementById("userName").value;
  title.style.backgroundColor = userNameInput;
}
let cards = [1, 3, 2, 1, 2, 3];
let defaultURL = "https://robohash.org/1?set=set5";
cards.forEach((i) => {
  let img = document.createElement("img");
  let gallery = document.getElementsByClassName("gallery");
  img.src = defaultURL;
  img.setAttribute("name", `${cards[i]}`);
  gallery[0].appendChild(img);
  img.addEventListener("click", clickCard);
});

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
