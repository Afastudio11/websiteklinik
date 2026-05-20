import React, { useState } from 'react';
import { TextRollButton } from './Hero';
import { Bot, Sparkles, Send, Award, CheckCircle2 } from 'lucide-react';

interface ExamQuestion {
  id: string;
  topic: string;
  questionText: string;
  options: {
    key: string;
    text: string;
    isCorrect: boolean;
    aiFeedback: string;
    readiness: string;
  }[];
}

const AIDetail: React.FC = () => {
  const [activeQuestionId, setActiveQuestionId] = useState<string>('q1');
  const [selectedOptionKey, setSelectedOptionKey] = useState<string>('A');

  const questions: ExamQuestion[] = [
    {
      id: 'q1',
      topic: 'Topik: Kardiovaskular',
      questionText: 'Seorang laki-laki berusia 45 tahun datang ke klinik dengan keluhan pusing kaku di bagian belakang leher. Tekanan darah terukur 150/90 mmHg. Apakah diagnosis klinis awal yang paling mungkin?',
      options: [
        {
          key: 'A',
          text: 'Hipertensi Primer (ICD-10 I10)',
          isCorrect: true,
          aiFeedback: 'Jawaban Anda 100% Benar! Hipertensi primer ditandai dengan peningkatan tekanan darah persisten di atas 140/90 mmHg tanpa adanya penyebab medis sekunder yang teridentifikasi. Ketegangan leher belakang adalah gejala penyerta umum.',
          readiness: '94%',
        },
        {
          key: 'B',
          text: 'Migrain Tanpa Aura',
          isCorrect: false,
          aiFeedback: 'Kurang Tepat. Migrain biasanya menimbulkan nyeri kepala berdenyut sebelah (unilateral), berlangsung berjam-jam, sering disertai mual dan sensitivitas cahaya, bukan kaku leher belakang dengan TD 150/90 mmHg.',
          readiness: '68%',
        }
      ]
    },
    {
      id: 'q2',
      topic: 'Topik: Gastrointestinal',
      questionText: 'Seorang perempuan berusia 32 tahun mengeluh perih di bagian perut kiri atas disertai mual setelah terlambat makan siang selama 3 hari berturut-turut. Kemungkinan diagnosis utama?',
      options: [
        {
          key: 'A',
          text: 'Gastritis Akut (ICD-10 K29.0)',
          isCorrect: true,
          aiFeedback: 'Jawaban Anda 100% Benar! Gastritis ditandai dengan iritasi mukosa lambung akibat sekresi asam HCl lambung yang berlebih saat perut kosong. Keluhan perih kiri atas (epigastrium) dan mual adalah gejala klasik.',
          readiness: '96%',
        },
        {
          key: 'B',
          text: 'Appendicitis Akut',
          isCorrect: false,
          aiFeedback: 'Salah. Appendicitis (radang usus buntu) menimbulkan nyeri tekan lokal di perut kanan bawah (McBurney point) disertai demam, bukan nyeri perih di lambung kiri atas setelah terlambat makan.',
          readiness: '52%',
        }
      ]
    },
    {
      id: 'q3',
      topic: 'Topik: Pediatri',
      questionText: 'Anak berusia 3 tahun mengalami demam ringan 37.8°C dan pilek tersumbat sejak tadi siang. Penanganan awal non-farmakologi yang direkomendasikan?',
      options: [
        {
          key: 'A',
          text: 'Kompres Hangat & Hidrasi Cairan',
          isCorrect: true,
          aiFeedback: 'Jawaban Anda 100% Benar! Demam ringan adalah respon fisiologis alami imun tubuh melawan virus common cold. Hidrasi cairan mencegah risiko dehidrasi dan kompres membantu evaporasi panas alami.',
          readiness: '95%',
        },
        {
          key: 'B',
          text: 'Antibiotik Amoxicillin Segera',
          isCorrect: false,
          aiFeedback: 'Berbahaya! Infeksi pilek demam ringan umumnya disebabkan virus (selesma) yang tidak merespon antibiotik. Pemberian antibiotik tanpa diagnosis dokter memicu resistensi bakteri patogen.',
          readiness: '35%',
        }
      ]
    }
  ];

  const activeQuestion = questions.find(q => q.id === activeQuestionId) || questions[0];
  const activeFeedback = activeQuestion.options.find(opt => opt.key === selectedOptionKey) || activeQuestion.options[0];

  const features = [
    { title: 'Smart Question Bank', desc: 'AI otomatis generate bank soal dari PDF materi belajar.' },
    { title: 'Adaptive Learning', desc: 'Algoritma cerdas melatih kelemahan soal secara personal.' },
    { title: 'AI Answer Tutor 24/7', desc: 'Penjelasan mendalam dan pembahasan interaktif medis.' },
    { title: 'Exam Readiness Score', desc: 'Prediksi kelulusan ujian secara real-time dari data performa.' }
  ];

  return (
    <section id="ai-detail" className="w-full bg-transparent pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28 overflow-hidden select-none">
      <div className="w-full max-w-[1440px] mx-auto animate-fade-in">
        
        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_45%] gap-12 items-center px-5 sm:px-8 lg:px-12">
          
          {/* Left Column: Premium Dark-Glass AI Exam Simulator */}
          <div className="w-full bg-gray-950 rounded-2xl border border-gray-800/80 shadow-[0_25px_60px_rgba(0,0,0,0.25)] overflow-hidden flex flex-col h-[520px] relative">
            
            {/* Subtle glow effect */}
            <div className="absolute top-0 right-0 w-60 h-60 bg-[#F26522]/10 rounded-full blur-[100px] pointer-events-none" />
            
            {/* Header: Dark Translucent */}
            <div className="bg-gray-900/60 backdrop-blur-md text-white px-5 py-4 flex items-center justify-between border-b border-gray-800/60 z-10">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#F26522]/10 border border-[#F26522]/30 flex items-center justify-center text-[#F26522]">
                  <Sparkles size={16} />
                </div>
                <div>
                  <h4 className="text-[13px] font-bold leading-none flex items-center gap-1.5">
                    NUSMED Learning AI Tutor
                    <span className="inline-block w-1.5 h-1.5 bg-[#F26522] rounded-full animate-pulse" />
                  </h4>
                  <span className="text-[9px] text-gray-500 font-semibold uppercase mt-0.5 tracking-wide">Interactive Adaptive Simulator</span>
                </div>
              </div>
              <span className="text-[9px] font-bold bg-[#F26522] text-white px-2 py-0.5 rounded uppercase">Live</span>
            </div>

            {/* Main simulator body */}
            <div className="flex-1 p-5 overflow-y-auto flex flex-col gap-4 z-10">
              
              {/* Question topic selector pills */}
              <div className="flex flex-wrap gap-2 mb-1">
                {questions.map(q => (
                  <button
                    key={q.id}
                    onClick={() => {
                      setActiveQuestionId(q.id);
                      setSelectedOptionKey('A'); // Reset to option A on question change
                    }}
                    className={`text-[10px] font-bold px-3 py-1.5 rounded-full border transition-all ${activeQuestionId === q.id ? 'bg-[#F26522] border-[#F26522] text-white shadow-sm' : 'bg-gray-900 border-gray-800 text-gray-400 hover:bg-gray-800 hover:text-white'}`}
                  >
                    {q.topic}
                  </button>
                ))}
              </div>

              {/* Question Screen */}
              <div className="bg-gray-900/50 border border-gray-800 p-4 rounded-xl flex flex-col gap-2">
                <span className="text-[9px] font-bold text-blue-400 uppercase tracking-wider">Soal Simulasi</span>
                <p className="text-[12px] sm:text-[13px] leading-relaxed text-white font-medium">{activeQuestion.questionText}</p>
              </div>

              {/* Multiple Choice Options Selector */}
              <div className="flex flex-col gap-2">
                <span className="text-[9px] font-bold text-gray-500 uppercase tracking-wider">Pilih Jawaban Anda:</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeQuestion.options.map(opt => (
                    <button
                      key={opt.key}
                      onClick={() => setSelectedOptionKey(opt.key)}
                      className={`text-left p-3 rounded-xl border text-[11px] font-semibold transition-all flex items-center gap-2.5 ${selectedOptionKey === opt.key ? 'bg-[#F26522] border-[#F26522] text-white shadow' : 'bg-gray-900/60 border-gray-800 text-gray-300 hover:bg-gray-800'}`}
                    >
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${selectedOptionKey === opt.key ? 'bg-white text-[#F26522]' : 'bg-gray-800 text-gray-400'}`}>
                        {opt.key}
                      </div>
                      <span className="truncate">{opt.text}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* AI Feedback & Explanation */}
              <div className="flex items-start gap-3 mt-1">
                <div className="w-7 h-7 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-[#F26522] shrink-0 mt-0.5">
                  <Bot size={13} />
                </div>
                <div className="bg-gray-900/80 border border-gray-800 text-white rounded-2xl rounded-tl-none px-4 py-2.5 shadow-md flex-1 flex flex-col gap-3">
                  <div className="flex items-center justify-between border-b border-gray-800/85 pb-2">
                    <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Analisis Jawaban AI Tutor</span>
                    <span className={`text-[9px] font-bold px-2 py-0.5 rounded leading-none ${activeFeedback.isCorrect ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}>
                      {activeFeedback.isCorrect ? 'BENAR (100%)' : 'KURANG TEPAT'}
                    </span>
                  </div>
                  <p className="text-[12px] leading-relaxed text-gray-200">{activeFeedback.aiFeedback}</p>
                  
                  {/* Exam Readiness metrics indicator */}
                  <div className="bg-gray-950 border border-gray-900 rounded-xl p-3 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <Award size={14} className="text-[#F26522]" />
                      <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wide">Exam Readiness Score</span>
                    </div>
                    <span className="text-[12px] font-bold text-white font-mono">{activeFeedback.readiness}</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Input bar */}
            <div className="bg-gray-950/80 border-t border-gray-900 p-3.5 flex items-center gap-3 z-10">
              <input
                type="text"
                disabled
                value="Tanyakan pembahasan detail lainnya di sini..."
                className="flex-1 bg-gray-900/50 border border-gray-800/60 rounded-full px-4 py-2 text-[11px] sm:text-[12px] text-gray-500 cursor-not-allowed"
              />
              <button disabled className="bg-gray-900 text-gray-600 rounded-full p-2.5 cursor-not-allowed border border-gray-800/50">
                <Send size={14} />
              </button>
            </div>
          </div>

          {/* Right Column: Copy & Benefits Checklist */}
          <div className="flex flex-col items-start lg:pl-4 animate-fade-in">

            <h2 className="text-[clamp(1.75rem,5vw,3.2rem)] font-medium leading-[1.08] tracking-[-0.02em] text-gray-900 mb-6">
              Pembelajaran Cerdas Bersama AI
            </h2>
            <p className="text-[14px] sm:text-[15px] text-gray-600 leading-relaxed mb-8 max-w-[520px]">
              Platform belajar kedokteran dan kesehatan berbasis AI yang mampu menyesuaikan materi, soal, dan metode belajar secara personal berdasarkan kemampuan, kecepatan belajar, serta kelemahan tiap pengguna.
            </p>

            {/* Benefits Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full mb-10">
              {features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-gray-900 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="text-[14px] font-bold text-gray-900 leading-none mb-1">{feat.title}</h4>
                    <p className="text-[12px] text-gray-500 leading-normal">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <TextRollButton
              text="Coba NUSMED Learning"
              bgColor="bg-gray-900"
              hoverBgColor="hover:bg-gray-800"
              textColor="text-white"
              circleBgColor="bg-white"
              arrowColor="text-gray-900"
              circleSize="w-7 h-7"
              arrowSize={14}
              paddingLeft="pl-6"
              textSize="text-[13px] sm:text-[14px]"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default AIDetail;
