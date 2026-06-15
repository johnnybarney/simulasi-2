export const routes = {
  home: "/",
  tsx: "/services/tsx",
  ittx: "/services/ittx",
  asx: "/services/asx",
  attackSimulation: "/services/attack-simulation",
  reconIntel: "/services/recon-intelligence",
  training: "https://rp.my/training",
  cdX: "/products/cd-x",
  mniX3dKit: "/products/mni-x-3d-kit",
  contact: "/about-us#contact",
  aboutUs: "/about-us",
  privacy: "/#privacy",
  terms: "/#terms",
  careers: "/#careers",
} as const;

export type HeaderVariant =
  | "home"
  | "about-us"
  | "tabletop-exercise"
  | "advance-simulation"
  | "cd-x"
  | "mni-x"
  | "technical-simulation-exercise"
  | "reconnaissance-intelligence"
  | "offensive-operations";

export type FooterVariant =
  | "home"
  | "tabletop-exercise"
  | "advance-simulation"
  | "cd-x"
  | "mni-x"
  | "technical-simulation-exercise"
  | "reconnaissance-intelligence"
  | "offensive-operations";

export type NavChild = {
  label: string;
  labelCode?: string;
  href: string;
  children?: NavChild[];
};

export type NavItem = {
  label: string;
  href: string;
  hasDropdown?: boolean;
  children?: NavChild[];
};

export const servicePages: NavChild[] = [
  { label: "Technical Simulation Exercise", labelCode: "TSX", href: routes.tsx },
  { label: "Interactive Tabletop Exercise", labelCode: "iTTX", href: routes.ittx },
  { label: "Advance Simulation Exercise", labelCode: "ASX", href: routes.asx },
  { label: "Offensive Operations", labelCode: "Attack Simulation", href: routes.attackSimulation },
  { label: "Reconnaissance Intelligence", labelCode: "Recon Intel", href: routes.reconIntel },
  { label: "Capacity Building", href: routes.training },
];

export const servicesMenuChildren: NavChild[] = servicePages;

export const productPages = [
  { label: "CD-X Platform", href: routes.cdX },
  { label: "MNI-X 3D Kit", href: routes.mniX3dKit },
];

const homeNavItems: NavItem[] = [
  { label: "Home", href: routes.home },
  {
    label: "Services",
    href: routes.tsx,
    hasDropdown: true,
    children: servicesMenuChildren,
  },
  {
    label: "Products",
    href: routes.cdX,
    hasDropdown: true,
    children: productPages,
  },
  { label: "News", href: "/news" },
  { label: "About Us", href: routes.aboutUs },
];

export const headerConfigs: Record<HeaderVariant, NavItem[]> = {
  home: homeNavItems,
  "about-us": homeNavItems,
  "tabletop-exercise": homeNavItems,
  "advance-simulation": homeNavItems,
  "cd-x": homeNavItems,
  "technical-simulation-exercise": homeNavItems,
  "reconnaissance-intelligence": homeNavItems,
  "offensive-operations": homeNavItems,
  "mni-x": homeNavItems,
};

export type HeaderAction =
  | { type: "client-portal"; label: string; href: string }
  | { type: "contact-sales"; label: string; href: string }
  | { type: "schedule"; label: string; href: string }
  | { type: "search" };

export const headerActions: Partial<Record<HeaderVariant, HeaderAction>> = {};

export type FooterConfig = {
  variant: FooterVariant;
  copyright: string;
  links: { label: string; href: string }[];
  layout: "centered" | "three-column" | "minimal";
  showLogo?: boolean;
  leftLinks?: { label: string; href: string }[];
  rightLinks?: { label: string; href: string }[];
  themeCredit?: string;
};

const sharedCopyright = "Copyright © 2026 Simulasi";

export const footerConfigs: Record<FooterVariant, FooterConfig> = {
  home: {
    variant: "home",
    copyright: sharedCopyright,
    links: [],
    layout: "centered",
    showLogo: false,
  },
  "tabletop-exercise": {
    variant: "tabletop-exercise",
    copyright: sharedCopyright,
    links: [],
    layout: "centered",
    showLogo: false,
  },
  "advance-simulation": {
    variant: "advance-simulation",
    copyright: sharedCopyright,
    links: [],
    layout: "centered",
    showLogo: false,
  },
  "cd-x": {
    variant: "cd-x",
    copyright: sharedCopyright,
    links: [],
    layout: "centered",
    showLogo: false,
  },
  "technical-simulation-exercise": {
    variant: "technical-simulation-exercise",
    copyright: sharedCopyright,
    links: [],
    layout: "centered",
    showLogo: false,
  },
  "reconnaissance-intelligence": {
    variant: "reconnaissance-intelligence",
    copyright: sharedCopyright,
    links: [],
    layout: "centered",
    showLogo: false,
  },
  "offensive-operations": {
    variant: "offensive-operations",
    copyright: sharedCopyright,
    links: [],
    layout: "centered",
    showLogo: false,
  },
  "mni-x": {
    variant: "mni-x",
    copyright: sharedCopyright,
    links: [],
    layout: "centered",
    showLogo: false,
  },
};
