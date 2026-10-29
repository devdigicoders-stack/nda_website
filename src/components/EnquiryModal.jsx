'use client';

import React, { useState } from 'react';
import { 
  X, 
  CheckCircle, 
  Send, 
  User, 
  Phone, 
  Mail, 
  MessageSquare,
  ShieldCheck
} from 'lucide-react';
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

  // IMPORTANT: No auto-open and no auto-close timer.
  // The modal ONLY closes when the user clicks the close button or outside the card.

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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
        courseInterested: 'General Enquiry',
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
    setFormData({
      name: '',
      phone: '',
      email: '',
      remarks: ''
    });
    onClose();
  };

  return (
    <div className="simple-modal-backdrop" onClick={handleClose}>
      <div
        className="simple-modal-card"
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Background Watermark Logo exactly like reference image */}
        <div
          style={{
            position: 'absolute',
            top: '46%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '90%',
            maxWidth: '380px',
            height: '380px',
            opacity: 0.18,
            pointerEvents: 'none',
            zIndex: 0,
            backgroundImage: "url('/assets/logos/image-removebg-preview (1).png')",
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'contain'
          }}
          aria-hidden="true"
        />

        {/* Close Button */}
        <button
          onClick={handleClose}
          aria-label="Close Modal"
          className="simple-modal-close"
          style={{ zIndex: 2 }}
        >
          <X size={20} />
        </button>

        <div style={{ position: 'relative', zIndex: 1 }}>
          {submitted ? (
            <div className="simple-modal-success">
              <div className="simple-success-icon">
                <CheckCircle size={44} />
              </div>
              <h3>Enquiry Submitted!</h3>
              <p>
                Thank you, <strong>{formData.name}</strong>. Our senior counselor will get in touch with you at <strong>{formData.phone}</strong> shortly.
              </p>
              <button
                type="button"
                onClick={handleClose}
                className="btn btn-primary"
                style={{ padding: '10px 28px', borderRadius: '8px' }}
              >
                Okay, Got It
              </button>
            </div>
          ) : (
            <div>
              {/* Header */}
              <div className="simple-modal-header">
                <div className="simple-modal-badge">
                  <ShieldCheck size={14} />
                  <span>Quick Admission Enquiry</span>
                </div>
                <h2>Enquire for <span>SSB &amp; NDA</span></h2>
                <p>Get personal batch timings, fee details &amp; free counselling</p>
              </div>

              {error && (
                <div className="simple-modal-error">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="simple-modal-form">
                {/* Full Name */}
                <div className="simple-form-group">
                  <label>Full Name *</label>
                  <div className="simple-input-wrap">
                    <User size={17} className="simple-field-icon" />
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                {/* Mobile / WhatsApp */}
                <div className="simple-form-group">
                  <label>Mobile / WhatsApp Number *</label>
                  <div className="simple-input-wrap">
                    <Phone size={17} className="simple-field-icon" />
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +91 94642 56374"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div className="simple-form-group">
                  <label>Email Address *</label>
                  <div className="simple-input-wrap">
                    <Mail size={17} className="simple-field-icon" />
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. cadet@gmail.com"
                    />
                  </div>
                </div>

                {/* Remarks / Message */}
                <div className="simple-form-group">
                  <label>Remarks / Query (Optional)</label>
                  <div className="simple-input-wrap">
                    <MessageSquare size={17} className="simple-field-icon simple-textarea-icon" />
                    <textarea
                      name="remarks"
                      rows={2}
                      value={formData.remarks}
                      onChange={handleChange}
                      placeholder="Ask about batch start date, course, hostel fees, etc."
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="simple-submit-btn"
                >
                  {loading ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>Send Enquiry Now</span>
                    </>
                  )}
                </button>

                <div className="simple-modal-motto">
                  🇮🇳 BE WITH US MIRACLES WILL HAPPEN.
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
