export const content = {
  hero: {
    badge: "World Model Research",
    heading: "Planet-Scale Data for the",
    carouselWords: ["Real World", "World Models", "Robotics"],
    subtitle:
      "We focus on real-world AI: robotics and world models. Today\u2019s systems degrade under distribution shift, long-horizon tasks, and real-world uncertainty.",
  },

  problemStatement: {
    heading: "This is Not a Architecture Problem",
    // Panel 1 — the problem + evidence
    evidence:
      "Modern AI systems reason well in text and images, but they struggle when deployed in the real world. Agents fail on long-horizon tasks. Robots behave brittly outside narrow distributions. Planning degrades when environments are novel, stochastic, or partially observed.",
    evidenceDetail:
      "Scaling has not closed this gap. Larger models and longer contexts improve benchmarks, but deployed performance in physical environments remains fragile.",

    // Panel 2
    diagnosis: "It is a data problem.",
    paradigm:
      "The dominant training paradigm\u2014static corpora, scraped text, short clips\u2014does not provide the experience required to learn how the world evolves under action.",
    paradigmDetail:
      "Models trained on static snapshots cannot learn causality, temporal dynamics, or the consequences of intervention. They see the world frozen, never in motion.",
    shift: "Interaction, Not Description",
    shiftDetail:
      "We are entering an era where models must learn from interaction, not description. The next generation of foundation models will be trained not on what the world looks like, but on how it behaves\u2014action by action, state by state.",
    mission:
      "We are a real-world data research lab building the datasets, environments, and infrastructure required for this shift.",
  },

  representationsToExperience: {
    heading: "From Representations to Experience",
    quote:
      "Language models learned from the written record of the world. Embodied agents must learn from the world itself.",
    body: "Solving real-world, long-horizon problems requires data that captures state evolution over time, action-to-consequence chains, multi-step intent and recovery, and distributional diversity across environments.",
    closing:
      "This kind of learning cannot be bootstrapped from text or images alone. It requires spatiotemporal, action-conditioned data at scale. Our work focuses on producing that data, end-to-end.",
  },

  researchLab: {
    heading: "A Real-World Data Research Lab",
    subtitle: "Research lab first, not a data broker.",
    body: "We develop theses on where real-world AI is headed\u2014how agents, world models, and robotics systems are evolving\u2014and use those theses to guide what data should exist but doesn\u2019t, how it should be collected, how it should be structured and evaluated, and what benchmarks and environments are missing.",
    closing:
      "Data, evals, benchmarks, and environments are treated as a single system.",
  },

  productVectors: [
    {
      title: "World Model Gaming Data",
      tagline: "Action-labeled, long-horizon gameplay",
      bullets: [
        "FPV 1080p, 30\u201360 FPS",
        "Native action + control logs",
        "5\u2013120+ minute trajectories",
        "Diverse environment coverage",
        "Visual Understanding",
        "IP Rights",
      ],
      closing: "Built for world models and long-horizon agents.",
      accent: "blue" as const,
      image:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80&auto=format",
      video: "https://assets.mixkit.co/videos/43527/43527-720.mp4",
    },
    {
      title: "Robotics Egocentric Data",
      tagline: "Continuous first-person task execution",
      bullets: [
        "1080p head-mounted FPV",
        "Hands-in-frame manipulation",
        "Multi-step real-world tasks",
        "Action-aligned timestamps",
      ],
      closing:
        "Designed for embodied and world-aware robotics models.",
      accent: "warm" as const,
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80&auto=format",
      video: "https://assets.mixkit.co/videos/47257/47257-720.mp4",
    },
    {
      title: "Custom Capture Hardware Glasses",
      tagline: "Training-grade sensor infrastructure",
      bullets: [
        "Stable 1080p continuous capture",
        "Fixed, repeatable camera geometry",
        "Long-duration battery",
        "Synced logging + upload",
      ],
      closing:
        "Consistent data at scale for real-world AI.",
      accent: "sky" as const,
      image:
        "https://images.unsplash.com/photo-1626379953822-baec19c3accd?w=800&q=80&auto=format",
      video: "https://assets.mixkit.co/videos/51214/51214-720.mp4",
    },
  ],

  approach: {
    heading: "Our Approach",
    subtitle: "Data as a first-class research artifact.",
    body: "Collection, annotation, evaluation, and deployment are co-designed so that datasets are aligned with how models are actually trained, suitable for world-model and agent learning, reusable across tasks and domains, and structured for long-horizon learning rather than demos.",
    closing: "The goal is not volume alone, but useful experience.",
  },

  whyThisMatters: {
    heading: "Why This Matters",
    paragraphs: [
      "Agents that operate in the real world must learn how the world changes under action. That knowledge cannot be inferred from static data.",
      "The next phase of AI progress depends on closing the gap between models and experience.",
      "We are building the full stack\u2014data, hardware, and research infrastructure\u2014to make that possible.",
    ],
  },
} as const;

export type ProductVector = (typeof content.productVectors)[number];
