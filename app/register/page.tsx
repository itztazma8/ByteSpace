"use client";

import Link from "next/link";
import "./register.css";

export default function RegisterPage() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: connect to your sign-up logic later
  }

  return (
    <main className="reg">
      {/* Logo */}
      <Link href="/" className="reg-logo">
        <img src="/images/Vector.png" alt="ByteSpace" />
      </Link>

      <div className="reg-body">
        {/* Left box: text + image */}
        <div className="reg-left">
          <h2 className="reg-left-title">Sign up and come in</h2>
          <p className="reg-left-desc">
            The registration process is straightforward, uncomplicated, and efficient, allowing
            users to sign up quickly, easily, and at no cost
          </p>
          <img className="reg-left-img" src="/images/register.png" alt="ByteSpace courses preview" />
        </div>

        {/* Right box: form card */}
        <div className="reg-right">
          <form className="reg-card" onSubmit={handleSubmit}>
            <span className="reg-eyebrow">Create an Account</span>
            <h1 className="reg-heading">
              Welcome to
              <br />
              ByteSpace
            </h1>

            <label className="reg-field">
              <span>Full Name</span>
              <input type="text" placeholder="Jamie Davis" required />
            </label>

            <label className="reg-field">
              <span>Email</span>
              <input type="email" placeholder="designer@example.com" required />
            </label>

            <label className="reg-field">
              <span>Password</span>
              <input type="password" placeholder="********" required />
            </label>

            <div className="reg-actions">
              <button type="submit" className="reg-button">Continue</button>
            </div>

            <p className="reg-login">
              Already have an account? <Link href="/login">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}