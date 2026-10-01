import Image from "next/image";
import "./hero-cards.css";

// how many pictures are in public/images/opening (user1.png, user2.png, ...)
const AVATAR_COUNT = 7;

const STUDENTS = Array.from({ length: AVATAR_COUNT }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  image: `/images/opening/user${i + 1}.png`,
}));

export default function HeroCards() {
  return (
    <div className="hc">
      {/* UI/UX card */}
      <div className="hc-card hc-uiux">
        <h4>UI/UX Design</h4>
        <p>200 Courses &nbsp;•&nbsp; 1000+ Students</p>
      </div>

      {/* Learning progress card */}
      <div className="hc-card hc-progress">
        <span className="hc-label">Learning Progress</span>
        <strong className="hc-percent">55%</strong>
        <Image className="hc-bar" src="/images/bar.png" alt="" width={400} height={20} />
      </div>

      {/* Happy students card */}
      <div className="hc-card hc-happy">
        <h4>Happy Students</h4>
        <p>
          4.5 <span className="hc-count">(240)</span> <span className="hc-star">★</span>
        </p>
        <div className="hc-avatars">
          {STUDENTS.map((s) => (
            <Image
              key={s.id}
              className="hc-avatar"
              src={s.image}
              alt={s.name}
              width={40}
              height={40}
            />
          ))}
          <span className="hc-avatar hc-avatar-count">2K+</span>
        </div>
      </div>
    </div>
  );
}