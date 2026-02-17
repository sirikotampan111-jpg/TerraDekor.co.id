'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const WA_NUMBER = '6281251511997';

/* ================== DATA ================== */

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
  /* ================== HERO PARALLAX ================== */
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const heroTitleY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const heroSubY   = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const heroFade   = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const heroBgY    = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const waLink = (text: string) =>
    `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;

  /* ================== RENDER ================== */
  return (
    <main className="relative w-full text-white overflow-hidden">

      {/* ================= HERO ================= */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
      >
        {/* BACKGROUND */}
        <motion.div
          style={{ y: heroBgY }}
          className="absolute inset-0 -z-10"
        >
          <Image
            src="/background1.jpg"
            alt="Interior Background"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </motion.div>

        {/* CONTENT */}
        <div className="text-center max-w-4xl z-10">

          <motion.h1
            style={{ y: heroTitleY, opacity: heroFade }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-extrabold text-[#C9A24D] mb-6 drop-shadow-xl"
          >
            {'Interior Elegant & Premium'.split('').map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.035 }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            style={{ y: heroSubY, opacity: heroFade }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-gray-200 text-lg md:text-xl mb-10"
          >
            Solusi desain interior modern dengan kualitas terbaik dan pengerjaan profesional.
          </motion.p>

          <Link
            href={waLink('Halo, saya ingin konsultasi interior')}
            className="inline-block px-10 py-4 rounded-full
              bg-[#C9A24D] text-black font-semibold text-lg
              shadow-[0_0_30px_rgba(201,162,77,0.4)]
              transition-transform duration-300
              hover:scale-105 hover:bg-[#e3bb5f]"
          >
            Konsultasi Sekarang
          </Link>
        </div>
      </section>

      {/* ============ KENAPA MEMILIH KAMI ============ */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-[#C9A24D] mb-16">
          Kenapa Memilih Kami
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
              className="bg-black/40 p-4 rounded-lg backdrop-blur"
            >
              <div className="relative w-full h-48 mb-4 rounded-md overflow-hidden">
                <Image src={`/${item.img}`} alt={item.title} fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold text-[#C9A24D] mb-2">{item.title}</h3>
              <p className="text-gray-200">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ============ PRODUK & LAYANAN ============ */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-[#C9A24D] mb-16">
          Produk & Layanan Premium
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
              className="bg-black/40 p-4 rounded-lg backdrop-blur"
            >
              {/* FOTO = CTA WA */}
              <Link
                href={waLink(`Halo, saya tertarik dengan produk ${item.title}`)}
                className="group block"
              >
                <div className="relative w-full h-48 mb-4 rounded-md overflow-hidden cursor-pointer">
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
            className="inline-block px-10 py-4 rounded-full
              bg-[#C9A24D] text-black font-semibold text-lg
              hover:scale-105 transition"
          >
            Hubungi Kami Sekarang
          </Link>
        </div>
      </section>

    </main>
  );
}
