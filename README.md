# MinecraftSocialAI

A Minecraft social simulation project using AI-controlled bots to explore emergent social behaviors and conflicting value systems.

## 🎯 Project Vision

This project simulates a society of AI bots within Minecraft, each pursuing different values and goals. By observing how bots with conflicting interests interact, cooperate, and compete, we can explore fundamental questions about human society and behavior.

**Philosophical Foundation:**
- **Selfish Gene Theory** (Richard Dawkins): Each individual pursues self-interest
- **Diverse Value Systems**: Different bots prioritize different values (wealth, power, peace, knowledge, freedom)
- **Emergent Social Dynamics**: What happens when conflicting goals collide in a shared world?

## 💡 Why Minecraft?

Minecraft provides an ideal environment for social simulation because it offers:
- **Rich interaction possibilities**: combat, trading, building, cooperation
- **Persistent world**: consequences of actions accumulate over time
- **Freedom of behavior**: bots can pursue their values creatively
- **Observability**: we can watch and analyze all bot interactions

## 🔧 Technology Stack

- **[Mineflayer](https://github.com/PrismarineJS/mineflayer)**: JavaScript library for controlling Minecraft bots
  - Handles bot movement, block interaction, and world state
  - Provides event-based API for real-time decision-making
  - Allows multiple bots to run simultaneously

- **Node.js**: Runtime environment for bot logic

## 📋 Project Structure

```
MinecraftSocialAI/
├── README.md              # This file
├── DESIGN.md              # Detailed design and architecture
├── LICENSE                # MIT License
├── package.json           # Node.js dependencies
├── .gitignore             # Git ignore rules
├── bot.js                 # Main bot initialization code
└── docs/
    ├── architecture.md    # System architecture
    └── values-system.md   # Value systems explanation
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- Minecraft Server (1.20.1 compatible)
- npm or yarn

### Installation

```bash
# Clone or set up the repository
git clone https://github.com/EIFwow/MinecraftSocialAI.git
cd MinecraftSocialAI

# Install dependencies
npm install
```

### Configuration

Update `bot.js` with your Minecraft server details:

```javascript
const bot = mineflayer.createBot({
  host: 'your-server-address',  // Server IP or hostname
  port: 25565,                   // Server port
  username: 'BotName'            // Bot username
})
```

### Running

```bash
node bot.js
```

## 🤖 Bot Value Systems

Each bot is designed to pursue different values:

- **Capitalist**: Maximizes wealth and resources
- **Tyrant**: Seeks power and dominance
- **Pacifist**: Promotes peace and cooperation
- **Scholar**: Pursues knowledge and builds
- **Anarchist**: Values freedom and resists hierarchy

Bots make decisions based on their value system and current game state, creating organic conflicts and alliances.

## 📊 Simulation Stages

### Phase 1: Foundation (Current)
- Basic bot connectivity and movement
- Individual value system implementation
- Simple decision-making logic

### Phase 2: Economy & Society
- Currency and trading system
- Reputation and relationship tracking
- Social interaction mechanics

### Phase 3: Emergent Dynamics
- Complex alliances and betrayals
- Resource conflicts and wars
- Spontaneous social structures

### Phase 4: Analysis
- Behavior logging and pattern recognition
- Statistical analysis of outcomes
- Philosophical insights

## 📚 Key Concepts

### Satisfaction Metric

Each bot calculates its "satisfaction" based on:
1. Current game state (resources, position, relationships)
2. Personal value system (what matters to this bot)
3. Predicted outcomes of possible actions

```
Satisfaction = Σ(value_i × current_state_i)
```

### Decision Making

For each turn, a bot:
1. Evaluates possible actions
2. Predicts outcome of each action
3. Selects action that maximizes satisfaction
4. Receives feedback (rewards/penalties) based on actual outcome
5. Learns and adjusts future behavior

## 🔍 Observation & Analysis

The project generates logs and data about:
- Bot movements and interactions
- Resource flows between bots
- Alliance formation and dissolution
- Conflict outcomes
- Emergent social patterns

## 📖 Documentation

- **[DESIGN.md](DESIGN.md)**: Detailed design decisions and philosophy
- **[Architecture](docs/architecture.md)**: System components and data flow
- **[Value Systems](docs/values-system.md)**: Detailed explanation of bot values

## 🎓 Learning Goals

This project serves as both:
- **Practical**: Implementation of multi-agent systems in Minecraft using Mineflayer
- **Theoretical**: Exploration of game theory, emergent behavior, and social dynamics

## 📝 License

MIT License - Feel free to use, modify, and distribute

## 🤝 Contributing

Contributions welcome! Areas of interest:
- New bot value systems
- Enhanced decision-making algorithms
- Economic system mechanics
- Analysis and visualization tools

## ✍️ Author

EIFwow

---

**Note**: This is an experimental project exploring social simulation through game mechanics. Results and emergent behaviors are unpredictable and part of the research value.
