'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const advantages = [
  { title: 'Terima Beres', desc: 'Dari desain hingga pemasangan, kami tangani profesional.' },
  { title: 'Kualitas Premium', desc: 'Material berkualitas tinggi standar premium.' },
  { title: 'Harga Terjangkau', desc: 'Solusi terbaik dengan harga transparan.' },
  { title: 'Tim Profesional', desc: 'Dikerjakan oleh tenaga ahli berpengalaman.' },
  { title: 'Material Berkualitas', desc: 'Pemilihan material terbaik untuk jangka panjang.' },
  { title: 'Tepat Waktu', desc: 'Komitmen penyelesaian sesuai jadwal.' },
];

const products = [
  { title: 'Wall Panel', desc: 'Panel dinding premium untuk tampilan mewah.' },
  { title: 'Wallpaper', desc: 'Beragam motif eksklusif dan modern.' },
  { title: 'Vinyl', desc: 'Lantai kuat, awet, dan estetik.' },
  { title: 'WPC', desc: 'Material tahan cuaca untuk interior & eksterior.' },
  { title: 'Pintu Baja', desc: 'Pintu kokoh dengan desain modern.' },
  { title: 'Jasa Interior', desc: 'Solusi interior sesuai kebutuhan Anda.' },
];

export default function HomePage() {
  return (
    <main className="relative w-full text-white">

      {/* BACKGROUND FULL PAGE */}
      <div className="fixed inset-0 -z-10">
        <Image
          src="/background/background2.jpg"
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
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#C9A24D] mb-6">
            Interior Elegan & Premium
          </h1>
          <p className="text-gray-200 text-lg md:text-xl mb-10">
            Solusi desain interior modern dengan kualitas terbaik dan sentuhan profesional.
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

      {/* SECTION 1 */}
      <section className="px-6 py-24 max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#C9A24D] mb-4">
            Kenapa Memilih Kami
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-black/40 border-2 border-[#C9A24D]/20 p-4 rounded-lg text-center"
            >
              <div className="relative w-full h-48 mb-4 rounded-md overflow-hidden">
                <Image
                  src={[
                    '/gallery/terima-beres.jpg',
                    '/gallery/kualitas-premium.jpg',
                    '/gallery/harga-terjangkau.jpg',
                    '/gallery/tim-profesional.jpg',
                    '/gallery/material-berkualitas.jpg',
                    '/gallery/tepat-waktu.jpg',
                  ][idx]}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="text-xl font-bold text-[#C9A24D] mb-2">
                {item.title}
              </h3>
              <p className="text-gray-200">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="px-6 py-24 max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#C9A24D] mb-4">
            Produk & Layanan Premium
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-black/40 border-2 border-[#C9A24D]/20 p-4 rounded-lg text-center"
            >
              <div className="relative w-full h-48 mb-4 rounded-md overflow-hidden">
                <Image
                  src={[
                    '/gallery/wallpanel.jpg',
                    '/gallery/wallpaper.jpg',
                    '/gallery/vinil.jpg',
                    '/gallery/wpc.jpg',
                    '/gallery/pintu-baja.jpg',
                    '/gallery/terima-jasa.jpg',
                  ][idx]}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="text-xl font-bold text-[#C9A24D] mb-2">
                {item.title}
              </h3>
              <p className="text-gray-200">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

    </main>
  );
}
