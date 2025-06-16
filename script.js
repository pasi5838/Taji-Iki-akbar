
let correctAnswer;

function generateQuestion() {
  const num1 = Math.floor(Math.random() * 50);
  const num2 = Math.floor(Math.random() * 50);
  const operator = Math.random() < 0.5 ? '+' : '-';
  const answer = operator === '+' ? num1 + num2 : num1 - num2;
  correctAnswer = answer;

  const questionText = `${num1} ${operator} ${num2} = ?`;
  document.getElementById('question').innerText = questionText;

  const choices = new Set();
  choices.add(answer);
  while (choices.size < 4) {
    choices.add(answer + Math.floor(Math.random() * 20 - 10));
  }
  const choicesArray = Array.from(choices).sort(() => Math.random() - 0.5);

  const choicesDiv = document.getElementById('choices');
  choicesDiv.innerHTML = '';
  choicesArray.forEach(choice => {
    const btn = document.createElement('button');
    btn.innerText = choice;
    btn.className = 'choice';
    btn.onclick = () => {
      if (choice === correctAnswer) {
        generateQuestion();
      } else {
        alert('Jawaban salah! Coba lagi.');
      }
    };
    choicesDiv.appendChild(btn);
  });
}

function resetGame() {
  generateQuestion();
}

window.onload = generateQuestion;
