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

  const categories = [
    'All',
    'Training Sessions',
    'Events',
    'Classroom',
    'SSB Activities'
  ];

  useEffect(() => {
    fetchGallery().then((data) => {
      setItems(data);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  const filtered = selectedCategory === 'All'
    ? items
    : items.filter(i => {
        if (selectedCategory === 'Training Sessions') return i.category?.includes('Ground') || i.category?.includes('Physical');
        if (selectedCategory === 'Events') return i.category?.includes('Recommended') || i.category?.includes('Cadet');
        if (selectedCategory === 'Classroom') return i.category?.includes('Classroom');
        if (selectedCategory === 'SSB Activities') return i.category?.includes('SSB') || i.category?.includes('Mock');
        return true;
      });

  return (
    <>
      {/* Banner */}
      <section className="page-header-banner">
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/">Home</Link> &gt; <span>Gallery</span>
          </div>
          <h1>Academy Photo <span>Gallery</span></h1>
          <p>
            Experience life at Shaurya Defence Academy: full-scale obstacle grounds, mock interviews, and celebrations.
          </p>
        </div>
      </section>

      {/* Categories & Grid */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          {/* Category Tabs */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '36px', flexWrap: 'wrap' }}>
            {categories.map((cat) => (
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
                    borderRadius: '10px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    boxShadow: 'var(--shadow-sm)',
                    transition: 'transform 0.2s, box-shadow 0.2s'
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
                  <div style={{ height: '210px', overflow: 'hidden' }}>
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <div style={{ padding: '14px' }}>
                    <span className="badge-military" style={{ fontSize: '10px', marginBottom: '4px' }}>
                      {item.category}
                    </span>
                    <h4 style={{ fontSize: '14px', fontWeight: '700', color: '#1e293b', marginTop: '4px' }}>
                      {item.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          onClick={() => setActivePhoto(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            backdropFilter: 'blur(6px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 300,
            padding: '20px'
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '800px',
              width: '100%',
              backgroundColor: '#ffffff',
              borderRadius: '14px',
              overflow: 'hidden',
              boxShadow: '0 25px 50px rgba(0,0,0,0.5)',
              position: 'relative'
            }}
          >
            <button
              onClick={() => setActivePhoto(null)}
              style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                border: 'none',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
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

            <div style={{ maxHeight: '480px', backgroundColor: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img
                src={activePhoto.imageUrl}
                alt={activePhoto.title}
                style={{ width: '100%', maxHeight: '480px', objectFit: 'contain' }}
              />
            </div>

            <div style={{ padding: '20px' }}>
              <span className="badge-military" style={{ fontSize: '11px', marginBottom: '6px' }}>
                {activePhoto.category}
              </span>
              <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#1e293b', marginTop: '4px' }}>
                {activePhoto.title}
              </h3>
              {activePhoto.caption && (
                <p style={{ fontSize: '13px', color: '#64748b', marginTop: '6px' }}>
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
