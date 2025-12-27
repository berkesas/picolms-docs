---
sidebar_position: 2
---

# Quick Examples

## Basic Question

```tsx
import { MultipleChoice } from '@scinforma/picolms';
import "@scinforma/picolms/styles.css";

function MyQuestion() {
  const config = {
    id: 'q1',
    type: 'multiple-choice',
    question: 'What is the capital of France?',
    points: 10,
    options: [
      { id: '1', text: 'London', isCorrect: false },
      { id: '2', text: 'Paris', isCorrect: true },
      { id: '3', text: 'Berlin', isCorrect: false },
      { id: '4', text: 'Madrid', isCorrect: false },
    ],
    allowMultiple: false,
  };

  return (
    <MultipleChoice 
      config={config}
      onAnswerChange={(answer) => console.log(answer)}
      showFeedback={true}
    />
  );
}
```

## Complete Quiz

```tsx
import { 
  Quiz, 
  QuizNavigation, 
  QuizProgressBar,
  MultipleChoice,
  ShortAnswer
} from '@scinforma/picolms';
import { useQuizContext } from '@scinforma/picolms';

function MyQuiz() {
  const quizConfig = {
    id: 'quiz-1',
    title: 'React Fundamentals Quiz',
    description: 'Test your React knowledge',
    submissionMode: 'quiz-level',
    questions: [
      {
        id: 'q1',
        type: 'multiple-choice',
        question: 'What is JSX?',
        points: 10,
        options: [
          { id: '1', text: 'JavaScript XML', isCorrect: true },
          { id: '2', text: 'Java Syntax Extension', isCorrect: false },
        ],
        allowMultiple: false,
      },
      {
        id: 'q2',
        type: 'short-answer',
        question: 'What hook manages state?',
        points: 5,
        correctAnswers: ['useState'],
        caseSensitive: false,
      },
    ],
    allowNavigation: true,
    passingScore: 70,
    showScore: true,
    showCorrectAnswers: true,
  };

  return (
    <Quiz 
      config={quizConfig}
      onQuizSubmit={(result) => {
        console.log('Quiz completed!');
        console.log('Score:', result.score, '/', result.maxScore);
        console.log('Passed:', result.isPassed);
      }}
    >
      <QuizContent />
    </Quiz>
  );
}

function QuizContent() {
  const { currentQuestion, setAnswer } = useQuizContext();
  
  if (!currentQuestion) return null;

  return (
    <>
      <QuizProgressBar />
      <div>
        {currentQuestion.type === 'multiple-choice' && (
          <MultipleChoice 
            config={currentQuestion}
            onAnswerChange={(answer) => setAnswer(currentQuestion.id, answer)}
          />
        )}
        {currentQuestion.type === 'short-answer' && (
          <ShortAnswer 
            config={currentQuestion}
            onAnswerChange={(answer) => setAnswer(currentQuestion.id, answer)}
          />
        )}
      </div>
      <QuizNavigation showQuestionList />
    </>
  );
}
```
