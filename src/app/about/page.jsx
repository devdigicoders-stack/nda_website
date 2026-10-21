'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Award, 
  Target, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Compass, 
  HeartHandshake,
  Flag,
  Sparkles
} from 'lucide-react';

export default function AboutPage() {
  const values = [
    { name: 'Discipline', icon: ShieldCheck, desc: 'Punctuality, precision, and unwavering devotion to duty.' },
    { name: 'Integrity', icon: CheckCircle, desc: 'Honesty and moral conviction in every single action.' },
    { name: 'Excellence', icon: Award, desc: 'Relentless pursuit of mastery in written exams and ground tasks.' },
    { name: 'Patriotism', icon: Flag, desc: 'Service Before Self: Nation first, always and every time.' }
  ];

  const team = [
    {
      name: 'Col. R. Sharma (Retd.)',
      rank: 'Ex-Army Officer &bull; 28 Years Service',
      role: 'Course Director & Ex-President 11 SSB',
      image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80',
      bio: 'Personally mentored over 800+ recommended officers. Master assessor on Stage-1 screening and interview psychology.'
    },
    {
      name: 'Maj. P. Singh (Retd.)',
      rank: 'Ex-Senior GTO &bull; Paratrooper',
      role: 'Chief SSB & GTO Ground Trainer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
      bio: 'Designed the academy replica obstacle ground. Trains cadets on progressive group tasks and cantilever tactics.'
    },
    {
      name: 'Dr. A. Verma',
      rank: 'DIPR Trained Senior Psychologist',
      role: 'Head of Psychology & Personality Development',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
      bio: 'Specialist in sub-conscious response decoding for TAT, WAT, SRT, and Self Description (SD) tests.'
    }
  ];

  return (
    <>
      {/* Banner */}
      <section className="page-header-banner">
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/">Home</Link> &gt; <span>About Us</span>
          </div>
          <h1>About <span>Our Academy</span></h1>
          <p>
            India's most trusted and result-oriented NDA &amp; SSB coaching institution, shaping future commissioned defenders of the nation.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
            {/* Our Mission */}
            <div className="defense-card" style={{ padding: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <span className="badge-military">OUR PURPOSE</span>
              </div>
              <h2 style={{ fontSize: '24px', fontWeight: '800', color: '#1e293b', marginBottom: '12px' }}>
                Our Mission
              </h2>
              <p style={{ fontSize: '15px', color: '#475569', lineHeight: '1.7', marginBottom: '20px' }}>
                To empower young minds with the right guidance, discipline, and training to help them achieve their dream of joining the Indian Armed Forces through NDA, CDS, AFCAT, and SSB.
              </p>
              <div style={{ height: '180px', borderRadius: '10px', overflow: 'hidden' }}>
                <img
                  src="https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80"
                  alt="Cadets marching"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>

            {/* Our Vision */}
            <div className="defense-card" style={{ padding: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <span className="badge-gold">OUR HORIZON</span>
              </div>
              <h2 style={{ fontSize: '24px', fontWeight: '800', color: '#1e293b', marginBottom: '12px' }}>
                Our Vision
              </h2>
              <p style={{ fontSize: '15px', color: '#475569', lineHeight: '1.7', marginBottom: '20px' }}>
                To become India's most trusted, ethical, and high-selection defense training institute by cultivating true Officer Like Qualities (OLQs) rather than superficial cramming.
              </p>
              <div style={{ height: '180px', borderRadius: '10px', overflow: 'hidden' }}>
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80"
                  alt="Cadets celebration"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values (Discipline, Integrity, Excellence, Patriotism) */}
      <section className="section-padding" style={{ backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
        <div className="container">
          <div className="section-header">
            <span className="badge-military">THE FOUNDATION</span>
            <h2>Our Core Values</h2>
            <p>The timeless principles that govern our academy life, training modules, and cadet conduct.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className="defense-card" style={{ textAlign: 'center', padding: '24px 18px' }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    background: '#e6f6fd',
                    color: '#109CD9',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '14px'
                  }}>
                    <Icon size={24} />
                  </div>
                  <h4 style={{ fontSize: '17px', fontWeight: '700', color: '#1e293b', marginBottom: '6px' }}>{v.name}</h4>
                  <p style={{ fontSize: '13px', color: '#64748b' }}>{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Team (Col. R. Sharma, Maj. P. Singh, Dr. A. Verma) */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff', borderTop: '1px solid #e2e8f0' }}>
        <div className="container">
          <div className="section-header">
            <span className="badge-gold">EX-ARMED FORCES PANEL</span>
            <h2>Our Directorate &amp; Faculty</h2>
            <p>
              Trained by veterans who have evaluated thousands of aspirants at SSB Selection Boards across India.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px' }}>
            {team.map((member, i) => (
              <div key={i} className="team-card">
                <div className="team-card-img">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="team-card-body">
                  <h3 className="team-card-name">{member.name}</h3>
                  <div className="team-card-role">{member.role}</div>
                  <div className="team-card-rank">{member.rank}</div>
                  <p style={{ fontSize: '13px', color: '#64748b', marginTop: '10px', lineHeight: '1.5' }}>
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link href="/enquiry" className="btn btn-primary" style={{ padding: '12px 28px' }}>
              <span>Join Next Batch Under Our Mentors</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
