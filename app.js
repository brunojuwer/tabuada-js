let correctAnswer = 0

document.querySelector("form").addEventListener('submit', e => {
  e.preventDefault();
  userAnswer(Number(e.target.userResult.value))
  document.querySelector('section').classList.remove('hidden');
})

function createRandomNumber() {
  return Math.round(Math.random() * 10);
}

function gotItRight(answer) {
  document.querySelector('#answer').innerText = "Acertou!"
  document.querySelector('#result').innerHTML = `Sua resposta <span id="correct">${answer}</span>`;
}

function gotItWrong(answer) {
  document.querySelector('#answer').innerText = "Errou!"
  document.querySelector('#result').innerHTML = `Resposta correta <span id="correct">${answer}</span>`;
}

function addNumberToScreen(number1, number2) {
  document.querySelector('#number1').innerText = number1;
  document.querySelector('#number2').innerText = number2;
}

function userAnswer(answer) {
  return answer === correctAnswer ? 
    gotItRight(correctAnswer) : 
    gotItWrong(correctAnswer) ;
}

const numbers = [];

function createMultiplication() {
  const random1 = createRandomNumber()
  const random2 = createRandomNumber()

  if(numbers.some(expr => expr === `${random1},${random2}`)) {
    createMultiplication();
    return;
  }
  
  numbers.push(`${random1},${random2}`);
  addNumberToScreen(random1, random2);
  document.querySelector('input').focus();
  document.querySelector('input').value = "";
  document.querySelector('section').classList.add('hidden');
  correctAnswer = random1 * random2;
}
createMultiplication()
document.querySelector('input').focus();