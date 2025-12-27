---
sidebar_position: 6
---

# Grading

Use grading features to assess learning.

```tsx
import { gradeQuestion, gradeQuiz } from '@scinforma/picolms';

// Grade a single question
const result = gradeQuestion(questionConfig, answer);
console.log(result.isCorrect, result.score);

// Grade entire quiz
const quizResult = gradeQuiz({ questions }, answersMap);
console.log(quizResult.totalScore, quizResult.percentage);
```
