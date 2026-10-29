'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Award, Star, ArrowRight, ZoomIn, X, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { fetchCandidates } from '../../lib/api';

export default function SelectionsPage() {
  const [cadets, setCadets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCadet, setActiveCadet] = useState(null);

  useEffect(() => {
    fetchCandidates()
      .then((data) => {
        setCadets(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <>
      {/* Banner */}
      <section className="page-header-banner">
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/">Home</Link> &gt; <span>Our Selected Cadets</span>
          </div>
          <h1>Our Selected <span>Cadets</span></h1>
          <p>
            Proud warriors of ASTRA SSB who recommended from various SSB boards and earned the prestigious uniform.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff', minHeight: '60vh' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 40px auto' }}>
            <span style={{ fontSize: '13px', fontWeight: '800', color: '#d97706', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              WALL OF HONOUR &bull; HALL OF FAME
            </span>
            <h2 style={{ fontSize: '28px', fontWeight: '900', color: '#0f172a', margin: '8px 0 12px' }}>
              Every Recommendation Tells A Story Of Hard Work &amp; Guidance
            </h2>
            <p style={{ fontSize: '15px', color: '#64748b', lineHeight: '1.6' }}>
              Trained under DIPR qualified Ex-Assessors at ASTRA SSB, Lucknow.
            </p>
          </div>

          {loading ? (
            <div style={{ textAlign: 'center', padding: '60px 0', color: '#64748b' }}>
              Loading selected cadets...
            </div>
          ) : cadets.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 0', color: '#64748b' }}>
              <Award size={48} color="#eab308" style={{ margin: '0 auto 16px' }} />
              <h3>Cadet records being updated</h3>
              <p>New recommended candidates are being added from the Admin panel.</p>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '20px' }}>
              {cadets.map((cadet) => (
                <div
                  key={cadet._id}
                  onClick={() => setActiveCadet(cadet)}
                  style={{
                    backgroundColor: '#070a0f',
                    border: '1px solid #e2e8f0',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    boxShadow: 'var(--shadow-sm)',
                    transition: 'all 0.25s ease',
                    height: '280px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
                    e.currentTarget.style.boxShadow = '0 12px 28px rgba(0,0,0,0.18)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                  }}
                >
                  <img
                    src={cadet.photoUrl || cadet.imageUrl}
                    alt={cadet.name || 'Selected Candidate'}
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  />
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '8px 12px',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    color: '#ffffff',
                    fontSize: '12px',
                    fontWeight: '700'
                  }}>
                    <ZoomIn size={14} />
                    <span>Click to View</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeCadet && (
        <div
          onClick={() => setActiveCadet(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.92)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: '20px'
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: '#161f30',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '16px',
              maxWidth: '650px',
              width: '100%',
              overflow: 'hidden',
              boxShadow: '0 25px 50px rgba(0,0,0,0.7)',
              position: 'relative'
            }}
          >
            <button
              onClick={() => setActiveCadet(null)}
              style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                backgroundColor: 'rgba(0, 0, 0, 0.65)',
                border: 'none',
                borderRadius: '50%',
                width: '34px',
                height: '34px',
                color: '#fff',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10
              }}
            >
              <X size={18} />
            </button>

            <div style={{ maxHeight: '460px', backgroundColor: '#070a0f', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img
                src={activeCadet.photoUrl || activeCadet.imageUrl}
                alt={activeCadet.name || activeCadet.title}
                style={{ width: '100%', maxHeight: '440px', objectFit: 'contain' }}
              />
            </div>

            <div style={{ padding: '22px' }}>
              <div style={{ display: 'inline-block', backgroundColor: 'rgba(234, 179, 8, 0.2)', color: '#facc15', border: '1px solid rgba(234, 179, 8, 0.4)', padding: '4px 10px', borderRadius: '6px', fontSize: '11px', fontWeight: '800', marginBottom: '8px' }}>
                ASTRA SSB RECOMMENDED CANDIDATE
              </div>
              <h2 style={{ fontSize: '20px', fontWeight: '800', color: '#f8fafc', margin: '4px 0 6px 0' }}>
                {activeCadet.name || activeCadet.title}
              </h2>
              <div style={{ fontSize: '14px', color: '#38bdf8', fontWeight: '700', marginBottom: '6px' }}>
                {activeCadet.entry} {activeCadet.rankOrAir ? `• ${activeCadet.rankOrAir}` : ''}
              </div>
              {activeCadet.ssbBoard && (
                <div style={{ fontSize: '13px', color: '#94a3b8', marginBottom: '8px' }}>
                  Board: {activeCadet.ssbBoard} {activeCadet.chestNo ? `| Chest #${activeCadet.chestNo}` : ''}
                </div>
              )}
              {(activeCadet.testimonial || activeCadet.caption) && (
                <p style={{ fontSize: '14px', color: '#cbd5e1', lineHeight: '1.6', margin: 0 }}>
                  "{activeCadet.testimonial || activeCadet.caption}"
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
