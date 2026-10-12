const skillGroups = [
  { category: "Frontend", skills: "TypeScript / Next.js / React" },
  { category: "Backend", skills: "Go / MySQL / Firebase" },
  { category: "Infrastructure", skills: "AWS / Cloudflare" },
  { category: "Tools", skills: "Figma" },
];

export default function SkillsSection() {
  return (
    <section className="section" id="skills" aria-labelledby="skills-title">
      <h2 className="section-title" id="skills-title">
        Skills
      </h2>
      <div className="section-content skill-list">
        {skillGroups.map((group) => (
          <div className="skill-group" key={group.category}>
            <span>{group.category}</span>
            <p>{group.skills}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
