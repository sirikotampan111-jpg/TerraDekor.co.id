import { NextRequest, NextResponse } from 'next/server';

// Default data for about page
const defaultAboutData = {
  hero: {
    badge: 'Tentang Kami',
    heading: 'Profil Perusahaan',
    subheading: 'Mengenal lebih dekat PT. Opulent Interior Indonesia',
  },
  companyInfo: {
    heading: 'PT. Opulent Interior Indonesia',
    tagline: 'Solusi Interior Premium & Kontraktor Terpercaya',
    description: 'PT. Opulent Interior Indonesia (Terradekor.id) adalah produsen dan importir produk interior premium serta penyedia jasa interior dan kontraktor terpadu. Berdiri sejak tahun 2018, kami telah melayani ratusan klien di seluruh Indonesia.',
  },
  vision: {
    heading: 'Visi Kami',
    description: 'Menjadi perusahaan interior dan konstruksi terdepan di Indonesia yang menyediakan solusi berkualitas tinggi dengan harga terjangkau untuk semua kalangan.',
  },
  mission: {
    heading: 'Misi Kami',
    items: [
      'Menyediakan produk interior berkualitas premium dengan standar internasional',
      'Memberikan layanan jasa interior dan konstruksi yang profesional dan terpercaya',
      'Menghadirkan inovasi dan kreativitas dalam setiap proyek',
      'Membangun hubungan jangka panjang dengan klien melalui kualitas dan kepuasan',
      'Terus berinovasi dan mengikuti perkembangan tren interior terkini',
    ],
  },
  values: {
    heading: 'Nilai Perusahaan',
    items: [
      { title: 'Kualitas', description: 'Selalu mengutamakan kualitas dalam setiap produk dan layanan' },
      { title: 'Profesionalisme', description: 'Melayani dengan sikap profesional dan etika kerja yang tinggi' },
      { title: 'Inovasi', description: 'Terus berinovasi dan mengembangkan produk serta layanan baru' },
      { title: 'Integritas', description: 'Jujur, transparan, dan bertanggung jawab dalam setiap interaksi' },
      { title: 'Kepuasan', description: 'Mengutamakan kepuasan pelanggan di atas segalanya' },
    ],
  },
  stats: {
    heading: 'Pencapaian Kami',
    items: [
      { number: '500+', label: 'Proyek Selesai' },
      { number: '50+', label: 'Tim Profesional' },
      { number: '5+', label: 'Tahun Pengalaman' },
      { number: '100%', label: 'Kepuasan Klien' },
    ],
  },
};

// GET - Get about page data
export async function GET(request: NextRequest) {
  try {
    const session = request.cookies.get('admin_session');

    if (!session || session.value !== 'authenticated') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Try to read from file, else return default
    const fs = await import('fs');
    const path = await import('path');

    const filePath = path.join(process.cwd(), 'public', 'about-data.json');

    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      return NextResponse.json({ data: JSON.parse(fileContent) }, { status: 200 });
    }

    return NextResponse.json({ data: defaultAboutData }, { status: 200 });
  } catch (error) {
    console.error('Get about data error:', error);
    return NextResponse.json(
      { error: 'Terjadi kesalahan server' },
      { status: 500 }
    );
  }
}

// PUT - Update about page data
export async function PUT(request: NextRequest) {
  try {
    const session = request.cookies.get('admin_session');

    if (!session || session.value !== 'authenticated') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { data } = await request.json();

    if (!data) {
      return NextResponse.json(
        { error: 'Data tidak valid' },
        { status: 400 }
      );
    }

    // Save to file
    const fs = await import('fs');
    const path = await import('path');

    const filePath = path.join(process.cwd(), 'public', 'about-data.json');

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

    return NextResponse.json(
      { success: true, message: 'Data halaman tentang kami berhasil diupdate' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Update about data error:', error);
    return NextResponse.json(
      { error: 'Terjadi kesalahan server' },
      { status: 500 }
    );
  }
}
