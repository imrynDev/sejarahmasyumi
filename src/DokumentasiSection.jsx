// src/DokumentasiSection.jsx - Galeri Foto dan Penjelasan Visualisasi 3D

import React from 'react';
import { CameraIcon, CubeIcon } from '@heroicons/react/24/solid';

const DokumentasiSection = () => {
    return (
        <section id="dokumentasi" className="py-20 bg-white font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-4">
                    <CameraIcon className="w-10 h-10 inline-block text-gray-700 mr-2" />
                    Galeri & Dokumentasi Visual
                </h2>
                <p className="text-xl text-gray-600 mb-12">
                    Menghadirkan arsip foto perjuangan dan interpretasi visual modern.
                </p>

                {/* Bagian Galeri Foto */}
                <div className="mb-16">
                    <h3 className="text-3xl font-bold text-gray-700 mb-6 border-b pb-2">
                        Foto Arsip Masyumi
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {/* Placeholder untuk Gambar Nyata */}
                        <div className="h-40 bg-gray-200 rounded-lg shadow-md flex items-center justify-center text-sm text-gray-500">
                            [Foto Tokoh/Kegiatan 1]
                        </div>
                        <div className="h-40 bg-gray-200 rounded-lg shadow-md flex items-center justify-center text-sm text-gray-500">
                            [Foto Tokoh/Kegiatan 2]
                        </div>
                        <div className="h-40 bg-gray-300 rounded-lg shadow-lg flex items-center justify-center text-sm text-gray-500">
                            [Foto Sidang Parlemen]
                        </div>
                        <div className="h-40 bg-gray-300 rounded-lg shadow-lg flex items-center justify-center text-sm text-gray-500">
                            [Foto Kongres Partai]
                        </div>
                        {/* Jika Anda memiliki link gambar, ganti div di atas dengan tag <img> */}
                    </div>
                    <p className="mt-4 text-sm text-gray-500 italic">
                        *Dokumen visual ini bertujuan menghidupkan kembali suasana masa perjuangan Masyumi.
                    </p>
                </div>

                {/* Bagian Visualisasi 3D */}
                <div className="max-w-4xl mx-auto p-8 bg-green-50 rounded-xl shadow-2xl border-l-4 border-green-600 text-left">
                    <div className="flex items-center mb-4">
                        <CubeIcon className="w-8 h-8 text-green-700 mr-3 flex-shrink-0" />
                        <h3 className="text-2xl font-bold text-green-800">
                            Eksplorasi 3D (Simulasi Sejarah)
                        </h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                        Fitur visualisasi 3D kami memungkinkan Anda untuk **menjelajahi rekonstruksi digital** ruang-ruang penting dalam sejarah Masyumi, seperti interior Gedung Konferensi atau replika Kabinet Natsir. Kami berusaha menghadirkan **pengalaman imersif** yang melampaui teks dan gambar 2D, memberikan pemahaman spasial tentang peristiwa sejarah.
                    </p>
                    <div className="mt-6 text-center">
                         <a 
                            href="#tujuan-3d" 
                            className="inline-flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition duration-300"
                        >
                            Lihat Demo 3D (Link Eksplorasi)
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default DokumentasiSection;