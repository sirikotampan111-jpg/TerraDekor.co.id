'use client';

import Link from 'next/link';
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

           <div className="relative">
  <div className="aspect-square bg-gradient-to-br from-gray-300 to-gray-400 rounded-2xl flex items-center justify-center relative overflow-hidden">
    {/* Ganti emoji dengan gambar */}
    <img
      src="/img/office.jpg"   // <-- path dari folder public/img
      alt="office"
      className="w-24 h-24 object-cover"
    />
    {/* Gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#C9A24D]/20 to-[#B89B5E]/20"></div>
  </div>

  {/* Badge / info */}
  <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-[#C9A24D] to-[#B89B5E] text-white p-6 rounded-xl shadow-2xl">
    <div className="text-4xl font-display font-bold">10+</div>
    <div className="text-sm font-semibold">Tahun Pengalaman</div>
  </div>
</div>


      {/* Vision & Mission */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-white mb-4">
              Visi & <span className="text-[#C9A24D]">Misi</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#C9A24D] to-[#B89B5E] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-[#C9A24D]/20 p-8">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#C9A24D] to-[#B89B5E] flex items-center justify-center flex-shrink-0">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#C9A24D] mb-4">Visi Kami</h3>
                  <p className="text-gray-300 font-bold text-lg leading-relaxed">
                    Menjadi solusi interior dan konstruksi terpercaya dengan kualitas premium dan harga terjangkau, serta menjadi partner terbaik bagi klien dalam mewujudkan ruang impian mereka.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-[#C9A24D]/20 p-8">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#C9A24D] to-[#B89B5E] flex items-center justify-center flex-shrink-0">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#C9A24D] mb-4">Misi Kami</h3>
                  <ul className="space-y-3 text-gray-300 font-bold">
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-[#C9A24D] mt-0.5 flex-shrink-0" />
                      <span>Menyediakan produk interior berkualitas tinggi dengan harga kompetitif</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-[#C9A24D] mt-0.5 flex-shrink-0" />
                      <span>Memberikan layanan konstruksi dan interior yang profesional dan terpercaya</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-[#C9A24D] mt-0.5 flex-shrink-0" />
                      <span>Menjaga kepuasan pelanggan dengan kualitas dan pelayanan terbaik</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle2 className="w-5 h-5 text-[#C9A24D] mt-0.5 flex-shrink-0" />
                      <span>Terus berinovasi dalam produk dan layanan untuk kebutuhan pelanggan</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
              Nilai <span className="text-[#C9A24D]">Core</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#C9A24D] to-[#B89B5E] mx-auto rounded-full"></div>
            <p className="text-lg text-gray-700 font-bold mt-8 max-w-2xl mx-auto">
              Nilai yang menjadikan kami partner terpercaya untuk kebutuhan interior Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="bg-white border-2 border-gray-200 hover:border-[#C9A24D] transition-all duration-300 transform hover:scale-105 hover:shadow-2xl p-6"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${value.color} flex items-center justify-center`}>
                    <value.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{value.title}</h3>
                  <p className="text-gray-600 font-semibold text-sm leading-relaxed">{value.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-white mb-4">
              Perjalanan <span className="text-[#C9A24D]">Kami</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#C9A24D] to-[#B89B5E] mx-auto rounded-full"></div>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#C9A24D] to-[#B89B5E]"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  <div className="hidden lg:block flex-1"></div>
                  <div className="hidden lg:block w-16 h-16 rounded-full bg-gradient-to-br from-[#C9A24D] to-[#B89B5E] flex items-center justify-center z-10 shadow-xl">
                    <span className="text-xl font-bold text-white">{milestone.year}</span>
                  </div>
                  <div className="flex-1">
                    <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-[#C9A24D]/20 p-6 lg:ml-8 lg:mr-8">
                      <div className="lg:hidden mb-4">
                        <span className="inline-block bg-gradient-to-br from-[#C9A24D] to-[#B89B5E] text-white px-4 py-2 rounded-lg text-lg font-bold">
                          {milestone.year}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-[#C9A24D] mb-2">{milestone.title}</h3>
                      <p className="text-gray-300 font-semibold">{milestone.description}</p>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center space-y-2">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-[#C9A24D] to-[#B89B5E] flex items-center justify-center mb-4">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-display font-bold text-gray-900">500+</div>
              <p className="text-gray-700 font-bold">Proyek Selesai</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-[#C9A24D] to-[#B89B5E] flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-display font-bold text-gray-900">98%</div>
              <p className="text-gray-700 font-bold">Kepuasan Klien</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-[#C9A24D] to-[#B89B5E] flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-display font-bold text-gray-900">10+</div>
              <p className="text-gray-700 font-bold">Tahun Pengalaman</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-[#C9A24D] to-[#B89B5E] flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-display font-bold text-gray-900">50+</div>
              <p className="text-gray-700 font-bold">Tim Profesional</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#C9A24D] via-[#D4AF6A] to-[#B89B5E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
            Siap Bekerja Sama dengan Kami?
          </h2>
          <p className="text-xl text-white/90 font-bold mb-8 max-w-2xl mx-auto">
            Hubungi kami sekarang untuk konsultasi gratis dan mulai mewujudkan ruang impian Anda
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/konsultasi">
              <Button
                size="lg"
                className="bg-white text-[#C9A24D] hover:bg-gray-100 font-bold px-8 py-4 text-lg rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
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
    </div>
  );
}
