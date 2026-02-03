import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube, ShoppingBag } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#C9A24D] to-[#B89B5E] rounded-lg blur-sm opacity-50"></div>
                <div className="relative bg-gray-900 px-2 py-2 rounded-lg border border-[#C9A24D]">
                  <img
                    src="/logo.jpg"
                    alt="Terradekor Logo"
                    className="h-10 w-10 object-contain"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-display font-bold">
                  <span className="text-[#C9A24D]">Terradekor</span>
                  <span className="text-gray-300">.id</span>
                </h3>
              </div>
            </div>
            <p className="text-gray-300 font-semibold text-sm leading-relaxed">
              PT. Opulent Interior Indonesia - Solusi interior dan konstruksi premium dengan kualitas terbaik dan harga terjangkau.
            </p>
            <div className="flex space-x-3 pt-2">
              <a
                href="https://instagram.com/terradekor.id"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C9A24D] to-[#B89B5E] flex items-center justify-center hover:shadow-lg hover:scale-110 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://facebook.com/TERRADEKOR.ID"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1877F2] to-[#0D47A1] flex items-center justify-center hover:shadow-lg hover:scale-110 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://youtube.com/@TerradekorIndonesia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF0000] to-[#CC0000] flex items-center justify-center hover:shadow-lg hover:scale-110 transition-all duration-300"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://id.shp.ee/J876dcN"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-[#EE4D2D] to-[#C73E26] flex items-center justify-center hover:shadow-lg hover:scale-110 transition-all duration-300"
                aria-label="Shopee"
              >
                <ShoppingBag className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-display font-bold text-[#C9A24D]">Navigasi Cepat</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 font-semibold hover:text-[#C9A24D] transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/produk" className="text-gray-300 font-semibold hover:text-[#C9A24D] transition-colors">
                  Produk
                </Link>
              </li>
              <li>
                <Link href="/layanan" className="text-gray-300 font-semibold hover:text-[#C9A24D] transition-colors">
                  Layanan
                </Link>
              </li>
              <li>
                <Link href="/tentang" className="text-gray-300 font-semibold hover:text-[#C9A24D] transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/konsultasi" className="text-gray-300 font-semibold hover:text-[#C9A24D] transition-colors">
                  Konsultasi Gratis
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="text-lg font-display font-bold text-[#C9A24D]">Produk Populer</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/produk" className="text-gray-300 font-semibold hover:text-[#C9A24D] transition-colors">
                  Wall Panel Dinding
                </Link>
              </li>
              <li>
                <Link href="/produk" className="text-gray-300 font-semibold hover:text-[#C9A24D] transition-colors">
                  WPC Decking
                </Link>
              </li>
              <li>
                <Link href="/produk" className="text-gray-300 font-semibold hover:text-[#C9A24D] transition-colors">
                  Vinyl & SPC
                </Link>
              </li>
              <li>
                <Link href="/produk" className="text-gray-300 font-semibold hover:text-[#C9A24D] transition-colors">
                  Wallpaper
                </Link>
              </li>
              <li>
                <Link href="/produk" className="text-gray-300 font-semibold hover:text-[#C9A24D] transition-colors">
                  Pintu WPC & Baja
                </Link>
              </li>
              <li>
                <Link href="/produk" className="text-gray-300 font-semibold hover:text-[#C9A24D] transition-colors">
                  Furniture Custom
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-display font-bold text-[#C9A24D]">Hubungi Kami</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#C9A24D] mt-0.5 flex-shrink-0" />
                <div>
                  <a
                    href="https://maps.app.goo.gl/Z1519FAtZ2NztMH78"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 font-semibold text-sm leading-relaxed hover:text-[#C9A24D] transition-colors"
                  >
                    Pergudangan Pantai Indah Dadap Blok BJ 23, Kosambi, Tangerang, Banten 15213
                  </a>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#C9A24D] flex-shrink-0" />
                <a
                  href="mailto:ptopulentinteriors@gmail.com"
                  className="text-gray-300 font-semibold hover:text-[#C9A24D] transition-colors text-sm"
                >
                  ptopulentinteriors@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#C9A24D] flex-shrink-0" />
                <a
                  href="https://wa.me/6281251511997"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 font-semibold hover:text-[#C9A24D] transition-colors text-sm"
                >
                  0812-5151-1997
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 font-semibold text-sm text-center md:text-left">
              © {currentYear} PT. Opulent Interior Indonesia. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 text-sm">
              <Link href="/tentang" className="text-gray-400 font-semibold hover:text-[#C9A24D] transition-colors">
                Tentang Kami
              </Link>
              <span className="text-gray-600">|</span>
              <Link href="/kontak" className="text-gray-400 font-semibold hover:text-[#C9A24D] transition-colors">
                Kontak
              </Link>
              <span className="text-gray-600">|</span>
              <Link href="/konsultasi" className="text-gray-400 font-semibold hover:text-[#C9A24D] transition-colors">
                Konsultasi
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
