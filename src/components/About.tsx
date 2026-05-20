import { Target, Compass } from 'lucide-react';

const About = () => {
  return (
    <section id="tentang kami" className="w-full bg-transparent pt-16 sm:pt-20 lg:pt-28 pb-12 sm:pb-16 lg:pb-24 overflow-hidden select-none">
      <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 animate-fade-in">
        

        {/* 2-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[55%_1fr] gap-12 lg:gap-16 items-start">
          
          {/* Left Column: About Us Strategic Copy */}
          <div className="flex flex-col gap-6">
            <h2 className="text-[clamp(1.75rem,5vw,3.2rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900">
              ABOUT US
            </h2>
            
            <div className="flex flex-col gap-5 text-gray-700 text-[14px] sm:text-[15px] leading-relaxed max-w-[680px]">
              <p className="font-semibold text-gray-950 text-[15px] sm:text-[17px] leading-normal">
                Sistem kesehatan yang kuat tidak dibangun dalam satu titik. Ia tumbuh dari setiap lapisan, dari ruang pendidikan tempat tenaga medis dibentuk, hingga fasilitas klinis tempat keputusan nyawa diambil setiap harinya. <span className="text-[#F26522] font-bold">NUSMED hadir di seluruh lapisan tersebut.</span>
              </p>
              <p>
                Sebagai perusahaan teknologi kesehatan Indonesia, kami tidak datang dengan solusi parsial. Kami membangun infrastruktur yang menghubungkan kompetensi tenaga medis dengan kebutuhan operasional klinis secara terintegrasi, berkelanjutan, dan berbasis data. Bukan sekadar alat bantu, melainkan fondasi sistem.
              </p>
              <p>
                Indonesia membutuhkan lebih dari sekadar fasilitas yang memadai. Indonesia membutuhkan ekosistem kesehatan yang dirancang untuk bertahan dan berkembang. <span className="font-bold text-gray-950">NUSMED adalah mitra strategis untuk membangunnya.</span>
              </p>
            </div>
          </div>

          {/* Right Column: Premium Visi & Misi Card */}
          <div className="bg-white/70 backdrop-blur-md border border-white/50 rounded-2xl p-6 sm:p-8 hover:shadow-[0_12px_40px_rgba(0,0,0,0.03)] hover:scale-[1.002] transition-all duration-500 flex flex-col gap-8">
            
            {/* VISI Panel */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2.5 text-[#F26522]">
                <Compass size={18} strokeWidth={2.5} />
                <span className="text-[12px] font-bold uppercase tracking-wider">Visi Kami</span>
              </div>
              <p className="text-[14px] sm:text-[15px] font-bold text-gray-950 leading-relaxed italic border-l-2 border-[#F26522] pl-3">
                "Menjadi ekosistem teknologi kesehatan terdepan di Indonesia yang menghubungkan layanan klinis dan pendidikan medis dalam satu platform terintegrasi."
              </p>
            </div>

            {/* MISI Panel */}
            <div className="flex flex-col gap-4 border-t border-gray-200/50 pt-6">
              <div className="flex items-center gap-2.5 text-blue-600">
                <Target size={18} strokeWidth={2.5} />
                <span className="text-[12px] font-bold uppercase tracking-wider">Misi Kami</span>
              </div>
              
              <ul className="flex flex-col gap-3.5">
                {[
                  "Membantu klinik beroperasi lebih efisien melalui teknologi white-label yang mudah diadopsi",
                  "Mempersiapkan tenaga medis Indonesia yang lebih kompeten melalui pembelajaran berbasis AI",
                  "Memperluas akses layanan dan pendidikan kesehatan berkualitas ke seluruh penjuru nusantara"
                ].map((misi, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-gray-900 text-white flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                      {i + 1}
                    </div>
                    <span className="text-[13px] font-semibold text-gray-700 leading-normal">{misi}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
