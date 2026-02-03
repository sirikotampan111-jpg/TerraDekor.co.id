'use client';

import Link from 'next/link';
import { MapPin, Phone, Mail, MessageCircle, Facebook, Instagram, Youtube, ShoppingBag, Home as HomeIcon, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import FloatingWhatsApp from '@/components/layout/FloatingWhatsApp';

export default function KontakPage() {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Alamat',
      content: 'Pergudangan Pantai Indah Dadap Blok BJ 23, Kosambi, Tangerang, Banten 15213',
      link: 'https://maps.app.goo.gl/Z1519FAtZ2NztMH78',
      linkText: 'Lihat di Google Maps',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'ptopulentinteriors@gmail.com',
      link: 'mailto:ptopulentinteriors@gmail.com',
      linkText: 'Kirim Email',
    },
    {
      icon: Phone,
      title: 'WhatsApp',
      content: '0812-5151-1997',
      link: 'https://wa.me/6281251511997',
      linkText: 'Chat via WhatsApp',
    },
  ];

  const socialMedia = [
    {
      icon: Instagram,
      name: 'Instagram',
      handle: '@terradekor.id',
      link: 'https://instagram.com/terradekor.id',
      color: 'from-[#E4405F] to-[#C13584]',
    },
    {
      icon: Facebook,
      name: 'Facebook',
      handle: 'TERRADEKOR.ID',
      link: 'https://facebook.com/TERRADEKOR.ID',
      color: 'from-[#1877F2] to-[#0D47A1]',
    },
    {
      icon: Youtube,
      name: 'YouTube',
      handle: 'Terradekor Indonesia',
      link: 'https://youtube.com/@TerradekorIndonesia',
      color: 'from-[#FF0000] to-[#CC0000]',
    },
    {
      icon: ShoppingBag,
      name: 'Shopee',
      handle: 'Terradekor Official Store',
      link: 'https://id.shp.ee/zh8NYmq',
      color: 'from-[#EE4D2D] to-[#C73E26]',
    },
  ];

  const workingHours = [
    { day: 'Senin - Jumat', hours: '09:00 - 17:00' },
    { day: 'Sabtu', hours: '09:00 - 14:00' },
    { day: 'Minggu', hours: 'Tutup' },
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
            <span className="text-[#C9A24D] font-bold">Kontak</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">
            Hubungi <span className="text-[#C9A24D]">Kami</span>
          </h1>
          <p className="text-xl text-gray-300 font-bold max-w-3xl">
            Tim kami siap membantu Anda mewujudkan ruang impian
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="bg-white border-2 border-gray-200 hover:border-[#C9A24D] transition-all duration-300 transform hover:scale-105 hover:shadow-2xl p-8"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#C9A24D] to-[#B89B5E] flex items-center justify-center">
                    <info.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{info.title}</h3>
                  <p className="text-gray-700 font-bold text-lg">{info.content}</p>
                  <a
                    href={info.link}
                    target={info.title === 'Email' ? '_self' : '_blank'}
                    rel={info.title !== 'Email' ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center space-x-2 text-[#C9A24D] font-bold hover:text-[#D4AF6A] transition-colors"
                  >
                    <span>{info.linkText}</span>
                  </a>
                </div>
              </Card>
            ))}
          </div>

          {/* Map Section */}
          <Card className="bg-white border-2 border-gray-200 overflow-hidden mb-16">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-2">
                Lokasi <span className="text-[#C9A24D]">Kami</span>
              </h2>
              <p className="text-gray-700 font-semibold">
                Kunjungi gudang kami untuk melihat koleksi produk terlengkap
              </p>
            </div>
            <div className="aspect-video w-full bg-gray-100 flex items-center justify-center">
              <div className="text-center space-y-4">
                <MapPin className="w-16 h-16 text-[#C9A24D] mx-auto" />
                <p className="text-gray-700 font-bold text-lg">
                  Pergudangan Pantai Indah Dadap Blok BJ 23
                </p>
                <a
                  href="https://maps.app.goo.gl/Z1519FAtZ2NztMH78"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#C9A24D] to-[#B89B5E] text-white font-bold px-6 py-3 rounded-lg hover:from-[#D4AF6A] hover:to-[#C9A24D] transition-all duration-300"
                >
                  <MapPin className="w-5 h-5" />
                  <span>Buka di Google Maps</span>
                </a>
              </div>
            </div>
          </Card>

          {/* Social Media & Working Hours */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Social Media */}
            <Card className="bg-white border-2 border-gray-200 p-8">
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">
                Media <span className="text-[#C9A24D]">Sosial</span>
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {socialMedia.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <div className={`bg-gradient-to-br ${social.color} rounded-xl p-6 text-white transition-all duration-300 transform hover:scale-105 hover:shadow-2xl`}>
                      <social.icon className="w-8 h-8 mb-3 group-hover:scale-110 transition-transform" />
                      <h3 className="font-bold text-lg mb-1">{social.name}</h3>
                      <p className="text-sm opacity-90">{social.handle}</p>
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            {/* Working Hours */}
            <Card className="bg-white border-2 border-gray-200 p-8">
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">
                Jam <span className="text-[#C9A24D]">Operasional</span>
              </h2>
              <div className="space-y-4">
                {workingHours.map((schedule, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-[#C9A24D]" />
                      <span className="text-gray-900 font-bold">{schedule.day}</span>
                    </div>
                    <span className="text-gray-700 font-semibold">{schedule.hours}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-gradient-to-br from-[#C9A24D]/10 to-[#B89B5E]/10 border border-[#C9A24D]/30 rounded-lg">
                <p className="text-gray-800 font-bold text-sm">
                  💡 <span className="font-bold">Tips:</span> Untuk respons lebih cepat, hubungi kami via WhatsApp atau kunjungi gudang kami pada jam operasional.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
              Punya Pertanyaan atau Ingin Konsultasi?
            </h2>
            <p className="text-xl text-gray-300 font-bold max-w-2xl mx-auto">
              Jangan ragu untuk menghubungi kami. Tim kami siap membantu Anda kapan saja!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/konsultasi">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#C9A24D] to-[#B89B5E] hover:from-[#D4AF6A] hover:to-[#C9A24D] text-white font-bold px-8 py-4 text-lg rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Konsultasi Gratis
                </Button>
              </Link>
              <a
                href="https://wa.me/6281251511997"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-bold px-8 py-4 text-lg rounded-lg shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Sekarang</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
