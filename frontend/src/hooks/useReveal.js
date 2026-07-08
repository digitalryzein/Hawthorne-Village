import { useEffect, useRef } from "react";

// Adds an "in" class when the element scrolls into view.
export function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          // Very tall elements can never reach the ratio threshold (their
          // visible fraction is capped by the viewport height), so for them
          // any intersection counts. Everything else waits for the threshold.
          const tall = el.offsetHeight > window.innerHeight * 1.5;
          if (e.isIntersecting && (tall || e.intersectionRatio >= threshold)) {
            el.classList.add("in");
            obs.unobserve(el);
          }
        });
      },
      { threshold: [0, threshold], rootMargin: "0px 0px -60px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return ref;
}
