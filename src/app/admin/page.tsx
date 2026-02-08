'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Settings, LogOut, Save, Plus, Trash2, Loader2, AlertCircle,
  Home, Edit3, Image as ImageIcon, Layout, Package, Info, Phone,
  CheckCircle2, TrendingUp, Award, Shield, Star, Zap, Clock,
  Globe, Instagram, Facebook, Linkedin, Share2
} from 'lucide-react';

interface Product {
  id: number;
  name: string;
  category: string;
  code: string;
  price: string;
  description: string;
  image: string;
}

interface HomeData {
  hero: {
    badge: string;
    heading: string;
    subheading: string;
  };
  about: {
    heading: string;
    description1: string;
    description2: string;
  };
  advantages: {
    heading: string;
    items: Array<{ title: string; description: string }>;
  };
  highlights: {
    heading: string;
    description: string;
    items: Array<{ title: string; description: string; icon: string }>;
  };
  cta: {
    heading: string;
    description: string;
  };
}

interface AboutData {
  hero: {
    badge: string;
    heading: string;
    subheading: string;
  };
  companyInfo: {
    heading: string;
    tagline: string;
    description: string;
  };
  vision: {
    heading: string;
    description: string;
  };
  mission: {
    heading: string;
    items: string[];
  };
  values: {
    heading: string;
    items: Array<{ title: string; description: string }>;
  };
  stats: {
    heading: string;
    items: Array<{ number: string; label: string }>;
  };
}

interface ContactData {
  hero: {
    badge: string;
    heading: string;
    subheading: string;
  };
  contactInfo: {
    heading: string;
    items: Array<{ label: string; value: string; link: string | null; icon: string }>;
  };
  officeHours: {
    heading: string;
    items: Array<{ day: string; hours: string }>;
  };
  socialMedia: {
    heading: string;
    platforms: Array<{ name: string; url: string; icon: string }>;
  };
  form: {
    heading: string;
    description: string;
  };
}

interface Service {
  image: string;
  title: string;
  description: string;
  color: string;
}

interface PortfolioItem {
  image: string;
  title: string;
  category: string;
}

export default function AdminDashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [activeTab, setActiveTab] = useState('layanan');

  const [homeData, setHomeData] = useState<HomeData | null>(null);
  const [aboutData, setAboutData] = useState<AboutData | null>(null);
  const [contactData, setContactData] = useState<ContactData | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [services, setServices] = useState<Service[]>([]);
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>([]);

  useEffect(() => {
    checkAuth();
    loadAllData();
  }, []);

  const checkAuth = async () => {
    try {
      const response = await fetch('/api/admin/session');
      const data = await response.json();
      if (!data.authenticated) router.push('/admin/login');
    } catch (err) {
      router.push('/admin/login');
    } finally {
      setLoading(false);
    }
  };

  const loadAllData = async () => {
    await Promise.all([loadHomeData(), loadAboutData(), loadContactData(), loadProductsData(), loadServicesData(), loadPortfolioData()]);
  };

  const loadHomeData = async () => {
    try {
      const response = await fetch('/api/admin/home');
      const data = await response.json();
      if (response.ok && data.data) setHomeData(data.data);
    } catch (err) {
      console.error('Load home data error:', err);
    }
  };

  const loadAboutData = async () => {
    try {
      const response = await fetch('/api/admin/about');
      const data = await response.json();
      if (response.ok && data.data) setAboutData(data.data);
    } catch (err) {
      console.error('Load about data error:', err);
    }
  };

  const loadContactData = async () => {
    try {
      const response = await fetch('/api/admin/contact');
      const data = await response.json();
      if (response.ok && data.data) setContactData(data.data);
    } catch (err) {
      console.error('Load contact data error:', err);
    }
  };

  const loadProductsData = async () => {
    try {
      const response = await fetch('/api/admin/products');
      const data = await response.json();
      if (response.ok && data.data) setProducts(data.data);
    } catch (err) {
      console.error('Load products error:', err);
    }
  };

  const loadServicesData = async () => {
    try {
      const response = await fetch('/api/admin/services');
      const data = await response.json();
      if (response.ok && data.services) setServices(data.services);
    } catch (err) {
      console.error('Load services error:', err);
    }
  };

  const loadPortfolioData = async () => {
    try {
      const response = await fetch('/api/admin/portfolio');
      const data = await response.json();
      if (response.ok && data.portfolio) setPortfolio(data.portfolio);
    } catch (err) {
      console.error('Load portfolio error:', err);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/admin/logout', { method: 'POST' });
      router.push('/admin/login');
    } catch (err) {
      router.push('/admin/login');
    }
  };

  const handleSaveHome = async () => {
    if (!homeData) return;
    setSaving(true);
    setError('');
    try {
      const response = await fetch('/api/admin/home', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: homeData }),
      });
      const data = await response.json();
      if (response.ok) {
        setSuccess('Data halaman home berhasil disimpan!');
        setTimeout(() => setSuccess(''), 3000);
      } else {
        setError(data.error || 'Gagal menyimpan data');
      }
    } catch (err) {
      setError('Terjadi kesalahan saat menyimpan');
    } finally {
      setSaving(false);
    }
  };

  const handleSaveAbout = async () => {
    if (!aboutData) return;
    setSaving(true);
    setError('');
    try {
      const response = await fetch('/api/admin/about', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: aboutData }),
      });
      const data = await response.json();
      if (response.ok) {
        setSuccess('Data halaman tentang kami berhasil disimpan!');
        setTimeout(() => setSuccess(''), 3000);
      } else {
        setError(data.error || 'Gagal menyimpan data');
      }
    } catch (err) {
      setError('Terjadi kesalahan saat menyimpan');
    } finally {
      setSaving(false);
    }
  };

  const handleSaveContact = async () => {
    if (!contactData) return;
    setSaving(true);
    setError('');
    try {
      const response = await fetch('/api/admin/contact', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: contactData }),
      });
      const data = await response.json();
      if (response.ok) {
        setSuccess('Data halaman kontak berhasil disimpan!');
        setTimeout(() => setSuccess(''), 3000);
      } else {
        setError(data.error || 'Gagal menyimpan data');
      }
    } catch (err) {
      setError('Terjadi kesalahan saat menyimpan');
    } finally {
      setSaving(false);
    }
  };

  const handleSaveProducts = async () => {
    setSaving(true);
    setError('');
    try {
      const response = await fetch('/api/admin/products', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: products }),
      });
      const data = await response.json();
      if (response.ok) {
        setSuccess('Data produk berhasil disimpan!');
        setTimeout(() => setSuccess(''), 3000);
      } else {
        setError(data.error || 'Gagal menyimpan data');
      }
    } catch (err) {
      setError('Terjadi kesalahan saat menyimpan');
    } finally {
      setSaving(false);
    }
  };

  const handleSaveServices = async () => {
    setSaving(true);
    setError('');
    try {
      const response = await fetch('/api/admin/services', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ services }),
      });
      const data = await response.json();
      if (response.ok) {
        setSuccess('Data layanan berhasil disimpan!');
        setTimeout(() => setSuccess(''), 3000);
      } else {
        setError(data.error || 'Gagal menyimpan data');
      }
    } catch (err) {
      setError('Terjadi kesalahan saat menyimpan');
    } finally {
      setSaving(false);
    }
  };

  const handleSavePortfolio = async () => {
    setSaving(true);
    setError('');
    try {
      const response = await fetch('/api/admin/portfolio', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ portfolio }),
      });
      const data = await response.json();
      if (response.ok) {
        setSuccess('Data portofolio berhasil disimpan!');
        setTimeout(() => setSuccess(''), 3000);
      } else {
        setError(data.error || 'Gagal menyimpan data');
      }
    } catch (err) {
      setError('Terjadi kesalahan saat menyimpan');
    } finally {
      setSaving(false);
    }
  };

  const handleAddProduct = () => {
    setProducts([...products, { id: Date.now(), name: 'Produk Baru', category: 'wallpaper', code: '', price: 'Hubungi Kami', description: '', image: '' }]);
  };

  const handleDeleteProduct = (id: number) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  const handleAddService = () => {
    setServices([...services, { image: '', title: 'Layanan Baru', description: 'Deskripsi layanan', color: 'from-gray-500 to-gray-700' }]);
  };

  const handleDeleteService = (index: number) => {
    setServices(services.filter((_, i) => i !== index));
  };

  const handleAddPortfolio = () => {
    setPortfolio([...portfolio, { image: '', title: 'Portofolio Baru', category: 'Kategori' }]);
  };

  const handleDeletePortfolio = (index: number) => {
    setPortfolio(portfolio.filter((_, i) => i !== index));
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-[#C9A24D] animate-spin mx-auto mb-4" />
          <p className="text-white font-semibold">Memuat dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <header className="bg-black/20 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Settings className="w-8 h-8 text-[#C9A24D]" />
              <div>
                <h1 className="text-2xl font-bold text-white">Dashboard Admin</h1>
                <p className="text-sm text-gray-400">Kelola semua konten website</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Link href="/"><Button variant="ghost" className="text-[#C9A24D] hover:bg-[#C9A24D]/10"><Home className="w-4 h-4 mr-2" />Lihat Website</Button></Link>
              <Button onClick={handleLogout} variant="outline" className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"><LogOut className="w-4 h-4 mr-2" />Logout</Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {error && (
          <div className="mb-6 flex items-center space-x-2 p-4 bg-red-500/20 border border-red-500/50 rounded-lg">
            <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
            <p className="text-red-500 font-semibold">{error}</p>
          </div>
        )}

        {success && (
          <div className="mb-6 flex items-center space-x-2 p-4 bg-green-500/20 border border-green-500/50 rounded-lg">
            <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
            <p className="text-green-500 font-semibold">{success}</p>
          </div>
        )}

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="bg-gray-800 border border-gray-700 w-full justify-start mb-8">
            <TabsTrigger value="layanan" className="data-[state=active]:bg-[#C9A24D] data-[state=active]:text-white"><Layout className="w-4 h-4 mr-2" />Layanan</TabsTrigger>
            <TabsTrigger value="portofolio" className="data-[state=active]:bg-[#C9A24D] data-[state=active]:text-white"><Share2 className="w-4 h-4 mr-2" />Portofolio</TabsTrigger>
            <TabsTrigger value="produk" className="data-[state=active]:bg-[#C9A24D] data-[state=active]:text-white"><Package className="w-4 h-4 mr-2" />Produk</TabsTrigger>
            <TabsTrigger value="home" className="data-[state=active]:bg-[#C9A24D] data-[state=active]:text-white"><Home className="w-4 h-4 mr-2" />Home</TabsTrigger>
            <TabsTrigger value="about" className="data-[state=active]:bg-[#C9A24D] data-[state=active]:text-white"><Info className="w-4 h-4 mr-2" />Tentang Kami</TabsTrigger>
            <TabsTrigger value="contact" className="data-[state=active]:bg-[#C9A24D] data-[state=active]:text-white"><Phone className="w-4 h-4 mr-2" />Kontak</TabsTrigger>
          </TabsList>

          <TabsContent value="layanan" className="space-y-6">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-white text-2xl flex items-center"><Edit3 className="w-6 h-6 mr-3 text-[#C9A24D]" />Kelola Layanan</CardTitle>
                    <p className="text-gray-400 mt-2">Edit judul, deskripsi, dan foto untuk setiap layanan</p>
                  </div>
                  <Button onClick={handleAddService} className="bg-gradient-to-r from-[#C9A24D] to-[#B89B5E] hover:from-[#D4AF6A] hover:to-[#C9A24D] text-white font-bold"><Plus className="w-4 h-4 mr-2" />Tambah Layanan</Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {services.map((service, index) => (
                    <Card key={index} className="bg-gray-900/50 border-gray-700 overflow-hidden">
                      <div className="p-6 space-y-4">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-lg font-bold text-[#C9A24D]">Layanan #{index + 1}</h3>
                          <Button onClick={() => handleDeleteService(index)} variant="destructive" size="sm" className="bg-red-600 hover:bg-red-700"><Trash2 className="w-4 h-4 mr-2" />Hapus</Button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300 flex items-center"><ImageIcon className="w-4 h-4 mr-2 text-[#C9A24D]" />URL Foto</label>
                            <Input value={service.image} onChange={(e) => { const newServices = [...services]; newServices[index] = { ...newServices[index], image: e.target.value }; setServices(newServices); }} placeholder="/service-nama.jpg" className="bg-gray-800 border-gray-700 text-white placeholder-gray-500" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Warna Gradient</label>
                            <Input value={service.color} onChange={(e) => { const newServices = [...services]; newServices[index] = { ...newServices[index], color: e.target.value }; setServices(newServices); }} placeholder="from-blue-500 to-blue-700" className="bg-gray-800 border-gray-700 text-white placeholder-gray-500" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-300">Judul Layanan</label>
                          <Input value={service.title} onChange={(e) => { const newServices = [...services]; newServices[index] = { ...newServices[index], title: e.target.value }; setServices(newServices); }} placeholder="Nama layanan" className="bg-gray-800 border-gray-700 text-white placeholder-gray-500" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-300">Deskripsi</label>
                          <Textarea value={service.description} onChange={(e) => { const newServices = [...services]; newServices[index] = { ...newServices[index], description: e.target.value }; setServices(newServices); }} placeholder="Deskripsi layanan" rows={3} className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 resize-none" />
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
            <div className="flex justify-center">
              <Button onClick={handleSaveServices} disabled={saving} size="lg" className="bg-gradient-to-r from-[#C9A24D] to-[#B89B5E] hover:from-[#D4AF6A] hover:to-[#C9A24D] text-white font-bold px-12 py-4 text-lg shadow-xl">
                {saving ? <><Loader2 className="w-5 h-5 mr-2 animate-spin" />Menyimpan...</> : <><Save className="w-5 h-5 mr-2" />Simpan Layanan</>}
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="portofolio" className="space-y-6">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-white text-2xl flex items-center"><Share2 className="w-6 h-6 mr-3 text-[#C9A24D]" />Kelola Portofolio</CardTitle>
                    <p className="text-gray-400 mt-2">Edit judul, kategori, dan foto untuk setiap portofolio</p>
                  </div>
                  <Button onClick={handleAddPortfolio} className="bg-gradient-to-r from-[#C9A24D] to-[#B89B5E] hover:from-[#D4AF6A] hover:to-[#C9A24D] text-white font-bold"><Plus className="w-4 h-4 mr-2" />Tambah Portofolio</Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {portfolio.map((item, index) => (
                    <Card key={index} className="bg-gray-900/50 border-gray-700 overflow-hidden">
                      <div className="p-6 space-y-4">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-lg font-bold text-[#C9A24D]">Portofolio #{index + 1}</h3>
                          <Button onClick={() => handleDeletePortfolio(index)} variant="destructive" size="sm" className="bg-red-600 hover:bg-red-700"><Trash2 className="w-4 h-4 mr-2" />Hapus</Button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Judul Portofolio</label>
                            <Input value={item.title} onChange={(e) => { const newPortfolio = [...portfolio]; newPortfolio[index] = { ...newPortfolio[index], title: e.target.value }; setPortfolio(newPortfolio); }} placeholder="Judul portofolio" className="bg-gray-800 border-gray-700 text-white placeholder-gray-500" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Kategori</label>
                            <Input value={item.category} onChange={(e) => { const newPortfolio = [...portfolio]; newPortfolio[index] = { ...newPortfolio[index], category: e.target.value }; setPortfolio(newPortfolio); }} placeholder="Kategori" className="bg-gray-800 border-gray-700 text-white placeholder-gray-500" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300 flex items-center"><ImageIcon className="w-4 h-4 mr-2 text-[#C9A24D]" />URL Foto</label>
                            <Input value={item.image} onChange={(e) => { const newPortfolio = [...portfolio]; newPortfolio[index] = { ...newPortfolio[index], image: e.target.value }; setPortfolio(newPortfolio); }} placeholder="/portfolio-nama.jpg" className="bg-gray-800 border-gray-700 text-white placeholder-gray-500" />
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
            <div className="flex justify-center">
              <Button onClick={handleSavePortfolio} disabled={saving} size="lg" className="bg-gradient-to-r from-[#C9A24D] to-[#B89B5E] hover:from-[#D4AF6A] hover:to-[#C9A24D] text-white font-bold px-12 py-4 text-lg shadow-xl">
                {saving ? <><Loader2 className="w-5 h-5 mr-2 animate-spin" />Menyimpan...</> : <><Save className="w-5 h-5 mr-2" />Simpan Portofolio</>}
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="produk" className="space-y-6">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-white text-2xl flex items-center"><Package className="w-6 h-6 mr-3 text-[#C9A24D]" />Kelola Produk</CardTitle>
                    <p className="text-gray-400 mt-2">Edit semua produk (nama, deskripsi, harga, kategori, foto)</p>
                  </div>
                  <Button onClick={handleAddProduct} className="bg-gradient-to-r from-[#C9A24D] to-[#B89B5E] hover:from-[#D4AF6A] hover:to-[#C9A24D] text-white font-bold"><Plus className="w-4 h-4 mr-2" />Tambah Produk</Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {products.map((product) => (
                    <Card key={product.id} className="bg-gray-900/50 border-gray-700 overflow-hidden">
                      <div className="p-6 space-y-4">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-lg font-bold text-[#C9A24D]">Produk #{product.id}</h3>
                          <Button onClick={() => handleDeleteProduct(product.id)} variant="destructive" size="sm" className="bg-red-600 hover:bg-red-700"><Trash2 className="w-4 h-4 mr-2" />Hapus</Button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Nama Produk</label>
                            <Input value={product.name} onChange={(e) => { const newProducts = [...products]; const idx = newProducts.findIndex(p => p.id === product.id); newProducts[idx] = { ...newProducts[idx], name: e.target.value }; setProducts(newProducts); }} placeholder="Nama produk" className="bg-gray-800 border-gray-700 text-white placeholder-gray-500" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Kode Produk</label>
                            <Input value={product.code} onChange={(e) => { const newProducts = [...products]; const idx = newProducts.findIndex(p => p.id === product.id); newProducts[idx] = { ...newProducts[idx], code: e.target.value }; setProducts(newProducts); }} placeholder="KODE-01" className="bg-gray-800 border-gray-700 text-white placeholder-gray-500" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Kategori</label>
                            <Input value={product.category} onChange={(e) => { const newProducts = [...products]; const idx = newProducts.findIndex(p => p.id === product.id); newProducts[idx] = { ...newProducts[idx], category: e.target.value }; setProducts(newProducts); }} placeholder="wallpaper, vinylspc, dll" className="bg-gray-800 border-gray-700 text-white placeholder-gray-500" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-300">Harga</label>
                            <Input value={product.price} onChange={(e) => { const newProducts = [...products]; const idx = newProducts.findIndex(p => p.id === product.id); newProducts[idx] = { ...newProducts[idx], price: e.target.value }; setProducts(newProducts); }} placeholder="Rp 500.000" className="bg-gray-800 border-gray-700 text-white placeholder-gray-500" />
                          </div>
                          <div className="space-y-2 md:col-span-2">
                            <label className="text-sm font-medium text-gray-300 flex items-center"><ImageIcon className="w-4 h-4 mr-2 text-[#C9A24D]" />URL Foto</label>
                            <Input value={product.image} onChange={(e) => { const newProducts = [...products]; const idx = newProducts.findIndex(p => p.id === product.id); newProducts[idx] = { ...newProducts[idx], image: e.target.value }; setProducts(newProducts); }} placeholder="/produk-nama.jpg" className="bg-gray-800 border-gray-700 text-white placeholder-gray-500" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-300">Deskripsi</label>
                          <Textarea value={product.description} onChange={(e) => { const newProducts = [...products]; const idx = newProducts.findIndex(p => p.id === product.id); newProducts[idx] = { ...newProducts[idx], description: e.target.value }; setProducts(newProducts); }} placeholder="Deskripsi produk" rows={3} className="bg-gray-800 border-gray-700 text-white placeholder-gray-500 resize-none" />
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
            <div className="flex justify-center">
              <Button onClick={handleSaveProducts} disabled={saving} size="lg" className="bg-gradient-to-r from-[#C9A24D] to-[#B89B5E] hover:from-[#D4AF6A] hover:to-[#C9A24D] text-white font-bold px-12 py-4 text-lg shadow-xl">
                {saving ? <><Loader2 className="w-5 h-5 mr-2 animate-spin" />Menyimpan...</> : <><Save className="w-5 h-5 mr-2" />Simpan Produk</>}
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="home" className="space-y-6">
            {homeData && (
              <>
                <Card className="bg-gray-800/50 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-white text-2xl flex items-center"><Home className="w-6 h-6 mr-3 text-[#C9A24D]" />Edit Halaman Home</CardTitle>
                    <p className="text-gray-400 mt-2">Edit semua konten di halaman beranda</p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-bold text-[#C9A24D]">Hero Section</h3>
                      <div className="space-y-4">
                        <div className="space-y-2"><label className="text-sm font-medium text-gray-300">Badge</label><Input value={homeData.hero.badge} onChange={(e) => setHomeData({ ...homeData, hero: { ...homeData.hero, badge: e.target.value } })} className="bg-gray-800 border-gray-700 text-white" /></div>
                        <div className="space-y-2"><label className="text-sm font-medium text-gray-300">Heading (gunakan \n untuk baris baru)</label><Textarea value={homeData.hero.heading} onChange={(e) => setHomeData({ ...homeData, hero: { ...homeData.hero, heading: e.target.value } })} rows={3} className="bg-gray-800 border-gray-700 text-white" /></div>
                        <div className="space-y-2"><label className="text-sm font-medium text-gray-300">Subheading</label><Textarea value={homeData.hero.subheading} onChange={(e) => setHomeData({ ...homeData, hero: { ...homeData.hero, subheading: e.target.value } })} rows={2} className="bg-gray-800 border-gray-700 text-white" /></div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-bold text-[#C9A24D]">About Section</h3>
                      <div className="space-y-4">
                        <div className="space-y-2"><label className="text-sm font-medium text-gray-300">Heading</label><Input value={homeData.about.heading} onChange={(e) => setHomeData({ ...homeData, about: { ...homeData.about, heading: e.target.value } })} className="bg-gray-800 border-gray-700 text-white" /></div>
                        <div className="space-y-2"><label className="text-sm font-medium text-gray-300">Deskripsi 1</label><Textarea value={homeData.about.description1} onChange={(e) => setHomeData({ ...homeData, about: { ...homeData.about, description1: e.target.value } })} rows={3} className="bg-gray-800 border-gray-700 text-white" /></div>
                        <div className="space-y-2"><label className="text-sm font-medium text-gray-300">Deskripsi 2</label><Textarea value={homeData.about.description2} onChange={(e) => setHomeData({ ...homeData, about: { ...homeData.about, description2: e.target.v
