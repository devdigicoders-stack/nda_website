'use client';

import React, { useState, useEffect } from 'react';
import { X, CheckCircle, ShieldCheck, ArrowRight, Loader2, Award, Star } from 'lucide-react';
import { submitEnquiry } from '../lib/api';

export default function EnquiryModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    remarks: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [isInteracting, setIsInteracting] = useState(false);

  // 4-Second Auto Close Timer: closes modal after 4 seconds UNLESS user starts typing or interacting
  useEffect(() => {
    if (!isOpen || isInteracting || submitted) return;

    const timer = setTimeout(() => {
      // Check if user has entered any data
      const hasTyped = Boolean(
        formData.name.trim() || 
        formData.phone.trim() || 
        formData.email.trim() || 
        formData.remarks.trim()
      );
      if (!hasTyped && !isInteracting) {
        onClose();
      }
    }, 4000);

    return () => clearTimeout(timer);
  }, [isOpen, isInteracting, submitted, formData, onClose]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setIsInteracting(true); // User started typing, stop auto-close completely
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFocus = () => {
    setIsInteracting(true); // User focused an input field, cancel auto-close
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
        courseInterested: 'Popup Lead (Home Modal)',
        message: formData.remarks ? formData.remarks.trim() : ''
      });
      setSubmitted(true);
    } catch (err) {
      setError(err.message || 'Failed to submit enquiry. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setSubmitted(false);
    setIsInteracting(false);
    setFormData({ name: '', phone: '', email: '', remarks: '' });
    onClose();
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(5, 10, 24, 0.85)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 99999,
      padding: '16px'
    }}>
      <div style={{
        backgroundColor: '#ffffff',
        borderRadius: '20px',
        width: '100%',
        maxWidth: '860px',
        maxHeight: '92vh',
        overflow: 'hidden',
        boxShadow: '0 25px 60px -10px rgba(0, 0, 0, 0.45)',
        position: 'relative',
        display: 'grid',
        gridTemplateColumns: '1fr 1.15fr',
        border: '1px solid #e2e8f0'
      }}>
        {/* Close Button */}
        <button
          onClick={handleClose}
          aria-label="Close Modal"
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: '#f1f5f9',
            border: 'none',
            borderRadius: '50%',
            width: '34px',
            height: '34px',
            color: '#64748b',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#e2e8f0'; }}
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#f1f5f9'; }}
        >
          <X size={18} />
        </button>

        {/* LEFT SIDE: Military & Defense Visual Collage (Army, Navy, Airforce, NDA) */}
        <div style={{
          background: 'linear-gradient(135deg, #071524 0%, #0f2b48 100%)',
          color: '#ffffff',
          padding: '36px 30px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Background Decorative Overlay */}
          <div style={{
            position: 'absolute',
            top: '-40px',
            right: '-40px',
            width: '160px',
            height: '160px',
            background: 'radial-gradient(circle, rgba(16, 156, 217, 0.3) 0%, transparent 70%)',
            borderRadius: '50%'
          }} />

          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 12px',
              borderRadius: '20px',
              background: 'rgba(234, 179, 8, 0.2)',
              border: '1px solid #eab308',
              color: '#fef08a',
              fontSize: '11px',
              fontWeight: '800',
              textTransform: 'uppercase',
              marginBottom: '16px'
            }}>
              <Award size={14} />
              <span>ASTRA DEFENCE ACADEMY</span>
            </div>

            <h3 style={{ fontSize: '24px', fontWeight: '900', color: '#ffffff', lineHeight: '1.25', marginBottom: '10px' }}>
              Your Journey To The <span style={{ color: '#38bdf8' }}>Officer’s Life</span> Starts Here!
            </h3>

            <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: '1.6', marginBottom: '22px' }}>
              Army &bull; Navy &bull; Air Force &bull; NDA &bull; CDS &bull; SSB
            </p>

            {/* Department Photos Visual Strip */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '10px',
              marginBottom: '20px'
            }}>
              {/* Indian Army */}
              <div style={{ position: 'relative', height: '80px', borderRadius: '10px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                <img
                  src="https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=400&q=80"
                  alt="Indian Army Cadets"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <span style={{ position: 'absolute', bottom: '4px', left: '6px', fontSize: '10px', fontWeight: '800', background: 'rgba(0,0,0,0.65)', padding: '2px 6px', borderRadius: '4px' }}>
                  INDIAN ARMY
                </span>
              </div>

              {/* Air Force / NDA */}
              <div style={{ position: 'relative', height: '80px', borderRadius: '10px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                <img
                  src="https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=400&q=80"
                  alt="SSB GTO Ground"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <span style={{ position: 'absolute', bottom: '4px', left: '6px', fontSize: '10px', fontWeight: '800', background: 'rgba(0,0,0,0.65)', padding: '2px 6px', borderRadius: '4px' }}>
                  GTO GROUND
                </span>
              </div>

              {/* Navy / Technical */}
              <div style={{ position: 'relative', height: '80px', borderRadius: '10px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                <img
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=400&q=80"
                  alt="Interview Assessment"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <span style={{ position: 'absolute', bottom: '4px', left: '6px', fontSize: '10px', fontWeight: '800', background: 'rgba(0,0,0,0.65)', padding: '2px 6px', borderRadius: '4px' }}>
                  INTERVIEW IO
                </span>
              </div>

              {/* Cadets in Uniform */}
              <div style={{ position: 'relative', height: '80px', borderRadius: '10px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
                <img
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=400&q=80"
                  alt="Cadets Recommended"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <span style={{ position: 'absolute', bottom: '4px', left: '6px', fontSize: '10px', fontWeight: '800', background: 'rgba(0,0,0,0.65)', padding: '2px 6px', borderRadius: '4px' }}>
                  RECOMMENDED
                </span>
              </div>
            </div>
          </div>

          <div style={{
            padding: '12px 14px',
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            borderRadius: '10px',
            fontSize: '12px',
            color: '#fde047',
            fontWeight: '700',
            textAlign: 'center'
          }}>
            🇮🇳 BE WITH US MIRACLE WILL HAPPEN.
          </div>
        </div>

        {/* RIGHT SIDE: 4-Field Form (Name, Number, Email, Remarks) */}
        <div style={{
          padding: '36px 32px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundColor: '#ffffff'
        }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '20px 0' }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                backgroundColor: '#dcfce7',
                color: '#15803d',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px'
              }}>
                <CheckCircle size={32} />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#0f172a', marginBottom: '8px' }}>
                Enquiry Received!
              </h3>
              <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.6', marginBottom: '22px' }}>
                Thank you, <strong>{formData.name}</strong>. Our senior counselor at Krishna Nagar, Lucknow will contact you within 24 hours.
              </p>
              <button
                type="button"
                onClick={handleClose}
                className="btn btn-primary"
                style={{ padding: '10px 24px', fontSize: '13px' }}
              >
                Continue Browsing
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '18px' }}>
                <span style={{ fontSize: '11px', fontWeight: '800', color: '#109cd9', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  FAST ADMISSION COUNSELING
                </span>
                <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#0f172a', marginTop: '2px' }}>
                  Register Your Seat
                </h3>
              </div>

              {error && (
                <div style={{
                  backgroundColor: '#fef2f2',
                  border: '1px solid #fecaca',
                  color: '#b91c1c',
                  padding: '8px 12px',
                  borderRadius: '8px',
                  fontSize: '12px',
                  marginBottom: '14px'
                }}>
                  {error}
                </div>
              )}

              {/* 1. Full Name */}
              <div style={{ marginBottom: '12px' }}>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#334155', marginBottom: '4px' }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  placeholder="Enter candidate full name"
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    border: '1px solid #cbd5e1',
                    borderRadius: '8px',
                    fontSize: '13px',
                    outline: 'none'
                  }}
                />
              </div>

              {/* 2. Mobile Number */}
              <div style={{ marginBottom: '12px' }}>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#334155', marginBottom: '4px' }}>
                  Mobile / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  placeholder="e.g. +91 94642 56374"
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    border: '1px solid #cbd5e1',
                    borderRadius: '8px',
                    fontSize: '13px',
                    outline: 'none'
                  }}
                />
              </div>

              {/* 3. Email */}
              <div style={{ marginBottom: '12px' }}>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#334155', marginBottom: '4px' }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  placeholder="e.g. cadet@gmail.com"
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    border: '1px solid #cbd5e1',
                    borderRadius: '8px',
                    fontSize: '13px',
                    outline: 'none'
                  }}
                />
              </div>

              {/* 4. Remarks */}
              <div style={{ marginBottom: '18px' }}>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: '700', color: '#334155', marginBottom: '4px' }}>
                  Remarks (Optional)
                </label>
                <textarea
                  name="remarks"
                  rows={3}
                  value={formData.remarks}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  placeholder="Target batch (Offline SSB, Online SSB, NDA & CDS Written), hostel need, etc."
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    border: '1px solid #cbd5e1',
                    borderRadius: '8px',
                    fontSize: '13px',
                    outline: 'none',
                    resize: 'none'
                  }}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary"
                style={{
                  width: '100%',
                  padding: '12px 18px',
                  fontSize: '14px',
                  fontWeight: '800',
                  justifyContent: 'center',
                  borderRadius: '8px'
                }}
              >
                {loading ? (
                  <span>Submitting...</span>
                ) : (
                  <>
                    <span>Submit Enquiry</span>
                    <ArrowRight size={15} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
