// src/NotFound.jsx

import React from 'react';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-green-700">404</h1>
        <h2 className="text-4xl font-bold text-gray-800 mt-4 mb-4">Halaman Tidak Ditemukan</h2>
        <p className="text-xl text-gray-600 mb-8">
          Mohon maaf, alamat yang Anda tuju tidak ada dalam arsip sejarah Masyumi ini.
        </p>
        <a 
          href="/" 
          className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition duration-300"
        >
          Kembali ke Beranda
        </a>
      </div>
    </div>
  );
};

export default NotFound;