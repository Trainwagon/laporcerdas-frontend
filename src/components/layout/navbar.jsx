import { Link, NavLink } from "react-router-dom";
import { Menu, X, FileText, Home, Phone } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Halaman Utama", href: "/", icon: Home },
    { name: "Laporan", href: "/report", icon: FileText },
    { name: "Kontak", href: "/contact", icon: Phone },
  ];

  return (
    <header className="w-full bg-white/90 backdrop-blur-md border-b border-gray-200/50 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <img src="/Logo-LaporCerdas.svg" alt="Logo" className="h-6 w-6" />
            </div>
            <div className="flex flex-col">
              <h1 className="font-extrabold text-xl bg-linear-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                LaporCerdas
              </h1>
              <span className="text-[10px] text-gray-500 font-medium -mt-1">
                Platform Pelaporan Masyarakat
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            {links.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-linear-to-r from-yellow-400 to-orange-500 text-white shadow-md"
                      : "text-gray-700 hover:bg-yellow-50 hover:text-yellow-600"
                  }`
                }>
                <link.icon className="w-4 h-4" />
                {link.name}
              </NavLink>
            ))}
          </nav>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition active:scale-95">
              {isOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </SheetTrigger>

            <SheetContent
              side="right"
              className="
    w-[260px] sm:w-[300px]
    p-6 flex flex-col
    bg-linear-to-br from-yellow-50 to-orange-100
    overflow-y-auto
    scrollbar-thin scrollbar-thumb-yellow-300 scrollbar-track-transparent
  ">
              <SheetHeader className="sr-only">
                <SheetTitle>Menu Navigasi</SheetTitle>
                <SheetDescription>
                  Daftar halaman navigasi aplikasi
                </SheetDescription>
              </SheetHeader>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-yellow-300/60">
                <img
                  src="/Logo-LaporCerdas.svg"
                  alt="Logo"
                  className="h-10 w-10 object-contain"
                />
                <div>
                  <h2 className="font-bold text-lg sm:text-xl bg-linear-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                    LaporCerdas
                  </h2>
                  <p className="text-xs text-gray-600">Menu Navigasi</p>
                </div>
              </div>

              <nav className="flex flex-col gap-3 mt-2">
                {links.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `
            flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold
            transition-all duration-300
            ${
              isActive
                ? "bg-linear-to-r from-yellow-400 to-orange-500 text-white shadow-md scale-[1.02]"
                : "text-gray-700 hover:bg-white/70 hover:text-yellow-700 hover:translate-x-1"
            }
          `
                    }>
                    <link.icon className="w-5 h-5" />
                    {link.name}
                  </NavLink>
                ))}
              </nav>

              <div className="mt-auto pt-6 border-t border-yellow-300/50 text-center">
                <p className="text-xs text-gray-600">
                  Platform Pelaporan Masyarakat
                </p>
                <p className="text-xs text-gray-500 mt-1">© 2025 LaporCerdas</p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <div className="h-1 bg-linear-to-rrom-yellow-400 via-orange-500 to-yellow-400"></div>
    </header>
  );
}
