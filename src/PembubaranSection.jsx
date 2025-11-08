// src/PembubaranSection.jsx - Kode Lengkap dengan Delay Berjenjang

import React from 'react';

const kritikDanPembubaran = [
  {
    title: 'Keterlibatan PRRI/Permesta', icon: '⚔️', detail: 'Keputusan beberapa tokoh Masyumi, termasuk Sjafruddin Prawiranegara, untuk bergabung dengan PRRI menjadi alasan utama pembubaran pada tahun 1960.',
  },
  {
    title: 'Konflik Ideologis dengan Sukarno', icon: '🗣️', detail: 'Masyumi secara konsisten menentang konsep Nasakom dan mendukung Demokrasi Parlementer, berujung pada benturan politik.',
  },
  {
    title: 'Isu Negara Islam (Konstituante)', icon: '📜', detail: 'Perjuangan Masyumi agar Islam dijadikan dasar negara menuai oposisi keras dari kelompok nasionalis dan komunis (1957-1959).',
  },
  {
    title: 'Implikasi Demokrasi Terpimpin', icon: '🔨', detail: 'Pembubaran Masyumi menjadi penanda berakhirnya era multipartai dan awal dari hegemoni kekuasaan terpusat di bawah sistem Demokrasi Terpimpin.',
  },
];

// Kelas utilitas untuk DELAY yang panjang
const delayClasses = [
    'delay-[1500ms]', // Item 1
    'delay-[2000ms]', // Item 2
    'delay-[2500ms]', // Item 3
    'delay-[3000ms]', // Item 4
];

const PembubaranSection = () => {
  return (
    <section id="pembubaran" className="py-20 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-gray-900 font-serif">
            💔 Pembubaran & Kritik
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Faktor-faktor yang mengakhiri kiprah Masyumi di panggung politik nasional.
          </p>
        </div>

        {/* GRID KRITIK DAN PEMBUBARAN */}
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {kritikDanPembubaran.map((item, index) => (
            <div 
              key={index} 
              // Terapkan delay berjenjang
              className={`
                bg-gray-50 p-6 rounded-lg shadow-xl border-t-4 border-red-600 
                transition-all duration-700 ease-out transform hover:shadow-2xl hover:bg-red-50
                ${delayClasses[index]} 
              `}
              style={{ 
                  transitionProperty: 'opacity, transform', 
              }}
            >
              <div className="text-4xl mb-4 text-red-700">{item.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 font-serif mb-3">{item.title}</h3>
              <p className="text-gray-700 text-base">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PembubaranSection;