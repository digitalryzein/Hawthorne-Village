import { Award, GraduationCap, Users, Sparkles } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const credentials = [
  { icon: GraduationCap, label: "DDS — University of California, San Francisco (UCSF)" },
  { icon: Award, label: "ICOI Fellowship in Implantology" },
  { icon: Sparkles, label: "UCLA — Advanced Education in General Dentistry (AEGD)" },
  { icon: Users, label: "25+ years restoring smiles for Milton families" },
];

export default function MeetDentist() {
  const ref = useReveal();
  return (
    <section id="dentist" ref={ref} className="reveal py-24 md:py-32 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6 md:px-8 grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center">
        {/* Photo */}
        <div className="relative">
          <div className="relative rounded-[32px] overflow-hidden shadow-[0_30px_80px_-20px_rgba(10,25,47,0.3)] aspect-[4/5] max-w-[520px]">
            <img
              src="https://images.pexels.com/photos/6812464/pexels-photo-6812464.jpeg"
              alt="Dr. Raju Sarna — lead dentist at Hawthorne Village Dental Care in Milton"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          {/* Signature-style badge */}
          <div className="absolute -bottom-5 -right-4 md:-right-8 bg-white rounded-2xl px-5 py-4 shadow-[0_20px_50px_-15px_rgba(10,25,47,0.25)] border border-slate-100">
            <div className="text-[11px] uppercase tracking-wider text-[#64748B] mb-0.5">Award-winning dentist</div>
            <div className="font-display italic text-[#0A192F] text-lg">Dr. Raju Sarna</div>
          </div>
        </div>

        {/* Bio */}
        <div>
          <div className="text-[13px] uppercase tracking-[0.14em] text-[#0284C7] font-medium mb-3">Meet your dentist</div>
          <h2 className="font-display text-3xl md:text-5xl text-[#0A192F] tracking-tight leading-[1.05]">
            Precision, artistry <span className="italic font-light text-[#64748B]">and a genuinely kind chair-side manner.</span>
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-[#475569]">
            Dr. Sarna is a recognized leader in cosmetic, restorative and implant dentistry — with an emphasis
            on re-creating natural aesthetic beauty. His patients include prominent Milton and GTA
            personalities, but you&apos;ll find him equally happy explaining a first filling to a nervous seven-year-old.
          </p>
          <p className="mt-4 text-[17px] leading-relaxed text-[#475569]">
            Every treatment plan starts with a real conversation about what you want, what you can afford
            and what will actually make you smile more often. No pressure, ever.
          </p>

          <ul className="mt-8 space-y-3">
            {credentials.map((c, i) => (
              <li
                key={i}
                data-testid={`credential-${i}`}
                className="flex items-start gap-3 text-[15px] text-[#334155]"
              >
                <span className="mt-0.5 w-8 h-8 rounded-full bg-[#E6F8F3] text-[#0284C7] flex items-center justify-center shrink-0">
                  <c.icon className="w-4 h-4" strokeWidth={2} />
                </span>
                <span className="leading-tight pt-1.5">{c.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
