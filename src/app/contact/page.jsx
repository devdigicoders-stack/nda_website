'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle, 
  ShieldCheck, 
  MessageSquare,
  PhoneCall
} from 'lucide-react';
import { submitContact } from '../../lib/api';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: 'General Enquiry',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await submitContact(formData);
      setSubmitted(true);
    } catch (err) {
      setError(err.message || 'Submission failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Banner */}
      <section className="page-header-banner">
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/">Home</Link> &gt; <span>Contact &amp; Location</span>
          </div>
          <h1>Contact &amp; <span>Location</span></h1>
          <p>
            Have any questions? Feel free to contact us. We are here to help you in your NDA &amp; SSB journey.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="contact-layout-grid">
            
            {/* Left: Get in Touch */}
            <div className="contact-info-col">
              <h2 className="contact-info-title" style={{ fontSize: '26px', fontWeight: '800', color: '#1e293b', marginBottom: '8px' }}>
                Get in Touch
              </h2>
              <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.6', marginBottom: '28px' }}>
                Have any questions? Feel free to contact us. We are here to guide you toward wearing the uniform.
              </p>

              <div className="contact-info-list" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {/* Our Address */}
                <div className="contact-info-item" style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div className="contact-info-icon" style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    backgroundColor: '#e6f6fd',
                    color: '#109CD9',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '15px', fontWeight: '700', color: '#1e293b' }}>Our Address</h4>
                    <p style={{ fontSize: '13px', color: '#64748b', marginTop: '2px', lineHeight: '1.5' }}>
                      ASTRA SSB Campus, Military Ground Road, Near Cantt Area, New Delhi - 110010
                    </p>
                  </div>
                </div>

                {/* Call Us */}
                <div className="contact-info-item" style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div className="contact-info-icon" style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    backgroundColor: '#e6f6fd',
                    color: '#109CD9',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '15px', fontWeight: '700', color: '#1e293b' }}>Call Us</h4>
                    <p style={{ fontSize: '13px', marginTop: '2px' }}>
                      <a href="tel:+919464256374" style={{ color: '#109CD9', fontWeight: '700', textDecoration: 'none' }}>
                        +91 9464256374
                      </a>
                    </p>
                  </div>
                </div>

                {/* Email Us */}
                <div className="contact-info-item" style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div className="contact-info-icon" style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    backgroundColor: '#e6f6fd',
                    color: '#109CD9',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '15px', fontWeight: '700', color: '#1e293b' }}>Email Us</h4>
                    <p style={{ fontSize: '13px', marginTop: '2px' }}>
                      <a href="mailto:astraforssb@gmail.com" style={{ color: '#64748b', textDecoration: 'none' }}>
                        astraforssb@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="contact-info-item" style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div className="contact-info-icon" style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    backgroundColor: '#e6f6fd',
                    color: '#109CD9',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <PhoneCall size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '15px', fontWeight: '700', color: '#1e293b' }}>WhatsApp Helpdesk</h4>
                    <p style={{ fontSize: '13px', color: '#109CD9', fontWeight: '700', marginTop: '2px' }}>
                      +91 9464256374 (24x7 Chat Support)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Send us a Message Card with Watermark Logo */}
            <div className="contact-form-card" style={{
              backgroundColor: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '14px',
              padding: '32px',
              boxShadow: 'var(--shadow-sm)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Background Watermark Logo - Full containment without clipping */}
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '85%',
                  maxWidth: '340px',
                  height: '340px',
                  opacity: 0.12,
                  pointerEvents: 'none',
                  zIndex: 0,
                  backgroundImage: "url('/assets/logos/image-removebg-preview (1).png')",
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  backgroundSize: 'contain'
                }}
                aria-hidden="true"
              />

              <div style={{ position: 'relative', zIndex: 1 }}>
                <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#1e293b', marginBottom: '6px' }}>
                  Send us a Message
                </h3>
                <p style={{ fontSize: '13px', color: '#64748b', marginBottom: '22px' }}>
                  Fill out the form below to receive syllabus brochures, fee details, and batch timings.
                </p>

                {submitted ? (
                  <div style={{ padding: '36px 16px', textAlign: 'center' }}>
                    <div style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      backgroundColor: '#e6f6fd',
                      color: '#109CD9',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '16px'
                    }}>
                      <CheckCircle size={36} />
                    </div>
                    <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#1e293b', marginBottom: '6px' }}>
                      Message Sent Successfully!
                    </h3>
                    <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.6', marginBottom: '20px' }}>
                      Thank you, <strong>{formData.name}</strong>. Our Senior Defence Counselor will call you at <strong>{formData.phone}</strong> shortly.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          phone: '',
                          email: '',
                          message: ''
                        });
                      }}
                      className="btn btn-primary"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    {error && (
                      <div style={{
                        backgroundColor: '#fee2e2',
                        border: '1px solid #fca5a5',
                        color: '#dc2626',
                        padding: '10px 14px',
                        borderRadius: '8px',
                        fontSize: '13px',
                        marginBottom: '16px'
                      }}>
                        {error}
                      </div>
                    )}

                    <div className="form-group">
                      <label>Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Abhimanyu Chauhan"
                        style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', backdropFilter: 'blur(2px)' }}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label>Mobile Number *</label>
                      <input
                        type="text"
                        required
                        placeholder="+91 98765 43210"
                        style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', backdropFilter: 'blur(2px)' }}
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label>Your Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="cadet@example.com"
                        style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', backdropFilter: 'blur(2px)' }}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label>Remarks / Message (Optional)</label>
                      <textarea
                        rows={3}
                        placeholder="Ask about batch start date, course, hostel fees, syllabus..."
                        style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', backdropFilter: 'blur(2px)' }}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn btn-primary"
                      style={{ width: '100%', marginTop: '8px' }}
                    >
                      {loading ? 'Sending Message...' : 'Submit Message'}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
