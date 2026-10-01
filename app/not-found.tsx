import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Front/Navbar";
import Footer from "@/components/Footer/Footer";
import "./not-found.css";

export default function NotFound() {
  return (
    <>
      {/* Blue area: navbar + 404 content share the background */}
      <section className="nf">
        <Navbar />

        <div className="nf-body">
          {/* big 404 image sits behind the text */}
          <Image
            className="nf-four"
            src="/images/four.png"
            alt=""
            width={620}
            height={300}
            priority
          />

          <h1 className="nf-title">
            The page you are looking
            <br />
            for doesn&apos;t exist
          </h1>
          <p className="nf-desc">
            Try to use a correct url or go back to homepage to start again
          </p>
          <Link href="/" className="nf-button">
            Back to Home
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}