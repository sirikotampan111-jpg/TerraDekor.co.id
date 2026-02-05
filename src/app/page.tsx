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

  // HERO
  const heroY = useTransform(scrollY, [0, 400], [0, -120]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0.7]);

  // Section title
  const sectionTitleY = useTransform(scrollY, [200, 700], [40, 0]);

  // Paralax per card (gambar lebih lambat dari teks)
  const cardY = useTransform(scrollY, [500, 1600], [0, -30]);
  const cardImageY = useTransform(scrollY, [500, 1600], [0, -60]);
  const cardTextY = useTransform(scrollY, [500, 1600], [0, -10]);

  return (
    <main className="relative w-full text-white overflow-x-hidden">

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
          style={{ y: heroY, opacity: heroOpacity }}
          className="text-center max-w-4xl"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#C9A24D] mb-6 drop-shadow-lg">
            Interior Elegan & Premium
          </h1>
          <p className="text-gray-200 text-lg md:text-xl mb-10">
            Solusi desain interior modern dengan kualitas terbaik dan pengerjaan profesional.
          </p>
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
        <motion.h2
          style={{ y: sectionTitleY }}
          className="text-center text-3xl md:text-4xl font-bold text-[#C9A24D] mb-16"
        >
          Kenapa Memilih Kami
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05, rotateX: 3, rotateY: 3 }}
              transition={{ type: 'spring', stiffness: 120 }}
              className="bg-black/40 p-4 rounded-xl backdrop-blur-sm shadow-lg relative overflow-hidden cursor-pointer"
            >
              <motion.div
                style={{ y: cardImageY }}
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
                style={{ y: cardTextY }}
                className="text-xl font-bold text-[#C9A24D] mb-2"
              >
                {item.title}
              </motion.h3>
              <motion.p
                style={{ y: cardTextY }}
                className="text-gray-200"
              >
                {item.desc}
              </motion.p>
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
          {products.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05, rotateX: 3, rotateY: 3 }}
              transition={{ type: 'spring', stiffness: 120 }}
              className="bg-black/40 p-4 rounded-xl backdrop-blur-sm shadow-lg relative overflow-hidden cursor-pointer"
            >
              <motion.div
                style={{ y: cardImageY }}
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
                style={{ y: cardTextY }}
                className="text-xl font-bold text-[#C9A24D] mb-2"
              >
                {item.title}
              </motion.h3>
              <motion.p
                style={{ y: cardTextY }}
                className="text-gray-200"
              >
                {item.desc}
              </motion.p>
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
