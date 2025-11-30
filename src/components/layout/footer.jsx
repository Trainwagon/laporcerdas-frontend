import {
  Mail,
  Facebook,
  Youtube,
  MapPin,
  Phone,
  Send,
  ExternalLink,
  ChevronRight,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

export default function Footer() {
  const navigationLinks = [
    { name: "Tentang Kami", href: "/about" },
    { name: "Panduan Pengguna", href: "/guide" },
    { name: "Kebijakan Privasi", href: "/privacy" },
    { name: "Syarat & Ketentuan", href: "/terms" },
  ];

  const partners = [
    { src: "/PROV-DKI-JAKARTA-PNG.svg", alt: "Provinsi DKI Jakarta" },
    { src: "/LOGO-APTIKOM-NO-BG.svg", alt: "APTIKOM" },
    {
      src: "/logo-universitas-gunadarma-warna.svg",
      alt: "Universitas Gunadarma",
    },
    { src: "/logo.svg", alt: "Roa Malaka" },
  ];

  return (
    <footer className="relative bg-white mt-20 border-t border-gray-200">
      <div className="h-1 bg-linear-to-rrom-yellow-400 via-orange-500 to-yellow-400"></div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <div className="absolute top-16 left-20 w-72 h-72 bg-yellow-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          <div className="space-y-5">
            <div className="flex items-center gap-3 group">
              <img
                src="/Logo-LaporCerdas.svg"
                alt="Logo LaporCerdas"
                className="h-10 w-10"
              />
              <div>
                <h3 className="font-extrabold text-xl bg-linear-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                  LaporCerdas
                </h3>
                <p className="text-xs text-gray-500">Platform Pelaporan</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Solusi digital untuk menyampaikan laporan masyarakat dengan mudah,
              cepat, dan transparan.
            </p>
          </div>

          <div className="space-y-5">
            <h4 className="font-bold text-base text-gray-800 flex items-center gap-2">
              <div className="w-1 h-6 bg-linear-to-b from-yellow-400 to-orange-500 rounded-full"></div>
              Kontak Kami
            </h4>

            <div className="space-y-4">
              <div className="flex items-start gap-3 group">
                <div className="w-9 h-9 bg-linear-to-br from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg flex items-center justify-center shrink-0 group-hover:border-yellow-300 group-hover:shadow-sm transition-all">
                  <MapPin className="w-4 h-4 text-yellow-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1 font-medium">
                    Alamat
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    Jl. Tiang Bendera V No. 26 Rt. 004/Rw. 03
                    <br />
                    Kel. Roa Malaka, Kec. Tambora
                    <br />
                    Jakarta Barat
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="w-9 h-9 bg-linear-to-br from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg flex items-center justify-center shrink-0 group-hover:border-yellow-300 group-hover:shadow-sm transition-all">
                  <Mail className="w-4 h-4 text-yellow-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1 font-medium">
                    Email
                  </p>
                  <a
                    href="mailto:kelroamalaka@gmail.com"
                    className="text-sm text-gray-700 hover:text-yellow-600 transition-colors">
                    kelroamalaka@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="w-9 h-9 bg-linear-to-br from-yellow-50 to-orange-50 border border-yellow-200 rounded-lg flex items-center justify-center shrink-0 group-hover:border-yellow-300 group-hover:shadow-sm transition-all">
                  <Phone className="w-4 h-4 text-yellow-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1 font-medium">
                    Telepon
                  </p>
                  <a
                    href=""
                    className="text-sm text-gray-700 hover:text-yellow-600 transition-colors">
                    -
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <h4 className="font-bold text-base text-gray-800 flex items-center gap-2">
              <div className="w-1 h-6 bg-linear-to-b from-yellow-400 to-orange-500 rounded-full"></div>
              Navigasi
            </h4>
            <ul className="space-y-3">
              {navigationLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.href}
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-yellow-600 hover:translate-x-1 transition-all duration-300 group">
                    <ChevronRight className="w-4 h-4 text-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              to="/report"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-linear-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white text-sm font-bold rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95 transition-all duration-300">
              <Send className="w-4 h-4" />
              Buat Laporan
            </Link>
          </div>

          <div className="space-y-5">
            <h4 className="font-bold text-base text-gray-800 flex items-center gap-2">
              <div className="w-1 h-6 bg-linear-to-b from-yellow-400 to-orange-500 rounded-full"></div>
              Mitra Kami
            </h4>
            <div className="grid grid-cols-2 gap-4">
              {partners.map((partner, idx) => (
                <div
                  key={idx}
                  className="bg-linear-to-br from-gray-50 to-gray-100/50 p-3 rounded-xl border-2 border-gray-200 hover:border-yellow-300 hover:shadow-md transition-all duration-300 flex items-center justify-center group">
                  <img
                    src={partner.src}
                    alt={partner.alt}
                    className="h-10 w-auto object-contain opacity-75 group-hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-gray-200" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p className="text-center sm:text-left">
            © 2025{" "}
            <span className="font-semibold text-gray-700">LaporCerdas</span>.
            All Rights Reserved
          </p>
          <div className="flex items-center gap-4">
            <Link
              to="/privacy"
              className="hover:text-yellow-600 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-gray-300">•</span>
            <Link
              to="/terms"
              className="hover:text-yellow-600 transition-colors">
              Terms of Service
            </Link>
            <span className="text-gray-300">•</span>
            <a
              href="#"
              className="hover:text-yellow-600 transition-colors flex items-center gap-1">
              Sitemap
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
