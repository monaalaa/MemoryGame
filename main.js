function handleButtonClick() {
  let title = document.getElementById("title");
  let userNameInput = document.getElementById("userName").value;
  title.style.backgroundColor = userNameInput;
}
let cards = [1, 3, 2, 1, 2, 3];
for (let i = 0; i < cards.length; i++) {
  let div = document.createElement("div");
  div.textContent = "Hidden Card";
  div.setAttribute("name", `Card ${cards[i]}`);
  document.body.appendChild(div);
  div.addEventListener("click", clickCard);
}
let isItFirstCard = false;
let prevCard;
function clickCard(event) {
  if (!isItFirstCard) {
    prevCard = event.target;
    prevCard.textContent = prevCard.getAttribute("name");
  } else {
    let currentCard = event.target;
    if (prevCard.getAttribute("name") === currentCard.getAttribute("name")) {
      currentCard.textContent = currentCard.getAttribute("name");
      console.log("Match");
    } else {
      currentCard.textContent = currentCard.getAttribute("name");

      setTimeout(function () {
        currentCard.textContent = "Hidden Card";
        prevCard.textContent = "Hidden Card";
      }, 1000);

      console.log("wrong");
    }
  }
  isItFirstCard = !isItFirstCard;
  console.log(event.target.getAttribute("name"));
}
