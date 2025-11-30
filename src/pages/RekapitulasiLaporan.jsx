import React, { useState } from "react";
import {
  Bell,
  Mail,
  Settings,
  User,
  ChevronLeft,
  ChevronRight,
  X,
  Image as ImageIcon,
  Search,
  ChevronDown,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const RekapitulasiLaporan = () => {
  const navigate = useNavigate();
  const [selectedReport, setSelectedReport] = useState(null);
  const [showCompleteModal, setShowCompleteModal] = useState(false);

  // Dummy data
  const reports = [
    {
      id: "IDLapor#272641",
      description: "ada lobang besar di dekat jalan raya",
      location: "Jl. Ismail",
      date: "11 November 2025",
      category: "Infrastruktur",
      status: "Selesai",
      details: {
        name: "ismail yunus",
        phone: "08962351191",
        email: "08962351191",
        address: "Jl. Kanut Halim",
        category: "Infrastruktur",
        completionNote:
          "masalah lobang besar sudah diatasi dengan pengecoran pada lubang",
      },
    },
    {
      id: "IDLapor#221345",
      description: "lampu taman mati ngk nyala",
      location: "Jl. Khairul anwar",
      date: "11 November 2025",
      category: "Infrastruktur",
      status: "Tolak",
      details: {
        name: "Ahmad",
        phone: "08123456789",
        email: "ahmad@example.com",
        address: "Jl. Khairul anwar No. 10",
        category: "Infrastruktur",
        rejectionReason: "kurangnya bukti yang kuat minimnya informasi",
      },
    },
    {
      id: "IDLapor#2136182",
      description: "adanya suara bising di sekitar rumah fulan",
      location: "Jl. Jendral samirudin",
      date: "11 November 2025",
      category: "Infrastruktur",
      status: "Selesai",
      details: {
        name: "Fulan",
        phone: "08129876543",
        email: "fulan@example.com",
        address: "Jl. Jendral samirudin No. 5",
      },
    },
    {
      id: "IDLapor#298342",
      description: "banyaknya sampah di buang sembarangan",
      location: "Jl. Kasah tiga",
      date: "11 November 2025",
      category: "Infrastruktur",
      status: "Tolak",
      details: {
        name: "Budi",
        phone: "081211223344",
        email: "budi@example.com",
        address: "Jl. Kasah tiga No. 8",
      },
    },
    {
      id: "IDLapor#298611",
      description: "adanya kebocoran air di drainase",
      location: "Jl. Este dua bell",
      date: "11 November 2025",
      category: "Infrastruktur",
      status: "Selesai",
      details: {
        name: "Siti",
        phone: "081255667788",
        email: "siti@example.com",
        address: "Jl. Este dua bell No. 2",
      },
    },
    {
      id: "IDLapor#288342",
      description: "banyaknya sampah di buang sembarangan",
      location: "Jl. Kasah tiga",
      date: "11 November 2025",
      category: "Infrastruktur",
      status: "Proses",
      details: {
        name: "Budi",
        phone: "081211223344",
        email: "budi@example.com",
        address: "Jl. Kasah tiga No. 8",
        category: "Infrastruktur",
      },
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Selesai":
        return "bg-green-500 text-white";
      case "Tolak":
        return "bg-red-600 text-white";
      case "Proses":
        return "bg-yellow-400 text-white";
      default:
        return "bg-gray-200 text-gray-700";
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col fixed h-full z-20">
        <div className="p-6 flex gap-2 items-center">
          <div className="flex gap-2 items-center">
            <img
              src="/PROV-DKI-JAKARTA-PNG.svg"
              alt="DKI Jakarta"
              className="h-8 w-auto object-contain"
            />
            <img
              src="/logo.svg"
              alt="Logo"
              className="h-8 w-auto object-contain"
            />
            <img
              src="/LOGO-APTIKOM-NO-BG.svg"
              alt="Aptikom"
              className="h-8 w-auto object-contain"
            />
            <img
              src="/logo-universitas-gunadarma-warna.svg"
              alt="Gunadarma"
              className="h-8 w-auto object-contain"
            />
            <img
              src="/Logo-LaporCerdas.svg"
              alt="LaporCerdas"
              className="h-8 w-auto object-contain"
            />
          </div>
        </div>

        <nav className="flex-1 px-4 space-y-2 mt-4">
          <div
            onClick={() => navigate("/")}
            className="block px-4 py-3 text-gray-700 font-medium hover:bg-gray-50 rounded-md cursor-pointer">
            Dashboard
          </div>
          <div
            onClick={() => navigate("/crosscheck")}
            className="block px-4 py-3 text-gray-700 font-medium hover:bg-gray-50 rounded-md cursor-pointer">
            Crosscheck Laporan
          </div>
          <div className="block px-4 py-3 bg-yellow-400 text-white font-medium rounded-md cursor-pointer">
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
                Seksi Pemerintahan/
                <br />
                Kesejahteraan/Ekonomi
                <br />
                pembangunan
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
            <button className="p-1 hover:text-gray-900">
              <Bell size={20} />
            </button>
            <button className="p-1 hover:text-gray-900">
              <Mail size={20} />
            </button>
            <button className="p-1 hover:text-gray-900">
              <Settings size={20} />
            </button>
          </div>
        </header>

        <div className="p-8">
          {/* Table Section */}
          {!selectedReport && (
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <div className="flex justify-between items-center mb-6">
                <div className="flex gap-2">
                  <h3 className="text-lg font-bold text-gray-900 mr-4">
                    Data Laporan
                  </h3>
                  <button className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-600 flex items-center gap-1">
                    Status <ChevronDown size={14} />
                  </button>
                  <button className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-600 flex items-center gap-1">
                    Tanggal <ChevronDown size={14} />
                  </button>
                  <button className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-600 flex items-center gap-1">
                    Kategori <ChevronDown size={14} />
                  </button>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Cari"
                    className="pl-8 pr-4 py-1 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                  <Search
                    size={14}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  />
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="bg-gray-50 text-gray-900 font-semibold">
                    <tr>
                      <th className="px-4 py-3 rounded-l-lg">ID</th>
                      <th className="px-4 py-3">Deskripsi Laporan</th>
                      <th className="px-4 py-3">Lokasi</th>
                      <th className="px-4 py-3">Tanggal</th>
                      <th className="px-4 py-3">Kategori</th>
                      <th className="px-4 py-3 rounded-r-lg text-center">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {reports.map((report, index) => (
                      <tr
                        key={index}
                        className={`hover:bg-gray-50 cursor-pointer ${
                          selectedReport?.id === report.id ? "bg-gray-200" : ""
                        }`}
                        onClick={() => setSelectedReport(report)}>
                        <td className="px-4 py-4 font-bold text-gray-900">
                          {report.id}
                        </td>
                        <td className="px-4 py-4 text-gray-600">
                          {report.description}
                        </td>
                        <td className="px-4 py-4 text-gray-600">
                          {report.location}
                        </td>
                        <td className="px-4 py-4 text-gray-600">
                          {report.date}
                        </td>
                        <td className="px-4 py-4 text-gray-600">
                          {report.category}
                        </td>
                        <td className="px-4 py-4 text-center">
                          <span
                            className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(
                              report.status
                            )}`}>
                            {report.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="flex justify-center items-center mt-6 gap-2">
                <button className="p-1 text-gray-400 hover:text-gray-600">
                  <ChevronLeft size={16} />
                </button>
                <button className="w-8 h-8 bg-yellow-600 text-white rounded flex items-center justify-center font-medium">
                  1
                </button>
                <button className="p-1 text-gray-400 hover:text-gray-600">
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          )}

          {/* Detail Section */}
          {selectedReport && (
            <div className="bg-white rounded-xl shadow-sm p-8 relative">
              <button
                onClick={() => setSelectedReport(null)}
                className="absolute top-4 right-4 p-1 bg-red-500 text-white rounded hover:bg-red-600">
                <X size={20} />
              </button>

              <div className="grid grid-cols-2 gap-x-12 gap-y-6">
                <div>
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-1">
                      ID Unik
                    </h4>
                    <p className="text-gray-600">{selectedReport.id}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-1">
                      Deskripsi laporan
                    </h4>
                    <p className="text-gray-600">
                      {selectedReport.description}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-1">
                      Lokasi
                    </h4>
                    <p className="text-gray-600">{selectedReport.location}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-1">
                      Tanggal
                    </h4>
                    <p className="text-gray-600">{selectedReport.date}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      Foto Bukti
                    </h4>
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
                    <h4 className="text-lg font-bold text-gray-900 mb-1">
                      Nama
                    </h4>
                    <p className="text-gray-600">
                      {selectedReport.details.name}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-1">
                      Nomer Telepon
                    </h4>
                    <p className="text-gray-600">
                      {selectedReport.details.phone}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-1">
                      Email
                    </h4>
                    <p className="text-gray-600">
                      {selectedReport.details.email}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-1">
                      Alamat
                    </h4>
                    <p className="text-gray-600">
                      {selectedReport.details.address}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-1">
                      Kategori
                    </h4>
                    <p className="text-gray-600">{selectedReport.category}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-1">
                      Status
                    </h4>
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(
                        selectedReport.status
                      )}`}>
                      {selectedReport.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Conditional Content based on Status */}
              {selectedReport.status === "Tolak" && (
                <div className="mt-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-1">
                    Keterangan Penolakan
                  </h4>
                  <p className="text-gray-600 mb-8">
                    {selectedReport.details.rejectionReason}
                  </p>

                  <div className="flex justify-center gap-4">
                    <button className="px-8 py-2 bg-green-600 text-white font-medium rounded hover:bg-green-700">
                      Ubah status
                    </button>
                    <button className="px-8 py-2 bg-red-600 text-white font-medium rounded hover:bg-red-700">
                      Delete
                    </button>
                  </div>
                </div>
              )}

              {selectedReport.status === "Selesai" && (
                <div className="mt-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-1">
                    Bukti Laporan diselesaikan
                  </h4>
                  <p className="text-gray-600 mb-4">
                    {selectedReport.details.completionNote}
                  </p>
                  <div className="flex gap-4 mb-8">
                    <div className="w-32 h-24 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400">
                      <ImageIcon size={24} />
                    </div>
                    <div className="w-32 h-24 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400">
                      <ImageIcon size={24} />
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <button className="px-8 py-2 bg-green-600 text-white font-medium rounded hover:bg-green-700">
                      Donwload file
                    </button>
                  </div>
                </div>
              )}

              {selectedReport.status === "Proses" && (
                <div className="mt-8 flex justify-center">
                  <button
                    onClick={() => setShowCompleteModal(true)}
                    className="px-8 py-2 bg-green-600 text-white font-medium rounded hover:bg-green-700">
                    Ubah selesai
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </main>

      {/* Complete Modal */}
      {showCompleteModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-xl p-6 w-[600px] relative">
            <button
              onClick={() => setShowCompleteModal(false)}
              className="absolute top-4 right-4 p-1 bg-red-500 text-white rounded hover:bg-red-600">
              <X size={20} />
            </button>

            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Bukti laporan diselesaikan
            </h3>

            <div className="mb-4">
              <textarea
                className="w-full h-32 p-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Jelaskan langkah penanganan yang telah dilakukan terhadap laporan, serta waktu dilakukannya"></textarea>
            </div>

            <div className="mb-6">
              <p className="text-sm font-bold text-gray-900 mb-2">
                Lampirkan foto
              </p>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 flex flex-col items-center justify-center text-gray-500 cursor-pointer hover:bg-gray-50">
                <p className="text-xs font-bold text-gray-900">
                  Klik untuk upload foto
                </p>
                <p className="text-[10px]">Maksimal 5MB, format JPG/PNG</p>
              </div>
            </div>

            <div className="flex justify-center">
              <button className="px-8 py-2 bg-green-600 text-white font-medium rounded hover:bg-green-700">
                Kirim
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RekapitulasiLaporan;
