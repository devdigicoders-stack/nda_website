'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShieldCheck, Menu, X, PhoneCall } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Courses', href: '/courses' },
    { name: 'SSB 14 Days', href: '/ssb-training' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Notice', href: '/notices' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <header className="site-navbar">
      <div className="container navbar-container">
        {/* Brand */}
        <Link href="/" className="navbar-brand">
          <div className="brand-shield">
            <ShieldCheck size={26} color="#ffffff" />
          </div>
          <div className="brand-text">
            <h1>NDA SSB</h1>
            <span>Defence Academy</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="nav-links">
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

        {/* Action Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Link
            href="/enquiry"
            className="btn btn-primary btn-sm"
            style={{ borderRadius: '6px', padding: '8px 18px' }}
          >
            <span>Enquire Now</span>
          </Link>

          {/* Mobile toggle button */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'none',
              background: 'transparent',
              border: 'none',
              color: '#0f172a',
              cursor: 'pointer'
            }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{
          backgroundColor: '#ffffff',
          borderBottom: '1px solid var(--border-card)',
          padding: '20px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
        }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: '15px',
                fontWeight: '600',
                color: pathname === link.href ? '#164e24' : '#334155'
              }}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/enquiry"
            onClick={() => setMobileMenuOpen(false)}
            className="btn btn-primary"
            style={{ width: '100%', marginTop: '6px', textAlign: 'center' }}
          >
            Enquire Now
          </Link>
        </div>
      )}
    </header>
  );
}
