---
sidebar_position: 4
---

# Configuration

## Question Configuration

### Multiple Choice

```tsx
{
  id: 'mc-1',
  type: 'multiple-choice',
  question: 'Select the correct answer',
  points: 10,
  options: [
    { id: '1', text: 'Option 1', isCorrect: true },
    { id: '2', text: 'Option 2', isCorrect: false },
  ],
  allowMultiple: false,  // or true for multi-select
  shuffleOptions: true,
  feedback: {
    correct: { type: 'correct', message: 'Well done!' },
    incorrect: { type: 'incorrect', message: 'Try again!' },
    hints: ['Think carefully', 'Consider all options'],
  },
}
```

### Short Answer

```tsx
{
  id: 'sa-1',
  type: 'short-answer',
  question: 'What is H2O?',
  points: 5,
  correctAnswers: ['water', 'Water'],
  caseSensitive: false,
  trimWhitespace: true,
  maxLength: 50,
  placeholder: 'Type your answer...',
  validation: {
    rules: [
      { type: 'required', message: 'Answer required' },
      { type: 'maxLength', value: 50, message: 'Too long' },
    ],
  },
}
```

### Essay

```tsx
{
  id: 'essay-1',
  type: 'essay',
  question: 'Explain the concept...',
  points: 50,
  minWords: 100,
  maxWords: 500,
  minCharacters: 500,
  placeholder: 'Write your essay here...',
}
```

### Fill in the Blank

```tsx
{
  id: 'fib-1',
  type: 'fill-in-blank',
  question: 'Complete the sentence',
  points: 15,
  segments: [
    { type: 'text', content: 'The ' },
    { type: 'blank', id: 'b1', correctAnswers: ['quick'], placeholder: '___' },
    { type: 'text', content: ' brown fox.' },
  ],
}
```

### Matching

```tsx
{
  id: 'match-1',
  type: 'matching',
  question: 'Match countries with capitals',
  points: 20,
  pairs: [
    { id: 'p1', left: 'France', right: 'Paris' },
    { id: 'p2', left: 'Japan', right: 'Tokyo' },
  ],
  randomizeLeft: false,
  randomizeRight: true,
}
```

## Quiz Configuration

```tsx
const quizConfig: QuizConfig = {
  id: 'quiz-1',
  title: 'My Quiz',
  description: 'Quiz description',
  instructions: 'Answer all questions',
  
  // Submission
  submissionMode: 'quiz-level',  // 'question-level' | 'quiz-level' | 'hybrid'
  requireAllAnswered: true,
  allowReview: true,
  
  // Navigation
  allowNavigation: true,
  allowSkip: false,
  shuffleQuestions: false,
  
  // Timing
  timeLimit: 300,  // seconds
  showTimer: true,
  
  // Scoring
  passingScore: 70,  // percentage
  showScore: true,
  showCorrectAnswers: true,
  
  questions: [/* question configs */],
};
```
