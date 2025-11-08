// src/Footer.jsx - Kode Lengkap
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-10 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        
        {/* Nama Proyek */}
        <h3 className="text-2xl font-bold text-green-400 font-serif">
          Masyumi | Sejarah Bangsa
        </h3>
        
        {/* Deskripsi Singkat */}
        <p className="mt-3 text-gray-400 max-w-2xl mx-auto">
          Proyek informasi ini didedikasikan untuk mengarsipkan peran krusial Majelis Syuro Muslimin Indonesia dalam sejarah politik dan kenegaraan Republik Indonesia.
        </p>
        
        {/* Hak Cipta */}
        <p className="mt-8 text-sm text-gray-500 border-t border-gray-700 pt-5">
          © {new Date().getFullYear()} Arsip Sejarah Masyumi. Dibuat sebagai studi kasus oleh Rayyan. | Data diolah dari berbagai sumber sejarah dan literatur politik Islam Indonesia.
        </p>

      </div>
    </footer>
  );
};

export default Footer;