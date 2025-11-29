import React from 'react';
import { 
  Bell, 
  Mail, 
  Settings, 
  Inbox, 
  RefreshCw, 
  CheckCircle, 
  Trash2, 
  ArrowRight,
  User,
  ChevronDown
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const stats = [
    { title: 'Total Laporan Masuk', value: 50, icon: Inbox, iconClass: 'text-gray-800' },
    { title: 'Laporan diproses', value: 25, icon: RefreshCw, iconClass: 'text-gray-800' },
    { title: 'Laporan Selesai', value: 20, icon: CheckCircle, iconClass: 'text-gray-800' },
    { title: 'Laporan Ditolak', value: 5, icon: Trash2, iconClass: 'text-gray-800' },
  ];

  const reports = [
    {
      status: 'Menunggu',
      description: 'Jalan rusak di depan kantor kelurahan belum diperbaiki',
      location: 'Jl. Roa Malaka Utara',
      date: '1 November 2025',
      category: 'Infrastruktur',
    },
    {
      status: 'Selesai',
      description: 'Lampu jalan mati',
      location: 'Jl. Tiang Bendera III',
      date: '28 Oktober 2025',
      category: 'Fasilitas',
    },
    {
      status: 'Selesai',
      description: 'Sampah menumpuk di area pinggir kali krukut',
      location: 'Jl. Kali Besar Barat',
      date: '25 Oktober 2025',
      category: 'Kebersihan',
    },
    {
      status: 'Tolak',
      description: 'Saluran air tersumbat di depan rumah warga',
      location: 'Jl. Tiang Bendera No. 3',
      date: '24 Oktober 2025',
      category: 'Lingkungan',
    },
    {
      status: 'Selesai',
      description: 'Trotoar rusak di dekat gereja',
      location: 'GBI Kali Besar',
      date: '23 Oktober 2025',
      category: 'Infrastruktur',
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col fixed h-full">
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
          <div className="block px-4 py-3 bg-yellow-400 text-white font-medium rounded-md cursor-pointer">
            Dashboard
          </div>
          <div onClick={() => navigate('/crosscheck')} className="block px-4 py-3 text-gray-700 font-medium hover:bg-gray-50 rounded-md cursor-pointer">
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
      <main className="flex-1 ml-64">
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
          <div className="mb-8">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Dashboard</h2>
                <p className="text-gray-500 text-sm max-w-xl">
                  Ringkasan data laporan ditampilkan dalam bentuk statistik dan analisis untuk memudahkan pemantauan
                </p>
              </div>
              <button className="flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-300 rounded text-sm text-gray-600 hover:bg-gray-50">
                Bulan <ChevronDown size={16} />
              </button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm flex flex-col items-center justify-center text-center h-40">
                <p className="text-sm font-semibold text-gray-800 mb-4">{stat.title}</p>
                <div className="flex items-center gap-3">
                  <stat.icon size={32} className={stat.iconClass} strokeWidth={1.5} />
                  <span className="text-4xl font-bold text-gray-900">{stat.value}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Table Section */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Menampilkan 5 data laporan terbaru</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="bg-gray-50 text-gray-900 font-semibold">
                  <tr>
                    <th className="px-4 py-3 rounded-l-lg">Status</th>
                    <th className="px-4 py-3">Deskripsi Laporan</th>
                    <th className="px-4 py-3">Lokasi</th>
                    <th className="px-4 py-3">Tanggal</th>
                    <th className="px-4 py-3">Kategori</th>
                    <th className="px-4 py-3 rounded-r-lg text-center">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {reports.map((report, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-4 py-4">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${
                          report.status === 'Menunggu' ? 'bg-gray-500 text-white' :
                          report.status === 'Selesai' ? 'bg-green-500 text-white' :
                          report.status === 'Tolak' ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-800'
                        }`}>
                          {report.status}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-gray-600">{report.description}</td>
                      <td className="px-4 py-4 text-gray-600">{report.location}</td>
                      <td className="px-4 py-4 text-gray-600">{report.date}</td>
                      <td className="px-4 py-4 text-gray-600">{report.category}</td>
                      <td className="px-4 py-4 text-center">
                        <button className="text-gray-400 hover:text-gray-900">
                          <div className="border border-gray-400 rounded-full p-1 hover:border-gray-900">
                             <ArrowRight size={14} />
                          </div>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
