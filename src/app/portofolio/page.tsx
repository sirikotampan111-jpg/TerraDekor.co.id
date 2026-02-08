'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Home as HomeIcon, Layout, Filter, ZoomIn, ZoomOut, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FloatingWhatsApp from '@/components/layout/FloatingWhatsApp';

interface PortfolioItem {
  image: string;
  title: string;
  category: string;
}

const categories = [
  { id: 'all', name: 'Semua Proyek', icon: Layout },
  { id: 'interior-rumah', name: 'Interior Rumah', icon: HomeIcon },
  { id: 'komersial', name: 'Komersial', icon: Layout },
  { id: 'apartment', name: 'Apartment', icon: Layout },
  { id: 'restaurant', name: 'Restoran & Kafe', icon: Layout },
  { id: 'kantor', name: 'Kantor & Showroom', icon: Layout },
];

export default function PortofolioPage() {
  const [portfolios, setPortfolios] = useState<PortfolioItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const loadPortfolioData = async () => {
    try {
      const response = await fetch('/portfolio-data.json');
      if (response.ok) {
        const data = await response.json();
        setPortfolios(data.portfolio || []);
      } else {
        // Fallback data
        setPortfolios([
          { image: '/portfolio-1.jpg', title: 'Interior Rumah Modern', category: 'interior-rumah' },
          { image: '/portfolio-2.jpg', title: 'Kantor Profesional', category: 'kantor' },
          { image: '/portfolio-3.jpg', title: 'Restoran Mewah', category: 'restaurant' },
          { image: '/portfolio-4.jpg', title: 'Apartment Elegan', category: 'apartment' },
          { image: '/portfolio-5.jpg', title: 'Showroom Produk', category: 'komersial' },
          { image: '/portfolio-6.jpg', title: 'Klinik Medis', category: 'interior-rumah' },
        ]);
      }
    } catch (err) {
      console.error('Load portfolio error:', err);
      setPortfolios([
        { image: '/portfolio-1.jpg', title: 'Interior Rumah Modern', category: 'interior-rumah' },
        { image: '/portfolio-2.jpg', title: 'Kantor Profesional', category: 'kantor' },
        { image: '/portfolio-3.jpg', title: 'Restoran Mena', category: 'restaurant' },
        { image: '/portfolio-4.jpg', title: 'Apartment Elegan', category: 'apartment' },
        { image: '/portfolio-5.jpg', title: 'Showroom Produk', category: 'komersial' },
        { image: '/portfolio-6.jpg', title: 'Klinik Medis', category: 'interior-rumah' },
      ]);
    }
  };

  useEffect(() => {
    loadPortfolioData();
  }, []);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
    setIsZoomed(true);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
    setIsZoomed(false);
  };

  const filteredPortfolios = selectedCategory === 'all' 
    ? portfolios 
    : portfolios.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <FloatingWhatsApp />

      {/* Header Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-8">
            <Link href="/">
              <Button variant="ghost" className="text-[#C9A24D] hover:bg-[#C9A24D]/10">
                <HomeIcon className="w-5 h-5 mr-2" />
                Beranda
              </Button>
            </Link>
            <span className="text-gray-500">/</span>
            <span className="text-[#C9A24D] font-bold text-xl">Galeri Proyek</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white">
            Portofolio <span className="text-[#C9A24D]">Kami</span>
          </h1>
          <p className="text-xl text-gray-300 font-semibold max-w-3xl mx-auto">
            Koleksi proyek interior yang telah kami selesaikan dengan sempurna
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-[#C9A24D] to-[#B89B5E] text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-200 hover:border-[#C9A24D] hover:scale-105'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900">
              <span className="text-[#C9A24D]">{selectedCategory === 'all' ? 'Semua' : categories.find(c => c.id === selectedCategory)?.name}</span> Portofolio
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#C9A24D] to-[#B89B5E] mx-auto rounded-full"></div>
            <p className="text-lg text-gray-700 font-semibold max-w-2xl mx-auto">
              {filteredPortfolios.length} proyek ditampilkan
            </p>
          </div>

          <div className="grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredPortfolios.length > 0 ? (
              filteredPortfolios.map((portfolio, index) => (
                <div
                  key={index}
                  onClick={() => handleImageClick(portfolio.image)}
                  className="group relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg hover:shadow-2xl cursor-pointer transition-all duration-300 hover:scale-[1.02]"
                >
                  <img
                    src={portfolio.image}
                    alt={`Proyek ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const placeholder = e.currentTarget.parentElement?.querySelector('.placeholder-bg');
                      if (placeholder) {
                        (placeholder as HTMLElement).style.display = 'flex';
                      }
                    }}
                  />
                  {/* Placeholder background */}
                  <div className="placeholder-bg absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center hidden">
                    <Layout className="w-16 h-16 text-gray-400" />
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#C9A24D]/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-20">
                <div className="bg-white rounded-xl p-12 border-2 border-dashed border-gray-300">
                  <Layout className="w-20 h-20 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500 font-semibold">Tidak ada portofolio di kategori ini</p>
                  <p className="text-sm text-gray-400 mt-2">
                    Silakan pilih kategori lain atau tambah portofolio melalui dashboard admin
                  </p>
                </div>
              </div>
            )}
          </div>

          {filteredPortfolios.length === 0 && (
            <div className="text-center py-20">
              <Layout className="w-20 h-20 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 font-semibold text-xl">Tidak ada portofolio di kategori ini</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#C9A24D] via-[#D4AF6A] to-[#B89B5E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
            Wujudkan Ruang Impian Anda Bersama Kami
          </h2>
          <p className="text-xl text-white/90 font-semibold max-w-2xl mx-auto">
            Tim profesional kami siap membantu membuat ruangan yang luar biasa menjadi luar biasa
          </p>
          <div className="flex flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/konsultasi">
              <Button
                size="lg"
                className="bg-white text-[#C9A24D] hover:bg-gray-100 font-bold px-8 py-4 text-lg rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                Konsultasi Gratis
              </Button>
            </Link>
            <Link href="/kontak">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#C9A24D] font-bold px-8 py-4 text-lg rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Hubungi Kami
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          onClick={handleCloseModal}
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl max-h-[90vh] w-full bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 z-10 bg-black/10 hover:bg-black/20 rounded-full p-2 text-white hover:bg-black/30 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Image */}
            <div className="aspect-[4/3] bg-black">
              <img
                src={selectedImage}
                alt="Detail foto"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
      }
        
