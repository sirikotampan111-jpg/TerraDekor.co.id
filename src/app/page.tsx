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
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSuccess(true);
    setIsSubmitting(false);
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

            {/* Form Card */}
            <div className="lg:col-span-3">
              <Card className="relative overflow-hidden border-2 border-gray-200 shadow-xl">
                <img
                  src="https://via.placeholder.com/1200x800"
                  alt="placeholder"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="relative bg-white/90 p-8">
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
                    {/* FORM ISI TIDAK DIUBAH */}
                    {/* ... */}
                  </form>
                </div>
              </Card>
            </div>

            {/* Sidebar Cards */}
            <div className="lg:col-span-2 space-y-6">

              {[
                'https://via.placeholder.com/600x400',
                'https://via.placeholder.com/600x400',
                'https://via.placeholder.com/600x400'
              ].map((img, i) => (
                <Card key={i} className="relative overflow-hidden border-2 border-gray-200">
                  <img
                    src={img}
                    alt="placeholder"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="relative bg-white/85 p-8">
                    <p className="font-bold text-gray-900">
                      Placeholder konten card #{i + 1}
                    </p>
                  </div>
                </Card>
              ))}

            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i} className="relative overflow-hidden">
              <img
                src="https://via.placeholder.com/500x500"
                alt="placeholder"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="relative bg-black/60 p-8 text-center text-white">
                <p className="font-bold">Placeholder Benefit {i}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
         }
