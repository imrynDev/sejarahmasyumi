// src/WarisanSection.jsx - Implementasi Delay 2 Detik Berjenjang

import React from 'react';

// Data Warisan Kunci Masyumi
const warisanPoints = [
    { title: 'Mosi Integral Natsir', detail: 'Berhasil mengembalikan bentuk negara dari serikat (RIS) menjadi kesatuan (NKRI) pada 1950, menunjukkan komitmen Masyumi pada keutuhan bangsa.', icon: '📜' },
    { title: 'Demokrasi & Etika Politik', detail: 'Masyumi memegang teguh prinsip oposisi konstruktif dan etika tinggi dalam parlemen, menjadi teladan berdemokrasi.', icon: '⚖️' },
    { title: 'Konsep Ekonomi Kerakyatan', detail: 'Mengedepankan konsep ekonomi yang menekankan kesejahteraan rakyat dan koperasi, bukan hanya sistem liberal.', icon: '🌾' },
    { title: 'Perjuangan Anti-Komunis', detail: 'Secara konsisten menjadi kekuatan politik yang tegas menentang pengaruh ideologi komunisme di Indonesia.', icon: '🛡️' },
];

// Kelas utilitas untuk DELAY SUPER LAMA (Dimulai dari 2000ms)
const delayClasses = [
    'delay-[2000ms]', // Item 1: Muncul setelah 2.0 detik
    'delay-[2500ms]', // Item 2: Muncul setelah 2.5 detik (0.5s setelah item 1)
    'delay-[3000ms]', // Item 3: Muncul setelah 3.0 detik
    'delay-[3500ms]', // Item 4: Muncul setelah 3.5 detik
];

const WarisanSection = () => {
    return (
        <section id="warisan" className="py-20 bg-gray-50 font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="text-center mb-12">
                    {/* Judul menggunakan font-black untuk bold maksimal */}
                    <h2 className="text-4xl font-black text-gray-900 font-serif">
                        💎 Warisan dan Kontribusi Masyumi
                    </h2>
                    <p className="mt-4 text-xl text-gray-600">
                        Dampak nyata Masyumi pada fondasi politik, demokrasi, dan negara Indonesia.
                    </p>
                </div>

                {/* Grid Kontribusi */}
                <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {warisanPoints.map((item, index) => (
                        <div 
                            key={index} 
                            // Terapkan kelas delay super lama
                            className={`
                                bg-white p-6 rounded-lg shadow-xl border-b-4 border-green-600 
                                transition-all duration-700 ease-out transform
                                ${delayClasses[index]} 
                            `}
                            style={{ 
                                transitionProperty: 'opacity, transform', 
                            }}
                        >
                            <div className="text-4xl mb-4 text-green-700">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 font-serif mb-3">
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

export default WarisanSection;