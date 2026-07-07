import { useState, useEffect } from "react";
import { Phone, Calendar } from "lucide-react";
import BookingDialog from "@/components/site/BookingDialog";
import { clinic } from "@/lib/site-data";

// Mobile-only floating action bar for call + book.
export default function StickyActions() {
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <>
      <div
        data-testid="sticky-actions"
        className={`md:hidden fixed bottom-4 left-4 right-4 z-40 transition-all duration-300 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
        }`}
      >
        <div className="flex gap-2 rounded-full bg-white/90 backdrop-blur-xl border border-slate-200 shadow-[0_20px_50px_-15px_rgba(10,25,47,0.35)] p-1.5">
          <a
            data-testid="sticky-call-btn"
            href={clinic.phoneHref}
            className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full py-3 text-[14px] font-medium text-[#0A192F] bg-white border border-slate-100"
          >
            <Phone className="w-4 h-4" /> Call
          </a>
          <button
            data-testid="sticky-book-btn"
            onClick={() => setOpen(true)}
            className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full py-3 text-[14px] font-medium text-white bg-[#2563EB]"
          >
            <Calendar className="w-4 h-4" /> Book
          </button>
        </div>
      </div>

      <BookingDialog open={open} onOpenChange={setOpen} />
    </>
  );
}
