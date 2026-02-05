'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const advantages = [
  { title: 'Terima Beres', desc: 'Pengerjaan rapi tanpa ribet.', img: 'terima-beres.jpg' },
  { title: 'Kualitas Premium', desc: 'Standar material terbaik.', img: 'kualitas-premium.jpg' },
  { title: 'Harga Terjangkau', desc: 'Transparan & masuk akal.', img: 'harga-terjangkau.jpg' },
  { title: 'Tim Profesional', desc: 'Tenaga ahli berpengalaman.', img: 'tim-profesional.jpg' },
  { title: 'Material Berkualitas', desc: 'Pilihan material unggulan.', img: 'bahan-premium.jpg' },
  { title: 'Tepat Waktu', desc: 'Komitmen deadline.', img: 'tepat waktu.jpg' },
];

const products = [
  { title: 'Wall Panel', desc: 'Panel dinding premium.', img: 'wallpanel.jpg' },
  { title: 'Wallpaper', desc: 'Motif eksklusif.', img: 'walpaper.jpg' },
  { title: 'Vinyl', desc: 'Lantai kuat & elegan.', img: 'vinil.jpg' },
  { title: 'WPC', desc: 'Interior & eksterior.', img: 'wpc.jpg' },
  { title: 'Pintu Baja', desc: 'Aman & kokoh.', img: 'pintu-baja.jpg' },
  { title: 'Terima Jasa', desc: 'Custom interior.', img: 'terima-jasa.jpg' },
];

export default function HomePage() {
  const { scrollY } = useScroll();

  // Hero parallax
  const heroTextY = useTransform(scrollY, [0, 400], [0, -60]);
  const heroSubY = useTransform(scrollY, [0, 400], [0, -30]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0.7]);
  const bgY = useTransform(scrollY, [0, 800], [0, -200]);

  const sectionTitleY = useTransform(scrollY, [200, 700], [40, 0]);

  return (
    <main className="relative w-full text-white overflow-x-hidden">

      {/* BACKGROUND FULL PAGE */}
      <motion.div
        className="fixed inset-0 -z-10"
        style={{ y: bgY }}
      >
        <Image
          src="/background1.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />
      </motion.div>

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center max-w-4xl"
        >
          <motion.h1
            style={{ y: heroTextY, opacity: heroOpacity }}
            className="text-4xl md:text-6xl font-extrabold text-[#C9A24D] mb-6 drop-shadow-lg"
          >
            {Array.from('Interior Elegan & Premium').map((char, i) => (
              <motion.span
                key={i}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.03, duration: 0.5 }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            style={{ y: heroSubY, opacity: heroOpacity }}
            className="text-gray-200 text-lg md:text-xl mb-10"
          >
            {Array.from('Solusi desain interior modern dengan kualitas terbaik dan pengerjaan profesional.').map((char, i) => (
              <motion.span
                key={i}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.01, duration: 0.4 }}
              >
                {char}
              </motion.span>
            ))}
          </motion.p>

          <Link
            href="https://wa.me/62XXXXXXXXXX"
            className="inline-block px-10 py-4 rounded-full bg-[#C9A24D] text-black font-semibold text-lg hover:bg-[#e3bb5f] transition-all duration-300 shadow-lg"
          >
            Konsultasi Sekarang
          </Link>
        </motion.div>
      </section>

      {/* KENAPA MEMILIH KAMI */}
      <section className="px-6 py-24 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            style={{ y: sectionTitleY }}
            className="text-3xl md:text-4xl font-bold text-[#C9A24D] mb-4"
          >
            Kenapa Memilih Kami
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: false }}
              className="bg-black/40 p-4 rounded-lg backdrop-blur-sm hover:scale-[1.03] transition"
            >
              <motion.div
                className="relative w-full h-48 mb-4 rounded-md overflow-hidden"
                style={{ y: useTransform(scrollY, [0, 500], [0, -20]) }}
              >
                <Image
                  src={`/${item.img}`}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </motion.div>

              <motion.h3
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: false }}
                className="text-xl font-bold text-[#C9A24D] mb-2"
              >
                {item.title}
              </motion.h3>

              <p className="text-gray-200">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PRODUK & LAYANAN */}
      <section className="px-6 py-24 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            style={{ y: sectionTitleY }}
            className="text-3xl md:text-4xl font-bold text-[#C9A24D] mb-4"
          >
            Produk & Layanan Premium
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: false }}
              className="bg-black/40 p-4 rounded-lg backdrop-blur-sm hover:scale-[1.03] transition"
            >
              <motion.div
                className="relative w-full h-48 mb-4 rounded-md overflow-hidden"
                style={{ y: useTransform(scrollY, [0, 500], [0, -20]) }}
              >
                <Image
                  src={`/${item.img}`}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </motion.div>

              <motion.h3
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: false }}
                className="text-xl font-bold text-[#C9A24D] mb-2"
              >
                {item.title}
              </motion.h3>

              <p className="text-gray-200">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* INFO TERRADEKOR.ID → selalu di bawah, muncul setelah scroll */}
      <motion.footer
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="bg-white/90 text-gray-900 px-6 py-8 max-w-7xl mx-auto mt-20 rounded-md shadow-lg"
      >
        <h1 className="font-bold text-xl">Terradekor.id</h1>
        <p className="text-sm mt-1">
          PT. Opulent Interior Indonesia - Solusi interior dan konstruksi premium
          dengan kualitas terbaik dan harga terjangkau.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 text-sm">
          <div>
            <h2 className="font-semibold">Navigasi Cepat</h2>
            <ul className="space-y-1">
              <li>Beranda</li>
              <li>Produk</li>
              <li>Layanan</li>
              <li>Portofolio</li>
              <li>Tentang Kami</li>
              <li>Konsultasi Gratis</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold">Produk Populer</h2>
            <ul className="space-y-1">
              <li>Wall Panel Dinding</li>
              <li>WPC Decking</li>
              <li>Vinyl & SPC</li>
              <li>Wallpaper</li>
              <li>Pintu WPC & Baja</li>
              <li>Furniture Custom</li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h2 className="font-semibold">Kontak & Alamat</h2>
            <p>Pergudangan Pantai Indah Dadap Blok BJ 23, Kosambi, Tangerang, Banten 15213</p>
            <p>ptopulentinteriors@gmail.com</p>
            <p>0812-5151-1997</p>
          </div>
        </div>
      </motion.footer>

    </main>
  );
}
