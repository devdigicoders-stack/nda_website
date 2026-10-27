import React from 'react';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NoticeTicker from '../components/NoticeTicker';
import WhatsAppButton from '../components/WhatsAppButton';
import ScrollToTop from '../components/ScrollToTop';

export const metadata = {
  title: 'Shaurya NDA & SSB Academy | Best Defence Coaching & SSB Interview Training',
  description: "Join India's premier Defence preparatory academy for NDA Written Examination and SSB 14-Days Comprehensive Interview Bootcamp with live GTO Obstacle Ground and Ex-Assessors.",
  icons: {
    icon: '/assets/logos/image-removebg-preview (1).png',
    shortcut: '/assets/logos/image-removebg-preview (1).png',
    apple: '/assets/logos/image-removebg-preview (1).png'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <ScrollToTop />
        <NoticeTicker />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
