// src/TokohSection.jsx - Efek 3D Tilt Interaktif yang Mind-Blowing

import React, { useState } from 'react';
import Tilt from 'react-parallax-tilt'; // Import library tilt

// Data Tokoh (Anda bisa ganti URL foto dengan path lokal Anda)
const tokohData = [
    {
        name: "Mohammad Natsir",
        role: "Perdana Menteri ke-5 RI, Pencetus Mosi Integral",
        photoUrl: "data:image/webp;base64,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", // Ganti dengan URL/Path foto M. Natsir
        details: "Mohammad Natsir adalah figur sentral Masyumi dan Bapak Pendidikan Indonesia. Ia dikenal karena kesederhanaan dan integritasnya."
    },
    {
        name: "Syafruddin Prawiranegara",
        role: "Gubernur BI Pertama, Ketua PDRI",
        photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJIQ89pEmsnPZPEJeZFMCBNYrYhFIxWctk9-46-ueQb2Ob6ylCF2HXj5IJWIbTRx43s9uJ8DElPJHIjW6Ff-c8yOmhj8kuiB9pdG6E15Zj&s=10", // Ganti dengan URL/Path foto Syafruddin
        details: "Memimpin PDRI di Sumatera saat Agresi Militer II, menyelamatkan eksistensi Republik. Tokoh ekonomi yang berani."
    },
    {
        name: "Mohammad Roem",
        role: "Diplomat Ulung, Negosiator Perundingan Roem-Roijen",
        photoUrl: "data:image/webp;base64,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", // Ganti dengan URL/Path foto M. Roem
        details: "Pahlawan diplomasi yang dengan gigih memperjuangkan kedaulatan Indonesia di mata dunia melalui meja perundingan."
    },
    // Tambahkan Tokoh Lain di sini (misal: Sutan Syahrir, Prawoto Mangkusasmito, dsb.)
];

const TokohSection = () => {
    // State untuk mengontrol tokoh mana yang sedang dilihat detailnya (optional)
    const [activeDetail, setActiveDetail] = useState(null);

    return (
        <section id="tokoh" className="py-20 bg-white font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-4">
                    Tokoh Sentral Masyumi
                </h2>
                <p className="text-xl text-gray-600 mb-12">
                    Figur-figur berintegritas yang mewarnai panggung politik dan sejarah bangsa.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {tokohData.map((tokoh, index) => (
                        <div key={index} className="relative">
                            {/* === KARTU TOKOH DENGAN EFEK 3D TILT === */}
                            <Tilt 
                                className="parallax-effect-glare-scale w-full h-full"
                                perspective={1000} // Jarak pandang 3D
                                glareEnable={true} // Efek cahaya (glare) saat miring
                                glareMaxOpacity={0.4}
                                scale={1.02} // Sedikit scale saat hover
                                transitionSpeed={2000} // Kecepatan transisi
                            >
                                <div 
                                    className="relative bg-green-50 p-6 rounded-2xl shadow-2xl overflow-hidden cursor-pointer transform transition-all duration-500 hover:shadow-green-400/50"
                                    onClick={() => setActiveDetail(activeDetail === index ? null : index)}
                                >
                                    {/* Foto Tokoh (Membuatnya lebih hidup dengan border radius dan shadow) */}
                                    <img 
                                        src={tokoh.photoUrl} 
                                        alt={tokoh.name} 
                                        className="w-full h-auto object-cover rounded-xl mb-4 border-4 border-green-600 shadow-lg"
                                        style={{ aspectRatio: '4/5' }} // Memastikan rasio foto seragam
                                    />
                                    
                                    <h3 className="text-2xl font-bold text-green-800 mb-1">{tokoh.name}</h3>
                                    <p className="text-sm font-medium text-gray-500">{tokoh.role}</p>
                                    
                                    {/* Indikator Klik */}
                                    <div className={`mt-3 text-center transition-opacity duration-300 ${activeDetail === index ? 'opacity-0' : 'opacity-100'}`}>
                                        <span className="text-green-600 text-sm font-semibold">
                                            Klik untuk Detail
                                        </span>
                                    </div>
                                </div>
                            </Tilt>
                            
                            {/* === ANIMASI DETAIL SAAT DIKLIK (SLIDE & FADE) === */}
                            {activeDetail === index && (
                                <div 
                                    className="absolute inset-x-0 bottom-[-10px] bg-green-800 p-6 rounded-b-2xl shadow-2xl z-10 
                                               animate-slide-up"
                                >
                                    <p className="text-sm text-white font-light">{tokoh.details}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TokohSection;