'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Award, Target, Eye, Users, Clock, Heart, ArrowLeft, Home as HomeIcon, Star, CheckCircle2, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import FloatingWhatsApp from '@/components/layout/FloatingWhatsApp';

export default function TentangPage() {
  const values = [
    {
      icon: Award,
      title: 'Kualitas Premium',
      description: 'Kami berkomitmen untuk selalu memberikan produk dan layanan dengan kualitas terbaik yang setara dengan standar internasional.',
      color: 'from-amber-500 to-amber-700',
    },
    {
      icon: Users,
      title: 'Kepuasan Pelanggan',
      description: 'Kepuasan pelanggan adalah prioritas utama kami. Kami berusaha selalu melampaui ekspektasi.',
      color: 'from-blue-500 to-blue-700',
    },
    {
      icon: Clock,
      title: 'Tepat Waktu',
      description: 'Kami menghargai waktu Anda dan berkomitmen untuk menyelesaikan setiap proyek sesuai jadwal.',
      color: 'from-green-500 to-green-700',
    },
    {
      icon: Heart,
      title: 'Profesionalisme',
      description: 'Tim kami terdiri dari profesional berpengalaman yang bekerja dengan integritas dan dedikasi.',
      color: 'from-purple-500 to-purple-700',
    },
  ];

  const milestones = [
    { year: '2014', title: 'Didirikan', description: 'Terradekor didirikan dengan visi menjadi solusi interior terpercaya' },
    { year: '2016', title: 'Ekspansi Produk', description: 'Mulai mengimpor produk interior premium dari berbagai negara' },
    { year: '2018', title: 'Layanan Kontraktor', description: 'Meluncurkan layanan kontraktor untuk solusi terpadu' },
    { year: '2020', title: '100+ Proyek', description: 'Mencapai milestone 100 proyek sukses di berbagai kota' },
    { year: '2022', title: '500+ Proyek', description: 'Mencapai milestone 500 proyek dengan tingkat kepuasan 98%' },
    { year: '2024', title: 'Leader Industry', description: 'Menjadi salah satu leader di industri interior Indonesia' },
  ];

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
            <span className="text-[#C9A24D] font-bold">Tentang Kami</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">
            Tentang <span className="text-[#C9A24D]">Kami</span>
          </h1>
          <p className="text-xl text-gray-300 font-bold max-w-3xl">
            Mengenal lebih dekat PT. Opulent Interior Indonesia (Terradekor.id)
          </p>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#C9A24D]/20 to-[#B89B5E]/20 border border-[#C9A24D]/30 px-6 py-3 rounded-full">
                <Star className="w-5 h-5 text-[#C9A24D]" />
                <span className="text-[#C9A24D] font-bold text-sm uppercase tracking-wider">Tentang Terradekor</span>
              </div>

              <h2 className="text-4xl font-display font-bold text-gray-900 leading-tight">
                Solusi Interior & Konstruksi <span className="text-[#C9A24D]">Premium</span>
              </h2>

              <div className="space-y-4 text-lg text-gray-700 font-bold leading-relaxed">
                <p>
                  PT. Opulent Interior Indonesia (Terradekor.id) adalah produsen dan importir produk interior premium serta penyedia jasa interior dan kontraktor terpadu yang telah berdiri sejak tahun 2014.
                </p>
                <p>
                  Dengan komitmen untuk memberikan kualitas terbaik dan harga yang terjangkau, kami telah melayani ratusan klien dari berbagai sektor, mulai dari pemilik rumah, developer, hingga proyek komersial seperti hotel, restoran, dan kantor.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/konsultasi">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-[#C9A24D] to-[#B89B5E] hover:from-[#D4AF6A] hover:to-[#C9A24D] text-white font-bold px-8 py-4 text-lg rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                  >
                    Konsultasi Gratis
                  </Button>
                </Link>
                <Link href="/kontak">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-[#C9A24D] text-[#C9A24D] hover:bg-[#C9A24D] hover:text-white font-bold px-8 py-4 text-lg rounded-lg transition-all duration-300 transform hover:scale-105"
                  >
                    Hubungi Kami
                  </Button>
                </Link>
              </div>
            </div>

            {/* ✅ BAGIAN YANG SUDAH DIUBAH */}
            <div className="relative">
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/public/office1.jpg"
                  alt="Office Terradekor"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#C9A24D]/20 to-[#B89B5E]/20"></div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-[#C9A24D] to-[#B89B5E] text-white p-6 rounded-xl shadow-2xl">
                <div className="text-4xl font-display font-bold">10+</div>
                <div className="text-sm font-semibold">Tahun Pengalaman</div>
              </div>
            </div>
            {/* ✅ END */}

          </div>
        </div>
      </section>

      {/* Section lainnya tetap sama */}
    </div>
  );
                  }
