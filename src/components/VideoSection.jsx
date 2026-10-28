import React from 'react';
import { Play, Sparkles } from 'lucide-react';

export default function VideoSection({ 
  title = "Experience Astra SSB Training in Action", 
  subtitle = "Watch our GTO ground obstacle drills, mock interview sessions, and screening strategies led by DIPR-trained mentors.",
  badge = "WATCH TRAINING SESSIONS"
}) {
  const videos = [
    {
      id: '-8Upv23u2ls',
      title: 'Astra SSB Ground & GTO Obstacle Training',
      caption: 'Live Demonstration & Officer Qualities Guidance',
      tag: 'GTO & SSB Ground'
    },
    {
      id: 'QJ2W1ddg27I',
      title: 'SSB Interview Tactics & Preparation Strategy',
      caption: 'Stage-1 Screening & Psychological Guidance',
      tag: 'Interview & Psych Tests'
    }
  ];

  return (
    <section className="section-padding" style={{ backgroundColor: '#0f172a', color: '#ffffff', borderTop: '1px solid #1e293b' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 40px' }}>
          {badge && (
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 14px',
              borderRadius: '20px',
              backgroundColor: 'rgba(234, 179, 8, 0.15)',
              border: '1px solid rgba(234, 179, 8, 0.3)',
              color: '#facc15',
              fontSize: '11px',
              fontWeight: '800',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '14px'
            }}>
              <Sparkles size={14} />
              <span>{badge}</span>
            </div>
          )}

          <h2 style={{ fontSize: '32px', fontWeight: '900', color: '#ffffff', lineHeight: '1.25', marginBottom: '14px' }}>
            {title}
          </h2>

          <p style={{ fontSize: '15px', color: '#94a3b8', lineHeight: '1.7' }}>
            {subtitle}
          </p>
        </div>

        {/* 2 Video Grid with Autoplay & Loop */}
        <div className="video-section-grid">
          {videos.map((vid, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: '#161f30',
                border: '1px solid #334155',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 12px 30px rgba(0,0,0,0.4)',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {/* Responsive 16:9 Iframe Container */}
              <div style={{
                position: 'relative',
                paddingTop: '56.25%', // 16:9 Aspect Ratio
                width: '100%',
                backgroundColor: '#000000'
              }}>
                <iframe
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: 'none'
                  }}
                  src={`https://www.youtube.com/embed/${vid.id}?autoplay=1&mute=1&loop=1&playlist=${vid.id}&playsinline=1&rel=0&modestbranding=1`}
                  title={vid.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              {/* Video Info Card */}
              <div style={{ padding: '20px 22px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', marginBottom: '8px' }}>
                    <span style={{
                      display: 'inline-block',
                      padding: '3px 10px',
                      borderRadius: '4px',
                      backgroundColor: 'rgba(16, 156, 217, 0.2)',
                      color: '#38bdf8',
                      fontSize: '11px',
                      fontWeight: '800',
                      textTransform: 'uppercase'
                    }}>
                      {vid.tag}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11px', color: '#22c55e', fontWeight: '700' }}>
                      <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#22c55e', display: 'inline-block' }}></span>
                      Auto-playing
                    </span>
                  </div>

                  <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#f8fafc', lineHeight: '1.35', marginBottom: '6px' }}>
                    {vid.title}
                  </h3>

                  <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: '1.5' }}>
                    {vid.caption}
                  </p>
                </div>

                <div style={{
                  borderTop: '1px solid rgba(255,255,255,0.08)',
                  paddingTop: '12px',
                  marginTop: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <a
                    href={`https://youtu.be/${vid.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      color: '#facc15',
                      fontSize: '12px',
                      fontWeight: '700',
                      textDecoration: 'none'
                    }}
                  >
                    <Play size={13} fill="#facc15" />
                    <span>Watch on YouTube</span>
                  </a>
                  <span style={{ fontSize: '11px', color: '#64748b' }}>Astra SSB Lucknow</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
