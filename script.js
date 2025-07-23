document.getElementById('oracleForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const question = document.getElementById('question').value;
  const response = document.getElementById('response');

  // 🔮 Placeholder oracle logic
  const answers = [
    "Yes, without a doubt.",
    "In divine timing, yes.",
    "Not yet... but soon.",
    "The signs point to no.",
    "Your intuition already knows.",
    "First, clear your energy.",
    "Tralse says... maybe.",
    "Ask again when aligned with Verisyn."
  ];

  const randomAnswer = answers[Math.floor(Math.random() * answers.length)];
  response.innerText = `✨ Oracle says: ${randomAnswer}`;
});
