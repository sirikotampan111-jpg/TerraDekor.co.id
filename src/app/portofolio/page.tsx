'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import FloatingWhatsApp from '@/components/layout/FloatingWhatsApp';

interface PortfolioItem {
  image: string;
  title: string;
  category: string;
}

const categories = [
  { id: 'all', name: 'Semua Proyek' },
  { id: 'interior-rumah', name: 'Interior Rumah' },
  { id: 'komersial', name: 'Komersial' },
  { id: 'apartment', name: 'Apartment' },
  { id: 'restaurant', name: 'Restoran & Kafe' },
  { id: 'kantor', name: 'Kantor & Showroom' },
];

const fallbackData: PortfolioItem[] = [
  { image: '/portfolio-1.jpg', title: 'Interior Rumah Modern', category: 'interior-rumah' },
  { image: '/portfolio-2.jpg', title: 'Kantor Profesional', category: 'kantor' },
  { image: '/portfolio-3.jpg', title: 'Restoran Mewah', category: 'restaurant' },
  { image: '/portfolio-4.jpg', title: 'Apartment Elegan', category: 'apartment' },
  { image: '/portfolio-5.jpg', title: 'Showroom Produk', category: 'komersial' },
  { image: '/portfolio-6.jpg', title: 'Klinik Medis', category: 'interior-rumah' },
];

export default function PortofolioPage() {
  const [portfolios, setPortfolios] = useState<PortfolioItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetch('/portfolio-data.json');
        if (res.ok) {
          const data = await res.json();
          setPortfolios(data.portfolio || fallbackData);
        } else {
          setPortfolios(fallbackData);
        }
      } catch {
        setPortfolios(fallbackData);
      }
    };
    loadData();
  }, []);

  const filtered =
    selectedCategory === 'all'
      ? portfolios
      : portfolios.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <FloatingWhatsApp />

      {/* HEADER */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <Link href="/">
              <Button variant="ghost" className="text-[#C9A24D]">
                Beranda
              </Button>
            </Link>
            <span className="text-gray-500">/</span>
            <span className="text-[#C9A24D] font-bold text-xl">
              Galeri Proyek
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
            Portofolio <span className="text-[#C9A24D]">Kami</span>
          </h1>
          <p className="text-gray-300 font-semibold mt-4 max-w-2xl">
            Koleksi proyek interior yang telah kami selesaikan dengan kualitas terbaik
          </p>
        </div>
      </section>

      {/* FILTER */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-[#C9A24D] to-[#B89B5E] text-white shadow-lg'
                  : 'bg-white border-2 border-gray-200 hover:border-[#C9A24D]'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </section>

      {/* GRID */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((item, i) => (
            <div
              key={i}
              onClick={() => setSelectedImage(item.image)}
              className="cursor-pointer rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full aspect-[4/3] object-cover"
              />
            </div>
          ))}

          {filtered.length === 0 && (
            <div className="col-span-full text-center py-20 text-gray-500 font-semibold">
              Tidak ada portofolio di kategori ini
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#C9A24D] via-[#D4AF6A] to-[#B89B5E] text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Wujudkan Ruang Impian Anda
        </h2>
        <p className="text-white/90 font-semibold mb-8">
          Konsultasi gratis bersama tim profesional kami
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/konsultasi">
            <Button className="bg-white text-[#C9A24D] font-bold px-8 py-4">
              Konsultasi Gratis
            </Button>
          </Link>
          <Link href="/kontak">
            <Button
              variant="outline"
              className="border-2 border-white text-white px-8 py-4"
            >
              Hubungi Kami
            </Button>
          </Link>
        </div>
      </section>

      {/* MODAL */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
        >
          <img
            src={selectedImage}
            alt="Preview"
            className="max-w-5xl max-h-[90vh] object-contain rounded-xl"
          />
        </div>
      )}
    </div>
  );
}