export type CyberOfferingBlock = {
  label: string;
  text: string;
  iconSrc?: string;
  iconAlt?: string;
};

export type CyberOffering = {
  title: string;
  blocks: CyberOfferingBlock[];
};

export type CyberWhyChooseItem = {
  title: string;
  description: string;
  iconSrc: string;
  iconAlt: string;
};

export const cyberExerciseSharedContent = {
  tagline: "Validate. Prepare. Secure.",
  heroDescription:
    "Transform theoretical knowledge into hands-on readiness through immersive simulations and exercises designed to test your organisation's resilience against modern cyber threats.",
  heroVideo: {
    src: "/images/tabledulu.mp4",
    alt: "Interactive Tabletop Exercise simulation",
  },
  offerings: [
    {
      title: "Interactive Tabletop Exercises ( iTTX )",
      blocks: [
        {
          label: "Strategy",
          text: "Scenario-driven discussions for C-Suite, Legal, and executive decision-makers using Expected vs. Observed frameworks.",
          iconSrc: "/images/horseandbishop.jpg",
          iconAlt: "Strategy — chess knight",
        },
        {
          label: "Decision-Making",
          text: "Structured facilitation that exposes gaps in communication, authority, and crisis response under pressure.",
          iconSrc: "/images/decisionmaking.jpg",
          iconAlt: "Decision-Making",
        },
      ],
    },
    {
      title: "MNI-X 3D Kit",
      blocks: [
        {
          label: "Tactical Sand Table",
          text: "Premier standard for physical cyber warfare visualization with 3D miniature models replicate real environment and real world attack vectors.",
          iconSrc: "/images/mni.jpg",
          iconAlt: "Tactical Sand Table",
        },
      ],
    },
    {
      title: "Compliance & Maturity Gap Assessment",
      blocks: [
        {
          label: "Regulation",
          text: "Alignment with NIST CSF and industry best practices mapped to your regulatory obligations.",
          iconSrc: "/images/regulation.jpg",
          iconAlt: "Regulation",
        },
        {
          label: "Maturity",
          text: "Deliver an Actionable Resilience Score with prioritized remediation pathways.",
          iconSrc: "/images/maturity.jpg",
          iconAlt: "Maturity",
        },
      ],
    },
  ] satisfies CyberOffering[],
  whyChoose: [
    {
      title: "Realistic Threat Modeling",
      description:
        "Scenarios grounded in current adversary tradecraft and your sector-specific threat landscape.",
      iconSrc: "/images/realistic-threat-modeling.jpg",
      iconAlt: "Realistic Threat Modeling",
    },
    {
      title: "Actionable Reporting",
      description:
        "Executive and technical deliverables that drive prioritized remediation — not shelf-ware.",
      iconSrc: "/images/actionable-reporting.jpg",
      iconAlt: "Actionable Reporting",
    },
    {
      title: "Regulatory Alignment",
      description: "Exercise outputs mapped to compliance frameworks and audit requirements.",
      iconSrc: "/images/regulatory-alignment.jpg",
      iconAlt: "Regulatory Alignment",
    },
    {
      title: "Continuous Improvement",
      description: "Track capability growth across exercises with measurable maturity indicators.",
      iconSrc: "/images/continuous-improvement.jpg",
      iconAlt: "Continuous Improvement",
    },
  ] satisfies CyberWhyChooseItem[],
  ctaLabel: "Contact Us for a Consultation",
};

export const asxContent = {
  tagline: "Detect. Respond. Recover.",
  heroVideo: {
    src: "/images/stadium.mp4",
    alt: "Advance Simulation Exercise simulation",
  },
  offerings: cyberExerciseSharedContent.offerings.map((offering) =>
    offering.title === "MNI-X 3D Kit"
      ? { ...offering, title: "Hybrid Simulation" }
      : offering,
  ),
  whyChoose: cyberExerciseSharedContent.whyChoose,
};
