'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  CheckCircle,
  PhoneCall,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  Send,
  Loader2
} from 'lucide-react';
import { submitEnquiry } from '../../lib/api';

export default function EnquiryPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    remarks: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await submitEnquiry({
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim(),
        courseInterested: 'General Enquiry / SSB & Written',
        message: formData.remarks ? formData.remarks.trim() : ''
      });

      setSubmitted(true);
      window.scrollTo({ top: 120, behavior: 'smooth' });
    } catch (err) {
      setError(err.message || 'Failed to submit enquiry. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Header Banner */}
      <section className="page-header-banner">
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/">Home</Link> &gt; <span>Enquiry</span>
          </div>
          <h1>Quick <span>Admission Enquiry</span></h1>
          <p>
            ASTRA SSB &bull; Fill in your details below. Our senior counselor will connect with you.
          </p>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '980px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '36px',
            alignItems: 'start'
          }}>
            {/* Left Info Panel */}
            <div style={{
              background: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: '16px',
              padding: '32px 26px'
            }}>
              <span style={{ fontSize: '12px', fontWeight: '800', color: '#109cd9', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                ASTRA DEFENCE ACADEMY
              </span>
              <h2 style={{ fontSize: '24px', fontWeight: '800', color: '#0f172a', margin: '8px 0 14px' }}>
                Start Your Journey To The Uniform
              </h2>
              <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.65', marginBottom: '24px' }}>
                Train under experienced DIPR qualified Ex-Assessors through a result-oriented, intensive training programme designed for maximum learning in minimum time.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '14px', color: '#334155', marginBottom: '28px' }}>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#e6f6fd', color: '#109cd9', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '12px', color: '#64748b' }}>Academy Campus</div>
                    <strong>Krishna Nagar, Lucknow, UP</strong>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#e6f6fd', color: '#109cd9', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <PhoneCall size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '12px', color: '#64748b' }}>Helpline &amp; WhatsApp</div>
                    <a href="tel:+919464256374" style={{ color: '#0f172a', textDecoration: 'none', fontWeight: '700' }}>
                      +91 9464256374
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: '#e6f6fd', color: '#109cd9', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Mail size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '12px', color: '#64748b' }}>Official Email</div>
                    <a href="mailto:astraforssb@gmail.com" style={{ color: '#0f172a', textDecoration: 'none', fontWeight: '700' }}>
                      astraforssb@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div style={{
                padding: '14px 18px',
                background: '#e6f6fd',
                borderRadius: '10px',
                color: '#109cd9',
                fontSize: '13px',
                fontWeight: '700'
              }}>
                ★ BE WITH US MIRACLES WILL HAPPEN.
              </div>
            </div>

            {/* Right Form */}
            <div style={{
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '16px',
              padding: '36px 30px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.04)'
            }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '30px 10px' }}>
                  <div style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    backgroundColor: '#dcfce7',
                    color: '#15803d',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 18px'
                  }}>
                    <CheckCircle size={36} />
                  </div>
                  <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#0f172a', marginBottom: '8px' }}>
                    Enquiry Submitted Successfully!
                  </h3>
                  <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.6', marginBottom: '24px' }}>
                    Thank you, <strong>{formData.name}</strong>. Your enquiry has been registered in our Command Center database. Our Senior Officer Counselor will connect with you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', phone: '', email: '', remarks: '' });
                    }}
                    className="btn btn-outline"
                    style={{ padding: '10px 22px' }}
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#0f172a', marginBottom: '6px' }}>
                    Admission Enquiry Form
                  </h3>
                  <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '22px' }}>
                    Enter your basic contact details and remarks below:
                  </p>

                  {error && (
                    <div style={{
                      backgroundColor: '#fef2f2',
                      border: '1px solid #fecaca',
                      color: '#b91c1c',
                      padding: '10px 14px',
                      borderRadius: '8px',
                      fontSize: '13px',
                      marginBottom: '18px'
                    }}>
                      {error}
                    </div>
                  )}

                  {/* 1. Full Name */}
                  <div style={{ marginBottom: '16px' }}>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#334155', marginBottom: '6px' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Rahul Sharma"
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        border: '1px solid #cbd5e1',
                        borderRadius: '8px',
                        fontSize: '14px',
                        outline: 'none'
                      }}
                    />
                  </div>

                  {/* 2. Phone Number */}
                  <div style={{ marginBottom: '16px' }}>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#334155', marginBottom: '6px' }}>
                      Mobile / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +91 98765 43210"
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        border: '1px solid #cbd5e1',
                        borderRadius: '8px',
                        fontSize: '14px',
                        outline: 'none'
                      }}
                    />
                  </div>

                  {/* 3. Email Address */}
                  <div style={{ marginBottom: '16px' }}>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#334155', marginBottom: '6px' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. rahul@gmail.com"
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        border: '1px solid #cbd5e1',
                        borderRadius: '8px',
                        fontSize: '14px',
                        outline: 'none'
                      }}
                    />
                  </div>

                  {/* 4. Remarks */}
                  <div style={{ marginBottom: '24px' }}>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#334155', marginBottom: '6px' }}>
                      Remarks / Message (Optional)
                    </label>
                    <textarea
                      name="remarks"
                      rows={4}
                      value={formData.remarks}
                      onChange={handleChange}
                      placeholder="Enter your preparation background, target entry (NDA/CDS/SSB), hostel requirement, etc..."
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        border: '1px solid #cbd5e1',
                        borderRadius: '8px',
                        fontSize: '14px',
                        outline: 'none',
                        resize: 'vertical'
                      }}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn btn-primary"
                    style={{
                      width: '100%',
                      padding: '13px 20px',
                      fontSize: '15px',
                      fontWeight: '800',
                      justifyContent: 'center'
                    }}
                  >
                    {loading ? (
                      <span>Submitting Enquiry...</span>
                    ) : (
                      <>
                        <span>Submit Enquiry</span>
                        <ArrowRight size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
