import { Check } from 'lucide-react';

const Features = () => {
  const clinicFeatures = [
    { title: 'Rekam Medis Elektronik (RME)', desc: 'pengelolaan data pasien yang terstruktur, aman, dan mudah diakses' },
    { title: 'Booking Online & Antrian Digital', desc: 'kurangi penumpukan pasien dengan sistem pendaftaran yang efisien' },
    { title: 'Manajemen Resep & Apotek', desc: 'integrasi langsung antara dokter, resep, dan stok obat' },
    { title: 'Analitik Klinik Real-Time', desc: 'laporan performa klinik berbasis data untuk pengambilan keputusan yang lebih baik' },
    { title: 'Dashboard Terpisah', desc: 'tampilan khusus untuk dokter, admin, dan manajemen' },
    { title: 'Akses Web & Mobile', desc: 'kelola klinik dari mana saja, kapan saja' }
  ];

  const learningFeatures = [
    { title: 'Smart Question Bank', desc: 'upload PDF soal, AI otomatis generate bank soal siap pakai dalam hitungan detik' },
    { title: 'Adaptive Learning', desc: 'algoritma cerdas yang memastikan soal tersulit muncul lebih sering hingga benar-benar dikuasai' },
    { title: 'Flashcard & Spaced Repetition', desc: 'sistem pengulangan berbasis sains yang memaksimalkan daya ingat jangka panjang' },
    { title: 'AI Answer', desc: 'setiap jawaban dilengkapi penjelasan mendalam berbasis AI, bukan sekadar kunci jawaban' },
    { title: 'Exam Readiness Score', desc: 'prediksi persentase kelulusan ujian berdasarkan analisis performa belajar secara real-time' },
    { title: 'Ranked Battle', desc: 'kompetisi soal real-time antar teman dengan leaderboard angkatan yang kompetitif' },
    { title: 'Study Group Virtual', desc: 'bentuk grup belajar, kerjakan soal bersama, dan diskusi langsung dalam satu platform' },
    { title: 'Daily Target & Streak', desc: 'sistem target harian yang membangun kebiasaan belajar konsisten dan terukur' }
  ];

  return (
    <section id="layanan" className="w-full bg-transparent pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-24 overflow-hidden select-none">
      <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 animate-fade-in">
        

        {/* Heading */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-[clamp(1.75rem,5vw,3.2rem)] font-medium leading-[1.12] tracking-[-0.02em] text-gray-900 mb-4">
            PRODUK KAMI
          </h2>
          <p className="text-[15px] sm:text-[17px] text-gray-600 leading-relaxed max-w-[720px]">
            Infrastruktur teknologi terpadu yang menghubungkan layanan medis operasional dengan akselerasi kompetensi tenaga kesehatan.
          </p>
        </div>

        {/* 2-Column Product Grid (Frosted White-Glass) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* NUSMED Clinic */}
          <div className="bg-white/70 backdrop-blur-md border border-white/50 rounded-3xl p-6 sm:p-8 hover:shadow-[0_12px_40px_rgba(0,0,0,0.03)] hover:scale-[1.002] transition-all duration-500 flex flex-col justify-between">
            <div className="w-full">
              
              <h3 className="text-[22px] sm:text-[26px] font-bold text-gray-900 mb-4 leading-none">
                NUSMED Clinic
              </h3>
              
              <p className="text-[13px] sm:text-[14px] text-gray-600 leading-relaxed mb-8">
                Platform manajemen klinik berbasis white-label yang sepenuhnya dapat dikustomisasi sesuai identitas dan kebutuhan klinik Anda. Dirancang untuk klinik umum, klinik spesialis, dan fasilitas kesehatan primer yang ingin bertransformasi secara digital tanpa kerumitan teknis.
              </p>
              
              {/* Features list */}
              <div className="border-t border-gray-200/40 pt-6">
                <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-4">Fitur Unggulan Clinic:</h4>
                <ul className="flex flex-col gap-4">
                  {clinicFeatures.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0 mt-0.5 shadow-sm">
                        <Check size={11} strokeWidth={3} />
                      </div>
                      <div>
                        <h5 className="text-[13px] font-bold text-gray-950 leading-tight">{feat.title}</h5>
                        <p className="text-[12px] text-gray-500 leading-normal mt-0.5">{feat.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* NUSMED Learning */}
          <div className="bg-white/70 backdrop-blur-md border border-white/50 rounded-3xl p-6 sm:p-8 hover:shadow-[0_12px_40px_rgba(0,0,0,0.03)] hover:scale-[1.002] transition-all duration-500 flex flex-col justify-between">
            <div className="w-full">
              
              <h3 className="text-[22px] sm:text-[26px] font-bold text-gray-900 mb-4 leading-none">
                NUSMED Learning
              </h3>
              
              <p className="text-[13px] sm:text-[14px] text-gray-600 leading-relaxed mb-8">
                Platform belajar berbasis AI yang mampu menyesuaikan materi, soal, dan metode belajar secara personal berdasarkan kemampuan, kecepatan belajar, serta kelemahan tiap pengguna. Sistem menyediakan evaluasi performa real-time, auto-quiz, dan virtual tutoring.
              </p>
              
              {/* Features list */}
              <div className="border-t border-gray-200/40 pt-6">
                <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-4">Fitur Unggulan Learning:</h4>
                <ul className="flex flex-col gap-4">
                  {learningFeatures.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center text-[#F26522] shrink-0 mt-0.5 shadow-sm">
                        <Check size={11} strokeWidth={3} />
                      </div>
                      <div>
                        <h5 className="text-[13px] font-bold text-gray-950 leading-tight">{feat.title}</h5>
                        <p className="text-[12px] text-gray-500 leading-normal mt-0.5">{feat.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Features;
