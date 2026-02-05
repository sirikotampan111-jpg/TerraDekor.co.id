// app/layout.tsx
import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Terradekor.id - Solusi Interior & Konstruksi Premium",
  description:
    "PT. Opulent Interior Indonesia - Produsen dan importir produk interior premium serta penyedia jasa interior dan kontraktor terpadu. Terima beres dengan kualitas premium.",
  keywords: [
    "interior",
    "kontraktor",
    "wall panel",
    "wpc",
    "vinyl",
    "furniture",
    "desain interior",
    "Terradekor",
  ],
  authors: [{ name: "PT. Opulent Interior Indonesia" }],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${poppins.variable} antialiased bg-gray-50 text-gray-900`}
      >
        {/* Bagian statis tetap terlihat, tidak tertutup background */}
        <div className="relative z-50 bg-white/90 shadow-md">
          <div className="max-w-7xl mx-auto p-4 text-gray-900 space-y-2">
            <h1 className="font-bold text-xl">Terradekor.id</h1>
            <p className="text-sm">
              PT. Opulent Interior Indonesia - Solusi interior dan konstruksi premium
              dengan kualitas terbaik dan harga terjangkau.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
              <div>
                <h2 className="font-semibold">Navigasi Cepat</h2>
                <ul className="text-sm space-y-1">
                  <li>Beranda</li>
                  <li>Produk</li>
                  <li>Layanan</li>
                  <li>Portofolio</li>
                  <li>Tentang Kami</li>
                  <li>Konsultasi Gratis</li>
                </ul>
              </div>

              <div>
                <h2 className="font-semibold">Produk Populer</h2>
                <ul className="text-sm space-y-1">
                  <li>Wall Panel Dinding</li>
                  <li>WPC Decking</li>
                  <li>Vinyl & SPC</li>
                  <li>Wallpaper</li>
                  <li>Pintu WPC & Baja</li>
                  <li>Furniture Custom</li>
                </ul>
              </div>

              <div className="md:col-span-2">
                <h2 className="font-semibold">Kontak & Alamat</h2>
                <p className="text-sm">
                  Pergudangan Pantai Indah Dadap Blok BJ 23, Kosambi, Tangerang,
                  Banten 15213
                </p>
                <p className="text-sm">ptopulentinteriors@gmail.com</p>
                <p className="text-sm">0812-5151-1997</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navbar */}
        <header className="relative z-40">
          <Navbar />
        </header>

        {/* Konten utama dengan background + animasi */}
        <main className="relative z-10 overflow-x-hidden">{children}</main>

        {/* Footer */}
        <footer className="relative z-30">
          <Footer />
        </footer>

        <Toaster />
      </body>
    </html>
  );
}
