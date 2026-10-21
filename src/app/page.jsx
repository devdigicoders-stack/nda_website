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
  Eye
} from 'lucide-react';
import { fetchCourses, fetchGallery, fetchBlogs, fetchNotices } from '../lib/api';

export default function HomePage() {
  const [courses, setCourses] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [notices, setNotices] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    fetchCourses().then(setCourses).catch(() => {});
    fetchGallery().then(setGallery).catch(() => {});
    fetchBlogs().then(setBlogs).catch(() => {});
    fetchNotices().then(setNotices).catch(() => {});
  }, []);

  return (
    <>
      {/* Hero Section: "Turn Your Dream Into a Uniform" */}
      <section className="hero-section">
        <div className="container">
          <div style={{ maxWidth: '640px' }}>
            <div className="badge-gold" style={{ marginBottom: '14px', background: 'rgba(217, 119, 6, 0.25)', color: '#fde047', borderColor: '#eab308' }}>
              <Sparkles size={13} />
              <span>PREMIER DEFENCE ACADEMY &bull; ADMISSIONS 2026</span>
            </div>

            <h1 className="hero-title">
              Turn Your Dream <br />
              <span>Into a Uniform</span>
            </h1>

            <p className="hero-subtitle">
              Expert Guidance for NDA Written Exam &amp; SSB 14 Days Training Program by Ex-SSB Assessors, Senior GTOs, and Chief Psychologists.
            </p>

            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <Link
                href="/enquiry"
                className="btn btn-primary"
                style={{ padding: '12px 28px', fontSize: '15px' }}
              >
                <span>Join Now</span>
                <ArrowRight size={16} />
              </Link>

              <Link
                href="/about"
                className="btn btn-outline-white"
                style={{ padding: '12px 28px', fontSize: '15px' }}
              >
                <span>Know More</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Statistics Strip (5000+ Students, 100+ Selections, etc.) */}
      <div className="container">
        <div className="stats-strip">
          <div className="stat-strip-item">
            <div className="stat-strip-icon">
              <GraduationCap size={24} />
            </div>
            <div className="stat-strip-info">
              <h3>5000+</h3>
              <p>Students Trained</p>
            </div>
          </div>

          <div className="stat-strip-item">
            <div className="stat-strip-icon">
              <Award size={24} />
            </div>
            <div className="stat-strip-info">
              <h3>1500+</h3>
              <p>Officers Recommended</p>
            </div>
          </div>

          <div className="stat-strip-item">
            <div className="stat-strip-icon">
              <Users size={24} />
            </div>
            <div className="stat-strip-info">
              <h3>15+</h3>
              <p>Expert Ex-Assessors</p>
            </div>
          </div>

          <div className="stat-strip-item">
            <div className="stat-strip-icon">
              <TrendingUp size={24} />
            </div>
            <div className="stat-strip-info">
              <h3>95%</h3>
              <p>Screening Success Rate</p>
            </div>
          </div>
        </div>
      </div>

      {/* Section: Our Courses (Latest 3 Courses) */}
      <section className="section-padding" style={{ backgroundColor: '#f8fafc' }}>
        <div className="container">
          <div className="section-header">
            <span className="badge-military">FEATURED PROGRAMS</span>
            <h2>Our Core Training Courses</h2>
            <p>
              Specialized coaching programs designed under military standards to master NDA written papers and the 14-day SSB interview battery.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '28px',
            alignItems: 'stretch'
          }}>
            {courses.slice(0, 3).map((course) => (
              <div
                key={course._id}
                onClick={() => setSelectedCourse(course)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  cursor: 'pointer',
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 16px 32px -8px rgba(22, 78, 36, 0.14)';
                  e.currentTarget.style.borderColor = '#109CD9';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.04)';
                  e.currentTarget.style.borderColor = '#e2e8f0';
                }}
              >
                {/* Card Image */}
                <div style={{ position: 'relative', height: '190px', width: '100%', backgroundColor: '#0f172a', overflow: 'hidden' }}>
                  <img
                    src={course.image || 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80'}
                    alt={course.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease'
                    }}
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80';
                    }}
                  />
                  
                  {/* Gradient overlay */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, transparent 40%, rgba(0,0,0,0.5) 100%)',
                    pointerEvents: 'none'
                  }} />

                  {/* Category Tag */}
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    backgroundColor: 'rgba(22, 78, 36, 0.95)',
                    backdropFilter: 'blur(6px)',
                    color: '#ffffff',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    fontSize: '11px',
                    fontWeight: '700',
                    letterSpacing: '0.02em',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.2)'
                  }}>
                    {course.category}
                  </div>

                  {/* Badge */}
                  {course.badge && (
                    <div style={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      maxWidth: '52%',
                      backgroundColor: 'rgba(217, 119, 6, 0.95)',
                      backdropFilter: 'blur(6px)',
                      color: '#ffffff',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      fontSize: '11px',
                      fontWeight: '700',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.2)'
                    }}>
                      ★ {course.badge}
                    </div>
                  )}

                  {course.code && (
                    <div style={{
                      position: 'absolute',
                      bottom: '10px',
                      right: '12px',
                      backgroundColor: 'rgba(15, 23, 42, 0.85)',
                      backdropFilter: 'blur(4px)',
                      color: '#e2e8f0',
                      padding: '2px 8px',
                      borderRadius: '4px',
                      fontSize: '10px',
                      fontFamily: 'monospace'
                    }}>
                      {course.code}
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: '800',
                    color: '#0f172a',
                    marginBottom: '8px',
                    lineHeight: '1.35',
                    minHeight: '48px',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>
                    {course.title}
                  </h3>

                  <p style={{
                    fontSize: '13px',
                    color: '#64748b',
                    lineHeight: '1.55',
                    marginBottom: '16px',
                    minHeight: '40px',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>
                    {course.description}
                  </p>

                  {/* Quick Specs - Full Width Clean Rows (No Truncation!) */}
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px',
                    backgroundColor: '#f8fafc',
                    border: '1px solid #f1f5f9',
                    borderRadius: '10px',
                    padding: '12px 14px',
                    marginBottom: '18px',
                    fontSize: '12px'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
                      <span style={{ color: '#64748b', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Clock size={14} color="#109CD9" />
                        <span>Duration:</span>
                      </span>
                      <span style={{ fontWeight: '700', color: '#1e293b', textAlign: 'right' }}>
                        {course.duration || 'Flexible'}
                      </span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
                      <span style={{ color: '#64748b', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Calendar size={14} color="#d97706" />
                        <span>Next Batch:</span>
                      </span>
                      <span style={{ fontWeight: '700', color: '#d97706', textAlign: 'right' }}>
                        {course.batchStartDate || 'Every Monday'}
                      </span>
                    </div>
                  </div>

                  {/* Footer / Fee & CTA */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderTop: '1px solid #f1f5f9',
                    paddingTop: '16px',
                    marginTop: 'auto'
                  }}>
                    <div>
                      <div style={{ fontSize: '11px', color: '#64748b', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                        Total Course Fee
                      </div>
                      <div style={{ fontSize: '22px', fontWeight: '900', color: '#109CD9', letterSpacing: '-0.02em', lineHeight: '1.2' }}>
                        {course.fees ? `₹${Number(course.fees).toLocaleString('en-IN')}` : 'Enquire'}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedCourse(course);
                      }}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '9px 16px',
                        borderRadius: '8px',
                        fontSize: '13px',
                        fontWeight: '700',
                        backgroundColor: '#109CD9',
                        color: '#ffffff',
                        border: 'none',
                        cursor: 'pointer',
                        boxShadow: '0 2px 6px rgba(22, 78, 36, 0.25)',
                        transition: 'all 0.2s'
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#0b86bc'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#109CD9'; }}
                    >
                      <span>View Details</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Courses Button */}
          <div style={{ textAlign: 'center', marginTop: '36px' }}>
            <Link
              href="/courses"
              className="btn btn-primary"
              style={{ padding: '12px 28px', fontSize: '15px', gap: '8px' }}
            >
              <span>View All Courses &amp; Batches ({courses.length})</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Section: Why Choose Us (4 Cards as per reference) */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff', borderTop: '1px solid #e2e8f0' }}>
        <div className="container">
          <div className="section-header">
            <span className="badge-gold">ACADEMY ADVANTAGE</span>
            <h2>Why Choose Shaurya NDA &amp; SSB?</h2>
            <p>
              We provide an uncompromising military ecosystem designed to awaken the commissioned officer within each cadet.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-box">
              <div className="feature-box-icon">
                <Users size={26} />
              </div>
              <h4>Experienced Faculty</h4>
              <p>Mentorship by retired Brigadiers, Wing Commanders, Senior GTOs, and DIPR psychologists.</p>
            </div>

            <div className="feature-box">
              <div className="feature-box-icon">
                <HeartHandshake size={26} />
              </div>
              <h4>Personalized Approach</h4>
              <p>Individual PIQ audit, 1-on-1 mock interviews, and tailored psychological feedback dossiers.</p>
            </div>

            <div className="feature-box">
              <div className="feature-box-icon">
                <Building size={26} />
              </div>
              <h4>Modern Infrastructure</h4>
              <p>100% full-scale replica GTO obstacle ground, smart classrooms, library, and AC hostels.</p>
            </div>

            <div className="feature-box">
              <div className="feature-box-icon">
                <Target size={26} />
              </div>
              <h4>Focused Training</h4>
              <p>End-to-end military routine from 06:00 AM conditioning drills to evening geopolitical GDs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Dynamic Gallery Preview */}
      <section className="section-padding" style={{ backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
        <div className="container">
          <div className="section-header">
            <span className="badge-military">CAMPUS LIFE &amp; OBSTACLES</span>
            <h2>Academy Training &amp; Recommended Cadets</h2>
            <p>
              Glimpses of obstacle training, mock interviews, classroom problem solving, and celebrations.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
            {gallery.slice(0, 4).map((item) => (
              <div key={item._id} className="defense-card" style={{ padding: '10px' }}>
                <div style={{ height: '200px', borderRadius: '8px', overflow: 'hidden', marginBottom: '10px' }}>
                  <img src={item.imageUrl} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ fontSize: '11px', color: '#109CD9', fontWeight: '700', textTransform: 'uppercase' }}>
                  {item.category}
                </div>
                <h4 style={{ fontSize: '14px', fontWeight: '700', color: '#1e293b', marginTop: '2px' }}>
                  {item.title}
                </h4>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '30px' }}>
            <Link href="/gallery" className="btn btn-outline">
              <span>View Full Gallery ({gallery.length}+ Photos) &rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Notice Board Preview */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff', borderTop: '1px solid #e2e8f0' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          <div className="section-header">
            <span className="badge-gold">CIRCULARS &amp; ALERTS</span>
            <h2>Official Notices &amp; Announcements</h2>
            <p>
              Stay up to date with UPSC NDA notifications, SSB call letters, and new batch commencement dates.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {notices.slice(0, 5).map((n) => {
              const isPdf = n.linkUrl && n.linkUrl.toLowerCase().includes('.pdf');
              const isImage = n.linkUrl && n.linkUrl.match(/\.(jpeg|jpg|png|webp|gif)/i);
              const hasLink = Boolean(n.linkUrl && n.linkUrl.trim() !== '');

              return (
                <div key={n._id} className="notice-row" style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '10px',
                  padding: '16px 20px',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                  transition: 'all 0.2s ease'
                }}>
                  <div className="notice-date-box" style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minWidth: '60px',
                    height: '56px',
                    backgroundColor: '#e6f6fd',
                    borderRadius: '8px',
                    color: '#109CD9'
                  }}>
                    <span className="day" style={{ fontSize: '18px', fontWeight: '800', lineHeight: '1.1' }}>
                      {n.date ? n.date.split(' ')[0] : '20'}
                    </span>
                    <span className="month" style={{ fontSize: '11px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      {n.date && n.date.split(' ')[1] ? n.date.split(' ')[1] : 'OCT'}
                    </span>
                  </div>

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px', flexWrap: 'wrap' }}>
                      <span className="badge-military" style={{ fontSize: '10px', padding: '2px 8px' }}>
                        {n.category}
                      </span>
                      {n.isUrgent && (
                        <span style={{
                          background: '#fee2e2',
                          color: '#dc2626',
                          fontSize: '10px',
                          fontWeight: '800',
                          padding: '2px 6px',
                          borderRadius: '4px',
                          letterSpacing: '0.04em'
                        }}>
                          URGENT ALERT
                        </span>
                      )}
                    </div>
                    <h4 style={{ fontSize: '15px', fontWeight: '700', color: '#1e293b', lineHeight: '1.4' }}>
                      {n.title}
                    </h4>
                    {n.description && (
                      <p style={{
                        fontSize: '13px',
                        color: '#64748b',
                        marginTop: '2px',
                        lineHeight: '1.5',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                      }}>
                        {n.description}
                      </p>
                    )}
                  </div>

                  {hasLink ? (
                    <a
                      href={n.linkUrl}
                      target={n.linkUrl.startsWith('http') ? '_blank' : '_self'}
                      rel="noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '12px',
                        fontWeight: '700',
                        whiteSpace: 'nowrap',
                        padding: '7px 14px',
                        borderRadius: '6px',
                        textDecoration: 'none',
                        flexShrink: 0,
                        backgroundColor: isPdf
                          ? '#fef2f2'
                          : isImage
                          ? '#f0fdf4'
                          : '#eff6ff',
                        color: isPdf
                          ? '#b91c1c'
                          : isImage
                          ? '#15803d'
                          : '#1d4ed8',
                        border: `1px solid ${
                          isPdf
                            ? '#fecaca'
                            : isImage
                            ? '#bbf7d0'
                            : '#bfdbfe'
                        }`,
                        transition: 'all 0.2s'
                      }}
                    >
                      <span>
                        {isPdf
                          ? '📄 Download PDF'
                          : isImage
                          ? '🖼️ View Circular'
                          : 'Official Link →'}
                      </span>
                    </a>
                  ) : (
                    <Link
                      href="/notices"
                      style={{
                        color: '#109CD9',
                        fontWeight: '700',
                        fontSize: '13px',
                        whiteSpace: 'nowrap',
                        flexShrink: 0
                      }}
                    >
                      View &rarr;
                    </Link>
                  )}
                </div>
              );
            })}
          </div>

          <div style={{ textAlign: 'center', marginTop: '28px' }}>
            <Link
              href="/notices"
              className="btn btn-outline"
              style={{ padding: '10px 22px', fontSize: '14px' }}
            >
              <span>All Official Circulars &amp; Alerts ({notices.length}) &rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section style={{ backgroundColor: '#109CD9', color: '#ffffff', padding: '56px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '34px', fontWeight: '800', color: '#ffffff', marginBottom: '12px' }}>
            Ready to Earn Your Stars in 2026?
          </h2>
          <p style={{ fontSize: '16px', color: '#dcfce7', maxWidth: '640px', margin: '0 auto 24px auto', lineHeight: '1.6' }}>
            Seats in upcoming NDA Written and SSB 14-Days batches are limited to 20 cadets per sub-group to maintain personalized training standards.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              href="/enquiry"
              className="btn btn-gold"
              style={{ padding: '12px 28px', fontSize: '15px' }}
            >
              <span>Book Free Counseling Session</span>
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="btn btn-outline-white"
              style={{ padding: '12px 28px', fontSize: '15px' }}
            >
              <span>Visit Campus Tour</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Course Detail Modal */}
      {selectedCourse && (
        <div
          onClick={() => setSelectedCourse(null)}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(15, 23, 42, 0.75)',
            backdropFilter: 'blur(6px)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px'
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              maxWidth: '680px',
              width: '100%',
              maxHeight: '90vh',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.3)',
              position: 'relative'
            }}
          >
            {/* Modal Header */}
            <div style={{
              padding: '18px 24px',
              borderBottom: '1px solid #e2e8f0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#ffffff'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span className="badge-military" style={{ fontSize: '11px' }}>
                  {selectedCourse.category}
                </span>
                {selectedCourse.badge && (
                  <span className="badge-gold" style={{ fontSize: '11px' }}>
                    {selectedCourse.badge}
                  </span>
                )}
                {selectedCourse.code && (
                  <span style={{ fontSize: '11px', color: '#64748b', fontFamily: 'monospace' }}>
                    #{selectedCourse.code}
                  </span>
                )}
              </div>
              <button
                type="button"
                onClick={() => setSelectedCourse(null)}
                style={{
                  background: '#f1f5f9',
                  border: 'none',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: '#64748b'
                }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div style={{
              padding: '24px',
              overflowY: 'auto',
              flex: 1
            }}>
              <h2 style={{ fontSize: '24px', fontWeight: '800', color: '#1e293b', marginBottom: '8px' }}>
                {selectedCourse.title}
              </h2>

              {selectedCourse.subtitle && (
                <div style={{ fontSize: '14px', fontWeight: '600', color: '#109CD9', marginBottom: '16px' }}>
                  {selectedCourse.subtitle}
                </div>
              )}

              {selectedCourse.image && (
                <div style={{
                  height: '220px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  marginBottom: '20px',
                  backgroundColor: '#0f172a'
                }}>
                  <img
                    src={selectedCourse.image}
                    alt={selectedCourse.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                </div>
              )}

              <div style={{ marginBottom: '20px' }}>
                <h4 style={{ fontSize: '14px', fontWeight: '700', color: '#1e293b', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Course Overview
                </h4>
                <p style={{ fontSize: '14px', color: '#475569', lineHeight: '1.7' }}>
                  {selectedCourse.description}
                </p>
              </div>

              {/* Specs Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '12px',
                backgroundColor: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '10px',
                padding: '16px',
                marginBottom: '22px'
              }}>
                <div>
                  <span style={{ fontSize: '12px', color: '#64748b' }}>⏳ Course Duration</span>
                  <div style={{ fontSize: '14px', fontWeight: '700', color: '#1e293b', marginTop: '2px' }}>
                    {selectedCourse.duration || '6 Months Intensive'}
                  </div>
                </div>

                <div>
                  <span style={{ fontSize: '12px', color: '#64748b' }}>📅 Next Batch Commencement</span>
                  <div style={{ fontSize: '14px', fontWeight: '700', color: '#d97706', marginTop: '2px' }}>
                    {selectedCourse.batchStartDate || 'Batches every Monday'}
                  </div>
                </div>

                <div>
                  <span style={{ fontSize: '12px', color: '#64748b' }}>⏰ Daily Schedule</span>
                  <div style={{ fontSize: '14px', fontWeight: '700', color: '#1e293b', marginTop: '2px' }}>
                    {selectedCourse.timings || '08:30 AM - 02:30 PM'}
                  </div>
                </div>

                <div>
                  <span style={{ fontSize: '12px', color: '#64748b' }}>👥 Batch Capacity</span>
                  <div style={{ fontSize: '14px', fontWeight: '700', color: '#1e293b', marginTop: '2px' }}>
                    {selectedCourse.batchSize || 'Limited to 35 Cadets'}
                  </div>
                </div>
              </div>

              {/* Highlights */}
              {selectedCourse.highlights && selectedCourse.highlights.length > 0 && (
                <div style={{ marginBottom: '22px' }}>
                  <h4 style={{ fontSize: '14px', fontWeight: '700', color: '#1e293b', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Training Highlights &amp; Features
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {(Array.isArray(selectedCourse.highlights) ? selectedCourse.highlights : [selectedCourse.highlights]).map((h, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13px', color: '#334155' }}>
                        <CheckCircle size={16} color="#109CD9" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div style={{
              padding: '16px 24px',
              borderTop: '1px solid #e2e8f0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: '#f8fafc',
              flexWrap: 'wrap',
              gap: '12px'
            }}>
              <div>
                <div style={{ fontSize: '11px', color: '#64748b', textTransform: 'uppercase' }}>All-Inclusive Course Fee</div>
                <div style={{ fontSize: '24px', fontWeight: '900', color: '#109CD9' }}>
                  {selectedCourse.fees ? `₹${Number(selectedCourse.fees).toLocaleString('en-IN')}` : 'Contact for Fees'}
                </div>
              </div>

              <div style={{ display: 'flex', gap: '10px' }}>
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={() => setSelectedCourse(null)}
                >
                  Close
                </button>
                <Link
                  href={`/enquiry?course=${encodeURIComponent(selectedCourse.title)}`}
                  className="btn btn-primary"
                  onClick={() => setSelectedCourse(null)}
                  style={{ padding: '10px 22px' }}
                >
                  <span>Enroll / Book Seat</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
