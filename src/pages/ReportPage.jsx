import React, { useState } from 'react';
import { Facebook, Instagram, Youtube, Mail, Upload, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ReportPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    description: '',
    location: '',
    name: '',
    nik: '',
    email: '',
    address: '',
    phone: '',
    agreement: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle submission logic here
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
            <a href="/tracking" className="hover:text-green-600">Halaman Utama</a>
            <a href="/laporan" className="text-green-600 font-bold">Laporan</a>
            <a href="#" className="hover:text-green-600">Kontak</a>
          </div>
        </div>
      </nav>

      <main className="flex-grow py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Buat Laporan</h1>
            <p className="text-gray-600">Laporkan masalah untuk meningkatkan layanan kelurahan Roa Malaka</p>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm">
            <form onSubmit={handleSubmit}>
              {/* Section 1: Detail Laporan */}
              <div className="mb-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-xl font-bold text-gray-900">
                    1
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Detail Laporan</h2>
                </div>

                <div className="space-y-6 pl-0 md:pl-14">
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      Deskripsi laporan <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 h-32 resize-none"
                      placeholder="Jelaskan secara detail masalah yang ingin anda laporkan..."
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                    ></textarea>
                    <p className="text-xs text-gray-400 mt-1">Minimal 20 karakter</p>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      Lokasi Kejadian <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      placeholder="Contoh: Jalan Roa Malaka No. 123"
                      value={formData.location}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      Upload Foto Bukti <span className="text-gray-400 font-normal">(Opsional)</span>
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:bg-gray-50 transition-colors">
                      <div className="flex flex-col items-center justify-center text-gray-500">
                        <p className="text-xs font-bold mb-1">Klik untuk upload foto</p>
                        <p className="text-[10px]">Maksimal 5MB, format JPG/PNG</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 2: Informasi Pelapor */}
              <div className="mb-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-xl font-bold text-gray-900">
                    2
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Informasi Pelapor</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pl-0 md:pl-14">
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">Nama Lengkap</label>
                    <input
                      type="text"
                      className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      placeholder="Nama Anda"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">NIK</label>
                    <input
                      type="text"
                      className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      placeholder="Nomor Induk Kependudukan"
                      value={formData.nik}
                      onChange={(e) => setFormData({...formData, nik: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">Email <span className="text-gray-400 font-normal">(Opsional)</span></label>
                    <input
                      type="email"
                      className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      placeholder="email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">Alamat <span className="text-gray-400 font-normal">(Opsional)</span></label>
                    <input
                      type="text"
                      className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                      placeholder="Alamat lengkap"
                      value={formData.address}
                      onChange={(e) => setFormData({...formData, address: e.target.value})}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold text-gray-900 mb-2">Nomor Telepon <span className="text-gray-400 font-normal">(Opsional)</span></label>
                    <input
                      type="tel"
                      className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 md:w-1/2"
                      placeholder="+62 812 3456 7890"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>
              </div>

              {/* Agreement & Captcha */}
              <div className="pl-0 md:pl-14 space-y-6 mb-8">
                <div className="border border-gray-300 rounded-lg p-4 flex items-start gap-3">
                  <div className="mt-0.5">
                    <AlertCircle size={16} className="text-yellow-500" />
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="agreement"
                      className="w-4 h-4 text-yellow-400 border-gray-300 rounded focus:ring-yellow-400"
                      checked={formData.agreement}
                      onChange={(e) => setFormData({...formData, agreement: e.target.checked})}
                    />
                    <label htmlFor="agreement" className="text-xs text-gray-700">
                      Saya menyetujui bahwa data saya digunakan sesuai kebijakan privasi dan peraturan pemerintahan kelurahan
                    </label>
                  </div>
                </div>

                {/* Captcha Placeholder */}
                <div className="border border-gray-300 rounded-lg p-3 w-fit bg-white flex items-center gap-4">
                   <div className="w-6 h-6 border border-gray-300 rounded bg-white"></div>
                   <span className="text-sm text-gray-700">Captcha</span>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 justify-end">
                <button
                  type="button"
                  onClick={() => navigate('/tracking')}
                  className="px-8 py-3 border border-gray-400 text-gray-700 font-bold rounded-lg hover:bg-gray-50 transition-colors w-full md:w-auto"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-8 py-3 bg-yellow-400 text-white font-bold rounded-lg hover:bg-yellow-500 transition-colors w-full md:w-auto"
                >
                  Kirim Laporan
                </button>
              </div>
            </form>
          </div>
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

export default ReportPage;
