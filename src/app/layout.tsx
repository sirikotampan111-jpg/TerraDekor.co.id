// src/app/layout.tsx
import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import Image from "next/image";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400","500","600","700","800","900"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300","400","500","600","700","800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Terradekor.id - Solusi Interior & Konstruksi Premium",
  description: "PT. Opulent Interior Indonesia - Interior & konstruksi premium",
  keywords: ["interior","kontraktor","wall panel","wpc","vinyl","furniture","Terradekor"],
  authors: [{ name: "PT. Opulent Interior Indonesia" }],
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body className={`${playfair.variable} ${poppins.variable} antialiased`}>
        {/* Background diam dengan Next.js Image Optimization */}
        <div className="fixed inset-0 -z-10 w-full h-full">
          <Image 
            src="/background.jpg" 
            alt="Background Terradekor" 
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>

        {/* Navbar */}
        <header className="relative z-40">
          <Navbar />
        </header>

        {/* Main Content */}
        <main className="relative z-10 pt-[80px] md:pt-[120px] px-4 md:px-8 overflow-x-hidden">
          {children}
        </main>

        {/* Footer */}
        <footer className="relative z-30">
          <Footer />
        </footer>

        {/* Toasts */}
        <Toaster />
      </body>
    </html>
  );
}
