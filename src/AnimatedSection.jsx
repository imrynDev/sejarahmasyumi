// src/AnimatedSection.jsx - Memberikan Efek Fade-In saat Section Muncul

import React, { useRef, useState, useEffect } from 'react';

/**
 * Komponen pembungkus untuk memberikan efek animasi fade-in saat 
 * section memasuki viewport (layar).
 * * Digunakan di App.jsx seperti: <AnimatedSection><SejarahSection /></AnimatedSection>
 */
const AnimatedSection = ({ children, delay = 0 }) => {
    // State untuk melacak apakah elemen sudah terlihat
    const [isVisible, setIsVisible] = useState(false);
    // Ref untuk merujuk ke elemen DOM yang akan diamati
    const domRef = useRef(null);

    useEffect(() => {
        // Buat Intersection Observer
        const observer = new IntersectionObserver(
            (entries) => {
                // entries[0] adalah elemen yang sedang diamati (domRef.current)
                if (entries[0].isIntersecting) {
                    // Jika elemen terlihat di viewport
                    setIsVisible(true);
                    // Setelah terlihat, kita bisa berhenti mengamati (unobserve)
                    observer.unobserve(domRef.current);
                }
            },
            {
                // Root Margin: Membuat intersection terjadi 100px sebelum elemen masuk
                rootMargin: '0px', 
                // Threshold: 0.1 berarti saat 10% elemen terlihat, event diaktifkan
                threshold: 0.1, 
            }
        );

        // Mulai mengamati elemen DOM
        if (domRef.current) {
            observer.observe(domRef.current);
        }

        // Cleanup: Hentikan pengamatan saat komponen di-unmount
        return () => {
            if (domRef.current) {
                // Pastikan observer.unobserve dipanggil hanya jika observer aktif
                // Pemeriksaan ini penting untuk mencegah error pada cleanup
                observer.unobserve(domRef.current); 
            }
            observer.disconnect();
        };
    }, []); // Dependency array kosong, effect hanya berjalan sekali

    return (
        <div
            ref={domRef}
            // Tailwind classes untuk animasi
            className={`
                transition-all duration-1000 ease-out
                ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-20'}
            `}
            // Delay opsional (misalnya, jika ingin stagger effect)
            style={{ transitionDelay: `${delay}ms` }} 
        >
            {children}
        </div>
    );
};

export default AnimatedSection;