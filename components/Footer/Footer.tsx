import Image from "next/image";
import "./footer.css";

const columns = [
  ["Featured Courses", "Featured Categories", "Business", "IT", "Design"],
  ["Development", "Marketing", "Photography", "Finance", "Sport"],
  ["Become a Creator", "Affiliate Program", "Contact", "Help", "About"],
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Left: logo + newsletter */}
        <div className="footer-left">
          <Image
            className="footer-logo"
            src="/images/footer_logo.png"
            alt="ByteSpace"
            width={160}
            height={36}
          />

          <p className="footer-tagline">
            Stay Up to date with our latest features and releases by joining
            our newsletter.
          </p>

          <div className="footer-newsletter">
            <input type="email" placeholder="Enter your email" />
            <button type="button">Search</button>
          </div>

          <p className="footer-disclaimer">
            By subscribing, you agree to our Privacy Policy and consent to
            receive updates from our company.
          </p>
        </div>

        {/* Right: 3 link columns */}
        <div className="footer-links">
          {columns.map((col, i) => (
            <ul key={i}>
              {col.map((item) => (
                <li key={item}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <span className="footer-copy">© 2023 ByteSpace. All rights reserved.</span>

        <div className="footer-legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookies Settings</a>
        </div>
      </div>
    </footer>
  );
}