import "./testimonials.css";

type TestimonialData = {
  id: number;
  name: string;
  role: string;
  quote: string;
  avatar: string;
};

const ITEMS: TestimonialData[] = [
  {
    id: 1,
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: "/images/sarah.png",
    quote:
      "\"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.\"",
  },
  {
    id: 2,
    name: "James L.",
    role: "Lifelong Learner",
    avatar: "/images/james.png",
    quote:
      "\"I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.\"",
  },
  {
    id: 3,
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: "/images/alex.png",
    quote:
      "\"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.\"",
  },
];

export default function Testimonials() {
  return (
    <section className="testi">
      {/* top box row: title left, text right */}
      <div className="testi-top">
        <h2 className="testi-title">
          Discover What Our
          <br />
          Community Is Saying
        </h2>
        <p className="testi-desc">
          At ByteSpace, our vibrant community of learners and creators is at the heart of what we
          do. Hear directly from those who have experienced the transformative journey of learning
          and creating on our platform. Explore testimonials that reflect the diverse perspectives
          of enthusiastic learners and accomplished creators.
        </p>
      </div>

      {/* card row */}
      <div className="testi-cards">
        {ITEMS.map((t) => (
          <article className="testi-card" key={t.id}>
            <img className="testi-avatar" src={t.avatar} alt={t.name} />
            <h3 className="testi-name">{t.name}</h3>
            <p className="testi-role">{t.role}</p>
            <p className="testi-quote">{t.quote}</p>
          </article>
        ))}
      </div>
    </section>
  );
}