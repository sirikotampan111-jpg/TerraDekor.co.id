'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Home as HomeIcon, Send, MessageCircle, Phone, CheckCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import FloatingWhatsApp from '@/components/layout/FloatingWhatsApp';

const serviceTypes = [
  { id: 'produk', name: 'Produk Interior' },
  { id: 'wallpanel', name: 'Wall Panel' },
  { id: 'wpc', name: 'WPC Decking' },
  { id: 'vinyl', name: 'Vinyl & SPC' },
  { id: 'wallpaper', name: 'Wallpaper' },
  { id: 'pintu', name: 'Pintu WPC & Baja' },
  { id: 'furniture', name: 'Furniture Custom' },
  { id: 'interior', name: 'Jasa Interior' },
  { id: 'kontraktor', name: 'Jasa Kontraktor' },
  { id: 'renovasi', name: 'Renovasi' },
  { id: 'lainnya', name: 'Lainnya' },
];

export default function KonsultasiPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    serviceType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSuccess(true);
    setIsSubmitting(false);

    // Reset form after success
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({
        name: '',
        email: '',
        whatsapp: '',
        serviceType: '',
        message: '',
      });
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
            <span className="text-[#C9A24D] font-bold">Konsultasi Gratis</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-display font-bold text-white mb-4">
            Konsultasi <span className="text-[#C9A24D]">Gratis</span>
          </h1>
          <p className="text-xl text-gray-300 font-bold max-w-3xl">
            Tim kami siap membantu Anda tanpa biaya. Isi formulir di bawah ini!
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-gradient-to-br from-gray-100 via-gray-50 to-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <Card className="bg-white border-2 border-gray-200 p-8 shadow-xl">
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
                  Formulir <span className="text-[#C9A24D]">Konsultasi</span>
                </h2>

                {isSuccess && (
                  <div className="mb-6 p-4 bg-green-50 border-2 border-green-500 rounded-lg flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <p className="text-green-800 font-bold">
                      Terima kasih! Pesan Anda telah terkirim. Tim kami akan segera menghubungi Anda.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-gray-900 font-bold text-base">
                      Nama Lengkap *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Masukkan nama lengkap Anda"
                      className="mt-2 border-2 border-gray-200 focus:border-[#C9A24D] font-semibold h-12"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="email" className="text-gray-900 font-bold text-base">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="email@contoh.com"
                        className="mt-2 border-2 border-gray-200 focus:border-[#C9A24D] font-semibold h-12"
                      />
                    </div>
                    <div>
                      <Label htmlFor="whatsapp" className="text-gray-900 font-bold text-base">
                        No. WhatsApp *
                      </Label>
                      <Input
                        id="whatsapp"
                        name="whatsapp"
                        type="tel"
                        required
                        value={formData.whatsapp}
                        onChange={handleChange}
                        placeholder="0812-5151-1997"
                        className="mt-2 border-2 border-gray-200 focus:border-[#C9A24D] font-semibold h-12"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="serviceType" className="text-gray-900 font-bold text-base">
                      Jenis Layanan *
                    </Label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      required
                      value={formData.serviceType}
                      onChange={handleChange}
                      className="mt-2 w-full px-4 py-3 border-2 border-gray-200 focus:border-[#C9A24D] rounded-lg font-semibold bg-white h-12"
                    >
                      <option value="">Pilih jenis layanan</option>
                      {serviceTypes.map((type) => (
                        <option key={type.id} value={type.id}>
                          {type.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-gray-900 font-bold text-base">
                      Pesan / Pertanyaan *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Jelaskan kebutuhan atau pertanyaan Anda secara detail..."
                      rows={6}
                      className="mt-2 border-2 border-gray-200 focus:border-[#C9A24D] font-semibold resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#C9A24D] to-[#B89B5E] hover:from-[#D4AF6A] hover:to-[#C9A24D] text-white font-bold px-8 py-4 text-lg rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Mengirim...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Kirim Pesan
                      </>
                    )}
                  </Button>

                  <p className="text-sm text-gray-600 font-semibold text-center">
                    Dengan mengirim formulir ini, Anda menyetujui kebijakan privasi kami.
                  </p>
                </form>
              </Card>
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-2 border-[#C9A24D]/20 p-8 text-white">
                <h3 className="text-2xl font-display font-bold text-[#C9A24D] mb-6">
                  Hubungi Langsung
                </h3>
                <div className="space-y-6">
                  <a
                    href="https://wa.me/6281251511997"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-lg">WhatsApp</p>
                      <p className="text-gray-300 font-semibold">0812-5151-1997</p>
                    </div>
                  </a>

                  <a
                    href="tel:+6281251511997"
                    className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C9A24D] to-[#B89B5E] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-lg">Telepon</p>
                      <p className="text-gray-300 font-semibold">0812-5151-1997</p>
                    </div>
                  </a>
                </div>
              </Card>

              <Card className="bg-white border-2 border-gray-200 p-8">
                <h3 className="text-2xl font-display font-bold text-gray-900 mb-4">
                  Info Penting
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#C9A24D] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 font-semibold">Konsultasi gratis tanpa biaya</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#C9A24D] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 font-semibold">Respon cepat via WhatsApp</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#C9A24D] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 font-semibold">Tim profesional berpengalaman</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#C9A24D] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 font-semibold">Penawaran harga transparan</span>
                  </li>
                </ul>
              </Card>

              <Card className="bg-gradient-to-br from-[#C9A24D] via-[#D4AF6A] to-[#B89B5E] border-2 border-[#C9A24D]/30 p-8 text-white">
                <h3 className="text-2xl font-display font-bold mb-4">
                  Jam Operasional
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-semibold">Senin - Jumat</span>
                    <span className="font-bold">09:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Sabtu</span>
                    <span className="font-bold">09:00 - 14:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Minggu</span>
                    <span className="font-bold">Tutup</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
              Mengapa Konsultasi dengan <span className="text-[#C9A24D]">Kami</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#C9A24D] to-[#B89B5E] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[#C9A24D] to-[#B89B5E] flex items-center justify-center">
                <MessageCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#C9A24D]">Respon Cepat</h3>
              <p className="text-gray-300 font-semibold">Tim kami merespon dalam waktu singkat</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[#C9A24D] to-[#B89B5E] flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#C9A24D]">Gratis & Tanpa Kewajiban</h3>
              <p className="text-gray-300 font-semibold">Konsultasi gratis tanpa tekanan</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[#C9A24D] to-[#B89B5E] flex items-center justify-center">
                <Phone className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#C9A24D]">Tim Profesional</h3>
              <p className="text-gray-300 font-semibold">Konsultan ahli dengan pengalaman</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[#C9A24D] to-[#B89B5E] flex items-center justify-center">
                <Send className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#C9A24D]">Penawaran Transparan</h3>
              <p className="text-gray-300 font-semibold">Harga jelas dan tanpa biaya tersembunyi</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
