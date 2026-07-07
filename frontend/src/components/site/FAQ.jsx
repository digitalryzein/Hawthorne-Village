import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/lib/site-data";
import { useReveal } from "@/hooks/useReveal";

export default function FAQ() {
  const ref = useReveal();
  return (
    <section id="faq" ref={ref} className="reveal py-24 md:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-6 md:px-8">
        <div className="mb-12 md:mb-16">
          <div className="text-[13px] uppercase tracking-[0.14em] text-[#0284C7] font-medium mb-3">FAQ</div>
          <h2 className="font-display text-3xl md:text-5xl text-[#0A192F] tracking-tight leading-[1.05]">
            Common questions, <span className="italic font-light text-[#64748B]">honestly answered.</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              data-testid={`faq-item-${i}`}
              className="border-b border-slate-200 last:border-b-0"
            >
              <AccordionTrigger className="text-left font-display text-[17px] md:text-lg font-medium text-[#0A192F] hover:no-underline py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-[15px] leading-relaxed text-[#475569] pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
