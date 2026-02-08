'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function KonsultasiPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    serviceType: '',
    message: '',
  });

  const serviceTypes = [
    { id: 'interior', name: 'Interior Design' },
    { id: 'eksterior', name: 'Eksterior Design' },
    { id: 'renovasi', name: 'Renovasi' },
    { id: 'custom', name: 'Custom Project' },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const phoneNumber = '6281251511997'; // NOMOR WA TUJUAN

    const serviceName =
      serviceTypes.find((s) => s.id === formData.serviceType)?.name || '-';

    const message = `
Halo TerraDekor 👋

Saya ingin konsultasi.

Nama: ${formData.name}
Email: ${formData.email}
WhatsApp: ${formData.whatsapp}
Jenis Layanan: ${serviceName}

Pesan:
${formData.message}
`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-20">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold mb-2 text-center">
          Konsultasi Gratis
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Isi form di bawah, kami akan langsung merespon via WhatsApp
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Nama Lengkap"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-4 py-3"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-4 py-3"
          />

          <input
            type="tel"
            name="whatsapp"
            placeholder="Nomor WhatsApp"
            value={formData.whatsapp}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-4 py-3"
          />

          <select
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            required
            className="w-full border rounded-lg px-4 py-3"
          >
            <option value="">Pilih Layanan</option>
            {serviceTypes.map((service) => (
              <option key={service.id} value={service.id}>
                {service.name}
              </option>
            ))}
          </select>

          <textarea
            name="message"
            placeholder="Jelaskan kebutuhan Anda"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            required
            className="w-full border rounded-lg px-4 py-3"
          />

          <Button
            type="submit"
            className="w-full bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold py-4 text-lg rounded-lg"
          >
            Kirim ke WhatsApp
          </Button>
        </form>

        <div className="text-center mt-6">
          <Link href="/" className="text-sm text-gray-500 hover:underline">
            ← Kembali ke Beranda
          </Link>
        </div>
      </div>
    </main>
  );
}