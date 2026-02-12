'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';

type Service = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const services: Service[] = [
  {
    id: 1,
    title: 'Jasa Interior Rumah',
    description:
      'Perencanaan dan pengerjaan interior rumah tinggal secara profesional.',
    image: '/rumah1.jpg',
  },
  {
    id: 2,
    title: 'Jasa Interior Kantor',
    description:
      'Penataan dan pengerjaan interior kantor dan ruang kerja.',
    image: '/interior-kantor.jpg',
  },
  {
    id: 3,
    title: 'Jasa Interior Apartemen',
    description:
      'Pengerjaan interior apartemen agar lebih fungsional dan nyaman.',
    image: '/apartment.jpg',
  },
  {
    id: 4,
    title: 'Jasa Interior Komersial',
    description:
      'Interior café, restoran, toko, showroom, dan ruang usaha.',
    image: '/rumah-makan.jpg',
  },
  {
    id: 5,
    title: 'Fit Out Interior',
    description:
      'Pengerjaan interior dari kondisi kosong hingga siap digunakan.',
    image: '/full.jpg',
  },
  {
    id: 6,
    title: 'Pekerjaan Eksterior Bangunan',
    description:
      'Pengerjaan area luar bangunan seperti fasad, kanopi, dan pagar.',
    image: '/luar.jpg',
  },
  {
    id: 7,
    title: 'Renovasi Bangunan',
    description:
      'Renovasi bangunan lama menjadi lebih modern dan fungsional.',
    image: '/renovasi.jpg',
  },
  {
    id: 8,
    title: 'Jasa Konstruksi Bangunan',
    description:
      'Pembangunan bangunan dari awal hingga selesai.',
    image: '/kontruksi.jpg',
  },
  {
    id: 9,
    title: 'Jasa Kontraktor Umum',
    description:
      'Pelaksanaan proyek bangunan secara profesional dan terencana.',
    image: '/kontraktor.jpg',
  },
  {
    id: 10,
    title: 'Jasa Desain & Perencanaan',
    description:
      'Perencanaan desain bangunan dan interior sebelum pengerjaan.',
    image: '/desain.jpg',
  },
];

export default function LayananPage() {

  const getWhatsAppLink = (service: Service) => {
    return `https://wa.me/6281251511997?text=${encodeURIComponent(
      `Halo Terradekor, saya ingin konsultasi mengenai layanan: ${service.title}`
    )}`;
  };

  return (
    <main className="min-h-screen bg-white">

      {/* HEADER */}
      <section className="px-6 py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Layanan Kami
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Kami menyediakan berbagai jasa konstruksi, kontraktor,
          dan interior dengan standar profesional.
        </p>
      </section>

      {/* LIST LAYANAN */}
      <section className="px-6 pb-20">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {services.map((service) => (
            <div
              key={service.id}
              className="border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
            >

              {/* IMAGE CLICKABLE */}
              <a
                href={getWhatsAppLink(service)}
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-full h-48 block group cursor-pointer"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
                  <span className="bg-[#C9A24D] text-white px-4 py-2 rounded-lg font-semibold shadow-lg">
                    Klik untuk Konsultasi
                  </span>
                </div>
              </a>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4">
                  {service.description}
                </p>

                <a
                  href={getWhatsAppLink(service)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-[#C9A24D] hover:bg-[#B89B5E] text-white">
                    Konsultasi Sekarang
                  </Button>
                </a>

              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
