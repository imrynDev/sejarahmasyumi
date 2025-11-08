// src/Hero.jsx - Kode Lengkap dengan Efek Typewriter Loop dan Styling Terbaru

import React, { useState, useEffect } from 'react';

// Judul yang akan di-loop
const fullTitle = "Majelis Syuro Muslimin Indonesia";
const TYPING_SPEED = 70; // Kecepatan ketik (ms per karakter)
const DELETING_SPEED = 40; // Kecepatan hapus
const PAUSE_TIME = 2000; // Jeda sebelum menghapus/mengulang (ms)

const Hero = () => {
  const [typedTitle, setTypedTitle] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    let timer;
    const currentText = fullTitle;

    const handleTyping = () => {
      if (isDeleting) {
        // Mode MENGHAPUS
        setTypedTitle(currentText.substring(0, typedTitle.length - 1));
      } else {
        // Mode MENGETIK
        setTypedTitle(currentText.substring(0, typedTitle.length + 1));
      }

      // Logic Transisi
      if (!isDeleting && typedTitle === fullTitle) {
        // Selesai mengetik, JEDA
        timer = setTimeout(() => setIsDeleting(true), PAUSE_TIME);
      } else if (isDeleting && typedTitle === '') {
        // Selesai menghapus, ULANGI
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    // Tentukan kecepatan timer
    let delta = isDeleting ? DELETING_SPEED : TYPING_SPEED;
    if (!isDeleting && typedTitle === fullTitle) {
      delta = PAUSE_TIME; // Gunakan jeda jika sudah selesai mengetik
    }

    timer = setTimeout(handleTyping, delta);

    // Dependency arrays: Pastikan semua state yang digunakan di dalam useEffect ada di sini.
    // Kita hapus loopNum dari dependencies karena di dalam handleTyping hanya digunakan untuk efek visual loop (tidak mempengaruhi state lain secara langsung).
    return () => clearTimeout(timer);
  }, [typedTitle, isDeleting, loopNum]);


  return (
    <section id="beranda" className="py-32 bg-green-50 font-sans"> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* JUDUL DENGAN EFEK TYPEWRITER LOOP */}
        {/* Menggunakan font-black untuk bold maksimal dan ukuran lebih besar */}
        <h1 className="text-6xl sm:text-7xl font-black text-green-800 leading-tight min-h-[70px] sm:min-h-[100px]">
          {typedTitle}
          {/* Efek Cursor Berkedip yang Lebih Dramatis */}
          <span 
            className={`inline-block w-1 h-12 ml-2 bg-green-800 align-middle 
                        transition-opacity duration-500`}
            style={{ 
              animation: 'blink 1s step-end infinite', 
              opacity: (typedTitle === fullTitle && !isDeleting) ? 0 : 1 // Berkedip hanya saat mengetik/menghapus
            }}
          ></span>
        </h1>
        
        {/* DESKRIPSI juga dibuat lebih bold */}
        <p className="mt-4 text-3xl font-bold text-gray-800 max-w-3xl mx-auto font-serif">
          Menelusuri Jejak Sejarah Perjuangan Umat
        </p>

        <p className="mt-6 text-lg text-gray-600 max-w-4xl mx-auto">
          Masyumi adalah organisasi politik Islam terbesar yang menjadi kekuatan penyeimbang pada era Demokrasi Parlementer, konsisten memperjuangkan nilai-nilai Islam, demokrasi, dan keutuhan negara (NKRI) pasca kemerdekaan.
        </p>
        
        <div className="mt-8">
          <a
            href="#warisan"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition duration-300 shadow-lg"
          >
            Pelajari Lebih Lanjut⬇️
          </a>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;