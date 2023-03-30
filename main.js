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
let prevValue = "";
function clickCard(event) {
  if (!isItFirstCard) {
    prevValue = event.target.getAttribute("name");
  } else {
    if (prevValue === event.target.getAttribute("name")) {
      console.log("Match");
    } else {
      console.log("wrong");
    }
  }
  isItFirstCard = !isItFirstCard;
  console.log(event.target.getAttribute("name"));
}
