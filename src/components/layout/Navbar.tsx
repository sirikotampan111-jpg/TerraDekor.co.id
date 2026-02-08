'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Beranda', href: '/' },
    { name: 'Produk', href: '/produk' },
    { name: 'Layanan', href: '/layanan' },
    { name: 'Portofolio', href: '/portofolio' },
    { name: 'Tentang Kami', href: '/tentang' },
    { name: 'Kontak', href: '/kontak' },
    { name: 'Admin', href: '/admin' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-2xl'
          : 'bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <img
              src="/logo.jpg"
              alt="Terradekor Logo"
              className="h-10 w-10 object-contain"
            />
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-white">
                <span className="text-[#C9A24D]">Terradekor</span>
                <span className="text-gray-300">.id</span>
              </h1>
              <p className="text-xs text-gray-400">Solusi Interior Premium</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 rounded-lg text-white font-semibold hover:text-[#C9A24D] hover:bg-white/10 transition"
              >
                {item.name}
              </Link>
            ))}
            <Link href="/konsultasi">
              <Button className="ml-4 bg-gradient-to-r from-[#C9A24D] to-[#B89B5E] text-white font-bold">
                <MessageSquare className="w-4 h-4 mr-2" />
                Konsultasi Gratis
              </Button>
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-gray-900 px-4 pb-6 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 rounded-lg text-white hover:bg-white/10"
            >
              {item.name}
            </Link>
          ))}
          <Link href="/konsultasi" onClick={() => setIsOpen(false)}>
            <Button className="w-full mt-4 bg-gradient-to-r from-[#C9A24D] to-[#B89B5E] text-white font-bold">
              Konsultasi Gratis
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
}