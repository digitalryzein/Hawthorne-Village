import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar as CalendarIcon, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

const reasons = [
  "New patient — general check-up",
  "Dental cleaning",
  "Emergency / pain",
  "Cosmetic consultation",
  "Invisalign consultation",
  "Dental implants consultation",
  "Child's first visit",
  "Something else",
];

export default function BookingDialog({ open, onOpenChange }) {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", reason: "", date: "", notes: "" });

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: typeof e === "string" ? e : e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast.error("Please share your name and phone so we can get back to you.");
      return;
    }
    setSubmitting(true);
    // Simulate a brief pause. No backend storage per spec.
    await new Promise((r) => setTimeout(r, 700));
    setSubmitting(false);
    setDone(true);
    toast.success("Thanks! We'll call you within one business hour to confirm.");
  };

  const close = () => {
    onOpenChange(false);
    // Reset after animation
    setTimeout(() => {
      setDone(false);
      setForm({ name: "", phone: "", email: "", reason: "", date: "", notes: "" });
    }, 300);
  };

  return (
    <Dialog open={open} onOpenChange={(v) => (!v ? close() : onOpenChange(v))}>
      <DialogContent data-testid="booking-dialog" className="sm:max-w-[520px] rounded-3xl p-0 overflow-hidden border-slate-200">
        {done ? (
          <div className="p-8 md:p-10 text-center">
            <div className="w-14 h-14 rounded-full bg-[#E6F8F3] text-[#10B981] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="mt-5 font-display text-2xl text-[#0A192F]">You&apos;re in — we&apos;ll be in touch.</h3>
            <p className="mt-3 text-[#64748B] text-[15px] leading-relaxed">
              A team member from Hawthorne Village Dental Care will call you within one business hour to
              confirm your appointment time. If urgent, please call <a href="tel:+19058643368" className="text-[#2563EB] underline">(905) 864-3368</a>.
            </p>
            <Button
              data-testid="booking-close-btn"
              onClick={close}
              className="mt-6 h-11 rounded-full bg-[#0A192F] hover:bg-[#111c36] text-white px-6"
            >
              Close
            </Button>
          </div>
        ) : (
          <>
            <div className="bg-[#F8FAFC] p-6 md:p-8 border-b border-slate-100">
              <DialogHeader>
                <DialogTitle className="font-display text-2xl text-[#0A192F] text-left">Book your appointment</DialogTitle>
                <DialogDescription className="text-[14px] text-[#64748B] text-left">
                  Share a few details — we&apos;ll call to confirm within one business hour. No obligation.
                </DialogDescription>
              </DialogHeader>
            </div>

            <form onSubmit={onSubmit} className="p-6 md:p-8 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="bk-name" className="text-[13px] text-[#334155]">Full name *</Label>
                  <Input id="bk-name" data-testid="booking-name" required value={form.name} onChange={update("name")} className="mt-1.5 h-11 rounded-xl" />
                </div>
                <div>
                  <Label htmlFor="bk-phone" className="text-[13px] text-[#334155]">Phone *</Label>
                  <Input id="bk-phone" type="tel" data-testid="booking-phone" required value={form.phone} onChange={update("phone")} className="mt-1.5 h-11 rounded-xl" />
                </div>
              </div>

              <div>
                <Label htmlFor="bk-email" className="text-[13px] text-[#334155]">Email</Label>
                <Input id="bk-email" type="email" data-testid="booking-email" value={form.email} onChange={update("email")} className="mt-1.5 h-11 rounded-xl" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label className="text-[13px] text-[#334155]">Reason for visit</Label>
                  <Select value={form.reason} onValueChange={update("reason")}>
                    <SelectTrigger data-testid="booking-reason" className="mt-1.5 h-11 rounded-xl">
                      <SelectValue placeholder="Choose one" />
                    </SelectTrigger>
                    <SelectContent>
                      {reasons.map((r) => (
                        <SelectItem key={r} value={r} data-testid={`booking-reason-${r.split(" ")[0].toLowerCase()}`}>
                          {r}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="bk-date" className="text-[13px] text-[#334155]">Preferred date</Label>
                  <div className="relative mt-1.5">
                    <Input id="bk-date" type="date" data-testid="booking-date" value={form.date} onChange={update("date")} className="h-11 rounded-xl pr-9" />
                    <CalendarIcon className="w-4 h-4 text-[#94A3B8] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                </div>
              </div>

              <div>
                <Label htmlFor="bk-notes" className="text-[13px] text-[#334155]">Anything we should know?</Label>
                <Textarea id="bk-notes" data-testid="booking-notes" rows={3} value={form.notes} onChange={update("notes")} className="mt-1.5 rounded-xl" />
              </div>

              <Button
                type="submit"
                data-testid="booking-submit"
                disabled={submitting}
                className="w-full h-12 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-medium shadow-[0_8px_24px_rgba(37,99,235,0.35)]"
              >
                {submitting ? "Sending…" : "Request appointment"}
              </Button>
              <p className="text-[12px] text-[#94A3B8] text-center">By submitting, you agree to be contacted about your appointment.</p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
