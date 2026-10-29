const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001/api';

export async function fetchCourses() {
  try {
    const res = await fetch(`${API_BASE}/courses`, { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to fetch courses');
    const data = await res.json();
    return data.data || [];
  } catch (err) {
    console.warn('API unavailable, returning seed courses fallback');
    return [
      {
        _id: 'c_1',
        title: 'Offline Mode SSB (10-Day Intensive)',
        code: 'SSB-OFFLINE-10D',
        subtitle: '10-Day Intensive SSB Preparation Programme on Real Ground',
        category: 'Offline Mode SSB',
        duration: '10-Day Intensive',
        fees: 25000,
        batchStartDate: 'Starts 1st & 15th Every Month',
        timings: '08:30 AM - 05:30 PM',
        badge: '10-Day Intensive',
        description: 'Train under experienced DIPR qualified Ex-Assessors through a result oriented, intensive training programme designed for maximum learning in minimum time on our authentic GTO ground.',
        highlights: [
          'PPDT & Stage I Preparation – Story writing, narration, and group discussions',
          'PIQ Analysis & 1-on-1 Mock Interviews with Ex-Interviewing Officers',
          'Psychology Tests – Practice for TAT, WAT, SRT and SDT',
          'GTO Ground – Practice of GD, GPE, Lecturette & live obstacle tasks'
        ],
        image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80'
      },
      {
        _id: 'c_2',
        title: 'Online Mode SSB (20-Day Interactive)',
        code: 'SSB-ONLINE-20D',
        subtitle: '20-Day Intensive SSB Preparation Online Interactive Programme',
        category: 'Online Mode SSB',
        duration: '20-Day Intensive',
        fees: 18000,
        batchStartDate: 'Starts 1st & 15th Every Month',
        timings: '06:00 PM - 09:00 PM',
        badge: '20-Day Intensive',
        description: 'Comprehensive 20-day online interactive training designed for aspirants preparing from anywhere in India with live sessions, dossier checks, and 1-on-1 mock interviews.',
        highlights: [
          'Live Interactive Sessions for Stage-1 Screening & PPDT',
          'Personalized Psych Dossier Check & Individual Feedback',
          '1-on-1 Video Mock Interview with Ex-Assessor',
          'Daily Defence Current Affairs & Military Geopolitics'
        ],
        image: 'https://images.unsplash.com/photo-1579208575657-c595a05383b7?auto=format&fit=crop&w=800&q=80'
      },
      {
        _id: 'c_3',
        title: 'NDA & CDS Written Target Batch',
        code: 'NDA-CDS-WRITTEN-2026',
        subtitle: 'Comprehensive Mathematics, English & General Knowledge Programme',
        category: 'NDA & CDS Written',
        duration: 'Target Batch 2026',
        fees: 38500,
        batchStartDate: 'Starts 1st & 15th Every Month',
        timings: '08:30 AM - 02:30 PM',
        badge: 'Target 2026 Batch',
        description: 'Master the UPSC NDA & CDS written exam with shortcut mathematical formulas, intensive GAT coverage and full-length OMR mocks by defense experts.',
        highlights: [
          'Complete UPSC NDA & CDS Syllabus coverage (Maths + GAT)',
          'Daily 200+ Practice MCQs & Short-cut Tricks for Mathematics',
          'Weekly 900-Marks OMR-based Full Length Mock Exams',
          'Free SSB Screening & Physical Conditioning orientation included'
        ],
        image: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80'
      }
    ];
  }
}

export async function fetchNotices() {
  try {
    const res = await fetch(`${API_BASE}/notices`, { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to fetch notices');
    const data = await res.json();
    return data.data || [];
  } catch (err) {
    return [
      {
        _id: 'n_1',
        title: 'UPSC NDA & NA (I) 2026 Official Notification Released - Registration Open',
        category: 'Exam Notification',
        date: '24 Oct 2026',
        description: 'Union Public Service Commission has released the official notification for NDA & NA examination.',
        isUrgent: true,
        linkUrl: 'https://upsc.gov.in'
      },
      {
        _id: 'n_2',
        title: 'SSB 10-Days Intensive Bootcamp: Next Batch Commences This Monday',
        category: 'New Batch Alert',
        date: '28 Oct 2026',
        description: 'New batch for candidates with upcoming SSB Call Letters. Limited to 20 cadets.',
        isUrgent: true,
        linkUrl: '/courses'
      }
    ];
  }
}

export async function fetchBlogs() {
  try {
    const res = await fetch(`${API_BASE}/blogs`, { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to fetch blogs');
    const data = await res.json();
    return data.data || [];
  } catch (err) {
    return [
      {
        _id: 'b_1',
        title: 'Cracking PPDT in SSB: How to Write Convincing Stories & Lead the GD',
        slug: 'cracking-ppdt-ssb-story-writing-group-discussion',
        category: 'SSB Interview Guide',
        summary: 'The screening test filters out over 60% of candidates on Day 1. Learn the exact psych formula for perceiving the slide.',
        author: { name: 'Col. Rajesh Sharma (Retd.)', designation: 'Ex-President 11 SSB' },
        readTime: '6 min read',
        coverImage: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80'
      }
    ];
  }
}

export async function fetchCandidates() {
  try {
    const res = await fetch(`${API_BASE}/candidates`, { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to fetch candidates');
    const data = await res.json();
    return data.data || [];
  } catch (err) {
    return [];
  }
}

export async function fetchGallery(category = 'All') {
  try {
    const res = await fetch(`${API_BASE}/gallery?category=${encodeURIComponent(category)}`, { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to fetch gallery');
    const data = await res.json();
    return data.data || [];
  } catch (err) {
    return [
      {
        _id: 'g_1',
        title: 'Full-Scale GTO Ground: Progressive Group Task (PGT)',
        category: 'GTO Obstacle Ground',
        imageUrl: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=900&q=80',
        caption: 'Cadets practicing bridging techniques and cantilevers on real obstacle structures.'
      },
      {
        _id: 'g_2',
        title: 'Individual Obstacles (Tiger Leap & Tarzan Swing)',
        category: 'GTO Obstacle Ground',
        imageUrl: 'https://images.pexels.com/photos/5212346/pexels-photo-5212346.jpeg?auto=compress&cs=tinysrgb&w=900',
        caption: 'Developing physical courage, stamina, and agility on standard SSB obstacle course.'
      }
    ];
  }
}

export async function submitEnquiry(enquiryData) {
  const res = await fetch(`${API_BASE}/enquiries`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(enquiryData)
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || 'Failed to submit enquiry');
  }
  return data;
}

export async function submitContact(contactData) {
  const res = await fetch(`${API_BASE}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(contactData)
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || 'Failed to send message');
  }
  return data;
}

