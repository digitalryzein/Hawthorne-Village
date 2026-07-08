// Content config for /3d-cone-beam-ct-scan/.
const config = {
  slug: "3d-cone-beam-ct-scan",
  name: "3D Cone Beam CT Scan",
  testIdPrefix: "cbct",
  urlPath: "/3d-cone-beam-ct-scan/",
  breadcrumb: { label: "Technology", href: "/technology" },

  meta: {
    title: "Dental 3D Cone Beam CT Scan - Hawthorne Village Dental Care",
    description:
      "Hawthorne Village Dental Care is very proud of 3D Cone Beam CT Scan results, which is helping its dentist to get subtle details and provide care to patient.",
    schemaType: "MedicalDevice",
    procedure: {
      alternateName: "Cone Beam Computed Tomography (CBCT)",
      description:
        "Cone Beam Computed Tomography gives the dentist a 360-degree, three-dimensional view of the area being examined — a large volume of information and subtle details no two-dimensional X-ray can provide.",
      howPerformed:
        "A single scan rotates around the patient's head, capturing a high-resolution 3D image that can be examined from many different perspectives with ultra-low radiation.",
    },
  },

  hero: {
    eyebrow: "3D Cone Beam CT in Milton",
    titleA: "Diagnosis in",
    titleB: "three dimensions.",
    intro:
      "Dr. Sarna's goal is the most accurate, thorough diagnosis possible — and Cone Beam Computed Tomography delivers it. Similar to a CAT scan, one CBCT scan gives a 360-degree, three-dimensional view of your teeth, jaw and airway that no flat X-ray can match.",
    bookLabel: "Book Appointment",
    image: {
      src: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&q=80&auto=format&fit=crop",
      alt: "Advanced 3D imaging equipment in a modern dental operatory in Milton",
    },
    stats: [
      { k: "360°", v: "View of the region" },
      { k: "3D", v: "High-resolution imaging" },
      { k: "1 scan", v: "Many perspectives" },
      { k: "Low", v: "Ultra-low radiation" },
    ],
    floatBottomLeft: { icon: "ScanLine", label: "CBCT imaging", value: "State-of-the-art" },
    floatTopRight: { icon: "ShieldCheck", title: "Clinically supported", sub: "improved diagnostics" },
  },

  awards: {
    titleA: "Precision imaging from an",
    titleB: "award-winning team.",
    subtitle:
      "The Milton clinic recognized with 12 consecutive community awards invests in the diagnostic technology behind that care — including 3D Cone Beam CT.",
  },

  intro: {
    eyebrow: "What is a CBCT scan",
    titleA: "Like a CAT scan,",
    titleB: "sized for your smile.",
    paragraph:
      "Cone Beam Computed Tomography (CBCT) captures a complete, three-dimensional picture of the area being examined. One scan offers a large volume of information and subtle details that simply cannot be obtained from any two-dimensional X-ray, whether intraoral or panoramic:",
    image: {
      src: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&q=80&auto=format&fit=crop",
      alt: "A dental model of the jaw structures that CBCT imaging maps in three dimensions",
    },
    floatCards: [
      { icon: "Eye", title: "Subtle details", sub: "2D X-rays simply miss" },
      { icon: "Gauge", title: "High resolution", sub: "from every perspective" },
    ],
    parts: [
      {
        icon: "Scan",
        kicker: "Step 1",
        title: "One quick scan",
        desc: "The scanner rotates once around your head — comfortable, fast, and with ultra-low radiation.",
      },
      {
        icon: "Layers",
        kicker: "Step 2",
        title: "A 3D model is built",
        desc: "The scan becomes a 360-degree, high-resolution model of your teeth, roots, jawbone, nerves and sinuses.",
      },
      {
        icon: "ZoomIn",
        kicker: "Step 3",
        title: "Examined from every angle",
        desc: "Dr. Sarna studies the region of interest from many different perspectives before making any treatment decision.",
      },
    ],
    closingNote:
      "Clinical studies support CBCT's improved diagnostic capabilities — which is exactly why we invested in it.",
  },

  context: {
    eyebrow: "Why 3D matters",
    titleA: "Flat X-rays hide things.",
    titleB: "3D doesn't.",
    feature: {
      image: {
        src: "https://images.unsplash.com/photo-1593022356769-11f762e25ed9?w=1000&q=80&auto=format&fit=crop",
        alt: "A dental implant model — implant placement is planned on CBCT imaging",
      },
      headline: "The best treatment starts with seeing everything.",
      caption:
        "A two-dimensional image flattens curved roots, hidden canals and bone volume into guesswork. CBCT removes the guessing.",
    },
    cards: [
      {
        icon: "Anchor",
        title: "Implants placed precisely",
        desc: "Bone volume, nerve position and sinus anatomy are mapped before an implant is ever placed.",
      },
      {
        icon: "Puzzle",
        title: "Wisdom teeth, understood",
        desc: "Angles, roots and nerve proximity are evaluated individually before any extraction decision.",
      },
      {
        icon: "Activity",
        title: "Hidden problems surface",
        desc: "Infections, extra canals and subtle fractures show up in 3D detail that flat images miss.",
      },
      {
        icon: "Wind",
        title: "Airway analysis",
        desc: "The same scan supports airway assessment for snoring and sleep apnea treatment planning.",
      },
    ],
  },

  benefits: {
    eyebrow: "Benefits for patients",
    titleA: "What a better picture",
    titleB: "does for you.",
    stat: {
      icon: "ScanLine",
      value: "360°",
      label: "three-dimensional view",
      note: "One scan lets Dr. Sarna examine the region of interest at high resolution from many different perspectives.",
    },
    cards: [
      {
        icon: "Target",
        title: "More accurate diagnosis",
        desc: "The best, most accurate and thorough diagnosis possible — that's the whole goal of the technology.",
      },
      {
        icon: "ShieldCheck",
        title: "No mid-treatment surprises",
        desc: "When anatomy is mapped up front, treatment goes the way it was planned.",
      },
      {
        icon: "Feather",
        title: "Quick and comfortable",
        desc: "The scan itself takes moments — no biting on films, no discomfort.",
      },
      {
        icon: "Gauge",
        title: "Ultra-low radiation",
        desc: "Modern CBCT delivers detailed 3D imaging while keeping radiation exposure very low.",
      },
      {
        icon: "Heart",
        title: "Confident decisions",
        desc: "You see what we see — a clear 3D picture makes your options genuinely understandable.",
      },
    ],
    cta: {
      title: "Want a diagnosis you can actually see?",
      sub: "Book a visit and experience imaging that shows the whole picture.",
    },
  },

  options: {
    eyebrow: "Works together",
    titleA: "Where CBCT",
    titleB: "earns its keep.",
    cards: [
      {
        title: "Dental implants",
        desc: "Every implant is planned on a 3D scan so placement is precise and predictable.",
      },
      {
        title: "Wisdom teeth",
        desc: "Each case is evaluated individually with CBCT before removal is recommended.",
      },
      {
        title: "Root canal therapy",
        desc: "Curved or extra roots are mapped before treatment starts — no surprises mid-procedure.",
      },
      {
        title: "Sleep apnea",
        desc: "Airway analysis from the same scan supports snoring and apnea appliance planning.",
      },
    ],
  },

  galleryId: null,

  whyHere: {
    titleA: "State-of-the-art,",
    titleB: "for a reason.",
    paragraph:
      "Dr. Sarna and the team are very proud of the 3D Cone Beam — and feel strongly that this state-of-the-art technology allows us to provide patients with the very highest level of care possible today. It anchors the clinic's digital workflow, from implant planning to airway analysis.",
    items: [
      {
        icon: "Award",
        name: "An implantologist's tool",
        benefit:
          "As an ICOI Fellow focused on implant surgery, Dr. Sarna plans every implant on CBCT imaging.",
      },
      {
        icon: "Cpu",
        name: "Part of a digital clinic",
        benefit:
          "CBCT works alongside digital X-rays, CEREC milling and the iTero scanner in one connected workflow.",
      },
      {
        icon: "ShieldCheck",
        name: "Evidence-backed",
        benefit:
          "Clinical studies support CBCT's improved diagnostic capabilities over two-dimensional imaging.",
      },
      {
        icon: "Timer",
        name: "Answers the same visit",
        benefit:
          "Scans happen in-office, so diagnosis and treatment planning don't wait on a referral.",
      },
    ],
  },

  faqEyebrow: "3D Cone Beam CT questions",
  faqs: [
    {
      q: "What is a Cone Beam CT scan?",
      a: "Cone Beam Computed Tomography (CBCT) is a technology similar to a CAT scan: it gives the dentist a 360-degree, three-dimensional view of the area being examined, at high resolution and from many different perspectives.",
    },
    {
      q: "How is CBCT different from a regular dental X-ray?",
      a: "A 3D Cone Beam scan offers a large volume of information and subtle details that simply cannot be obtained from any two-dimensional X-ray, whether intraoral or panoramic. Roots, nerves, sinuses and bone volume all appear in true 3D.",
    },
    {
      q: "Is the scan safe?",
      a: "Yes. Modern CBCT delivers its 3D imaging with ultra-low radiation, and it's only used when the added diagnostic detail genuinely benefits your care.",
    },
    {
      q: "When would I need a CBCT scan?",
      a: "Most commonly for implant planning, wisdom teeth evaluation, complex root canals and airway analysis — anywhere precise anatomy changes the treatment plan.",
    },
    {
      q: "Does the scan hurt or take long?",
      a: "Not at all. The scanner simply rotates around your head in moments — no films to bite on, nothing inside your mouth.",
    },
    {
      q: "Do I need a referral to get scanned?",
      a: "No. The 3D Cone Beam is right here in our Milton clinic, so scanning, diagnosis and treatment planning all happen under one roof.",
    },
  ],
};

export default config;
