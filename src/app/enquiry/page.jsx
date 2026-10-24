'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  CheckCircle,
  PhoneCall,
  Mail,
  Clock,
  Award,
} from 'lucide-react';
import { submitEnquiry } from '../../lib/api';

export default function EnquiryPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    courseInterested: 'SSB 14 Days Training',
    targetWing: 'Indian Army',
    city: '',
    qualification: '12th Appearing (PCM)',
    targetExamYear: '2026',
    needHostel: 'Yes',
    preferredBatch: 'Upcoming Monday Batch',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const courseParam = params.get('course');
      if (courseParam) {
        setFormData(prev => ({
          ...prev,
          courseInterested: courseParam
        }));
      }
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const fullMessage = [
        `Target Wing: ${formData.targetWing}`,
        `Hostel Needed: ${formData.needHostel}`,
        `Preferred Batch: ${formData.preferredBatch}`,
        formData.message ? `Notes: ${formData.message}` : ''
      ].filter(Boolean).join(' | ');

      await submitEnquiry({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        courseInterested: formData.courseInterested,
        city: formData.city,
        qualification: formData.qualification,
        targetExamYear: formData.targetExamYear,
        message: fullMessage
      });

      setSubmitted(true);
      window.scrollTo({ top: 120, behavior: 'smooth' });
    } catch (err) {
      setError(err.message || 'Failed to submit enquiry. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const counselingSteps = [
    {
      num: '01',
      title: 'Dossier Logged at Command Center',
      desc: 'Your application is registered directly into our database and assigned to an Officer Counselor.'
    },
    {
      num: '02',
      title: '1-on-1 Call with Ex-Military Counselor',
      desc: 'Our counselor reviews your age, 12th percentage, medical criteria, and SSB call dates within 2-4 hours.'
    },
    {
      num: '03',
      title: 'Batch & Hostel Allocation',
      desc: 'Seat reservation in small 20-cadet sub-groups for outdoor GTO ground exercises and interview slots.'
    },
    {
      num: '04',
      title: 'Welcome Kit & Pre-Training Drills',
      desc: 'Receive our official syllabus handbook, PPDT practice workbook, and morning conditioning schedule.'
    }
  ];

  return (
    <>
      {/* Header Banner */}
      <section className="page-header-banner">
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/">Home</Link> &gt; <span>Enquiry</span>
          </div>
          <h1>Candidate Admission &amp; <span>Course Enquiry</span></h1>
          <p>
            Take your first decisive step towards joining the Indian Armed Forces. Register for <strong>NDA Written Super-50</strong> or <strong>SSB 14-Days Intensive Training</strong>.
          </p>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '24px',
            marginTop: '24px',
            flexWrap: 'wrap',
            fontSize: '13px',
            color: '#e2e8f0'
          }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle size={15} color="#4ade80" /> Free Eligibility Check
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle size={15} color="#4ade80" /> Ex-SSB Assessors Mentorship
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle size={15} color="#4ade80" /> Outdoor GTO Obstacle Ground
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle size={15} color="#4ade80" /> In-Campus AC Hostel &amp; Mess
            </span>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-body)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 0.9fr', gap: '36px', alignItems: 'flex-start' }}>

            {/* Left: Detailed Form */}


            {/* Left: Quick Enquiry Form */}

            <div
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid var(--border-card)',
                borderRadius: '16px',
                padding: '55px',
                boxShadow: 'var(--shadow-sm)',
                width: '100%',
                maxWidth: '650px',
                margin: '0 auto',
                boxSizing: 'border-box'
              }}
            >
              {submitted ? (
                <div style={{ padding: '30px 10px', textAlign: 'center' }}>
                  <CheckCircle size={56} color="#16a34a" />

                  <h2
                    style={{
                      fontSize: '26px',
                      fontWeight: '800',
                      color: 'var(--text-heading)',
                      margin: '18px 0 12px'
                    }}
                  >
                    Enquiry Submitted Successfully!
                  </h2>

                  <p style={{ fontSize: '15px', lineHeight: '1.7' }}>
                    Thank you, <strong>{formData.name}</strong>!
                    Our team will contact you soon.
                  </p>

                  <div
                    style={{
                      backgroundColor: '#f8fafc',
                      border: '1px solid var(--border-card)',
                      borderRadius: '10px',
                      padding: '20px',
                      margin: '25px 0',
                      textAlign: 'left',
                      lineHeight: '2'
                    }}
                  >
                    <p><strong>Name:</strong> {formData.name}</p>
                    <p><strong>Phone:</strong> {formData.phone}</p>
                    <p><strong>Email:</strong> {formData.email}</p>
                  </div>

                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: ''
                      });
                    }}
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      marginBottom: '12px'
                    }}
                  >
                    <div
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '10px',
                        backgroundColor: 'var(--primary-light)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--primary)',
                        flexShrink: 0
                      }}
                    >
                      <ShieldCheck size={24} />
                    </div>

                    <span className="badge-gold">QUICK ENQUIRY</span>
                  </div>

                  <h2
                    style={{
                      fontSize: '28px',
                      fontWeight: '800',
                      color: 'var(--text-heading)',
                      marginBottom: '10px',
                      lineHeight: '1.4'
                    }}
                  >
                    Get in Touch With Us
                  </h2>

                  <p
                    style={{
                      fontSize: '15px',
                      color: 'var(--text-muted)',
                      lineHeight: '1.7',
                      marginBottom: '30px'
                    }}
                  >
                    Share your contact details and our team will get back to you.
                  </p>

                  {error && (
                    <div
                      style={{
                        backgroundColor: '#fef2f2',
                        border: '1px solid #fecaca',
                        color: '#dc2626',
                        padding: '12px 16px',
                        borderRadius: '8px',
                        fontSize: '14px',
                        marginBottom: '20px'
                      }}
                    >
                      {error}
                    </div>
                  )}

                  <form onSubmit={handleSubmit}>
                    <div className="form-group" style={{ marginBottom: '24px' }}>
                      <label
                        style={{
                          display: 'block',
                          marginBottom: '10px',
                          fontSize: '15px',
                          fontWeight: '600'
                        }}
                      >
                        Name *
                      </label>

                      <input
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        style={{
                          width: '100%',
                          minHeight: '52px',
                          padding: '14px 16px',
                          borderRadius: '8px',
                          boxSizing: 'border-box',
                          fontSize: '15px'
                        }}
                      />
                    </div>

                    <div className="form-group" style={{ marginBottom: '24px' }}>
                      <label
                        style={{
                          display: 'block',
                          marginBottom: '10px',
                          fontSize: '15px',
                          fontWeight: '600'
                        }}
                      >
                        Phone Number *
                      </label>

                      <input
                        type="tel"
                        required
                        autoComplete="tel"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        style={{
                          width: '100%',
                          minHeight: '52px',
                          padding: '14px 16px',
                          borderRadius: '8px',
                          boxSizing: 'border-box',
                          fontSize: '15px'
                        }}
                      />
                    </div>

                    <div className="form-group" style={{ marginBottom: '28px' }}>
                      <label
                        style={{
                          display: 'block',
                          marginBottom: '10px',
                          fontSize: '15px',
                          fontWeight: '600'
                        }}
                      >
                        Email ID *
                      </label>

                      <input
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        style={{
                          width: '100%',
                          minHeight: '52px',
                          padding: '14px 16px',
                          borderRadius: '8px',
                          boxSizing: 'border-box',
                          fontSize: '15px'
                        }}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn btn-primary"
                      style={{
                        width: '100%',
                        minHeight: '54px',
                        padding: '14px',
                        fontSize: '16px',
                        fontWeight: '700',
                        borderRadius: '8px',
                        marginTop: '4px'
                      }}
                    >
                      {loading ? 'Submitting...' : 'Submit Enquiry'}
                    </button>
                  </form>
                </div>
              )}
            </div>



            {/* Right: Counseling Process & Support Card */}
            <div>
              {/* How it works */}
              <div className="defense-card" style={{ marginBottom: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                  <Award size={18} color="var(--gold)" />
                  <h3 style={{ fontSize: '17px', fontWeight: '800', color: 'var(--text-heading)' }}>
                    What Happens After You Enquire?
                  </h3>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {counselingSteps.map((step, idx) => (
                    <div key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                      <div style={{
                        width: '30px',
                        height: '30px',
                        borderRadius: '6px',
                        backgroundColor: 'var(--gold-light)',
                        border: '1px solid rgba(217, 119, 6, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '12px',
                        fontWeight: '800',
                        color: 'var(--gold)',
                        flexShrink: 0
                      }}>
                        {step.num}
                      </div>
                      <div>
                        <div style={{ fontSize: '14px', fontWeight: '700', color: 'var(--text-heading)' }}>
                          {step.title}
                        </div>
                        <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '2px', lineHeight: '1.5' }}>
                          {step.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Helpline Card */}
              <div className="defense-card" style={{
                background: 'linear-gradient(135deg, #f0fdf4, #ffffff)',
                border: '1px solid var(--primary-border)'
              }}>
                <h3 style={{ fontSize: '17px', fontWeight: '800', color: 'var(--text-heading)', marginBottom: '8px' }}>
                  Speak Directly with an Officer Counselor
                </h3>
                <p style={{ fontSize: '13px', color: 'var(--text-body)', lineHeight: '1.6', marginBottom: '16px' }}>
                  Need urgent batch confirmation for an upcoming SSB Call Letter? Connect directly with our admissions desk.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <a
                    href="tel:+919876543210"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '10px 14px',
                      backgroundColor: '#ffffff',
                      borderRadius: '8px',
                      border: '1px solid var(--primary-border)',
                      color: 'var(--primary)',
                      fontWeight: '700',
                      fontSize: '14px'
                    }}
                  >
                    <PhoneCall size={16} />
                    <span>+91 9464256374</span>
                  </a>

                  <a
                    href="mailto:admissions@ndassb.academy"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '10px 14px',
                      backgroundColor: '#ffffff',
                      borderRadius: '8px',
                      border: '1px solid var(--border-light)',
                      color: 'var(--text-heading)',
                      fontWeight: '600',
                      fontSize: '13px'
                    }}
                  >
                    <Mail size={16} color="var(--primary)" />
                    <span>astraforssb@gmail.com</span>
                  </a>

                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center', fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>
                    <Clock size={14} color="var(--gold)" />
                    <span>Counseling Hours: Daily 08:00 AM - 08:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
