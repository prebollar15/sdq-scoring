export const calculateScore = (answers, questions) => {
  const newScore = {};
  let total_difficulty = 0;

  Object.keys(answers).forEach(question => {
    const { category } = questions.find(q => q.question === question);
    if (!newScore[category]) {
      newScore[category] = 0;
    }
    newScore[category] += Number(answers[question]);
    if (category !== "prosocial") {
      total_difficulty += Number(answers[question]);
    }
  });

  return { ...newScore, total_difficulty };
}; 