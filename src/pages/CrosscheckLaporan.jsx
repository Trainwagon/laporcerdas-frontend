import React, { useState } from 'react';
import { 
  Bell, 
  Mail, 
  Settings, 
  User,
  ChevronLeft,
  ChevronRight,
  X,
  Image as ImageIcon
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CrosscheckLaporan = () => {
  const navigate = useNavigate();
  const [selectedReport, setSelectedReport] = useState(null);
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [showMoveModal, setShowMoveModal] = useState(false);

  // Dummy data based on the image
  const reports = [
    {
      id: 'IDLapor#272641',
      description: 'ada lobang besar di dekat jalan raya',
      location: 'Jl. Ismail',
      date: '11 November 2025',
      category: 'Infrastruktur',
      status: 'menunggu',
      details: {
        name: 'ismail yunus',
        phone: '08962351191',
        email: '08962351191', // Image shows email as phone number? keeping as is
        address: 'Jl. Kanut Halim',
        category: 'Infrastruktur'
      }
    },
    {
      id: 'IDLapor#221345',
      description: 'lampu taman mati ngk nyala',
      location: 'Jl. Khairul anwar',
      date: '11 November 2025',
      category: 'Infrastruktur',
      status: 'menunggu',
      details: {
        name: 'Ahmad',
        phone: '08123456789',
        email: 'ahmad@example.com',
        address: 'Jl. Khairul anwar No. 10',
        category: 'Infrastruktur'
      }
    },
    {
      id: 'IDLapor#2136182',
      description: 'adanya suara bising di sekitar rumah fulan',
      location: 'Jl. Jendral samirudin',
      date: '11 November 2025',
      category: 'Infrastruktur',
      status: 'menunggu',
      details: {
        name: 'Fulan',
        phone: '08129876543',
        email: 'fulan@example.com',
        address: 'Jl. Jendral samirudin No. 5',
        category: 'Infrastruktur'
      }
    },
    {
      id: 'IDLapor#298342',
      description: 'banyaknya sampah di buang sembarangan',
      location: 'Jl. Kasah tiga',
      date: '11 November 2025',
      category: 'Infrastruktur',
      status: 'menunggu',
      details: {
        name: 'Budi',
        phone: '081211223344',
        email: 'budi@example.com',
        address: 'Jl. Kasah tiga No. 8',
        category: 'Infrastruktur'
      }
    },
    {
      id: 'IDLapor#298611',
      description: 'adanya kebocoran air di drainase',
      location: 'Jl. Este dua bell',
      date: '11 November 2025',
      category: 'Infrastruktur',
      status: 'menunggu',
      details: {
        name: 'Siti',
        phone: '081255667788',
        email: 'siti@example.com',
        address: 'Jl. Este dua bell No. 2',
        category: 'Infrastruktur'
      }
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col fixed h-full z-20">
        <div className="p-6 flex gap-2 items-center">
           <div className="flex gap-2 items-center">
              <img src="/PROV-DKI-JAKARTA-PNG.svg" alt="DKI Jakarta" className="h-8 w-auto object-contain" />
              <img src="/logo.svg" alt="Logo" className="h-8 w-auto object-contain" />
              <img src="/LOGO-APTIKOM-NO-BG.svg" alt="Aptikom" className="h-8 w-auto object-contain" />
              <img src="/logo-universitas-gunadarma-warna.svg" alt="Gunadarma" className="h-8 w-auto object-contain" />
              <img src="/Logo-LaporCerdas.svg" alt="LaporCerdas" className="h-8 w-auto object-contain" />
           </div>
        </div>

        <nav className="flex-1 px-4 space-y-2 mt-4">
          <div onClick={() => navigate('/')} className="block px-4 py-3 text-gray-700 font-medium hover:bg-gray-50 rounded-md cursor-pointer">
            Dashboard
          </div>
          <div className="block px-4 py-3 bg-yellow-400 text-white font-medium rounded-md cursor-pointer">
            Crosscheck Laporan
          </div>
          <div onClick={() => navigate('/rekapitulasi')} className="block px-4 py-3 text-gray-700 font-medium hover:bg-gray-50 rounded-md cursor-pointer">
            Rekapitulasi Laporan
          </div>
        </nav>

        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
              <User size={20} />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900">Nama</p>
              <p className="text-xs text-gray-600 leading-tight">
                Seksi Pemerintahan/<br/>Kesejahteraan/Ekonomi<br/>pembangunan
              </p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 relative">
        {/* Header */}
        <header className="bg-white h-16 flex items-center justify-between px-8 border-b border-gray-200 sticky top-0 z-10">
          <div className="flex-1 text-center">
            <h1 className="text-xl font-bold text-gray-900">LaporCerdas</h1>
          </div>
          <div className="flex items-center gap-4 text-gray-600 absolute right-8">
            <button className="p-1 hover:text-gray-900"><Bell size={20} /></button>
            <button className="p-1 hover:text-gray-900"><Mail size={20} /></button>
            <button className="p-1 hover:text-gray-900"><Settings size={20} /></button>
          </div>
        </header>

        <div className="p-8">
          {/* Table Section */}
          <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Data Laporan</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="bg-gray-50 text-gray-900 font-semibold">
                  <tr>
                    <th className="px-4 py-3 rounded-l-lg">ID</th>
                    <th className="px-4 py-3">Deskripsi Laporan</th>
                    <th className="px-4 py-3">Lokasi</th>
                    <th className="px-4 py-3">Tanggal</th>
                    <th className="px-4 py-3">Kategori</th>
                    <th className="px-4 py-3 rounded-r-lg">status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {reports.map((report, index) => (
                    <tr 
                      key={index} 
                      className={`hover:bg-gray-50 cursor-pointer ${selectedReport?.id === report.id ? 'bg-gray-200' : ''}`}
                      onClick={() => setSelectedReport(report)}
                    >
                      <td className="px-4 py-4 font-bold text-gray-900">{report.id}</td>
                      <td className="px-4 py-4 text-gray-600">{report.description}</td>
                      <td className="px-4 py-4 text-gray-600">{report.location}</td>
                      <td className="px-4 py-4 text-gray-600">{report.date}</td>
                      <td className="px-4 py-4 text-gray-600">{report.category}</td>
                      <td className="px-4 py-4 text-gray-600">{report.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Pagination */}
            <div className="flex justify-center items-center mt-6 gap-2">
              <button className="p-1 text-gray-400 hover:text-gray-600"><ChevronLeft size={16} /></button>
              <button className="w-8 h-8 bg-yellow-600 text-white rounded flex items-center justify-center font-medium">1</button>
              <button className="p-1 text-gray-400 hover:text-gray-600"><ChevronRight size={16} /></button>
            </div>
          </div>

          {/* Detail Section */}
          {selectedReport && (
            <div className="bg-white rounded-xl shadow-sm p-8 relative">
              <button 
                onClick={() => setSelectedReport(null)}
                className="absolute top-4 right-4 p-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                <X size={20} />
              </button>

              <div className="grid grid-cols-2 gap-x-12 gap-y-6">
                <div>
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-1">ID Unik</h4>
                    <p className="text-gray-600">{selectedReport.id}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-1">Deskripsi laporan</h4>
                    <p className="text-gray-600">{selectedReport.description}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-1">Lokasi</h4>
                    <p className="text-gray-600">{selectedReport.location}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-1">Tanggal</h4>
                    <p className="text-gray-600">{selectedReport.date}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Foto Bukti</h4>
                    <div className="flex gap-4">
                      <div className="w-32 h-24 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400">
                        <ImageIcon size={24} />
                      </div>
                      <div className="w-32 h-24 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400">
                        <ImageIcon size={24} />
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-1">Nama</h4>
                    <p className="text-gray-600">{selectedReport.details.name}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-1">Nomer Telepon</h4>
                    <p className="text-gray-600">{selectedReport.details.phone}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">{selectedReport.details.email}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-1">Alamat</h4>
                    <p className="text-gray-600">{selectedReport.details.address}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-1">Kategori</h4>
                    <p className="text-gray-600">{selectedReport.details.category}</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center gap-4 mt-8">
                <button className="px-8 py-2 bg-green-600 text-white font-medium rounded hover:bg-green-700">
                  Terima
                </button>
                <button 
                  onClick={() => setShowRejectModal(true)}
                  className="px-8 py-2 bg-red-600 text-white font-medium rounded hover:bg-red-700"
                >
                  Tolak
                </button>
                <button 
                  onClick={() => setShowMoveModal(true)}
                  className="px-8 py-2 bg-blue-700 text-white font-medium rounded hover:bg-blue-800"
                >
                  pindah seksi
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Reject Modal */}
      {showRejectModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-xl p-6 w-[600px] relative">
            <button 
              onClick={() => setShowRejectModal(false)}
              className="absolute top-4 right-4 p-1 bg-red-500 text-white rounded hover:bg-red-600"
            >
              <X size={20} />
            </button>
            
            <h3 className="text-lg font-bold text-gray-900 mb-4">Keterangan penolakan</h3>
            
            <div className="mb-6">
              <textarea 
                className="w-full h-40 p-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Jelaskan alasan laporan ditolak..."
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button className="px-8 py-2 bg-green-600 text-white font-medium rounded hover:bg-green-700">
                Kirim
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Move Section Modal */}
      {showMoveModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-xl p-6 w-[500px] relative">
            <button 
              onClick={() => setShowMoveModal(false)}
              className="absolute top-4 right-4 p-1 bg-red-500 text-white rounded hover:bg-red-600"
            >
              <X size={20} />
            </button>
            
            <h3 className="text-lg font-bold text-gray-900 mb-6">Koreksi Kategori Laporan</h3>
            
            <div className="mb-8">
              <p className="text-gray-700 mb-2 font-medium">Silakan pilih seksi yang tepat untuk laporan ini.</p>
              <select className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Seksi</option>
                <option>Infrastruktur</option>
                <option>Kebersihan</option>
                <option>Lingkungan</option>
              </select>
            </div>

            <div className="flex justify-center gap-4">
              <button className="px-8 py-2 bg-green-600 text-white font-medium rounded hover:bg-green-700">
                Simpan
              </button>
              <button 
                onClick={() => setShowMoveModal(false)}
                className="px-8 py-2 bg-red-600 text-white font-medium rounded hover:bg-red-700"
              >
                Batal
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CrosscheckLaporan;
