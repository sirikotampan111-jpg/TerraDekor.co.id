'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Home as HomeIcon, Wrench, MessageCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import FloatingWhatsApp from '@/components/layout/FloatingWhatsApp';

// Types
interface Service {
  id: number;
  image: string;
  title: string;
  description: string;
  color: string;
}

// Default Services
const defaultServices: Service[] = [
  { id: 1, image: '/service-office.jpg', title: 'Interior Kantor & Co-working Space', description: 'Desain dan pemasangan interior kantor modern dan fungsional untuk produktivitas tim', color: 'from-blue-500 to-blue-700' },
  { id: 2, image: '/service-home.jpg', title: 'Interior Rumah', description: 'Transformasi rumah menjadi ruang nyaman dan estetis sesuai gaya hidup Anda', color: 'from-green-500 to-green-700' },
  { id: 3, image: '/service-apartment.jpg', title: 'Interior Apartment', description: 'Solusi interior apartment compact yang maksimal dan elegan', color: 'from-purple-500 to-purple-700' },
  { id: 4, image: '/service-restaurant.jpg', title: 'Interior Restoran, Kafe & Retail', description: 'Desain interior yang menarik pelanggan dan meningkatkan pengalaman bersantap', color: 'from-orange-500 to-orange-700' },
  { id: 5, image: '/service-hospital.jpg', title: 'Interior Rumah Sakit, Klinik & Apotek', description: 'Interior medis yang bersih, profesional, dan nyaman untuk pasien', color: 'from-red-500 to-red-700' },
  { id: 6, image: '/service-hotel.jpg', title: 'Interior Hotel', description: 'Desain interior hotel yang mewah dan memberikan pengalaman tak terlupakan', color: 'from-amber-500 to-amber-700' },
  { id: 7, image: '/service-showroom.jpg', title: 'Interior Showroom Produk', description: 'Showroom produk yang menarik dan profesional untuk meningkatkan penjualan', color: 'from-cyan-500 to-cyan-700' },
  { id: 8, image: '/service-campus.jpg', title: 'Interior Kampus', description: 'Interior kampus yang inspiratif dan mendukung kegiatan belajar mengajar', color: 'from-indigo-500 to-indigo-700' },
  { id: 9, image: '/service-ruko.jpg', title: 'Interior Ruko', description: 'Solusi interior ruko yang efektif untuk usaha dan bisnis Anda', color: 'from-teal-500 to-teal-700' },
  { id: 10, image: '/service-hall.jpg', title: 'Interior Aula', description: 'Desain aula yang luas, fungsional, dan estetis untuk berbagai acara', color: 'from-pink-500 to-pink-700' },
  { id: 11, image: '/service-booth.jpg', title: 'Interior Booth & Exhibition', description: 'Booth pameran yang menarik perhatian dan efektif untuk branding', color: 'from-rose-500 to-rose-700' },
  { id: 12, image: '/service-furniture.jpg', title: 'Furniture Custom', description: 'Furniture custom yang dibuat khusus sesuai kebutuhan dan selera Anda', color: 'from-violet-500 to-violet-700' },
  { id: 13, image: '/service-contractor.jpg', title: 'Jasa Kontraktor', description: 'Jasa konstruksi ground-up dan renovasi dengan tim ahli berpengalaman', color: 'from-gray-600 to-gray-800' },
  { id: 14, image: '/service-renovasi.jpg', title: 'Renovasi', description: 'Jasa renovasi bangunan lama menjadi baru', color: 'from-gray-600 to-gray-800' },
];

export default function LayananPage() {
  const [services, setServices] = useState<Service[]>(defaultServices);

  // Load services from public/services-data.json jika ada
  useEffect(() => {
    const loadServices = async () => {
      if (typeof window === 'undefined') return;
      try {
        const response = await fetch('/services-data.json');
        if (response.ok) {
          const data = await response.json();
          setServices(data.services || defaultServices);
        }
      } catch (error) {
        console.error('Load services error:', error);
        setServices(defaultServices);
      }
    };
    loadServices();
  }, []);

  return (
    <div className="min-h-screen pt-20">
      <FloatingWhatsApp />

      {/* Header Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex items-center space-x-4 mb-8">
            <Link href="/">
              <Button variant="ghost" className="text-[#C9A24D] hover:bg-[#C9A24D]/10">
                <HomeIcon className="w-5 h-5 mr-2" />
                Beranda
              </Button>
            </Link>
            <span className="text-gray-500">/</span>
            <span className="text-[#C9A24D] font-bold">Layanan Jasa</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">
            Layanan Interior & <span className="text-[#C9A24D]">Kontraktor Profesional</span>
          </h1>
          <p className="text-xl text-gray-300 font-bold max-w-3xl">
            Solusi lengkap dari desain, konstruksi, hingga pemasangan untuk berbagai kebutuhan interior Anda
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Link href="/konsultasi">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#C9A24D] to-[#B89B5E] hover:from-[#D4AF6A] hover:to-[#C9A24D] text-white font-bold px-8 py-4 text-lg rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Konsultasi Gratis
              </Button>
            </Link>
            <Link href="/portofolio">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[#C9A24D] text-[#C9A24D] hover:bg-[#C9A24D] hover:text-white font-bold px-8 py-4 text-lg rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Lihat Portofolio
              </Button>
            </Link>
            <a
              href="https://wa.me/6281251511997"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-bold px-8 py-4 text-lg rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
            >
              <Phone className="w-5 h-5 mr-2" />
              Hubungi Kami
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-4">
              Layanan <span className="text-[#C9A24D]">Kami</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#C9A24D] to-[#B89B5E] mx-auto rounded-full"></div>
            <p className="text-lg text-gray-700 font-bold mt-8 max-w-2xl mx-auto">
              Kami menyediakan berbagai layanan interior dan konstruksi untuk memenuhi kebutuhan Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card
                key={service.id}
                className="bg-white border-2 border-gray-200 hover:border-[#C9A24D] transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group"
              >
                <div className="aspect-[16/10] bg-gradient-to-br from-gray-300 to-gray-400 relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      if (typeof window === 'undefined') return;
                      e.currentTarget.style.display = 'none';
                      const placeholder = e.currentTarget.parentElement?.querySelector('.placeholder-text');
                      if (placeholder) (placeholder as HTMLElement).style.display = 'flex';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#C9A24D]/20 to-[#B89B5E]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="placeholder-text hidden absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                    <Wrench className="w-16 h-16 text-gray-400" />
                    <span className="text-gray-500 text-sm font-semibold">Foto Layanan</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 font-semibold leading-relaxed">{service.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#C9A24D]">Alamat Kami</h3>
            <p className="text-gray-400">Jalan Raya Mawar No. 1234, Indonesia</p>
            <p className="text-gray-500 text-sm">Kecamatan Menteng, Jakarta Tengah, Indonesia 12820</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#C9A24D]">Kontak</h3>
            <p className="text-gray-400">WhatsApp: +62 812-5151-1997</p>
            <p className="text-gray-500 text-sm">Email: info@terradekor.id</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#C9A24D]">Jam Operasional</h3>
            <p className="text-gray-400">Senin - Jumat: 09:00 - 17:00</p>
            <p className="text-gray-500 text-sm">Sabtu: 09:00 - 14:00</p>
            <p className="text-gray-500 text-sm">Minggu: Tutup</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
