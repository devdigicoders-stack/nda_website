'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Send, 
  CheckCircle, 
  PhoneCall, 
  Mail, 
  MapPin, 
  Clock, 
  Award, 
  Sparkles, 
  Check, 
  HelpCircle,
  FileText
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
            <div style={{
              backgroundColor: '#ffffff',
              border: '1px solid var(--border-card)',
              borderRadius: '12px',
              padding: '36px',
              boxShadow: 'var(--shadow-sm)'
            }}>
              {submitted ? (
                <div style={{ padding: '30px 15px', textAlign: 'center' }}>
                  <div style={{
                    width: '68px',
                    height: '68px',
                    backgroundColor: 'var(--primary-light)',
                    borderRadius: '50%',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--primary)',
                    marginBottom: '18px'
                  }}>
                    <CheckCircle size={40} />
                  </div>

                  <span className="badge-military" style={{ marginBottom: '12px' }}>
                    ADMISSION DOSSIER LOGGED
                  </span>

                  <h2 style={{ fontSize: '26px', fontWeight: '800', color: 'var(--text-heading)', margin: '14px 0 10px 0' }}>
                    Enquiry Registered Successfully!
                  </h2>

                  <p style={{ fontSize: '15px', color: 'var(--text-body)', lineHeight: '1.6', maxWidth: '520px', margin: '0 auto 24px auto' }}>
                    Jai Hind, <strong>{formData.name}</strong>! Your registration for <strong>{formData.courseInterested}</strong> has been received by our Defense Counseling Wing.
                  </p>

                  <div style={{
                    backgroundColor: '#f8fafc',
                    border: '1px solid var(--border-light)',
                    borderRadius: '8px',
                    padding: '20px',
                    textAlign: 'left',
                    maxWidth: '480px',
                    margin: '0 auto 26px auto',
                    fontSize: '13px',
                    color: 'var(--text-body)'
                  }}>
                    <div style={{ color: 'var(--primary)', fontWeight: '700', marginBottom: '8px', fontSize: '14px' }}>
                      Summary of Your Submission:
                    </div>
                    <div style={{ marginBottom: '4px' }}>📞 <strong>Phone:</strong> {formData.phone}</div>
                    <div style={{ marginBottom: '4px' }}>✉️ <strong>Email:</strong> {formData.email}</div>
                    <div style={{ marginBottom: '4px' }}>🎯 <strong>Course:</strong> {formData.courseInterested}</div>
                    <div style={{ marginBottom: '4px' }}>📍 <strong>City:</strong> {formData.city || 'N/A'}</div>
                    <div style={{ marginBottom: '4px' }}>🎖️ <strong>Target Wing:</strong> {formData.targetWing}</div>
                    <div>🏠 <strong>Hostel:</strong> {formData.needHostel}</div>
                  </div>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
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
                    }}
                    className="btn btn-primary"
                  >
                    Submit Another Application
                  </button>
                </div>
              ) : (
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                    <div style={{
                      width: '32px',
                      height: '32px',
                      background: 'var(--primary-light)',
                      borderRadius: '6px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--primary)'
                    }}>
                      <ShieldCheck size={18} />
                    </div>
                    <span className="badge-gold">APPLICATION FORM 2026</span>
                  </div>

                  <h2 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--text-heading)', marginBottom: '8px' }}>
                    Candidate Enrollment &amp; Counseling Form
                  </h2>
                  <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '24px' }}>
                    Please fill accurate details below to receive fee structures, scholarship test details, and batch schedules.
                  </p>

                  {error && (
                    <div style={{
                      backgroundColor: '#fef2f2',
                      border: '1px solid #fecaca',
                      color: '#dc2626',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      fontSize: '13px',
                      marginBottom: '20px'
                    }}>
                      {error}
                    </div>
                  )}

                  <form onSubmit={handleSubmit}>
                    {/* Candidate Name */}
                    <div className="form-group">
                      <label>Candidate Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Vikramaditya Singh"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    {/* Phone & Email */}
                    <div className="form-row">
                      <div className="form-group">
                        <label>Mobile Number (WhatsApp) *</label>
                        <input
                          type="text"
                          required
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>

                      <div className="form-group">
                        <label>Email Address *</label>
                        <input
                          type="email"
                          required
                          placeholder="cadet@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                    </div>

                    {/* Course Selection */}
                    <div className="form-group">
                      <label>Target Training Program *</label>
                      <select
                        value={formData.courseInterested}
                        onChange={(e) => setFormData({ ...formData, courseInterested: e.target.value })}
                      >
                        <option value="SSB 14 Days Training">SSB 14-Days Comprehensive Interview Bootcamp (Residential)</option>
                        <option value="NDA Written Super-50 Batch">NDA Written Super-50 Target Batch (Maths + GAT)</option>
                        <option value="NDA Foundation 2-Year Program">NDA Foundation (11th &amp; 12th + NDA Integrated)</option>
                        <option value="CDS / AFCAT + SSB">CDS &amp; AFCAT Written + SSB Capsule</option>
                        <option value="SSB Mock Interview & Psych Analysis">Personal Mock Interview with Ex-IO &amp; Dossier Audit</option>
                      </select>
                    </div>

                    {/* Wing Preference & Exam Year */}
                    <div className="form-row">
                      <div className="form-group">
                        <label>Target Armed Forces Wing *</label>
                        <select
                          value={formData.targetWing}
                          onChange={(e) => setFormData({ ...formData, targetWing: e.target.value })}
                        >
                          <option value="Indian Army">Indian Army (NDA / IMA / OTA)</option>
                          <option value="Indian Air Force">Indian Air Force (Flying / Ground Duty)</option>
                          <option value="Indian Navy">Indian Navy (NA / Executive / Technical)</option>
                          <option value="Indian Coast Guard">Indian Coast Guard</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label>Target Exam / Batch Year *</label>
                        <select
                          value={formData.targetExamYear}
                          onChange={(e) => setFormData({ ...formData, targetExamYear: e.target.value })}
                        >
                          <option value="2026">2026 Immediate Batches</option>
                          <option value="2027">2027 Long-term Foundation</option>
                        </select>
                      </div>
                    </div>

                    {/* City & Qualification */}
                    <div className="form-row">
                      <div className="form-group">
                        <label>City &amp; State</label>
                        <input
                          type="text"
                          placeholder="e.g. Jaipur, Rajasthan"
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        />
                      </div>

                      <div className="form-group">
                        <label>Current Educational Qualification</label>
                        <select
                          value={formData.qualification}
                          onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                        >
                          <option value="12th Appearing (PCM)">12th Appearing (PCM / Science)</option>
                          <option value="12th Passed">12th Passed</option>
                          <option value="Class 10th Passed (Foundation)">Class 10th Passed (Seeking 2-Yr Foundation)</option>
                          <option value="Graduation Appearing / Passed">Graduation Appearing / Completed</option>
                          <option value="B.Tech / Engineering">B.Tech / Engineering</option>
                        </select>
                      </div>
                    </div>

                    {/* Hostel Requirement & Preferred Batch */}
                    <div className="form-row">
                      <div className="form-group">
                        <label>Hostel &amp; Mess Accommodation Needed?</label>
                        <select
                          value={formData.needHostel}
                          onChange={(e) => setFormData({ ...formData, needHostel: e.target.value })}
                        >
                          <option value="Yes">Yes (Require AC / Air-Cooled Hostel + Mess)</option>
                          <option value="No">No (Day Scholar / Local Resident)</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label>Preferred Batch Joining Date</label>
                        <select
                          value={formData.preferredBatch}
                          onChange={(e) => setFormData({ ...formData, preferredBatch: e.target.value })}
                        >
                          <option value="Upcoming Monday Batch">Immediate Next Monday Batch</option>
                          <option value="Within 2 Weeks">Within Next 2 Weeks</option>
                          <option value="Next Month">Next Month</option>
                          <option value="Post Board Exams">After Board Exams</option>
                        </select>
                      </div>
                    </div>

                    {/* Specific Message */}
                    <div className="form-group">
                      <label>Any Specific Questions or Medical/Physical Queries?</label>
                      <textarea
                        rows={3}
                        placeholder="Tell us if you have already cleared NDA written, have an upcoming SSB date, or need height/weight guidance..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn btn-primary"
                      style={{ width: '100%', padding: '14px', fontSize: '15px', marginTop: '6px' }}
                    >
                      <Send size={16} />
                      <span>{loading ? 'Submitting Application...' : 'Submit Admission Enquiry'}</span>
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
                    <span>+91 98765 43210</span>
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
                    <span>admissions@ndassb.academy</span>
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
