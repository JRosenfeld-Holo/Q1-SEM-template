"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function StickyBar() {
  const [visible, setVisible] = useState(false);
  const ctaRef = useRef<Element | null>(null);

  useEffect(() => {
    ctaRef.current = document.getElementById("cta");

    const handleScroll = () => {
      const scrolled = window.scrollY > window.innerHeight * 0.8;
      setVisible(scrolled);
    };

    const ctaObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(false);
        else if (window.scrollY > window.innerHeight * 0.8) setVisible(true);
      },
      { threshold: 0.2 }
    );

    window.addEventListener("scroll", handleScroll, { passive: true });
    if (ctaRef.current) ctaObserver.observe(ctaRef.current);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      ctaObserver.disconnect();
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/[0.06] bg-brand-deep/90 backdrop-blur-md"
        >
          <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between gap-4">
            <p
              className="text-sm text-white/80 hidden sm:block"
              style={{ fontFamily: "var(--font-inter-var)" }}
            >
              Stop losing revenue to connectivity downtime.
            </p>
            <a
              href="https://dashboard.hologram.io/account/register"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-brand-lime text-black font-semibold text-sm cursor-pointer hover:shadow-lime-glow transition-all duration-300 shrink-0"
              style={{ fontFamily: "var(--font-inter-var)" }}
            >
              Sign up free →
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
