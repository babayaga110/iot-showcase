
import { SlideData } from './types';

export const SLIDES: SlideData[] = [
  {
    id: 1,
    type: 'title',
    title: "Smart Outdoor AI & IoT Games",
    subtitle: "Designed for High-Engagement Corporate Events",
  },
  {
    id: 2,
    type: 'intro',
    title: "Why Smart Games for Corporate Events?",
    content: [
      "High engagement in short time",
      "Data-driven participation",
      "Team bonding & brand recall",
      "Suitable for large outdoor crowds"
    ],
  },
  {
    id: 3,
    type: 'game',
    title: "Smart Reaction Arena",
    gameDetails: {
      duration: "3–5 minutes per user",
      howItWorks: [
        "LED poles light up randomly",
        "Player taps correct pole quickly",
        "AI calculates reaction speed"
      ],
      technology: "IoT Sensors + AI Logic",
      benefit: "Focus & agility",
      iconName: "Zap"
    }
  },
  {
    id: 4,
    type: 'game',
    title: "RFID Speed Challenge",
    gameDetails: {
      duration: "3–5 minutes per user",
      howItWorks: [
        "Player scans RFID checkpoints",
        "Time tracked automatically",
        "Live leaderboard"
      ],
      technology: "RFID Readers + Cloud Sync",
      benefit: "Speed & coordination",
      iconName: "Timer"
    }
  },
  {
    id: 5,
    type: 'game',
    title: "AI Punch Power Wall",
    gameDetails: {
      duration: "3–5 minutes per user",
      howItWorks: [
        "Player punches smart pad",
        "Force sensor + AI score",
        "Ranking shown live"
      ],
      technology: "Force Sensors + Raspberry Pi",
      benefit: "Energy & excitement",
      iconName: "Target"
    }
  },
  {
    id: 6,
    type: 'game',
    title: "Smart Balance Board",
    gameDetails: {
      duration: "3–5 minutes per user",
      howItWorks: [
        "Player balances on IoT board",
        "AI tracks stability time",
        "Longer balance = higher score"
      ],
      technology: "IMU Sensors + ESP32",
      benefit: "Mind-body control",
      iconName: "Scale"
    }
  },
  {
    id: 7,
    type: 'game',
    title: "AI Kick Accuracy Zone",
    gameDetails: {
      duration: "3–5 minutes per user",
      howItWorks: [
        "Kick ball at smart targets",
        "Sensors detect accuracy",
        "AI gives score"
      ],
      technology: "Optical Sensors + AI Scoring",
      benefit: "Precision & fun",
      iconName: "Goal"
    }
  },
  {
    id: 8,
    type: 'game',
    title: "Smart Buzz Wire Challenge",
    gameDetails: {
      duration: "3–5 minutes per user",
      howItWorks: [
        "Move ring without touching wire",
        "Touch = penalty time",
        "AI tracks completion time"
      ],
      technology: "Conductive Logic + Arduino",
      benefit: "Patience & control",
      iconName: "Activity"
    }
  },
  {
    id: 9,
    type: 'game',
    title: "QR Brain + Action Game",
    gameDetails: {
      duration: "3–5 minutes per user",
      howItWorks: [
        "Scan QR for quick question",
        "Perform physical sensor task",
        "Combined AI score"
      ],
      technology: "Web-App + IoT Integration",
      benefit: "Thinking under pressure",
      iconName: "Brain"
    }
  },
  {
    id: 10,
    type: 'game',
    title: "AI Memory Light Game",
    gameDetails: {
      duration: "3–5 minutes per user",
      howItWorks: [
        "Lights blink in sequence",
        "Player repeats pattern",
        "AI increases difficulty"
      ],
      technology: "LED Matrix + Microcontroller",
      benefit: "Memory & focus",
      iconName: "Cpu"
    }
  },
  {
    id: 11,
    type: 'game',
    title: "Smart Sound Challenge",
    gameDetails: {
      duration: "3–5 minutes per user",
      howItWorks: [
        "Player shouts or claps",
        "Sound sensor measures power",
        "AI ranks loudness"
      ],
      technology: "Acoustic Sensors + AI FFT",
      benefit: "Ice-breaker & fun",
      iconName: "Mic2"
    }
  },
  {
    id: 12,
    type: 'game',
    title: "IoT Button Smash",
    gameDetails: {
      duration: "3–5 minutes per user",
      howItWorks: [
        "Buttons light randomly",
        "Smash as many as possible",
        "AI counts hits"
      ],
      technology: "Mechanical Sensors + IoT Hub",
      benefit: "Speed & reflex",
      iconName: "Gamepad"
    }
  },
  {
    id: 13,
    type: 'game',
    title: "Smart Rope Jump Counter",
    gameDetails: {
      duration: "3–5 minutes per user",
      howItWorks: [
        "Player jumps rope",
        "Motion sensor counts jumps",
        "AI scores performance"
      ],
      technology: "Accelerometer + Bluetooth",
      benefit: "Fitness & energy",
      iconName: "Dumbbell"
    }
  },
  {
    id: 14,
    type: 'game',
    title: "AI Reaction Ball Drop",
    gameDetails: {
      duration: "3–5 minutes per user",
      howItWorks: [
        "Ball drops randomly",
        "Player catches quickly",
        "AI tracks reaction time"
      ],
      technology: "Solenoid Release + IR Sensors",
      benefit: "Alertness",
      iconName: "Eye"
    }
  },
  {
    id: 15,
    type: 'game',
    title: "Smart Puzzle Unlock",
    gameDetails: {
      duration: "3–5 minutes per user",
      howItWorks: [
        "Solve logic puzzle",
        "Correct answer unlocks box",
        "IoT + AI validation"
      ],
      technology: "Digital Lock + Logic Engine",
      benefit: "Problem-solving",
      iconName: "Puzzle"
    }
  },
  {
    id: 16,
    type: 'game',
    title: "IoT Touch the Color",
    gameDetails: {
      duration: "3–5 minutes per user",
      howItWorks: [
        "Screen shows color",
        "Player touches matching sensor",
        "AI checks speed"
      ],
      technology: "Capacitive Touch + RGB LEDs",
      benefit: "Visual response",
      iconName: "Palette"
    }
  },
  {
    id: 17,
    type: 'game',
    title: "Smart Sprint Timer",
    gameDetails: {
      duration: "3–5 minutes per user",
      howItWorks: [
        "Short sprint track",
        "RFID start & end",
        "AI timing system"
      ],
      technology: "Laser Gates + Time-of-Flight",
      benefit: "Energy & competition",
      iconName: "Running"
    }
  },
  {
    id: 18,
    type: 'game',
    title: "AI Coordination Squares",
    gameDetails: {
      duration: "3–5 minutes per user",
      howItWorks: [
        "Step on glowing floor tiles",
        "Follow AI pattern",
        "Score based on accuracy"
      ],
      technology: "Pressure-Sensitive Floor + AI",
      benefit: "Team coordination",
      iconName: "Grid"
    }
  },
  {
    id: 19,
    type: 'game',
    title: "Smart Grip Strength Test",
    gameDetails: {
      duration: "3–5 minutes per user",
      howItWorks: [
        "Player squeezes smart grip",
        "Force sensor measures strength",
        "AI ranks results"
      ],
      technology: "Strain Gauge + Digital Display",
      benefit: "Fun comparison",
      iconName: "Hand"
    }
  },
  {
    id: 20,
    type: 'game',
    title: "IoT Reflex Ring Toss",
    gameDetails: {
      duration: "3–5 minutes per user",
      howItWorks: [
        "Toss rings onto smart pegs",
        "Sensors detect success",
        "AI scoring"
      ],
      technology: "Hall-Effect Sensors + MQTT",
      benefit: "Precision & calmness",
      iconName: "Circle"
    }
  },
  {
    id: 21,
    type: 'game',
    title: "AI Team Sync Challenge",
    gameDetails: {
      duration: "3–5 minutes per user",
      howItWorks: [
        "Two players act together",
        "Sensors check synchronization",
        "AI scores teamwork"
      ],
      technology: "Dual Sensors + Correlation AI",
      benefit: "Collaboration",
      iconName: "Users"
    }
  },
  {
    id: 22,
    type: 'game',
    title: "Smart Finale Leaderboard",
    gameDetails: {
      duration: "Real-time updates",
      howItWorks: [
        "Best scores from all games",
        "Live LED leaderboard",
        "Instant winners"
      ],
      technology: "Central Dashboard + API Hub",
      benefit: "Event excitement",
      iconName: "Trophy"
    }
  },
  {
    id: 23,
    type: 'tech',
    title: "Technology Stack",
    content: [
      "Processors: ESP32 / Raspberry Pi / Jetson Nano",
      "Sensors: Motion, Force, RFID, Sound, LiDAR",
      "Software: AI Scoring Engine + Real-time Edge Analytics",
      "Display: Live Web Dashboard & High-Vis LED Walls"
    ],
  },
  {
    id: 24,
    type: 'intro',
    title: "Why Choose These Games?",
    content: [
      "High Throughput (3–5 mins per user)",
      "Outdoor-ready & Weather-resistant",
      "Portable & Reusable hardware",
      "Scalable for 100–1000+ participants"
    ],
  },
  {
    id: 25,
    type: 'closing',
    title: "Let's make corporate events smarter & unforgettable",
    subtitle: "Contact us for a tailored proposal for your next grand event.",
  }
];
