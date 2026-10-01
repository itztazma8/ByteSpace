import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link href="/" className="logo">
        <Image
          src="/images/Header_Logo.png"
          alt="ByteSpace"
          width={200}
          height={50}
        />
      </Link>

      <div className="nav-links">
        <Link href="/">Home</Link>
        <a href="#">Courses</a>
        <a href="#">Creators</a>
      </div>

      <div className="nav-actions">
        <Link href="/login">Login</Link>
        <Link href="/register">Join Us</Link>
        <a href="#" className="nav-shop">
          <Image src="/images/shop.png" alt="Shop" width={25} height={25} />
        </a>
      </div>
    </nav>
  );
}