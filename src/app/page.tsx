'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import FloatingWhatsApp from '@/components/layout/FloatingWhatsApp';

const sections = [
  {
    title: 'Solusi Interior & Konstruksi Premium',
    subtitle: 'Terima Beres',
    description:
      'Dari desain, penyediaan material, hingga pembangunan dan pemasangan profesional.',
    cta: [
      { text: 'Konsultasi Gratis', href: '/konsultasi', type: 'link' },
      { text: 'Lihat Produk', href: '/produk', type: 'link' },
      { text: 'Hubungi Kami', href: 'https://wa.me/6281251511997', type: 'external' },
    ],
    img: '/office.jpg', // pastikan ada di /public
  },
  {
    title: 'Mengapa Memilih Kami',
    items: [
      { title: 'Terima Beres', desc: 'Dari desain hingga pemasangan, kami tangani profesional.' },
      { title: 'Kualitas Premium', desc: 'Material berkualitas tinggi standar internasional.' },
      { title: 'Harga Terjangkau', desc: 'Solusi premium dengan harga kompetitif dan transparan.' },
      { title: 'Tim Profesional', desc: 'Ahli berpengalaman di interior & konstruksi.' },
      { title: 'Material Berkualitas', desc: 'Produk import & lokal terbaik.' },
      { title: 'Tepat Waktu', desc: 'Penyelesaian proyek sesuai jadwal.' },
    ],
    img: '/advantages.jpg', // contoh
  },
  {
    title: 'Produk & Layanan Premium',
    items: [
      { title: 'Wall Panel', desc: 'Wall panel dinding premium dengan berbagai desain.', img: '/wallpanel.jpg' },
      { title: 'Wallpaper', desc: 'Wallpaper 2D & 3D untuk mempercantik ruangan.', img: '/wallpaper.jpg' },
      { title: 'Vinyl & SPC', desc: 'Lantai vinyl & SPC motif realistik.', img: '/vinyl.jpg' },
      { title: 'WPC Decking', desc: 'Decking tahan cuaca untuk outdoor/semi-outdoor.', img: '/wpc.jpg' },
      { title: 'Pintu WPC & Baja', desc: 'Pintu modern & tahan lama.', img: '/pintubaja.jpg' },
      { title: 'Jasa Interior', desc: 'Desain & pemasangan interior komprehensif.', img: '/jasa.jpg' },
    ],
    img: '/products.jpg',
  },
  {
    title: 'Wujudkan Ruang Impian Anda',
    description:
      'Bersama Terradekor, transformasi ruang Anda menjadi masterpiece elegan dan fungsional.',
    cta: [
      { text: 'Konsultasi Gratis Sekarang', href: '/konsultasi', type: 'link' },
      { text: 'WhatsApp Kami', href: 'https://wa.me/6281251511997', type: 'external' },
    ],
    img: '/cta.jpg',
  },
];

const ScrollFadeIn = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: '-50px' });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
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
    <div className="relative min-h-screen">
      {/* Background Hero */}
      <div className="fixed inset-0 -z-10">
        <Image
          src={sections[0].img}
          alt="Background Office"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <FloatingWhatsApp />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 pt-20">
        <ScrollFadeIn>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
            {sections[0].title}
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#C9A24D] mb-6">
            {sections[0].subtitle}
          </h2>
          <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            {sections[0].description}
          </p>
        </ScrollFadeIn>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {sections[0].cta.map((btn, idx) =>
            btn.type === 'link' ? (
              <Link key={idx} href={btn.href}>
                <Button className="bg-gradient-to-r from-[#C9A24D] to-[#B89B5E] text-white font-bold px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition-transform">
                  {btn.text}
                </Button>
              </Link>
            ) : (
              <a
                key={idx}
                href={btn.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center bg-[#25D366] text-white font-bold px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition-transform"
              >
                {btn.text}
              </a>
            )
          )}
        </div>
      </section>

      {/* Remaining Sections with Images */}
      {sections.slice(1).map((sec, i) => (
        <section key={i} className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
            <ScrollFadeIn>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">{sec.title}</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#C9A24D] to-[#B89B5E] mx-auto rounded-full mb-8"></div>
            </ScrollFadeIn>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {sec.items?.map((item, idx) => (
              <ScrollFadeIn key={idx}>
                <div className="bg-black/40 border-2 border-[#C9A24D]/20 p-6 rounded-lg shadow-lg text-center hover:scale-105 transition-transform">
                  {item.img && (
                    <div className="relative w-full h-48 mb-4 rounded-md overflow-hidden">
                      <Image src={item.img} alt={item.title} fill className="object-cover" />
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-[#C9A24D] mb-2">{item.title}</h3>
                  <p className="text-gray-200">{item.desc}</p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>

          {/* Optional CTA for last section */}
          {sec.cta && (
            <div className="text-center mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
              {sec.cta.map((btn, idx) =>
                btn.type === 'link' ? (
                  <Link key={idx} href={btn.href}>
                    <Button className="bg-gradient-to-r from-[#C9A24D] to-[#B89B5E] text-white font-bold px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition-transform">
                      {btn.text}
                    </Button>
                  </Link>
                ) : (
                  <a
                    key={idx}
                    href={btn.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex justify-center bg-[#25D366] text-white font-bold px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition-transform"
                  >
                    {btn.text}
                  </a>
                )
              )}
            </div>
          )}
        </section>
      ))}
    </div>
  );
}
