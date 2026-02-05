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
  },
  {
    title: 'Mengapa Memilih Kami',
    items: [
      { title: 'Terima Beres', desc: 'Dari desain hingga pemasangan, kami tangani profesional.' },
      { title: 'Kualitas Premium', desc: 'Material berkualitas tinggi standar internasional.' },
      { title: 'Harga Terjangkau', desc: 'Solusi terbaik dengan harga kompetitif.' },
      { title: 'Tim Profesional', desc: 'Didukung tenaga ahli berpengalaman.' },
      { title: 'Material Berkualitas', desc: 'Menggunakan bahan terbaik.' },
      { title: 'Tepat Waktu', desc: 'Pengerjaan sesuai jadwal.' },
    ],
  },
  {
    title: 'Produk & Layanan Premium',
    items: [
      { title: 'Wall Panel', desc: 'Interior modern & elegan.' },
      { title: 'Wallpaper', desc: 'Motif eksklusif.' },
      { title: 'Vinyl & SPC', desc: 'Lantai berkualitas tinggi.' },
      { title: 'WPC Decking', desc: 'Outdoor tahan cuaca.' },
      { title: 'Pintu WPC & Baja', desc: 'Kuat & estetis.' },
      { title: 'Jasa Interior', desc: 'Desain & pengerjaan.' },
    ],
  },
  {
    title: 'Wujudkan Ruang Impian Anda',
    description:
      'Bersama Terradekor, transformasi ruang Anda menjadi masterpiece elegan dan fungsional.',
    cta: [
      { text: 'Konsultasi Gratis Sekarang', href: '/konsultasi', type: 'link' },
      { text: 'WhatsApp Kami', href: 'https://wa.me/6281251511997', type: 'external' },
    ],
  },
];

const ScrollFadeIn = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: '-50px' });
  const controls = useAnimation();

  useEffect(() => {
    controls.start(inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 });
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
    <div className="relative min-h-screen text-white">
      {/* BACKGROUND FULL PAGE */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/bg-interior.jpg"
          alt="Background Interior"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <FloatingWhatsApp />

      {/* HERO */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20">
        <ScrollFadeIn>
          <h1 className="text-4xl sm:text-6xl font-bold mb-4">
            {sections[0].title}
          </h1>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#C9A24D] mb-6">
            {sections[0].subtitle}
          </h2>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto mb-8">
            {sections[0].description}
          </p>
        </ScrollFadeIn>
      </section>

      {/* ===== MENGAPA MEMILIH KAMI ===== */}
      <section className="py-20">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-white mb-3">
            {sections[1].title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#C9A24D] to-[#B89B5E] mx-auto rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections[1].items.map((item, idx) => (
            <ScrollFadeIn key={idx}>
              <div className="bg-black/50 border-2 border-[#C9A24D]/30 p-6 rounded-lg text-center hover:scale-105 transition-transform">
                <div className="relative w-full h-48 mb-4 overflow-hidden rounded-md">
                  <Image
                    src={`/gallery/why-${idx + 1}.jpg`}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#C9A24D] mb-2">{item.title}</h3>
                <p className="text-gray-200">{item.desc}</p>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </section>

      {/* ===== PRODUK & LAYANAN PREMIUM ===== */}
      <section className="py-20">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-white mb-3">
            {sections[2].title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#C9A24D] to-[#B89B5E] mx-auto rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections[2].items.map((item, idx) => (
            <ScrollFadeIn key={idx}>
              <div className="bg-black/50 border-2 border-[#C9A24D]/30 p-6 rounded-lg text-center hover:scale-105 transition-transform">
                <div className="relative w-full h-48 mb-4 overflow-hidden rounded-md">
                  <Image
                    src={`/gallery/product-${idx + 1}.jpg`}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#C9A24D] mb-2">{item.title}</h3>
                <p className="text-gray-200">{item.desc}</p>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <ScrollFadeIn>
          <h2 className="text-4xl font-bold mb-4">
            {sections[3].title}
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            {sections[3].description}
          </p>
        </ScrollFadeIn>
      </section>
    </div>
  );
}
