// Content config for /air-purification-system — Surgically Clean Air technology page.
const config = {
  slug: "air-purification-system",
  name: "Air Purification System",
  testIdPrefix: "airpure",
  urlPath: "/air-purification-system/",
  breadcrumb: { label: "Technology", href: "/technology" },

  meta: {
    title: "Surgical Air Purification System - Hawthorne Village Dental Care",
    description:
      "Dr. Sarna installed the Surgically Clean Air System at our Milton clinic. Every operatory is filtered continuously, removing micro-bacterial germs for a clean, fresh environment.",
    schemaType: "MedicalDevice",
    procedure: {
      alternateName: "Surgically Clean Air System",
      description:
        "A medical-grade air purification system that removes the micro-bacterial germs found in most dental offices, so every operatory at our Milton clinic is filtered continuously for your safety.",
      howPerformed:
        "The Surgically Clean Air System draws in room air, removes micro-bacterial germs, and disperses clean air back through the office — running continuously in every operatory throughout the day.",
    },
  },

  hero: {
    eyebrow: "Air purification in Milton",
    titleA: "The cleanest air",
    titleB: "you'll never notice.",
    intro:
      "Clean air quality matters to Dr. Sarna and our team. That's why we installed the Surgically Clean Air System — the best air purification system he could find — so every operatory is filtered continuously and every visit happens in a clean, fresh environment.",
    bookLabel: "Book a Visit",
    image: {
      src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&q=80&auto=format&fit=crop",
      alt: "A modern, technology-equipped operatory with continuous air purification at Hawthorne Village Dental Care in Milton",
    },
    stats: [
      { k: "Every", v: "operatory filtered" },
      { k: "4.7", v: "Google rating" },
      { k: "15+", v: "Years in Milton" },
      { k: "10,000+", v: "Happy patients" },
    ],
    floatBottomLeft: { icon: "Wind", label: "Surgically Clean Air", value: "Running in every operatory" },
    floatTopRight: { icon: "ShieldCheck", title: "Filtered continuously", sub: "for your safety" },
  },

  awards: {
    titleA: "A cleaner clinic from an",
    titleB: "award-winning team.",
    subtitle:
      "The same team that earned 12 consecutive community awards from the Milton Champion, Hamilton Spectator and Three Best Rated also invests in what you can't see — like the air you breathe during your visit.",
  },

  intro: {
    eyebrow: "What is the Surgically Clean Air System",
    titleA: "Clean air,",
    titleB: "on a constant loop.",
    paragraph:
      "The Surgically Clean Air System is a medical-grade air purification unit built for clinical spaces. Dr. Sarna chose it because it was the best air purification system he could find, and it works in a simple, continuous cycle:",
    image: {
      src: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=1200&q=80&auto=format&fit=crop",
      alt: "A patient relaxing comfortably in a treatment room with medical-grade air purification",
    },
    floatCards: [
      { icon: "RefreshCw", title: "Always running", sub: "filtered continuously" },
      { icon: "Leaf", title: "Fresh environment", sub: "for patients and team" },
    ],
    parts: [
      {
        icon: "Wind",
        kicker: "Step 1",
        title: "Air is drawn in",
        desc: "The system continuously pulls in the air circulating through each operatory during treatment.",
      },
      {
        icon: "Shield",
        kicker: "Step 2",
        title: "Germs are removed",
        desc: "It removes the micro-bacterial germs found in most dental offices, cleaning the air as it passes through.",
      },
      {
        icon: "Sparkles",
        kicker: "Step 3",
        title: "Clean air is dispersed",
        desc: "Purified air is dispersed back into the room, keeping the environment clean and fresh all day long.",
      },
    ],
    closingNote:
      "You won't see it working, and that's the point — a clean, fresh environment for every patient and every team member, on every visit.",
  },

  context: {
    eyebrow: "Why air quality matters",
    titleA: "What clean air",
    titleB: "protects you from.",
    feature: {
      image: {
        src: "https://images.unsplash.com/photo-1657470179447-0f5aa16daa91?w=1000&q=80&auto=format&fit=crop",
        alt: "A calm, comfortable dental visit in a continuously filtered operatory",
      },
      headline: "Most dental offices share the same invisible problem.",
      caption:
        "Micro-bacterial germs are found in most dental offices. Dr. Sarna decided our Milton clinic wouldn't be one of them.",
    },
    cards: [
      {
        icon: "Activity",
        title: "Micro-bacterial germs",
        desc: "The system removes the micro-bacterial germs found in most dental offices before the air reaches you.",
      },
      {
        icon: "RefreshCw",
        title: "Stale, recirculated air",
        desc: "Instead of the same air cycling around all day, each operatory is filtered continuously and refreshed.",
      },
      {
        icon: "Hourglass",
        title: "Worry during longer visits",
        desc: "Whether you're in for a quick checkup or a longer procedure, the air around you is being cleaned the entire time.",
      },
      {
        icon: "Baby",
        title: "Shared-space concerns",
        desc: "Families, kids and anxious patients all breathe easier knowing the whole office keeps a clean, fresh environment.",
      },
    ],
  },

  benefits: {
    eyebrow: "Benefits of purified air",
    titleA: "Why it makes your visit",
    titleB: "better.",
    stat: {
      icon: "Wind",
      value: "Every",
      label: "operatory filtered continuously",
      note: "The Surgically Clean Air System runs in every treatment room — not just one — for your safety.",
    },
    cards: [
      {
        icon: "ShieldCheck",
        title: "A safer room to sit in",
        desc: "Removing micro-bacterial germs from the air adds a layer of protection that most dental offices simply don't have.",
      },
      {
        icon: "Leaf",
        title: "Genuinely fresh air",
        desc: "A clean and fresh environment you can feel the moment you settle into the chair — no clinical staleness.",
      },
      {
        icon: "Heart",
        title: "Peace of mind for families",
        desc: "Parents bringing kids from age one appreciate knowing the whole clinic's air is cleaned continuously.",
      },
      {
        icon: "RefreshCw",
        title: "Protection that never pauses",
        desc: "The system doesn't switch on for special occasions. It filters continuously, patient after patient, all day.",
      },
      {
        icon: "SmilePlus",
        title: "Comfort for the whole team too",
        desc: "Clean air protects our team as well as our patients — and a healthy team gives you better, more focused care.",
      },
    ],
    cta: {
      title: "Curious about the air you'll breathe here?",
      sub: "Ask any of our team members about the Surgically Clean Air System at your next visit.",
    },
  },

  options: {
    eyebrow: "Works together",
    titleA: "One layer of",
    titleB: "a cleaner clinic.",
    cards: [
      {
        title: "Water purification system",
        desc: "Every treatment unit runs on high-quality, distilled, bacteria-free water — clean water to match the clean air.",
      },
      {
        title: "Isolite dental isolation",
        desc: "Individualized suction and lighting keep your mouth dry and comfortable, so restorations last longer.",
      },
      {
        title: "Digital radiography",
        desc: "Up to 90% less radiation than traditional X-rays, with instant results — safety built into imaging too.",
      },
      {
        title: "VELscope oral screening",
        desc: "Early oral-cancer detection that takes less than two minutes, part of the same safety-first mindset.",
      },
    ],
  },

  galleryId: null,

  whyHere: {
    titleA: "Why we invested in",
    titleB: "the air itself.",
    paragraph:
      "Dr. Sarna is a recognized leader in cosmetic, restorative and implant dentistry — and he applies the same standard to the environment his patients sit in. When he decided to purify the office air, he didn't look for an adequate system. He looked for the best one he could find.",
    items: [
      {
        icon: "Award",
        name: "The best system he could find",
        benefit:
          "Dr. Sarna researched his options and chose the Surgically Clean Air System specifically because it was the best air purification system available to him.",
      },
      {
        icon: "Wind",
        name: "Every operatory, not just one",
        benefit:
          "Rather than filtering a single room, every operatory in our Milton clinic is filtered continuously for your safety.",
      },
      {
        icon: "Stethoscope",
        name: "Patients and team alike",
        benefit:
          "The system maintains a clean and fresh environment for all of our patients and team members — everyone in the building benefits.",
      },
      {
        icon: "Cpu",
        name: "Part of a digital-first clinic",
        benefit:
          "Air purification joins 3D CBCT, digital impressions and same-day CEREC crowns in a clinic built around modern, precise, safer care.",
      },
    ],
  },

  faqEyebrow: "Air purification questions",
  faqs: [
    {
      q: "What air purification system does Hawthorne Village Dental Care use?",
      a: "We use the Surgically Clean Air System, which Dr. Sarna installed after searching for the best air purification system he could find. It removes the micro-bacterial germs found in most dental offices and keeps the environment clean and fresh.",
    },
    {
      q: "How does the air purification system work?",
      a: "The system draws in room air, removes micro-bacterial germs as the air passes through, and disperses clean air back into the office. It runs continuously, so the air in every operatory is being cleaned throughout your entire visit.",
    },
    {
      q: "Is the air filtered in every treatment room?",
      a: "Yes. Every operatory at our Milton clinic is filtered continuously for your safety — it's not limited to a single room or switched on only for certain procedures.",
    },
    {
      q: "Why does air quality matter at a dental office?",
      a: "Micro-bacterial germs are found in most dental offices. Removing them from the air adds a layer of protection for patients and team members alike, and it keeps the whole clinic feeling clean and fresh rather than stale.",
    },
    {
      q: "Will I notice the air purification system during my visit?",
      a: "Probably not, and that's by design. The system works quietly in the background while you're in the chair. Most patients simply notice that the office feels clean and fresh.",
    },
    {
      q: "Does the air purification system protect children and anxious patients too?",
      a: "Yes. Because it runs continuously in every operatory, everyone who visits benefits — from one-year-olds at their first checkup to patients using our comfort-first sedation options. If you have questions, our team members are happy to walk you through it.",
    },
  ],
};

export default config;
