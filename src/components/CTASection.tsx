import { TextRollButton } from './Hero';

const CTASection = () => {
  return (
    <section id="cta-section" className="w-full bg-transparent pt-12 pb-20 sm:pb-24 lg:pb-32 overflow-hidden select-none">
      <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Floating Dark-Glassmorphism Panel */}
        <div className="relative w-full bg-gray-900 rounded-3xl p-8 sm:p-12 lg:p-16 overflow-hidden border border-white/5 shadow-[0_25px_65px_rgba(0,0,0,0.18)] flex flex-col items-center text-center animate-fade-in">
          
          {/* Subtle Orange & Blue Glowing Vectors */}
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#F26522] rounded-full blur-[140px] opacity-15 pointer-events-none" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-600 rounded-full blur-[140px] opacity-10 pointer-events-none" />
          

          {/* Heading */}
          <h2 className="relative z-10 text-[clamp(1.75rem,5.5vw,3.5rem)] font-medium leading-[1.08] tracking-[-0.03em] text-white mb-6 max-w-[900px]">
            Mulai Gunakan NUSMED Hari Ini
          </h2>
          
          {/* Subtitle */}
          <p className="relative z-10 text-[14px] sm:text-[16px] text-gray-400 leading-relaxed mb-10 sm:mb-12 max-w-[640px]">
            Bergabunglah dengan ribuan faskes dan jutaan pasien di seluruh Indonesia yang telah bertransformasi ke era kesehatan digital terintegrasi yang lebih efisien dan terpercaya.
          </p>

          {/* Double roll buttons */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <TextRollButton
              text="Coba Demo Gratis"
              bgColor="bg-white"
              hoverBgColor="hover:bg-gray-100"
              textColor="text-gray-900"
              circleBgColor="bg-gray-900"
              arrowColor="text-white"
              circleSize="w-7 h-7"
              arrowSize={14}
              paddingLeft="pl-6"
              textSize="text-[13px] sm:text-[14px]"
            />
            <TextRollButton
              text="Hubungi Tim Sales"
              bgColor="bg-[#F26522]"
              hoverBgColor="hover:bg-[#e05a1a]"
              textColor="text-white"
              circleBgColor="bg-white"
              arrowColor="text-[#F26522]"
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

export default CTASection;
