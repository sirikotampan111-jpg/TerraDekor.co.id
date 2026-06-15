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
  {
    id: 1,
    name: 'Wall Panel Dinding',
    category: 'wall-finishing',
    code: 'WP-DINDING-01',
    price: 'Hubungi Kami',
    image: '/products/WALL PANEL DINDING.jpg', // ADA DI GITHUB
    description: 'Panel Dekoratif pelapis dinding yang terbuat dari campuran serat kayu dan termoplastik (seperti PVC atau PE). Material ini memberikan kesan elegan.'
  },
  {
    id: 2,
    name: 'WPC Wall Panel 30 cm',
    category: 'wall-finishing',
    code: 'WPC-WALL-30',
    price: 'Hubungi Kami',
    image: '/products/WPC WALL PANEL 30 CM.jpg', // ADA DI GITHUB
    description: 'WPC Wall Panel 30 cm adalah pelapis dinding dekoratif berbahan Wood Plastic Composite (WPC) dengan lebar 30 cm.'
  },
  {
    id: 3,
    name: 'Wall Board',
    category: 'wall-finishing',
    code: 'WALLBOARD-DIND',
    price: 'Hubungi Kami',
    image: '/products/WALL BOARD.jpg', // ADA DI GITHUB
    description: 'Material pelapis atau penutup dinding yang digunakan untuk merapikan permukaan tembok yang tidak rata, sekaligus memberikan sentuhan estetis.'
  },
  {
    id: 4,
    name: 'PU Stone',
    category: 'wall-finishing',
    code: 'PU-STONE-01',
    price: 'Hubungi Kami',
    image: '/products/TERRADEKOR_PU STONE_SAMPUL.jpg', // ADA DI GITHUB (Sama/Mirip)
    description: 'PU Stone Outdoor Dinding adalah panel dekoratif pengganti batu alam yang terbuat dari material Polyurethane (PU) padat namun ringan. Didesain khusus untuk eksterior.'
  },
  {
    id: 5,
    name: 'WPC Outdoor',
    category: 'wall-finishing',
    code: 'WPC-OUT-01',
    price: 'Hubungi Kami',
    image: '/products/WPC OUTDOOR.jpg', // ADA DI GITHUB
    description: 'Panel dekoratif yang terbuat dari campuran serat kayu dan plastik berkualitas tinggi, dirancang khusus untuk dinding luar ruangan.'
  },
  {
    id: 6,
    name: 'Decking Lantai',
    category: 'flooring-exterior',
    code: 'DECKING-LANTAI',
    price: 'Hubungi Kami',
    image: '/products/DECKING LANTAI.jpg', // ADA DI GITHUB
    description: 'Material penutup lantai khusus untuk area luar ruangan yang dipasang sedikit lebih tinggi di atas permukaan dasar, dilengkapi rongga di bawahnya agar air hujan atau genangan air mudah mengalir.'
  },
  {
    id: 7,
    name: 'Hollow Outdoor',
    category: 'flooring-exterior',
    code: 'HLW-OUT-01',
    price: 'Hubungi Kami',
    image: '/products/HOLLOW OUTDOOR.jpg', // ADA DI GITHUB
    description: 'Hollow outdoor adalah material berbentuk batang berongga (profil kotak atau persegi panjang) yang dirancang khusus untuk penggunaan di luar ruangan.'
  },
  ,{
    id: 18,
    name: 'Vinyl Lantai',
    category: 'flooring-exterior',
    code: 'LANTAI-VINYL',
    price: 'Hubungi Kami',
    image: '/products/VINYL LANTAI.jpg', // ADA DI GITHUB
    description: 'Lantai vinyl adalah pelapis lantai sintetis berbahan dasar PVC (polyvinyl chloride) yang fleksibel, tahan air, dan memiliki banyak variasi motif (seperti kayu atau marmer).'
  }
  {
    id: 9,
    name: 'Plafon PVC',
    category: 'wall-finishing',
    code: 'PLAFON-PVC-01',
    price: 'Hubungi Kami',
    image: '/products/PLAFON PVC.jpg', // ADA DI GITHUB
    description: 'Plafon PVC interior adalah langit-langit ruangan yang terbuat dari material Polyvinyl Chloride (PVC), sejenis polimer plastik sintetis yang fleksibel namun kuat.'
  },
  {
    id: 10,
    name: 'Sheet Board',
    category: 'wall-finishing',
    code: 'SHEET-BOARD-01',
    price: 'Hubungi Kami',
    image: '/products/SHEET BOARD.jpg', // ADA DI GITHUB
    description: 'Sheet board dinding adalah papan material komposit (biasanya berbasis PVC atau WPC) berbentuk lembaran besar layaknya triplek yang digunakan sebagai pelapis interior.'
  },
  {
    id: 11,
    name: 'SPC Lantai',
    category: 'flooring-exterior',
    code: 'LANTAI-SPC',
    price: 'Hubungi Kami',
    image: '/products/pd14.jpg', // TIDAK ADA -> PAKAI FOTO LAMA (Lantai SPC bawaan)
    description: 'Lantai SPC (Stone Plastic Composite) adalah material pelapis lantai modern yang terbuat dari campuran bubuk batu kapur (limestone), resin PVC, dan stabilizer.'
  },
  {
    id: 12,
    name: 'UV Marmer',
    category: 'wall-finishing',
    code: 'UV-PVC-MARMER',
    price: 'Hubungi Kami',
    image: '/products/pd10.jpg', // TIDAK ADA -> PAKAI FOTO LAMA (UV PVC Marmer bawaan)
    description: 'Pengganti marmer asli yang terbuat dari bahan Polyvinyl Chloride dan serbuk batu. Lapisan atasnya menggunakan UV Coating untuk menghasilkan tampilan mengkilap (glossy) yang sangat mirip dengan marmer asli.'
  },
  {
    id: 13,
    name: 'List Moulding',
    category: 'wall-finishing',
    code: 'LIST-MOULDING',
    price: 'Hubungi Kami',
    image: '/products/LIST MOULDING.jpg', // ADA DI GITHUB
    description: 'Elemen dekoratif berupa cetakan atau lis yang dipasang pada permukaan dinding untuk memberikan tekstur, dimensi, dan pola. Berfungsi menyulap dinding polos menjadi lebih elegan.'
  },
  {
    id: 14,
    name: 'Wall Foam',
    category: 'wall-finishing',
    code: 'WALLFOAM-01',
    price: 'Hubungi Kami',
    image: '/products/pd6.jpg', // TIDAK ADA -> PAKAI FOTO LAMA (Wall Foam bawaan)
    description: 'Wallfoam 3D adalah pelapis dinding dekoratif yang terbuat dari bahan busa (biasanya foam XPE atau PVC) dengan perekat di bagian belakangnya.'
  },
  {
    id: 15,
    name: 'List Foam Wall Boarder',
    category: 'wall-finishing',
    code: 'LIST-BORDER-PVC',
    price: 'Hubungi Kami',
    image: '/products/pd9.jpg', // TIDAK ADA -> PAKAI FOTO LAMA (List Wall Border PVC bawaan)
    description: 'Wallborder dinding adalah stiker dekorasi 3D berbahan busa (foam) yang berfungsi sebagai pembatas, list pinggiran, atau transisi pada dinding ruangan.'
  },
  {
    id: 16,
    name: 'Pintu WPC',
    category: 'furniture-sanitary',
    code: 'PINTU-WPC',
    price: 'Hubungi Kami',
    image: '/products/pd15.jpg', // TIDAK ADA -> PAKAI FOTO LAMA (Pintu WPC bawaan)
    description: 'Material ini menawarkan kombinasi kekuatan dan keindahan serat kayu alami dengan daya tahan, ketahanan terhadap air, dan anti-rayap dari plastik.'
  },
  {
    id: 17,
    name: 'Pintu Baja',
    category: 'furniture-sanitary',
    code: 'PINTU-BAJA',
    price: 'Hubungi Kami',
    image: '/products/pd16.jpg', // TIDAK ADA -> PAKAI FOTO LAMA (Pintu Baja bawaan)
    description: 'Pintu ini dikenal sangat kuat, tahan lama, anti-rayap, serta tahan terhadap perubahan cuaca ekstrem. Pintu jenis ini umumnya menjadi pilihan utama untuk meningkatkan keamanan.'
  },
  {
    id: 8,
    name: 'Hollow Indoor',
    category: 'wall-finishing',
    code: 'HLW-IND-01',
    price: 'Hubungi Kami',
    image: '/products/HOLLOW INDOOR.jpg', // ADA DI GITHUB
    description: 'Material ini dirancang khusus untuk mempercantik ruangan, biasanya diaplikasikan sebagai partisi/sekat pembatas ruang, kisi-kisi (grill), hingga aksen dinding dan plafon.'
  }
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
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-2 border-gray-200 hover:border-[#C9A24D] overflow-hidden flex flex-col justify-between"
              >

                {/* CONTAINER ATAS: Gambar & Info Utama */}
                <div>
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
                  <div className="p-6 pb-2">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {product.name}
                    </h3>

                    <p className="text-sm text-gray-600 font-semibold mb-3">
                      <span className="text-[#C9A24D]">Kode:</span> {product.code}
                    </p>

                    {/* PENJELASAN PRODUK WAJIB MUNCUL */}
                    <p className="text-xs text-gray-500 leading-relaxed mb-4 border-t border-gray-100 pt-3">
                      {product.description}
                    </p>
                  </div>
                </div>

                {/* CONTAINER BAWAH: Harga & Tombol WA */}
                <div className="p-6 pt-0">
                  <div className="flex items-center justify-between mt-2">
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
