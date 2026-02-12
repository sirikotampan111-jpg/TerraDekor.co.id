'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, Filter, MessageCircle, Home } from 'lucide-react';
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
  { id: 1, name: 'Wall Panel Dinding', category: 'wall-finishing', code: 'WP-DINDING-01', price: 'Hubungi Kami', image: '/products/pd2.jpg' },
  { id: 2, name: 'WPC Wall Panel 30 cm', category: 'wall-finishing', code: 'WPC-WALL-30', price: 'Hubungi Kami', image: '/products/pd1.jpg' },
  { id: 3, name: 'Wallpaper', category: 'wall-finishing', code: 'WALLPAPER-01', price: 'Hubungi Kami', image: '/products/pd3.jpg' },
  { id: 4, name: 'Wallpaper 3D Dinding', category: 'wall-finishing', code: 'WALLPAPER-3D', price: 'Hubungi Kami', image: '/products/pd4.jpg' },
  { id: 5, name: 'Wallboard Dinding', category: 'wall-finishing', code: 'WALLBOARD-DIND', price: 'Hubungi Kami', image: '/products/pd5.jpg' },
  { id: 6, name: 'Wall Foam', category: 'wall-finishing', code: 'WALLFOAM-01', price: 'Hubungi Kami', image: '/products/pd6.jpg' },
  { id: 7, name: 'Stiker UV Motif Marmer', category: 'wall-finishing', code: 'STIKER-UV-MAR', price: 'Hubungi Kami', image: '/products/pd8.jpg' },
  { id: 8, name: 'Stiker Foam Vinyl', category: 'wall-finishing', code: 'STIKER-FOAM-VIN', price: 'Hubungi Kami', image: '/products/pd7.jpg' },
  { id: 9, name: 'UV PVC Marmer', category: 'wall-finishing', code: 'UV-PVC-MARMER', price: 'Hubungi Kami', image: '/products/pd10.jpg' },
  { id: 10, name: 'List Wall Border PVC', category: 'wall-finishing', code: 'LIST-BORDER-PVC', price: 'Hubungi Kami', image: '/products/pd9.jpg' },
  { id: 11, name: 'List Moulding', category: 'wall-finishing', code: 'LIST-MOULDING', price: 'Hubungi Kami', image: '/products/pd12.jpg' },
  { id: 12, name: 'WPC Decking', category: 'flooring-exterior', code: 'WPC-DECKING', price: 'Hubungi Kami', image: '/products/pd11.jpg' },
  { id: 13, name: 'Lantai Vinyl', category: 'flooring-exterior', code: 'LANTAI-VINYL', price: 'Hubungi Kami', image: '/products/pd13.jpg' },
  { id: 14, name: 'Lantai SPC', category: 'flooring-exterior', code: 'LANTAI-SPC', price: 'Hubungi Kami', image: '/products/pd14.jpg' },
  { id: 15, name: 'Pintu WPC', category: 'furniture-sanitary', code: 'PINTU-WPC', price: 'Hubungi Kami', image: '/products/pd15.jpg' },
  { id: 16, name: 'Pintu Baja', category: 'furniture-sanitary', code: 'PINTU-BAJA', price: 'Hubungi Kami', image: '/products/pd16.jpg' },
  { id: 17, name: 'Wastafel', category: 'furniture-sanitary', code: 'WASTAFEL-01', price: 'Hubungi Kami', image: '/products/pd17.jpg' },
  { id: 18, name: 'Meja Office', category: 'furniture-sanitary', code: 'MEJA-OFFICE', price: 'Hubungi Kami', image: '/products/pd18.jpg' },
];

export default function ProdukPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter(product => {
    const matchesCategory =
      selectedCategory === 'all' || product.category === selectedCategory;

    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.code.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const getWhatsAppLink = (product) => {
    return `https://wa.me/6281251511997?text=${encodeURIComponent(
      `Halo Terradekor, saya ingin bertanya tentang produk: ${product.name} dengan kode ${product.code}`
    )}`;
  };

  return (
    <div className="min-h-screen pt-20">
      <FloatingWhatsApp />

      {/* Products */}
      <section className="py-16 bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-gray-200 hover:border-[#C9A24D] overflow-hidden"
              >

                {/* IMAGE CLICKABLE */}
                <a
                  href={getWhatsAppLink(product)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="aspect-square bg-gray-100 flex items-center justify-center relative overflow-hidden group block cursor-pointer"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-[#C9A24D] text-white px-4 py-2 rounded-lg font-bold shadow-lg">
                      Klik untuk Tanya Harga
                    </div>
                  </div>
                </a>

                {/* PRODUCT INFO */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {product.name}
                  </h3>

                  <p className="text-sm text-gray-600 font-semibold mb-3">
                    <span className="text-[#C9A24D]">Kode:</span> {product.code}
                  </p>

                  <div className="flex items-center justify-between">
                    <p className="text-lg font-bold text-[#C9A24D]">
                      {product.price}
                    </p>

                    <a
                      href={getWhatsAppLink(product)}
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

        </div>
      </section>

      <FloatingWhatsApp />
    </div>
  );
                    }
