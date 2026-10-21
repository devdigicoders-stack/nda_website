'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { BookOpen, User, Clock, ArrowRight, Search, Calendar, Tag, ShieldCheck, X } from 'lucide-react';
import { fetchBlogs } from '../../lib/api';

export default function BlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [search, setSearch] = useState('');

  const categories = [
    'All',
    'SSB Interview Guide',
    'NDA Written Strategy',
    'Physical & Medical',
    'Current Affairs & Defense'
  ];

  useEffect(() => {
    fetchBlogs().then((data) => {
      setBlogs(data || []);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  const filtered = blogs.filter((b) => {
    const matchesCat = selectedCategory === 'All' || b.category === selectedCategory;
    const q = search.toLowerCase().trim();
    const matchesSearch = !q || 
      b.title?.toLowerCase().includes(q) ||
      b.summary?.toLowerCase().includes(q) ||
      (Array.isArray(b.tags) && b.tags.some(t => t.toLowerCase().includes(q)));
    return matchesCat && matchesSearch;
  });

  return (
    <>
      {/* Banner */}
      <section className="page-header-banner">
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/">Home</Link> &gt; <span>Blog</span>
          </div>
          <h1>Defense <span>Articles &amp; SSB Guides</span></h1>
          <p>
            Field-tested insights, tactical SSB strategies, and officer qualities written by former board assessors and veteran defence educators.
          </p>
        </div>
      </section>

      {/* Blogs Content Section */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">

          {/* Search Bar & Category Filters */}
          <div style={{ maxWidth: '820px', margin: '0 auto 40px auto' }}>
            {/* Search Bar */}
            <div style={{ position: 'relative', marginBottom: '20px' }}>
              <Search
                size={18}
                color="#64748b"
                style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }}
              />
              <input
                type="text"
                placeholder="Search articles by title, keywords, or topics (e.g. PPDT, Screening, NDA, Interview)..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                  width: '100%',
                  padding: '14px 44px 14px 44px',
                  borderRadius: '12px',
                  border: '1px solid #cbd5e1',
                  backgroundColor: '#f8fafc',
                  fontSize: '15px',
                  color: '#1e293b',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
                }}
              />
              {search && (
                <button
                  type="button"
                  onClick={() => setSearch('')}
                  style={{
                    position: 'absolute',
                    right: '14px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'transparent',
                    border: 'none',
                    color: '#94a3b8',
                    cursor: 'pointer'
                  }}
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Category Buttons */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap' }}>
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
                    transition: 'all 0.2s ease',
                    backgroundColor: selectedCategory === cat ? '#109CD9' : '#f8fafc',
                    borderColor: selectedCategory === cat ? '#109CD9' : '#e2e8f0',
                    color: selectedCategory === cat ? '#ffffff' : '#475569'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Loading State */}
          {loading ? (
            <div style={{ textAlign: 'center', padding: '80px 0', color: '#64748b' }}>
              <div style={{ fontSize: '16px', fontWeight: '600' }}>Fetching defense articles from Academy servers...</div>
            </div>
          ) : filtered.length === 0 ? (
            /* Empty State */
            <div style={{
              textAlign: 'center',
              padding: '60px 20px',
              backgroundColor: '#f8fafc',
              borderRadius: '12px',
              border: '1px solid #e2e8f0',
              maxWidth: '540px',
              margin: '0 auto'
            }}>
              <BookOpen size={48} color="#94a3b8" style={{ marginBottom: '14px' }} />
              <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#1e293b', marginBottom: '8px' }}>
                No articles found
              </h3>
              <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '18px' }}>
                No publications match your current search query or selected category.
              </p>
              <button
                className="btn btn-secondary"
                onClick={() => { setSelectedCategory('All'); setSearch(''); }}
              >
                Clear Filters
              </button>
            </div>
          ) : (
            /* Blog Grid */
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '28px' }}>
              {filtered.map((blog) => (
                <div 
                  key={blog._id} 
                  className="defense-card" 
                  style={{ 
                    display: 'flex', 
                    flexDirection: 'column',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    border: '1px solid #e2e8f0',
                    backgroundColor: '#ffffff',
                    transition: 'transform 0.2s, box-shadow 0.2s'
                  }}
                >
                  {/* Image with Category Badge */}
                  <div style={{ height: '210px', overflow: 'hidden', position: 'relative' }}>
                    <Link href={`/blogs/${blog.slug || blog._id}`}>
                      <img
                        src={(blog.coverImage && blog.coverImage.startsWith('http://nda-backend') ? blog.coverImage.replace('http://', 'https://') : blog.coverImage) || 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80'}
                        alt={blog.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s ease' }}
                        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.04)'}
                        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                      />
                    </Link>
                    <span 
                      className="badge-military" 
                      style={{ 
                        position: 'absolute', 
                        top: '12px', 
                        left: '12px', 
                        fontSize: '11px',
                        backgroundColor: '#109CD9',
                        color: '#ffffff',
                        boxShadow: '0 2px 6px rgba(0,0,0,0.2)'
                      }}
                    >
                      {blog.category}
                    </span>
                  </div>

                  {/* Body */}
                  <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    
                    {/* Title */}
                    <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#1e293b', lineHeight: '1.35', marginBottom: '10px' }}>
                      <Link href={`/blogs/${blog.slug || blog._id}`} style={{ color: '#1e293b', textDecoration: 'none' }}>
                        {blog.title}
                      </Link>
                    </h3>

                    {/* Summary */}
                    <p style={{ fontSize: '13px', color: '#64748b', lineHeight: '1.6', marginBottom: '14px', flex: 1 }}>
                      {blog.summary}
                    </p>

                    {/* Dynamic Tags */}
                    {blog.tags && Array.isArray(blog.tags) && blog.tags.length > 0 && (
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '14px' }}>
                        {blog.tags.slice(0, 3).map((t, idx) => (
                          <span
                            key={idx}
                            style={{
                              fontSize: '11px',
                              color: '#109CD9',
                              backgroundColor: '#e6f6fd',
                              padding: '2px 8px',
                              borderRadius: '4px',
                              fontWeight: '700'
                            }}
                          >
                            #{t}
                          </span>
                        ))}
                        {blog.tags.length > 3 && (
                          <span style={{ fontSize: '11px', color: '#94a3b8', alignSelf: 'center' }}>
                            +{blog.tags.length - 3} more
                          </span>
                        )}
                      </div>
                    )}

                    {/* Author & Read Time Meta */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      fontSize: '12px',
                      color: '#64748b',
                      borderTop: '1px solid #f1f5f9',
                      paddingTop: '12px',
                      marginTop: 'auto'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <ShieldCheck size={14} color="#109CD9" />
                        <span style={{ fontWeight: '600', color: '#334155' }}>{blog.author?.name || 'Academy Mentor'}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#94a3b8' }}>
                        <Clock size={12} />
                        <span>{blog.readTime || '5 min read'}</span>
                      </div>
                    </div>

                  </div>

                  {/* Footer Action */}
                  <div style={{
                    padding: '12px 20px',
                    borderTop: '1px solid #f1f5f9',
                    backgroundColor: '#fafafa',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}>
                    <span style={{ fontSize: '12px', color: '#94a3b8' }}>
                      {new Date(blog.createdAt || Date.now()).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
                    </span>
                    <Link
                      href={`/blogs/${blog.slug || blog._id}`}
                      style={{
                        color: '#109CD9',
                        fontWeight: '800',
                        fontSize: '13px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        textDecoration: 'none'
                      }}
                    >
                      <span>Read Complete Guide</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>

                </div>
              ))}
            </div>
          )}

        </div>
      </section>
    </>
  );
}
