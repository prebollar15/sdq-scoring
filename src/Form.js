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
  const [showErrors, setShowErrors] = useState(false);

  const handleChange = (e, question) => {
    const newAnswers = { ...answers, [question]: e.target.value };
    setAnswers(newAnswers);
  };

  const handleProfileChange = (e) => {
    setProfile(e.target.value);
  };

  const handleStartOver = () => {
    setAnswers({});
    setScore({});
    setError(null);
    setProfile('');
    setShowErrors(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(answers).length !== questions.length) {
      setError("Please answer all questions before submitting");
      setShowErrors(true);
      return;
    }
    if (!profile) {
      setError("Please select a profile before submitting");
      return;
    }
    setError(null);
    setShowErrors(false);

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

  const isQuestionAnswered = (question) => {
    return answers[question.question] !== undefined;
  };

  return (
    <div className="form-wrapper">
      <div className="form-header">
        <h1>SDQ Scoring Calculator</h1>
        <div className="form-description">
          <p>
            Scoring the Strengths & Difficulties Questionnaire for age 4-17
          </p>
          <p>
            The 25 items in the SDQ comprise 5 scales of 5 items each. It is usually easiest to score all 5
            scales first before working out the total difficulties score. 'Somewhat True' is always scored as
            1, but the scoring of 'Not True' and 'Certainly True' varies with the item, as shown below scale
            by scale. For each of the 5 scales the score can range from 0 to 10 if all items were completed.
            These scores can be scaled up pro-rata if at least 3 items were completed, e.g. a score of 4
            based on 3 completed items can be scaled up to a score of 7 (6.67 rounded up) for 5 items.
          </p>
        </div>
      </div>

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
            isError={showErrors && !isQuestionAnswered(question)}
          />
        ))}

        {error && <p className="error-message">{error}</p>}

        <div className="button-container">
          <button type="submit">Submit</button>
          <button type="button" onClick={handleStartOver} className="start-over-button">Start Over</button>
        </div>

        {Object.keys(score).length > 0 && (
          <div className="score-container">
            <h2>Assessment Results</h2>
            <div className="profile-info">
              <span className="profile-label">Profile:</span>
              <span className="profile-value">{profile}</span>
            </div>
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
    </div>
  );
}

export default Form;
