# MinecraftSocialAI

A Minecraft social simulation project using AI-controlled bots to explore emergent social behaviors and conflicting value systems.

## 🎯 Project Vision

This project simulates a society of AI bots within Minecraft, each pursuing different values and goals. By observing how bots with conflicting interests interact, cooperate, and compete, we can explore fundamental questions about how individuals with different values behave in a shared world.

**Philosophical Foundation:**
- **Selfish Gene Theory** (Richard Dawkins): Each individual pursues self-interest
- **Diverse Value Systems**: Different bots prioritize different values
- **Emergent Social Dynamics**: What happens when conflicting goals collide in a shared world?

## 💡 Why Mineflayer?

Mineflayer is a JavaScript library that allows us to create multiple bots that join a Minecraft server and interact with the world. It's ideal for this project because it:

- **Controls bot behavior** through movement, block interaction, and communication
- **Provides real-time observation** of the world state
- **Enables simultaneous multi-bot simulations** in the same server
- **Offers a flexible API** for custom decision-making logic

With Mineflayer, we can focus on building AI logic and social systems rather than dealing with low-level Minecraft protocol details.

## 📋 Project Structure

```
MinecraftSocialAI/
├── README.md              # This file
├── DESIGN.md              # Design and architecture notes
├── LICENSE                # MIT License
├── package.json           # Node.js dependencies
├── .gitignore             # Git ignore rules
├── bot.js                 # Main bot code
└── docs/
    ├── architecture.md    # System architecture
    └── values-system.md   # Value systems explanation
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- A running Minecraft Server
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/EIFwow/MinecraftSocialAI.git
cd MinecraftSocialAI

# Install dependencies
npm install
```

### Running

```bash
node bot.js
```

Configure the server details in `bot.js` before running.

## 🤖 Bot Value Systems

Each bot can be designed with different values:

- **Wealth-seeking**: Prioritizes accumulating resources and money
- **Power-seeking**: Seeks dominance and control
- **Peace-oriented**: Values cooperation and conflict avoidance
- **Knowledge-seeking**: Pursues learning and exploration
- **Freedom-oriented**: Values independence and autonomy

Bots make decisions based on their personal values and the current game state, creating organic interactions between them.

## 📊 Development Stages

### Stage 1: Foundation
- Basic bot connectivity and movement
- Individual bot identity and state management
- Simple decision-making logic

### Stage 2: Social Systems
- Add economy (currency, trading)
- Reputation tracking
- Bot-to-bot interaction mechanics

### Stage 3: Emergent Behavior
- Complex social dynamics
- Strategic decision-making
- Conflict and cooperation

### Stage 4: Analysis
- Data collection and logging
- Pattern recognition
- Outcome analysis

## 📖 Documentation

- **[DESIGN.md](DESIGN.md)**: Detailed design decisions and philosophy
- **[Architecture](docs/architecture.md)**: System components and technical details
- **[Value Systems](docs/values-system.md)**: How bot values are defined and used

## 🙏 Acknowledgments

**GitHub Copilot**: Assisted with project design, documentation structure, and code implementation guidance.

This project represents a collaborative effort between human vision and AI-assisted development, embodying the very principles the project explores - multiple agents with different capabilities working together toward a shared goal.

## ✍️ Author

EIFwow

---

**Status**: Early development. Design and implementation ongoing.




The MIT License (MIT)

Copyright (c) 2015 Andrew Kelley

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
