import React, { useState, useEffect } from 'react';
import { ArrowRight, Clock, Menu, X } from 'lucide-react';
// @ts-ignore
import { Shader, Swirl, ChromaFlow, FlutedGlass, FilmGrain } from 'shaders/react';

// Custom Text Roll Button implementing the vertical scroll and arrow rotation animations
export const TextRollButton: React.FC<{
  text: string;
  onClick?: () => void;
  bgColor: string;
  hoverBgColor: string;
  textColor: string;
  circleBgColor: string;
  arrowColor: string;
  circleSize: string;
  arrowSize?: number;
  paddingLeft: string;
  textSize: string;
}> = ({
  text,
  onClick,
  bgColor,
  hoverBgColor,
  textColor,
  circleBgColor,
  arrowColor,
  circleSize,
  arrowSize = 14,
  paddingLeft,
  textSize
}) => {
  return (
    <button
      onClick={onClick}
      className={`group flex items-center ${bgColor} ${hoverBgColor} ${textColor} rounded-full ${paddingLeft} pr-2 py-2 gap-3 transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] shrink-0`}
    >
      <div className="h-[20px] overflow-hidden relative flex flex-col">
        <div className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-1/2">
          <span className={`${textSize} font-medium leading-[20px] h-[20px] flex items-center whitespace-nowrap`}>
            {text}
          </span>
          <span className={`${textSize} font-medium leading-[20px] h-[20px] flex items-center whitespace-nowrap`}>
            {text}
          </span>
        </div>
      </div>
      <div className={`${circleSize} ${circleBgColor} ${arrowColor} rounded-full flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45 shrink-0`}>
        <ArrowRight size={arrowSize} strokeWidth={2.5} />
      </div>
    </button>
  );
};

export const PartnerBadgeSvg: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-[#E8704E] shrink-0">
    <path d="m19.6 66.5 19.7-11 .3-1-.3-.5h-1l-3.3-.2-11.2-.3L14 53l-9.5-.5-2.4-.5L0 49l.2-1.5 2-1.3 2.9.2 6.3.5 9.5.6 6.9.4L38 49.1h1.6l.2-.7-.5-.4-.4-.4L29 41l-10.6-7-5.6-4.1-3-2-1.5-2-.6-4.2 2.7-3 3.7.3.9.2 3.7 2.9 8 6.1L37 36l1.5 1.2.6-.4.1-.3-.7-1.1L33 25l-6-10.4-2.7-4.3-.7-2.6c-.3-1-.4-2-.4-3l3-4.2L28 0l4.2.6L33.8 2l2.6 6 4.1 9.3L47 29.9l2 3.8 1 3.4.3 1h.7v-.5l.5-7.2 1-8.7 1-11.2.3-3.2 1.6-3.8 3-2L61 2.6l2 2.9-.3 1.8-1.1 7.7L59 27.1l-1.5 8.2h.9l1-1.1 4.1-5.4 6.9-8.6 3-3.5L77 13l2.3-1.8h4.3l3.1 4.7-1.4 4.9-4.4 5.6-3.7 4.7-5.3 7.1-3.2 5.7.3.4h.7l12-2.6 6.4-1.1 7.6-1.3 3.5 1.6.4 1.6-1.4 3.4-8.2 2-9.6 2-14.3 3.3-.2.1.2.3 6.4.6 2.8.2h6.8l12.6 1 3.3 2 1.9 2.7-.3 2-5.1 2.6-6.8-1.6-16-3.8-5.4-1.3h-.8v.4l4.6 4.5 8.3 7.5L89 80.1l.5 2.4-1.3 2-1.4-.2-9.2-7-3.6-3-8-6.8h-.5v.7l1.8 2.7 9.8 14.7.5 4.5-.7 1.4-2.6 1-2.7-.6-5.8-8-6-9-4.7-8.2-.5.4-2.9 30.2-1.3 1.5-3 1.2-2.5-2-1.4-3 1.4-6.2 1.6-8 1.3-6.4 1.2-7.9.7-2.6v-.2H49L43 72l-9 12.3-7.2 7.6-1.7.7-3-1.5.3-2.8L24 86l10-12.8 6-7.9 4-4.6-.1-.5h-.3L17.2 77.4l-4.7.6-2-2 .2-3 1-1 8-5.5Z" />
  </svg>
);

const Hero: React.FC = () => {
  const [jakartaTime, setJakartaTime] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Live Jakarta timezone clock (WIB)
  useEffect(() => {
    const updateClock = () => {
      const formatted = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Asia/Jakarta',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      }).format(new Date());
      setJakartaTime(formatted);
    };
    updateClock();
    const timer = setInterval(updateClock, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex flex-col bg-[#EFEFEF] overflow-hidden select-none">
      {/* Full-screen animated shader overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none w-full h-full hero-shader-container">
        <Shader>
          <Swirl colorA="#ffffff" colorB="#f0f0f0" detail={1.7} />
          <ChromaFlow baseColor="#ffffff" downColor="#ff5f03" leftColor="#ff5f03" rightColor="#ff5f03" upColor="#ff5f03" momentum={13} radius={3.5} />
          <FlutedGlass aberration={0.61} angle={31} frequency={8} highlight={0.12} highlightSoftness={0} lightAngle={-90} refraction={4} shape="rounded" softness={1} speed={0.15} />
          <FilmGrain strength={0.05} />
        </Shader>
      </div>

      {/* Navigation Header (z-20, relative) */}
      <header className="relative w-full max-w-[1440px] mx-auto z-20 p-2 sm:p-3">
        <div className="flex items-center justify-between bg-white rounded-full p-[5px] shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-white/50">
          
          {/* LEFT: Logo + nav links */}
          <div className="flex items-center gap-2 sm:gap-4 pl-1">
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-900 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-800 transition-colors">
              <span className="text-[10px] sm:text-[11px] font-bold text-white tracking-tight">NM</span>
            </div>
            
            <nav className="hidden md:flex items-center gap-6 pl-4">
              {["Layanan", "Tentang Kami", "Fitur", "Hubungi"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-[14px] font-medium text-gray-900 hover:text-gray-500 transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* RIGHT: Q1 message + Live London time + CTA */}
          <div className="hidden md:flex items-center gap-5 pr-1">
            <span className="hidden lg:inline text-[13px] text-gray-600 font-normal">
              Ekosistem Kesehatan Digital Indonesia
            </span>
            
            <div className="flex items-center gap-1.5 text-[13px] text-gray-600 font-normal">
              <Clock size={14} className="text-gray-500" />
              <span>{jakartaTime} WIB</span>
            </div>
            
            <TextRollButton
              text="Coba Demo Gratis"
              bgColor="bg-gray-900"
              hoverBgColor="hover:bg-gray-800"
              textColor="text-white"
              circleBgColor="bg-white"
              arrowColor="text-gray-900"
              circleSize="w-6 h-6"
              arrowSize={14}
              paddingLeft="pl-5"
              textSize="text-[13px]"
            />
          </div>

          {/* MOBILE: Toggle button */}
          <div className="md:hidden pr-1">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-9 h-9 bg-gray-900 text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
            >
              {isMenuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col justify-end">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 transition-opacity duration-500" 
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Bottom Sheet */}
          <div className="relative bg-white rounded-2xl mx-3 mb-3 p-6 sm:p-8 z-10 flex flex-col gap-8 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
            {/* Header */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full text-[13px] text-gray-600 font-normal">
                <Clock size={13} className="text-gray-500" />
                <span>{jakartaTime} WIB</span>
              </div>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="w-9 h-9 bg-gray-900 text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
              >
                <X size={16} />
              </button>
            </div>
            
            {/* Navigation links */}
            <div className="flex flex-col gap-4 py-4 pl-1">
              {["Layanan", "Tentang Kami", "Fitur", "Hubungi"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-[28px] sm:text-[32px] font-medium text-gray-900 hover:text-gray-500 transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
            
            {/* CTA action */}
            <div className="pt-2">
              <TextRollButton
                text="Mulai Sekarang"
                bgColor="bg-[#F26522]"
                hoverBgColor="hover:bg-[#e05a1a]"
                textColor="text-white"
                circleBgColor="bg-white"
                arrowColor="text-[#F26522]"
                circleSize="w-7 h-7 sm:w-8 sm:h-8"
                arrowSize={14}
                paddingLeft="pl-5 sm:pl-6"
                textSize="text-[13px] sm:text-[14px]"
              />
            </div>
          </div>
        </div>
      )}

      {/* Hero content area (z-20) centered vertically to perfectly fill the space */}
      <div className="relative flex-1 w-full max-w-[1440px] mx-auto z-20 px-5 sm:px-8 lg:px-12 py-10 sm:py-16 flex flex-col items-center justify-center text-center">
        
        {/* Giant Hero headline */}
        <h1 className="text-gray-900 font-medium leading-[1.02] tracking-[-0.03em] text-[clamp(2.8rem,8vw,5.5rem)] max-w-[1250px] mb-12 sm:mb-16 mt-2">
          Indonesia's<br />Digital Health Ecosystem.
        </h1>
        
        {/* Two core products displayed side-by-side (Frameless & Center-Aligned) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 max-w-[1200px] w-full text-center">
          
          {/* Card 1: NUSMED Clinic */}
          <div className="group relative bg-transparent flex flex-col items-center justify-between hover:scale-[1.01] transition-all duration-500 py-3">
            <div className="flex flex-col items-center">
              <span className="inline-block text-[11px] sm:text-[13px] font-bold text-blue-600 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-5 tracking-wider uppercase">Clinic Platform</span>
              <h3 className="text-[28px] sm:text-[34px] font-bold text-gray-900 mb-4 leading-none">NUSMED Clinic</h3>
              <p className="text-[14.5px] sm:text-[16.5px] text-gray-600 leading-relaxed mb-8 max-w-[480px]">
                Platform manajemen klinik berbasis white-label yang sepenuhnya dapat dikustomisasi sesuai identitas dan kebutuhan klinik Anda.
              </p>
            </div>
            <div className="flex justify-center">
              <TextRollButton
                text="Coba NUSMED Clinic"
                bgColor="bg-gray-900"
                hoverBgColor="hover:bg-gray-800"
                textColor="text-white"
                circleBgColor="bg-white"
                arrowColor="text-gray-900"
                circleSize="w-9 h-9"
                paddingLeft="pl-6"
                textSize="text-[14px] sm:text-[15.5px]"
              />
            </div>
          </div>

          {/* Card 2: NUSMED Learning */}
          <div className="group relative bg-transparent flex flex-col items-center justify-between hover:scale-[1.01] transition-all duration-500 py-3">
            <div className="flex flex-col items-center">
              <span className="inline-block text-[11px] sm:text-[13px] font-bold text-[#F26522] bg-orange-50 border border-orange-100 rounded-full px-4 py-1.5 mb-5 tracking-wider uppercase">AI Learning</span>
              <h3 className="text-[28px] sm:text-[34px] font-bold text-gray-900 mb-4 leading-none">NUSMED Learning</h3>
              <p className="text-[14.5px] sm:text-[16.5px] text-gray-600 leading-relaxed mb-8 max-w-[480px]">
                Platform belajar berbasis AI yang mampu menyesuaikan materi, soal, dan metode belajar secara personal untuk kompetensi tenaga medis.
              </p>
            </div>
            <div className="flex justify-center">
              <TextRollButton
                text="Coba NUSMED Learning"
                bgColor="bg-[#F26522]"
                hoverBgColor="hover:bg-[#e05a1a]"
                textColor="text-white"
                circleBgColor="bg-white"
                arrowColor="text-[#F26522]"
                circleSize="w-9 h-9"
                paddingLeft="pl-6"
                textSize="text-[14px] sm:text-[15.5px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
