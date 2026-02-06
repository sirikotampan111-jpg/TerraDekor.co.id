
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) router.push('/dashboard');
    else setError('Email atau password salah');
  }

  return (
    <div style={{ maxWidth: 400, margin: '100px auto', textAlign: 'center' }}>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} style={{ width:'100%', padding:8, margin:'10px 0' }}/>
        <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} style={{ width:'100%', padding:8, margin:'10px 0' }}/>
        <button type="submit" style={{ padding:10, width:'100%' }}>Login</button>
      </form>
      {error && <p style={{ color:'red' }}>{error}</p>}
    </div>
  );
}
