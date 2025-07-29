// src/app/not-found.tsx
// Ini adalah Server Component (TIDAK ADA 'use client' di sini)
// Pastikan tidak ada 'use client' di bagian paling atas file ini.

import { Suspense } from 'react'; // Import Suspense dari React

import FooterOptional from '@/components/FooterOptional';
import NotFoundContent from '@/components/NotFoundContent';

export default function NotFoundPage() {
  return (
    // Karena ini adalah page (atau custom not-found page), strukturnya bisa langsung HTML
    // atau di dalam <html><body> kalau itu custom root not-found.
    // Jika ini adalah page biasa di dalam layout, structurenya disesuaikan.
    // Asumsi ini adalah custom `app/not-found.tsx`

    <html lang="en"> {/* Atau tag html/body yang sesuai dengan layout root Anda */}
      <body>
        <div className='flex flex-col min-h-screen'>
          <main className='flex-grow'>
            {/* Bungkus NotFoundContent dengan Suspense */}
            <Suspense fallback={<div>Loading 404 content...</div>}>
              <NotFoundContent /> {/* Tidak perlu lagi passing keyword dari sini */}
            </Suspense>
          </main>
          <FooterOptional />
        </div>
      </body>
    </html>
  );
}