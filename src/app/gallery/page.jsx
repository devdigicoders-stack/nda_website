'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Image as ImageIcon, X, ZoomIn, Sparkles } from 'lucide-react';
import { fetchGallery } from '../../lib/api';

export default function GalleryPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activePhoto, setActivePhoto] = useState(null);

  // Dynamic categories extracted from live uploaded photos
  const dynamicCategories = [
    'All',
    ...Array.from(new Set(items.map(i => i.category).filter(Boolean)))
  ];

  useEffect(() => {
    fetchGallery().then((data) => {
      setItems(data);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  const filtered = selectedCategory === 'All'
    ? items
    : items.filter(i => (i.category || '').toLowerCase() === selectedCategory.toLowerCase());

  return (
    <>
      {/* Banner */}
      <section className="page-header-banner">
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/">Home</Link> &gt; <span>Ground &amp; Training Gallery</span>
          </div>
          <h1>Ground &amp; <span>Training Gallery</span></h1>
          <p>
            Experience life at ASTRA SSB: full-scale obstacle grounds, mock interviews, and celebrations.
          </p>
        </div>
      </section>

      {/* Categories & Grid */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          {/* Category Tabs */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '36px', flexWrap: 'wrap' }}>
            {dynamicCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '8px 18px',
                  borderRadius: '20px',
                  fontSize: '13px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  border: '1px solid',
                  transition: 'all 0.15s ease',
                  backgroundColor: selectedCategory === cat ? '#109CD9' : '#f8fafc',
                  borderColor: selectedCategory === cat ? '#109CD9' : '#e2e8f0',
                  color: selectedCategory === cat ? '#ffffff' : '#475569'
                }}
              >
                {cat === 'All' ? '#All' : cat}
              </button>
            ))}
          </div>

          {loading ? (
            <div style={{ textAlign: 'center', padding: '60px 0', color: '#64748b' }}>
              Loading academy photos...
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
              {filtered.map((item) => (
                <div
                  key={item._id}
                  onClick={() => setActivePhoto(item)}
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    boxShadow: 'var(--shadow-sm)',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                  }}
                >
                  {/* Full Image Container (No cropping) */}
                  <div style={{ height: '220px', overflow: 'hidden', backgroundColor: '#0f172a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    />
                  </div>
                  <div style={{ padding: '16px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <span className="badge-military" style={{ fontSize: '11px', marginBottom: '6px' }}>
                        {item.category}
                      </span>
                      <h4 style={{ fontSize: '15px', fontWeight: '800', color: '#1e293b', marginTop: '4px' }}>
                        {item.title}
                      </h4>
                    </div>
                    <div style={{ fontSize: '12px', color: '#109CD9', fontWeight: '700', marginTop: '10px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <ZoomIn size={14} />
                      <span>Click to View Full Photo</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal (Full Uncut Photo View) */}
      {activePhoto && (
        <div
          onClick={() => setActivePhoto(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
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
              maxWidth: '900px',
              width: '100%',
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 25px 60px rgba(0,0,0,0.6)',
              position: 'relative'
            }}
          >
            <button
              onClick={() => setActivePhoto(null)}
              style={{
                position: 'absolute',
                top: '14px',
                right: '14px',
                backgroundColor: 'rgba(0, 0, 0, 0.65)',
                border: 'none',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                color: '#fff',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10,
                transition: 'background 0.2s'
              }}
              title="Close Full Photo"
            >
              <X size={20} />
            </button>

            {/* FULL PHOTO CONTAINER (NO CLIPPING, NO CROPPING) */}
            <div style={{ maxHeight: '560px', backgroundColor: '#020617', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px' }}>
              <img
                src={activePhoto.imageUrl}
                alt={activePhoto.title}
                style={{ width: '100%', maxHeight: '540px', objectFit: 'contain', display: 'block' }}
              />
            </div>

            <div style={{ padding: '20px 24px' }}>
              <span className="badge-military" style={{ fontSize: '11px', marginBottom: '8px' }}>
                {activePhoto.category}
              </span>
              <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#1e293b', marginTop: '4px' }}>
                {activePhoto.title}
              </h3>
              {activePhoto.caption && (
                <p style={{ fontSize: '14px', color: '#64748b', marginTop: '8px', lineHeight: '1.5' }}>
                  {activePhoto.caption}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
