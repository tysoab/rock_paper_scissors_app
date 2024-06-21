//select elements

const btnPicks = document.querySelectorAll(".btn-pick");
const result = document.getElementById("result");
const userPickEl = document.querySelector("#user-pick");
const computerPickEl = document.querySelector("#computer-pick");
const resultDetails = document.querySelector(".result-details");

//computer pick
let userPick, computerPick;
const spinner = '<i class="fa-solid fa-spinner fa-spin"></i>';

btnPicks.forEach(function (button) {
  button.addEventListener("click", btnPick);
});

function btnPick(event) {
  userPick = event.target.closest(".fa-solid").dataset.pick;
  resultDetails.style.display = "none";
  const randomNumber = Math.trunc(Math.random() * 3) + 1;

  if (randomNumber === 1) {
    computerPick = "rock";
  }
  if (randomNumber === 2) {
    computerPick = "paper";
  }
  if (randomNumber === 3) {
    computerPick = "scissors";
  }
  result.innerHTML = spinner;
  btnPicks.forEach((btn) => (btn.disabled = true));

  const timeoutId = setTimeout(function () {
    if (userPick === computerPick) {
      result.textContent = "Draw!";
    }
    if (userPick === "rock" && computerPick === "scissors")
      result.textContent = "You win!";
    if (userPick === "paper" && computerPick === "rock")
      result.textContent = "You win!";
    if (userPick === "scissors" && computerPick === "paper")
      result.textContent = "You win!";

    if (computerPick === "rock" && userPick === "scissors")
      result.textContent = "You Lose!";
    if (computerPick === "paper" && userPick === "rock")
      result.textContent = "You Lose!";
    if (computerPick === "scissors" && userPick === "paper")
      result.textContent = "You Lose!";
    btnPicks.forEach((btn) => (btn.disabled = false));
    setPick(userPick, userPickEl);
    setPick(computerPick, computerPickEl);
  }, 2000);

  return () => clearTimeout(timeoutId);
}

function setPick(player, element) {
  resultDetails.style.display = "block";
  element.innerHTML =
    player === "rock"
      ? '<i class="fa-solid fa-hand-back-fist"></i>'
      : player === "paper"
      ? '<i class="fa-solid fa-hand" data-pick="paper"></i>'
      : '<i class="fa-solid fa-hand-scissors" data-pick="scissors"></i>';
}
