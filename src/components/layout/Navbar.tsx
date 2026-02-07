'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { 
  Menu, X, Home, Package, Wrench, Users, Phone, MessageSquare, Image, shield 
} from 'lucide-react';
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
    { name: 'Beranda', href: '/', icon: Home },
    { name: 'Produk', href: '/produk', icon: Package },
    { name: 'Layanan', href: '/layanan', icon: Wrench },
    { name: 'Portofolio', href: '/portofolio', icon: Image },
    { name: 'Tentang Kami', href: '/tentang', icon: Users },
    { name: 'Kontak', href: '/kontak', icon: Phone },
    { name: 'Admin', href: '/admin', icon: Shield },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-2xl' : 'bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#C9A24D] to-[#B89B5E] rounded-lg blur-sm opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative bg-gray-900 px-2 py-2 rounded-lg border border-[#C9A24D]">
                <img
                  src="/logo.jpg"
                  alt="Terradekor Logo"
                  className="h-10 w-10 object-contain"
                />
              </div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-display font-bold text-white">
                <span className="text-[#C9A24D]">Terradekor</span>
                <span className="text-gray-300">.id</span>
              </h1>
              <p className="text-xs text-gray-400 font-medium">Solusi Interior Premium</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg text-white font-semibold hover:text-[#C9A24D] hover:bg-white/10 transition-all duration-200 group"
              >
                <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>{item.name}</span>
              </Link>
            ))}
            <Link href="/konsultasi">
              <Button
                className="ml-4 bg-gradient-to-r from-[#C9A24D] to-[#B89B5E] hover:from-[#D4AF6A] hover:to-[#C9A24D] text-white font-bold px-6 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Konsultasi Gratis
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2 bg-gradient-to-b from-gray-900 to-gray-800 border-t border-[#C9A24D]/20">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center space-x-3 px-4 py-3 rounded-lg text-white font-semibold hover:text-[#C9A24D] hover:bg-white/10 transition-all duration-200"
            >
              <item.icon className="w-5 h-5" />
              <span className="text-base">{item.name}</span>
            </Link>
          ))}
          <Link href="/konsultasi" onClick={() => setIsOpen(false)}>
            <Button className="w-full bg-gradient-to-r from-[#C9A24D] to-[#B89B5E] hover:from-[#D4AF6A] hover:to-[#C9A24D] text-white font-bold px-6 py-3 rounded-lg shadow-lg mt-4">
              <MessageSquare className="w-5 h-5 mr-2" />
              Konsultasi Gratis
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
