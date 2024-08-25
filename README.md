# AI Prompt Generator

## 🚀 Overview

The AI Prompt Generator is a sophisticated React-based web application designed to create unique, AI-ready prompts. It combines cutting-edge front-end technologies with intelligent prompt engineering to provide a seamless user experience for AI enthusiasts, researchers, and creative professionals.



## 🌟 Features

- **Dynamic Prompt Building**: Construct complex prompts with customizable parameters
- **Theme Integration**: Incorporate pre-defined themes stored in JSON format
- **Random Sentence Generation**: Utilize NLP techniques for creative prompt suggestions
- **Responsive Design**: Seamless experience across desktop and mobile devices
- **Parameter Management**: Fine-tune prompts with adjustable settings like aspect ratio, stylization, and more

## 🛠️ Technologies Used

- **React**: Core framework for building the user interface
- **Material-UI**: For sleek, responsive component design
- **Compromise.js**: Light-weight NLP library for random sentence generation
- **Lodash**: Utility library for efficient data manipulation
- **CSS Modules**: For scoped, maintainable styling

## 📂 Project Structure

```
src/
├── components/
│   ├── PromptBuilder.jsx
│   ├── ParametersAccordion.jsx
│   ├── ThemeManager.jsx
│   └── ...
├── utils/
│   └── RandomSentenceGenerator.js
├── data/
│   └── themes.json
└── styles/
    └── PromptBuilder.module.css
```

## 🧠 Development Approach

### Component-Based Architecture
The project follows a modular, component-based architecture, promoting reusability and maintainability. Each major functionality is encapsulated in its own component (e.g., PromptBuilder, ParametersAccordion).

### State Management
Utilizing React's `useReducer` and `useContext` hooks for efficient state management, allowing for complex state logic without the need for external libraries.

### Theme Management
Themes are stored in a JSON format, allowing for easy updates and scalability. The ThemeManager component dynamically renders theme options based on this data.

```json
{
  "themes": [
    {
      "name": "Cyberpunk",
      "keywords": ["neon", "futuristic", "dystopian"]
    },
    // More themes...
  ]
}
```

### Code Generation
The project implements a generalized approach to code writing, emphasizing:
- DRY (Don't Repeat Yourself) principles
- SOLID design patterns
- Functional programming concepts

### Performance Optimization
- Debouncing for input fields to reduce unnecessary re-renders
- Memoization of complex calculations
- Lazy loading of components for improved initial load time

## 🚀 Getting Started

1. Clone the repository
   ```
   git clone https://github.com/yourusername/ai-prompt-generator.git
   ```
2. Install dependencies
   ```
   npm install
   ```
3. Start the development server
   ```
   npm start
   ```




## 📞 Contact

irisgrabois@gmail.com

Project Link: [https://github.com/iris-g/PromptGen]

---

⭐️ If you found this project interesting, don't forget to give it a star on GitHub!