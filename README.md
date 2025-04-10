# SDQ Scoring Application

A React-based application for administering and scoring the Strengths and Difficulties Questionnaire (SDQ). The SDQ is a behavioral screening questionnaire that provides a balanced view of children's psychological attributes.

## Features

- Interactive questionnaire with 25 questions
- Multiple profile types (Student, Parent, Teacher)
- Automatic scoring calculation
- Category-based scoring with formatted display:
  - Prosocial Behavior
  - Hyperactivity
  - Emotional Problems
  - Conduct Problems
  - Peer Problems
  - Total Difficulty Score
- Modern, responsive UI with clear visual hierarchy
- Form validation and error handling

## Project Structure

```
src/
├── components/
│   ├── ProfileSelector.js    # Profile selection component
│   └── Question.js          # Individual question component
├── data/
│   └── questions.js         # Question data and options
├── utils/
│   └── scoreCalculator.js   # Scoring calculation logic
├── Form.js                  # Main form component
└── Form.css                 # Styling for form and components
```

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

## Usage

1. Select a profile type (Student, Parent, or Teacher)
2. Answer all 25 questions by selecting one of three options:
   - Not True (0 points)
   - Somewhat True (1 point)
   - Certainly True (2 points)
3. Submit the form to view the assessment results

## Scoring System

The application calculates scores for different behavioral categories:

- **Prosocial Behavior**: Measures positive social interactions
- **Hyperactivity**: Assesses activity levels and attention
- **Emotional Problems**: Evaluates emotional well-being
- **Conduct Problems**: Measures behavioral issues
- **Peer Problems**: Assesses social relationships
- **Total Difficulty**: Sum of all scores except Prosocial

Note: Some questions have reversed scoring (0,1,2 → 2,1,0) to maintain consistency in the assessment.

## UI Features

- Clean, modern design with consistent spacing
- Responsive layout that works on all devices
- Clear visual hierarchy for questions and options
- Formatted score display with category names
- Error handling for incomplete submissions
- Interactive form elements with hover states
- Accessible form controls

## Development

The application is built with:
- React (Functional components with hooks)
- Modern JavaScript (ES6+)
- CSS3 with Flexbox and Grid
- Component-based architecture

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License.
