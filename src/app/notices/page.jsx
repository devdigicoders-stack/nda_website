'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Bell, AlertTriangle, ExternalLink, Calendar, Search, ArrowRight } from 'lucide-react';
import { fetchNotices } from '../../lib/api';

export default function NoticesPage() {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [search, setSearch] = useState('');

  const categories = ['All', 'Exam Notification', 'SSB Call Letter', 'New Batch Alert', 'Result'];

  useEffect(() => {
    fetchNotices().then((data) => {
      setNotices(data);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  const filtered = notices.filter((n) => {
    const matchesCat = selectedCategory === 'All' || n.category === selectedCategory;
    const matchesSearch = n.title?.toLowerCase().includes(search.toLowerCase()) ||
                          n.description?.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <>
      {/* Banner */}
      <section className="page-header-banner">
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/">Home</Link> &gt; <span>Notices &amp; Batches</span>
          </div>
          <h1>Notices &amp; <span>Batches</span></h1>
          <p>
            Stay updated with official UPSC notifications, SSB call letter updates, and upcoming batch dates.
          </p>
        </div>
      </section>

      {/* Notices Content */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          {/* Controls */}
          <div className="notices-controls">
            <div className="notices-filter-scroll">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className="notices-filter-btn"
                  style={{
                    padding: '8px 16px',
                    borderRadius: '20px',
                    fontSize: '13px',
                    fontWeight: '700',
                    cursor: 'pointer',
                    border: '1px solid',
                    backgroundColor: selectedCategory === cat ? '#109CD9' : '#f8fafc',
                    borderColor: selectedCategory === cat ? '#109CD9' : '#cbd5e1',
                    color: selectedCategory === cat ? '#ffffff' : '#475569',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="notices-search-wrapper">
              <input
                type="text"
                placeholder="Search notices..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                  padding: '9px 14px',
                  borderRadius: '8px',
                  background: '#ffffff',
                  border: '1px solid #cbd5e1',
                  color: '#0f172a',
                  fontSize: '13px',
                  width: '100%'
                }}
              />
            </div>
          </div>

          {/* Notice List */}
          {loading ? (
            <div style={{ textAlign: 'center', padding: '60px 0', color: '#64748b' }}>Loading announcements...</div>
          ) : filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 0', color: '#64748b' }}>No notices found.</div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {filtered.map((notice) => (
                <div key={notice._id} className="notice-card-item">
                  <div className="notice-card-main">
                    <div className="notice-date-box">
                      <span className="day">{notice.date.split(' ')[0]}</span>
                      <span className="month">{notice.date.split(' ')[1] || 'OCT'}</span>
                    </div>

                    <div className="notice-card-content">
                      <div className="notice-meta-tags" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                        <span className="badge-military" style={{ fontSize: '10px' }}>
                          {notice.category}
                        </span>
                        {notice.isUrgent && (
                          <span style={{
                            backgroundColor: '#fee2e2',
                            color: '#dc2626',
                            fontSize: '10px',
                            fontWeight: '800',
                            padding: '2px 6px',
                            borderRadius: '4px'
                          }}>
                            NEW
                          </span>
                        )}
                      </div>

                      <h3 className="notice-card-title" style={{ fontSize: '16px', fontWeight: '700', color: '#1e293b' }}>
                        {notice.title}
                      </h3>

                      {notice.description && (
                        <p className="notice-card-desc" style={{ fontSize: '13px', color: '#64748b', marginTop: '2px', lineHeight: '1.5' }}>
                          {notice.description}
                        </p>
                      )}
                    </div>
                  </div>

                  {notice.linkUrl && (
                    <div className="notice-card-action">
                      <a
                        href={notice.linkUrl}
                        target={notice.linkUrl.startsWith('http') ? '_blank' : '_self'}
                        rel="noreferrer"
                        className="notice-action-btn"
                        style={{
                          backgroundColor: notice.linkUrl.toLowerCase().includes('.pdf')
                            ? '#fef2f2'
                            : notice.linkUrl.match(/\.(jpeg|jpg|png|webp|gif)/i)
                            ? '#f0fdf4'
                            : '#eff6ff',
                          color: notice.linkUrl.toLowerCase().includes('.pdf')
                            ? '#b91c1c'
                            : notice.linkUrl.match(/\.(jpeg|jpg|png|webp|gif)/i)
                            ? '#15803d'
                            : '#1d4ed8',
                          borderColor: notice.linkUrl.toLowerCase().includes('.pdf')
                            ? '#fecaca'
                            : notice.linkUrl.match(/\.(jpeg|jpg|png|webp|gif)/i)
                            ? '#bbf7d0'
                            : '#bfdbfe'
                        }}
                      >
                        <span>
                          {notice.linkUrl.toLowerCase().includes('.pdf')
                            ? '📄 Download PDF'
                            : notice.linkUrl.match(/\.(jpeg|jpg|png|webp|gif)/i)
                            ? '🖼️ View Circular'
                            : 'Read Circular →'}
                        </span>
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
