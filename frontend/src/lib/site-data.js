// Central data for the Hawthorne Village Dental Care homepage.
// Content is written for real Milton, Ontario patients and never keyword-stuffed.

export const clinic = {
  name: "Hawthorne Village Dental Care",
  phone: "(905) 864-3368",
  phoneHref: "tel:+19058643368",
  bookUrl: "https://online-booking.xcarepro.com/1512165329/Hawthorne-Village-Dental?source=seo",
  email: "hawthornedental1@gmail.com",
  address: {
    street: "10220 Derry Rd #206",
    city: "Milton",
    region: "ON",
    postal: "L9T 7J3",
    country: "CA",
  },
  hours: [
    { day: "Monday", time: "10:00 AM – 7:00 PM" },
    { day: "Tuesday", time: "10:00 AM – 7:00 PM" },
    { day: "Wednesday", time: "10:00 AM – 7:00 PM" },
    { day: "Thursday", time: "10:00 AM – 7:00 PM" },
    { day: "Friday", time: "9:00 AM – 6:00 PM" },
    { day: "Saturday", time: "9:00 AM – 2:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],
  neighbourhoods: [
    "Hawthorne Village", "Beaty", "Clarke", "Ford", "Coates",
    "Willmott", "Scott", "Bronte Meadows", "Campbellville",
    "Milton East", "Milton West", "Mississauga", "Oakville", "Burlington", "Georgetown",
  ],
  googleRating: 4.7,
  reviewCount: 435,
};

export const trustBadges = [
  { label: "Google Rating", value: "4.7 / 5" },
  { label: "Happy Patients", value: "10,000+" },
  { label: "Years in Milton", value: "15+" },
  { label: "Insurance", value: "Direct Billing" },
  { label: "Federal Coverage", value: "CDCP Accepted" },
];

export const whyChoose = [
  {
    title: "Same-Day Emergency Care",
    desc: "Toothache, chipped tooth or lost filling? We keep slots open every day for urgent issues, and most patients are seen within hours, not days.",
    icon: "Ambulance",
    variant: "feature",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=1200&q=80&auto=format&fit=crop",
  },
  {
    title: "Evenings & Saturdays",
    desc: "Open until 7 PM weekdays and 2 PM Saturdays, so busy families never skip work or school.",
    icon: "Clock",
    variant: "mint",
    stat: "7 PM",
    statLabel: "Latest weeknight slot",
  },
  {
    title: "Direct Insurance Billing",
    desc: "We bill your provider directly, no paperwork, no reimbursement wait.",
    icon: "ShieldCheck",
    variant: "icon",
  },
  {
    title: "CDCP Accepted",
    desc: "Proudly participating in the Canadian Dental Care Plan.",
    icon: "Landmark",
    variant: "icon",
  },
  {
    title: "Comfort-First Sedation",
    desc: "Oral sedation, The Wand painless anaesthesia and calming playlists, dentistry without the anxiety.",
    icon: "HeartPulse",
    variant: "image",
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=1000&q=80&auto=format&fit=crop",
  },
  {
    title: "Digital Everything",
    desc: "3D CBCT, digital impressions, same-day CEREC crowns. Faster, quieter, more precise.",
    icon: "Cpu",
    variant: "image",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1000&q=80&auto=format&fit=crop",
  },
  {
    title: "Kids Feel Safe Here",
    desc: "Gentle first-visit routine designed for children from age one.",
    icon: "Baby",
    variant: "icon",
  },
  {
    title: "Award-Winning Team",
    desc: "Led by Dr. Raju Sarna, ICOI Fellow, trained at UCSF & UCLA.",
    icon: "Award",
    variant: "quote",
  },
];

export const services = [
  { name: "Dental Implants", blurb: "Permanent replacement teeth that look, feel and function like your own.", image: "https://images.unsplash.com/photo-1593022356769-11f762e25ed9?w=800&q=75&auto=format&fit=crop", href: "/services/dental-implants" },
  { name: "Orthodontics", blurb: "Braces and aligners that guide teeth into place for kids, teens and adults.", image: "https://images.unsplash.com/photo-1720685193964-4529228a33c1?w=800&q=75&auto=format&fit=crop", href: "/services/orthodontics" },
  { name: "Oral Sedation", blurb: "Calm, comfortable dentistry for patients who feel nervous about the chair.", image: "https://images.unsplash.com/photo-1657470179447-0f5aa16daa91?w=800&q=75&auto=format&fit=crop", href: "/services/oral-sedation" },
  { name: "Dental Bone Grafting", blurb: "Rebuilds lost jawbone so implants have a solid foundation to hold onto.", image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=75&auto=format&fit=crop", href: "/services/dental-bone-grafting" },
  { name: "Porcelain Veneers", blurb: "Thin porcelain shells that reshape chipped, stained or uneven front teeth.", image: "https://images.unsplash.com/photo-1670250492416-570b5b7343b1?w=800&q=75&auto=format&fit=crop", href: "/services/porcelain-veneers" },
  { name: "Teeth In a Day", blurb: "Full-arch implants placed and restored with new teeth in a single visit.", image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&q=75&auto=format&fit=crop", href: "/services/teeth-in-a-day" },
  { name: "Root Canal Therapy", blurb: "Gentle, microscope-guided treatment that saves the tooth and stops the pain.", image: "https://images.unsplash.com/photo-1643401142249-84ef35c123c9?w=800&q=75&auto=format&fit=crop", href: "/services/root-canal-therapy" },
  { name: "Dentures", blurb: "Custom, comfortable and natural-looking replacements for missing teeth.", image: "https://images.unsplash.com/photo-1562330743-fbc6ef07ca78?w=800&q=75&auto=format&fit=crop", href: "/services/dentures" },
  { name: "Periodontal (Gum) Care", blurb: "Deep cleaning and gum therapy that stops disease before it takes teeth.", image: "https://images.unsplash.com/photo-1667133295315-820bb6481730?w=800&q=75&auto=format&fit=crop", href: "/services/periodontal-gum-care" },
  { name: "Cosmetic Dentistry", blurb: "Whitening, veneers and full smile makeovers designed around your face.", image: "https://images.unsplash.com/photo-1769559893692-c6d0623bf8e4?w=800&q=75&auto=format&fit=crop", href: "/services/cosmetic-dentistry" },
  { name: "Same Day Crowns", blurb: "In-office CEREC crowns milled and fitted in a single visit.", image: "https://images.unsplash.com/photo-1662837775146-871f817c7887?w=800&q=75&auto=format&fit=crop", href: "/services/same-day-crowns" },
  { name: "Botox & TMJ Treatment", blurb: "Relief for jaw pain, clenching and the headaches they drag along.", image: "https://images.unsplash.com/photo-1746708810803-722593e53772?w=800&q=75&auto=format&fit=crop", href: "/services/botox-tmj-treatment" },
  { name: "Connective Tissue Graft", blurb: "Covers exposed roots and restores a healthy, even gum line.", image: "https://images.unsplash.com/photo-1660732205495-f65510d8180e?w=800&q=75&auto=format&fit=crop", href: "/services/connective-tissue-graft" },
  { name: "Invisalign", blurb: "Clear, removable aligners for adults and teens, straighter teeth in months, not years.", image: "https://images.unsplash.com/photo-1777793636393-a0fec488f3fb?w=800&q=75&auto=format&fit=crop", href: "/services/invisalign" },
  { name: "Plasma Rich Fibrin", blurb: "Your own platelets, used to speed healing after extractions and surgery.", image: "https://images.unsplash.com/photo-1639772823849-6efbd173043c?w=800&q=75&auto=format&fit=crop", href: "/services/plasma-rich-fibrin" },
  { name: "Sleep Apnea", blurb: "Custom oral appliances that quiet snoring and bring back real sleep.", image: "https://images.unsplash.com/photo-1759540638947-82b58f341f52?w=800&q=75&auto=format&fit=crop", href: "/services/sleep-apnea" },
  { name: "Children's Dentistry", blurb: "Warm, unhurried visits that build lifelong healthy habits from age one.", image: "https://images.unsplash.com/photo-1758205307836-0829c799890b?w=800&q=75&auto=format&fit=crop", href: "/services/childrens-dentistry" },
  { name: "Sports Mouthguards", blurb: "Custom-fitted protection for hockey, football and every sport in between.", image: "https://images.unsplash.com/photo-1770009534034-85be3c774f60?w=800&q=75&auto=format&fit=crop", href: "/services/sports-mouthguards" },
  { name: "Wisdom Teeth", blurb: "Same-day surgical extraction with modern comfort protocols.", image: "https://images.unsplash.com/photo-1522849696084-818b29dfe210?w=800&q=75&auto=format&fit=crop", href: "/services/wisdom-teeth" },
];

export const technology = [
  { name: "3D Cone Beam CT", benefit: "Precise implant planning and airway analysis with ultra-low radiation." },
  { name: "Digital Radiography", benefit: "Up to 90% less radiation than traditional X-rays, instant results." },
  { name: "CEREC Same-Day Crowns", benefit: "One appointment, no temporary crowns, no messy impressions." },
  { name: "Soft-Tissue Laser", benefit: "Faster healing, less bleeding, no sutures for many gum procedures." },
  { name: "Seiler Microscope", benefit: "40× magnification for root canals and precision restorations." },
  { name: "VELscope Screening", benefit: "Early oral-cancer detection that takes less than two minutes." },
  { name: "The Wand (Painless Anaesthesia)", benefit: "Computer-controlled freezing you can barely feel." },
  { name: "Medical-Grade Air Purification", benefit: "Every operatory is filtered continuously for your safety." },
  { name: "Isolite Dental Isolation System", benefit: "Individualized suction and lighting keep your mouth dry and comfortable, so restorations last longer." },
  { name: "Early Laser Cavity Detection", benefit: "A DIAGNOdent laser finds cavities at their earliest stage, meaning less tooth structure needs repair." },
  { name: "Water Purification System", benefit: "Every treatment unit runs on high-quality, distilled, bacteria-free water for safer care." },
  { name: "iTero Digital Scanner", benefit: "See a simulated preview of your smile before starting Invisalign or orthodontic treatment." },
];

export const testimonials = [
  { name: "Adeola", body: "Tried Hawthorne Village Dental Care for the first time and I have never ever felt so relaxed and at ease on a dentist chair. Erica was sweet, professional and pleasant. Really impressed.", rating: 5 },
  { name: "Krisen Allen", body: "Great experience at Hawthorne dental. The staff are all super friendly, and Dr. Malhi was great at explaining every step as he worked. The equipment they use is impressive and modern.", rating: 5 },
  { name: "Mikhail Korolko", body: "All staff are friendly. I had cleaning with hygienist Katerina. She is so professional, knowledgeable and makes each client feel special — the reason I switched from my previous dental.", rating: 5 },
  { name: "Verdah Ansari", body: "The best dental clinic I have ever been to. So kind, considerate and genuinely care for your health. Highly recommend Dr. Lulu — can't say enough good stuff about her.", rating: 5 },
  { name: "Mikhael Pesin", body: "Recently moved to the area and today was my first visit. A great environment, friendly staff and an office that is technologically inclined. I will definitely be returning.", rating: 5 },
  { name: "Darrel Saldanha", body: "I've never walked out of a dentist feeling so happy. My hygienist Haydee is excellent — she took the time to explain everything. Dr. Sarna gave me very good insight of my case.", rating: 5 },
];

export const journey = [
  { step: "01", title: "Book", desc: "Online in 60 seconds, or call. We confirm the same day." },
  { step: "02", title: "Consultation", desc: "Meet the dentist, share your goals, get a clear plan and price." },
  { step: "03", title: "Treatment", desc: "Modern, gentle care with sedation options if you need them." },
  { step: "04", title: "Smile", desc: "Follow-up check-ins so results last a lifetime." },
];

export const insurers = [
  "Manulife", "Sun Life", "Canada Life", "GreenShield", "Desjardins", "SSQ", "Blue Cross", "Equitable Life", "Industrial Alliance", "Johnson Inc.",
];

export const faqs = [
  { q: "What makes Hawthorne Village Dental Care the best dental clinic in Milton?", a: "Patients point to the same things again and again: same-day emergency care, evening and Saturday hours, direct billing, CDCP acceptance, and a team led by an ICOI Fellow with over 25 years of experience. We're proud to be one of the top-rated dental clinics in Milton, with a 4.7 rating from more than 435 Google reviews." },
  { q: "Are you accepting new patients in Milton?", a: "Yes, we welcome new patients of every age, from one-year-olds visiting for their first check-up to grandparents. Most new-patient appointments are available within a week." },
  { q: "Do you accept walk-in patients or same-day emergencies?", a: "We don't operate as a walk-in dentist for routine visits, but we always hold same-day slots for dental emergencies. Call ahead and our front desk will fit you in as quickly as possible, often within hours." },
  { q: "Are you a direct billing dentist near me?", a: "Yes. Hawthorne Village Dental Care bills almost every major Canadian insurer directly, including Manulife, Sun Life, Canada Life, GreenShield, Desjardins and Blue Cross. You only pay any portion your plan does not cover." },
  { q: "Do you accept the Canadian Dental Care Plan (CDCP)?", a: "Yes. Hawthorne Village Dental Care is a participating CDCP provider. Bring your CDCP welcome letter and Government of Canada Dental Benefits card to your appointment." },
  { q: "What if I have a dental emergency after hours?", a: "Call (905) 864-3368 and follow the after-hours prompt. We reserve same-day slots every weekday for pain, swelling and broken teeth." },
  { q: "Where are you located in Milton?", a: "10220 Derry Road, Suite 206, Milton, ON L9T 7J3, inside the Hawthorne Village medical complex, with free surface parking and elevator access." },
  { q: "Do you see children? What age should the first visit be?", a: "Yes. The Canadian Dental Association recommends the first visit by age one, or within six months of the first tooth. Our team makes early visits fun, short and pressure-free." },
  { q: "How much does a dental implant cost in Milton?", a: "A single implant with crown at Hawthorne Village Dental Care typically ranges from $3,500 to $5,500 depending on bone quality and materials. We provide a written estimate before any treatment begins." },
  { q: "Is Invisalign more expensive than braces?", a: "For most adult cases the price is very similar. We offer 0% financing over 12–24 months so you can spread the cost." },
  { q: "Do you use nitrous oxide (laughing gas) or oral sedation?", a: "Yes. We offer oral conscious sedation and computer-guided freezing (The Wand) for anxious patients. Deeper sedation options are discussed during your consultation." },
  { q: "Are digital X-rays safe?", a: "Digital X-rays use up to 90% less radiation than traditional film and are considered safe for children and pregnant patients when clinically indicated." },
  { q: "How long does a routine cleaning take?", a: "A standard hygiene visit runs 45–60 minutes. Your first visit takes about 90 minutes because we complete a comprehensive exam and digital records." },
  { q: "Can you help with a chipped or knocked-out tooth today?", a: "Call us immediately at (905) 864-3368. For a knocked-out permanent tooth, keep it moist (milk or saliva) and come in within 30 minutes for the best chance of saving it." },
  { q: "Do you offer teeth whitening that actually works?", a: "Yes, in-office Zoom whitening lightens teeth up to 8 shades in one visit, and take-home custom trays maintain results for years." },
  { q: "How long do dental implants last?", a: "With good oral hygiene and regular checkups, dental implants have a 95%+ ten-year success rate and often last a lifetime." },
  { q: "What is the CEREC same-day crown process?", a: "We scan your tooth digitally, design the crown on-screen, mill it from a solid ceramic block, and bond it, all in about 90 minutes. No temporaries, no second visit." },
  { q: "Do you treat sleep apnea?", a: "Yes. We provide custom oral appliances that reposition the jaw during sleep, a comfortable alternative to CPAP for mild to moderate cases." },
  { q: "Do wisdom teeth always need to come out?", a: "No. If they erupt straight, have room and can be cleaned, they can stay. We evaluate every case individually with a 3D CBCT scan." },
  { q: "Is a root canal painful?", a: "Modern root canals feel very similar to a routine filling thanks to microscope guidance and effective anaesthesia. Most patients say the pain of the infection was far worse than the treatment." },
  { q: "How often should I see the dentist?", a: "Most healthy adults benefit from a cleaning and exam every 6 months. Patients with gum disease, orthodontics, implants or a higher cavity risk may need visits every 3–4 months." },
  { q: "Do you offer payment plans?", a: "Yes. We partner with Dentalcard, PayBright and iFinance to offer 0% interest plans over 6–24 months for treatments above $500." },
  { q: "Can I bring my baby or toddler with me to my appointment?", a: "Absolutely. Our waiting area has a small kids' corner, and our team is happy to hold your little one for a quick moment if needed." },
  { q: "Which neighbourhoods do you serve near Milton?", a: "We regularly welcome patients from Hawthorne Village, Beaty, Clarke, Ford, Coates, Willmott, Scott, Bronte Meadows, Campbellville and nearby Mississauga, Oakville and Burlington." },
  { q: "Is your clinic wheelchair accessible?", a: "Yes. Elevator access, wide doorways, an accessible washroom and level operatory floors throughout." },
  { q: "Do you provide mouthguards for sports?", a: "Yes, custom-fitted mouthguards are stronger, more comfortable and better protection than boil-and-bite options." },
  { q: "What languages does your team speak?", a: "Our team speaks English, French, Hindi, Punjabi, Urdu, Tagalog and Spanish. Please let us know your preference when booking." },
  { q: "How do I book an appointment?", a: "Click 'Book Appointment' on this site, call (905) 864-3368, or email hawthornedental1@gmail.com. We respond within one business hour." },
];

export const gallery = [
  {
    id: "implants-bridges-veneers",
    label: "Implants, Bridges & Veneers",
    patient: "Myrna",
    problem: "Missing teeth on the upper left side with worn, discoloured teeth and an old bridge on the upper right. She wanted a new smile without a partial denture.",
    solution: "Recreated using implants on the upper left, new fixed bridges on the upper left and right, and veneers on her four front teeth.",
    before: "https://images.unsplash.com/photo-1664529845848-00f5fa16df86?w=900&q=80&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1660732205495-f65510d8180e?w=900&q=80&auto=format&fit=crop",
  },
  {
    id: "all-porcelain-crown",
    label: "All-Porcelain Crown",
    patient: "Brenda",
    problem: "Brenda didn't like the appearance of the crown on her upper right incisor. It looked too opaque and had a dark shadow at the gum line.",
    solution: "The old crown was removed and replaced with a new all-porcelain crown that lets light pass through, eliminating the shadow.",
    before: "https://images.unsplash.com/photo-1663182234283-28941e7612da?w=900&q=80&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1664529842504-5743d286ec1b?w=900&q=80&auto=format&fit=crop",
  },
  {
    id: "porcelain-veneers",
    label: "Porcelain Veneers",
    patient: "Leslie",
    problem: "Leslie neglected her teeth while wearing braces, which left her with stained enamel. She wanted to improve her smile without returning to braces.",
    solution: "Direct bonding on six upper teeth in a single visit masked the discolouration and reshaped teeth, a big boost to Leslie's smile and confidence.",
    before: "https://images.unsplash.com/photo-1679741919483-acf704e00495?w=900&q=80&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1567516364473-233c4b6fcfbe?w=900&q=80&auto=format&fit=crop",
  },
  {
    id: "tooth-whitening",
    label: "Tooth Whitening",
    patient: "Monique",
    problem: "Unhappy with the way her teeth had darkened over time, Monique wanted to bring back the whiteness of her smile.",
    solution: "Upper and lower teeth were whitened using a take-home whitening system, with dramatic results achieved in just two weeks.",
    before: "https://images.unsplash.com/photo-1664529845843-b4192b8246fa?w=900&q=80&auto=format&fit=crop",
    after: "https://images.unsplash.com/photo-1654373535457-383a0a4d00f9?w=900&q=80&auto=format&fit=crop",
  },
];
