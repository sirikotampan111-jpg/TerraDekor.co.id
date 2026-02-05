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
  const heroRef = useRef<HTMLDivElement>(null);

  // Hero paralax
  const heroTextY = useTransform(scrollY, [0, 400], [0, -60]);
  const heroSubY = useTransform(scrollY, [0, 400], [0, -30]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0.7]);
  const bgY = useTransform(scrollY, [0, 800], [0, -200]);

  const sectionTitleY = useTransform(scrollY, [200, 700], [40, 0]);

  const heroText = 'Interior Elegan & Premium';
  const heroSub = 'Solusi desain interior modern dengan kualitas terbaik dan pengerjaan profesional.';

  return (
    <main className="relative w-full text-white overflow-hidden">

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
      <section className="min-h-screen flex items-center justify-center px-6 relative">
        <motion.div
          ref={heroRef}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl relative z-10"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.03 } }
          }}
        >
          <motion.h1
            style={{ y: heroTextY, opacity: heroOpacity }}
            className="text-4xl md:text-6xl font-extrabold text-[#C9A24D] mb-6 drop-shadow-lg"
          >
            {Array.from(heroText).map((char, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            style={{ y: heroSubY, opacity: heroOpacity }}
            className="text-gray-200 text-lg md:text-xl mb-10"
          >
            {Array.from(heroSub).map((char, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { y: 10, opacity: 0 },
                  visible: { y: 0, opacity: 1, transition: { duration: 0.4 } }
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.p>

          {/* CTA HERO */}
          <Link
            href="https://wa.me/62XXXXXXXXXX"
            className="inline-block px-10 py-4 rounded-full
            bg-[#C9A24D] text-black font-semibold text-lg
            hover:bg-[#e3bb5f] transition-all duration-300 shadow-lg"
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
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
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
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
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
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.4 }}
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
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
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
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
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
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.4 }}
                className="text-xl font-bold text-[#C9A24D] mb-2"
              >
                {item.title}
              </motion.h3>

              <p className="text-gray-200">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA BAWAH */}
        <div className="text-center mt-20">
          <Link
            href="https://wa.me/62XXXXXXXXXX"
            className="inline-block px-10 py-4 rounded-full
            bg-[#C9A24D] text-black font-semibold text-lg
            hover:bg-[#e3bb5f] transition-all duration-300 shadow-lg"
          >
            Hubungi Kami Sekarang
          </Link>
        </div>
      </section>

    </main>
  );
                  }
