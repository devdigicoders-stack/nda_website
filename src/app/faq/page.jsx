'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Plus, Minus, HelpCircle, ArrowRight } from 'lucide-react';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'What is the eligibility for NDA exam?',
      a: 'Candidates must be unmarried male or female citizens of India between 16.5 and 19.5 years of age. For the Army wing, candidates must have passed 10+2 from any recognized board. For the Air Force and Naval wings, Physics and Mathematics in Class 12 are mandatory.'
    },
    {
      q: 'What is the duration of SSB training?',
      a: 'Our flagship SSB training is a 14-Days Comprehensive Intensive Residential Capsule conducted by Ex-SSB Assessors (IO, GTO, Psych). We also offer 7-days refresher capsules for repeaters.'
    },
    {
      q: 'Do you provide online classes?',
      a: 'Yes, for the NDA Written examination, we provide interactive live online lectures, recorded sessions, digital study notes, and doubt-clearing sessions alongside our full-time residential batches.'
    },
    {
      q: 'What study material is provided?',
      a: 'Cadets receive comprehensive chapter-wise theory workbooks, 10 years of solved NDA previous papers, shortcut trick handbooks for Mathematics, daily current affairs digests, and PPDT/TAT image perception practice booklets.'
    },
    {
      q: 'What is the fee structure?',
      a: 'Our NDA Written Super-50 Batch fee is ₹38,500 (6 Months), and the SSB 14-Days Intensive Bootcamp fee is ₹24,500. This includes all ground training charges, obstacle access, and mock interview dossiers.'
    },
    {
      q: 'How can I join the batch?',
      a: 'You can register online directly through our Admission Enquiry page or visit our academy campus. New SSB batches commence every Monday, and new NDA written batches start on the 1st & 15th of every month.'
    },
    {
      q: 'Do you provide hostel facilities?',
      a: 'Yes, we provide fully furnished separate hostels for boys and girls with AC/air-cooled rooms, 24x7 Wi-Fi, round-the-clock security, and a nutritious military mess providing four wholesome meals daily.'
    },
    {
      q: 'What is the success rate of your institute?',
      a: 'We maintain an exceptional Stage-I screening clearance rate of 94% and have mentored over 1,500+ recommended officers across Army, Navy, and Air Force selection boards over the past 12 years.'
    }
  ];

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <>
      {/* Banner */}
      <section className="page-header-banner">
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/">Home</Link> &gt; <span>FAQ</span>
          </div>
          <h1>Frequently Asked <span>Questions</span></h1>
          <p>
            Find clear answers to common questions about NDA written eligibility, 14-day SSB training, hostel accommodations, and batch schedules.
          </p>
        </div>
      </section>

      {/* FAQ Accordion List */}
      <section className="section-padding">
        <div className="container" style={{ maxWidth: '840px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className="faq-item">
                  <div className="faq-header" onClick={() => toggle(idx)}>
                    <span style={{ color: isOpen ? '#164e24' : '#1e293b' }}>
                      {faq.q}
                    </span>
                    <div style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      background: isOpen ? '#e8f5e9' : '#f1f5f9',
                      color: isOpen ? '#164e24' : '#64748b',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                    </div>
                  </div>
                  {isOpen && (
                    <div className="faq-body">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom Help */}
          <div style={{
            marginTop: '45px',
            padding: '28px',
            backgroundColor: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '12px',
            textAlign: 'center',
            boxShadow: '0 2px 4px rgba(0,0,0,0.04)'
          }}>
            <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#1e293b', marginBottom: '6px' }}>
              Still have questions about your Defense Career?
            </h3>
            <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '18px' }}>
              Speak directly with our Ex-Assessor counselors for personalized medical and eligibility advice.
            </p>
            <Link href="/enquiry" className="btn btn-primary">
              <span>Book Free Counseling Call</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
