import { Star } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  stars: number;
  avatarBg: string;
  avatarChar: string;
}

const Testimonials = () => {
  const reviews: Testimonial[] = [
    {
      name: 'Dr. Budi Santoso',
      role: 'Pemilik Klinik Utama Sehat',
      quote: 'Sangat membantu operasional klinik kami. Dulu pendaftaran antrean dan pencatatan RME pasien sangat melelahkan dan sering salah catat. Sekarang, dengan sistem rekam medis elektronik Nusmed yang terstandar SATUSEHAT Kemenkes, semua serba otomatis, cepat, dan aman.',
      stars: 5,
      avatarBg: 'bg-gray-900 text-white',
      avatarChar: 'B',
    },
    {
      name: 'Ibu Rina Wulandari',
      role: 'Pasien Rawat Jalan',
      quote: 'Aplikasi mobile pasiennya sangat memudahkan saya tebus resep obat digital dan booking jadwal konsultasi dengan dokter spesialis terdekat. Tidak perlu lagi mengantre panjang di apotek rumah sakit berjam-jam lamanya!',
      stars: 5,
      avatarBg: 'bg-gray-900 text-white',
      avatarChar: 'R',
    },
    {
      name: 'Sari Lestari',
      role: 'Staf Administrasi & Kasir Klinik',
      quote: 'Sistem billing kasir dan inventory obat apotek kami sekarang sangat rapi. Laporan keuangan bulanan faskes bisa diakses real-time secara akurat. Koordinasi staf administrasi jadi jauh lebih efektif.',
      stars: 5,
      avatarBg: 'bg-gray-900 text-white',
      avatarChar: 'S',
    },
  ];

  return (
    <section id="testimonials" className="w-full bg-transparent pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-24 overflow-hidden select-none">
      <div className="w-full max-w-[1440px] mx-auto animate-fade-in">
        

        {/* Heading */}
        <div className="px-5 sm:px-8 lg:px-12 mb-12 sm:mb-16">
          <h2 className="text-[clamp(1.75rem,5vw,3.2rem)] font-medium leading-[1.12] tracking-[-0.02em] text-gray-900 mb-4">
            Dipercaya Oleh Pengguna Kami
          </h2>
          <p className="text-[15px] sm:text-[17px] text-gray-600 leading-relaxed max-w-[720px]">
            Apa kata mereka yang telah bertransformasi bersama ekosistem kesehatan digital terintegrasi Nusmed.
          </p>
        </div>

        {/* 3 Columns Testimonial Grid (Frosted Glass) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-5 sm:px-8 lg:px-12">
          {reviews.map((rev, idx) => (
            <div key={idx} className="bg-white/70 backdrop-blur-md border border-white/50 rounded-2xl p-6 sm:p-8 hover:shadow-[0_12px_40px_rgba(0,0,0,0.03)] hover:scale-[1.005] transition-all duration-500 flex flex-col justify-between items-start">
              {/* Top rating and quote */}
              <div className="w-full mb-6">
                <div className="flex items-center gap-0.5 mb-4">
                  {[...Array(rev.stars)].map((_, i) => (
                    <Star key={i} size={15} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-[13px] sm:text-[14px] text-gray-700 leading-relaxed font-medium italic">
                  "{rev.quote}"
                </p>
              </div>

              {/* User Bio */}
              <div className="flex items-center gap-3 border-t border-gray-200/50 pt-4 w-full">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[12px] font-bold ${rev.avatarBg} shrink-0`}>
                  {rev.avatarChar}
                </div>
                <div>
                  <h4 className="text-[12px] font-bold text-gray-900 leading-none mb-1">{rev.name}</h4>
                  <span className="text-[10px] text-gray-500 font-semibold">{rev.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
