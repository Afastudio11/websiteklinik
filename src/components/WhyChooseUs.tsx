import { TextRollButton } from './Hero';
import { ShieldCheck, Network, Smartphone, Headphones, Users, BookOpen } from 'lucide-react';

const WhyChooseUs = () => {
  const cards = [
    {
      title: 'Lokal, berstandar global',
      desc: 'Dibangun khusus untuk ekosistem kesehatan Indonesia dengan teknologi AI kelas dunia.',
      icon: <ShieldCheck size={22} className="text-gray-900" />,
    },
    {
      title: 'Dua produk, satu ekosistem',
      desc: 'Clinic dan Learning saling memperkuat, membentuk tenaga medis yang siap dari bangku kuliah hingga ruang praktik.',
      icon: <Network size={22} className="text-gray-900" />,
    },
    {
      title: 'Keamanan data terjamin',
      desc: 'Seluruh data pasien dan pengguna dikelola dengan standar keamanan dan privasi tertinggi.',
      icon: <Smartphone size={22} className="text-gray-900" />,
    },
    {
      title: 'Skalabel tanpa batas',
      desc: 'Cocok untuk klinik tunggal, jaringan klinik, hingga institusi pendidikan kesehatan berskala nasional.',
      icon: <Headphones size={22} className="text-gray-900" />,
    },
  ];

  return (
    <section id="mengapa-kami" className="w-full bg-transparent pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28 overflow-hidden select-none">
      <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 animate-fade-in">
        

        {/* Heading */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-[clamp(1.75rem,5vw,3.2rem)] font-medium leading-[1.12] tracking-[-0.02em] text-gray-900 mb-4">
            MENGAPA NUSMED?
          </h2>
          <p className="text-[15px] sm:text-[17px] text-gray-600 leading-relaxed max-w-[720px]">
            Kami berdedikasi membangun infrastruktur teknologi kesehatan terbaik di Indonesia demi menjamin pelayanan medis yang presisi, cepat, dan merata.
          </p>
        </div>

        {/* 2x2 Grid of detailed cards (Frosted Glass) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 sm:mb-20">
          {cards.map((card, idx) => (
            <div key={idx} className="bg-white/70 backdrop-blur-md border border-white/50 rounded-2xl p-6 sm:p-8 hover:shadow-[0_12px_40px_rgba(0,0,0,0.03)] hover:scale-[1.005] transition-all duration-500 flex flex-col items-start">
              <div className="w-11 h-11 rounded-xl bg-white border border-gray-200/50 flex items-center justify-center mb-6 shadow-sm">
                {card.icon}
              </div>
              <h3 className="text-[16px] sm:text-[18px] font-bold text-gray-900 mb-3">
                {card.title}
              </h3>
              <p className="text-[13px] sm:text-[14px] text-gray-600 leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* TARGET PENGGUNA SECTION */}
        <div className="border-t border-gray-200/50 pt-16 sm:pt-20 mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[12px] font-bold uppercase tracking-wider text-gray-400">Sasaran Layanan</span>
            <h3 className="text-[20px] sm:text-[24px] font-bold text-gray-900 leading-none">TARGET PENGGUNA</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {/* Target 1: Clinic */}
            <div className="bg-white/70 backdrop-blur-md border border-white/50 rounded-2xl p-6 sm:p-8 hover:shadow-[0_12px_40px_rgba(0,0,0,0.03)] hover:scale-[1.005] transition-all duration-500 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center shrink-0 shadow-sm">
                <Users size={20} />
              </div>
              <div>
                <h4 className="text-[15px] font-bold text-gray-950 mb-2">NUSMED Clinic</h4>
                <p className="text-[13px] text-gray-600 leading-relaxed font-semibold">
                  Pemilik dan pengelola klinik, dokter umum dan spesialis, serta tenaga administrasi fasilitas kesehatan primer yang ingin beroperasi lebih efisien dan modern.
                </p>
              </div>
            </div>

            {/* Target 2: Learning */}
            <div className="bg-white/70 backdrop-blur-md border border-white/50 rounded-2xl p-6 sm:p-8 hover:shadow-[0_12px_40px_rgba(0,0,0,0.03)] hover:scale-[1.005] transition-all duration-500 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 text-[#F26522] flex items-center justify-center shrink-0 shadow-sm">
                <BookOpen size={20} />
              </div>
              <div>
                <h4 className="text-[15px] font-bold text-gray-950 mb-2">NUSMED Learning</h4>
                <p className="text-[13px] text-gray-600 leading-relaxed font-semibold">
                  Mahasiswa kesehatan dan tenaga medis yang membutuhkan pengembangan kompetensi berkelanjutan.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Row */}
        <div className="flex flex-wrap items-center gap-4">
          <TextRollButton
            text="Mulai Sekarang"
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
    </section>
  );
};

export default WhyChooseUs;
