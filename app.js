let keepInLoop = true 
const numbers = []

function createRandomNumber() {
  return Math.round(Math.random() * 10);
}

while(keepInLoop) {
  const random1 = createRandomNumber()
  const random2 = createRandomNumber()

  if(numbers.some(expr => expr === `${random1},${random2}`)) {
    continue;
  }

  numbers.push(`${random1},${random2}`);
  const answer = Number(prompt(`${random1} x ${random2} :`));

  console.log(answer === random1 * random2 ? `Acertou! ${answer}`: `Errou! Resposta correta seria: ${random1 * random2}`);
  
  keepInLoop = confirm("Continuar? ");
  if(numbers.length === 100) keepInLoop = false;
}