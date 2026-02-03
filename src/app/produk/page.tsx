'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, Filter, MessageCircle, ArrowLeft, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import FloatingWhatsApp from '@/components/layout/FloatingWhatsApp';

const categories = [
  { id: 'all', name: 'Semua Produk' },
  { id: 'wall-finishing', name: 'Wall & Finishing Dinding' },
  { id: 'flooring-exterior', name: 'Flooring & Eksterior' },
  { id: 'furniture-sanitary', name: 'Furniture & Sanitary' },
];

const products = [
  // Wall & Finishing Dinding
  { id: 1, name: 'Wall Panel Dinding', category: 'wall-finishing', code: 'WP-DINDING-01', price: 'Hubungi Kami',
    image: '/products/pd1.jpg' },
  { id: 2, name: 'WPC Wall Panel 30 cm', category: 'wall-finishing', code: 'WPC-WALL-30', price: 'Hubungi Kami',
    image: '/products/pd2.jpg' },
  { id: 3, name: 'Wallpaper', category: 'wall-finishing', code: 'WALLPAPER-01', price: 'Hubungi Kami',
    image: '/products/pd3.jpg' },
  { id: 4, name: 'Wallpaper 3D Dinding', category: 'wall-finishing', code: 'WALLPAPER-3D', price: 'Hubungi Kami',
    image: '/products/pd4.jpg' },
  { id: 5, name: 'Wallboard Dinding', category: 'wall-finishing', code: 'WALLBOARD-DIND', price: 'Hubungi Kami',
    image: '/products/pd5.jpg' },
  { id: 6, name: 'Wall Foam', category: 'wall-finishing', code: 'WALLFOAM-01', price: 'Hubungi Kami',
    image: '/products/pd6.jpg' },
  { id: 7, name: 'Stiker UV Motif Marmer', category: 'wall-finishing', code: 'STIKER-UV-MAR', price: 'Hubungi Kami',
    image: '/products/pd7.jpg' },
  { id: 8, name: 'Stiker Foam Vinyl', category: 'wall-finishing', code: 'STIKER-FOAM-VIN', price: 'Hubungi Kami',
    image: '/products/pd8.jpg' },
  { id: 9, name: 'UV PVC Marmer', category: 'wall-finishing', code: 'UV-PVC-MARMER', price: 'Hubungi Kami',
    image: '/products/pd9.jpg' },
  { id: 10, name: 'List Wall Border PVC', category: 'wall-finishing', code: 'LIST-BORDER-PVC', price: 'Hubungi Kami',
    image: '/products/pd10.jpg' },
  { id: 11, name: 'List Moulding', category: 'wall-finishing', code: 'LIST-MOULDING', price: 'Hubungi Kami',
    image: '/products/pd11.jpg' },

  // Flooring & Eksterior
  { id: 12, name: 'WPC Decking', category: 'flooring-exterior', code: 'WPC-DECKING', price: 'Hubungi Kami',
    image: '/products/pd12.jpg' },
  { id: 13, name: 'Lantai Vinyl', category: 'flooring-exterior', code: 'LANTAI-VINYL', price: 'Hubungi Kami',
    image: '/products/pd13.jpg' },
  { id: 14, name: 'Lantai SPC', category: 'flooring-exterior', code: 'LANTAI-SPC', price: 'Hubungi Kami',
    image: '/products/pd14.jpg' },

  // Furniture & Sanitary
  { id: 15, name: 'Pintu WPC', category: 'furniture-sanitary', code: 'PINTU-WPC', price: 'Hubungi Kami',
    image: '/products/pd15.jpg' },
  { id: 16, name: 'Pintu Baja', category: 'furniture-sanitary', code: 'PINTU-BAJA', price: 'Hubungi Kami',
    image: '/products/pd-16.jpg' },
  { id: 17, name: 'Wastafel', category: 'furniture-sanitary', code: 'WASTAFEL-01', price: 'Hubungi Kami',
    image: '/products/pd17.jpg' },
  { id: 18, name: 'Meja Office', category: 'furniture-sanitary', code: 'MEJA-OFFICE', price: 'Hubungi Kami',
    image: '/products/pd18.jpg' },
];

export default function ProdukPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.code.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-20">
      <FloatingWhatsApp />

      {/* Header Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-8">
            <Link href="/">
              <Button variant="ghost" className="text-[#C9A24D] hover:bg-[#C9A24D]/10">
                <Home className="w-5 h-5 mr-2" />
                Beranda
              </Button>
            </Link>
            <span className="text-gray-500">/</span>
            <span className="text-[#C9A24D] font-bold">Kategori Produk</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">
            Katalog <span className="text-[#C9A24D]">Produk Premium</span>
          </h1>
          <p className="text-xl text-gray-300 font-bold max-w-3xl">
            Temukan berbagai produk interior berkualitas untuk mempercantik ruangan Anda
          </p>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="bg-white border-b border-gray-200 py-8 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Cari produk..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 border-2 border-gray-200 focus:border-[#C9A24D] font-semibold"
              />
            </div>

            {/* Category Filter Buttons - Desktop */}
            <div className="hidden lg:flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  variant={selectedCategory === category.id ? 'default' : 'outline'}
                  className={`font-semibold ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-[#C9A24D] to-[#B89B5E] text-white'
                      : 'border-2 border-[#C9A24D] text-[#C9A24D] hover:bg-[#C9A24D]/10'
                  }`}
                >
                  <Filter className="w-4 h-4 mr-2" />
                  {category.name}
                </Button>
              ))}
            </div>

            {/* Mobile Category Selector */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="lg:hidden w-full px-4 py-2 border-2 border-[#C9A24D] rounded-lg font-semibold text-[#C9A24D] bg-white"
            >
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Mobile Category Pills */}
      <div className="lg:hidden bg-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-hide">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                size="sm"
                variant={selectedCategory === category.id ? 'default' : 'outline'}
                className={`whitespace-nowrap font-semibold flex-shrink-0 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-[#C9A24D] to-[#B89B5E] text-white'
                    : 'border-2 border-[#C9A24D] text-[#C9A24D] hover:bg-[#C9A24D]/10'
                }`}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <section className="py-16 bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-lg text-gray-700 font-bold">
              Menampilkan <span className="text-[#C9A24D]">{filteredProducts.length}</span> produk
            </p>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-gray-200 hover:border-[#C9A24D] overflow-hidden"
                >
                  {/* Product Image */}
                  <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center relative overflow-hidden group">
                    <div className="text-6xl">📦</div>
                    <div className="absolute inset-0 bg-gradient-to-br from-[#C9A24D]/10 to-[#B89B5E]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                    <div className="mb-3">
                      <p className="text-sm text-gray-600 font-semibold">
                        <span className="text-[#C9A24D]">Kode:</span> {product.code}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-lg font-bold text-[#C9A24D]">{product.price}</p>
                      <a
                        href={`https://wa.me/6281251511997?text=Halo Terradekor, saya ingin bertanya tentang produk: ${encodeURIComponent(product.name)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#C9A24D] to-[#B89B5E] text-white font-bold px-4 py-2 rounded-lg hover:from-[#D4AF6A] hover:to-[#C9A24D] transition-all duration-300 transform hover:scale-105"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Tanya Harga</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-8xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Tidak ada produk ditemukan</h3>
              <p className="text-gray-600 font-semibold">Coba ubah kata kunci pencarian atau filter kategori</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
            Tidak Menemukan yang Anda Cari?
          </h2>
          <p className="text-xl text-gray-300 font-bold mb-8 max-w-2xl mx-auto">
            Kami menyediakan produk custom sesuai kebutuhan dan keinginan Anda
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/konsultasi">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#C9A24D] to-[#B89B5E] hover:from-[#D4AF6A] hover:to-[#C9A24D] text-white font-bold px-8 py-4 text-lg rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Konsultasi Gratis
              </Button>
            </Link>
            <a
              href="https://wa.me/6281251511997"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-bold px-8 py-4 text-lg rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp Sekarang</span>
            </a>
          </div>
        </div>
      </section>

      {/* Custom Service Note */}
      <section className="py-16 bg-gradient-to-br from-[#C9A24D]/10 to-[#B89B5E]/10 border-t border-[#C9A24D]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-[#C9A24D]">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Layanan Custom</h3>
              <p className="text-lg text-gray-700 font-semibold mb-6">
                Untuk kebutuhan interior yang tidak tercantum di atas, tersedia layanan custom sesuai keinginan Anda.
              </p>
              <p className="text-gray-600 font-semibold mb-6">
                Silakan hubungi kami untuk konsultasi dan penawaran terbaik.
              </p>
              <Link href="/konsultasi">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#C9A24D] to-[#B89B5E] hover:from-[#D4AF6A] hover:to-[#C9A24D] text-white font-bold px-8 py-4 text-lg rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  Konsultasi Custom
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
