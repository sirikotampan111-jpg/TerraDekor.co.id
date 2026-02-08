'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import FloatingWhatsApp from '@/components/layout/FloatingWhatsApp';

// Types untuk layanan
interface Service {
  id: number;
  image: string;
  title: string;
  description: string;
}

// Default data layanan
const defaultServices: Service[] = [
  {
    id: 1,
    image: '/service-office.jpg',
    title: 'Interior Kantor & Co-working Space',
    description:
      'Desain dan pemasangan interior kantor modern dan fungsional untuk produktivitas tim',
  },
  {
    id: 2,
    image: '/service-home.jpg',
    title: 'Interior Rumah',
    description:
      'Transformasi rumah menjadi ruang nyaman dan estetis sesuai gaya hidup Anda',
  },
  {
    id: 3,
    image: '/service-apartment.jpg',
    title: 'Interior Apartment',
    description:
      'Solusi interior apartment compact yang maksimal dan elegan',
  },
];

export default function LayananPage() {
  const [services, setServices] = useState<Service[]>(defaultServices);

  useEffect(() => {
    const loadServices = async () => {
      try {
        const response = await fetch('/services-data.json');
        if (response.ok) {
          const data = await response.json();
          setServices(data.services || defaultServices);
        } else {
          setServices(defaultServices);
        }
      } catch {
        setServices(defaultServices);
      }
    };

    loadServices();
  }, []);

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <FloatingWhatsApp />

      {/* HEADER */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/background.jpg"
            alt="Background"
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <Link href="/">
              <Button variant="ghost" className="text-white hover:bg-white/10">
                Beranda
              </Button>
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-[#C9A24D] font-bold text-xl">
              Layanan
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-4">
            Layanan Interior &{' '}
            <span className="text-[#C9A24D]">Konstruksi</span>
          </h1>
          <p className="text-xl text-gray-300 font-semibold max-w-3xl">
            Solusi lengkap dari desain, konstruksi, hingga pemasangan profesional
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Layanan <span className="text-[#C9A24D]">Kami</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#C9A24D] to-[#B89B5E] mx-auto rounded-full" />
            <p className="text-lg text-gray-700 font-semibold mt-8 max-w-2xl mx-auto">
              Kami menyediakan berbagai layanan interior untuk memenuhi kebutuhan Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card
                key={service.id}
                className="bg-white border-2 border-gray-200 overflow-hidden hover:border-[#C9A24D] transition-all duration-300 hover:shadow-2xl hover:scale-105"
              >
                {service.image && (
                  <div className="aspect-[16/10] bg-gray-200 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  </div>
                )}

                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 font-semibold">
                    {service.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#C9A24D] via-[#D4AF6A] to-[#B89B5E]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Siap Mewujudkan Ruang Impian Anda?
          </h2>
          <p className="text-xl text-white/90 font-semibold mb-8">
            Konsultasi gratis dengan tim profesional kami
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/konsultasi">
              <Button className="bg-white text-[#C9A24D] font-bold px-8 py-4 text-lg">
                Konsultasi Gratis
              </Button>
            </Link>

            <a
              href="https://wa.me/6281251511997"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 text-white font-bold px-8 py-4 text-lg rounded-lg"
            >
              WhatsApp Kami
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 py-8 border-t border-[#C9A24D]/20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-300">
          <div>
            <h3 className="text-xl font-bold text-[#C9A24D] mb-2">
              Tentang Kami
            </h3>
            <p className="font-semibold">
              PT. Opulent Interior Indonesia – solusi interior premium
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#C9A24D] mb-2">
              Jam Operasional
            </h3>
            <p>Senin – Jumat: 09.00 – 17.00</p>
            <p>Sabtu: 09.00 – 14.00</p>
            <p>Minggu: Tutup</p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-[#C9A24D] mb-2">
              Hubungi Kami
            </h3>
            <p>WhatsApp: 0812-5151-1997</p>
          </div>
        </div>
      </footer>
    </div>
  );
}