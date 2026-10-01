"use client";

import { useState } from "react";
import Image from "next/image";
import "./courses.css";

export type CourseData = {
  id: number; title: string; slug: string; image: string; lessons: number;
  durationMins: number; comments: number; rating: number; instructor: string;
  level: string; price: number; featured: boolean; studentCount: number;
  category: { name: string };
  students: { id: number; name: string; image: string }[];
};

const VISIBLE_CHIPS = 16; // "Featured" + 15 categories, rest behind "+ More"

const formatDuration = (mins: number) => {
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  return [h ? `${h} hour${h > 1 ? "s" : ""}` : "", m ? `${m} mins` : ""].filter(Boolean).join(" ");
};

export default function CoursesClient({ categories, courses }: { categories: string[]; courses: CourseData[] }) {
  const [active, setActive] = useState("Featured");
  const [expanded, setExpanded] = useState(false);

  const chips = ["Featured", ...categories];
  const shownChips = expanded ? chips : chips.slice(0, VISIBLE_CHIPS);
  const hasMore = chips.length > VISIBLE_CHIPS;

  const filtered = courses.filter((c) =>
    active === "Featured" ? c.featured : c.category.name === active
  );

  return (
    <section className="courses">
      <h2 className="courses-title">
        Discover Your Passion,<br />Build Your Skills
      </h2>
      <p className="courses-subtitle">
        At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of
        courses across different fields, from technology to the arts, and make a difference in your
        career and life.
      </p>

      <div className="course-chips">
        {shownChips.map((name) => (
          <button
            key={name}
            className={`chip ${active === name ? "chip-active" : ""}`}
            onClick={() => setActive(name)}
          >
            {name}
          </button>
        ))}
        {hasMore && (
          <button className="chip-more" onClick={() => setExpanded((v) => !v)}>
            {expanded ? "− Less" : "+ More"}
          </button>
        )}
      </div>

      {filtered.length === 0 ? (
        <p className="courses-empty">No courses in this category yet.</p>
      ) : (
        <div className="course-grid">
          {filtered.map((c) => (
            <article className="course-card" key={c.id}>
              <div className="course-thumb">
                <Image
                  src={c.image}
                  alt={c.title}
                  fill
                  sizes="(max-width: 650px) 100vw, (max-width: 1050px) 50vw, 380px"
                />
                <div className="course-meta">
                  <span>{c.lessons} Lessons</span>
                  <span>{formatDuration(c.durationMins)}</span>
                  <span>{c.comments} Comments</span>
                </div>
              </div>

              <div className="course-row">
                <h3 className="course-name">{c.title}</h3>
                <span className="course-rating">{c.rating} <i>★</i></span>
              </div>
              <p className="course-by">by {c.instructor}</p>

              <div className="course-row course-people">
                <span className="level-pill">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                    <rect x="1" y="7" width="2" height="4" /><rect x="5" y="4" width="2" height="7" /><rect x="9" y="1" width="2" height="10" />
                  </svg>
                  {c.level}
                </span>
                <div className="avatars">
                  {c.students.map((s) => (
                    <Image
                      key={s.id}
                      className="avatar"
                      src={s.image}
                      alt={s.name}
                      width={34}
                      height={34}
                    />
                  ))}
                  <span className="avatar avatar-count">{c.studentCount}+</span>
                </div>
              </div>

              <p className="course-price">
                <strong>${c.price}</strong><small>/lifetime</small>
              </p>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}