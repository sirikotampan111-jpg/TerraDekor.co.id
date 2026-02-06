
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const router = useRouter();
  const [content, setContent] = useState('');
  const [newContent, setNewContent] = useState('');
  const [message, setMessage] = useState('');

  // Cek konten dan login
  useEffect(() => {
    fetch('/api/content')
      .then(res => res.json())
      .then(data => setContent(data.content))
      .catch(() => router.push('/login'));
  }, [router]);

  async function handleLogout() {
    await fetch('/api/logout', { method: 'POST' });
    router.push('/login');
  }

  async function handleSave() {
    if (!newContent) return;
    const res = await fetch('/api/content', {
      method: 'POST',
      headers: { 'Content-Type':'application/json' },
      body: JSON.stringify({ newContent }),
    });

    if (res.ok) {
      setContent(newContent);
      setNewContent('');
      setMessage('Konten berhasil disimpan ✅');
      setTimeout(() => setMessage(''), 2000);
    }
  }

  return (
    <div style={{ maxWidth:600, margin:'50px auto', textAlign:'center' }}>
      <h1>Dashboard</h1>
      <button onClick={handleLogout} style={{ marginBottom:20, padding:10 }}>Logout</button>

      <h2>Konten Saat Ini:</h2>
      <p>{content}</p>

      <textarea value={newContent} onChange={(e)=>setNewContent(e.target.value)} placeholder="Tulis konten baru..." style={{ width:'100%', height:100, padding:8, margin:'10px 0' }}/>
      <br/>
      <button onClick={handleSave} style={{ padding:10, width:'100%' }}>Simpan Konten</button>

      {message && <p style={{ color:'green', marginTop:10 }}>{message}</p>}
    </div>
  );
}
