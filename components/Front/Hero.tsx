import Navbar from "./Navbar";
import Image from "next/image";
import HeroCards from "@/components/HeroCards/HeroCards";

export default function LandingHero() {
  return (
    <>
      <section className="hero">
        {/* Navbar renders its own <nav>, so no wrapper here */}
        <Navbar />

        {/* 3D Ornament - FRONT */}
        <div className="hero-background">
          <Image
            src="/images/3d ornament.png"
            alt=""
            width={1920}
            height={500}
            priority
          />
        </div>

        <div className="hero-content">
          <h1>
            Get Access To Hundreds
            <br />
            Courses Available
          </h1>

          <p>
            Unlock your creativity, gain valuable knowledge, and grow your
            business with our wide range of courses.
          </p>

          <div className="search-container">
            <div className="search-input">
              <svg
                className="search-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>

              <input type="text" placeholder="Course, topic, creator" />
            </div>

            <button type="button">Search</button>
          </div>

          {/* Ellipse + Middle Background */}
          <div className="after-search-image">
            {/* BACK: Ellipse */}
            <Image
              src="/images/Ellipse 7.png"
              alt=""
              width={1100}
              height={1050}
            />

            {/* MIDDLE: First Middle Background */}
            <div className="first-middle-background">
              <Image
                src="/images/first_middle_background.png"
                alt=""
                width={1100}
                height={500}
              />

              {/* FRONT: Group */}
              <div className="group-image">
                
                <HeroCards />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsor Section AFTER the entire hero */}
      <div className="hero-bottom-bar">
        <div className="sponsor-row">
          {["one", "two", "three", "four", "five"].map((n, i) => (
            <div className="sponsor-logo" key={n}>
              <Image
                src={`/images/sponsor_${n}.png`}
                alt={`Sponsor ${i + 1}`}
                width={180}
                height={70}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}