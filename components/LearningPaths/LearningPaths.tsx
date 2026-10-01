import "./learning-paths.css";

const PATHS = [
  { name: "Design", icon: "/images/Design.png" },
  { name: "Development", icon: "/images/Development.png" },
  { name: "IT & Software", icon: "/images/Soft.png" },
  { name: "Business", icon: "/images/Business.png" },
  { name: "Marketing", icon: "/images/Marketing.png" },
  { name: "Photography", icon: "/images/Photography.png" },
];

export default function LearningPaths() {
  return (
    <section className="paths">
      <h2 className="paths-title">Explore Diverse Learning Paths at Bytespace</h2>
      <p className="paths-subtitle">
        At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of
        courses spans various fields, ensuring there&apos;s something for everyone. Unleash your
        potential and explore our carefully curated categories.
      </p>

      <div className="paths-grid">
        {PATHS.map((p) => (
          <div className="path-card" key={p.name}>
            <span className="path-icon">
              <img src={p.icon} alt="" />
            </span>
            <span className="path-name">{p.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}