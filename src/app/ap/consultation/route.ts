import { NextRequest, NextResponse } from 'next/server';

// Default data for consultation page
const defaultConsultationData = {
  hero: {
    badge: 'Konsultasi Gratis',
    heading: 'Konsultasi Gratis',
    subheading: 'Tim kami siap membantu Anda tanpa biaya. Isi formulir di bawah ini!',
  },
  form: {
    heading: 'Formulir Konsultasi',
  },
  infoImportant: {
    heading: 'Info Penting',
    items: [
      'Konsultasi gratis tanpa biaya',
      'Respon cepat via WhatsApp',
      'Tim profesional berpengalaman',
      'Penawaran harga transparan',
    ],
  },
  benefits: {
    heading: 'Mengapa Konsultasi dengan Kami',
    items: [
      { title: 'Respon Cepat', description: 'Tim kami merespon dalam waktu singkat' },
      { title: 'Gratis & Tanpa Kewajiban', description: 'Konsultasi gratis tanpa tekanan' },
      { title: 'Tim Profesional', description: 'Konsultan ahli dengan pengalaman' },
      { title: 'Penawaran Transparan', description: 'Harga jelas dan tanpa biaya tersembunyi' },
    ],
  },
  contactInfo: {
    heading: 'Hubungi Langsung',
    items: [
      { label: 'WhatsApp', value: '0812-5151-1997', link: 'https://wa.me/6281251511997' },
      { label: 'Telepon', value: '0812-5151-1997', link: 'tel:+6281251511997' },
    ],
  },
  officeHours: {
    heading: 'Jam Operasional',
    items: [
      { day: 'Senin - Jumat', hours: '09:00 - 17:00' },
      { day: 'Sabtu', hours: '09:00 - 14:00' },
      { day: 'Minggu', hours: 'Tutup' },
    ],
  },
};

// GET - Get consultation page data
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

    const filePath = path.join(process.cwd(), 'public', 'consultation-data.json');

    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      return NextResponse.json({ data: JSON.parse(fileContent) }, { status: 200 });
    }

    return NextResponse.json({ data: defaultConsultationData }, { status: 200 });
  } catch (error) {
    console.error('Get consultation data error:', error);
    return NextResponse.json(
      { error: 'Terjadi kesalahan server' },
      { status: 500 }
    );
  }
}

// PUT - Update consultation page data
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

    const filePath = path.join(process.cwd(), 'public', 'consultation-data.json');

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

    return NextResponse.json(
      { success: true, message: 'Data halaman konsultasi berhasil diupdate' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Update consultation data error:', error);
    return NextResponse.json(
      { error: 'Terjadi kesalahan server' },
      { status: 500 }
    );
  }
}
