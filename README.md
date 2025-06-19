# AI Founder Hour

<div align="center">
  <img src="public/logo-light.png" alt="AI Founder Hour Logo" width="200" />
</div>

> **An open source AI-powered matching platform for high-signal networking**

## Event Philosophy: Controlled Freedom, High-Signal Connections, Zero Social Friction

Our core belief: **High-value networking shouldn't be about surviving random breakout sessions, but about being intelligently matched with people at your level who are working on what you're trying to accomplish.**

We reject the old model of:
- Rigid, top-down panels
- Awkward breakout roulette where you're stuck with random people
- Endless group chats with no structure, exit, or quality filter
- Wasting time with people who don't match your goals or level

Instead, we build a system that maximizes:
- **Goal-aligned matching** — you're paired with people working on similar challenges
- **Quality filtering** — you can quickly assess if this room is worth your time
- **Strategic optionality** — choose rooms that advance your specific objectives
- **Flow-state transitions** — move efficiently between high-value conversations
- **Social permission to move on** — exit gracefully when it's not a fit

## Foundational Principles

### 1. Rotational Micro-Rooms
Users are offered 2–3 room choices per round — not 10. Each room is a thematic, high-context space curated specifically to **match your goals and filter for relevant participants**. Examples include:
- "AI Infra Deep Dive" — *Recommended because you're scaling ML infrastructure; 4 other CTOs with similar challenges*
- "Founder Sales Stack" — *Perfect for your B2B SaaS growth stage; includes 2 founders who've hit $1M ARR*
- "Hiring in GenAI" — *You need technical recruiting help; room has 3 founders who've successfully hired AI teams*

You can instantly gauge: "This room will help me solve X problem with people who've been there" or "This is a waste of time, these people are at the wrong stage." This goal-oriented matching means you spend time with people who can actually help you accomplish what you came for.

### 2. Autonomy Within Structure
- No one is forced into a room
- No one is stuck in one
- Users move between rooms via a personalized web-based selector
- It feels like choosing your own table at a founder dinner, not being dropped into random Zoom roulette

### 3. Lightweight Identity Signaling
Room menus are enriched with both personalized recommendations and subtle social context:
- **Personal relevance**: "This matches your interest in AI infrastructure scaling"
- **Social proof**: "3 other early-stage founders already in this room"
- **Stage alignment**: "Popular with first-time fundraisers like yourself"

The AI explains not just what the room is about, but specifically why **you** should consider joining based on your profile, goals, and current challenges. Users self-sort into rooms that match their precise needs, not just broad categories. This creates higher mutual relevance without the awkwardness of forced intros.

### 4. Polite Exit Paths
- Leaving a room is normalized and expected
- Users exit with a click, not an apology
- They can say: "I'm switching rooms — this was great" without social risk
- Leaving a room isn't a failure or social mistake — it's how the system is supposed to work

### 5. Quick Quality Assessment
After each room, users can optionally provide a quick star rating:
- "How valuable was this conversation?" (1-5 stars)

This simple feedback helps improve future room recommendations without creating unnecessary friction.

## Technical Architecture

### Powered by Zoom Web SDK + Next.js
- All sessions run as separate Zoom meetings embedded in a single app
- Users never leave your app — just switch room contexts inside it
- Full tracking and personalized access
- Snappy room-switching experience

### You maintain total control over:
- Room rotation timing
- Access control
- Experience pacing
- Analytics and insights

## The Result

| Property | Outcome |
|----------|---------|
| **Goal-aligned** | Connect with people who can actually help you |
| **Quality-filtered** | Skip irrelevant conversations, avoid time-wasters |
| **Personalized** | Feels intentional, not random |
| **Lightweight** | No complex onboarding or app installs |
| **Structured** | Timing, pacing, and flow are guided |
| **Flexible** | Users explore on their terms |
| **High-conversion** | More follow-ups, higher return per session |

> This isn't another Zoom networking event where you hope for the best. It's a system designed to connect you with the exact people who can help you accomplish what you're working on.

## Getting Started

### Prerequisites
- Node.js 18+ and npm
- Zoom SDK credentials
- PostgreSQL database (for production)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-org/ai-founder-hour.git
cd ai-founder-hour
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Configure your environment variables:
```bash
NEXT_PUBLIC_ZOOM_SDK_KEY=your_zoom_sdk_key
ZOOM_SDK_SECRET=your_zoom_sdk_secret
DATABASE_URL=your_database_url
NEXTAUTH_SECRET=your_nextauth_secret
```

5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## Project Structure

```
ai-founder-hour/
├── app/                 # Next.js app router pages
│   ├── components/      # React components
│   ├── sales/          # Sales/signup page
│   └── ...             # Other app routes
├── public/             # Static assets
│   ├── logo-light.png  # Light version logo
│   └── logo-dark.png   # Dark version logo
├── next.config.ts      # Next.js configuration
├── tailwind.config.ts  # Tailwind CSS configuration
├── package.json        # Dependencies and scripts
└── README.md           # This file
```

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Workflow

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Powered by [Zoom Web SDK](https://developers.zoom.us/docs/meeting-sdk/web/)
- Inspired by the need for better virtual networking

## Contact

For questions, suggestions, or collaborations:
- Open an issue on GitHub
- Email: contact@aifounderhour.com
- Twitter: [@aifounderhour](https://twitter.com/aifounderhour)

---

**Built by founders, for founders.**
