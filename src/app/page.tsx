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
      { title: 'Harga Terjangkau', desc: 'Solusi premium dengan harga kompetitif dan transparan.' },
      { title: 'Tim Profesional', desc: 'Ahli berpengalaman di interior & konstruksi.' },
      { title: 'Material Berkualitas', desc: 'Produk import & lokal terbaik.' },
      { title: 'Tepat Waktu', desc: 'Penyelesaian proyek sesuai jadwal.' },
    ],
  },
  {
    title: 'Produk & Layanan Premium',
    items: [
      { title: 'Wall Panel', desc: 'Wall panel dinding premium dengan berbagai desain.' },
      { title: 'Wallpaper', desc: 'Wallpaper 2D & 3D untuk mempercantik ruangan.' },
      { title: 'Vinyl & SPC', desc: 'Lantai vinyl & SPC motif realistik.' },
      { title: 'WPC Decking', desc: 'Decking tahan cuaca untuk outdoor/semi-outdoor.' },
      { title: 'Pintu WPC & Baja', desc: 'Pintu modern & tahan lama.' },
      { title: 'Jasa Interior', desc: 'Desain & pemasangan interior komprehensif.' },
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
    <div className="relative min-h-screen">
      {/* BACKGROUND FULL */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/office.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <FloatingWhatsApp />

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center text-center px-4 pt-20">
        <ScrollFadeIn>
          <h1 className="text-6xl font-bold text-white">{sections[0].title}</h1>
          <h2 className="text-5xl font-bold text-[#C9A24D] mt-4">{sections[0].subtitle}</h2>
          <p className="text-gray-200 mt-6 max-w-3xl mx-auto">{sections[0].description}</p>
        </ScrollFadeIn>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          {sections[0].cta.map((btn, i) =>
            btn.type === 'link' ? (
              <Link key={i} href={btn.href}>
                <Button className="bg-gradient-to-r from-[#C9A24D] to-[#B89B5E]">
                  {btn.text}
                </Button>
              </Link>
            ) : (
              <a key={i} href={btn.href} target="_blank" className="bg-[#25D366] px-6 py-3 rounded-lg text-white font-bold">
                {btn.text}
              </a>
            )
          )}
        </div>
      </section>

      {/* MENGAPA MEMILIH KAMI */}
      <section className="py-20">
        <h2 className="text-center text-5xl font-bold text-white mb-16">
          {sections[1].title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
          {sections[1].items.map((item, i) => (
            <ScrollFadeIn key={i}>
              <div className="bg-black/40 border border-[#C9A24D]/30 rounded-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={`/gallery/why-${i + 1}.jpg`}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-[#C9A24D] font-bold text-xl">{item.title}</h3>
                  <p className="text-gray-200 mt-2">{item.desc}</p>
                </div>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </section>

      {/* PRODUK */}
      <section className="py-20">
        <h2 className="text-center text-5xl font-bold text-white mb-16">
          {sections[2].title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
          {sections[2].items.map((item, i) => (
            <ScrollFadeIn key={i}>
              <div className="bg-black/40 border border-[#C9A24D]/30 rounded-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={`/gallery/product-${i + 1}.jpg`}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-[#C9A24D] font-bold text-xl">{item.title}</h3>
                  <p className="text-gray-200 mt-2">{item.desc}</p>
                </div>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <h2 className="text-5xl font-bold text-white">{sections[3].title}</h2>
        <p className="text-gray-200 mt-4 max-w-3xl mx-auto">{sections[3].description}</p>
      </section>
    </div>
  );
}
