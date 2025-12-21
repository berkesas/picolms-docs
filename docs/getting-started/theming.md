---
sidebar_position: 5
---

# Theming

Customize the appearance with CSS variables:

```css
:root {
  /* Primary Colors */
  --picolms-color-primary: #your-color;
  --picolms-color-success: #your-success;
  --picolms-color-error: #your-error;
  
  /* Typography */
  --picolms-font-family: 'Inter', sans-serif;
  --picolms-font-size-base: 16px;
  
  /* Spacing */
  --picolms-spacing-md: 1rem;
  --picolms-spacing-lg: 1.5rem;
  
  /* Border Radius */
  --picolms-radius-md: 0.5rem;
}
```

## Dark Mode

```tsx
<div data-theme="dark">
  <Quiz config={quizConfig} />
</div>
```

## Component-Specific Styling

All components use the `picolms-` prefix for easy targeting:

```css
/* Customize multiple choice options */
.picolms-mc-option {
  border: 3px solid #custom-color;
  border-radius: 1rem;
}

.picolms-mc-option:hover {
  background: #custom-hover;
}

/* Customize quiz container */
.picolms-quiz-container {
  max-width: 900px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

/* Customize navigation buttons */
.picolms-quiz-nav-button {
  padding: 1rem 2rem;
  font-size: 1.1rem;
}

/* Customize progress bar */
.picolms-quiz-progress-fill {
  background: linear-gradient(90deg, #custom-start, #custom-end);
}
```

### Available Class Names

All components use prefixed class names for easy customization:

**Question Components:**

- `.picolms-base-question`
- `.picolms-question-header`, `.picolms-question-text`
- `.picolms-mc-option`, `.picolms-mc-option-selected`
- `.picolms-tf-button`, `.picolms-tf-toggle`
- `.picolms-sa-input`, `.picolms-essay-textarea`
- `.picolms-fib-blank`, `.picolms-matching-container`

**Quiz Components:**

- `.picolms-quiz-container`
- `.picolms-quiz-progress-bar`, `.picolms-quiz-progress-fill`
- `.picolms-quiz-nav-button`, `.picolms-quiz-question-list`
- `.picolms-quiz-results`, `.picolms-result-question`
