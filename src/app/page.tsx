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

      {/* HEADER */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-white">
            Konsultasi <span className="text-[#C9A24D]">Gratis</span>
          </h1>
        </div>
      </section>

      {/* FORM */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <Card className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input name="name" placeholder="Nama" onChange={handleChange} />
                <Input name="email" placeholder="Email" onChange={handleChange} />
                <Input name="whatsapp" placeholder="WhatsApp" onChange={handleChange} />
                <Textarea name="message" placeholder="Pesan" onChange={handleChange} />
                <Button type="submit">
                  {isSubmitting ? 'Mengirim...' : 'Kirim'}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* ================= MENGAPA MEMILIH KAMI ================= */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12">
            Mengapa Memilih <span className="text-[#C9A24D]">Kami</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              ['Terima Beres', 'Dari desain hingga pemasangan, kami tangani profesional.'],
              ['Kualitas Premium', 'Material berkualitas tinggi standar internasional.'],
              ['Harga Terjangkau', 'Solusi premium dengan harga kompetitif dan transparan.'],
              ['Tim Profesional', 'Ahli berpengalaman di interior & konstruksi.'],
              ['Material Berkualitas', 'Produk import & lokal terbaik.'],
              ['Tepat Waktu', 'Penyelesaian proyek sesuai jadwal.'],
            ].map(([title, desc], i) => (
              <Card key={i} className="relative overflow-hidden h-64">
                <img
                  src="https://via.placeholder.com/600x400"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="relative bg-black/60 h-full p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-bold text-[#C9A24D]">{title}</h3>
                  <p className="text-white font-semibold text-sm">{desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PRODUK & LAYANAN ================= */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">
            Produk & Layanan <span className="text-[#C9A24D]">Premium</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              ['Wall Panel', 'Wall panel dinding premium dengan berbagai desain.'],
              ['Wallpaper', 'Wallpaper 2D & 3D untuk mempercantik ruangan.'],
              ['Vinyl & SPC', 'Lantai vinyl & SPC motif realistik.'],
              ['WPC Decking', 'Decking tahan cuaca untuk outdoor/semi-outdoor.'],
              ['Pintu WPC & Baja', 'Pintu modern & tahan lama.'],
              ['Jasa Interior', 'Desain & pemasangan interior komprehensif.'],
            ].map(([title, desc], i) => (
              <Card key={i} className="relative overflow-hidden h-64">
                <img
                  src="https://via.placeholder.com/600x400"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="relative bg-black/60 h-full p-6 flex flex-col justify-end">
                  <h3 className="text-xl font-bold text-[#C9A24D]">{title}</h3>
                  <p className="text-white font-semibold text-sm">{desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
