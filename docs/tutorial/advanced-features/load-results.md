---
sidebar_position: 3
---

# Load Previous Results

You can store results and load them into the components. This will allow users to review their learning by analyzing previous submission results.

```tsx
import { useQuizStorage, createLocalStorageManager } from '@scinforma/picolms';

const storage = createLocalStorageManager('user-123');

function MyQuiz() {
  const { latestResult, statistics } = useQuizStorage({
    storageManager: storage,
    quizId: 'quiz-1',
    autoLoad: true,
  });

  return (
    <div>
      <p>Best Score: {statistics.bestScore}</p>
      <p>Total Attempts: {statistics.totalAttempts}</p>
      
      {latestResult && (
        <Quiz config={quizConfig} loadedResult={latestResult}>
          <QuizResults onRetake={() => window.location.reload()} />
        </Quiz>
      )}
    </div>
  );
}
```
