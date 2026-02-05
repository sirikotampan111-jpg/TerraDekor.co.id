// app/layout.tsx
import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

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
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${poppins.variable} antialiased text-gray-900`}
      >
        {/* Background Fixed + Parallax Layer */}
        <div
          className="fixed inset-0 -z-10 bg-[url('/background.jpg')] bg-cover bg-center bg-fixed"
          style={{ transform: "translateZ(0)" }}
        />

        {/* Navbar */}
        <header className="relative z-40">
          <Navbar />
        </header>

        {/* Konten utama dengan animasi masuk */}
        <main className="relative z-10 overflow-x-hidden">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {children}
          </motion.div>
        </main>

        {/* Footer */}
        <footer className="relative z-30">
          <Footer />
        </footer>

        <Toaster />
      </body>
    </html>
  );
}
