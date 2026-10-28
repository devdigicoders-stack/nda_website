'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  Award,
  Target,
  Calendar,
  Users,
  CheckCircle,
  ArrowRight,
  Clock,
  Sparkles,
  GraduationCap,
  TrendingUp,
  Building,
  HeartHandshake,
  X,
  Star,
  MapPin,
  Send,
  Laptop,
  Check
} from 'lucide-react';
import { fetchCourses, fetchGallery, fetchBlogs, fetchNotices } from '../lib/api';
import VideoSection from '../components/VideoSection';

export default function HomePage() {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [activeCourseTab, setActiveCourseTab] = useState('offline');

  useEffect(() => {
    fetchCourses().then(setCourses).catch(() => { });
  }, []);

  // Exact 3 Core Courses as requested with thumbnails
  const coreCourses = [
    {
      id: 'offline',
      title: 'Offline Mode SSB (10-Day Intensive)',
      subtitle: '10-Day Intensive SSB Preparation Programme on Real Ground',
      duration: '10 Days Intensive',
      mode: 'Offline Classroom & Ground',
      location: 'Krishna Nagar, Lucknow',
      badge: 'High Recommended Rate',
      image: courses.find(c => (c.category || '').toLowerCase().includes('offline'))?.image || 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
      points: [
        'PPDT & Stage I Preparation – Story writing, narration, and many live group discussion practices.',
        'PIQ Analysis – Personalised interview questions based on your profile, background, and experiences.',
        'Mock Interviews – Realistic one-to-one interview sessions with expert feedback.',
        'Psychology Tests – Practice for TAT, WAT, SRT and SDT.',
        'GTO Guidance – Practice of GD, GPE, Lecturette and live practical GTO tasks on ground.',
        'Defence Awareness – Updates on current affairs, military affairs and national issues.',
        'Performance Analysis – Detailed feedback to identify your strengths and areas for improvement.',
        'Personal Mentorship – Individual guidance, doubt-solving and progress tracking throughout the programme.'
      ],
      slogan: 'BE WITH US MIRACLES WILL HAPPEN.'
    },
    {
      id: 'online',
      title: 'Online Mode SSB (20-Day Programme)',
      subtitle: '20-Day Intensive SSB Preparation Online Interactive Programme',
      duration: '20 Days Online Interactive',
      mode: 'Live Online Interactive',
      location: 'Live Virtual Classrooms',
      badge: 'Flexible & Comprehensive',
      image: courses.find(c => (c.category || '').toLowerCase().includes('online'))?.image || 'https://images.unsplash.com/photo-1579208575657-c595a05383b7?auto=format&fit=crop&w=800&q=80',
      points: [
        'PPDT/STAGE I Preparation – Story writing, narration and group discussion practice.',
        'PIQ Analysis – Personalised interview questions based on your profile and experiences.',
        'Mock Interviews – Realistic one-to-one interview simulations with expert feedback.',
        'Psychology Tests – Practice for TAT, WAT, SRT and SDT.',
        'GTO Guidance – GD, GPE, Lecturette and GTO task strategies.',
        'Defence Awareness – Regular updates on current affairs, military affairs and national security.',
        'Performance Analysis – Detailed feedback to identify strengths and areas for improvement.',
        'Personal Mentorship – Individual guidance, doubt-solving and progress tracking.'
      ],
      slogan: 'BE WITH US MIRACLE WILL HAPPEN.'
    },
    {
      id: 'written',
      title: 'NDA & CDS Written Batch',
      subtitle: 'Comprehensive Mathematics, English & General Knowledge Programme',
      duration: 'Target Batches (NDA & CDS)',
      mode: 'Offline / Hybrid Classroom',
      location: 'Krishna Nagar, Lucknow',
      badge: 'Target 2026 Batch',
      image: courses.find(c => (c.category || '').toLowerCase().includes('written') || (c.category || '').toLowerCase().includes('nda'))?.image || 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80',
      points: [
        'Complete UPSC Syllabus – Exhaustive coverage of Mathematics & General Ability Test (GAT).',
        'Subject Specialists – Classes conducted by experienced faculty and defense mentors.',
        'Short-Cut Tricks – Daily practice MCQs and shortcut methods for Mathematics.',
        'Weekly Mock Tests – OMR-based full length mock tests on actual UPSC pattern.',
        'Current Affairs & GK – Daily defense current affairs, military geopolitics and history.',
        'SSB Orientation Included – Free Stage-1 Screening and personality development orientation.'
      ],
      slogan: 'BE WITH US MIRACLES WILL HAPPEN.'
    }
  ];

  return (
    <>
      {/* 1. Hero Section (Clean, Bold, Focused) */}
      <section className="hero-section" style={{ minHeight: '440px', padding: '80px 0 70px' }}>
        <div className="hero-bg-slide active">
          <img
            src="https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1879&h=818&q=80"
            alt="Academy background"
          />
        </div>

        <div className="container hero-content">
          <div style={{ maxWidth: '780px' }}>
            {/* Top Motto Banner (Replaced the Lucknow badge as requested) */}
            <div className="hero-top-motto">
              <span>BE WITH US MIRACLE WILL HAPPEN.</span>
            </div>

            <h1 className="hero-title">
              ASTRA SSB – <span>YOUR JOURNEY TO THE OFFICER’S LIFE</span> STARTS HERE!
            </h1>

            {/* Desktop Full Subtitle */}
            <p className="hero-subtitle hero-subtitle-desktop">
              At ASTRA SSB, we go beyond conventional mentoring to help you develop the confidence, leadership, decision making ability and officer like qualities required to excel in the SSB interview. Train under experienced DIPR qualified Ex-Assessors through a result oriented, intensive training programme designed for maximum learning in minimum time.
            </p>

            {/* Mobile View Short & Crisp Subtitle (Less text, full impact) */}
            <p className="hero-subtitle hero-subtitle-mobile">
              Master the SSB interview under DIPR qualified Ex-Assessors with live GTO obstacle ground and personalized 1-on-1 mentoring.
            </p>

            <div className="hero-cta-group">
              <Link
                href="/enquiry"
                className="btn btn-primary hero-btn"
              >
                <span>Join Next Batch</span>
                <ArrowRight size={16} />
              </Link>

              <a
                href="#courses-section"
                className="btn btn-outline-white hero-btn"
              >
                <span>View 3 Core Courses</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Three Quick Stats */}
      <div className="container">
        <div className="stats-strip">
          <div className="stat-strip-item">
            <div className="stat-strip-icon">
              <ShieldCheck size={24} />
            </div>
            <div className="stat-strip-info">
              <h3>DIPR Qualified</h3>
              <p>Ex-Assessors Mentorship</p>
            </div>
          </div>

          <div className="stat-strip-item">
            <div className="stat-strip-icon">
              <Target size={24} />
            </div>
            <div className="stat-strip-info">
              <h3>Scientific Ground</h3>
              <p>Authentic GTO Obstacles</p>
            </div>
          </div>

          <div className="stat-strip-item">
            <div className="stat-strip-icon">
              <Users size={24} />
            </div>
            <div className="stat-strip-info">
              <h3>Limited Batch</h3>
              <p>Personal 1-on-1 Guidance</p>
            </div>
          </div>

          <div className="stat-strip-item">
            <div className="stat-strip-icon">
              <MapPin size={24} />
            </div>
            <div className="stat-strip-info">
              <h3>Krishna Nagar</h3>
              <p>Lucknow, Uttar Pradesh</p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. CORE COURSES SECTION (Exact 3 items: Offline, Online, NDA & CDS Written) */}
      <section id="courses-section" className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="section-title-line">
            <span style={{ fontSize: '12px', fontWeight: '800', color: '#109cd9', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px' }}>
              PROGRAMMES &amp; TRAINING CAPSULES
            </span>
            <h2><strong>Our Three </strong>Core Courses</h2>
            <div className="line-divider"></div>
            <p style={{ maxWidth: '640px', color: '#64748b', fontSize: '15px' }}>
              Focused, result-oriented programmes designed for maximum learning in minimum time under DIPR qualified Ex-Assessors.
            </p>
          </div>

          {/* Three Courses Grid */}
          <div className="core-courses-grid">
            {coreCourses.map((c, i) => (
              <div
                key={c.id}
                style={{
                  background: '#ffffff',
                  border: i === 0 ? '2px solid #109cd9' : '1px solid #e2e8f0',
                  borderRadius: '16px',
                  padding: '30px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: i === 0 ? '0 12px 30px rgba(16, 156, 217, 0.12)' : '0 4px 14px rgba(0,0,0,0.03)',
                  position: 'relative',
                  transition: 'transform 0.25s ease'
                }}
              >
                {i === 0 && (
                  <div style={{
                    position: 'absolute',
                    top: '-12px',
                    right: '24px',
                    background: '#109cd9',
                    color: '#ffffff',
                    fontSize: '11px',
                    fontWeight: '800',
                    padding: '3px 12px',
                    borderRadius: '12px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em'
                  }}>
                    Most Popular
                  </div>
                )}

                <div>
                  {/* Course Thumbnail Image (Clean without overlay badges) */}
                  {c.image && (
                    <div style={{
                      position: 'relative',
                      height: '170px',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      marginBottom: '16px'
                    }}>
                      <img
                        src={c.image}
                        alt={c.title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover'
                        }}
                      />
                    </div>
                  )}

                  {/* Badges neatly placed below thumbnail */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '14px' }}>
                    <div style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      backgroundColor: '#e6f6fd',
                      color: '#109cd9',
                      fontSize: '11px',
                      fontWeight: '800',
                      textTransform: 'uppercase'
                    }}>
                      {c.mode}
                    </div>

                    {c.badge && (
                      <div style={{
                        display: 'inline-flex',
                        padding: '4px 10px',
                        borderRadius: '6px',
                        backgroundColor: '#fef3c7',
                        color: '#b45309',
                        fontSize: '11px',
                        fontWeight: '800',
                        textTransform: 'uppercase'
                      }}>
                        {c.badge}
                      </div>
                    )}
                  </div>

                  <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#0f172a', marginBottom: '8px', lineHeight: '1.3' }}>
                    {c.title}
                  </h3>

                  <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.5', marginBottom: '18px' }}>
                    {c.subtitle}
                  </p>

                  <div style={{
                    padding: '10px 14px',
                    backgroundColor: '#f8fafc',
                    borderRadius: '8px',
                    fontSize: '12px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '20px',
                    color: '#475569'
                  }}>
                    <span>Duration: <strong style={{ color: '#0f172a' }}>{c.duration}</strong></span>
                    <span>Location: <strong style={{ color: '#0f172a' }}>{c.location}</strong></span>
                  </div>

                  {/* Bullet points */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
                    {c.points.map((p, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px', color: '#334155', lineHeight: '1.5' }}>
                        <CheckCircle size={15} color="#109cd9" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{p}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div style={{
                    fontSize: '12px',
                    fontWeight: '800',
                    color: '#d97706',
                    textAlign: 'center',
                    marginBottom: '14px',
                    letterSpacing: '0.02em'
                  }}>
                    ★ {c.slogan}
                  </div>

                  <Link
                    href={`/enquiry?course=${encodeURIComponent(c.title)}`}
                    className="btn btn-primary"
                    style={{ width: '100%', justifyContent: 'center', padding: '11px 20px', fontSize: '14px' }}
                  >
                    <span>Register For This Course</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Autoplaying YouTube Video Training Section */}
      <VideoSection
        badge="OUR GUIDANCE"
        title="Inside Our Classroom"
        subtitle="Watch our live classroom lectures, screening psychology, and guidance from DIPR qualified assessors."
      />

      {/* 4. Section: "STILL CONFUSED? JOIN US. WE ARE THE SOLUTION" */}
      <section className="section-padding" style={{ backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
        <div className="container" style={{ maxWidth: '960px', textAlign: 'center' }}>
          <span style={{ fontSize: '13px', fontWeight: '800', color: '#d97706', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            BE WITH US MIRACLE WILL HAPPEN
          </span>
          <h2 style={{ fontSize: '32px', fontWeight: '900', color: '#0f172a', margin: '12px 0 16px', lineHeight: '1.25' }}>
            Still Confused? Join Us. <strong style={{ color: '#109cd9' }}>We Are The Solution.</strong>
          </h2>
          <p style={{ fontSize: '16px', color: '#475569', lineHeight: '1.7', marginBottom: '32px' }}>
            Experience realistic GTO tasks on our scientifically designed GTO ground, receive personalized guidance and master every stage of the SSB selection process in a focused, limited batch environment. With affordable training programmes and budget friendly accommodation for outstation candidates, ASTRA SSB brings professional guidance within your reach.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '20px',
            textAlign: 'left',
            marginBottom: '36px'
          }}>
            <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '22px' }}>
              <div style={{ fontSize: '20px', fontWeight: '800', color: '#109cd9', marginBottom: '6px' }}>
                10-Day Offline SSB
              </div>
              <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.5' }}>
                Stage I, live group discussions, psychological tests, mock interviews &amp; physical ground obstacles in Lucknow.
              </p>
            </div>

            <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '22px' }}>
              <div style={{ fontSize: '20px', fontWeight: '800', color: '#109cd9', marginBottom: '6px' }}>
                20-Day Online SSB
              </div>
              <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.5' }}>
                Complete live online preparation with PIQ analysis, 1-on-1 mock interviews, psych dossier audit &amp; mentorship.
              </p>
            </div>

            <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '22px' }}>
              <div style={{ fontSize: '20px', fontWeight: '800', color: '#109cd9', marginBottom: '6px' }}>
                NDA &amp; CDS Written
              </div>
              <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.5' }}>
                Master Mathematics &amp; GAT with shortcut tricks, chapter-wise test series, and dedicated defense faculties.
              </p>
            </div>
          </div>

          <Link href="/enquiry" className="btn btn-primary" style={{ padding: '12px 32px', fontSize: '15px' }}>
            <span>Connect with Admissions Team</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* 5. Address & Social Channels Bar (Krishna Nagar, Lucknow + Telegram + YouTube + Instagram) */}
      <section style={{ backgroundColor: '#ffffff', borderTop: '1px solid #e2e8f0', padding: '45px 0' }}>
        <div className="container">
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '24px'
          }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#109cd9', fontWeight: '800', fontSize: '13px', textTransform: 'uppercase', marginBottom: '4px' }}>
                <MapPin size={16} />
                <span>Our Location</span>
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#0f172a' }}>
                Krishna Nagar, Lucknow, Uttar Pradesh
              </h3>
              <p style={{ fontSize: '13px', color: '#64748b', marginTop: '2px' }}>
                Helpline: +91 9464256374 &bull; astraforssb@gmail.com
              </p>
            </div>

            {/* Social channels with Authentic White Badge Logos */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
              {/* Telegram Button */}
              <a
                href="https://t.me/astrassb"
                target="_blank"
                rel="noreferrer"
                title="Geopolitics & CA Telegram"
                className="hero-social-link"
                style={{
                  backgroundColor: '#0088cc',
                  boxShadow: '0 4px 14px rgba(0, 136, 204, 0.28)'
                }}
              >
                <div className="social-badge-icon" style={{ color: '#0088cc' }}>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                  </svg>
                </div>
                <span className="social-text">Geopolitics &amp; CA Telegram</span>
              </a>

              {/* YouTube Button */}
              <a
                href="https://youtube.com/@astratraining?si=RZnPaUUevZ-BOd5F"
                target="_blank"
                rel="noreferrer"
                title="YouTube Channel"
                className="hero-social-link"
                style={{
                  backgroundColor: '#ff0000',
                  boxShadow: '0 4px 14px rgba(255, 0, 0, 0.28)'
                }}
              >
                <div className="social-badge-icon" style={{ color: '#ff0000' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </div>
                <span className="social-text">YouTube Channel</span>
              </a>

              {/* Instagram Button */}
              <a
                href="https://www.instagram.com/trainingwithastra?utm_source=qr&stkn=MXFlaXBpOWUzbDNleg=="
                target="_blank"
                rel="noreferrer"
                title="Instagram Profile"
                className="hero-social-link"
                style={{
                  background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
                  boxShadow: '0 4px 14px rgba(220, 39, 67, 0.32)'
                }}
              >
                <div className="social-badge-icon" style={{ color: '#e1306c' }}>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </div>
                <span className="social-text">Instagram Profile</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Call to Action Banner */}
      <section style={{ backgroundColor: '#109CD9', color: '#ffffff', padding: '50px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '30px', fontWeight: '800', color: '#ffffff', marginBottom: '10px' }}>
            BE WITH US MIRACLES WILL HAPPEN.
          </h2>
          <p style={{ fontSize: '15px', color: '#dcfce7', maxWidth: '640px', margin: '0 auto 22px auto', lineHeight: '1.6' }}>
            Offline Mode SSB &bull; Online Mode SSB &bull; NDA &amp; CDS Written. Secure your seat in the upcoming batch today.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              href="/enquiry"
              className="btn btn-gold"
              style={{ padding: '12px 28px', fontSize: '15px' }}
            >
              <span>Enquire / Register Now</span>
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="btn btn-outline-white"
              style={{ padding: '12px 28px', fontSize: '15px' }}
            >
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
