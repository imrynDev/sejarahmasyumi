// src/ScrollToTopButton.jsx

import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  // State untuk mengontrol tampilan tombol
  const [isVisible, setIsVisible] = useState(false);

  // Fungsi untuk kembali ke puncak
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Membuat scroll menjadi mulus (smooth)
    });
  };

  // Efek samping untuk mendengarkan event scroll
  useEffect(() => {
    const toggleVisibility = () => {
      // Tombol akan muncul jika scrollY lebih dari 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    // Cleanup function: Hapus listener saat komponen dilepas
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    // Render tombol hanya jika isVisible true
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 p-4 rounded-full 
                 bg-green-600 text-white shadow-xl 
                 hover:bg-green-700 transition-opacity duration-300 z-50 
                 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      aria-label="Scroll ke atas"
    >
      {/* Icon Panah Ke Atas */}
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  );
};

export default ScrollToTopButton;