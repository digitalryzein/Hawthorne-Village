import { ChevronRight, MapPin, Phone, Mail, Clock, Star, Instagram, Facebook, Youtube } from "lucide-react";
import { clinic } from "@/lib/site-data";

// Anchors are prefixed with the app root so they also work from inner pages.
const HOME = `${process.env.PUBLIC_URL}/`;

const exploreLinks = [
  { label: "Services", href: `${HOME}#services` },
  { label: "Dr. Sarna", href: `${HOME}dr-sarna` },
  { label: "Technology", href: `${HOME}technology` },
  { label: "Reviews", href: `${HOME}#reviews` },
  { label: "Smile Gallery", href: `${HOME}#gallery` },
  { label: "FAQ", href: `${HOME}#faq` },
  { label: "New Patients", href: `${HOME}#new-patients` },
  { label: "Visit Us", href: `${HOME}#visit` },
];

const serviceLinks = [
  { label: "Dental Implants", href: `${HOME}services/dental-implants` },
  { label: "Invisalign", href: `${HOME}services/invisalign` },
  { label: "Root Canal Therapy", href: `${HOME}services/root-canal-therapy` },
  { label: "Cosmetic Dentistry", href: `${HOME}services/cosmetic-dentistry` },
  { label: "Children's Dentistry", href: `${HOME}services/childrens-dentistry` },
  { label: "Emergency Care", href: `${HOME}#services` },
];

const hours = [
  { day: "Mon – Thu", time: "10 AM – 7 PM" },
  { day: "Friday", time: "9 AM – 6 PM" },
  { day: "Saturday", time: "9 AM – 2 PM" },
  { day: "Sunday", time: "Closed" },
];

const socials = [
  { Icon: Facebook, label: "Facebook", href: "https://www.facebook.com/HawthorneVillageDentalCare/" },
  { Icon: Instagram, label: "Instagram", href: "https://www.instagram.com/hawthorne_dental/" },
  { Icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@hawthornevillagedentalcare7693" },
];

function ColumnHeading({ children }) {
  return (
    <div className="font-display text-[17px] text-[#7DD3FC] font-medium mb-5">{children}</div>
  );
}

function FooterLink({ href, children, external }) {
  return (
    <li>
      <a
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="group inline-flex items-start gap-2 text-[14.5px] text-white/85 hover:text-white transition-colors"
      >
        <ChevronRight className="w-3.5 h-3.5 mt-1 shrink-0 text-[#7DD3FC]/70 group-hover:translate-x-0.5 transition-transform" strokeWidth={2.5} />
        <span>{children}</span>
      </a>
    </li>
  );
}

export default function Footer() {
  const { street, city, region, postal } = clinic.address;

  return (
    <footer data-testid="footer" className="bg-[#0A192F]">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.15fr] lg:gap-10">
          {/* Brand + social */}
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/images/logo.png`}
              alt="Hawthorne Village Dental Care logo"
              className="h-11 w-auto object-contain brightness-0 invert"
            />
            <p className="mt-5 text-[14.5px] text-white/70 leading-relaxed max-w-[300px]">
              One of Milton's trusted dental clinics since 2010. Our passion is dentistry,
              our focus is you.
            </p>

            <div className="mt-6 text-[13.5px] text-[#7DD3FC] font-medium">Get Social With Us:</div>
            <div className="mt-3 flex items-center gap-2.5">
              {socials.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Hawthorne Village Dental Care on ${label}`}
                  data-testid={`footer-social-${label.toLowerCase()}`}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#0284C7] text-white flex items-center justify-center transition-colors"
                >
                  <Icon className="w-[18px] h-[18px]" strokeWidth={1.75} />
                </a>
              ))}
            </div>

            {/* Google rating card */}
            <div className="mt-6 inline-flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-sm">
              <div>
                <div className="text-[13px] font-semibold text-[#0A192F]">Hawthorne Village Dental Care</div>
                <div className="mt-0.5 flex items-center gap-1.5">
                  <span className="text-[14px] font-semibold text-[#0284C7]">{clinic.googleRating}</span>
                  <span className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#F59E0B] text-[#F59E0B]" />
                    ))}
                  </span>
                </div>
                <div className="mt-0.5 text-[11px] text-[#64748B]">
                  {clinic.reviewCount}+ reviews · powered by <span className="font-medium text-[#4285F4]">G</span><span className="font-medium text-[#EA4335]">o</span><span className="font-medium text-[#FBBC05]">o</span><span className="font-medium text-[#4285F4]">g</span><span className="font-medium text-[#34A853]">l</span><span className="font-medium text-[#EA4335]">e</span>
                </div>
              </div>
            </div>
          </div>

          {/* Explore */}
          <div>
            <ColumnHeading>Explore</ColumnHeading>
            <ul className="space-y-2.5">
              {exploreLinks.map((l) => (
                <FooterLink key={l.label} href={l.href}>{l.label}</FooterLink>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <ColumnHeading>Our Services</ColumnHeading>
            <ul className="space-y-2.5">
              {serviceLinks.map((l) => (
                <FooterLink key={l.label} href={l.href}>{l.label}</FooterLink>
              ))}
            </ul>
          </div>

          {/* Contact + hours */}
          <div>
            <ColumnHeading>Contact Info</ColumnHeading>
            <ul className="space-y-4 text-[14.5px] text-white/85">
              <li className="flex items-start gap-3">
                <MapPin className="w-[18px] h-[18px] mt-0.5 shrink-0 text-[#7DD3FC]" strokeWidth={1.75} />
                <a
                  href="https://www.google.com/maps/place/10220+Derry+Rd+%23206,+Milton,+ON+L9T+7J3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {clinic.name} – {street}, {city}, {region} {postal}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-[18px] h-[18px] mt-0.5 shrink-0 text-[#7DD3FC]" strokeWidth={1.75} />
                <a href={clinic.phoneHref} data-testid="footer-call-btn" className="hover:text-white transition-colors">
                  {clinic.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-[18px] h-[18px] mt-0.5 shrink-0 text-[#7DD3FC]" strokeWidth={1.75} />
                <a href={`mailto:${clinic.email}`} className="hover:text-white transition-colors break-all">
                  {clinic.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-[18px] h-[18px] mt-0.5 shrink-0 text-[#7DD3FC]" strokeWidth={1.75} />
                <ul className="space-y-1.5 w-full max-w-[220px]">
                  {hours.map((h) => (
                    <li key={h.day} className="flex justify-between gap-4">
                      <span>{h.day}</span>
                      <span className={h.time === "Closed" ? "text-white/50" : "text-white/65"}>{h.time}</span>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-[#071120]">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-5 text-center text-[13px] text-white/70">
          © {new Date().getFullYear()} by {clinic.name}
          <span className="mx-2 text-white/30">|</span>
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <span className="mx-2 text-white/30">|</span>
          <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
}
