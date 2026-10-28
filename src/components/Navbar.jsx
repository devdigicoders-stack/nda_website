'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShieldCheck, Menu, X, PhoneCall, ArrowRight, Compass } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu whenever user navigates to a new page
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Close on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Courses', href: '/courses' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Notices', href: '/notices' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <header className={`site-navbar ${mobileMenuOpen ? 'menu-open' : ''}`}>
      <div className="container navbar-container">
        {/* Brand */}
        <Link href="/" className="navbar-brand">
          <img
            src="/assets/logos/image-removebg-preview (1).png"
            alt="Shaurya NDA & SSB Academy"
            className="navbar-brand-logo"
          />
        </Link>

        {/* Desktop Navigation (Hidden on Tablet/Mobile) */}
        <ul className="nav-links desktop-nav">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`nav-link ${isActive ? 'active' : ''}`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Action Controls */}
        <div className="navbar-actions">
          {/* Quick Enquire button */}
          <Link
            href="/enquiry"
            className="btn btn-primary navbar-enquire-btn"
          >
            <span>Enquire Now</span>
          </Link>

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            className="mobile-toggle"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Backdrop Overlay */}
      {mobileMenuOpen && (
        <div
          className="mobile-menu-backdrop"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <nav className="mobile-drawer" aria-label="Mobile Navigation">
          {/* Call helpline bar */}
          <div className="mobile-drawer-helpline">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div className="mobile-helpline-icon">
                <PhoneCall size={16} />
              </div>
              <div>
                <div style={{ fontSize: '11px', color: '#64748b', fontWeight: '600', textTransform: 'uppercase' }}>
                  Admissions Helpline
                </div>
                <a href="tel:+919464256374" style={{ fontSize: '14px', fontWeight: '800', color: '#0f172a', textDecoration: 'none' }}>
                  +91 9464256374
                </a>
              </div>
            </div>
            <span style={{ fontSize: '10px', backgroundColor: '#dcfce7', color: '#15803d', fontWeight: '700', padding: '3px 8px', borderRadius: '12px' }}>
              Available
            </span>
          </div>

          {/* Nav Links list */}
          <div className="mobile-drawer-links">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`mobile-drawer-link ${isActive ? 'active' : ''}`}
                >
                  <span>{link.name}</span>
                  <ArrowRight size={16} className="mobile-link-arrow" />
                </Link>
              );
            })}
          </div>

          {/* Mobile Drawer Actions */}
          <div className="mobile-drawer-footer">
            <Link
              href="/enquiry"
              onClick={() => setMobileMenuOpen(false)}
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center', padding: '12px 20px', borderRadius: '8px' }}
            >
              <span>Book Free Counseling / Seat</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

