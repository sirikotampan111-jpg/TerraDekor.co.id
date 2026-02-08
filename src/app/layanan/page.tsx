'use client';

import Image from 'next/image';
import Link from 'next/link';
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
    image: '/service-interior-rumah.jpg',
  },
  {
    id: 2,
    title: 'Jasa Interior Kantor',
    description:
      'Penataan dan pengerjaan interior kantor dan ruang kerja.',
    image: '/service-interior-kantor.jpg',
  },
  {
    id: 3,
    title: 'Jasa Interior Apartemen',
    description:
      'Pengerjaan interior apartemen agar lebih fungsional dan nyaman.',
    image: '/service-apartemen.jpg',
  },
  {
    id: 4,
    title: 'Jasa Interior Komersial',
    description:
      'Interior café, restoran, toko, showroom, dan ruang usaha.',
    image: '/service-komersial.jpg',
  },
  {
    id: 5,
    title: 'Fit Out Interior',
    description:
      'Pengerjaan interior dari kondisi kosong hingga siap digunakan.',
    image: '/service-fitout.jpg',
  },
  {
    id: 6,
    title: 'Pekerjaan Eksterior Bangunan',
    description:
      'Pengerjaan area luar bangunan seperti fasad, kanopi, dan pagar.',
    image: '/service-eksterior.jpg',
  },
  {
    id: 7,
    title: 'Renovasi Bangunan',
    description:
      'Renovasi bangunan lama menjadi lebih modern dan fungsional.',
    image: '/service-renovasi.jpg',
  },
  {
    id: 8,
    title: 'Jasa Konstruksi Bangunan',
    description:
      'Pembangunan bangunan dari awal hingga selesai.',
    image: '/service-konstruksi.jpg',
  },
  {
    id: 9,
    title: 'Jasa Kontraktor Umum',
    description:
      'Pelaksanaan proyek bangunan secara profesional dan terencana.',
    image: '/service-kontraktor.jpg',
  },
  {
    id: 10,
    title: 'Jasa Desain & Perencanaan',
    description:
      'Perencanaan desain bangunan dan interior sebelum pengerjaan.',
    image: '/service-desain.jpg',
  },
];

export default function LayananPage() {
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
              className="border rounded-xl overflow-hidden hover:shadow-lg transition"
            >
              <div className="relative w-full h-48">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {service.description}
                </p>

                <Link href="/konsultasi">
                  <Button className="w-full">
                    Konsultasi Sekarang
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}