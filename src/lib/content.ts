export const content = {
	hero: {
		badge: "World Model Research",
		heading: "Planet-Scale Data for the Era of Experience",
		subtitle:
			"Modern AI systems reason well in text and images, but they struggle when deployed in the real world. Agents fail on long-horizon tasks. Robots behave brittly outside narrow distributions.",
	},

	problemStatement: {
		number: "01",
		heading: "This is Not a Model Architecture Problem",
		paragraphs: [
			"Modern AI systems reason well in text and images, but they struggle when deployed in the real world. Agents fail on long-horizon tasks. Robots behave brittly outside narrow distributions. Planning degrades when environments are novel, stochastic, or partially observed.",
			"This is not primarily a model architecture problem.",
			"It is a data problem.",
			"The dominant training paradigm\u2014static corpora, scraped text, short clips\u2014does not provide the experience required to learn how the world evolves under action.",
			"We are entering an era where models must learn from interaction, not description.",
			"We are a real-world data research lab building the datasets, environments, and infrastructure required for this shift.",
		],
	},

	representationsToExperience: {
		number: "02",
		heading: "From Representations to Experience",
		pullQuote:
			"Language models learned from the written record of the world. Embodied agents must learn from the world itself.",
		paragraphs: [
			"Solving real-world, long-horizon problems requires data that captures:",
		],
		bullets: [
			"State evolution over time",
			"Action \u2192 consequence chains",
			"Multi-step intent and recovery",
			"Distributional diversity across environments",
		],
		closing:
			"This kind of learning cannot be bootstrapped from text or images alone. It requires spatiotemporal, action-conditioned data at scale. Our work focuses on producing that data, end-to-end.",
	},

	researchLab: {
		number: "03",
		heading: "A Real-World Data Research Lab",
		subtitle: "We operate as a research lab first, not a data broker.",
		paragraphs: [
			"We develop theses on where real-world AI is headed\u2014how agents, world models, and robotics systems are evolving\u2014and use those theses to guide:",
		],
		bullets: [
			"What data should exist but doesn\u2019t",
			"How it should be collected",
			"How it should be structured and evaluated",
			"What benchmarks and environments are missing",
		],
		closing:
			"Data, evals, benchmarks, and environments are treated as a single system.",
	},

	productVectors: [
		{
			number: "04",
			title: "World Model Gaming Data",
			tagline: "Spatiotemporal experience for learning dynamics",
			description:
				"We build large-scale, action-labeled gameplay datasets designed to train world models and long-horizon agents.",
			bullets: [
				"Temporal continuity and state transitions",
				"Explicit action and control signals",
				"Diverse environments and objectives",
				"Long trajectories rather than short clips",
			],
			closing:
				"This data is suited for training models that must predict how environments evolve, plan over time, and generalize beyond scripted settings.",
			accent: "emerald" as const,
		},
		{
			number: "05",
			title: "Robotics Egocentric Data",
			tagline: "From VLAs to world-aware models",
			description:
				"Robotics is moving beyond vision-language-action models that map perception directly to control. The field is increasingly shifting toward world-aware models that reason over latent state, dynamics, and future outcomes.",
			bullets: [
				"Continuous egocentric experience",
				"Action-conditioned state evolution",
				"Long-horizon task execution and recovery",
				"Data suitable for learning internal world representations",
			],
			closing:
				"We collect structured egocentric robotics data designed for this transition, captured from real humans performing real tasks, with annotations aligned to world-model and policy training rather than short-horizon imitation alone.",
			accent: "amber" as const,
		},
		{
			number: "06",
			title: "Hardware Glasses",
			tagline: "Owning the sensor unlocks the dataset",
			description:
				"Experience-centric data requires consistency, duration, and scale that off-the-shelf hardware does not reliably provide.",
			bullets: [
				"Long-duration, high-quality capture",
				"Sensor configurations aligned with learning objectives",
				"Repeatability across environments and contributors",
			],
			closing:
				"Hardware is not a side project. It is a prerequisite for building datasets that support world models and embodied learning at scale.",
			accent: "rose" as const,
		},
	],

	approach: {
		number: "07",
		heading: "Our Approach",
		subtitle: "We treat data as a first-class research artifact.",
		paragraphs: [
			"Collection, annotation, evaluation, and deployment are co-designed so that datasets are:",
		],
		bullets: [
			"Aligned with how models are actually trained",
			"Suitable for world-model and agent learning",
			"Reusable across tasks and domains",
			"Structured for long-horizon learning, not demos",
		],
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
