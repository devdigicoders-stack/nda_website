'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, User, Calendar, Clock, Share2, BookOpen, ShieldCheck, ArrowRight } from 'lucide-react';

export default function SingleBlogPage({ params }) {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const rawSlug = params?.slug;
    if (!rawSlug) {
      setLoading(false);
      return;
    }
    const slug = decodeURIComponent(rawSlug);
    const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001/api';

    fetch(`${API_BASE}/blogs/${encodeURIComponent(slug)}`, { cache: 'no-store' })
      .then(res => res.json())
      .then(data => {
        if (data.success && data.data) {
          setBlog(data.data);
        } else {
          setBlog(null);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch blog article:', err);
        setBlog(null);
        setLoading(false);
      });
  }, [params]);

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '100px 0', color: '#64748b' }}>
        Loading article...
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="container" style={{ padding: '80px 0', textAlign: 'center' }}>
        <h2>Article Not Found</h2>
        <Link href="/blogs" className="btn btn-primary" style={{ marginTop: '20px' }}>
          Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* Banner */}
      <section className="page-header-banner">
        <div className="container">
          <div className="breadcrumbs">
            <Link href="/">Home</Link> &gt; <Link href="/blogs">Blog</Link> &gt; <span>Article</span>
          </div>
          <h1 style={{ fontSize: '32px' }}>{blog.title}</h1>
        </div>
      </section>

      <article className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '820px' }}>
          {/* Back link */}
          <Link
            href="/blogs"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: '#109CD9',
              fontSize: '14px',
              fontWeight: '700',
              marginBottom: '20px'
            }}
          >
            <ArrowLeft size={16} />
            <span>Back to All Articles</span>
          </Link>

          <div style={{ marginBottom: '14px' }}>
            <span className="badge-military">
              {blog.category}
            </span>
          </div>

          <h1 style={{ fontSize: '34px', fontWeight: '800', color: '#1e293b', lineHeight: '1.25', marginBottom: '16px' }}>
            {blog.title}
          </h1>

          {/* Author Bar */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            borderBottom: '1px solid #e2e8f0',
            paddingBottom: '18px',
            marginBottom: '28px'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: '#e6f6fd',
              color: '#109CD9',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: '800'
            }}>
              <ShieldCheck size={20} />
            </div>
            <div>
              <div style={{ fontSize: '14px', fontWeight: '700', color: '#1e293b' }}>
                {blog.author?.name || 'Academy Mentor'}
              </div>
              <div style={{ fontSize: '12px', color: '#64748b' }}>
                {blog.author?.designation || 'Defence Faculty'} &bull; {blog.readTime || '5 min read'}
              </div>
            </div>
          </div>

          {/* Cover image */}
          {blog.coverImage && (
            <div style={{ height: '360px', borderRadius: '12px', overflow: 'hidden', marginBottom: '30px', boxShadow: 'var(--shadow-sm)' }}>
              <img
                src={blog.coverImage}
                alt={blog.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          )}

          {/* Summary Lead */}
          <div style={{
            padding: '18px 22px',
            background: '#f8fafc',
            borderLeft: '4px solid #109CD9',
            borderRadius: '0 8px 8px 0',
            fontSize: '15px',
            color: '#334155',
            lineHeight: '1.6',
            marginBottom: '30px',
            fontStyle: 'italic'
          }}>
            {blog.summary}
          </div>

          {/* Content Body */}
          {blog.content && (blog.content.includes('<p>') || blog.content.includes('<h') || blog.content.includes('<ul>') || blog.content.includes('<div>') || blog.content.includes('<table>')) ? (
            <div
              className="blog-rich-content"
              style={{
                fontSize: '16px',
                color: '#334155',
                lineHeight: '1.8'
              }}
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          ) : (
            <div style={{
              fontSize: '15px',
              color: '#334155',
              lineHeight: '1.8',
              whiteSpace: 'pre-line'
            }}>
              {blog.content}
            </div>
          )}

          {/* Dynamic Tags */}
          {blog.tags && Array.isArray(blog.tags) && blog.tags.length > 0 && (
            <div style={{ marginTop: '36px', paddingTop: '20px', borderTop: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: '12px', fontWeight: '700', color: '#64748b', textTransform: 'uppercase', marginBottom: '10px' }}>
                Related Topic Tags:
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {blog.tags.map((t, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontSize: '12px',
                      color: '#109CD9',
                      backgroundColor: '#e6f6fd',
                      padding: '5px 12px',
                      borderRadius: '20px',
                      fontWeight: '700'
                    }}
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Call to Action Box */}
          <div style={{
            marginTop: '50px',
            padding: '32px',
            background: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: '12px',
            textAlign: 'center'
          }}>
            <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#1e293b', marginBottom: '8px' }}>
              Want to practice these techniques with Ex-Assessors?
            </h3>
            <p style={{ fontSize: '14px', color: '#64748b', maxWidth: '540px', margin: '0 auto 20px auto' }}>
              Join our upcoming 14-days intensive residential bootcamp conducted on a full-scale outdoor obstacle ground.
            </p>
            <Link
              href="/enquiry?course=SSB%2014%20Days%20Training"
              className="btn btn-primary"
            >
              <span>Enroll in Upcoming SSB 14-Day Batch</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
