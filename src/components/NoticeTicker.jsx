'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight, Bell, ExternalLink, FileText } from 'lucide-react';
import { fetchNotices } from '../lib/api';

export default function NoticeTicker() {
  const [notices, setNotices] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const loadNotices = () => {
    fetchNotices()
      .then((data) => {
        if (data && data.length > 0) {
          // Sort newest first
          const sorted = [...data].sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
          setNotices(sorted);
        }
      })
      .catch((err) => console.error('Error fetching notices for ticker:', err));
  };

  useEffect(() => {
    loadNotices();
    // Periodically refresh notices every 30 seconds so new notices appear dynamically
    const pollInterval = setInterval(loadNotices, 30000);
    return () => clearInterval(pollInterval);
  }, []);

  // Auto-rotate notices every 4.5 seconds unless user hovers
  useEffect(() => {
    if (!notices || notices.length <= 1 || isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % notices.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [notices, isPaused]);

  if (!notices || notices.length === 0) return null;

  const currentNotice = notices[currentIndex] || notices[0];
  const isUrgent = Boolean(currentNotice.isUrgent);

  const handlePrev = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + notices.length) % notices.length);
  };

  const handleNext = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % notices.length);
  };

  // Determine notice link: custom linkUrl or default to /notices
  const targetUrl = currentNotice.linkUrl && currentNotice.linkUrl !== '#' 
    ? currentNotice.linkUrl 
    : '/notices';
  const isExternalOrPdf = targetUrl.startsWith('http') || targetUrl.endsWith('.pdf');

  return (
    <div 
      className="ticker-bar"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      style={{
        background: '#0b0f17',
        borderBottom: '1px solid #1e293b',
        padding: '7px 0',
        color: '#ffffff',
        fontSize: '13px'
      }}
    >
      <div className="container ticker-content" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '14px' }}>
        
        {/* Left Side: Badge + Dynamic Rotating Notice */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1, minWidth: 0, overflow: 'hidden' }}>
          
          {/* Badge */}
          <div 
            style={{
              backgroundColor: isUrgent ? '#dc2626' : '#164e24',
              color: '#ffffff',
              padding: '3px 8px',
              borderRadius: '4px',
              fontSize: '11px',
              fontWeight: '800',
              letterSpacing: '0.04em',
              whiteSpace: 'nowrap',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              boxShadow: isUrgent ? '0 0 10px rgba(220, 38, 38, 0.4)' : 'none'
            }}
          >
            <Bell size={11} />
            <span>{isUrgent ? 'FLASH UPDATE' : 'OFFICIAL NOTICE'}</span>
          </div>

          {/* Notice Content (Clickable) */}
          <div style={{ flex: 1, minWidth: 0, overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
            <a
              href={targetUrl}
              target={isExternalOrPdf ? '_blank' : '_self'}
              rel="noreferrer"
              style={{
                textDecoration: 'none',
                color: '#e2e8f0',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                maxWidth: '100%',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}
              title={currentNotice.title}
            >
              <span style={{ color: '#eab308', fontWeight: '700', flexShrink: 0 }}>
                [{currentNotice.category || 'Announcement'} {currentNotice.date ? `• ${currentNotice.date}` : ''}]:
              </span>
              <span 
                style={{ 
                  color: '#f8fafc', 
                  overflow: 'hidden', 
                  textOverflow: 'ellipsis',
                  transition: 'color 0.15s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.color = '#38bdf8'}
                onMouseOut={(e) => e.currentTarget.style.color = '#f8fafc'}
              >
                {currentNotice.title}
              </span>
              {isExternalOrPdf && (
                <ExternalLink size={12} color="#94a3b8" style={{ flexShrink: 0 }} />
              )}
            </a>
          </div>

        </div>

        {/* Right Side: Index Counter + Controls + All Notices Link */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
          
          {/* Prev/Next arrows if multiple notices */}
          {notices.length > 1 && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', background: 'rgba(255,255,255,0.06)', borderRadius: '4px', padding: '1px 4px' }}>
              <button
                type="button"
                onClick={handlePrev}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#94a3b8',
                  cursor: 'pointer',
                  padding: '2px',
                  display: 'flex',
                  alignItems: 'center'
                }}
                title="Previous Notice"
              >
                <ChevronLeft size={14} />
              </button>
              <span style={{ fontSize: '11px', color: '#cbd5e1', padding: '0 4px', fontWeight: '600' }}>
                {currentIndex + 1}/{notices.length}
              </span>
              <button
                type="button"
                onClick={handleNext}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#94a3b8',
                  cursor: 'pointer',
                  padding: '2px',
                  display: 'flex',
                  alignItems: 'center'
                }}
                title="Next Notice"
              >
                <ChevronRight size={14} />
              </button>
            </div>
          )}

          <Link
            href="/notices"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              fontSize: '12px',
              color: '#facc15',
              fontWeight: '700',
              textDecoration: 'none',
              whiteSpace: 'nowrap'
            }}
          >
            <span>All Notices</span>
            <ArrowRight size={13} />
          </Link>
        </div>

      </div>
    </div>
  );
}
