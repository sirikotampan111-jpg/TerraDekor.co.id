'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import FloatingWhatsApp from '@/components/layout/FloatingWhatsApp';
import AnimatedText from '@/components/AnimatedText';

const highlights = [
  { title: 'Wall Panel', desc: 'Wall panel dinding premium dengan berbagai desain.', image: '/wallpanel.jpg' },
  { title: 'Wallpaper', desc: 'Wallpaper 2D & 3D untuk mempercantik ruangan.', image: '/walpaper.jpg' },
  { title: 'Vinyl & SPC', desc: 'Lantai vinyl & SPC motif realistik.', image: '/vinyl.jpg' },
  { title: 'WPC Decking', desc: 'Decking tahan cuaca untuk outdoor/semi-outdoor.', image: '/wpc.jpg' },
  { title: 'Pintu WPC & Baja', desc: 'Pintu modern & tahan lama.', image: '/pintu-baja.jpg' },
  { title: 'Jasa Interior', desc: 'Desain & pemasangan interior komprehensif.', image: '/jasa-interior.jpg' },
];

const ScrollFadeIn = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: '-50px' });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start({ opacity: 1, y: 0 });
    else controls.start({ opacity: 0, y: 50 });
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Video Background */}
      <video
        className="fixed inset-0 w-full h-full object-cover -z-20"
        src="/office.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 -z-10"></div>

      <FloatingWhatsApp />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 pt-20">
        <ScrollFadeIn>
          <AnimatedText className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white shimmer">
            Solusi Interior & Konstruksi Premium
          </AnimatedText>
          <AnimatedText className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#C9A24D] animate-float mt-2">
            Terima Beres
          </AnimatedText>
          <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto mb-8 mt-4">
            Dari desain, penyediaan material, hingga pembangunan dan pemasangan profesional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/konsultasi">
              <Button className="bg-gradient-to-r from-[#C9A24D] to-[#B89B5E] text-white font-bold px-6 py-3 rounded-lg shadow-2xl premium-hover hover:scale-105 transition-transform">
                Konsultasi Gratis
              </Button>
            </Link>
            <Link href="/produk">
              <Button className="border-2 border-[#C9A24D] text-[#C9A24D] hover:bg-[#C9A24D] hover:text-white font-bold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
                Lihat Produk
              </Button>
            </Link>
            <a
              href="https://wa.me/6281251511997"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center bg-[#25D366] text-white font-bold px-6 py-3 rounded-lg shadow-2xl premium-hover hover:scale-105 transition-transform"
            >
              Hubungi Kami
            </a>
          </div>
        </ScrollFadeIn>
      </section>

      {/* Highlights Section - Foto di Kotak */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-gray-900 mb-4">
              Produk & Layanan <span className="text-[#C9A24D]">Premium</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#C9A24D] to-[#B89B5E] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((item, i) => (
              <div key={i} className="relative rounded-xl overflow-hidden shadow-lg h-80 group">
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                  <p className="text-white/90 font-semibold mt-2">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#C9A24D] via-[#D4AF6A] to-[#B89B5E] text-center">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
          Wujudkan Ruang Impian Anda
        </h2>
        <p className="text-2xl text-white/90 font-bold max-w-3xl mx-auto leading-relaxed mb-8">
          Bersama Terradekor, transformasi ruang Anda menjadi masterpiece elegan dan fungsional.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/konsultasi">
            <Button className="bg-white text-[#C9A24D] hover:bg-gray-100 font-bold px-8 py-4 text-lg rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105">
              Konsultasi Gratis Sekarang
            </Button>
          </Link>
          <a
            href="https://wa.me/6281251511997"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gray-900 text-white font-bold px-8 py-4 text-lg rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
          >
            WhatsApp Kami
          </a>
        </div>
      </section>
    </div>
  );
}
