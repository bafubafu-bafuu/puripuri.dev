"use client";

import { useEffect } from "react";

export default function SectionRevealObserver() {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -48px 0px", threshold: 0.08 },
    );

    document.querySelectorAll(".section").forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return null;
}
