# AI Prompt Generator

## 👋 Welcome!

Hey there! I'm an AI enthusiast who's been using Midjourney for fun and creativity. Like many others, I found myself struggling to find a tool that really met my needs when it came to generating prompts. Sometimes I'd spend more time trying to craft the perfect prompt than actually creating art!

That's why I decided to build this AI Prompt Generator. It's my solution to a problem I faced personally, and I hope it can help other AI art enthusiasts out there too.

## 🎨 My AI Art Journey

As someone who loves experimenting with AI-generated art, I've spent countless hours on Midjourney. It's an incredible tool, but I often found myself hitting a creative wall when it came to prompts. I wanted something that could:

- Help me quickly generate interesting ideas
- Allow me to fine-tune prompts without losing my original concept
- Incorporate different themes and styles easily and have them organised neatly 

When I couldn't find a tool that did all this, I thought, "Why not build it myself?" And that's how this project was born!

## 🌟 What's Special About This?

- **Build Complex Prompts Easily**: Mix and match different elements to create the perfect prompt
- **Themed Inspiration**: Choose from a variety of themes to spark your creativity
- **Random Ideas Generator**: Stuck? Let my tool suggest some wild ideas for you
- **Works Everywhere**: Use it on your computer, tablet, or phone - it looks great on all screens
- **Fine-Tune Your Creation**: Tweak every aspect of your prompt with easy-to-use controls

![Project Screenshot](/promptGenerator/frontend/src/assets/imageParams.jpeg)

## 🛠️ The Tech Behind the Magic

I've used some really neat tools to build this:

- **React**: It's the backbone of my app, making everything smooth and reactive
- **Material-UI**: This gives my app its sleek, modern look
- **Compromise.js**: A clever little library that helps me generate random, creative sentences
- **Lodash**: Helps me work with data more efficiently
- **CSS Modules**: Keeps my styles organized and tidy

## 📂 How I've Organized Things

```
src/
├── components/
│   ├── PromptBuilder.jsx       # The main star of the show
│   ├── ParametersAccordion.jsx # Where you fine-tune your prompt
│   ├── ThemeManager.jsx        # Manages all those cool themes
│   └── ...
├── utils/
│   └── RandomSentenceGenerator.js  # My idea generator
├── data/
│   └── themes.json             # All my themes in one place
└── styles/
    └── PromptBuilder.module.css # Making things look pretty
```

## 🧠 My Approach to Building This

### Keeping Things Tidy
I've split everything into small, manageable pieces. It's like having a well-organized toolbox - everything has its place and is easy to find.

### Smart State Management
I'm using some clever React tricks (like `useReducer` and `useContext`) to keep track of everything that's going on in the app. It's like having a really efficient personal assistant for my data.

### Flexible Themes
All my themes are stored in a simple format (JSON), making it super easy to add new ones or update existing ones. It's like having a theme library that's always ready for expansion.

```json
{
  "themes": [
    {
      "name": "Cyberpunk",
      "keywords": ["neon", "futuristic", "dystopian"]
    },
    // More cool themes...
  ]
}
```

### Writing Good Code
I've focused on writing code that's easy to understand and maintain. I've used principles like:
- Not repeating myself (DRY)
- Keeping things simple and straightforward (KISS)
- Making my code flexible for future changes

### Making It Fast
I've added some tricks to keep everything running smoothly:
- Debouncing inputs so I'm not constantly recalculating things
- Remembering complex calculations so I don't have to redo them
- Loading parts of the app only when they're needed

## 🚀 Want to Try It Out?

1. Clone the project to your computer:
   ```
   git clone https://github.com/yourusername/ai-prompt-generator.git
   ```
2. Install all the necessary bits and pieces:
   ```
   npm install
   ```
3. Fire it up:
   ```
   npm start
   ```

## 🤝 Want to Contribute?

I'd love your help! If you have ideas, find bugs, or want to add new features, check out my [issues page](https://github.com/yourusername/ai-prompt-generator/issues).

## 📜 The Legal Stuff

This project is under the MIT License. Check out the `LICENSE` file for all the details.

## 📞 Get in Touch

irisgrabois@gmail.com

Project Link: [https://github.com/iris-g/PromptGen]

---

⭐️ If you think this project is cool, give it a star! It makes me happy! 😊
