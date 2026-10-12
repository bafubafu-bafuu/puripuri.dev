"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "hobbies", label: "Hobbies" },
  { id: "contact", label: "Contact" },
] as const;

type SectionId = (typeof sections)[number]["id"];

export default function SiteNavigation() {
  const [activeSection, setActiveSection] = useState<SectionId>("about");

  useEffect(() => {
    let animationFrame: number | null = null;

    const updateActiveSection = () => {
      animationFrame = null;
      const headerBottom = document.querySelector(".site-header")?.getBoundingClientRect().bottom ?? 64;
      const firstSection = document.querySelector<HTMLElement>(".section");
      const scrollMarginTop = firstSection
        ? Number.parseFloat(window.getComputedStyle(firstSection).scrollMarginTop)
        : 0;
      const activationLine = Math.max(
        headerBottom + 32,
        scrollMarginTop + 24,
        headerBottom + (window.innerHeight - headerBottom) * 0.3,
      );
      let currentSection: SectionId = "about";

      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
        currentSection = "contact";
      } else {
        for (const section of sections) {
          const element = document.getElementById(section.id);
          if (element && element.getBoundingClientRect().top <= activationLine) {
            currentSection = section.id;
          }
        }
      }

      setActiveSection(currentSection);

      if (window.location.hash !== `#${currentSection}`) {
        window.history.replaceState(
          window.history.state,
          "",
          `${window.location.pathname}${window.location.search}#${currentSection}`,
        );
      }
    };

    const scheduleUpdate = () => {
      if (animationFrame === null) {
        animationFrame = window.requestAnimationFrame(updateActiveSection);
      }
    };

    updateActiveSection();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      if (animationFrame !== null) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <nav aria-label="メインナビゲーション">
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className={activeSection === section.id ? "is-active" : undefined}
          aria-current={activeSection === section.id ? "location" : undefined}
        >
          {section.label}
        </a>
      ))}
    </nav>
  );
}
