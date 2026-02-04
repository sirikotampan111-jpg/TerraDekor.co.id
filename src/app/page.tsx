'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import FloatingWhatsApp from '@/components/layout/FloatingWhatsApp';
import './animations.css';

export default function Home() {
  const highlights = [
    { title: 'Wall Panel', description: 'Wall panel dinding premium dengan berbagai pilihan desain dan warna.', image: '/wallpanel.jpg' },
    { title: 'Wallpaper', description: 'Wallpaper dan wallpaper 3D untuk mempercantik dinding ruangan.', image: '/walpaper.jpg' },
    { title: 'Vinyl & SPC', description: 'Lantai vinyl dan SPC dengan berbagai motif dan tekstur realistik.', image: '/vinil.jpg' },
    { title: 'WPC Decking', description: 'Decking WPC tahan cuaca untuk outdoor dan semi-outdoor.', image: '/wpc.jpg' },
    { title: 'Pintu WPC & Baja', description: 'Pintu modern dan tahan lama dengan material berkualitas.', image: '/pintu-baja.jpg' },
    { title: 'Jasa Interior', description: 'Layanan desain dan pemasangan interior komprehensif.', image: '/terima-jasa.jpg' },
  ];

  return (
    <div className="min-h-screen">

      {/* Floating WhatsApp */}
      <FloatingWhatsApp />

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/background.jpg')", backgroundAttachment: 'fixed' }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight animate-slideIn">
            Solusi Interior & Konstruksi Premium<br/>
            <span className="bg-gradient-to-r from-[#C9A24D] via-[#D4AF6A] to-[#C9A24D] bg-clip-text text-transparent">Terima Beres</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 font-bold mt-6 animate-fadeIn">
            Dari desain, penyediaan material, hingga pembangunan dan pemasangan profesional
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Link href="/konsultasi">
              <Button className="bg-gradient-to-r from-[#C9A24D] to-[#B89B5E] hover:from-[#D4AF6A] hover:to-[#C9A24D] text-white font-bold px-8 py-4 rounded-lg shadow-2xl hover:scale-105 transition-transform">
                Konsultasi Gratis
              </Button>
            </Link>
            <Link href="/produk">
              <Button className="border-2 border-[#C9A24D] text-[#C9A24D] hover:bg-[#C9A24D] hover:text-white font-bold px-8 py-4 rounded-lg transition-all">
                Lihat Produk
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        className="py-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/background2.jpg')" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-white/80 backdrop-blur-sm rounded-xl py-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Tentang <span className="text-[#C9A24D]">Terradekor</span></h2>
          <p className="text-lg text-gray-700 font-semibold leading-relaxed">
            PT. Opulent Interior Indonesia (Terradekor.id) adalah produsen dan importir produk interior premium serta penyedia jasa interior dan kontraktor terpadu.
            <br/><br/>
            Dengan pengalaman bertahun-tahun, kami berkomitmen untuk memberikan solusi interior terbaik dengan kualitas premium dan harga terjangkau. Tim profesional kami siap membantu mewujudkan ruang impian Anda.
          </p>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Produk & Layanan <span className="text-[#C9A24D]">Premium</span></h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#C9A24D] to-[#B89B5E] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <div key={index} className="relative rounded-xl overflow-hidden shadow-lg h-80 group">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/>
                <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                  <p className="text-white/90 font-semibold mt-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#C9A24D] via-[#D4AF6A] to-[#B89B5E] text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            Wujudkan Ruang Impian Anda
          </h2>
          <p className="text-2xl text-white/90 font-bold max-w-3xl mx-auto leading-relaxed">
            Bersama Terradekor, transformasi ruang Anda menjadi masterpiece yang elegan dan fungsional
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/konsultasi">
              <Button className="bg-white text-[#C9A24D] hover:bg-gray-100 font-bold px-8 py-4 rounded-lg shadow-2xl hover:scale-105 transition-transform">
                Konsultasi Gratis Sekarang
              </Button>
            </Link>
            <a href="https://wa.me/6281251511997" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 bg-gray-900 text-white font-bold px-8 py-4 rounded-lg shadow-2xl hover:scale-105 transition-transform">
              WhatsApp Kami
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
