---
sidebar_position: 1
---

# Custom Question Renderer

You can use custom renderers . This will allow you to render the texts of questions and options in any way you want.

```tsx
<Quiz 
  config={quizConfig}
  renderQuestion={(question, index) => (
    <div style={{ background: 'lightblue', padding: '2rem' }}>
      <h2>Custom Question {index + 1}</h2>
      <MultipleChoice config={question} />
    </div>
  )}
/>
```
