import React, { useState } from 'react';
import { TextRollButton } from './Hero';
import { LayoutDashboard, Users, ClipboardList, Package, DollarSign, BarChart3, Search, Bell, CheckCircle2 } from 'lucide-react';

interface Patient {
  id: string;
  name: string;
  age: string;
  gender: string;
  diagnosa: string;
  status: 'Pemeriksaan' | 'Menunggu' | 'Selesai';
  resep: string;
  bpjs: boolean;
}

const KlinikDetail: React.FC = () => {
  const [selectedPatientId, setSelectedPatientId] = useState<string>('p1');

  const patients: Patient[] = [
    {
      id: 'p1',
      name: 'Dr. Budi Santoso',
      age: '45 tahun',
      gender: 'Laki-laki',
      diagnosa: 'Hipertensi Primer - ICD-10 I10',
      status: 'Pemeriksaan',
      resep: 'Amlodipine 5mg 1x1 (Malam), Paracetamol 500mg 3x1 p.r.n',
      bpjs: true,
    },
    {
      id: 'p2',
      name: 'Ibu Rina Wulandari',
      age: '32 tahun',
      gender: 'Perempuan',
      diagnosa: 'Gastritis Akut - ICD-10 K29.0',
      status: 'Menunggu',
      resep: 'Omeprazole 20mg 2x1 a.c., Antasida sirup 3x1 C I a.c.',
      bpjs: false,
    },
    {
      id: 'p3',
      name: 'Sari Lestari',
      age: '24 tahun',
      gender: 'Perempuan',
      diagnosa: 'Faringitis Akut - ICD-10 J02.9',
      status: 'Selesai',
      resep: 'Amoxicillin 500mg 3x1 p.c. (Habiskan), Methylprednisolone 4mg 3x1 p.c.',
      bpjs: true,
    },
  ];

  const activePatient = patients.find(p => p.id === selectedPatientId) || patients[0];

  const features = [
    { title: 'Rekam Medis Elektronik (RME)', desc: 'pengelolaan data pasien terstruktur & aman' },
    { title: 'Booking & Antrian Digital', desc: 'kurangi penumpukan pasien secara efisien' },
    { title: 'Manajemen Resep & Apotek', desc: 'integrasi langsung resep dan stok obat' },
    { title: 'Analitik Klinik Real-Time', desc: 'laporan performa faskes berbasis data' },
    { title: 'Dashboard Terpisah', desc: 'tampilan khusus dokter, admin, & manajemen' },
    { title: 'Akses Web & Mobile', desc: 'kelola klinik dari mana saja, kapan saja' },
  ];

  return (
    <section id="fitur" className="w-full bg-transparent pt-16 sm:pt-20 lg:pt-28 pb-16 sm:pb-20 lg:pb-28 overflow-hidden select-none">
      <div className="w-full max-w-[1440px] mx-auto">
        
        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[45%_1fr] gap-12 items-center px-5 sm:px-8 lg:px-12 animate-fade-in">
          
          {/* Left Column: Copy & Checklist */}
          <div className="flex flex-col items-start">

            <h2 className="text-[clamp(1.75rem,5vw,3.2rem)] font-medium leading-[1.08] tracking-[-0.02em] text-gray-900 mb-6">
              Manajemen Klinik dari A sampai Z
            </h2>
            <p className="text-[14px] sm:text-[15px] text-gray-600 leading-relaxed mb-8 max-w-[520px]">
              Kelola seluruh operasional faskes Anda mulai dari antrean pasien depan, rekam medis elektronik dokter, resep apotek, hingga sistem billing kasir secara otomatis dalam satu ekosistem cloud terpadu.
            </p>

            {/* Checklist Grid */}
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
              text="Coba NUSMED Clinic"
              bgColor="bg-gray-900"
              hoverBgColor="hover:bg-gray-800"
              textColor="text-white"
              circleBgColor="bg-white"
              arrowColor="text-gray-900"
              circleSize="w-7 h-7"
              arrowSize={14}
              paddingLeft="pl-5"
              textSize="text-[13px]"
            />
          </div>

          {/* Right Column: Apple-Style White Glass Mock SaaS Dashboard */}
          <div className="w-full bg-white/40 backdrop-blur-xl rounded-2xl border border-white/60 shadow-[0_20px_50px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col h-[520px] relative">
            
            {/* Topbar: Frosted White-Glass */}
            <div className="bg-white/75 backdrop-blur-md text-gray-900 px-5 py-3.5 flex items-center justify-between border-b border-gray-200/50 z-10">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-gray-900 flex items-center justify-center">
                  <span className="text-[9px] font-bold text-white">NM</span>
                </div>
                <div>
                  <h4 className="text-[12px] font-bold leading-none text-gray-900">NUSMED Clinic Dasbor</h4>
                  <span className="text-[9px] text-gray-400 font-semibold uppercase mt-0.5 tracking-wide">Klinik Utama Sehat</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Search size={14} className="text-gray-500 cursor-pointer hover:text-gray-900 transition-colors" />
                <Bell size={14} className="text-gray-500 cursor-pointer hover:text-gray-900 transition-colors" />
                <div className="w-6 h-6 rounded-full bg-gray-900 text-white flex items-center justify-center text-[10px] font-semibold">
                  A
                </div>
              </div>
            </div>

            {/* Main content body split into sidebar + working area */}
            <div className="flex-1 flex overflow-hidden z-10">
              
              {/* Sidebar: Clean Transparent Glass */}
              <div className="w-[140px] bg-white/20 border-r border-gray-200/40 p-3 flex flex-col gap-1 shrink-0">
                <span className="text-[9px] font-bold text-gray-400 px-2 py-1 uppercase tracking-wider mb-2">Menu Utama</span>
                <button className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-white border border-gray-200/50 shadow-[0_2px_8px_rgba(0,0,0,0.03)] text-gray-900 text-[11px] font-bold text-left">
                  <LayoutDashboard size={13} className="text-gray-950" />
                  <span>Dasbor</span>
                </button>
                <button className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-gray-500 hover:bg-white/30 text-[11px] font-semibold text-left">
                  <Users size={13} />
                  <span>Pasien (RME)</span>
                </button>
                <button className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-gray-500 hover:bg-white/30 text-[11px] font-semibold text-left">
                  <ClipboardList size={13} />
                  <span>Antrean</span>
                </button>
                <button className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-gray-500 hover:bg-white/30 text-[11px] font-semibold text-left">
                  <Package size={13} />
                  <span>Apotek</span>
                </button>
                <button className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-gray-500 hover:bg-white/30 text-[11px] font-semibold text-left">
                  <DollarSign size={13} />
                  <span>Billing</span>
                </button>
                <button className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-gray-500 hover:bg-white/30 text-[11px] font-semibold text-left">
                  <BarChart3 size={13} />
                  <span>Laporan</span>
                </button>
              </div>

              {/* Work area */}
              <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-4">
                
                {/* Stats cards row: frosted glass */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-white/80 border border-white/60 shadow-[0_2px_10px_rgba(0,0,0,0.01)] rounded-xl p-3 flex flex-col">
                    <span className="text-[10px] text-gray-400 font-bold leading-none uppercase tracking-wide">RME Terkirim</span>
                    <span className="text-[18px] font-bold text-gray-900 mt-1">142</span>
                  </div>
                  <div className="bg-white/80 border border-white/60 shadow-[0_2px_10px_rgba(0,0,0,0.01)] rounded-xl p-3 flex flex-col">
                    <span className="text-[10px] text-gray-400 font-bold leading-none uppercase tracking-wide">Antrean Aktif</span>
                    <span className="text-[18px] font-bold text-gray-900 mt-1">3</span>
                  </div>
                  <div className="bg-white/80 border border-white/60 shadow-[0_2px_10px_rgba(0,0,0,0.01)] rounded-xl p-3 flex flex-col">
                    <span className="text-[10px] text-gray-400 font-bold leading-none uppercase tracking-wide">Apotek Resep</span>
                    <span className="text-[18px] font-bold text-gray-900 mt-1">29</span>
                  </div>
                </div>

                {/* Dashboard Inner Split */}
                <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-4 items-start">
                  
                  {/* Patients List (interactive selector) */}
                  <div className="flex flex-col gap-2">
                    <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Pilih Antrean</span>
                    {patients.map(patient => (
                      <div
                        key={patient.id}
                        onClick={() => setSelectedPatientId(patient.id)}
                        className={`cursor-pointer p-2.5 rounded-xl border transition-all ${selectedPatientId === patient.id ? 'bg-white border-gray-200 shadow-[0_2px_12px_rgba(0,0,0,0.04)]' : 'bg-white/40 border-gray-200/30 hover:bg-white/80'}`}
                      >
                        <h5 className="text-[11px] font-bold text-gray-950 leading-tight mb-1">{patient.name}</h5>
                        <div className="flex items-center justify-between gap-1">
                          <span className="text-[9px] text-gray-400 font-semibold">{patient.age}</span>
                          <span className={`text-[8px] font-bold px-1.5 py-0.5 rounded leading-none ${patient.status === 'Pemeriksaan' ? 'bg-gray-900 text-white' : patient.status === 'Menunggu' ? 'bg-gray-100 text-gray-600' : 'bg-gray-50 text-gray-400'}`}>
                            {patient.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Active Patient RME Details: frosted card */}
                  <div className="bg-white/95 border border-white/70 rounded-xl p-4 flex flex-col gap-3 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
                    <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                      <div>
                        <h4 className="text-[13px] font-bold text-gray-950">{activePatient.name}</h4>
                        <p className="text-[10px] text-gray-400 mt-0.5 font-semibold">{activePatient.age} • {activePatient.gender}</p>
                      </div>
                      <span className={`text-[9px] font-semibold px-2 py-0.5 rounded border bg-gray-50 text-gray-700 border-gray-200/60`}>
                        {activePatient.bpjs ? 'BPJS Kesehatan' : 'Umum / Mandiri'}
                      </span>
                    </div>

                    {/* RME data */}
                    <div className="flex flex-col gap-2">
                      <div>
                        <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wide">Diagnosis Utama (RME)</span>
                        <div className="bg-gray-50 border border-gray-100 rounded-lg p-2 mt-1">
                          <p className="text-[11px] font-bold text-gray-900">{activePatient.diagnosa}</p>
                        </div>
                      </div>

                      <div>
                        <span className="text-[9px] font-bold text-gray-400 uppercase tracking-wide">Resep & Terapi Obat</span>
                        <div className="bg-gray-50 border border-gray-100 rounded-lg p-2 mt-1">
                          <p className="text-[11px] font-semibold text-gray-700 leading-relaxed font-mono">{activePatient.resep}</p>
                        </div>
                      </div>
                    </div>

                    {/* SATUSEHAT status indicator */}
                    <div className="mt-1 flex items-center justify-between bg-white border border-gray-200/60 rounded-lg p-2 shadow-sm">
                      <div className="flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-[9px] font-bold text-gray-900 uppercase">SATUSEHAT KEMENKES</span>
                      </div>
                      <span className="text-[9px] text-gray-500 font-bold">Tersinkronisasi 100%</span>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default KlinikDetail;
