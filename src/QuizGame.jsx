// src/QuizGame.jsx - Kuis Sejarah Masyumi (10 Soal)

import React, { useState } from 'react';

// Data Pertanyaan Kuis (Diambil 10 Soal Pertama)
const quizQuestions = [
    {
        question: "Apa kepanjangan resmi dari Masyumi?",
        options: [
            "Majelis Syarikat Umat Islam",
            "Musyawarah Syuro Muslimin Indonesia",
            "Majelis Syuro Muslimin Indonesia",
            "Musyawarah Syarikat Umat Muslim"
        ],
        answerIndex: 2
    },
    {
        question: "Kapan Masyumi secara resmi didirikan pada masa pendudukan Jepang?",
        options: [
            "17 Agustus 1945",
            "10 November 1945",
            "22 Oktober 1946",
            "24 Oktober 1943"
        ],
        answerIndex: 3
    },
    {
        question: "Siapa tokoh Masyumi yang terkenal sebagai pencetus 'Mosi Integral' yang berhasil menyatukan kembali NKRI dari RIS?",
        options: [
            "Mohammad Roem",
            "Syafruddin Prawiranegara",
            "Mohammad Natsir",
            "Kasman Singodimedjo"
        ],
        answerIndex: 2
    },
    {
        question: "Dalam Pemilu pertama Indonesia tahun 1955, di posisi keberapa Masyumi menduduki perolehan suara terbanyak?",
        options: [
            "Pertama",
            "Kedua",
            "Ketiga",
            "Keempat"
        ],
        answerIndex: 1
    },
    {
        question: "Masyumi berubah dari organisasi payung Islam menjadi partai politik penuh pada bulan apa di tahun 1945?",
        options: [
            "Agustus",
            "September",
            "November",
            "Desember"
        ],
        answerIndex: 2
    },
    {
        question: "Apa singkatan dari pemberontakan yang dikaitkan dengan tokoh-tokoh Masyumi, yang menjadi alasan utama pembubarannya oleh Soekarno?",
        options: [
            "APRA",
            "PRRI/Permesta",
            "DI/TII",
            "G30S/PKI"
        ],
        answerIndex: 1
    },
    {
        question: "Apa semboyan Masyumi yang terkenal terkait hubungan politik dan Islam?",
        options: [
            "Agama dan Negara Tak Terpisahkan",
            "Islam Yes, Partai Islam Yes",
            "Nasionalis Religius",
            "Negara Berdasarkan Pancasila"
        ],
        answerIndex: 1
    },
    {
        question: "Tokoh Masyumi yang menjabat sebagai Perdana Menteri dari September 1950 hingga Maret 1951 adalah...",
        options: [
            "Soekarno",
            "Hamka",
            "Mohammad Hatta",
            "Mohammad Natsir"
        ],
        answerIndex: 3
    },
    {
        question: "Masyumi menentang keras ideologi yang diusung Presiden Soekarno di masa Demokrasi Terpimpin, yaitu...",
        options: [
            "Nasakom (Nasionalisme, Agama, Komunisme)",
            "Demokrasi Liberal",
            "Tiga Pilar Bangsa",
            "Pancasila Murni"
        ],
        answerIndex: 0
    },
    {
        question: "Pada tahun berapakah Masyumi secara resmi dibubarkan oleh Presiden Soekarno?",
        options: [
            "1959",
            "1960",
            "1961",
            "1965"
        ],
        answerIndex: 1
    }
];

const QuizGame = () => {
    // State untuk mengontrol alur kuis
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showResults, setShowResults] = useState(false);
    // Inisialisasi userAnswers dengan jumlah soal yang baru (10 soal)
    const [userAnswers, setUserAnswers] = useState(Array(quizQuestions.length).fill(null));

    // Handler ketika pengguna memilih opsi jawaban
    const handleAnswerClick = (selectedIndex) => {
        const newAnswers = [...userAnswers];
        newAnswers[currentQuestionIndex] = selectedIndex;
        setUserAnswers(newAnswers);

        // Langsung pindah ke pertanyaan berikutnya
        const nextQuestionIndex = currentQuestionIndex + 1;
        if (nextQuestionIndex < quizQuestions.length) {
            setCurrentQuestionIndex(nextQuestionIndex);
        } else {
            // Jika sudah pertanyaan terakhir, hitung skor dan tampilkan hasil
            calculateScore(newAnswers);
        }
    };

    // Fungsi untuk menghitung skor
    const calculateScore = (answers) => {
        let finalScore = 0;
        answers.forEach((answer, index) => {
            if (answer !== null && answer === quizQuestions[index].answerIndex) {
                finalScore++;
            }
        });
        setScore(finalScore);
        setShowResults(true);
    };

    // Handler untuk memulai kuis dari awal
    const restartQuiz = () => {
        setCurrentQuestionIndex(0);
        setScore(0);
        setShowResults(false);
        setUserAnswers(Array(quizQuestions.length).fill(null));
    };

    // Tampilan Hasil Akhir
    if (showResults) {
        return (
            <section id="kuis" className="py-16 bg-gray-50 font-sans">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-6">
                        Hasil Kuis Anda
                    </h2>
                    <p className="text-2xl text-gray-700 mb-8">
                        Anda berhasil menjawab <span className="font-bold text-green-700">{score}</span> dari {quizQuestions.length} pertanyaan!
                    </p>
                    <div className="bg-white p-6 shadow-xl rounded-lg border-t-4 border-green-700 mb-8">
                        <p className="text-xl font-semibold mb-4 text-green-800">Evaluasi</p>
                        {/* Logic Evaluasi Disesuaikan untuk 10 Soal: 8-10 Sangat Bagus, 5-7 Bagus */}
                        {score >= 8 ? (
                            <p className="text-gray-600">Selamat! Pengetahuan Anda tentang sejarah Masyumi sangat luar biasa. Anda pasti seorang peneliti sejarah yang gigih!</p>
                        ) : score >= 5 ? (
                            <p className="text-gray-600">Bagus! Anda memiliki pemahaman yang solid. Terus eksplorasi agar pengetahuan Anda makin mendalam.</p>
                        ) : (
                            <p className="text-gray-600">Jangan berkecil hati! Ini adalah waktu yang tepat untuk membaca kembali sejarah dan tokoh-tokoh besar Masyumi.</p>
                        )}
                    </div>
                    <button
                        onClick={restartQuiz}
                        className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105"
                    >
                        Ulangi Kuis
                    </button>
                    
                    {/* Bagian Review Jawaban (Opsional) */}
                    <div className="mt-10 text-left">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Review Jawaban</h3>
                        {quizQuestions.map((q, index) => (
                            <div key={index} className="mb-6 p-4 border rounded-lg shadow-sm">
                                <p className="font-semibold text-lg mb-2">
                                    {index + 1}. {q.question}
                                </p>
                                {q.options.map((option, optIndex) => (
                                    <div 
                                        key={optIndex} 
                                        className={`p-2 my-1 rounded ${
                                            // Jawaban Benar
                                            optIndex === q.answerIndex ? 'bg-green-100 border border-green-400 font-bold text-green-800' :
                                            // Jawaban Salah Anda
                                            (optIndex === userAnswers[index] && optIndex !== q.answerIndex) ? 'bg-red-100 border border-red-400 line-through' :
                                            'text-gray-700'
                                        }`}
                                    >
                                        {option} 
                                        {(optIndex === userAnswers[index] && optIndex !== q.answerIndex) && 
                                            <span className="text-red-600 ml-2">(Jawaban Anda: SALAH)</span>
                                        }
                                        {optIndex === q.answerIndex && 
                                            <span className="ml-2">({optIndex === userAnswers[index] ? 'Jawaban Benar' : 'Benar'})</span>
                                        }
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        );
    }

    // Tampilan Pertanyaan Kuis
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const progressPercentage = ((currentQuestionIndex) / quizQuestions.length) * 100;

    return (
        <section id="kuis" className="py-16 bg-gray-50 font-sans min-h-[600px]">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-4 text-center">
                    Uji Pengetahuan Sejarah Masyumi
                </h2>
                <p className="text-center text-xl text-gray-600 mb-8">
                    Jawab {quizQuestions.length} pertanyaan untuk menguji pemahaman Anda.
                </p>

                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-8">
                    <div 
                        className="bg-green-600 h-2.5 rounded-full transition-all duration-500" 
                        style={{ width: `${progressPercentage}%` }}
                    ></div>
                </div>

                {/* Kotak Pertanyaan */}
                <div className="bg-white p-8 md:p-10 shadow-2xl rounded-xl border-t-8 border-green-700">
                    <p className="text-lg font-medium text-gray-500 mb-2">
                        Pertanyaan {currentQuestionIndex + 1} dari {quizQuestions.length}
                    </p>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 leading-relaxed">
                        {currentQuestion.question}
                    </h3>
                    
                    <div className="space-y-4">
                        {currentQuestion.options.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => handleAnswerClick(index)}
                                disabled={userAnswers[currentQuestionIndex] !== null}
                                className={`
                                    w-full text-left p-4 rounded-lg border-2 font-medium transition duration-300
                                    ${userAnswers[currentQuestionIndex] === null 
                                        ? 'bg-white border-gray-300 text-gray-700 hover:bg-green-50 hover:border-green-400'
                                        : (userAnswers[currentQuestionIndex] === index && index === currentQuestion.answerIndex) 
                                            ? 'bg-green-100 border-green-600 text-green-800 cursor-not-allowed'
                                            : (userAnswers[currentQuestionIndex] === index && index !== currentQuestion.answerIndex) 
                                                ? 'bg-red-100 border-red-600 text-red-800 cursor-not-allowed'
                                                : 'bg-white border-gray-300 text-gray-700 cursor-not-allowed'
                                    }
                                `}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default QuizGame;    