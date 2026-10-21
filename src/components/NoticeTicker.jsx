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
    >
      <div className="container ticker-container">
        
        {/* Left Side: Badge + Dynamic Rotating Notice */}
        <div className="ticker-left">
          
          {/* Badge */}
          <div className={`ticker-badge ${isUrgent ? 'urgent' : 'normal'}`}>
            <Bell size={11} />
            <span className="ticker-badge-text-full">{isUrgent ? 'FLASH UPDATE' : 'OFFICIAL NOTICE'}</span>
            <span className="ticker-badge-text-mobile">{isUrgent ? 'ALERT' : 'NOTICE'}</span>
          </div>

          {/* Notice Content (Clickable) */}
          <div className="ticker-text-wrapper">
            <a
              href={targetUrl}
              target={isExternalOrPdf ? '_blank' : '_self'}
              rel="noreferrer"
              className="ticker-link"
              title={currentNotice.title}
            >
              <span className="ticker-category-tag">
                [{currentNotice.category || 'Announcement'}]:
              </span>
              <span className="ticker-title">
                {currentNotice.title}
              </span>
              {isExternalOrPdf && (
                <ExternalLink size={12} className="ticker-ext-icon" />
              )}
            </a>
          </div>

        </div>

        {/* Right Side: Index Counter + Controls + All Notices Link */}
        <div className="ticker-right">
          
          {/* Prev/Next arrows if multiple notices */}
          {notices.length > 1 && (
            <div className="ticker-controls">
              <button
                type="button"
                onClick={handlePrev}
                className="ticker-nav-btn"
                title="Previous Notice"
                aria-label="Previous Notice"
              >
                <ChevronLeft size={13} />
              </button>
              <span className="ticker-counter">
                {currentIndex + 1}/{notices.length}
              </span>
              <button
                type="button"
                onClick={handleNext}
                className="ticker-nav-btn"
                title="Next Notice"
                aria-label="Next Notice"
              >
                <ChevronRight size={13} />
              </button>
            </div>
          )}

          <Link
            href="/notices"
            className="ticker-all-link"
            title="View all official notices"
          >
            <span className="ticker-all-text">All Notices</span>
            <ArrowRight size={13} />
          </Link>
        </div>

      </div>
    </div>
  );
}
