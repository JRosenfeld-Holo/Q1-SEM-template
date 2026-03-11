"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useI18n } from "@/lib/i18n/context";

export function StickyBar() {
  const [visible, setVisible] = useState(false);
  const ctaRef = useRef<Element | null>(null);
  const { t } = useI18n();

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
          className="fixed bottom-0 left-0 right-0 z-40 backdrop-blur-md"
          style={{
            borderTopWidth: "1px",
            borderTopStyle: "solid",
            borderTopColor: "var(--theme-border-subtle)",
            backgroundColor: "var(--theme-nav-bg)",
          }}
        >
          <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between gap-4">
            <p
              className="text-sm hidden sm:block"
              style={{ fontFamily: "var(--font-inter-var)", color: "var(--theme-text-secondary)" }}
            >
              {t.sticky.text}
            </p>
            <a
              href="#free-pilot"
              className="ml-auto inline-flex items-center justify-center px-6 py-2.5 rounded-[10px] font-medium text-sm cursor-pointer transition-all duration-200 shrink-0"
              style={{
                fontFamily: "var(--font-inter-var)",
                backgroundColor: "var(--theme-cta-bg)",
                color: "var(--theme-cta-text)",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "var(--theme-cta-hover)"; e.currentTarget.style.transform = "translateY(-1px)"; e.currentTarget.style.boxShadow = "var(--shadow-lime-glow)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "var(--theme-cta-bg)"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
            >
              {t.sticky.cta}
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
