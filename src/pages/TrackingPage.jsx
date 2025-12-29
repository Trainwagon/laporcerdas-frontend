import Navbar from "../components/layout/navbar";
import Footer from "../components/layout/footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { Search, MapPin, FileText, Clock, Send } from "lucide-react";

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Link } from "react-router-dom";

const schema = z.object({
  trackingId: z.string().min(3, "ID laporan tidak valid"),
});

const dummyReport = {
  id: "IDLapor#928371",
  status: 3,
  timeline: [
    { title: "Laporan Dikirim", date: "11 Nov 2025" },
    { title: "Ditinjau Admin", date: "12 Nov 2025" },
    { title: "Tim Lapangan Ditugaskan", date: "13 Nov 2025" },
  ],
  description:
    "Terdapat lubang besar di jalan utama yang membahayakan pengendara motor.",
  location: "Jl. Tiang Bendera V, Jakarta Barat",
};

export default function TrackingPage() {
  const [data, setData] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = () => {
    // nanti tinggal ganti ke API
    setData(dummyReport);
  };

  const steps = [
    {
      step: 1,
      title: "Pengiriman Laporan",
      desc: "Laporan berhasil dikirim ke sistem.",
    },
    {
      step: 2,
      title: "Verifikasi",
      desc: "Petugas meninjau laporan warga.",
    },
    {
      step: 3,
      title: "Tindak Lanjut",
      desc: "Tim lapangan melakukan penanganan.",
    },
    {
      step: 4,
      title: "Selesai",
      desc: "Laporan telah ditangani.",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-brrom-amber-50 via-orange-50 to-yellow-50">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div
          className="absolute top-40 right-10 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "2s" }}></div>
        <div
          className="absolute bottom-20 left-1/2 w-80 h-80 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "4s" }}></div>
      </div>

      <Navbar />

      <main className="relative py-12 px-4">
        <div className="max-w-5xl mx-auto space-y-14">
          {/* Hero */}
          <section className="bg-white/90 backdrop-blur-sm shadow-xl rounded-3xl p-8 md:p-10 grid md:grid-cols-2 gap-8 items-center">
            <img
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5"
              className="h-64 w-full object-cover rounded-2xl"
            />
            <div>
              <h2 className="text-3xl font-extrabold mb-4">
                Apa itu LaporCerdas?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6 text-justify">
                LaporCerdas adalah platform digital pelaporan masyarakat yang
                memudahkan warga menyampaikan keluhan dan memantau prosesnya
                secara transparan.
              </p>
              <Link
                to="/report"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-linear-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white text-sm font-bold rounded-lg shadow-md">
                <Send className="w-4 h-4" />
                Buat Laporan
              </Link>
            </div>
          </section>

          {/* Pencarian */}
          <section className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-10">
            <h3 className="text-xl font-bold text-center mb-6">
              Lacak Status Laporan
            </h3>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="max-w-xl mx-auto flex gap-3">
              <Input
                {...register("trackingId")}
                placeholder="Masukkan ID Laporan"
                className="h-12 flex-1 rounded-xl border-2 border-gray-200 bg-linear-to-br from-gray-50 to-gray-100/60 transition-all duration-300 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-200 hover:border-yellow-300 hover:bg-yellow-50/40"
              />

              <Button
                type="submit"
                className=" h-12 px-6 rounded-xl font-bold whitespace-nowrap bg-linear-to-r from-yellow-400 to-orange-500 text-white shadow-md transition-all duration-300 hover:from-yellow-500 hover:to-orange-600 hover:shadow-lg active:scale-[0.97] focus:ring-4 focus:ring-yellow-300">
                <Search className="w-4 h-4 mr-2" />
                Lacak
              </Button>
            </form>

            {errors.trackingId && (
              <p className="text-red-500 text-sm text-center mt-3">
                {errors.trackingId.message}
              </p>
            )}
          </section>

          {/* Hasil */}
          {data && (
            <section className="bg-white/90 rounded-3xl shadow-xl p-8 md:p-10">
              <h3 className="text-lg font-bold text-center mb-10">
                Tahapan Proses Laporan
              </h3>

              {/* Stepper */}
              <div className="relative max-w-5xl mx-auto">
                <div className="absolute top-6 left-0 w-full h-1 bg-gray-200 rounded-full" />

                <motion.div
                  initial={{ width: 0 }}
                  animate={{
                    width: `${((data.status - 1) / (steps.length - 1)) * 100}%`,
                  }}
                  transition={{ duration: 0.6 }}
                  className="absolute top-6 left-0 h-1 bg-yellow-400 rounded-full"
                />

                <div className="relative grid grid-cols-4 gap-4 text-center">
                  {steps.map((item, index) => {
                    const isActive = data.status >= item.step;

                    return (
                      <motion.div
                        key={item.step}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.15 }}
                        className="flex flex-col items-center">
                        <div
                          className={`
                  w-12 h-12 rounded-full flex items-center justify-center
                  font-bold text-lg z-10
                  ${
                    isActive
                      ? "bg-yellow-400 text-white"
                      : "bg-gray-200 text-gray-400"
                  }
                `}>
                          {item.step}
                        </div>

                        {/* Text */}
                        <h4 className="mt-4 font-bold text-sm text-gray-900">
                          {item.title}
                        </h4>
                        <p className="text-xs text-gray-600 max-w-40">
                          {item.desc}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Detail Ringkas */}
              <div className="mt-12 grid md:grid-cols-3 gap-6">
                {/* Deskripsi */}
                <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
                  <div className="flex items-center gap-2 mb-4">
                    <FileText className="w-5 h-5 text-yellow-600" />
                    <h4 className="font-bold text-sm text-gray-900">
                      Deskripsi Laporan
                    </h4>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-4 text-sm text-gray-700 leading-relaxed">
                    {data.description}
                  </div>
                </div>

                {/* Lokasi */}
                <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="w-5 h-5 text-yellow-600" />
                    <h4 className="font-bold text-sm text-gray-900">
                      Lokasi Kejadian
                    </h4>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-4 text-sm text-gray-700">
                    {data.location}
                  </div>
                </div>

                {/* Status */}
                <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition">
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-5 h-5 text-yellow-600" />
                    <h4 className="font-bold text-sm text-gray-900">
                      Status Saat Ini
                    </h4>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-sm font-semibold text-yellow-700 text-center">
                    Tahap {data.status} – {steps[data.status - 1]?.title}
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
