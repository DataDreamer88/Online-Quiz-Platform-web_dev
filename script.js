function submitExam() {
    let score = 0;
    const questions = [
      { answer: "answer-1b" }, // Correct answer for question 1
      { answer: "answer-2a" }, // Correct answer for question 2
      { answer: "answer-3d" }, // Correct answer for question 3
      { answer: "answer-4b" }  // Correct answer for question 4
    ];
  
    for (let i = 0; i < questions.length; i++) {
      const selectedAnswer = document.querySelector(
        `input[name=question-${i + 1}]:checked`
      );
      if (selectedAnswer && selectedAnswer.id === questions[i].answer) {
        score++;
      }
    }
  
    const totalMarks = questions.length;
    const percentage = Math.round((score / totalMarks) * 100);
  
    alert(`Your score is ${score} out of ${totalMarks} (${percentage}%)`);
  }
  