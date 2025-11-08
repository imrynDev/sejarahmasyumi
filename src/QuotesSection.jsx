// src/QuotesSection.jsx - Quote Carousel (Slider Kutipan Tokoh)

import React, { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid';

// Data Kutipan Tokoh Masyumi
const quotesData = [
    {
        quote: "Politik itu sarana untuk ibadah, bukan ibadah untuk politik.",
        author: "Mohammad Natsir",
        source: "Dalam kaitannya dengan moralitas bernegara."
    },
    {
        quote: "Pembangunan yang berhasil adalah pembangunan manusia seutuhnya, bukan hanya pembangunan materi.",
        author: "Syafruddin Prawiranegara",
        source: "Refleksi mengenai ekonomi dan pembangunan bangsa."
    },
    {
        quote: "Kemerdekaan itu bukan akhir, tapi alat untuk mencapai tujuan hidup berbangsa dan bernegara.",
        author: "Mohammad Roem",
        source: "Pidato pasca Perundingan Roem-Roijen."
    },
    {
        quote: "Islam adalah 'way of life', sehingga harus menjiwai setiap aspek kehidupan termasuk politik.",
        author: "M. Isa Anshary",
        source: "Mengenai hubungan Islam dan ideologi negara."
    },
];

const QuotesSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalQuotes = quotesData.length;
    const intervalTime = 8000; // Auto-slide setiap 8 detik

    // Logic untuk Auto-Slide
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % totalQuotes);
        }, intervalTime);

        return () => clearInterval(timer); // Cleanup timer saat komponen di-unmount
    }, [totalQuotes]);

    // Handler untuk navigasi manual
    const goToPrevious = () => {
        setCurrentIndex(prevIndex => (prevIndex - 1 + totalQuotes) % totalQuotes);
    };

    const goToNext = () => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % totalQuotes);
    };

    const currentQuote = quotesData[currentIndex];

    return (
        <section id="kutipan" className="py-20 bg-gray-900 font-sans relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                
                <h2 className="text-4xl md:text-5xl font-extrabold text-green-400 mb-4">
                    Kutipan Inspiratif
                </h2>
                <p className="text-xl text-gray-400 mb-12">
                    Jejak pemikiran dan integritas para tokoh Masyumi.
                </p>

                {/* Quote Carousel Container */}
                <div className="relative bg-gray-800 p-8 md:p-12 rounded-2xl shadow-2xl min-h-[350px] flex items-center justify-center border-t-8 border-green-600">
                    
                    {/* Tombol Kiri */}
                    <button
                        onClick={goToPrevious}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-gray-700 text-white hover:bg-green-600 transition duration-300 z-20"
                        aria-label="Previous quote"
                    >
                        <ChevronLeftIcon className="w-6 h-6" />
                    </button>
                    
                    {/* Konten Quote (Dengan Transisi Fade) */}
                    <div 
                        key={currentIndex} // Key berubah untuk memaksa re-render dan memicu transisi
                        className="transition-opacity duration-1000 ease-in-out px-10 text-white animate-fade-in"
                    >
                        <ChatBubbleLeftRightIcon className="w-10 h-10 mx-auto text-green-500 mb-6" />
                        
                        <blockquote className="italic text-2xl md:text-3xl font-light mb-6">
                            "{currentQuote.quote}"
                        </blockquote>
                        <footer className="text-green-400 font-semibold text-lg">
                            — {currentQuote.author}
                        </footer>
                        <cite className="block text-sm text-gray-500 mt-2">
                            ({currentQuote.source})
                        </cite>
                    </div>

                    {/* Tombol Kanan */}
                    <button
                        onClick={goToNext}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-gray-700 text-white hover:bg-green-600 transition duration-300 z-20"
                        aria-label="Next quote"
                    >
                        <ChevronRightIcon className="w-6 h-6" />
                    </button>

                    {/* Indikator Titik */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {quotesData.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                                    index === currentIndex ? 'bg-green-400 w-6' : 'bg-gray-600'
                                }`}
                                aria-label={`Go to quote ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default QuotesSection;