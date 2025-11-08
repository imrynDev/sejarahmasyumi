// src/App.jsx - KODE FINAL DAN BERSIH UNTUK APLIKASI UTAMA

import React from 'react';

// === 1. Import Komponen Reusable (PATH: langsung dari ./ ) ===
import Navbar from './Navbar.jsx'; 
import AnimatedSection from './AnimatedSection.jsx';
import Footer from './Footer.jsx';
import ScrollToTopButton from './ScrollToTopButton.jsx';

// === 2. Import Section Utama (PATH: langsung dari ./ ) ===
import SejarahSection from './SejarahSection.jsx';
import QuotesSection from './QuotesSection.jsx';
import CounterSection from './CounterSection.jsx';
import TokohSection from './TokohSection.jsx';
import VisiMisi from './VisiMisi.jsx';
import AliansiPolitik from './AliansiPolitik.jsx';
import WarisanSection from './WarisanSection.jsx';
import PembubaranSection from './PembubaranSection.jsx';
import QuizGame from './QuizGame.jsx'; 

// === 3. Hero ===
import Hero from './Hero.jsx';


function App() {
    return (
        <div className="min-h-screen bg-gray-50 font-sans"> 
            <Navbar />
            
            <main>
                {/* Hero TIDAK di-wrap AnimatedSection agar Fade-in Bawaan Hero Bekerja */}
                <Hero />
                
                {/* Semua Section Lain di-wrap AnimatedSection untuk efek fade-in saat scroll */}
                <AnimatedSection><SejarahSection /></AnimatedSection>
                <AnimatedSection><CounterSection /></AnimatedSection>
                <AnimatedSection><TokohSection /></AnimatedSection>
                <AnimatedSection><QuotesSection /></AnimatedSection>
                <AnimatedSection><VisiMisi /></AnimatedSection>
                <AnimatedSection><AliansiPolitik /></AnimatedSection>
                <AnimatedSection><WarisanSection /></AnimatedSection>
                <AnimatedSection><PembubaranSection /></AnimatedSection>

                {/* SECTION INTERAKTIF TERAKHIR (QUIZ) */}
                <AnimatedSection>
                    <QuizGame /> 
                </AnimatedSection>
            </main>
            
            <Footer />
            <ScrollToTopButton /> 
        </div>
    );
}

export default App;