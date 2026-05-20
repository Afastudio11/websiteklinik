import React from 'react';
import { ArrowRight } from 'lucide-react';

const CaseStudies: React.FC = () => {
  const narrativVideoUrl = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260516_122702_390f5305-8719-41d5-ae80-d23ab3796c28.mp4";
  const luminarVideoUrl = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260516_123323_f909c2b8-ff6c-4edf-882b-8ebcdbe389b5.mp4";

  return (
    <section id="projects" className="w-full bg-[#F5F5F5] pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28 overflow-hidden select-none">
      <div className="w-full max-w-[1440px] mx-auto">
        
        {/* Badge row */}
        <div className="px-5 sm:px-8 lg:px-12 flex items-center gap-3 mb-6 sm:mb-8">
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gray-900 text-white flex items-center justify-center text-[11px] sm:text-[12px] font-semibold leading-none">
            2
          </div>
          <div className="text-[12px] sm:text-[13px] font-medium border border-gray-300 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-gray-900 leading-none">
            Layanan Unggulan
          </div>
        </div>

        {/* Heading h2 */}
        <div className="px-5 sm:px-8 lg:px-12">
          <h2 className="text-[clamp(1.75rem,7vw,4.2rem)] sm:text-[clamp(2.5rem,5vw,4.2rem)] font-medium leading-[1.08] tracking-[-0.03em] text-gray-900 mb-10 sm:mb-14 lg:mb-16">
            Produk Kami
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-7 px-5 sm:px-8 lg:px-12">
          
          {/* CARD 1 (Narrativ) */}
          <div className="flex flex-col">
            {/* Video container */}
            <div className="group relative aspect-[329/246] w-full rounded-2xl overflow-hidden bg-[#1a1d2e] cursor-pointer shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
              {/* Autoplay Loop Video */}
              <video
                src={narrativVideoUrl}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 ease-out"
              />
              
              {/* Hover Button */}
              <div className="absolute bottom-4 left-4 h-9 w-9 group-hover:w-[148px] bg-white rounded-full flex items-center justify-center overflow-hidden transition-all duration-300 ease-in-out shadow-[0_4px_12px_rgba(0,0,0,0.08)] pointer-events-none">
                {/* Learn more text (only visible on group hover) */}
                <span className="absolute left-4 text-[13px] font-semibold text-gray-900 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  Coba Demo
                </span>
                {/* Link icon (perfectly centered when not hovered, aligns right when hovered) */}
                <div className="absolute right-[10px] transition-transform duration-300 -rotate-45 group-hover:rotate-0 flex items-center justify-center w-4 h-4 text-gray-900">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="14" 
                    height="14" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Title & Description */}
            <div className="mt-4">
              <h3 className="text-[14px] sm:text-[15px] font-semibold text-gray-900">
                Nusmed Klinik
              </h3>
              <p className="text-[13px] sm:text-[14px] text-gray-600 mt-1 leading-relaxed">
                Sistem manajemen faskes lengkap dengan Rekam Medis Elektronik (RME) terstandar SATUSEHAT Kemenkes.
              </p>
            </div>
          </div>

          {/* CARD 2 (Luminar) */}
          <div className="flex flex-col">
            {/* Video container */}
            <div className="group relative aspect-square w-full rounded-2xl overflow-hidden bg-[#6b6b6b] cursor-pointer shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
              {/* Autoplay Loop Video */}
              <video
                src={luminarVideoUrl}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 ease-out"
              />
              
              {/* Hover Button */}
              <div className="absolute bottom-4 left-4 h-9 w-9 group-hover:w-[168px] bg-gray-900 rounded-full flex items-center justify-center overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] shadow-[0_4px_12px_rgba(0,0,0,0.2)] pointer-events-none">
                {/* View case study text (only visible on group hover) */}
                <span className="absolute left-4 text-[13px] font-semibold text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  Lihat Fitur
                </span>
                {/* Arrow icon (perfectly centered when not hovered, aligns right when hovered) */}
                <div className="absolute right-[10px] transition-transform duration-500 -rotate-45 group-hover:rotate-0 flex items-center justify-center w-4 h-4 text-white">
                  <ArrowRight size={14} strokeWidth={2.5} />
                </div>
              </div>
            </div>
            
            {/* Title & Description */}
            <div className="mt-4">
              <h3 className="text-[14px] sm:text-[15px] font-semibold text-gray-900">
                Nusmed Pasien
              </h3>
              <p className="text-[13px] sm:text-[14px] text-gray-600 mt-1 leading-relaxed">
                Aplikasi mobile pasien untuk konsultasi dokter, tebus resep obat, booking jadwal, dan rekam medis pribadi.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
