'use client';

import React, { useState } from 'react';
import { X, CheckCircle, ShieldCheck, ArrowRight, Loader2 } from 'lucide-react';
import { submitEnquiry } from '../lib/api';

export default function EnquiryModal({ isOpen, onClose, defaultCourse = 'SSB 14 Days Training' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    courseInterested: defaultCourse,
    city: '',
    qualification: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await submitEnquiry(formData);
      setSubmitted(true);
    } catch (err) {
      setError(err.message || 'Failed to submit enquiry. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      courseInterested: defaultCourse,
      city: '',
      qualification: '',
      message: ''
    });
    onClose();
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(6, 11, 24, 0.85)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 200,
      padding: '20px'
    }}>
      <div style={{
        backgroundColor: '#0d172e',
        border: '1px solid #1e293b',
        borderRadius: '18px',
        width: '100%',
        maxWidth: '540px',
        maxHeight: '92vh',
        overflowY: 'auto',
        boxShadow: '0 25px 60px rgba(0, 0, 0, 0.7)',
        position: 'relative'
      }}>
        {/* Close Button */}
        <button
          onClick={resetForm}
          style={{
            position: 'absolute',
            top: '18px',
            right: '18px',
            background: 'rgba(255, 255, 255, 0.05)',
            border: 'none',
            borderRadius: '50%',
            width: '32px',
            height: '32px',
            color: '#94a3b8',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <X size={18} />
        </button>

        {submitted ? (
          <div style={{ padding: '40px', textAlign: 'center' }}>
            <div style={{
              width: '64px',
              height: '64px',
              backgroundColor: 'rgba(16, 185, 129, 0.15)',
              borderRadius: '50%',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#10b981',
              marginBottom: '20px'
            }}>
              <CheckCircle size={36} />
            </div>
            <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#fff', marginBottom: '10px' }}>
              Enquiry Submitted Successfully!
            </h3>
            <p style={{ fontSize: '14px', color: '#94a3b8', lineHeight: '1.6', marginBottom: '24px' }}>
              Jai Hind, <strong>{formData.name}</strong>! Your application for <strong>{formData.courseInterested}</strong> has been logged into our Command Center. Our Senior Defence Counselor will contact you on <strong>{formData.phone}</strong> shortly.
            </p>
            <button
              onClick={resetForm}
              className="btn btn-primary"
              style={{ width: '100%' }}
            >
              Close &amp; Continue
            </button>
          </div>
        ) : (
          <div style={{ padding: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <div style={{
                width: '32px',
                height: '32px',
                background: 'linear-gradient(135deg, #eab308, #ca8a04)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#060b18'
              }}>
                <ShieldCheck size={18} />
              </div>
              <span className="badge-gold">ADMISSIONS 2026</span>
            </div>

            <h3 style={{ fontSize: '22px', fontWeight: '800', color: '#fff', marginBottom: '4px' }}>
              Book Free Counseling &amp; Campus Tour
            </h3>
            <p style={{ fontSize: '13px', color: '#94a3b8', marginBottom: '20px' }}>
              Get direct guidance on NDA written syllabus, SSB 14 days training batches, and hostel facilities.
            </p>

            {error && (
              <div style={{
                backgroundColor: 'rgba(239, 68, 68, 0.15)',
                border: '1px solid rgba(239, 68, 68, 0.3)',
                color: '#ef4444',
                padding: '10px 14px',
                borderRadius: '8px',
                fontSize: '13px',
                marginBottom: '16px'
              }}>
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
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

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
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

              <div className="form-group">
                <label>Interested Course *</label>
                <select
                  value={formData.courseInterested}
                  onChange={(e) => setFormData({ ...formData, courseInterested: e.target.value })}
                >
                  <option value="SSB 14 Days Training">SSB 14 Days Comprehensive Training</option>
                  <option value="NDA Written Super-50 Batch">NDA Written Super-50 Target Batch</option>
                  <option value="NDA Foundation 2-Year Program">NDA Foundation (11th & 12th + NDA)</option>
                  <option value="CDS / AFCAT + SSB">CDS / AFCAT Written + SSB</option>
                  <option value="SSB Mock Interview & Psych Analysis">SSB Mock Interview & Psych Dossier</option>
                </select>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
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
                  <label>Current Qualification</label>
                  <input
                    type="text"
                    placeholder="e.g. 12th Appearing / Graduate"
                    value={formData.qualification}
                    onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Any Specific Questions? (Optional)</label>
                <textarea
                  rows={2}
                  placeholder="Need hostel information, batch starting date, GTO training details..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary"
                style={{ width: '100%', padding: '14px', marginTop: '6px' }}
              >
                {loading ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    <span>Submitting Lead...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Admission Enquiry</span>
                    <ArrowRight size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
