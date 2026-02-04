import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css"; // pastikan ini mengarah ke globals.css yang sudah kita rapikan
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${poppins.variable} antialiased bg-background text-foreground relative`}
      >
        {/* Particle Background */}
        <div className="particle-bg" />

        {/* Navbar + Content + Footer */}
        <div className="min-h-screen flex flex-col relative z-10">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>

        <Toaster />
      </body>
    </html>
  );
}
