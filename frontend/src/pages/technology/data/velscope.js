// Content config for /velscope/.
const config = {
  slug: "velscope",
  name: "VELscope® Oral Cancer Screening",
  testIdPrefix: "velscope",
  urlPath: "/velscope/",
  breadcrumb: { label: "Technology", href: "/technology" },

  meta: {
    title: "Oral Cancer Screening in Milton, ON - Hawthorne Village Dental Care",
    description:
      "Dr. Sarna at Hawthorne Village Dental Care utilizes the Velscope oral cancer screening system that allows to detect oral cancer at an early stage.",
    schemaType: "MedicalDevice",
    procedure: {
      alternateName: "VELscope Fluorescence Oral Cancer Screening System",
      description:
        "A revolutionary hand-held device using fluorescence technology for early visualization and a more effective oral cancer screening protocol, with immediate benefits for the patient.",
      howPerformed:
        "The hand-held VELscope shines a safe fluorescence light into the mouth; healthy and abnormal tissue fluoresce differently, letting the dentist visualize potential problems long before they're visible to the naked eye. The screening takes less than two minutes.",
    },
  },

  hero: {
    eyebrow: "VELscope oral cancer screening in Milton",
    titleA: "Two minutes that can",
    titleB: "change everything.",
    intro:
      "Dr. Sarna strongly suggests every patient have an oral cancer screening. The VELscope system uses fluorescence technology to detect oral cancer at an early stage — or at least as early as possible — in a screening that takes less than two minutes of your checkup.",
    bookLabel: "Book a Screening",
    image: {
      src: "https://images.unsplash.com/photo-1667133295315-820bb6481730?w=1200&q=80&auto=format&fit=crop",
      alt: "An oral examination with VELscope screening at Hawthorne Village Dental Care",
    },
    stats: [
      { k: "<2 min", v: "Screening time" },
      { k: "Every", v: "Patient encouraged" },
      { k: "Early", v: "Visualization of tissue" },
      { k: "0", v: "Pain or discomfort" },
    ],
    floatBottomLeft: { icon: "Eye", label: "VELscope®", value: "Fluorescence screening" },
    floatTopRight: { icon: "ShieldCheck", title: "Immediate benefits", sub: "for every patient" },
  },

  awards: {
    titleA: "Preventive care from an",
    titleB: "award-winning team.",
    subtitle:
      "The Milton clinic recognized with 12 consecutive community awards screens for oral cancer as a routine part of care — because early is everything.",
  },

  intro: {
    eyebrow: "What is the VELscope",
    titleA: "Light that sees what",
    titleB: "eyes can't.",
    paragraph:
      "The VELscope is a revolutionary hand-held device that gives Dr. Sarna an easy-to-use examination system for the early detection of oral cancer. Using fluorescence technology, it provides early visualization of tissue changes and a more effective screening protocol:",
    image: {
      src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&q=80&auto=format&fit=crop",
      alt: "Advanced screening technology in a modern Milton dental clinic",
    },
    floatCards: [
      { icon: "Zap", title: "Fluorescence", sub: "healthy tissue glows differently" },
      { icon: "Timer", title: "Under 2 minutes", sub: "inside a normal checkup" },
    ],
    parts: [
      {
        icon: "Sun",
        kicker: "Step 1",
        title: "A special light",
        desc: "The hand-held VELscope shines a safe fluorescence light across the tissues of your mouth.",
      },
      {
        icon: "Eye",
        kicker: "Step 2",
        title: "Tissue reveals itself",
        desc: "Healthy and abnormal tissue fluoresce differently under the light — changes become visible long before the naked eye could catch them.",
      },
      {
        icon: "CalendarCheck",
        kicker: "Step 3",
        title: "Answers immediately",
        desc: "Dr. Sarna reviews what the light shows on the spot, and anything suspicious gets followed up promptly.",
      },
    ],
    closingNote:
      "The whole screening takes less than two minutes — a small addition to a checkup with immediate benefits for the patient.",
  },

  context: {
    eyebrow: "Why screening matters",
    titleA: "Oral cancer is quiet.",
    titleB: "Screening isn't optional.",
    feature: {
      image: {
        src: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=1000&q=80&auto=format&fit=crop",
        alt: "A calm patient during a routine screening visit",
      },
      headline: "Early detection is the entire game.",
      caption:
        "Detecting oral cancer at an early stage — or at least as early as possible — is exactly what the VELscope was built for.",
    },
    cards: [
      {
        icon: "Eye",
        title: "Invisible beginnings",
        desc: "Early tissue changes simply can't be seen by the naked eye — fluorescence makes them visible.",
      },
      {
        icon: "Hourglass",
        title: "Time is the variable",
        desc: "The earlier a problem is visualized, the simpler every next step becomes.",
      },
      {
        icon: "Stethoscope",
        title: "Screening beats symptoms",
        desc: "By the time oral cancer causes symptoms, it's no longer early. Routine screening flips that.",
      },
      {
        icon: "Heart",
        title: "Everyone should screen",
        desc: "Dr. Sarna strongly suggests all patients have an oral cancer screening when they come in.",
      },
    ],
  },

  benefits: {
    eyebrow: "Benefits for patients",
    titleA: "A lot of protection,",
    titleB: "for two minutes.",
    stat: {
      icon: "Timer",
      value: "<2",
      label: "minutes per screening",
      note: "Early oral-cancer detection that takes less than two minutes, right inside your regular checkup.",
    },
    cards: [
      {
        icon: "Eye",
        title: "Sees changes early",
        desc: "Fluorescence visualization surfaces tissue changes long before they're visible otherwise.",
      },
      {
        icon: "Feather",
        title: "Completely comfortable",
        desc: "No scraping, no rinses, no discomfort — just light and a trained eye.",
      },
      {
        icon: "CalendarCheck",
        title: "Fits any checkup",
        desc: "It's quick enough to be part of routine visits, so screening actually happens.",
      },
      {
        icon: "ShieldCheck",
        title: "A better protocol",
        desc: "VELscope provides a more effective oral cancer screening protocol with immediate patient benefits.",
      },
      {
        icon: "Heart",
        title: "Peace of mind",
        desc: "Most screenings simply confirm everything is fine — and that certainty is worth two minutes.",
      },
    ],
    cta: {
      title: "When was your last oral cancer screening?",
      sub: "Book a checkup and add two minutes that matter.",
    },
  },

  options: {
    eyebrow: "Works together",
    titleA: "Part of a complete",
    titleB: "checkup.",
    cards: [
      {
        title: "Routine hygiene visits",
        desc: "Screening slots naturally into your regular cleaning and exam schedule.",
      },
      {
        title: "Periodontal gum care",
        desc: "Healthy soft tissue is monitored from every angle — gums and beyond.",
      },
      {
        title: "Digital radiography",
        desc: "Low-radiation X-rays cover what's below the surface while VELscope covers the tissue.",
      },
      {
        title: "Early cavity detection",
        desc: "The DIAGNOdent laser applies the same catch-it-early philosophy to tooth decay.",
      },
    ],
  },

  galleryId: null,

  whyHere: {
    titleA: "Prevention we practice,",
    titleB: "not just preach.",
    paragraph:
      "A screening tool only helps if it's actually used. At our Milton clinic the VELscope is part of how checkups work — Dr. Sarna strongly suggests every patient be screened, because a two-minute look is the cheapest insurance dentistry offers.",
    items: [
      {
        icon: "Eye",
        name: "VELscope in every operatory visit",
        benefit:
          "The hand-held system makes screening easy enough to offer to every patient, every time.",
      },
      {
        icon: "Award",
        name: "Experienced interpretation",
        benefit:
          "Fluorescence findings are read by a dentist with 25+ years of clinical experience.",
      },
      {
        icon: "CalendarCheck",
        name: "Built into checkups",
        benefit:
          "No separate appointment needed — screening happens inside the visit you already booked.",
      },
      {
        icon: "Heart",
        name: "A prevention-first clinic",
        benefit:
          "From cavity lasers to gum care, catching things early is the through-line of our care.",
      },
    ],
  },

  faqEyebrow: "Oral cancer screening questions",
  faqs: [
    {
      q: "What is the VELscope?",
      a: "A revolutionary hand-held screening device that uses fluorescence technology to provide early visualization of oral tissue changes — a more effective oral cancer screening protocol with immediate benefits for the patient.",
    },
    {
      q: "How does fluorescence find cancer?",
      a: "Under the VELscope's light, healthy tissue and abnormal tissue fluoresce differently. That contrast lets Dr. Sarna visualize potential problems long before they would be visible to the naked eye.",
    },
    {
      q: "How long does the screening take?",
      a: "Less than two minutes, done right inside your regular checkup. There's no discomfort — just light.",
    },
    {
      q: "Who should be screened?",
      a: "Dr. Sarna strongly suggests that all patients have an oral cancer screening when they come into the office. Early detection matters for everyone, not just high-risk groups.",
    },
    {
      q: "What happens if something looks abnormal?",
      a: "Most findings turn out benign, but anything suspicious is documented and followed up promptly — that's the entire value of catching things at an early stage.",
    },
    {
      q: "Does the screening cost extra?",
      a: "Ask our front desk about your plan — many cover screening as part of the exam. Either way, you'll always know costs up front.",
    },
  ],
};

export default config;
