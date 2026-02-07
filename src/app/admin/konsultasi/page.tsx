'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import {
  Settings,
  LogOut,
  Save,
  Loader2,
  AlertCircle,
  Home,
  Send,
  CheckCircle2,
} from 'lucide-react';

interface ConsultationData {
  hero: {
    badge: string;
    heading: string;
    subheading: string;
  };
  form: {
    heading: string;
  };
  infoImportant: {
    heading: string;
    items: string[];
  };
  benefits: {
    heading: string;
    items: Array<{ title: string; description: string }>;
  };
  contactInfo: {
    heading: string;
    items: Array<{ label: string; value: string; link: string }>;
  };
  officeHours: {
    heading: string;
    items: Array<{ day: string; hours: string }>;
  };
}

export default function AdminKonsultasi() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [consultationData, setConsultationData] = useState<ConsultationData | null>(null);

  useEffect(() => {
    checkAuth();
    loadConsultationData();
  }, []);

  const checkAuth = async () => {
    try {
      const response = await fetch('/api/admin/session');
      const data = await response.json();

      if (!data.authenticated) {
        router.push('/admin/login');
      }
    } catch (err) {
      console.error('Auth check error:', err);
      router.push('/admin/login');
    } finally {
      setLoading(false);
    }
  };

  const loadConsultationData = async () => {
    try {
      const response = await fetch('/api/admin/consultation');
      const data = await response.json();
      if (response.ok && data.data) setConsultationData(data.data);
    } catch (err) {
      console.error('Load consultation data error:', err);
    }
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/admin/logout', { method: 'POST' });
      router.push('/admin/login');
    } catch (err) {
      console.error('Logout error:', err);
    }
  };

  const handleSave = async () => {
    if (!consultationData) return;
    setSaving(true);
    setError('');

    try {
      const response = await fetch('/api/admin/consultation', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: consultationData }),
      });
      const data = await response.json();

      if (response.ok) {
        setSuccess('Data halaman konsultasi berhasil disimpan!');
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
                <h1 className="text-2xl font-bold text-white">Admin - Konsultasi</h1>
                <p className="text-sm text-gray-400">Edit halaman konsultasi</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Link href="/admin">
                <Button variant="ghost" className="text-[#C9A24D] hover:bg-[#C9A24D]/10">
                  <Home className="w-4 h-4 mr-2" />
                  Dashboard Utama
                </Button>
              </Link>
              <Link href="/">
                <Button variant="ghost" className="text-[#C9A24D] hover:bg-[#C9A24D]/10">
                  Lihat Website
                </Button>
              </Link>
              <Button onClick={handleLogout} variant="outline" className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white">
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
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

        {consultationData && (
          <>
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white text-2xl flex items-center">
                  <Send className="w-6 h-6 mr-3 text-[#C9A24D]" />
                  Edit Halaman Konsultasi
                </CardTitle>
                <p className="text-gray-400 mt-2">Edit semua konten di halaman konsultasi</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-[#C9A24D]">Hero Section</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">Badge</label>
                      <Input value={consultationData.hero.badge} onChange={(e) => setConsultationData({ ...consultationData, hero: { ...consultationData.hero, badge: e.target.value } })} className="bg-gray-800 border-gray-700 text-white" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">Heading</label>
                      <Input value={consultationData.hero.heading} onChange={(e) => setConsultationData({ ...consultationData, hero: { ...consultationData.hero, heading: e.target.value } })} className="bg-gray-800 border-gray-700 text-white" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">Subheading</label>
                      <Textarea value={consultationData.hero.subheading} onChange={(e) => setConsultationData({ ...consultationData, hero: { ...consultationData.hero, subheading: e.target.value } })} rows={2} className="bg-gray-800 border-gray-700 text-white" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-[#C9A24D]">Form Section</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">Heading</label>
                      <Input value={consultationData.form.heading} onChange={(e) => setConsultationData({ ...consultationData, form: { ...consultationData.form, heading: e.target.value } })} className="bg-gray-800 border-gray-700 text-white" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-[#C9A24D]">Info Penting</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">Heading</label>
                      <Input value={consultationData.infoImportant.heading} onChange={(e) => setConsultationData({ ...consultationData, infoImportant: { ...consultationData.infoImportant, heading: e.target.value } })} className="bg-gray-800 border-gray-700 text-white" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">Items (setiap poin dipisahkan dengan baris baru)</label>
                      <Textarea value={consultationData.infoImportant.items.join('\n')} onChange={(e) => setConsultationData({ ...consultationData, infoImportant: { ...consultationData.infoImportant, items: e.target.value.split('\n').filter(x => x.trim()) } })} rows={5} className="bg-gray-800 border-gray-700 text-white" />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-[#C9A24D]">Benefits</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">Heading</label>
                      <Input value={consultationData.benefits.heading} onChange={(e) => setConsultationData({ ...consultationData, benefits: { ...consultationData.benefits, heading: e.target.value } })} className="bg-gray-800 border-gray-700 text-white" />
                    </div>
                    {consultationData.benefits.items.map((benefit, index) => (
                      <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-300">Title</label>
                          <Input value={benefit.title} onChange={(e) => { const newItems = [...consultationData.benefits.items]; newItems[index] = { ...newItems[index], title: e.target.value }; setConsultationData({ ...consultationData, benefits: { ...consultationData.benefits, items: newItems } }); }} className="bg-gray-800 border-gray-700 text-white" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-300">Description</label>
                          <Input value={benefit.description} onChange={(e) => { const newItems = [...consultationData.benefits.items]; newItems[index] = { ...newItems[index], description: e.target.value }; setConsultationData({ ...consultationData, benefits: { ...consultationData.benefits, items: newItems } }); }} className="bg-gray-800 border-gray-700 text-white" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-[#C9A24D]">Contact Info</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">Heading</label>
                      <Input value={consultationData.contactInfo.heading} onChange={(e) => setConsultationData({ ...consultationData, contactInfo: { ...consultationData.contactInfo, heading: e.target.value } })} className="bg-gray-800 border-gray-700 text-white" />
                    </div>
                    {consultationData.contactInfo.items.map((item, index) => (
                      <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-300">Label</label>
                          <Input value={item.label} onChange={(e) => { const newItems = [...consultationData.contactInfo.items]; newItems[index] = { ...newItems[index], label: e.target.value }; setConsultationData({ ...consultationData, contactInfo: { ...consultationData.contactInfo, items: newItems } }); }} className="bg-gray-800 border-gray-700 text-white" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-300">Value</label>
                          <Input value={item.value} onChange={(e) => { const newItems = [...consultationData.contactInfo.items]; newItems[index] = { ...newItems[index], value: e.target.value }; setConsultationData({ ...consultationData, contactInfo: { ...consultationData.contactInfo, items: newItems } }); }} className="bg-gray-800 border-gray-700 text-white" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-[#C9A24D]">Jam Operasional</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">Heading</label>
                      <Input value={consultationData.officeHours.heading} onChange={(e) => setConsultationData({ ...consultationData, officeHours: { ...consultationData.officeHours, heading: e.target.value } })} className="bg-gray-800 border-gray-700 text-white" />
                    </div>
                    {consultationData.officeHours.items.map((item, index) => (
                      <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-300">Hari</label>
                          <Input value={item.day} onChange={(e) => { const newItems = [...consultationData.officeHours.items]; newItems[index] = { ...newItems[index], day: e.target.value }; setConsultationData({ ...consultationData, officeHours: { ...consultationData.officeHours, items: newItems } }); }} className="bg-gray-800 border-gray-700 text-white" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-300">Jam</label>
                          <Input value={item.hours} onChange={(e) => { const newItems = [...consultationData.officeHours.items]; newItems[index] = { ...newItems[index], hours: e.target.value }; setConsultationData({ ...consultationData, officeHours: { ...consultationData.officeHours, items: newItems } }); }} className="bg-gray-800 border-gray-700 text-white" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center">
              <Button onClick={handleSave} disabled={saving} size="lg" className="bg-gradient-to-r from-[#C9A24D] to-[#B89B5E] hover:from-[#D4AF6A] hover:to-[#C9A24D] text-white font-bold px-12 py-4 text-lg shadow-xl">
                {saving ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Menyimpan...
                  </>
                ) : (
                  <>
                    <Save className="w-5 h-5 mr-2" />
                    Simpan Perubahan
                  </>
                )}
              </Button>
            </div>
          </>
        )}
      </main>
    </div>
  );
          }
                                                             
