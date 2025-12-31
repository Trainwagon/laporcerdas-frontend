/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Link } from "react-router-dom";

import Navbar from "../components/layout/navbar";
import Footer from "../components/layout/footer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { Search, MapPin, FileText, Clock, Send } from "lucide-react";

const schema = z.object({
  trackingId: z.string().min(3, "ID laporan tidak valid"),
});

const dummyReport = {
  id: "IDLapor#928371",
  status: 3,
  description:
    "Terdapat lubang besar di jalan utama yang membahayakan pengendara motor.",
  location: "Jl. Tiang Bendera V, Jakarta Barat",
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

const TrackingSkeleton = () => (
  <section className="bg-white/90 rounded-3xl shadow-xl p-8 md:p-10 animate-pulse">
    <div className="h-5 w-48 bg-gray-200 rounded mx-auto mb-10" />

    <div className="grid grid-cols-4 gap-6 mb-12">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="flex flex-col items-center gap-3">
          <div className="w-12 h-12 bg-gray-200 rounded-full" />
          <div className="h-3 w-24 bg-gray-200 rounded" />
          <div className="h-3 w-32 bg-gray-100 rounded" />
        </div>
      ))}
    </div>

    <div className="grid md:grid-cols-3 gap-6">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="bg-white border border-gray-200 rounded-2xl p-6 space-y-4">
          <div className="h-4 w-32 bg-gray-200 rounded" />
          <div className="h-20 bg-gray-100 rounded" />
        </div>
      ))}
    </div>
  </section>
);

export default function TrackingPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = ({ trackingId }) => {
    setLoading(true);
    setData(null);

    toast.loading("Mencari laporan...", { id: "tracking" });

    // SIMULASI API
    setTimeout(() => {
      if (trackingId === dummyReport.id) {
        setData(dummyReport);
        toast.success("Laporan ditemukan", { id: "tracking" });
      } else {
        toast.error("ID laporan tidak ditemukan", { id: "tracking" });
      }
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-amber-50 via-orange-50 to-yellow-50">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-200 rounded-full blur-3xl opacity-20 animate-pulse" />
        <div className="absolute top-40 right-10 w-96 h-96 bg-orange-200 rounded-full blur-3xl opacity-20 animate-pulse delay-2000" />
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-amber-200 rounded-full blur-3xl opacity-20 animate-pulse delay-4000" />
      </div>

      <Navbar />

      <main className="relative py-12 px-4">
        <div className="max-w-5xl mx-auto space-y-14">
          {/* HERO */}
          <section className="bg-white/90 rounded-3xl shadow-xl p-8 md:p-10 grid md:grid-cols-2 gap-8 items-center">
            <img
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5"
              className="h-64 w-full object-cover rounded-2xl"
            />
            <div>
              <h2 className="text-3xl font-extrabold mb-4">
                Apa itu LaporCerdas?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6 text-justify">
                Platform digital pelaporan masyarakat untuk menyampaikan keluhan
                dan memantau proses secara transparan.
              </p>
              <Link
                to="/laporan"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-linear-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-bold rounded-lg shadow-md">
                <Send className="w-4 h-4" />
                Buat Laporan
              </Link>
            </div>
          </section>

          {/* SEARCH */}
          <section className="bg-white/90 rounded-3xl shadow-xl p-8 md:p-10">
            <h3 className="text-xl font-bold text-center mb-6">
              Lacak Status Laporan
            </h3>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="max-w-xl mx-auto flex gap-3">
              <Input
                {...register("trackingId")}
                placeholder="Masukkan ID Laporan"
                className="h-12 flex-1 rounded-xl border-2 bg-gray-50 focus:border-yellow-400 focus:ring-yellow-200"
              />
              <Button
                type="submit"
                disabled={loading}
                className="h-12 px-6 rounded-xl font-bold bg-linear-to-r from-yellow-400 to-orange-500 text-white">
                <Search className="w-4 h-4 mr-2" />
                {loading ? "Mencari..." : "Lacak"}
              </Button>
            </form>

            {errors.trackingId && (
              <p className="text-red-500 text-sm text-center mt-3">
                {errors.trackingId.message}
              </p>
            )}
          </section>

          {/* RESULT */}
          {loading && <TrackingSkeleton />}

          {!loading && data && (
            <section className="bg-white/90 rounded-3xl shadow-xl p-8 md:p-10">
              <h3 className="text-lg font-bold text-center mb-10">
                Tahapan Proses Laporan
              </h3>

              {/* STEPPER */}
              <div className="relative">
                {/* Background line */}
                <div className="absolute top-6 left-0 w-full h-1 bg-gray-200 rounded-full z-0" />

                {/* Progress line */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{
                    width: `${((data.status - 1) / (steps.length - 1)) * 100}%`,
                  }}
                  transition={{ duration: 0.6 }}
                  className="absolute top-6 left-0 h-1 bg-yellow-400 rounded-full z-0"
                />

                {/* Steps */}
                <div className="relative grid grid-cols-4 gap-4 text-center z-10">
                  {steps.map((item, i) => {
                    const active = data.status >= item.step;

                    return (
                      <motion.div
                        key={item.step}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.15 }}
                        className="flex flex-col items-center">
                        {/* Step Circle */}
                        <div
                          className={`
              w-12 h-12 rounded-full flex items-center justify-center
              font-bold text-lg shadow-md ring-4 ring-white
              ${
                active
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

              {/* DETAIL */}
              <div className="mt-12 grid md:grid-cols-3 gap-6">
                <DetailCard icon={FileText} title="Deskripsi">
                  {data.description}
                </DetailCard>

                <DetailCard icon={MapPin} title="Lokasi">
                  {data.location}
                </DetailCard>

                <DetailCard icon={Clock} title="Status">
                  Tahap {data.status} – {steps[data.status - 1]?.title}
                </DetailCard>
              </div>
            </section>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

const DetailCard = ({ icon: Icon, title, children }) => (
  <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
    <div className="flex items-center gap-2 mb-4">
      <Icon className="w-5 h-5 text-yellow-600" />
      <h4 className="font-bold text-sm">{title}</h4>
    </div>
    <div className="bg-gray-100 rounded-lg p-4 text-sm text-gray-700">
      {children}
    </div>
  </div>
);
