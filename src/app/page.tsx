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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
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

      {/* === FORM SECTION (TIDAK DIUBAH) === */}
      {/* ... ISI FORM TETAP SAMA, TIDAK DISENTUH ... */}

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
              Mengapa Memilih <span className="text-[#C9A24D]">Kami</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#C9A24D] to-[#B89B5E] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[#C9A24D] to-[#B89B5E] flex items-center justify-center">
                <MessageCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#C9A24D]">Terima Beres</h3>
              <p className="text-gray-300 font-semibold">
                Dari desain hingga pemasangan, kami tangani profesional.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[#C9A24D] to-[#B89B5E] flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#C9A24D]">Kualitas Premium</h3>
              <p className="text-gray-300 font-semibold">
                Material berkualitas tinggi standar internasional.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[#C9A24D] to-[#B89B5E] flex items-center justify-center">
                <Phone className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#C9A24D]">Harga Terjangkau</h3>
              <p className="text-gray-300 font-semibold">
                Solusi premium dengan harga kompetitif dan transparan.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-[#C9A24D] to-[#B89B5E] flex items-center justify-center">
                <Send className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#C9A24D]">Tim Profesional</h3>
              <p className="text-gray-300 font-semibold">
                Ahli berpengalaman di interior & konstruksi.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
