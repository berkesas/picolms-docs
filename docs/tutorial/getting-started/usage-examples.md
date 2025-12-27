---
sidebar_position: 6
---

# Usage Examples

## Question-Level Submission

Each question is submitted individually with immediate feedback:

```tsx
const config = {
  id: 'quiz-1',
  submissionMode: 'question-level',
  questions: [/* ... */],
  showFeedbackOnSubmit: true,
};
```

## Quiz-Level Submission

All questions submitted together at the end:

```tsx
const config = {
  id: 'quiz-2',
  submissionMode: 'quiz-level',
  questions: [/* ... */],
  requireAllAnswered: true,
  allowReview: true,
};
```

## Timed Quiz

```tsx
const config = {
  id: 'quiz-3',
  timeLimit: 300,  // 5 minutes in seconds
  showTimer: true,
  questions: [/* ... */],
};
```

## Linear Quiz (No Back Navigation)

```tsx
const config = {
  id: 'quiz-4',
  allowNavigation: false,
  allowSkip: false,
  questions: [/* ... */],
};
```

## TypeScript Support

Full TypeScript definitions are included:

```tsx
import type { 
  QuizConfig,
  QuestionConfig,
  MultipleChoiceConfig,
  TrueFalseConfig,
  ShortAnswerConfig,
  EssayConfig,
  QuizResult,
  QuestionAnswer,
  LoadedQuizResult
} from '@scinforma/picolms';

const config: MultipleChoiceConfig = {
  id: 'q1',
  type: 'multiple-choice',
  question: 'Sample question',
  points: 10,
  options: [/* ... */],
};

const handleSubmit = (result: QuizResult) => {
  console.log(result.score, result.isPassed);
};
```
