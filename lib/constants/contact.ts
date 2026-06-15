export const contactContent = {
  hero: {
    title: "Contact Us",
    subtitle: "Establish Secure Communications",
    description:
      "Ready to transform your cyber readiness? Reach our team for platform demos, exercise planning, or partnership inquiries. Every message is handled with discretion.",
  },
  office: {
    label: "Headquarters",
    addressLines: [
      "1, Lebuh Bandar Utama",
      "Bandar Utama City Centre, Bandar Utama",
      "47800 Petaling Jaya",
      "Selangor Darul Ehsan, Malaysia",
    ],
    fullAddress:
      "1, Lebuh Bandar Utama, Bandar Utama City Centre, Bandar Utama, 47800 Petaling Jaya, Selangor Darul Ehsan, Malaysia",
    mapQuery:
      "1+Lebuh+Bandar+Utama,+Bandar+Utama+City+Centre,+47800+Petaling+Jaya,+Selangor,+Malaysia",
  },
  channels: [
    {
      label: "General Inquiries",
      value: "contact@simulasi.org",
      href: "mailto:contact@simulasi.org",
    },
    {
      label: "Platform Demos",
      value: "demo@simulasi.org",
      href: "mailto:demo@simulasi.org",
    },
    {
      label: "Business Hours",
      value: "Mon – Fri · 9:00 AM – 6:00 PM (MYT)",
    },
  ],
  inquiryTypes: [
    "Platform Demo",
    "Cyber Exercise Services",
    "Red Teaming",
    "OSINT & AI Intelligence",
    "Partnership",
    "General Inquiry",
  ],
  form: {
    title: "Send a Secure Message",
    submitLabel: "Transmit Message",
    successTitle: "Message Received",
    successMessage:
      "Thank you for reaching out. Our team will respond within one business day.",
  },
} as const;
