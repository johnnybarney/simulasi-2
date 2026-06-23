export type AboutTeamMember = {
  name: string;
  role: string;
  bio: string;
  imageSrc?: string;
  imagePosition?: string;
};

export type AboutMilestone = {
  year: string;
  label: string;
  description: string;
};

export const aboutContent = {
  hero: {
    eyebrow: "ABOUT SIMULASI",
    title: "The Frontline of",
    titleAccent: "Cyber Resilience",
    intro:
      "Simulasi delivers a comprehensive sandbox warfare simulation, utilizing a tactical, AI-driven ecosystem engineered by RPMY.",
    videoSrc: "/images/aboutus2.mp4",
  },
  mission: {
    quote: [
      "We synchronize your Defenders (People),",
      "Optimize your Playbooks & Procedures (Process),",
      "and your Systems (Technology).",
      "To align with Compliance & Regulations (Governance)",
      "for Absolute Resilience and Operational Readiness.",
    ],
    tagline: "KESIAPSIAGAAN BERDAYA TAHAN",
  },
  milestones: {
    eyebrow: "history milestones",
    title: "Our",
    titleAccent: "Timeline",
    items: [
      {
        year: "2017",
        label: "Establishment",
        description:
          "RPMY deployed onto the field, focusing on SOC development and capacity building.",
      },
      {
        year: "2019",
        label: "Orchestration",
        description:
          "Launched our advanced talent learning system to bridge human intuition with technical systems.",
      },
      {
        year: "2021",
        label: "Combat Readiness",
        description:
          "Developed and executed 74 tactical modules across Red, Blue, Purple, and Yellow teaming.",
      },
      {
        year: "2025",
        label: "Weaponizing Defense",
        description:
          "Launched cd-x.net, our advanced Cyber Drill Platform engineered for cyber security team readiness.",
      },
      {
        year: "2026",
        label: "National Framework",
        description:
          "Launched Simulasi.org. Mandated to deliver elite Cyber Exercise for NCII under Act 854.",
      },
    ] satisfies AboutMilestone[],
  },
  command: {
    eyebrow: "elite cyber command",
    title: "Engineered by",
    titleAccent: "Elite Tacticians",
    intro:
      "A warfare simulation platform is only as lethal as the tacticians who architect it. Simulasi is engineered and commanded by an experienced squad.",
    strategic: {
      eyebrow: "strategic command",
      members: [
        {
          name: "Razwan Mokhtar",
          role: "Founder & Cyber Security Consultant",
          bio: "27 years of offensive & defensive operation experience. Currently he is focusing in AI-Driven Cyber Offensive, Cyber Exercise for National Critical Information Infrastructure.",
          imageSrc: "/images/senn.jpeg",
          imagePosition: "50% 28%",
        },
        {
          name: "Assoc. Prof. Ts. Dr. Nik Zulkarnaen Khidzir, P. Tech",
          role: "R&D Lead Researcher",
          bio: "Certified MBOT Professional Technologist and Associate Professor. Ensures our training & exercise methodologies are practically validated and in accordance with international standards and tactically lethal.",
          imageSrc: "/images/drnik.png",
          imagePosition: "58% 42%",
        },
      ] satisfies AboutTeamMember[],
    },
    squad: {
      eyebrow: "the elite squad",
      subtitle: "Operations & Deployment",
      members: [
        {
          name: "M. Nizal Othman",
          role: "Business Development Lead",
          bio: "Strategic directions for tactical capabilities to match enterprise objectives and regulatory frameworks.",
          imageSrc: "/images/nizal.jpeg",
        },
        {
          name: "Yaacob Noor",
          role: "Digital Development Specialist",
          bio: "Turns complex organizational process and procedure into functional digital systems.",
          imageSrc: "/images/yaakob.jpg",
        },
        {
          name: "Johan Shah Abdullah",
          role: "Programmer",
          bio: "Hustler in Vibe Coding. Digital development team focusing on emerging technologies.",
          imageSrc: "/images/mrjohnny.jpg",
        },
        {
          name: "Zawin Nur Awatif",
          role: "Junior Cybersecurity Engineer",
          bio: "Red teaming and recon Intel.",
          imageSrc: "/images/awin.jpeg",
        },
        {
          name: "Nur Diana Kamilah",
          role: "Project Management Coordinator",
          bio: "Warden of timeline that track project deliverables and proactively manage risks to maintain schedule integrity and ensure timely completion.",
          imageSrc: "/images/dhia.jpeg",
        },
      ] satisfies AboutTeamMember[],
    },
  },
} as const;
