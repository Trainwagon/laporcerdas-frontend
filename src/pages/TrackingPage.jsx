import React, { useState } from 'react';
import { Search, Facebook, Instagram, Youtube, Mail } from 'lucide-react';

const TrackingPage = () => {
  const [searchId, setSearchId] = useState('');
  const [reportData, setReportData] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchId.trim()) {
      // Simulate fetching data based on ID for demonstration
      // ID "1" -> Status 1 (Dikirimkan)
      // ID "2" -> Status 2 (Ditinjau)
      // ID "3" -> Status 3 (Tim Lapangan)
      // ID "4" -> Status 4 (Selesai)
      // ID "5" -> Status Rejected (Ditolak)
      
      let mockStatus = 1;
      let isRejected = false;
      
      if (searchId === '2') mockStatus = 2;
      else if (searchId === '3') mockStatus = 3;
      else if (searchId === '4') mockStatus = 4;
      else if (searchId === '5') { mockStatus = 2; isRejected = true; } // Rejected usually happens at review stage

      setReportData({
        id: `IDLapor#${Math.floor(Math.random() * 1000000)}`,
        status: mockStatus, 
        isRejected: isRejected,
        date: '11 November 2025',
        deadline: '14 November 2025',
        category: 'Infrastruktur',
        description: 'Adanya lobang besar di dekat jalan raya yang membahayakan pengendara motor.',
        rejectionReason: 'Laporan tidak valid karena lokasi tidak berada di wilayah Roa Malaka.',
        location: 'Jl. Tiang Bendera V',
        coordinates: '-6.123456, 106.123456'
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans flex flex-col">
      {/* Navbar */}
      <nav className="bg-white py-4 px-8 shadow-sm">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="/Logo-LaporCerdas.svg" alt="Logo" className="h-8 w-auto" />
            <span className="text-xl font-bold text-gray-900">LaporCerdas</span>
          </div>
          <div className="flex gap-8 text-sm font-medium text-gray-700">
            <a href="#" className="hover:text-green-600">Halaman Utama</a>
            <a href="#" className="hover:text-green-600">Laporan</a>
            <a href="#" className="hover:text-green-600">Kontak</a>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
          
          {/* Hero Section */}
          <div className="bg-[#EAE4D3] rounded-3xl p-8 flex gap-8 items-center">
            <div className="w-1/3 flex-shrink-0">
               {/* Placeholder for the construction worker image */}
               <div className="w-full h-64 bg-gray-300 rounded-xl overflow-hidden relative">
                  <img 
                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop" 
                    alt="Construction Worker" 
                    className="w-full h-full object-cover"
                  />
               </div>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Apa itu LaporCerdas</h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-6 text-justify">
                LaporCerdas merupakan platform yang dibuat khusus untuk warga di wilayah pemerintahan Roa Malaka yang berfungsi sebagai media pelaporan warga, mulai dari pelaporan kerusakan infrastruktur, masalah kebersihan, hingga berbagai keluhan pelayanan masyarakat lainnya. Platform ini dirancang untuk mempermudah proses penyampaian aspirasi warga melalui formulir pelaporan yang dapat diakses secara online tanpa perlu datang langsung ke kantor kelurahan. Setiap laporan yang dikirim akan diproses oleh sistem, diberikan ID laporan unik, dan secara otomatis dikategorikan menggunakan teknologi AI/NLP ke dalam salah satu dari tiga seksi terkait: Pemerintahan, Kesejahteraan, atau Ekonomi Pembangunan. Dengan adanya fitur pelacakan status, warga dapat memonitor progres laporan secara mandiri, sementara pihak kelurahan dapat mengelola laporan dengan lebih cepat, terstruktur, dan transparan melalui dashboard internal.
              </p>
              <button className="px-6 py-2 bg-slate-500 text-white text-sm font-medium rounded hover:bg-slate-600 transition-colors">
                Laporkan!
              </button>
            </div>
          </div>

          {/* Search Section */}
          <div className="bg-white rounded-3xl p-8 shadow-sm text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Cari Laporan</h2>
            <form onSubmit={handleSearch} className="max-w-3xl mx-auto relative">
              <input
                type="text"
                placeholder="Masukan id laporan"
                value={searchId}
                onChange={(e) => setSearchId(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </form>
          </div>

          {/* Progress Section - Only shows when reportData is present */}
          {reportData && (
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <div className="text-center mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Kemajuan Laporan</h2>
                <p className="text-sm text-gray-500">Id Laporan : {reportData.id}</p>
              </div>

              {/* Stepper */}
              <div className="max-w-3xl mx-auto mb-16 relative">
                {/* Connecting Line */}
                <div className="absolute top-7 left-0 w-full h-3 bg-gray-200 -translate-y-1/2 z-0 rounded-full"></div>
                
                {/* Colored Line Overlay */}
                <div 
                  className={`absolute top-7 left-0 h-3 -translate-y-1/2 z-0 rounded-full transition-all duration-500 ${reportData.isRejected ? 'bg-red-500' : 'bg-yellow-400'}`}
                  style={{ width: reportData.isRejected ? '33%' : `${((reportData.status - 1) / 3) * 100}%` }}
                ></div>

                <div className="relative z-10 flex justify-between w-full">
                  {/* Step 1: Dikirimkan */}
                  <div className="flex flex-col items-center gap-2 w-24">
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-2xl border-[6px] bg-white z-10
                      ${reportData.status >= 1 ? (reportData.isRejected ? 'border-yellow-400 text-gray-900' : 'border-yellow-400 text-gray-900') : 'border-gray-200 text-gray-400'}`}>
                      1
                    </div>
                    <p className="text-sm font-bold text-center leading-tight">Laporan Dikirimkan</p>
                  </div>

                  {/* Step 2: Ditinjau / Ditolak */}
                  <div className="flex flex-col items-center gap-2 w-24">
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-2xl border-[6px] bg-white z-10
                      ${reportData.isRejected 
                        ? 'border-red-500 text-gray-900' 
                        : (reportData.status >= 2 ? 'border-yellow-400 text-gray-900' : 'border-gray-200 text-gray-400')}`}>
                      2
                    </div>
                    <p className="text-sm font-bold text-center leading-tight">
                      {reportData.isRejected ? 'Ditolak' : 'Laporan Sedang Ditinjau'}
                    </p>
                  </div>

                  {/* Step 3: Tim Lapangan */}
                  <div className="flex flex-col items-center gap-2 w-24">
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-2xl border-[6px] bg-white z-10
                      ${reportData.status >= 3 && !reportData.isRejected ? 'border-yellow-400 text-gray-900' : 'border-gray-200 text-gray-400'}`}>
                      3
                    </div>
                    <p className="text-sm font-bold text-center leading-tight text-gray-500">Tim Lapangan Ditugaskan</p>
                  </div>

                  {/* Step 4: Selesai */}
                  <div className="flex flex-col items-center gap-2 w-24">
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-2xl border-[6px] bg-white z-10
                      ${reportData.status >= 4 && !reportData.isRejected ? 'border-yellow-400 text-gray-900' : 'border-gray-200 text-gray-400'}`}>
                      4
                    </div>
                    <p className="text-sm font-bold text-center leading-tight text-gray-500">Selesai</p>
                  </div>
                </div>
              </div>

              <hr className="border-gray-200 mb-8" />

              {/* Details Grid */}
              <div className="grid grid-cols-2 gap-12 text-left">
                {reportData.isRejected ? (
                  // Rejected Layout
                  <>
                    <div>
                      <div className="flex items-center gap-2 mb-6">
                        <div className="w-3 h-3 rounded-full bg-black"></div>
                        <h3 className="text-lg font-bold text-gray-900">Isi laporan</h3>
                      </div>
                      <div className="bg-slate-200 rounded-lg px-4 py-3 w-full">
                        <p className="text-sm text-gray-700 font-medium leading-relaxed">{reportData.description}</p>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-6">
                        <div className="w-3 h-3 rounded-full bg-black"></div>
                        <h3 className="text-lg font-bold text-gray-900">Alasan penolakan</h3>
                      </div>
                      <div className="bg-red-50 rounded-lg px-4 py-3 w-full border border-red-100">
                        <p className="text-sm text-red-600 font-medium leading-relaxed">{reportData.rejectionReason}</p>
                      </div>
                    </div>
                  </>
                ) : (
                  // Normal Layout
                  <>
                    <div>
                      <div className="flex items-center gap-2 mb-6">
                        <div className="w-3 h-3 rounded-full bg-black"></div>
                        <h3 className="text-lg font-bold text-gray-900">Informasi laporan</h3>
                      </div>
                      
                      <div className="space-y-6">
                        <div>
                          <p className="text-base font-bold text-gray-900 mb-2">tanggal laporan masuk</p>
                          <div className="bg-slate-200 rounded-lg px-4 py-2 w-fit">
                            <p className="text-sm text-gray-700 font-medium">{reportData.date}</p>
                          </div>
                        </div>
                        <div>
                          <p className="text-base font-bold text-gray-900 mb-2">batas waktu penyelesaian</p>
                          <div className="bg-slate-200 rounded-lg px-4 py-2 w-fit">
                            <p className="text-sm text-gray-700 font-medium">{reportData.deadline}</p>
                          </div>
                        </div>
                        <div>
                          <p className="text-base font-bold text-gray-900 mb-2">kategori</p>
                          <div className="bg-slate-200 rounded-lg px-4 py-2 w-fit">
                            <p className="text-sm text-gray-700 font-medium">{reportData.category}</p>
                          </div>
                        </div>
                        <div>
                          <p className="text-base font-bold text-gray-900 mb-2">isi laporan</p>
                          <div className="bg-slate-200 rounded-lg px-4 py-3 w-full">
                            <p className="text-sm text-gray-700 font-medium leading-relaxed">{reportData.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-6">
                        <div className="w-3 h-3 rounded-full bg-black"></div>
                        <h3 className="text-lg font-bold text-gray-900">Lokasi kejadian</h3>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <p className="text-base font-bold text-gray-900 mb-2">lokasi masalah</p>
                          <div className="bg-slate-200 rounded-lg px-4 py-2 w-full">
                            <p className="text-sm text-gray-700 font-medium">{reportData.location}</p>
                          </div>
                        </div>
                        <div>
                          <p className="text-base font-bold text-gray-900 mb-2">koordinat</p>
                          <div className="bg-slate-200 rounded-lg px-4 py-2 w-full">
                            <p className="text-sm text-gray-700 font-medium">{reportData.coordinates}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white pt-12 pb-4 border-t border-gray-200 mt-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-start mb-12">
            {/* Logo */}
            <div className="flex items-center gap-2">
               <img src="/Logo-LaporCerdas.svg" alt="Logo" className="h-12 w-auto" />
            </div>

            {/* Address */}
            <div className="text-[10px] text-gray-600 max-w-[200px]">
              <p className="font-bold mb-1">Alamat</p>
              <p>Jl. Tiang Bendera V No. 26 Rt. 004/Rw. 03 Kelurahan Roa Malaka, Kecamatan Tambora, Jakarta Barat</p>
              <p className="mt-2 font-bold">Informasi Kontak</p>
              <div className="flex gap-2 mt-1">
                <div className="w-4 h-4 bg-yellow-500 rounded-full flex items-center justify-center text-white text-[8px]"><Mail size={8}/></div>
                <div className="w-4 h-4 bg-yellow-500 rounded-full flex items-center justify-center text-white text-[8px]"><Facebook size={8}/></div>
                <div className="w-4 h-4 bg-yellow-500 rounded-full flex items-center justify-center text-white text-[8px]"><Youtube size={8}/></div>
              </div>
            </div>

            {/* Navigation */}
            <div className="text-[10px] text-gray-600">
              <p className="font-bold mb-1">Navigasi</p>
              <ul className="space-y-1">
                <li><a href="#">Tentang Kami</a></li>
                <li><a href="#">Panduan Pengguna</a></li>
                <li><a href="#">Kebijakan Privasi</a></li>
                <li><a href="#">Syarat & Ketentuan</a></li>
              </ul>
            </div>

            {/* Logos */}
            <div className="flex gap-2">
              <img src="/PROV-DKI-JAKARTA-PNG.svg" alt="DKI" className="h-8 w-auto" />
              <img src="/LOGO-APTIKOM-NO-BG.svg" alt="Aptikom" className="h-8 w-auto" />
              <img src="/logo-universitas-gunadarma-warna.svg" alt="Gunadarma" className="h-8 w-auto" />
              <img src="/logo.svg" alt="Logo" className="h-8 w-auto" />
            </div>
          </div>
          
          <div className="text-center text-[10px] text-gray-500 border-t border-gray-100 pt-4">
            Copyright 2025 LaporCerdas. All Rights Reserved
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TrackingPage;
