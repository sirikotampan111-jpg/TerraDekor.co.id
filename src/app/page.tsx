'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const WA_NUMBER = '6281251511997';

const advantages = [
  { title: 'Terima Beres', desc: 'Pengerjaan rapi tanpa ribet.', img: 'terima-beres.jpg' },
  { title: 'Kualitas Premium', desc: 'Standar material terbaik.', img: 'kualitas-premium.jpg' },
  { title: 'Harga Terjangkau', desc: 'Transparan & masuk akal.', img: 'harga-terjangkau.jpg' },
  { title: 'Tim Profesional', desc: 'Tenaga ahli berpengalaman.', img: 'tim-profesional.jpg' },
  { title: 'Material Berkualitas', desc: 'Pilihan material unggulan.', img: 'bahan-premium.jpg' },
  { title: 'Tepat Waktu', desc: 'Komitmen deadline.', img: 'tepat-waktu.jpg' },
];

const products = [
  { title: 'Wall Panel', desc: 'Panel dinding premium.', img: 'wallpanel.jpg' },
  { title: 'Wallpaper', desc: 'Motif eksklusif.', img: 'walpaper.jpg' },
  { title: 'Vinyl', desc: 'Lantai kuat & elegan.', img: 'vinil.jpg' },
  { title: 'Decking Lantai', desc: 'Interior & eksterior.', img: 'wpc.jpg' },
  { title: 'Pintu Baja', desc: 'Aman & kokoh.', img: 'pintu-baja.jpg' },
  { title: 'Terima Jasa', desc: 'Custom interior.', img: 'terima-jasa.jpg' },
];

export default function HomePage() {
  const { scrollY } = useScroll();
  const heroRef = useRef<HTMLDivElement>(null);

  const heroTextY = useTransform(scrollY, [0, 400], [0, -60]);
  const heroSubY = useTransform(scrollY, [0, 400], [0, -30]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0.7]);
  const bgY = useTransform(scrollY, [0, 800], [0, -200]);
  const sectionTitleY = useTransform(scrollY, [200, 700], [40, 0]);

  const heroText = 'Interior Elegant & Premium';
  const heroSub = 'Solusi desain interior modern dengan kualitas terbaik dan pengerjaan profesional.';

  const waLink = (text: string) =>
    `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;

  return (
    <main className="relative w-full text-white overflow-hidden">

      {/* BACKGROUND */}
      <motion.div className="fixed inset-0 -z-10" style={{ y: bgY }}>
        <Image src="/background1.jpg" alt="Background" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/70" />
      </motion.div>

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <motion.div
          ref={heroRef}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl"
          variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
        >
          <motion.h1
            style={{ y: heroTextY, opacity: heroOpacity }}
            className="text-4xl md:text-6xl font-extrabold text-[#C9A24D] mb-6"
          >
            {heroText.split('').map((char, i) => (
              <motion.span
                key={i}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            style={{ y: heroSubY, opacity: heroOpacity }}
            className="text-gray-200 text-lg md:text-xl mb-10"
          >
            {heroSub}
          </motion.p>

          <Link
            href={waLink('Halo, saya ingin konsultasi interior')}
            className="inline-block px-10 py-4 rounded-full bg-[#C9A24D] text-black font-semibold text-lg hover:scale-105 transition"
          >
            Konsultasi Sekarang
          </Link>
        </motion.div>
      </section>

      {/* KENAPA MEMILIH KAMI */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <motion.h2
          style={{ y: sectionTitleY }}
          className="text-center text-3xl md:text-4xl font-bold text-[#C9A24D] mb-16"
        >
          Kenapa Memilih Kami
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-black/40 p-4 rounded-lg backdrop-blur"
            >
              <div className="relative w-full h-48 mb-4 overflow-hidden rounded-md">
                <Image src={`/${item.img}`} alt={item.title} fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold text-[#C9A24D] mb-2">{item.title}</h3>
              <p className="text-gray-200">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PRODUK & LAYANAN */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <motion.h2
          style={{ y: sectionTitleY }}
          className="text-center text-3xl md:text-4xl font-bold text-[#C9A24D] mb-16"
        >
          Produk & Layanan Premium
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-black/40 p-4 rounded-lg backdrop-blur"
            >
              {/* FOTO = CTA WA */}
              <Link
                href={waLink(`Halo, saya tertarik dengan produk ${item.title}`)}
                className="group block"
              >
                <div className="relative w-full h-48 mb-4 overflow-hidden rounded-md cursor-pointer">
                  <Image
                    src={`/${item.img}`}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                    <span className="text-[#C9A24D] font-semibold text-lg">
                      Chat WhatsApp
                    </span>
                  </div>
                </div>
              </Link>

              <h3 className="text-xl font-bold text-[#C9A24D] mb-2">{item.title}</h3>
              <p className="text-gray-200">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA BAWAH */}
        <div className="text-center mt-20">
          <Link
            href={waLink('Halo, saya ingin order layanan interior')}
            className="inline-block px-10 py-4 rounded-full bg-[#C9A24D] text-black font-semibold text-lg hover:scale-105 transition"
          >
            Hubungi Kami Sekarang
          </Link>
        </div>
      </section>

    </main>
  );
                                                                                  }
