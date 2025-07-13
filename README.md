# 🐪 Camel Run
A fun and engaging browser-based endless runner game where you control a camel jumping over cacti in a desert landscape. Experience dynamic day/night cycles and compete for high scores!

## 🎮 Game Overview
Camel Run is an HTML5 game built with vanilla JavaScript, CSS, and HTML. The game features:

- **Endless Runner Gameplay**: Jump over cacti to survive as long as possible
- **Dynamic Day/Night Cycle**: Experience changing backgrounds and lighting effects
- **Score System**: Track your current score and compete for high scores
- **Responsive Controls**: Use spacebar or mouse click to jump
- **Beautiful Animations**: Smooth camel animations and visual effects

## 🚀 How to Play

1. **Start the Game**: Open `(https://emman-tt.github.io/Camel-Run/)` in your web browser
2. **Jump**: Press the **Spacebar** or **click** to make the camel jump
3. **Avoid Obstacles**: Jump over the cacti that move from right to left
4. **Survive**: Try to survive as long as possible to achieve a high score
5. **Restart**: When you hit a cactus, click the restart button to play again

## 🎯 Game Features

### Core Gameplay
- **Camel Character**: Animated camel that responds to player input
- **Obstacle System**: Cacti that continuously spawn and move across the screen
- **Collision Detection**: Precise hit detection between camel and obstacles
- **Jump Mechanics**: Smooth jumping animation with proper timing

### Visual Effects
- **Day/Night Cycle**: 
  - Day mode: Light blue gradient background with sun animation
  - Night mode: Dark gradient background with moon animation
  - Automatic transitions every 20-40 seconds
- **Lottie Animations**: Beautiful animated elements for sun, moon, and camel
- **Score Display**: Real-time score and high score tracking
- **Game Over Screen**: Elegant overlay with restart functionality

### Technical Features
- **Local Storage**: High scores are saved locally in your browser
- **Responsive Design**: Works on different screen sizes
- **Smooth Animations**: CSS keyframes for fluid movement
- **Cross-browser Compatible**: Works on modern web browsers

## 📁 Project Structure

```
Camel Run/
├── index.html          # Main HTML file with game structure
├── script.js           # Game logic and JavaScript functionality
├── style.css           # Styling and animations
├── cactus-svgrepo-com.svg  # Cactus obstacle image
├── game1.jpg           # Game background image
└── README.md           # This file
```

## 🛠️ Technologies Used

- **HTML5**: Game structure and markup
- **CSS3**: Styling, animations, and responsive design
- **Vanilla JavaScript**: Game logic, collision detection, and score management
- **Lottie Animations**: External animated elements for enhanced visuals
- **Font Awesome**: Icons for the restart button
- **Local Storage API**: Persistent high score storage

## 🎨 Game Mechanics

### Jump System
- **Input Methods**: Spacebar or mouse click
- **Jump Duration**: 1.1 seconds with ease-in-out timing
- **Jump Height**: 250px vertical movement
- **Cooldown**: No cooldown - jump anytime

### Scoring System
- **Score Increment**: +1 point every 70ms while alive
- **High Score**: Automatically saved to browser's local storage
- **Display**: Real-time score and high score shown during gameplay

### Day/Night Cycle
- **Day Duration**: 40 seconds (light background)
- **Night Duration**: 20 seconds (dark background)
- **Visual Changes**: Background gradient and lighting effects
- **Score Color**: Adapts to maintain visibility in both modes

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional software installation required

### Installation
1. Download or clone the project files
2. Open `index.html` in your web browser
3. Start playing immediately!

### Running Locally
```bash
# Simply open the index.html file in your browser
# Or use a local server for development:
python -m http.server 8000
# Then visit http://localhost:8000
```

## 🎯 Game Controls

| Action | Control |
|--------|---------|
| Jump | Spacebar or Mouse Click |
| Restart | Click the restart button (🔄) |

## 🏆 Scoring

- **Current Score**: Increases continuously while playing
- **High Score**: Best score achieved, saved automatically
- **Game Over**: Occurs when camel collides with cactus
- **Restart**: Click restart button to begin a new game

## 🎨 Customization

The game can be easily customized by modifying:

- **Game Speed**: Adjust animation durations in `script.js`
- **Jump Height**: Modify the `translateY` value in `style.css`
- **Visual Style**: Change colors and gradients in `style.css`
- **Obstacle Frequency**: Modify the villain animation timing
- **Day/Night Cycle**: Adjust the interval timings in `script.js`

## 🔧 Browser Compatibility

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ❌ Internet Explorer (not supported)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to contribute to this project by:
- Reporting bugs
- Suggesting new features
- Submitting pull requests
- Improving documentation

## 🎮 Future Enhancements

Potential features for future versions:
- Sound effects and background music
- Multiple difficulty levels
- Power-ups and special abilities
- Mobile touch controls
- Multiplayer support
- Leaderboard system

---

**Enjoy playing Camel Run! 🐪✨**
