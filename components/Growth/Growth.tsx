import "./growth.css";

const STATS = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

const POINTS = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

export default function Growth() {
  return (
    <section className="growth">
      {/* Row 1: text left, image right */}
      <div className="growth-row">
        <div className="growth-text">
          <h2 className="growth-title">
            Your Path to Professional
            <br />
            Growth Starts Here!
          </h2>
          <p className="growth-desc">
            Explore our curated selection of courses tailored to enhance your capabilities and
            accelerate your career journey. Whether you are looking to sharpen specific skills,
            gain industry expertise, or embark on a new career path entirely, we have the
            resources you need.
          </p>

          <div className="growth-stats">
            {STATS.map((s) => (
              <div className="growth-stat" key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="growth-image">
          <img src="/images/three_up.png" alt="Learner with course card" />
        </div>
      </div>

      {/* Row 2: image left, text right */}
      <div className="growth-row">
        <div className="growth-image">
          <img src="/images/three_down.png" alt="Creator managing courses" />
        </div>

        <div className="growth-text">
          <h2 className="growth-title">
            Create &amp; Manage
            <br />
            Courses Easily.
          </h2>
          <p className="growth-desc">
            <b>ByteSpace</b> supports individuals or entities in the creation, publication, and
            administration of educational courses.
          </p>

          <ul className="growth-list">
            {POINTS.map((p) => (
              <li key={p}>
                <span className="growth-check">✓</span>
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}