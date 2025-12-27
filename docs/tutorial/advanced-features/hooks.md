---
sidebar_position: 5
---

# Hooks

You can use hooks to access component state.

## useQuizContext

Access quiz state from any child component:

```tsx
import { useQuizContext } from '@scinforma/picolms';

function CustomComponent() {
  const { 
    currentQuestion, 
    setAnswer, 
    progress, 
    submitQuiz 
  } = useQuizContext();
  
  return <div>Question {progress.currentQuestionIndex + 1}</div>;
}
```

## useQuizStorage

Manage quiz result storage:

```tsx
import { useQuizStorage, createLocalStorageManager } from '@scinforma/picolms';

const storage = createLocalStorageManager('user-id');

function MyComponent() {
  const {
    latestResult,
    allAttempts,
    statistics,
    saveResult,
    loadLatest,
    clearAll,
  } = useQuizStorage({
    storageManager: storage,
    quizId: 'quiz-1',
    autoLoad: true,
  });

  return (
    <div>
      <p>Best Score: {statistics.bestScore}</p>
      <p>Attempts: {statistics.totalAttempts}</p>
    </div>
  );
}
```
