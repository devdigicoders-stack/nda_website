'use client';

import React, { useState } from 'react';
import { Phone, FileText } from 'lucide-react';
import EnquiryModal from './EnquiryModal';

export default function FloatingActions() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const phoneNumber = '919464256374';
  const callNumber = '+919464256374';
  const whatsappMessage = encodeURIComponent(
    'Hello ASTRA SSB! I would like to enquire about Offline & Online SSB / NDA & CDS Written batches.'
  );

  return (
    <>
      <div className="floating-actions-container" aria-label="Quick contact and enquiry actions">
        {/* Enquiry Modal Trigger: Opens popup only when clicked */}
        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="floating-action-btn floating-enquiry-btn"
          aria-label="Enquire Now"
          title="Open Quick Enquiry Form"
        >
          <div className="floating-btn-pulse enquiry-pulse"></div>
          <FileText size={25} strokeWidth={2.2} />
          <span className="floating-action-tooltip">Enquiry</span>
        </button>

        {/* Direct Phone Call Button */}
        <a
          href={`tel:${callNumber}`}
          className="floating-action-btn floating-call-btn"
          aria-label="Call Helpline"
          title="Call ASTRA SSB Helpline (+91 9464256374)"
        >
          <div className="floating-btn-pulse call-pulse"></div>
          <Phone size={25} strokeWidth={2.2} />
          <span className="floating-action-tooltip">Call Us</span>
        </a>

        {/* WhatsApp Official Button */}
        <a
          href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="floating-action-btn floating-whatsapp-btn"
          aria-label="Chat on WhatsApp"
          title="Chat with ASTRA SSB on WhatsApp"
        >
          <div className="floating-btn-pulse whatsapp-pulse"></div>
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="currentColor"
            style={{ display: 'block', color: '#ffffff' }}
          >
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.41-1.75-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.43 1.03 2.6c.13.17 1.77 2.7 4.28 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.29z" />
          </svg>
          <span className="floating-action-tooltip">WhatsApp</span>
        </a>
      </div>

      {/* Modal only opens when user clicks the floating enquiry button */}
      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
