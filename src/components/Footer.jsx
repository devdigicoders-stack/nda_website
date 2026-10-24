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
                  alt="Shaurya NDA & SSB Academy"
                  style={{ height: '52px', width: 'auto', objectFit: 'contain', display: 'block' }}
                />
              </div>
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#fff' }}>SHAURYA DEFENCE</h3>
                <span style={{ fontSize: '11px', color: '#eab308', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: '700' }}>
                  NDA &amp; SSB Academy
                </span>
              </div>
            </div>
            <p style={{ fontSize: '14px', color: '#94a3b8', lineHeight: '1.6', marginBottom: '20px' }}>
              India's premier defence preparatory institution mentored by retired Brigadiers, Colonels, and GTO Assessors. Producing top-ranking officers for NDA, IMA, OTA, INA, and AFA.
            </p>
            <div style={{ fontSize: '13px', color: '#109CD9', fontWeight: '600' }}>
              🇮🇳 "Veer Bhogya Vasundhara" &bull; Service Before Self
            </div>
          </div>

          {/* Training Programs */}
          <div>
            <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#fff', marginBottom: '18px' }}>
              Training Wings
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px', color: '#94a3b8' }}>
              <li><Link href="/courses" style={{ color: '#cbd5e1' }}>NDA Written Super-50</Link></li>
              <li><Link href="/ssb-training" style={{ color: '#cbd5e1' }}>SSB 14-Days Intensive Bootcamp</Link></li>
              <li><Link href="/courses" style={{ color: '#cbd5e1' }}>NDA Foundation 2-Year Batch</Link></li>
              <li><Link href="/courses" style={{ color: '#cbd5e1' }}>CDS &amp; AFCAT Written + SSB</Link></li>
              <li><Link href="/gallery" style={{ color: '#cbd5e1' }}>GTO Obstacle Ground Training</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#fff', marginBottom: '18px' }}>
              Cadet Portal
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px', color: '#94a3b8' }}>
              <li><Link href="/about" style={{ color: '#cbd5e1' }}>Our Officers &amp; Mentors</Link></li>
              <li><Link href="/notices" style={{ color: '#cbd5e1' }}>Exam Alerts &amp; Results</Link></li>
              <li><Link href="/blogs" style={{ color: '#cbd5e1' }}>SSB Preparation Strategy</Link></li>
              <li><Link href="/gallery" style={{ color: '#cbd5e1' }}>Academy Ground Gallery</Link></li>
              <li><Link href="/contact" style={{ color: '#cbd5e1' }}>Hostel &amp; Campus Tour</Link></li>
              <li><Link href="/enquiry" style={{ color: '#facc15', fontWeight: '700' }}>Admission &amp; Counseling Form</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#fff', marginBottom: '18px' }}>
              Academy Headquarters
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px', color: '#cbd5e1' }}>
              <div style={{ display: 'flex', gap: '10px' }}>
                <MapPin size={16} color="#eab308" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span>Shaurya Defence Academy Campus, Military Ground Road, Near Cantt Area, New Delhi - 110010</span>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Phone size={16} color="#eab308" style={{ flexShrink: 0 }} />
                <span>+91 9464256374</span>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Mail size={16} color="#eab308" style={{ flexShrink: 0 }} />
                <span>astraforssb@gmail.com</span>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Clock size={16} color="#eab308" style={{ flexShrink: 0 }} />
                <span>Ground Routine: 06:00 AM - 08:00 PM</span>
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
            &copy; {new Date().getFullYear()} Shaurya NDA &amp; SSB Academy. All Rights Reserved.
          </div>
          <div>
            Committed to Officer Cadre Leadership in the Indian Armed Forces.
          </div>
        </div>
      </div>
    </footer>
  );
}
