// src/VisiMisi.jsx - Kode Lengkap dengan Delay Berjenjang

import React from 'react';

const visiMisiPoints = [
    { title: 'Daulat Rakyat', detail: 'Mewujudkan negara berdasarkan kedaulatan rakyat dan menjunjung tinggi nilai-nilai demokrasi parlementer.' },
    { title: 'Negara Hukum Islam', detail: 'Berjuang agar dasar negara dan hukum berjalan selaras dengan Syariat Islam, untuk mencapai keadilan sosial.' },
    { title: 'Persatuan Umat', detail: 'Menyatukan semua golongan dan organisasi Islam di bawah satu payung politik demi kekuatan umat.' },
    { title: 'Kesejahteraan Nasional', detail: 'Memperjuangkan pembangunan ekonomi yang adil dan merata, berorientasi pada kemakmuran rakyat.' },
];

// Kelas utilitas untuk DELAY yang panjang
const delayClasses = [
    'delay-[1500ms]', // Item 1
    'delay-[2000ms]', // Item 2
    'delay-[2500ms]', // Item 3
    'delay-[3000ms]', // Item 4
];

const VisiMisi = () => {
    return (
        <section id="visimisi" className="py-20 bg-green-700 text-white font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-black text-white font-serif">
                        🌟 Visi & Misi Utama
                    </h2>
                    <p className="mt-4 text-xl text-green-200">
                        Tujuan ideologis Masyumi dalam membangun fondasi negara.
                    </p>
                </div>

                {/* Grid Visi dan Misi */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {visiMisiPoints.map((item, index) => (
                        <div 
                            key={index} 
                            // Terapkan delay berjenjang
                            className={`
                                bg-white text-gray-900 p-6 rounded-lg shadow-xl border-b-4 border-yellow-400 
                                transition-all duration-700 ease-out transform
                                ${delayClasses[index]} 
                            `}
                            style={{ 
                                transitionProperty: 'opacity, transform', 
                            }}
                        >
                            <h3 className="text-xl font-black font-serif mb-3">
                                {item.title}
                            </h3>
                            <p className="text-gray-700 text-base">
                                {item.detail}
                            </p>
                        </div>
                    ))}
                </div>
                
            </div>
        </section>
    );
};

export default VisiMisi;