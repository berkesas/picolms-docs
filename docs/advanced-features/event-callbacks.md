---
sidebar_position: 2
---

# Event Callbacks

You can capture events and do some actions in your app.

```tsx
<Quiz 
  config={quizConfig}
  onAnswerChange={(questionId, answer) => {
    console.log('Answer changed:', questionId, answer);
  }}
  onProgressChange={(progress) => {
    console.log('Progress:', progress.percentComplete);
  }}
  onQuizSubmit={(result) => {
    console.log('Submitted:', result);
  }}
/>
```
