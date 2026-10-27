'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { 
  CheckCircle, 
  ArrowRight, 
  Calendar, 
  Clock, 
  MapPin,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { fetchCourses } from '../../lib/api';
import VideoSection from '../../components/VideoSection';

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [backendCourses, setBackendCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  // Exact 3 Core Courses default data with thumbnails
  const defaultCourses = [
    {
      id: 'offline',
      title: 'Offline Mode SSB',
      subtitle: '10-Day Intensive SSB Preparation Programme on Ground',
      duration: '10-Day Intensive',
      category: 'Offline Mode SSB',
      mode: 'Offline Ground & Classroom',
      location: 'Krishna Nagar, Lucknow',
      badge: '10-Day Intensive',
      image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
      description: 'Train under experienced DIPR qualified Ex-Assessors through a result oriented, intensive training programme designed for maximum learning in minimum time.',
      points: [
        'PPDT & Stage I Preparation – Story writing, narration, and many live group discussion practices.',
        'PIQ Analysis – Personalised interview questions based on your profile, background, and experiences.',
        'Mock Interviews – Realistic one-to-one interview sessions with expert feedback.',
        'Psychology Tests – Practice for TAT, WAT, SRT and SDT.',
        'GTO Guidance – Practice of GD, GPE, Lecturette and live practical GTO tasks.',
        'Defence Awareness – Updates on current affairs, military affairs and national issues.',
        'Performance Analysis – Detailed feedback to identify your strengths and areas for improvement.',
        'Personal Mentorship – Individual guidance, doubt-solving and progress tracking throughout the programme.'
      ],
      slogan: 'BE WITH US MIRACLES WILL HAPPEN.'
    },
    {
      id: 'online',
      title: 'Online Mode SSB',
      subtitle: '20-Day Intensive SSB Preparation Online Programme',
      duration: '20-Day Intensive',
      category: 'Online Mode SSB',
      mode: 'Live Virtual Classroom',
      location: 'Online Interactive',
      badge: '20-Day Intensive',
      image: 'https://images.unsplash.com/photo-1579208575657-c595a05383b7?auto=format&fit=crop&w=800&q=80',
      description: 'Comprehensive 20-day online interactive training designed for aspirants preparing from anywhere in India.',
      points: [
        'PPDT/STAGE I Preparation – Story writing, narration and group discussion practice.',
        'PIQ Analysis – Personalised interview questions based on your profile and experiences.',
        'Mock Interviews – Realistic one-to-one interview simulations with expert feedback.',
        'Psychology Tests – Practice for TAT, WAT, SRT and SDT.',
        'GTO Guidance – GD, GPE, Lecturette and GTO task strategies.',
        'Defence Awareness – Regular updates on current affairs, military affairs and national security.',
        'Performance Analysis – Detailed feedback to identify strengths and areas for improvement.',
        'Personal Mentorship – Individual guidance, doubt-solving and progress tracking.'
      ],
      slogan: 'BE WITH US MIRACLE WILL HAPPEN.'
    },
    {
      id: 'written',
      title: 'NDA & CDS Written',
      subtitle: 'Comprehensive Mathematics, English & General Knowledge Programme',
      duration: 'Target Batch 2026',
      category: 'NDA & CDS Written',
      mode: 'Classroom & Test Series',
      location: 'Krishna Nagar, Lucknow',
      badge: 'Target 2026',
      image: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80',
      description: 'Master the UPSC NDA & CDS written exam with shortcut mathematical formulas, intensive GAT coverage and full-length OMR mocks.',
      points: [
        'Complete UPSC Syllabus Coverage for Mathematics & GAT.',
        'Daily 200+ Practice MCQs & Short-cut Tricks for Mathematics.',
        'Weekly 900-Marks OMR-based Full Length Mock Exams.',
        'Daily updates on current affairs, military affairs and national security.',
        'Free SSB Screening, OIR drills and personality orientation included.',
        'Personal mentorship and performance analysis.'
      ],
      slogan: 'BE WITH US MIRACLES WILL HAPPEN.'
    }
  ];

  useEffect(() => {
    fetchCourses()
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          // Map backend course objects
          const formatted = data.map((item, idx) => {
            const cat = item.category || 'Offline Mode SSB';
            const isOnline = cat.toLowerCase().includes('online');
            const isWritten = cat.toLowerCase().includes('written') || cat.toLowerCase().includes('nda');
            
            // Standardize category key
            let standardCat = 'Offline Mode SSB';
            if (isOnline) standardCat = 'Online Mode SSB';
            else if (isWritten) standardCat = 'NDA & CDS Written';

            // Fallback image if item has no image
            const defaultImg = isOnline 
              ? 'https://images.unsplash.com/photo-1579208575657-c595a05383b7?auto=format&fit=crop&w=800&q=80'
              : isWritten 
                ? 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80'
                : 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80';

            return {
              id: item._id || String(idx),
              title: item.title,
              subtitle: item.subtitle || item.description?.slice(0, 80) + '...',
              duration: item.duration || 'Flexible',
              category: standardCat,
              mode: isOnline ? 'Live Virtual Classroom' : 'Offline Ground & Classroom',
              location: isOnline ? 'Online Interactive' : 'Krishna Nagar, Lucknow',
              badge: item.badge || item.duration || 'Featured',
              image: item.image || defaultImg,
              description: item.description,
              points: Array.isArray(item.highlights) && item.highlights.length > 0
                ? item.highlights
                : [
                    'Personal mentorship and performance tracking.',
                    'DIPR qualified Ex-Assessors guidance.',
                    'Realistic interview and test simulations.',
                    'Defence awareness & current affairs.'
                  ],
              slogan: 'BE WITH US MIRACLES WILL HAPPEN.'
            };
          });
          setBackendCourses(formatted);
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const displayedList = backendCourses.length > 0 ? backendCourses : defaultCourses;

  const filtered = selectedCategory === 'All'
    ? displayedList
    : displayedList.filter(c => c.category === selectedCategory);

  return (
    <>
      <section className="page-header-banner">
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/">Home</Link> &gt; <span>Courses</span>
          </div>
          <h1>ASTRA SSB <span>Training Programmes</span></h1>
          <p>
            Offline Mode SSB &bull; Online Mode SSB &bull; NDA &amp; CDS Written
          </p>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          {/* Category filter */}
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginBottom: '36px', flexWrap: 'wrap' }}>
            {['All', 'Offline Mode SSB', 'Online Mode SSB', 'NDA & CDS Written'].map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '8px 20px',
                  borderRadius: '20px',
                  border: selectedCategory === cat ? '2px solid #109cd9' : '1px solid #e2e8f0',
                  backgroundColor: selectedCategory === cat ? '#109cd9' : '#ffffff',
                  color: selectedCategory === cat ? '#ffffff' : '#475569',
                  fontWeight: '700',
                  fontSize: '13px',
                  cursor: 'pointer'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px'
          }}>
            {filtered.map((c) => (
              <div
                key={c.id}
                style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '16px',
                  padding: '32px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.04)'
                }}
              >
                <div>
                  {/* Course Thumbnail Image (Clean without overlay badges) */}
                  {c.image && (
                    <div style={{
                      position: 'relative',
                      height: '180px',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      marginBottom: '16px'
                    }}>
                      <img
                        src={c.image}
                        alt={c.title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover'
                        }}
                      />
                    </div>
                  )}

                  {/* Badges neatly placed below thumbnail */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '14px' }}>
                    <div style={{
                      display: 'inline-flex',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      backgroundColor: '#e6f6fd',
                      color: '#109cd9',
                      fontSize: '11px',
                      fontWeight: '800',
                      textTransform: 'uppercase'
                    }}>
                      {c.mode}
                    </div>

                    {c.badge && (
                      <div style={{
                        display: 'inline-flex',
                        padding: '4px 10px',
                        borderRadius: '6px',
                        backgroundColor: '#fef3c7',
                        color: '#b45309',
                        fontSize: '11px',
                        fontWeight: '800',
                        textTransform: 'uppercase'
                      }}>
                        {c.badge}
                      </div>
                    )}
                  </div>

                  <h2 style={{ fontSize: '24px', fontWeight: '800', color: '#0f172a', marginBottom: '8px' }}>
                    {c.title}
                  </h2>

                  <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '18px', lineHeight: '1.5' }}>
                    {c.subtitle}
                  </p>

                  <div style={{
                    padding: '10px 14px',
                    backgroundColor: '#f8fafc',
                    borderRadius: '8px',
                    fontSize: '12px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '20px',
                    color: '#475569'
                  }}>
                    <span>Duration: <strong style={{ color: '#0f172a' }}>{c.duration}</strong></span>
                    <span>Location: <strong style={{ color: '#0f172a' }}>{c.location}</strong></span>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
                    {c.points.map((p, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px', color: '#334155', lineHeight: '1.5' }}>
                        <CheckCircle size={15} color="#109cd9" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{p}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div style={{
                    fontSize: '12px',
                    fontWeight: '800',
                    color: '#d97706',
                    textAlign: 'center',
                    marginBottom: '14px'
                  }}>
                    ★ {c.slogan}
                  </div>

                  <Link
                    href={`/enquiry?course=${encodeURIComponent(c.title)}`}
                    className="btn btn-primary"
                    style={{ width: '100%', justifyContent: 'center', padding: '11px 20px', fontSize: '14px' }}
                  >
                    <span>Register For This Course</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Autoplaying Practical Ground Video Section */}
      <VideoSection 
        badge="COURSE PRACTICAL OVERVIEW"
        title="See How We Train Future Officers"
        subtitle="Watch actual candidates navigate the obstacle course and receive personal feedback from Ex-Assessors."
      />
    </>
  );
}
