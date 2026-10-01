"use client";

import Link from "next/link";
import "./login.css";

export default function LoginPage() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: connect to your sign-in logic later
  }

  return (
    <main className="log">
      {/* Logo */}
      <Link href="/" className="log-logo">
        <img src="/images/Vector.png" alt="ByteSpace" />
      </Link>

      <div className="log-body">
        {/* Left box: text + image */}
        <div className="log-left">
          <h2 className="log-left-title">Sign in with ease</h2>
          <p className="log-left-desc">
            Experience a seamless and efficient sign-in process that grants you instant access to
            a world of knowledge.
          </p>
          <img className="log-left-img" src="/images/sign.png" alt="ByteSpace courses preview" />
        </div>

        {/* Right box: form card */}
        <div className="log-right">
          <form className="log-card" onSubmit={handleSubmit}>
            <span className="log-eyebrow">Sign In</span>
            <h1 className="log-heading">Welcome Back</h1>

            <label className="log-field">
              <span>Email</span>
              <input type="email" placeholder="designer@example.com" required />
            </label>

            <label className="log-field">
              <span>Password</span>
              <input type="password" placeholder="********" required />
            </label>

            <div className="log-actions">
              <button type="submit" className="log-button">Sign In</button>
            </div>

            {/* or divider */}
            <div className="log-divider">
              <span>or</span>
            </div>

            {/* social buttons */}
            <div className="log-social">
              <button type="button" className="log-social-btn" aria-label="Continue with Facebook">
                <img src="/images/fb.png" alt="" />
              </button>
              <button type="button" className="log-social-btn" aria-label="Continue with Google">
                <img src="/images/gmail.png" alt="" />
              </button>
            </div>

            <p className="log-new">
              New user? <Link href="/register">Create an account</Link>
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}