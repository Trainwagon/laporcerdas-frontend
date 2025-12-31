import Navbar from "../components/layout/navbar";
import Footer from "../components/layout/footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useState, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import {
  FileText,
  MapPin,
  Upload,
  User,
  Mail,
  Home,
  Phone,
  CreditCard,
  AlertCircle,
  CheckCircle2,
  Shield,
} from "lucide-react";

const schema = z.object({
  description: z.string().min(20, "Deskripsi minimal 20 karakter"),
  location: z.string().nonempty("Lokasi wajib diisi"),
  nik: z.string().length(16, "NIK harus 16 digit"),
  name: z.string().optional(),
  email: z.string().email("Email tidak valid").optional().or(z.literal("")),
  address: z.string().optional(),
  phone: z.string().optional(),
  photo: z
    .any()
    .refine(
      (files) => !files || files.length === 0 || files[0]?.size <= 5000000,
      {
        message: "Ukuran file maksimal 5MB",
      }
    )
    .refine(
      (files) =>
        !files ||
        files.length === 0 ||
        ["image/jpeg", "image/jpg"].includes(files[0]?.type),
      {
        message: "Hanya file JPG/JPEG yang diperbolehkan",
      }
    )
    .optional(),
  agreement: z.literal(true, {
    errorMap: () => ({ message: "Anda harus menyetujui pernyataan." }),
  }),
  captchaToken: z.string().nonempty("Captcha belum diverifikasi."),
});

const PageSkeleton = () => (
  <main className="relative py-12 px-4 animate-pulse">
    <div className="max-w-4xl mx-auto">
      <div className="bg-white/80 rounded-3xl shadow-xl p-8 md:p-10 space-y-6">
        <div className="h-10 w-1/3 bg-gray-200 rounded-lg mx-auto" />
        <div className="h-4 w-2/3 bg-gray-200 rounded mx-auto" />

        <div className="space-y-4 mt-8">
          <div className="h-32 bg-gray-200 rounded-xl" />
          <div className="h-12 bg-gray-200 rounded-xl" />
          <div className="h-12 bg-gray-200 rounded-xl" />
          <div className="h-12 bg-gray-200 rounded-xl" />
        </div>

        <div className="h-14 bg-gray-300 rounded-xl mt-6" />
      </div>
    </div>
  </main>
);

export default function ReportPage() {
  const [captchaToken, setCaptchaToken] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    if (!captchaToken) {
      toast.error("Silakan verifikasi Captcha terlebih dahulu.");
      return;
    }

    setIsSubmitting(true);
    toast.loading("Mengirim laporan...");

    setTimeout(() => {
      toast.dismiss();
      console.log(data);

      toast.success("Laporan berhasil dikirim ✅");

      reset();
      setCaptchaToken(null);
      setIsSubmitting(false);
    }, 2000);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setPageLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

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

      {pageLoading ? (
        <PageSkeleton />
      ) : (
        <main className="relative py-12 px-4">
          <div className="max-w-4xl mx-auto">
            {/* Form Card */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-10 border border-white/20">
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center justify-center w-20 h-20 bg-linear-to-br from-yellow-400 to-orange-500 rounded-2xl shadow-lg">
                    <FileText className="w-10 h-10 text-white" />
                  </div>
                  <h1 className="text-4xl font-extrabold bg-linear-to-r from-yellow-600 via-orange-600 to-amber-600 bg-clip-text text-transparent">
                    Buat Laporan
                  </h1>
                </div>
                <p className="text-gray-600 text-sm max-w-xl mx-auto mb-5">
                  Sampaikan laporan Anda dengan jelas dan lengkap. Kami akan
                  meninjau setiap laporan secara serius dan profesional.
                </p>
              </div>

              <div className="space-y-8">
                {/* Deskripsi Laporan */}
                <div className="group">
                  <label className="flex items-center gap-2 font-semibold text-gray-700 text-sm mb-3">
                    <FileText className="w-4 h-4 text-yellow-600" />
                    Deskripsi Laporan *
                  </label>
                  <div className="relative">
                    <Textarea
                      {...register("description")}
                      placeholder="Tuliskan detail kejadian atau masalah dengan lengkap..."
                      className={`mt-1 bg-linear-to-br from-gray-50 to-gray-100/50 border-2 transition-all duration-300 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100 rounded-xl ${
                        errors.description
                          ? "border-red-300"
                          : "border-gray-200"
                      }`}
                      rows={6}
                    />
                  </div>
                  {errors.description && (
                    <div className="flex items-center gap-2 mt-2 text-red-500 text-sm">
                      <AlertCircle className="w-4 h-4" />
                      {errors.description.message}
                    </div>
                  )}
                </div>

                {/* Lokasi */}
                <div className="group">
                  <label className="flex items-center gap-2 font-semibold text-gray-700 text-sm mb-3">
                    <MapPin className="w-4 h-4 text-yellow-600" />
                    Lokasi Kejadian *
                  </label>
                  <Input
                    {...register("location")}
                    placeholder="Contoh: Jalan Merdeka No. 10, Jakarta Pusat"
                    className={`bg-linear-to-br from-gray-50 to-gray-100/50 border-2 transition-all duration-300 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100 rounded-xl h-12 ${
                      errors.location ? "border-red-300" : "border-gray-200"
                    }`}
                  />
                  {errors.location && (
                    <div className="flex items-center gap-2 mt-2 text-red-500 text-sm">
                      <AlertCircle className="w-4 h-4" />
                      {errors.location.message}
                    </div>
                  )}
                </div>

                {/* Upload Foto */}
                <div className="group">
                  <label className="flex items-center gap-2 font-semibold text-gray-700 text-sm mb-3">
                    <Upload className="w-4 h-4 text-yellow-600" />
                    Upload Foto (Opsional)
                  </label>
                  <div className="relative">
                    <Input
                      type="file"
                      accept=".jpg,.jpeg"
                      className="bg-linear-to-br from-gray-50 to-gray-100/50 border-2 border-gray-200 transition-all duration-300 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100 rounded-xl h-12 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-yellow-50 file:text-yellow-700 hover:file:bg-yellow-100 cursor-pointer"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Format: JPG/JPEG saja, maksimal 5MB
                  </p>
                </div>

                <div className="relative py-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t-2 border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center">
                    <span className="bg-white px-6 py-2 text-sm font-bold text-gray-500 rounded-full shadow-sm border-2 border-gray-200">
                      Informasi Pelapor
                    </span>
                  </div>
                </div>

                {/* Informasi Pelapor */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-3">
                      <User className="w-4 h-4 text-yellow-600" />
                      Nama Lengkap
                    </label>
                    <Input
                      {...register("name")}
                      placeholder="Nama lengkap Anda"
                      className="bg-linear-to-br from-gray-50 to-gray-100/50 border-2 border-gray-200 transition-all duration-300 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100 rounded-xl h-12"
                    />
                  </div>

                  <div className="group">
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-3">
                      <CreditCard className="w-4 h-4 text-yellow-600" />
                      NIK *
                    </label>
                    <Input
                      {...register("nik")}
                      maxLength={16}
                      placeholder="16 digit NIK"
                      className={`bg-linear-to-br from-gray-50 to-gray-100/50 border-2 transition-all duration-300 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100 rounded-xl h-12 ${
                        errors.nik ? "border-red-300" : "border-gray-200"
                      }`}
                    />
                    {errors.nik && (
                      <div className="flex items-center gap-2 mt-2 text-red-500 text-sm">
                        <AlertCircle className="w-4 h-4" />
                        {errors.nik.message}
                      </div>
                    )}
                  </div>

                  <div className="group">
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-3">
                      <Mail className="w-4 h-4 text-yellow-600" />
                      Email (Opsional)
                    </label>
                    <Input
                      {...register("email")}
                      placeholder="email@example.com"
                      className={`bg-linear-to-br from-gray-50 to-gray-100/50 border-2 transition-all duration-300 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100 rounded-xl h-12 ${
                        errors.email ? "border-red-300" : "border-gray-200"
                      }`}
                    />
                    {errors.email && (
                      <div className="flex items-center gap-2 mt-2 text-red-500 text-sm">
                        <AlertCircle className="w-4 h-4" />
                        {errors.email.message}
                      </div>
                    )}
                  </div>

                  <div className="group">
                    <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-3">
                      <Phone className="w-4 h-4 text-yellow-600" />
                      No. Telepon (Opsional)
                    </label>
                    <Input
                      {...register("phone")}
                      placeholder="08xxxxxxxxxx"
                      className="bg-linear-to-br from-gray-50 to-gray-100/50 border-2 border-gray-200 transition-all duration-300 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100 rounded-xl h-12"
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-3">
                    <Home className="w-4 h-4 text-yellow-600" />
                    Alamat (Opsional)
                  </label>
                  <Input
                    {...register("address")}
                    placeholder="Alamat lengkap Anda"
                    className="bg-linear-to-br from-gray-50 to-gray-100/50 border-2 border-gray-200 transition-all duration-300 focus:border-yellow-400 focus:ring-4 focus:ring-yellow-100 rounded-xl h-12"
                  />
                </div>

                <div className="bg-linear-to-br from-yellow-50 to-orange-50 border-2 border-yellow-200 rounded-2xl p-5 shadow-sm">
                  <div className="flex items-start gap-4">
                    <input
                      type="checkbox"
                      {...register("agreement")}
                      className="w-5 h-5 mt-1 accent-yellow-500 rounded cursor-pointer"
                    />
                    <div>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        <span className="font-semibold">Pernyataan:</span> Saya
                        menyatakan bahwa semua informasi yang saya isi adalah
                        benar dan dapat dipertanggungjawabkan sesuai dengan
                        peraturan yang berlaku.
                      </p>
                    </div>
                  </div>
                  {errors.agreement && (
                    <div className="flex items-center gap-2 mt-3 text-red-500 text-sm ml-9">
                      <AlertCircle className="w-4 h-4" />
                      {errors.agreement.message}
                    </div>
                  )}
                </div>

                <div className="mt-6 flex flex-col items-center justify-center">
                  <ReCAPTCHA
                    sitekey="YOUR_RECAPTCHA_SITE_KEY"
                    onChange={(token) => {
                      setCaptchaToken(token);
                      setValue("captchaToken", token);
                    }}
                  />
                  {errors.captchaToken && (
                    <p className="text-red-500 text-sm mt-2 text-center">
                      {errors.captchaToken.message}
                    </p>
                  )}
                </div>

                <Button
                  type="button"
                  onClick={handleSubmit(onSubmit)}
                  disabled={isSubmitting}
                  className="w-full py-6 text-lg font-bold bg-linear-to-r from-yellow-400 via-orange-500 to-yellow-500 hover:from-yellow-500 hover:via-orange-600 hover:to-yellow-600 text-white rounded-xl shadow-lg hover:shadow-xl active:scale-[0.98] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                      Mengirim Laporan...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <FileText className="w-5 h-5" />
                      Kirim Laporan
                    </span>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </main>
      )}
      <Footer />
    </div>
  );
}
