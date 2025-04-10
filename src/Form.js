import React, { useState } from 'react';
import { questions } from './data/questions';
import { calculateScore } from './utils/scoreCalculator';
import ProfileSelector from './components/ProfileSelector';
import Question from './components/Question';
import './Form.css';

function Form() {
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState({});
  const [error, setError] = useState(null);
  const [profile, setProfile] = useState('');

  const handleChange = (e, question) => {
    const newAnswers = { ...answers, [question]: e.target.value };
    setAnswers(newAnswers);
  };

  const handleProfileChange = (e) => {
    setProfile(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(answers).length !== questions.length) {
      setError("Please answer all questions before submitting");
      return;
    }
    if (!profile) {
      setError("Please select a profile before submitting");
      return;
    }
    setError(null);

    const newScore = calculateScore(answers, questions);
    setScore(newScore);
  };

  const formatCategoryName = (category) => {
    const categoryMap = {
      'prosocial': 'Prosocial Behavior',
      'hyperactivity': 'Hyperactivity',
      'emotional': 'Emotional Problems',
      'conduct_problems': 'Conduct Problems',
      'peer_problems': 'Peer Problems',
      'total_difficulty': 'Total Difficulty Score'
    };
    return categoryMap[category] || category;
  };

  return (
    <form onSubmit={handleSubmit}>
      <ProfileSelector
        profile={profile}
        onProfileChange={handleProfileChange}
      />

      {questions.map((question) => (
        <Question
          key={question.num}
          question={question}
          onChange={handleChange}
          value={answers[question.question]}
        />
      ))}

      {error && <p className="error-message">{error}</p>}

      <button type="submit">Submit</button>

      {Object.keys(score).length > 0 && (
        <div className="score-container">
          <h2>Assessment Results</h2>
          <div className="score-grid">
            {Object.entries(score).map(([category, value]) => (
              <div key={category} className="score-item">
                <span className="score-label">{formatCategoryName(category)}</span>
                <span className="score-value">{value}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </form>
  );
}

export default Form;
