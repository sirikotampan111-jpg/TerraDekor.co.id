'use client';

import Link from 'next/link';
import { Check, Phone, MessageCircle, ArrowRight, Star, Award, Clock, Shield, Zap, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import FloatingWhatsApp from '@/components/layout/FloatingWhatsApp';
import './animations.css';

export default function Home() {
  const advantages = [
    { icon: Check, title: 'Terima Beres', description: 'Dari desain hingga pemasangan, kami tangani semua dengan profesional.' },
    { icon: Award, title: 'Kualitas Premium', description: 'Material berkualitas tinggi dengan standar internasional.' },
    { icon: Shield, title: 'Harga Terjangkau', description: 'Solusi premium dengan harga yang kompetitif dan transparan.' },
    { icon: Star, title: 'Tim Profesional', description: 'Tim ahli berpengalaman di bidang interior dan konstruksi.' },
    { icon: Zap, title: 'Material Berkualitas', description: 'Produk import dan lokal dengan kualitas terbaik.' },
    { icon: Clock, title: 'Tepat Waktu', description: 'Penyelesaian proyek sesuai jadwal yang disepakati.' },
  ];

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
      <FloatingWhatsApp />

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/background.jpg')", backgroundAttachment: 'fixed' }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#C9A24D]/20 to-[#B89B5E]/20 border border-[#C9A24D]/30 px-6 py-3 rounded-full mb-6 animate-fadeIn">
            <Star className="w-5 h-5 text-[#C9A24D]" />
            <span className="text-[#C9A24D] font-bold text-sm uppercase tracking-wider">Solusi Interior Premium</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight mt-6 overflow-hidden">
            <span className="inline-block animate-slideIn">
              Solusi Interior & Konstruksi Premium<br/>
              <span className="bg-gradient-to-r from-[#C9A24D] via-[#D4AF6A] to-[#C9A24D] bg-clip-text text-transparent">Terima Beres</span>
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-300 font-bold max-w-4xl mx-auto leading-relaxed mt-6 animate-fadeIn">
            Dari desain, penyediaan material, hingga pembangunan dan pemasangan profesional.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Link href="/konsultasi">
              <Button size="lg" className="bg-gradient-to-r from-[#C9A24D] to-[#B89B5E] hover:from-[#D4AF6A] hover:to-[#C9A24D] text-white font-bold px-8 py-4 text-lg rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
                <MessageCircle className="w-5 h-5 mr-2" />
                Konsultasi Gratis
              </Button>
            </Link>
            <Link href="/produk">
              <Button size="lg" variant="outline" className="border-2 border-[#C9A24D] text-[#C9A24D] hover:bg-[#C9A24D] hover:text-white font-bold px-8 py-4 text-lg rounded-lg transition-all duration-300 transform hover:scale-105">
                Lihat Produk
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <a href="https://wa.me/6281251511997" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-bold px-8 py-4 text-lg rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
              <Phone className="w-5 h-5" />
              <span>Hubungi Kami</span>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-gray-900 mb-4">Tentang <span className="text-[#C9A24D]">Terradekor</span></h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#C9A24D] to-[#B89B5E] mx-auto rounded-full"></div>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-gray-800 font-bold leading-relaxed mb-8">
              PT. Opulent Interior Indonesia (Terradekor.id) adalah produsen dan importir produk interior premium serta penyedia jasa interior dan kontraktor terpadu.
            </p>
            <p className="text-lg text-gray-700 font-semibold leading-relaxed">
              Dengan pengalaman bertahun-tahun, kami berkomitmen untuk memberikan solusi interior terbaik dengan kualitas premium dan harga terjangkau. Tim profesional kami siap membantu mewujudkan ruang impian Anda.
            </p>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">
              Mengapa Memilih <span className="text-[#C9A24D]">Kami</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#C9A24D] to-[#B89B5E] mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((adv, i) => (
              <Card key={i} className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-[#C9A24D]/20 p-6 hover:border-[#C9A24D] transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#C9A24D] to-[#B89B5E] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <adv.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#C9A24D]">{adv.title}</h3>
                  <p className="text-gray-300 font-semibold">{adv.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section (Foto Penuh Card) */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-gray-900 mb-4">
              Produk & Layanan <span className="text-[#C9A24D]">Premium</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#C9A24D] to-[#B89B5E] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((item, i) => (
              <Card key={i} className="relative p-0 overflow-hidden rounded-xl shadow-lg group h-80">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/>
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                  <p className="text-white/90 font-semibold mt-2">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#C9A24D] via-[#D4AF6A] to-[#B89B5E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white">
              Wujudkan Ruang Impian Anda
            </h2>
            <p className="text-2xl text-white/90 font-bold max-w-3xl mx-auto leading-relaxed">
              Bersama Terradekor, transformasi ruang Anda menjadi masterpiece yang elegan dan fungsional
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Link href="/konsultasi">
                <Button size="lg" className="bg-white text-[#C9A24D] hover:bg-gray-100 font-bold px-8 py-4 text-lg rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
                  <Heart className="w-5 h-5 mr-2" />
                  Konsultasi Gratis Sekarang
                </Button>
              </Link>
              <a href="https://wa.me/6281251511997" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 bg-gray-900 text-white font-bold px-8 py-4 text-lg rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
                <Phone className="w-5 h-5" />
                <span>WhatsApp Kami</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
