// src/AliansiPolitik.jsx - Hubungan dan Posisi Politik Masyumi

import React from 'react';
import { ShareIcon, XMarkIcon, HandRaisedIcon } from '@heroicons/react/24/outline';

// Data Hubungan Politik Masyumi
const aliansiData = [
    {
        party: "Nahdlatul Ulama (NU)",
        status: "Perpecahan dan Pemisahan",
        description: "NU awalnya merupakan tulang punggung Masyumi, namun kemudian memisahkan diri pada tahun 1952 karena perbedaan pandangan dalam organisasi dan membentuk partai politik sendiri.",
        icon: XMarkIcon,
        color: "bg-red-500",
    },
    {
        party: "Partai Nasional Indonesia (PNI)",
        status: "Kompetisi Utama",
        description: "PNI adalah rival politik utama Masyumi dalam memperebutkan suara mayoritas di Pemilu 1955. Mereka sering berlawanan dalam parlemen, namun kadang berkoalisi dalam kabinet.",
        icon: ShareIcon,
        color: "bg-blue-500",
    },
    {
        party: "Partai Komunis Indonesia (PKI)",
        status: "Penentang Ideologis",
        description: "Masyumi adalah penentang ideologis paling keras terhadap PKI dan Komunisme, terutama di era Demokrasi Terpimpin. Masyumi menolak keras konsep Nasakom.",
        icon: HandRaisedIcon,
        color: "bg-gray-700",
    },
];

const AliansiPolitik = () => {
    return (
        <section id="aliansipolitik" className="py-20 bg-green-50 font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-4">
                    Aliansi & Rivalitas Politik
                </h2>
                <p className="text-xl text-gray-600 mb-12">
                    Posisi Masyumi dalam lanskap politik Indonesia pasca-kemerdekaan.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {aliansiData.map((data, index) => (
                        <div 
                            key={index} 
                            className="bg-white p-6 rounded-xl shadow-2xl transition duration-500 transform hover:translate-y-[-5px] hover:shadow-green-400/50 border-t-8 border-gray-200"
                        >
                            <div className={`p-3 w-16 h-16 rounded-full mx-auto mb-6 ${data.color} text-white flex items-center justify-center`}>
                                <data.icon className="w-8 h-8" />
                            </div>
                            
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">{data.party}</h3>
                            <p className={`text-lg font-semibold text-white inline-block px-3 py-1 rounded-full mb-4 ${data.color}`}>
                                {data.status}
                            </p>
                            <p className="text-gray-600">
                                {data.description}
                            </p>
                        </div>
                    ))}
                </div>
                
                {/* Catatan Kaki Tambahan */}
                <div className="mt-16 p-6 bg-white rounded-lg shadow-xl border-l-4 border-green-600 text-left max-w-4xl mx-auto">
                    <p className="text-lg font-semibold text-gray-800">Catatan Penting:</p>
                    <p className="text-gray-600 text-md mt-2">
                        Masyumi dikenal memiliki hubungan politik yang dinamis, bersedia berkoalisi dengan partai manapun demi kebaikan negara, kecuali yang dianggap bertentangan dengan ideologi Islam dan demokrasi (seperti PKI).
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AliansiPolitik;