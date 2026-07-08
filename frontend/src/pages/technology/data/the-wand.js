// Content config for /the-wand — The Wand (STA®) computer-controlled anaesthesia technology page.
const config = {
  slug: "the-wand",
  name: "The Wand",
  testIdPrefix: "wand",
  urlPath: "/the-wand/",
  breadcrumb: { label: "Technology", href: "/technology" },

  meta: {
    title: "The Wand Anesthesia System in Milton - Hawthorne Village Dental Care",
    description:
      "Fearful of injections? Hawthorne Village Dental Care in Milton uses The Wand (STA® Single Tooth Anesthesia System) for slow, steady, computer-controlled freezing that dramatically reduces injection pain.",
    schemaType: "MedicalDevice",
    procedure: {
      alternateName: "Single Tooth Anesthesia System (STA®)",
      description:
        "The Wand is a computer-controlled anaesthesia delivery system that gives Dr. Sarna precise control over the location and amount of anesthetic administered, dramatically reducing the pain of injections in the sensitive areas of the mouth.",
      howPerformed:
        "A lightweight pen-like handpiece delivers anesthetic at a computer-controlled, slow and steady flow rate. Because the flow into your tissues stays gentle and even, the injection is comfortable and predictable.",
    },
  },

  hero: {
    eyebrow: "Painless anaesthesia in Milton",
    titleA: "Freezing you can",
    titleB: "barely feel.",
    intro:
      "If you are fearful of injections, you'll be happy to hear that Hawthorne Village Dental Care uses the Single Tooth Anesthesia System® — The Wand — which dramatically reduces the pain of injections in the sensitive areas of the mouth. Slow, steady and computer-controlled, so it stays comfortable.",
    bookLabel: "Book an Appointment",
    image: {
      src: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=1000&q=80&auto=format&fit=crop",
      alt: "A relaxed patient receiving comfortable dental care with The Wand at Hawthorne Village Dental Care in Milton",
    },
    stats: [
      { k: "STA®", v: "Computer-controlled" },
      { k: "4.7★", v: "435+ Google reviews" },
      { k: "7 PM", v: "Weeknight appointments" },
      { k: "CDCP", v: "Participating provider" },
    ],
    floatBottomLeft: { icon: "Wand2", label: "The Wand", value: "STA® anaesthesia system" },
    floatTopRight: { icon: "Feather", title: "Slow and steady", sub: "so it barely registers" },
  },

  awards: {
    titleA: "Gentle dentistry from an",
    titleB: "award-winning team.",
    subtitle:
      "Comfort is a habit here, not a slogan. Our Milton clinic has earned 12 consecutive community awards from the Milton Champion, Hamilton Spectator and Three Best Rated — and gentle anaesthesia is a big part of why patients keep voting for us.",
  },

  intro: {
    eyebrow: "What is The Wand",
    titleA: "A computer takes over",
    titleB: "the part that stings.",
    paragraph:
      "The STA® System is a controlled anaesthesia system that gives Dr. Sarna precise control over the location and amount of anesthetic administered. Instead of a traditional syringe, a lightweight handpiece — patients call it the \"magic pen\" — delivers the freezing in three simple steps:",
    image: {
      src: "https://images.unsplash.com/photo-1657470179447-0f5aa16daa91?w=800&q=75&auto=format&fit=crop",
      alt: "Calm, comfortable dentistry with computer-controlled anaesthesia in Milton",
    },
    floatCards: [
      { icon: "Gauge", title: "Slow, even flow", sub: "controlled by computer" },
      { icon: "Snowflake", title: "Freezing", sub: "you can barely feel" },
    ],
    parts: [
      {
        icon: "Wand2",
        kicker: "How it works · 1",
        title: "A pen, not a syringe",
        desc: "The Wand looks like a small pen, not a needle and syringe — which alone puts many nervous patients at ease before anything happens.",
      },
      {
        icon: "Cpu",
        kicker: "How it works · 2",
        title: "The computer sets the pace",
        desc: "Anesthetic flows into your tissues at a computer-controlled rate, so the injection is guaranteed to be slow and steady — and therefore comfortable.",
      },
      {
        icon: "Target",
        kicker: "How it works · 3",
        title: "Precise place, precise amount",
        desc: "Dr. Sarna controls exactly where the anesthetic goes and how much is delivered, even in the most sensitive areas of the mouth.",
      },
    ],
    closingNote:
      "The result is a more predictable, comfortable injection — freezing you can barely feel, from the very first moment.",
  },

  context: {
    eyebrow: "Why injections hurt",
    titleA: "The sting usually",
    titleB: "isn't the needle.",
    feature: {
      image: {
        src: "https://images.unsplash.com/photo-1758205307836-0829c799890b?w=800&q=75&auto=format&fit=crop",
        alt: "A young patient sitting comfortably in the dental chair, unafraid of the freezing",
      },
      headline: "Most people blame the pierce. It's almost never the pierce.",
      caption:
        "Doctors have long known that the main cause of discomfort during an injection is the flow of the anesthetic into your tissues — most often, the sting happens because it was fired in too quickly.",
    },
    cards: [
      {
        icon: "Droplets",
        title: "Too-fast flow is the culprit",
        desc: "When anesthetic rushes into the tissue, it stings. The Wand controls the flow so that never happens.",
      },
      {
        icon: "Snowflake",
        title: "Sensitive areas hurt most",
        desc: "Injections in the sensitive areas of the mouth are exactly where computer-controlled delivery makes the biggest difference.",
      },
      {
        icon: "RefreshCw",
        title: "One bad memory lingers",
        desc: "A single painful injection can colour every dental visit after it. The Wand is very reassuring for people with previous bad experiences.",
      },
      {
        icon: "Heart",
        title: "Fear delays care",
        desc: "When the freezing is the scariest part of the appointment, people put off treatment. Take the sting away, and the visit gets easy.",
      },
    ],
  },

  benefits: {
    eyebrow: "Benefits of The Wand",
    titleA: "What a comfortable",
    titleB: "injection changes.",
    stat: {
      icon: "Feather",
      value: "STA®",
      label: "Single Tooth Anesthesia System",
      note: "Computer-controlled freezing you can barely feel — slow, steady and predictable every time.",
    },
    cards: [
      {
        icon: "Feather",
        title: "Barely-there freezing",
        desc: "The slow, even flow dramatically reduces injection pain, even in the mouth's most sensitive spots.",
      },
      {
        icon: "Gauge",
        title: "Predictable every time",
        desc: "Because a computer controls the delivery, the injection is guaranteed to be slow and steady — no surprises.",
      },
      {
        icon: "Target",
        title: "Precision where it counts",
        desc: "Dr. Sarna controls the exact location and amount of anesthetic, so you're properly frozen where you need it.",
      },
      {
        icon: "Heart",
        title: "Reassuring for anxious patients",
        desc: "If needles have kept you away from the dentist, the \"magic pen\" changes the entire experience.",
      },
      {
        icon: "Smile",
        title: "Appointments start calm",
        desc: "When the freezing is comfortable, everything that follows feels easier — for adults and kids alike.",
      },
    ],
    cta: {
      title: "Nervous about the needle?",
      sub: "Book an appointment and experience computer-controlled freezing for yourself — call (905) 864-3368 or book online in 60 seconds.",
    },
  },

  options: {
    eyebrow: "Works together",
    titleA: "Comfortable freezing,",
    titleB: "across everything we do.",
    cards: [
      {
        title: "Oral sedation",
        desc: "For truly anxious patients, The Wand pairs with oral conscious sedation for calm, comfortable dentistry from start to finish.",
      },
      {
        title: "Root canal therapy",
        desc: "Gentle, effective anaesthesia before microscope-guided treatment — most patients say the infection hurt far more than the fix.",
      },
      {
        title: "Dental implants",
        desc: "Comfortable freezing during implant placement is one reason patients are surprised by how easy the procedure feels.",
      },
      {
        title: "Children's dentistry",
        desc: "A pen-like wand instead of a syringe keeps young patients relaxed, so early visits stay fun and pressure-free.",
      },
    ],
  },

  galleryId: null,

  whyHere: {
    titleA: "Comfort here is",
    titleB: "an investment, not an afterthought.",
    paragraph:
      "We brought The Wand to our Milton clinic for one reason: the injection shouldn't be the part of dentistry people dread. It sits alongside oral sedation, calming playlists and a digital-everything operatory — a comfort-first approach led by Dr. Raju Sarna and his team.",
    items: [
      {
        icon: "HeartPulse",
        name: "Comfort-first philosophy",
        benefit:
          "Oral sedation, The Wand painless anaesthesia and calming playlists — dentistry without the anxiety is how we practise every day.",
      },
      {
        icon: "Award",
        name: "Led by Dr. Raju Sarna",
        benefit:
          "An ICOI Fellow with over 25 years of experience, trained at UCSF and UCLA, who chose this system for its precise, controlled delivery.",
      },
      {
        icon: "Cpu",
        name: "Digital everything",
        benefit:
          "The Wand joins 3D CBCT, digital impressions and same-day CEREC crowns — technology chosen to make care faster, quieter and more precise.",
      },
      {
        icon: "Baby",
        name: "Kids feel safe here",
        benefit:
          "A gentle first-visit routine from age one, and freezing that barely registers, help children grow up unafraid of the dentist.",
      },
    ],
  },

  faqEyebrow: "The Wand questions",
  faqs: [
    {
      q: "What exactly is The Wand?",
      a: "The Wand is the Single Tooth Anesthesia System® (STA®) — a computer-controlled anaesthesia system used at Hawthorne Village Dental Care. It gives Dr. Sarna precise control over the location and amount of anesthetic administered, which dramatically reduces the pain of injections in the sensitive areas of the mouth.",
    },
    {
      q: "Why do dental injections normally sting?",
      a: "Most people think needles sting because the skin is pierced, but this is usually not so. Doctors have long known that the main cause of discomfort is the flow of the anesthetic into your tissues — most often, the sting was caused because the anesthetic was fired in too quickly.",
    },
    {
      q: "How does The Wand make injections more comfortable?",
      a: "A computer controls the flow of anesthetic, so the injection is guaranteed to be slow and steady — and therefore comfortable. Using the \"magic pen,\" Dr. Sarna controls both where the freezing goes and how much is delivered.",
    },
    {
      q: "I've had bad experiences with needles before. Will this help?",
      a: "Yes — that's exactly who The Wand helps most. Patients with previous bad experiences find the computer-controlled delivery very reassuring, and for anyone who's still anxious, oral conscious sedation is also available at our Milton clinic.",
    },
    {
      q: "Does The Wand look like a normal needle?",
      a: "No. It's a lightweight handpiece that looks like a pen, which is why patients call it the \"magic pen.\" For many nervous patients, not seeing a traditional syringe makes the visit easier before the freezing even starts.",
    },
    {
      q: "Is The Wand suitable for children?",
      a: "Yes. A gentle, pen-like instrument and a slow, comfortable injection fit naturally into our children's dentistry routine, where visits are kept warm, unhurried and pressure-free from age one.",
    },
    {
      q: "How do I ask about The Wand before my appointment?",
      a: "Call us at (905) 864-3368 or speak to any Hawthorne Village Dental Care team member. We're happy to answer your questions and note your comfort preferences before your visit.",
    },
  ],
};

export default config;
