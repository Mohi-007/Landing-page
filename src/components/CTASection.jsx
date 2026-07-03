import React, { useState } from 'react';

export default function CTASection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  };

  return (
    <section id="reserve" className="cta-section">
      <div className="cta-stripe" aria-hidden="true" />
      <div className="container cta-inner">
        <span className="eyebrow eyebrow-mono">// Reserve</span>
        <h2>Be first in line for the 15R.</h2>
        <p>Reservations open at 6PM IST. Early monsters get launch-day priority shipping.</p>

        {submitted ? (
          <p className="cta-success">You're on the list — check {email} for confirmation.</p>
        ) : (
          <form className="cta-form" onSubmit={handleSubmit}>
            <input
              type="email"
              required
              placeholder="you@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Email address"
            />
            <button type="submit" className="btn btn-primary">
              Notify Me
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
