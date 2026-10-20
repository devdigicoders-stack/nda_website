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
        title: 'NDA Written Super-50 Target Batch',
        code: 'NDA-WRITTEN-2026',
        subtitle: 'Comprehensive Preparation for UPSC NDA / NA Examination',
        category: 'NDA Written',
        duration: '6 Months Intensive',
        fees: 38500,
        batchStartDate: 'Starts 1st & 15th Every Month',
        timings: '08:30 AM - 02:30 PM',
        badge: 'High Selection Rate',
        description: 'Rigorous 6-hour daily training on Mathematics shortcuts, English comprehension, and General Knowledge by retired defense faculty.',
        highlights: [
          'Complete UPSC NDA Syllabus coverage (Maths + GAT)',
          'Daily 200+ Practice MCQs & Short-cut Tricks for Mathematics',
          'Weekly 900-Marks OMR-based Full Length Mock Exams',
          'Free SSB Screening & Physical Conditioning orientation included'
        ],
        image: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=800&q=80'
      },
      {
        _id: 'c_2',
        title: 'SSB 14-Days Comprehensive Interview Bootcamp',
        code: 'SSB-14DAYS-MASTERCLASS',
        subtitle: 'Rigorous 14-Day Simulation by Ex-SSB Assessors (IO, GTO, Psych)',
        category: 'SSB 14 Days Training',
        duration: '14 Days Residential',
        fees: 24500,
        batchStartDate: 'Batches begin every Monday',
        timings: '06:00 AM - 07:30 PM',
        badge: 'Assessed by Ex-Col / Brigadiers',
        description: 'Complete Stage-1 Screening, Psychological Battery, 100% Outdoor GTO Ground Obstacles, and 1-on-1 Personal Mock Interview.',
        highlights: [
          'Day-1 Screening Mastery: OIR Tests & PPDT Narration / Discussion',
          'Complete Psychological Battery: TAT, WAT, SRT, Self Description (SD)',
          '100% Outdoor GTO Ground: PGT, HGT, Snake Race, Command Task',
          'Personal Mock Interview with individual feedback & PIQ Form optimization'
        ],
        image: 'https://images.unsplash.com/photo-1579208575657-c595a05383b7?auto=format&fit=crop&w=800&q=80'
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
        title: 'SSB 14-Days Intensive Bootcamp: Next Batch Commences This Monday',
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
        imageUrl: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=900&q=80',
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

