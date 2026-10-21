'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, 
  CheckCircle, 
  ArrowRight, 
  Calendar, 
  Target, 
  Users, 
  Activity, 
  Award, 
  BookOpen,
  Zap,
  MapPin
} from 'lucide-react';

export default function SsbTrainingPage() {
  const modules = [
    { title: 'Psychology Test', subtitle: 'TAT, WAT, SRT & SD', desc: '12 TAT slides, 60 words WAT, 60 situations SRT, and personalized dossier analysis.' },
    { title: 'Group Discussion', subtitle: 'National & Global Affairs', desc: 'Current defense affairs, geopolitical topics, and effective articulation without screeching.' },
    { title: 'Group Planning Exercise', subtitle: 'GPE & Map Reading', desc: 'Resource estimation, casualty prioritization, time calculations, and consensus building.' },
    { title: 'Outdoor Ground Tasks', subtitle: 'PGT, HGT, Snake Race', desc: 'Leverage, fulcrum, and cantilever principles on authentic full-scale obstacle structures.' },
    { title: 'Personal Interview (PI)', subtitle: '1-on-1 with Ex-IO', desc: 'Comprehensive 45-60 min interview covering PIQ, family, academics, and body language.' },
    { title: 'Personality Development', subtitle: 'Officer Like Qualities', desc: 'Cultivating the 15 OLQs: initiative, determination, courage, and social adaptability.' }
  ];

  const schedule = [
    { days: 'Day 1 - 2', title: 'Introduction & Psychological Tests', desc: 'Reporting, PIQ verification, OIR speed drills, and Stage-I PPDT story writing/narration.' },
    { days: 'Day 3 - 4', title: 'Group Tasks & Communication Skills', desc: 'Full psychological battery (TAT, WAT, SRT, SD) followed by GDs and military lecturettes.' },
    { days: 'Day 5 - 7', title: 'Outdoor Activities & Obstacle Training', desc: 'On-ground PGT, HGT, Snake Race, and Command Tasks under retired GTO supervision.' },
    { days: 'Day 8 - 10', title: 'Interview Techniques & Personal Grooming', desc: '10 Individual Obstacles (Tiger leap, Tarzan swing) and 1-on-1 personal interview sessions.' },
    { days: 'Day 11 - 12', title: 'Mock SSB & Feedback Sessions', desc: 'Second round personal interviews, specialized command tasks, and full GTO debriefing.' },
    { days: 'Day 13 - 14', title: 'Final Assessment & Guidance', desc: 'Simulated Board Conference with Board President, performance dossier issuance, and valediction.' }
  ];

  return (
    <>
      {/* Banner */}
      <section className="page-header-banner">
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/">Home</Link> &gt; <Link href="/courses">Courses</Link> &gt; <span>SSB Training</span>
          </div>
          <h1>SSB 14 Days <span>Training Course</span></h1>
          <p>
            An intensive residential bootcamp conducted on an authentic full-scale obstacle ground by Ex-SSB Assessors (IO, GTO, Psych).
          </p>
        </div>
      </section>

      {/* Course Overview */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="ssb-overview-grid">
            <div>
              <span className="badge-military">COURSE OVERVIEW</span>
              <h2 className="ssb-overview-title" style={{ fontSize: '28px', fontWeight: '800', color: '#1e293b', margin: '12px 0 16px 0' }}>
                Master the Tri-Technique: Psychology, GTO &amp; Interview
              </h2>
              <p style={{ fontSize: '15px', color: '#475569', lineHeight: '1.7', marginBottom: '16px' }}>
                Our 14-Days SSB training program is specially designed to improve your personality, confidence, communication skills, and overall performance in the Services Selection Board interview.
              </p>
              <p style={{ fontSize: '15px', color: '#64748b', lineHeight: '1.7', marginBottom: '20px' }}>
                Conducted with strict adherence to military timing and discipline, every candidate practices on actual physical obstacles, takes 1-on-1 mock interviews with retired Board Presidents, and receives personalized dossier feedback.
              </p>

              <div className="ssb-overview-actions" style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <Link
                  href="/enquiry?course=SSB%2014%20Days%20Training"
                  className="btn btn-primary"
                  style={{ padding: '11px 24px' }}
                >
                  <span>Book Upcoming Batch</span>
                  <ArrowRight size={16} />
                </Link>
                <Link href="/gallery" className="btn btn-outline" style={{ padding: '11px 20px' }}>
                  <span>View GTO Ground Photos</span>
                </Link>
              </div>
            </div>

            <div className="ssb-overview-img-wrapper" style={{ borderRadius: '12px', overflow: 'hidden', height: '280px', boxShadow: 'var(--shadow-md)' }}>
              <img
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80"
                alt="SSB Cadets discussion"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Training Modules (6 Cards as per reference) */}
      <section className="section-padding" style={{ backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
        <div className="container">
          <div className="section-header">
            <span className="badge-gold">COMPREHENSIVE CURRICULUM</span>
            <h2>Training Modules</h2>
            <p>Every test of the 5-day SSB interview battery is meticulously replicated during the 14 days.</p>
          </div>

          <div className="ssb-modules-grid">
            {modules.map((m, i) => (
              <div key={i} className="defense-card ssb-module-card">
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  backgroundColor: '#e6f6fd',
                  color: '#109CD9',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '14px'
                }}>
                  <ShieldCheck size={22} />
                </div>
                <h3 style={{ fontSize: '17px', fontWeight: '700', color: '#1e293b' }}>{m.title}</h3>
                <div style={{ fontSize: '12px', color: '#109CD9', fontWeight: '700', marginBottom: '6px' }}>{m.subtitle}</div>
                <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.5' }}>
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Schedule (14 Days) */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff', borderTop: '1px solid #e2e8f0' }}>
        <div className="container">
          <div className="section-header">
            <span className="badge-military">TIMETABLE</span>
            <h2>Course Schedule (14 Days)</h2>
            <p>Day-by-day progression from Stage-1 screening to final Board Conference simulation.</p>
          </div>

          <div className="ssb-schedule-grid">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {schedule.map((item, idx) => (
                <div
                  key={idx}
                  className="ssb-schedule-item"
                >
                  <div className="ssb-schedule-days">
                    {item.days}
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: '700', color: '#1e293b' }}>{item.title}</div>
                    <div style={{ fontSize: '12px', color: '#64748b', marginTop: '2px' }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div className="ssb-schedule-side-img" style={{ height: '220px', borderRadius: '12px', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
                <img
                  src="https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=800&q=80"
                  alt="Outdoor GTO obstacles"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div className="ssb-price-card" style={{
                padding: '24px',
                backgroundColor: '#f1f5f9',
                borderRadius: '12px',
                border: '1px solid #cbd5e1',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '13px', color: '#64748b' }}>All-Inclusive Batch Investment</div>
                <div className="ssb-price-amount" style={{ fontSize: '32px', fontWeight: '900', color: '#109CD9', margin: '4px 0' }}>
                  ₹24,500
                </div>
                <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '16px' }}>
                  Includes 14-days GTO ground access, obstacle gear, 2 mock interviews &amp; study kit.
                </div>
                <Link
                  href="/enquiry?course=SSB%2014%20Days%20Training"
                  className="btn btn-primary"
                  style={{ width: '100%' }}
                >
                  <span>Enquire Now</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
