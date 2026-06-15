export type ServicePillarItem = {
  title: string;
  titleCode?: string;
  description: string;
  strategicValue: string;
  iconSrc: string;
};

export const homeContent = {
  hero: {
    title: "CYBER COMMAND: AI-DRIVEN WARFARE SIMULATION",
    subtitle:
      "Transforming artificial threats into digital dominance. The premier dashboard for full-spectrum cyber exercise management and military cyber defense.",
    primaryCta: "ACCESS WAR ROOM",
    secondaryCta: "MISSION BRIEFING",
    videoSrc: "/images/landing.mp4",
    videoAlt: "RP.my cyber resilience platform landing video",
  },
  about: {
    title: "About Simulasi.org: The Shift to Measurable Capability",
    body: "The longer governments and enterprises rely on static defense, the wider the gap between policy and reality. Simulasi.org closes that gap with continuous, dynamic simulation that delivers measurable capability — not theoretical planning.",
  },
  servicePillars: {
    title: "Our Strategic Capabilities",
    items: [
      {
        title: "RECONNAISSANCE INTELLIGENCE",
        titleCode: "RECON INTEL",
        description:
          "Transform raw data into actionable intelligence with AI-augmented investigations and automated reconnaissance.",
        strategicValue: "Proactive Threat Detection",
        iconSrc: "/images/icons/osint-ai.jpg",
      },
      {
        title: "TECHNICAL SIMULATION EXERCISE",
        titleCode: "TSX",
        description:
          "Stress-test defenses with real-world, custom-crafted attacks delivered through controlled simulation environments.",
        strategicValue: "Validated Incident Response",
        iconSrc: "/images/icons/live-technical-simulation.jpg",
      },
      {
        title: "OFFENSIVE OPERATIONS",
        titleCode: "ATTACK SIMULATION",
        description:
          "Simulate sophisticated adversaries to uncover hidden vulnerabilities and fortify defenses against advanced threats.",
        strategicValue: "Uncovered Vulnerabilities",
        iconSrc: "/images/icons/red-teaming.jpg",
      },
      {
        title: "INTERACTIVE SIMULATION EXERCISE",
        titleCode: "iTTX",
        description:
          "Coordinate leadership and technical teams through interactive scenario-driven exercises that sharpen decision-making under pressure.",
        strategicValue: "Refined Crisis Management",
        iconSrc: "/images/icons/tabletop-exercises.jpg",
      },
      {
        title: "ADVANCE SIMULATION EXERCISE",
        titleCode: "ASX",
        description:
          "Run hands-on drills that validate controls, tune detection, and build muscle memory across your security operations.",
        strategicValue: "Enhanced Team Competency",
        iconSrc: "/images/icons/technical-cyber-drills.jpg",
      },
      {
        title: "CAPACITY BUILDING",
        description:
          "Strategic training programs and skills development for your team's capabilities.",
        strategicValue: "Empowered Execution",
        iconSrc: "/images/capacitybuilding.jpg",
      },
    ] satisfies ServicePillarItem[],
  },
  whyChoose: {
    title: "Why Choose Simulasi.org",
    items: [
      {
        title: "Real-Time Situational Awareness",
        description:
          "Monitor exercise progress and outcomes with live dashboards that surface what matters when it matters.",
      },
      {
        title: "Tailored Methodology",
        description:
          "Every engagement is scoped to your industry, threat model, and maturity — not a one-size-fits-all checklist.",
      },
      {
        title: "Compliance-by-Design",
        description:
          "Built-in alignment with regulatory frameworks so every exercise produces audit-ready evidence.",
      },
      {
        title: "Advanced AI Integration",
        description:
          "Leverage AI to accelerate sensemaking, automate reconnaissance, and augment analyst capabilities.",
      },
    ],
  },
  criticalInsight: {
    title: "Critical Insight: Red Teaming vs. Penetration Testing",
    body: "Penetration testing focuses on specific systems within a defined scope. Red teaming simulates a real adversary pursuing objectives across people, processes, and technology. Both are valuable — but only red teaming reveals how your organization performs under holistic, sustained pressure.",
  },
  measurableOutcomes: {
    title: "Measurable Outcomes",
    items: [
      {
        title: "Actionable Intelligence",
        description:
          "Every exercise produces prioritized findings your teams can act on immediately — not shelf-ware reports.",
      },
      {
        title: "Validated Controls",
        description:
          "Prove which defenses work under realistic conditions and where gaps require investment.",
      },
      {
        title: "Continuous Improvement",
        description:
          "Track capability growth over time with metrics that demonstrate progress to boards and regulators.",
      },
    ],
  },
  footer: {
    copyright: "Copyright © 2026 Simulasi",
  },
} as const;
