// app/layout.tsx
import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion, useScroll, useTransform } from "framer-motion";

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
  // framer-motion scroll untuk parallax
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -50]); // background sedikit bergerak saat scroll

  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${poppins.variable} antialiased text-gray-900`}
      >
        {/* =========================
            Background Parallax (Mobile-friendly)
        ========================= */}
        <motion.div
          style={{ y: yParallax }}
          className="fixed inset-0 -z-10 w-full h-full"
        >
          <img
            src="/background.jpg"
            className="w-full h-full object-cover"
            alt="Background Terradekor"
          />
        </motion.div>

        {/* Navbar */}
        <header className="relative z-40">
          <Navbar />
        </header>

        {/* Konten utama */}
        <main className="relative z-10 overflow-x-hidden pt-[80px] md:pt-[120px] px-4 md:px-8">
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

        {/* Toast */}
        <Toaster />
      </body>
    </html>
  );
}
