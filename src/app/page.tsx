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

  // 🔥 PARALLAX TAMBAHAN (GLOBAL)
  const bgY = useTransform(scrollY, [0, 1200], [0, -300]);

  const heroTextY = useTransform(scrollY, [0, 600], [0, -180]);
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0.6]);

  const sectionTitleY = useTransform(scrollY, [300, 900], [60, 0]);

  return (
    <main className="relative w-full text-white overflow-hidden">

      {/* BACKGROUND (DITAMBAH GERAK, TIDAK DIHAPUS) */}
      <motion.div
        style={{ y: bgY }}
        className="fixed inset-0 -z-10"
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

      {/* HERO (ASLI + PARALLAX) */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <motion.div
          style={{ y: heroTextY, opacity: heroOpacity }}
          className="text-center max-w-4xl"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#C9A24D] mb-6">
            Interior Elegan & Premium
          </h1>

          <p className="text-gray-200 text-lg md:text-xl mb-10">
            Solusi desain interior modern dengan kualitas terbaik dan pengerjaan profesional.
          </p>

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

      {/* KENAPA MEMILIH KAMI (TETAP ADA + PARALLAX) */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            style={{ y: sectionTitleY }}
            className="text-3xl md:text-4xl font-bold text-[#C9A24D]"
          >
            Kenapa Memilih Kami
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((item, idx) => {
            const imgY = useTransform(scrollY, [600, 1600], [120, -120]);
            const textY = useTransform(scrollY, [600, 1600], [60, 0]);

            return (
              <motion.div
                key={idx}
                className="bg-black/40 p-4 rounded-lg backdrop-blur-sm"
              >
                <motion.div
                  style={{ y: imgY }}
                  className="relative w-full h-48 mb-4 rounded-md overflow-hidden"
                >
                  <Image
                    src={`/${item.img}`}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>

                <motion.h3
                  style={{ y: textY }}
                  className="text-xl font-bold text-[#C9A24D] mb-2"
                >
                  {item.title}
                </motion.h3>

                <motion.p
                  style={{ y: textY }}
                  className="text-gray-200"
                >
                  {item.desc}
                </motion.p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* PRODUK & LAYANAN (TETAP ADA + PARALLAX) */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            style={{ y: sectionTitleY }}
            className="text-3xl md:text-4xl font-bold text-[#C9A24D]"
          >
            Produk & Layanan Premium
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((item, idx) => {
            const imgY = useTransform(scrollY, [1200, 2200], [100, -100]);

            return (
              <motion.div
                key={idx}
                className="bg-black/40 p-4 rounded-lg backdrop-blur-sm"
              >
                <motion.div
                  style={{ y: imgY }}
                  className="relative w-full h-48 mb-4 rounded-md overflow-hidden"
                >
                  <Image
                    src={`/${item.img}`}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>

                <h3 className="text-xl font-bold text-[#C9A24D] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-200">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA BAWAH (TIDAK DIHAPUS) */}
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
