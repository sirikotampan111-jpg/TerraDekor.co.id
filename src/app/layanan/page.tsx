'use client';

import Link from 'next/link';
import { Building, Home, Utensils, Hotel, Store, Briefcase, Heart, School, Stethoscope, Palette, Hammer, ArrowLeft, Home as HomeIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import FloatingWhatsApp from '@/components/layout/FloatingWhatsApp';

const services = [
  {
    icon: Building,
    title: 'Interior Kantor & Co-working Space',
    description: 'Desain dan pemasangan interior kantor modern dan fungsional untuk produktivitas tim',
    color: 'from-blue-500 to-blue-700',
  },
  {
    icon: Home,
    title: 'Interior Rumah',
    description: 'Transformasi rumah menjadi ruang nyaman dan estetis sesuai gaya hidup Anda',
    color: 'from-green-500 to-green-700',
  },
  {
    icon: Building,
    title: 'Interior Apartment',
    description: 'Solusi interior apartment compact yang maksimal dan elegan',
    color: 'from-purple-500 to-purple-700',
  },
  {
    icon: Utensils,
    title: 'Interior Restoran, Kafe & Retail',
    description: 'Desain interior yang menarik pelanggan dan meningkatkan pengalaman bersantap',
    color: 'from-orange-500 to-orange-700',
  },
  {
    icon: Stethoscope,
    title: 'Interior Rumah Sakit, Klinik & Apotek',
    description: 'Interior medis yang bersih, profesional, dan nyaman untuk pasien',
    color: 'from-red-500 to-red-700',
  },
  {
    icon: Hotel,
    title: 'Interior Hotel',
    description: 'Desain interior hotel yang mewah dan memberikan pengalaman tak terlupakan',
    color: 'from-amber-500 to-amber-700',
  },
  {
    icon: Store,
    title: 'Interior Showroom Produk',
    description: 'Showroom produk yang menarik dan profesional untuk meningkatkan penjualan',
    color: 'from-cyan-500 to-cyan-700',
  },
  {
    icon: School,
    title: 'Interior Kampus',
    description: 'Interior kampus yang inspiratif dan mendukung kegiatan belajar mengajar',
    color: 'from-indigo-500 to-indigo-700',
  },
  {
    icon: Store,
    title: 'Interior Ruko',
    description: 'Solusi interior ruko yang efektif untuk usaha dan bisnis Anda',
    color: 'from-teal-500 to-teal-700',
  },
  {
    icon: Building,
    title: 'Interior Aula',
    description: 'Desain aula yang luas, fungsional, dan estetis untuk berbagai acara',
    color: 'from-pink-500 to-pink-700',
  },
  {
    icon: Store,
    title: 'Interior Booth & Exhibition',
    description: 'Booth pameran yang menarik perhatian dan efektif untuk branding',
    color: 'from-rose-500 to-rose-700',
  },
  {
    icon: pallete,
    title: 'Furniture costume',
    description: 'Furniture custom yang dibuat khusus sesuai kebutuhan dan selera Anda',
    color: 'from-gray-600 to-gray-800',
  },
];

export default function LayananPage() {
  return (
    <div className="min-h-screen pt-20">
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
            <span className="text-[#C9A24D] font-bold">Layanan Jasa</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">
            Layanan Interior & <span className="text-[#C9A24D]">Kontraktor Profesional</span>
          </h1>
          <p className="text-xl text-gray-300 font-bold max-w-3xl">
            Solusi lengkap dari desain, konstruksi, hingga pemasangan untuk berbagai kebutuhan interior Anda
          </p>
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
            {services.map((service, index) => (
              <Card
                key={index}
                className="group bg-white border-2 border-gray-200 hover:border-[#C9A24D] transition-all duration-300 transform hover:scale-105 hover:shadow-2xl overflow-hidden"
              >
                <div className="p-6">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 font-semibold leading-relaxed">{service.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-4">
              Portofolio <span className="text-[#C9A24D]">Kami</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#C9A24D] to-[#B89B5E] mx-auto rounded-full"></div>
            <p className="text-lg text-gray-700 font-bold mt-8 max-w-2xl mx-auto">
              Beberapa hasil karya interior yang telah kami selesaikan
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Portfolio Item 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center relative overflow-hidden">
                <img
                  src="/portfolio-1.jpg"
                  alt="Portofolio 1"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const placeholder = e.currentTarget.parentElement?.querySelector('.placeholder-text');
                    if (placeholder) placeholder.style.display = 'block';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#C9A24D]/20 to-[#B89B5E]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Interior Rumah Modern</h3>
                <p className="text-gray-600 font-semibold">Rumah Tinggal</p>
              </div>
            </div>

            {/* Portfolio Item 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center relative overflow-hidden">
                <img
                  src="/portfolio-2.jpg"
                  alt="Portofolio 2"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const placeholder = e.currentTarget.parentElement?.querySelector('.placeholder-text');
                    if (placeholder) placeholder.style.display = 'block';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#C9A24D]/20 to-[#B89B5E]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Kantor Profesional</h3>
                <p className="text-gray-600 font-semibold">Co-working Space</p>
              </div>
            </div>

            {/* Portfolio Item 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center relative overflow-hidden">
                <img
                  src="/portfolio-3.jpg"
                  alt="Portofolio 3"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const placeholder = e.currentTarget.parentElement?.querySelector('.placeholder-text');
                    if (placeholder) placeholder.style.display = 'block';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#C9A24D]/20 to-[#B89B5E]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Restoran Mewah</h3>
                <p className="text-gray-600 font-semibold">Restoran & Kafe</p>
              </div>
            </div>

            {/* Portfolio Item 4 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center relative overflow-hidden">
                <img
                  src="/portfolio-4.jpg"
                  alt="Portofolio 4"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const placeholder = e.currentTarget.parentElement?.querySelector('.placeholder-text');
                    if (placeholder) placeholder.style.display = 'block';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#C9A24D]/20 to-[#B89B5E]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Apartment Elegan</h3>
                <p className="text-gray-600 font-semibold">Residential</p>
              </div>
            </div>

            {/* Portfolio Item 5 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center relative overflow-hidden">
                <img
                  src="/portfolio-5.jpg"
                  alt="Portofolio 5"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const placeholder = e.currentTarget.parentElement?.querySelector('.placeholder-text');
                    if (placeholder) placeholder.style.display = 'block';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#C9A24D]/20 to-[#B89B5E]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Showroom Produk</h3>
                <p className="text-gray-600 font-semibold">Commercial</p>
              </div>
            </div>

            {/* Portfolio Item 6 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center relative overflow-hidden">
                <img
                  src="/portfolio-6.jpg"
                  alt="Portofolio 6"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const placeholder = e.currentTarget.parentElement?.querySelector('.placeholder-text');
                    if (placeholder) placeholder.style.display = 'block';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#C9A24D]/20 to-[#B89B5E]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Klinik Medis</h3>
                <p className="text-gray-600 font-semibold">Healthcare</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
              Mengapa Memilih <span className="text-[#C9A24D]">Layanan Kami</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#C9A24D] to-[#B89B5E] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[#C9A24D] to-[#B89B5E] flex items-center justify-center">
                <span className="text-4xl font-bold text-white">01</span>
              </div>
              <h3 className="text-xl font-bold text-[#C9A24D]">Terima Beres</h3>
              <p className="text-gray-300 font-semibold">Dari desain hingga pemasangan, kami tangani semua</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[#C9A24D] to-[#B89B5E] flex items-center justify-center">
                <span className="text-4xl font-bold text-white">02</span>
              </div>
              <h3 className="text-xl font-bold text-[#C9A24D]">Tim Profesional</h3>
              <p className="text-gray-300 font-semibold">Tim ahli berpengalaman di bidang interior</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[#C9A24D] to-[#B89B5E] flex items-center justify-center">
                <span className="text-4xl font-bold text-white">03</span>
              </div>
              <h3 className="text-xl font-bold text-[#C9A24D]">Harga Transparan</h3>
              <p className="text-gray-300 font-semibold">Harga kompetitif tanpa biaya tersembunyi</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[#C9A24D] to-[#B89B5E] flex items-center justify-center">
                <span className="text-4xl font-bold text-white">04</span>
              </div>
              <h3 className="text-xl font-bold text-[#C9A24D]">Tepat Waktu</h3>
              <p className="text-gray-300 font-semibold">Penyelesaian proyek sesuai jadwal</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-gray-900 mb-4">
              Proses <span className="text-[#C9A24D]">Kerja Kami</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#C9A24D] to-[#B89B5E] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative">
              <div className="bg-white rounded-lg p-6 shadow-lg border-2 border-gray-200 hover:border-[#C9A24D] transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C9A24D] to-[#B89B5E] flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-white">1</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Konsultasi</h3>
                <p className="text-gray-600 font-semibold">Diskusikan kebutuhan dan keinginan Anda dengan tim kami</p>
              </div>
              <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-[#C9A24D]">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-lg p-6 shadow-lg border-2 border-gray-200 hover:border-[#C9A24D] transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C9A24D] to-[#B89B5E] flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-white">2</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Desain</h3>
                <p className="text-gray-600 font-semibold">Buat desain dan rencana kerja yang sesuai budget</p>
              </div>
              <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-[#C9A24D]">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-lg p-6 shadow-lg border-2 border-gray-200 hover:border-[#C9A24D] transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C9A24D] to-[#B89B5E] flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-white">3</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Pengerjaan</h3>
                <p className="text-gray-600 font-semibold">Eksekusi proyek dengan tim profesional dan material berkualitas</p>
              </div>
              <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-[#C9A24D]">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-lg p-6 shadow-lg border-2 border-gray-200 hover:border-[#C9A24D] transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#b69245] to-[#B89B5E] flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-white">4</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Serah Terima</h3>
                <p className="text-gray-600 font-semibold">Proyek selesai dengan kualitas terbaik dan tepat waktu</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#C9A24D] via-[#D4AF6A] to-[#B89B5E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
            Siap Mewujudkan Interior Impian Anda?
          </h2>
          <p className="text-xl text-white/90 font-bold mb-8 max-w-2xl mx-auto">
            Hubungi kami sekarang untuk konsultasi gratis dan penawaran terbaik
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/konsultasi">
              <Button
                size="lg"
                className="bg-white text-[#C9A24D] hover:bg-gray-100 font-bold px-8 py-4 text-lg rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
              >
                <Heart className="w-5 h-5 mr-2" />
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
    </div>
  );
}
