import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, ShieldCheck, User, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const schema = z.object({
  username: z.string().min(4, "Username minimal 4 karakter"),
  password: z.string().min(6, "Password minimal 6 karakter"),
});

export default function LoginPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    setLoading(true);
    toast.loading("Memverifikasi akun...");

    setTimeout(() => {
      toast.dismiss();

      // SIMULASI LOGIN
      if (data.username === "admin" && data.password === "admin123") {
        toast.success("Login berhasil, selamat datang Admin 👋");
        navigate("/dashboard");
      } else {
        toast.error("Username atau password salah");
      }

      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-amber-50 via-orange-50 to-yellow-50 flex flex-col">
      {/* Background Blur */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div
          className="absolute top-40 right-10 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-20 left-1/2 w-80 h-80 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <main className="flex-1 flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-white/90 backdrop-blur rounded-3xl shadow-xl border border-white/30 p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-2xl bg-linear-to-br from-yellow-400 to-orange-500 shadow-lg mb-4">
              <ShieldCheck className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-extrabold bg-linear-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
              Login Admin
            </h1>
            <p className="text-sm text-gray-600 mt-1">
              Akses dashboard pengelolaan laporan
            </p>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Username */}
            <div>
              <label className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                <User className="w-4 h-4 text-yellow-600" />
                Username
              </label>
              <Input
                {...register("username")}
                placeholder="Masukkan username"
                className={`h-12 rounded-xl border-2 bg-linear-to-br from-gray-50 to-gray-100/60
                  ${
                    errors.username
                      ? "border-red-300"
                      : "border-gray-200 focus:border-yellow-400 focus:ring-yellow-200"
                  }`}
                disabled={loading}
              />
              {errors.username && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.username.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-yellow-600" />
                Password
              </label>
              <div className="relative">
                <Input
                  {...register("password")}
                  type={showPassword ? "text" : "password"}
                  placeholder="Masukkan password"
                  className={`h-12 rounded-xl border-2 pr-10 bg-linear-to-br from-gray-50 to-gray-100/60
                    ${
                      errors.password
                        ? "border-red-300"
                        : "border-gray-200 focus:border-yellow-400 focus:ring-yellow-200"
                    }`}
                  disabled={loading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={loading}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-yellow-600 disabled:opacity-50">
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.password && (
                <p className="text-xs text-red-500 mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Button */}
            <Button
              type="submit"
              disabled={loading}
              className="w-full h-12 rounded-xl font-bold text-white
                bg-linear-to-r from-yellow-400 to-orange-500
                hover:from-yellow-500 hover:to-orange-600
                shadow-md hover:shadow-lg
                transition-all duration-300 active:scale-[0.98]
                flex items-center justify-center gap-2">
              {loading && <Loader2 className="w-4 h-4 animate-spin" />}
              {loading ? "Memverifikasi..." : "Login"}
            </Button>
          </form>
        </div>
      </main>
    </div>
  );
}
