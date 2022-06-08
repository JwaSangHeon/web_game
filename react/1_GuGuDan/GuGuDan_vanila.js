const $question = document.querySelector("#question");
const $form = document.querySelector("#form");
const $input = document.querySelector("#input");
const $result = document.querySelector("#result");

let firstNum = Math.floor(Math.random() * 10);
let secondNum = Math.floor(Math.random() * 10);
$question.innerText = `${firstNum}곱하기 ${secondNum}는?`;

$form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (Number($input.value) === firstNum * secondNum) {
    $result.innerText = "정답!";
    firstNum = Math.floor(Math.random() * 10);
    secondNum = Math.floor(Math.random() * 10);
    $question.innerText = `${firstNum}곱하기 ${secondNum}는?`;
    $input.value = "";
    $input.focus();
  } else {
    $result.innerText = "오답";
    $input.value = "";
    $input.focus();
  }
});
