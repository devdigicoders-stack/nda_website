'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { 
  GraduationCap, 
  CheckCircle, 
  Calendar, 
  Clock, 
  Users, 
  ArrowRight, 
  BookOpen, 
  X,
  Sparkles,
  Award,
  Layers,
  ShieldCheck,
  Eye,
  FileText
} from 'lucide-react';
import { fetchCourses } from '../../lib/api';

export default function CoursesPage() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedCourse, setSelectedCourse] = useState(null); // For Modal

  const categories = [
    'All',
    'NDA Written',
    'SSB 14 Days Training',
    'CDS / AFCAT',
    'Foundation'
  ];

  useEffect(() => {
    fetchCourses()
      .then((data) => {
        setCourses(data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching courses:', err);
        setLoading(false);
      });
  }, []);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (selectedCourse) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedCourse]);

  const filteredCourses = selectedCategory === 'All'
    ? courses
    : courses.filter(c => c.category === selectedCategory);

  const highlights = [
    { title: 'Complete Syllabus Coverage', desc: 'In-depth mastery of both Paper-1 Mathematics and Paper-2 GAT.' },
    { title: 'Expert Defense Faculty', desc: 'Classes conducted by experienced retired defense officers and subject specialists.' },
    { title: 'Regular Mock Test Series', desc: 'Weekly OMR-based 900-marks full length mock tests on actual UPSC pattern.' },
    { title: 'Study Material & Notes', desc: 'Chapter-wise formula books, 10-year question banks, and daily current affairs.' }
  ];

  const subjects = [
    {
      title: 'Mathematics (Paper 1 - 300 Marks)',
      icon: '√x',
      desc: 'Complete syllabus with shortcut tricks, calculus visualization, probability, matrices, determinants, and coordinate geometry.'
    },
    {
      title: 'GAT (General Ability Test - 600 Marks)',
      icon: '📖',
      desc: 'English grammar and vocabulary, Physics, Chemistry, Biology, History, Geography, and National Defense Affairs.'
    },
    {
      title: 'SSB Guidance Included',
      icon: '🎖️',
      desc: 'Free Stage-1 Screening, OIR drills, and physical fitness conditioning included alongside written coaching.'
    }
  ];

  return (
    <>
      {/* Banner */}
      <section className="page-header-banner">
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/">Home</Link> &gt; <span>Courses</span>
          </div>
          <h1>All Defense <span>Training Courses</span></h1>
          <p>
            Real-time catalog of our NDA written preparation batches, SSB 14-days interview bootcamps, and foundation courses.
          </p>
        </div>
      </section>

      {/* Main Courses Section */}
      <section className="section-padding" style={{ backgroundColor: '#f8fafc' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '32px' }}>
            <span className="badge-military">OFFICIAL COURSE CATALOG</span>
            <h2>Choose Your Path to Commission</h2>
            <p>
              Click on any course card to inspect full training syllabus, batch dates, fees, and seat availability.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            flexWrap: 'wrap',
            marginBottom: '40px'
          }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '8px 18px',
                  borderRadius: '9999px',
                  fontSize: '13px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  border: '1px solid',
                  transition: 'all 0.2s',
                  backgroundColor: selectedCategory === cat ? '#164e24' : '#ffffff',
                  color: selectedCategory === cat ? '#ffffff' : '#475569',
                  borderColor: selectedCategory === cat ? '#164e24' : '#cbd5e1',
                  boxShadow: selectedCategory === cat ? '0 2px 8px rgba(22, 78, 36, 0.25)' : 'none'
                }}
              >
                {cat === 'All' ? 'All Programs' : cat}
              </button>
            ))}
          </div>

          {/* Dynamic Courses Grid */}
          {loading ? (
            <div style={{ textAlign: 'center', padding: '60px 0', color: '#64748b' }}>
              <div style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>Loading courses from academy database...</div>
              <p style={{ fontSize: '13px' }}>Connecting to API...</p>
            </div>
          ) : filteredCourses.length === 0 ? (
            <div style={{
              textAlign: 'center',
              padding: '60px 20px',
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              border: '1px dashed #cbd5e1'
            }}>
              <GraduationCap size={44} color="#94a3b8" style={{ margin: '0 auto 12px' }} />
              <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#1e293b', marginBottom: '6px' }}>
                No courses currently found in this category
              </h3>
              <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '16px' }}>
                Select "All Programs" to view other available defense coaching batches.
              </p>
              <button
                className="btn btn-primary"
                onClick={() => setSelectedCategory('All')}
              >
                View All Courses
              </button>
            </div>
          ) : (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
              gap: '28px',
              alignItems: 'stretch'
            }}>
              {filteredCourses.map((course) => (
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
                    e.currentTarget.style.borderColor = '#164e24';
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
                    
                    {/* Gradient overlay for text contrast */}
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
                        fontFamily: 'monospace',
                        letterSpacing: '0.05em'
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
                          <Clock size={14} color="#164e24" />
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

                    {/* Footer / Fee & Primary Button */}
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
                        <div style={{ fontSize: '22px', fontWeight: '900', color: '#164e24', letterSpacing: '-0.02em', lineHeight: '1.2' }}>
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
                          backgroundColor: '#164e24',
                          color: '#ffffff',
                          border: 'none',
                          cursor: 'pointer',
                          boxShadow: '0 2px 6px rgba(22, 78, 36, 0.25)',
                          transition: 'all 0.2s'
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#1b632e'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#164e24'; }}
                      >
                        <span>View Details</span>
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
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
                  color: '#64748b',
                  transition: 'all 0.2s'
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
              {/* Course Title */}
              <h2 style={{ fontSize: '24px', fontWeight: '800', color: '#1e293b', marginBottom: '8px' }}>
                {selectedCourse.title}
              </h2>

              {selectedCourse.subtitle && (
                <div style={{ fontSize: '14px', fontWeight: '600', color: '#164e24', marginBottom: '16px' }}>
                  {selectedCourse.subtitle}
                </div>
              )}

              {/* Cover Image */}
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

              {/* Description */}
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
                  <span style={{ fontSize: '12px', color: '#64748b' }}>⏰ Daily Schedule &amp; Timings</span>
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
                        <CheckCircle size={16} color="#164e24" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Syllabus breakdown if available */}
              {selectedCourse.syllabus && selectedCourse.syllabus.length > 0 && (
                <div style={{ marginBottom: '20px' }}>
                  <h4 style={{ fontSize: '14px', fontWeight: '700', color: '#1e293b', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Syllabus &amp; Training Modules
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {selectedCourse.syllabus.map((s, idx) => (
                      <div key={idx} style={{
                        padding: '12px 14px',
                        backgroundColor: '#f8fafc',
                        borderRadius: '8px',
                        border: '1px solid #e2e8f0'
                      }}>
                        <div style={{ fontSize: '13px', fontWeight: '700', color: '#164e24', marginBottom: '4px' }}>
                          {s.moduleName}
                        </div>
                        <div style={{ fontSize: '12px', color: '#64748b', lineHeight: '1.5' }}>
                          {s.topics}
                        </div>
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
                <div style={{ fontSize: '24px', fontWeight: '900', color: '#164e24' }}>
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

      {/* Academic Highlights */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff', borderTop: '1px solid #e2e8f0' }}>
        <div className="container">
          <div className="section-header">
            <span className="badge-gold">ACADEMIC EXCELLENCE</span>
            <h2>Why Train With Shaurya Academy?</h2>
            <p>Proven training methodology that has produced top all-India ranks in NDA written exams and SSB recommendations.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            {highlights.map((h, i) => (
              <div key={i} className="defense-card" style={{ textAlign: 'center', padding: '26px 20px' }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: '#e8f5e9',
                  color: '#164e24',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '14px'
                }}>
                  <CheckCircle size={24} />
                </div>
                <h4 style={{ fontSize: '17px', fontWeight: '700', color: '#1e293b', marginBottom: '8px' }}>{h.title}</h4>
                <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.6' }}>{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects Covered */}
      <section className="section-padding" style={{ backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
        <div className="container">
          <div className="section-header">
            <span className="badge-military">SYLLABUS MODULES</span>
            <h2>Syllabus &amp; Exam Breakdown</h2>
            <p>Thorough preparation across the entire UPSC NDA syllabus &amp; Stage-1 SSB screening.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {subjects.map((sub, i) => (
              <div key={i} className="defense-card" style={{ padding: '28px' }}>
                <div style={{
                  fontSize: '28px',
                  fontWeight: '900',
                  color: '#164e24',
                  marginBottom: '14px',
                  height: '48px',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  {sub.icon}
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#1e293b', marginBottom: '8px' }}>
                  {sub.title}
                </h3>
                <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.6' }}>
                  {sub.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
