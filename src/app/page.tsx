'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';

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

  // HERO PARALLAX
  const heroY = useTransform(scrollY, [0, 400], [0, -100]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0.6]);

  // SECTION TITLE PARALLAX
  const sectionTitleY = useTransform(scrollY, [200, 700], [40, 0]);

  return (
    <main className="relative w-full text-white overflow-hidden">

      {/* BACKGROUND FULL PAGE */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/background1.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl"
        >
          <motion.h1
            style={{ y: heroY, opacity: heroOpacity }}
            className="text-4xl md:text-6xl font-extrabold text-[#C9A24D] mb-6 drop-shadow-lg"
          >
            Interior Elegan & Premium
          </motion.h1>

          <motion.p
            style={{ y: heroY }}
            className="text-gray-200 text-lg md:text-xl mb-10"
          >
            Solusi desain interior modern dengan kualitas terbaik dan pengerjaan profesional.
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
      <section className="px-6 py-24 max-w-7xl mx-auto">
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="bg-black/40 p-4 rounded-lg backdrop-blur-sm hover:scale-[1.02] transition"
            >
              <div className="relative w-full h-48 mb-4 rounded-md overflow-hidden">
                <Image
                  src={`/${item.img}`}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <motion.h3
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
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
      <section className="px-6 py-24 max-w-7xl mx-auto">
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="bg-black/40 p-4 rounded-lg backdrop-blur-sm hover:scale-[1.02] transition"
            >
              <div className="relative w-full h-48 mb-4 rounded-md overflow-hidden">
                <Image
                  src={`/${item.img}`}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <motion.h3
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
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
