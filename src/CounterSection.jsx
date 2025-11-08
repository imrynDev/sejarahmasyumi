// src/CounterSection.jsx - Efek Animasi Penghitungan Angka (Counter Animation)

import React, { useState, useEffect, useRef } from 'react';

// Data Statistik Kunci Masyumi
const counterData = [
    {
        endValue: 17, // Jumlah Perwakilan di Konstituante (Contoh Angka Kunci)
        label: "Kursi di Konstituante (1959)",
        duration: 2000, // Durasi Animasi (ms)
        prefix: "",
        suffix: "%",
    },
    {
        endValue: 1943, // Tahun Berdiri
        label: "Tahun Didirikan",
        duration: 1500,
        prefix: "",
        suffix: "",
    },
    {
        endValue: 2, // Posisi di Pemilu 1955
        label: "Peringkat Pemilu 1955",
        duration: 2500,
        prefix: "Ke-",
        suffix: "",
    },
    {
        endValue: 3, // Jumlah Perdana Menteri/Wakil PM dari Masyumi (Natsir, Harahap, Roem - Wakil)
        label: "Tokoh Perdana Menteri/Wakil PM",
        duration: 1800,
        prefix: "",
        suffix: "+",
    },
];

// Sub-Komponen untuk Animasi Counter Tunggal
const AnimatedCounter = ({ endValue, label, duration, prefix, suffix }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);

    // Fungsi utama animasi penghitungan
    useEffect(() => {
        // Logika sederhana: Counter dimulai saat komponen di-load (Karena di-wrap AnimatedSection, ini aman)
        let startTime;

        const animateCount = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1); // Batasi hingga 1 (100%)

            // Hitung nilai saat ini (menggunakan fungsi easing kubik untuk efek smooth)
            const easedPercentage = percentage < 0.5 
                ? 4 * percentage * percentage * percentage 
                : (percentage - 1) * (2 * percentage - 2) * (2 * percentage - 2) + 1;
            
            const currentValue = Math.floor(easedPercentage * endValue);
            setCount(currentValue);

            if (percentage < 1) {
                requestAnimationFrame(animateCount);
            } else {
                setCount(endValue); // Pastikan nilai akhir tepat
            }
        };

        requestAnimationFrame(animateCount);

        // Cleanup
        return () => cancelAnimationFrame(animateCount);
    }, [endValue, duration]);


    return (
        <div className="p-6 bg-white rounded-xl shadow-2xl transition duration-500 transform hover:scale-105 border-b-8 border-green-600">
            <h3 className="text-6xl font-extrabold text-green-800">
                {prefix}
                {count.toLocaleString()}
                {suffix}
            </h3>
            <p className="mt-3 text-lg font-semibold text-gray-700">{label}</p>
        </div>
    );
};


const CounterSection = () => {
    return (
        <section id="statistik" className="py-20 bg-green-50 font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-4">
                    Statistik Kunci Sejarah
                </h2>
                <p className="text-xl text-gray-600 mb-12">
                    Angka-angka yang mencerminkan pengaruh Masyumi di masa Demokrasi Parlementer.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {counterData.map((data, index) => (
                        <AnimatedCounter key={index} {...data} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CounterSection;