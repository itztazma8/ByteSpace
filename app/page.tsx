import LandingHero from "@/components/Front/Hero";
import Courses from "@/components/Courses/Courses";
import LearningPaths from "@/components/LearningPaths/LearningPaths";
import Growth from "@/components/Growth/Growth";
import CreatorCta from "@/components/CreatorCta/CreatorCta";
import Testimonials from "@/components/Testimonials/Testimonials";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <LandingHero />
      <Courses />
      <LearningPaths />
      <Growth />
      <CreatorCta />
      <Testimonials />
      <Footer />

      {/* Other landing-page sections will come later */}
    </main>
  );
}