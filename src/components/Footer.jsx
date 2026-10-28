'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
              <div style={{
                background: '#ffffff',
                padding: '6px 12px',
                borderRadius: '10px',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 14px rgba(0,0,0,0.25)'
              }}>
                <img
                  src="/assets/logos/image-removebg-preview (1).png"
                  alt="ASTRA SSB Academy"
                  style={{ height: '52px', width: 'auto', objectFit: 'contain', display: 'block' }}
                />
              </div>
              <div>
                <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#fff', margin: 0 }}>ASTRA SSB</h3>
              </div>
            </div>
            <p style={{ fontSize: '14px', color: '#94a3b8', lineHeight: '1.6', marginBottom: '16px' }}>
              Your journey to the officer's life starts here! Train under experienced DIPR qualified Ex-Assessors through a result-oriented, intensive training programme.
            </p>
            <div style={{ fontSize: '13px', color: '#facc15', fontWeight: '700', marginBottom: '18px' }}>
              🇮🇳 BE WITH US MIRACLES WILL HAPPEN.
            </div>

            {/* Official Social Links (Circles with authentic logos) */}
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
              {/* Telegram Official Circle */}
              <a
                href="https://t.me/astrassb"
                target="_blank"
                rel="noreferrer"
                title="Join Geopolitics & CA on Telegram"
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  backgroundColor: '#229ED9',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  boxShadow: '0 4px 12px rgba(34, 158, 217, 0.35)',
                  transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px) scale(1.08)';
                  e.currentTarget.style.boxShadow = '0 8px 18px rgba(34, 158, 217, 0.55)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(34, 158, 217, 0.35)';
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                </svg>
              </a>

              {/* YouTube Official Circle */}
              <a
                href="https://youtube.com/@astratraining?si=RZnPaUUevZ-BOd5F"
                target="_blank"
                rel="noreferrer"
                title="Subscribe on YouTube"
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  backgroundColor: '#FF0000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  boxShadow: '0 4px 12px rgba(255, 0, 0, 0.35)',
                  transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px) scale(1.08)';
                  e.currentTarget.style.boxShadow = '0 8px 18px rgba(255, 0, 0, 0.55)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(255, 0, 0, 0.35)';
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              {/* Instagram Official Circle with Gradient */}
              <a
                href="https://www.instagram.com/trainingwithastra?utm_source=qr&stkn=MXFlaXBpOWUzbDNleg=="
                target="_blank"
                rel="noreferrer"
                title="Follow on Instagram"
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  boxShadow: '0 4px 12px rgba(214, 36, 159, 0.35)',
                  transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px) scale(1.08)';
                  e.currentTarget.style.boxShadow = '0 8px 18px rgba(214, 36, 159, 0.55)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(214, 36, 159, 0.35)';
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>

              {/* WhatsApp Official Circle */}
              <a
                href="https://wa.me/919464256374"
                target="_blank"
                rel="noreferrer"
                title="Chat on WhatsApp"
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  backgroundColor: '#25D366',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  boxShadow: '0 4px 12px rgba(37, 211, 102, 0.35)',
                  transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px) scale(1.08)';
                  e.currentTarget.style.boxShadow = '0 8px 18px rgba(37, 211, 102, 0.55)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(37, 211, 102, 0.35)';
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.41-1.75-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.43 1.03 2.6c.13.17 1.77 2.7 4.28 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.29z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Courses */}
          <div>
            <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#fff', marginBottom: '18px' }}>
              Our Courses
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px', color: '#94a3b8' }}>
              <li><Link href="/courses" style={{ color: '#cbd5e1' }}>Offline Mode SSB (10 Days)</Link></li>
              <li><Link href="/courses" style={{ color: '#cbd5e1' }}>Online Mode SSB (20 Days)</Link></li>
              <li><Link href="/courses" style={{ color: '#cbd5e1' }}>NDA &amp; CDS Written</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#fff', marginBottom: '18px' }}>
              Cadet Portal
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px', color: '#94a3b8' }}>
              <li><Link href="/about" style={{ color: '#cbd5e1' }}>About ASTRA SSB</Link></li>
              <li><Link href="/courses" style={{ color: '#cbd5e1' }}>All Courses</Link></li>
              <li><Link href="/gallery" style={{ color: '#cbd5e1' }}>Ground &amp; Training Gallery</Link></li>
              <li><Link href="/notices" style={{ color: '#cbd5e1' }}>Notices &amp; Batches</Link></li>
              <li><Link href="/contact" style={{ color: '#cbd5e1' }}>Contact &amp; Location</Link></li>
              <li><Link href="/enquiry" style={{ color: '#facc15', fontWeight: '700' }}>Register / Enquire Now</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#fff', marginBottom: '18px' }}>
              Headquarters &amp; Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px', color: '#cbd5e1' }}>
              <div style={{ display: 'flex', gap: '10px' }}>
                <MapPin size={16} color="#eab308" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span>Krishna Nagar, Lucknow, Uttar Pradesh</span>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Phone size={16} color="#eab308" style={{ flexShrink: 0 }} />
                <a href="tel:+919464256374" style={{ color: '#cbd5e1', textDecoration: 'none' }}>
                  +91 9464256374
                </a>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Mail size={16} color="#eab308" style={{ flexShrink: 0 }} />
                <a href="mailto:astraforssb@gmail.com" style={{ color: '#cbd5e1', textDecoration: 'none' }}>
                  astraforssb@gmail.com
                </a>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Clock size={16} color="#eab308" style={{ flexShrink: 0 }} />
                <span>Timing: 08:00 AM - 08:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid var(--border-line)',
          paddingTop: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
          fontSize: '13px',
          color: '#64748b'
        }}>
          <div>
            &copy; {new Date().getFullYear()} ASTRA SSB Academy. All Rights Reserved.
          </div>
          <div style={{ color: '#94a3b8' }}>
            BE WITH US MIRACLES WILL HAPPEN.
          </div>
        </div>
      </div>
    </footer>
  );
}
