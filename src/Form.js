import React, { useState } from 'react';

function Form() {
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState({});
  const [error, setError] = useState(null);
  const [profile, setProfile] = useState('');


  
  const questions = [
    {
        num: '1',
        question: 'Considerate of other peoples feelings',
        category: 'prosocial',
        options: [
        { label: 'Not True', value: 0 },
        { label: 'Somewhat True', value: 1 },
        { label: 'Certainly True', value: 2 },
        ],
    },
    {
        num: '2',
        question: 'Restless, overactive, cannot stay still for long',
        category: 'hyperactivity',
        options: [
            { label: 'Not True', value: 0 },
            { label: 'Somewhat True', value: 1 },
            { label: 'Certainly True', value: 2 },
        ],
    },
    {
        num: '3',
        question: 'Often complains of headaches, stomach-aches or sickness',
        category: 'emotional',
        options: [
            { label: 'Not True', value: 0 },
            { label: 'Somewhat True', value: 1 },
            { label: 'Certainly True', value: 2 },
        ],
    },
    {
        num: '4',
        question: 'Shares readily with other youth, for example pencils, books, food',
        category: 'prosocial',
        options: [
            { label: 'Not True', value: 0 },
            { label: 'Somewhat True', value: 1 },
            { label: 'Certainly True', value: 2 },
        ],
    },
    {
        num: '5',
        question: 'Often loses temper',
        category: 'conduct_problems',
        options: [
            { label: 'Not True', value: 0 },
            { label: 'Somewhat True', value: 1 },
            { label: 'Certainly True', value: 2 },
        ],
    },
    {
        num: '6',
        question: 'Would rather be alone than with other youth',
        category: 'peer_problems',
        options: [
            { label: 'Not True', value: 0 },
            { label: 'Somewhat True', value: 1 },
            { label: 'Certainly True', value: 2 },
        ],
    },
    {
        num: '7',
        question: 'Generally well behaved, usually does what adults request',
        category: 'conduct_problems',
        options: [
            { label: 'Not True', value: 2 },
            { label: 'Somewhat True', value: 1 },
            { label: 'Certainly True', value: 0 },
        ],
    },
    {
        num: '8',
        question: 'Many worries or often seems worried',
        category: 'emotional',
        options: [
            { label: 'Not True', value: 0 },
            { label: 'Somewhat True', value: 1 },
            { label: 'Certainly True', value: 2 },
        ],
    },
    {
        num: '9',
        question: 'Helpful if someone is hurt, upset or feeling ill',
        category: 'prosocial',
        options: [
            { label: 'Not True', value: 0 },
            { label: 'Somewhat True', value: 1 },
            { label: 'Certainly True', value: 2 },
        ],
    },
    {
        num: '10',
        question: 'Constantly fidgeting or squirming',
        category: 'hyperactivity',
        options: [
            { label: 'Not True', value: 0 },
            { label: 'Somewhat True', value: 1 },
            { label: 'Certainly True', value: 2 },
        ],
    },
    {
        num: '11',
        question: 'Has at least one good friend',
        category: 'peer_problems',
        options: [
            { label: 'Not True', value: 2 },
            { label: 'Somewhat True', value: 1 },
            { label: 'Certainly True', value: 0 },
        ],
    },
    {
        num: '12',
        question: 'Often fights with other youth or bullies them',
        category: 'conduct_problems',
        options: [
            { label: 'Not True', value: 0 },
            { label: 'Somewhat True', value: 1 },
            { label: 'Certainly True', value: 2 },
        ],
    },
    {
        num: '13',
        question: 'Often unhappy, depressed or tearful',
        category: 'emotional',
        options: [
            { label: 'Not True', value: 0 },
            { label: 'Somewhat True', value: 1 },
            { label: 'Certainly True', value: 2 },
        ],
    },
    {
        num: '14',
        question: 'Generally liked by other youth',
        category: 'peer_problems',
        options: [
            { label: 'Not True', value: 2 },
            { label: 'Somewhat True', value: 1 },
            { label: 'Certainly True', value: 0 },
        ],
    },
    {
        num: '15',
        question: 'Easily distracted, concentration wanders',
        category: 'hyperactivity',
        options: [
            { label: 'Not True', value: 0 },
            { label: 'Somewhat True', value: 1 },
            { label: 'Certainly True', value: 2 },
        ],
    },
    {
        num: '16',
        question: 'Nervous in new situations, easily loses confidence',
        category: 'emotional',
        options: [
            { label: 'Not True', value: 0 },
            { label: 'Somewhat True', value: 1 },
            { label: 'Certainly True', value: 2 },
        ],
    },
    {
        num: '17',
        question: 'Kind to younger children',
        category: 'prosocial',
        options: [
            { label: 'Not True', value: 0 },
            { label: 'Somewhat True', value: 1 },
            { label: 'Certainly True', value: 2 },
        ],
    },
    {
        num: '18',
        question: 'Often lies or cheats',
        category: 'conduct_problems',
        options: [
            { label: 'Not True', value: 0 },
            { label: 'Somewhat True', value: 1 },
            { label: 'Certainly True', value: 2 },
        ],
    },
    {
        num: '19',
        question: 'Picked on or bullied by other youth',
        category: 'peer_problems',
        options: [
            { label: 'Not True', value: 0 },
            { label: 'Somewhat True', value: 1 },
            { label: 'Certainly True', value: 2 },
        ],
    },
    {
        num: '20',
        question: 'Often offers to help others(parents, teachers, children)',
        category: 'prosocial',
        options: [
            { label: 'Not True', value: 0 },
            { label: 'Somewhat True', value: 1 },
            { label: 'Certainly True', value: 2 },
        ],
    },
    {
        num: '21',
        question: 'Thinks things out before acting',
        category: 'hyperactivity',
        options: [
            { label: 'Not True', value: 2 },
            { label: 'Somewhat True', value: 1 },
            { label: 'Certainly True', value: 0 },
        ],
    },
    {
        num: '22',
        question: 'Steals from home, school or elsewhere',
        category: 'conduct_problems',
        options: [
            { label: 'Not True', value: 0 },
            { label: 'Somewhat True', value: 1 },
            { label: 'Certainly True', value: 2 },
        ],
    },
    {
        num: '23',
        question: 'Gets along better with adults than with other youth',
        category: 'peer_problems',
        options: [
            { label: 'Not True', value: 0 },
            { label: 'Somewhat True', value: 1 },
            { label: 'Certainly True', value: 2 },
        ],
    },
    {
        num: '24',
        question: 'Many fears, easily scared',
        category: 'emotional',
        options: [
            { label: 'Not True', value: 0 },
            { label: 'Somewhat True', value: 1 },
            { label: 'Certainly True', value: 2 },
        ],
    },
    {
        num: '25',
        question: 'Good attention span, sees work through to the end',
        category: 'hyperactivity',
        options: [
            { label: 'Not True', value: 2 },
            { label: 'Somewhat True', value: 1 },
            { label: 'Certainly True', value: 0 },
        ],
    },

    // and so on...
  ];
  
  const handleChange = (e, question) => {
    const newAnswers = { ...answers, [question]: e.target.value };
    setAnswers(newAnswers);
  }

  const handleProfileChange = (e) => {
    setProfile(e.target.value);
  }
  
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

    let newScore = {};
    let total_difficulty = 0;
    Object.keys(answers).forEach(question => {
      const { category } = questions.find(q => q.question === question);
      if (!newScore[category]) {
        newScore[category] = 0;
      }
      newScore[category] += Number(answers[question]);
     if (category !== "prosocial") { total_difficulty += Number(answers[question]);}

    });
    setScore({...newScore, total_difficulty});
  }
  
  return (
    <form onSubmit={handleSubmit}>
        <div>
        <label>Select Profile:
          <select value={profile} onChange={handleProfileChange}>
            <option value="" disabled>Select</option>
            <option value="student">Student</option>
            <option value="parent">Parent</option>
            <option value="teacher">Teacher</option>
        </select>
        </label>
        </div>
      {questions.map((question, index) => (
        <div key={index}>
          <p>{question.num}. {question.question}</p>
          {question.options.map((option, i) => (
            <label key={i}>
              <input type="radio" name={`question-${index}`} value={option.value} onChange={e => handleChange(e, question.question)} />
              {option.label}
            </label>
          ))}
          {/* {console.log({index})} */}
          {/* {if ((index+1) % 8 === 0) ? </ br> : <p></p>} */}
        </div>
        
      ))
      }
            {error && <p style={{color: "red"}}>{error}</p>}

      <button type="submit">Submit</button>
      <div>
        {Object.keys(score).map(category => (
          <p key={category}>{category}: {score[category]}</p>
        ))}
                {/* <p>Grand Total: {score.total_difficulty}</p> */}

      </div>
    </form>
  );
}

export default Form;
