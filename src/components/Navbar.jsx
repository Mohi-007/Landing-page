import React, { useEffect, useState } from 'react';

const LINKS = [
  { href: '#overview', label: 'Overview' },
  { href: '#specs', label: 'Performance' },
  { href: '#design', label: 'Design' },
  { href: '#gallery', label: 'Gallery' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="navbar-inner">
        <a href="#overview" className="brand" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark">iQOO</span>
          <span className="brand-badge">15R</span>
        </a>

        <nav className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#reserve" className="btn btn-primary nav-cta" onClick={() => setMenuOpen(false)}>
            Reserve Now
          </a>
        </nav>

        <button
          className={`nav-toggle ${menuOpen ? 'is-open' : ''}`}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
