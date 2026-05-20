import { Mail, Globe, Instagram, Linkedin, MessageSquareDot } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const columns = [
    {
      title: 'NUSMED Clinic',
      links: [
        'Rekam Medis Elektronik (RME)',
        'Booking Online & Antrian',
        'Manajemen Resep & Apotek',
        'Analitik Klinik Real-Time',
        'Dashboard Terpisah',
        'Akses Web & Mobile'
      ],
    },
    {
      title: 'NUSMED Learning',
      links: [
        'Smart Question Bank',
        'Adaptive Learning',
        'Flashcard & Spaced Repetition',
        'AI Answer & Tutor',
        'Exam Readiness Score',
        'Ranked Battle'
      ],
    },
    {
      title: 'Perusahaan',
      links: [
        'Tentang Kami',
        'Visi & Misi',
        'Mengapa NUSMED',
        'Target Pengguna',
        'Kemitraan Faskes',
        'Karir & Kontribusi'
      ],
    }
  ];

  return (
    <footer id="hubungi" className="w-full bg-transparent border-t border-gray-200/40 pt-16 sm:pt-20 pb-10 overflow-hidden select-none animate-fade-in">
      <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Top area: Brand info + link columns + Kontak Kami */}
        <div className="grid grid-cols-1 lg:grid-cols-[25%_1fr_25%] gap-10 lg:gap-12 pb-12 sm:pb-16 border-b border-gray-200/30">
          
          {/* Column 1: Logo & Tagline */}
          <div className="flex flex-col items-start gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center">
                <span className="text-[12px] font-bold text-white tracking-tight">NM</span>
              </div>
              <div>
                <h4 className="text-[14px] font-bold text-gray-900 leading-none">NUSMED</h4>
                <span className="text-[10px] text-gray-500 font-semibold uppercase mt-1 tracking-wider">Ekosistem Kesehatan</span>
              </div>
            </div>
            <p className="text-[13px] text-gray-500 leading-relaxed">
              Sistem kesehatan yang kuat tidak dibangun dalam satu titik. Ia tumbuh dari setiap lapisan, menghubungkan faskes dan pendidikan medis.
            </p>
          </div>

          {/* Column 2: Feature Links Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            {columns.map((col, idx) => (
              <div key={idx} className="flex flex-col items-start">
                <h5 className="text-[11px] font-bold text-gray-900 uppercase tracking-wider mb-4">
                  {col.title}
                </h5>
                <ul className="space-y-2.5">
                  {col.links.map((link, i) => (
                    <li key={i}>
                      <a href="#" className="text-[12px] text-gray-500 hover:text-gray-900 transition-colors font-medium">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Column 3: KONTAK KAMI */}
          <div className="flex flex-col items-start gap-5">
            <div>
              <h5 className="text-[11px] font-bold text-gray-900 uppercase tracking-wider mb-3">
                KONTAK KAMI
              </h5>
              <p className="text-[12px] text-gray-500 leading-relaxed">
                Kami terbuka untuk kolaborasi, kemitraan institusi, pertanyaan produk, maupun masukan dari pengguna.
              </p>
            </div>

            {/* Channels lists */}
            <ul className="space-y-3 w-full">
              <li>
                <a href="mailto:contact@nusmed.com" className="flex items-center gap-2.5 text-[12px] font-bold text-gray-900 hover:text-[#F26522] transition-colors">
                  <Mail size={14} className="text-gray-500" />
                  <span>contact@nusmed.com</span>
                </a>
              </li>
              <li>
                <a href="https://www.nusmed.id" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-[12px] font-bold text-gray-900 hover:text-[#F26522] transition-colors">
                  <Globe size={14} className="text-gray-500" />
                  <span>www.nusmed.id</span>
                </a>
              </li>
              <li>
                <a href="https://instagram.com/nusmed.id" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-[12px] font-bold text-gray-900 hover:text-[#F26522] transition-colors">
                  <Instagram size={14} className="text-gray-500" />
                  <span>@nusmed.id</span>
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-[12px] font-bold text-gray-900 hover:text-[#F26522] transition-colors">
                  <Linkedin size={14} className="text-gray-500" />
                  <span>NUSMED Indonesia</span>
                </a>
              </li>
            </ul>

            {/* Partnership Note */}
            <div className="bg-[#F26522]/5 border border-[#F26522]/10 rounded-xl p-3 flex items-start gap-2 w-full mt-1">
              <MessageSquareDot size={15} className="text-[#F26522] shrink-0 mt-0.5" />
              <p className="text-[10px] text-gray-600 font-medium leading-normal">
                Kemitraan subjek email: <span className="font-bold text-gray-950">[PARTNERSHIP] — Nama Institusi Anda</span>.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom area: Copyright + Partner certifications */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-[12px] text-gray-400 font-medium text-center sm:text-left">
            &copy; {currentYear} PT Nusmed Ekosistem Digital. Seluruh hak cipta dilindungi.
          </p>
          
          {/* Official Partner Badge */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            {/* SATUSEHAT partner badge */}
            <div className="flex items-center gap-2 border border-gray-200/50 rounded px-2.5 py-1.5 bg-white/40 backdrop-blur-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-gray-900">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
              <span className="text-[9px] font-bold text-gray-600 uppercase tracking-wider leading-none">Mitra SATUSEHAT Kemenkes</span>
            </div>
            {/* BPJS partner badge */}
            <div className="flex items-center gap-2 border border-gray-200/50 rounded px-2.5 py-1.5 bg-white/40 backdrop-blur-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-gray-900">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                <path d="M2 12h20"/>
              </svg>
              <span className="text-[9px] font-bold text-gray-600 uppercase tracking-wider leading-none">Kompatibel BPJS Kesehatan</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
