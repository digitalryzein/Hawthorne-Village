// Content config for /digital-radiography — technology page.
const config = {
  slug: "digital-radiography",
  name: "Digital Radiography",
  testIdPrefix: "radiography",
  urlPath: "/digital-radiography/",
  breadcrumb: { label: "Technology", href: "/technology" },

  meta: {
    title: "Dental Digital X-Ray in Milton, ON - Hawthorne Village Dental Care",
    description:
      "At Hawthorne Village Dental Care we use digital x-ray which significantly reduces 80% less radiation exposure compared to normal x-rays.",
    schemaType: "MedicalDevice",
    procedure: {
      description:
        "Digital radiography captures dental X-ray images with a small electronic sensor instead of film, using up to 90% less radiation and displaying large, crisp images on screen instantly.",
      howPerformed:
        "A small digital sensor is placed gently in the mouth, the image is captured with minimal exposure time, and it appears on screen moments later — enlarged, crisp and stored in your patient file for future reference.",
    },
  },

  hero: {
    eyebrow: "Digital radiography in Milton",
    titleA: "Sharper X-rays,",
    titleB: "a fraction of the radiation.",
    intro:
      "Digital X-rays help diagnose and treat many dental conditions — bone height, bone defects, infection, root issues, tooth decay and more. At our Milton clinic they appear on screen instantly, with up to 90% less radiation than traditional film X-rays.",
    bookLabel: "Book a Checkup",
    image: {
      src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&q=80&auto=format&fit=crop",
      alt: "Modern digital operatory at Hawthorne Village Dental Care in Milton",
    },
    stats: [
      { k: "90%", v: "less radiation, up to" },
      { k: "Instant", v: "on-screen images" },
      { k: "Crisp", v: "enlarged detail" },
      { k: "Filed", v: "for future reference" },
    ],
    floatBottomLeft: { icon: "ScanLine", label: "Digital X-ray system", value: "Faster, safer, greener" },
    floatTopRight: { icon: "ShieldCheck", title: "Minimal exposure", sub: "up to 90% less radiation" },
  },

  awards: {
    titleA: "Modern diagnostics from an",
    titleB: "award-winning team.",
    subtitle:
      "Dr. Sarna and his team keep Hawthorne Village Dental Care digital end to end — and our Milton clinic has earned 12 consecutive community awards from the Milton Champion, Hamilton Spectator and Three Best Rated.",
  },

  intro: {
    eyebrow: "What is digital radiography",
    titleA: "X-rays without film,",
    titleB: "and without the wait.",
    paragraph:
      "Digital radiography replaces old-fashioned film with an electronic sensor and a computer. The result is faster, safer and environmentally friendly imaging — and a picture of your mouth you can actually see and understand. Here's how a digital X-ray works:",
    image: {
      src: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=1200&q=80&auto=format&fit=crop",
      alt: "Patient having a comfortable digital X-ray visit at Hawthorne Village Dental Care",
    },
    floatCards: [
      { icon: "Zap", title: "Minimal exposure", sub: "shorter capture time" },
      { icon: "Leaf", title: "No chemicals", sub: "environmentally friendly" },
    ],
    parts: [
      {
        icon: "Scan",
        kicker: "How it works — 1",
        title: "A quick, gentle capture",
        desc: "A small digital sensor takes the place of film, so exposure time is minimal — up to 90% less radiation than a normal X-ray.",
      },
      {
        icon: "Cpu",
        kicker: "How it works — 2",
        title: "On screen in moments",
        desc: "Images are scanned straight into our computer — large, crisp views of your teeth, supporting bone and gums, with no film developing.",
      },
      {
        icon: "Layers",
        kicker: "How it works — 3",
        title: "Stored in your file",
        desc: "Every image is saved to your record for future reference, so we can compare visits and catch changes early.",
      },
    ],
    closingNote:
      "The quick on-screen reference does more than speed things up — it lets Dr. Sarna walk you through any area of concern on the monitor, so you understand exactly what's happening in your mouth.",
  },

  context: {
    eyebrow: "Why X-rays matter",
    titleA: "Most dental problems start",
    titleB: "where the eye can't see.",
    feature: {
      image: {
        src: "https://images.unsplash.com/photo-1667133295315-820bb6481730?w=1000&q=80&auto=format&fit=crop",
        alt: "Dental examination revealing conditions below the gum line",
      },
      headline: "A visual exam only shows the surface. Digital X-rays show the rest.",
      caption:
        "Dr. Sarna uses digital radiography to diagnose and plan treatment across many dental procedures, from routine fillings to gum therapy.",
    },
    cards: [
      {
        icon: "ZoomIn",
        title: "Hidden tooth decay",
        desc: "Cavities between teeth and under old fillings show up on a digital X-ray long before they cause pain.",
      },
      {
        icon: "Bone",
        title: "Bone height and defects",
        desc: "Digital X-rays illustrate bone height and bone defects — essential information for implants, dentures and extractions.",
      },
      {
        icon: "Activity",
        title: "Infection and root issues",
        desc: "Trouble at the root tip or inside the tooth is invisible from above. X-rays reveal it while it's still treatable.",
      },
      {
        icon: "Waves",
        title: "Gum disease tracking",
        desc: "Comparing images over time shows whether gum disease is progressing or arrested, so treatment can be adjusted.",
      },
    ],
  },

  benefits: {
    eyebrow: "Benefits for patients",
    titleA: "Safer, faster and",
    titleB: "easier to understand.",
    stat: {
      icon: "ShieldCheck",
      value: "90%",
      label: "less radiation, up to",
      note: "Digital X-rays are considered safe for children and pregnant patients when clinically indicated.",
    },
    cards: [
      {
        icon: "Shield",
        title: "A fraction of the radiation",
        desc: "Minimal exposure time means up to 90% less radiation than traditional film X-rays — a meaningful difference over a lifetime of dental care.",
      },
      {
        icon: "Timer",
        title: "Instant results",
        desc: "No developing, no waiting. Your images appear on screen moments after they're taken, so your visit keeps moving.",
      },
      {
        icon: "Eye",
        title: "You see what we see",
        desc: "Large, crisp on-screen images make it easy for Dr. Sarna to point out any area of concern and explain your options clearly.",
      },
      {
        icon: "Leaf",
        title: "Cleaner and greener",
        desc: "No film and no developing chemicals — digital X-rays are faster, safer and environmentally friendly.",
      },
      {
        icon: "Layers",
        title: "A record that follows you",
        desc: "Images are stored in your file for future reference, so every checkup can be compared against the last one.",
      },
    ],
    cta: {
      title: "Due for a checkup?",
      sub: "Book a visit and see your own smile on screen — clear images, clear answers, minimal radiation.",
    },
  },

  options: {
    eyebrow: "Works together",
    titleA: "One technology,",
    titleB: "many treatments.",
    cards: [
      {
        title: "Checkups & cleanings",
        desc: "Digital X-rays at routine exams catch decay and bone changes early, when treatment is smallest and simplest.",
      },
      {
        title: "Periodontal (gum) care",
        desc: "Comparing X-rays over time shows whether gum disease is progressing or arrested, guiding your gum therapy.",
      },
      {
        title: "Root canal therapy",
        desc: "X-rays reveal infection and root issues, helping our microscope-guided root canal treatment save the tooth.",
      },
      {
        title: "Children's dentistry",
        desc: "With up to 90% less radiation, digital X-rays are considered safe for children when clinically indicated.",
      },
    ],
  },

  galleryId: null,

  whyHere: {
    titleA: "Why we went",
    titleB: "digital everything.",
    paragraph:
      "Dr. Sarna and his team realize the benefits for our patients when utilizing our digital X-ray system — it's one piece of a clinic built around 3D CBCT, digital impressions and same-day CEREC crowns. Faster, quieter, more precise.",
    items: [
      {
        icon: "ShieldCheck",
        name: "Patient safety first",
        benefit:
          "Minimal exposure time with up to 90% less radiation than normal X-rays — the reason we retired film entirely.",
      },
      {
        icon: "Eye",
        name: "Clearer conversations",
        benefit:
          "Quick on-screen reference lets Dr. Sarna facilitate your understanding of any areas of concern before you decide anything.",
      },
      {
        icon: "Stethoscope",
        name: "Better diagnosis",
        benefit:
          "Digital X-rays illustrate bone height, bone defects, infection, root issues, tooth decay and more across many dental procedures.",
      },
      {
        icon: "Cpu",
        name: "Part of a digital clinic",
        benefit:
          "Your images live alongside 3D CBCT scans and digital impressions in one record, so care at a higher and improved level is the default.",
      },
    ],
  },

  faqEyebrow: "Digital radiography questions",
  faqs: [
    {
      q: "What is digital radiography?",
      a: "Digital radiography is dental X-ray imaging that uses a small electronic sensor instead of film. Images are scanned into our computer, where they appear large and crisp on screen moments after capture, and are stored in your file for future reference. It's faster, safer and environmentally friendly.",
    },
    {
      q: "How much less radiation do digital X-rays use?",
      a: "Digital X-rays allow for minimal exposure time, with up to 90% less radiation than traditional film X-rays. That's a meaningful reduction over a lifetime of routine dental care.",
    },
    {
      q: "Are digital X-rays safe for children and during pregnancy?",
      a: "Digital X-rays use up to 90% less radiation than traditional film and are considered safe for children and pregnant patients when clinically indicated. We only take images when there's a clear diagnostic reason.",
    },
    {
      q: "What can a digital X-ray actually show?",
      a: "Digital X-rays help in the diagnosis and treatment of many dental procedures. They illustrate bone height, bone defects, infection, root issues, tooth decay and more, and they're also useful for determining whether gum disease is progressing or arrested.",
    },
    {
      q: "Will I get to see my own X-rays?",
      a: "Yes — that's one of the best parts. A digital X-ray allows for quick on-screen reference, so Dr. Sarna can walk you through any area of concern on the monitor and answer your questions before any treatment is planned.",
    },
    {
      q: "Are digital X-rays covered by insurance or the CDCP?",
      a: "X-rays taken as part of your exam are typically covered by most dental plans. We bill your insurance provider directly so there's no reimbursement wait, and we're a participating CDCP provider. Our front desk will confirm your exact coverage.",
    },
  ],
};

export default config;
