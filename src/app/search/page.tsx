// src/app/search/page.tsx
// NO 'use client' here. This is now a Server Component.

import { Suspense } from 'react'; // Import Suspense from React

import Footer from '@/components/Footer';
import SearchContent from '@/components/SearchContent'; // Import the new Client Component

export default function SearchPage() {
  return (
    <div className='min-h-screen flex flex-col'>
      {/* Wrap SearchContent with Suspense to handle client-side hooks during prerendering */}
      <Suspense fallback={
        <main className='flex-grow custom-container py-8'>
          <p className='text-center text-neutral-900'>Preparing search...</p>
        </main>
      }>
        <SearchContent />
      </Suspense>
      <Footer />
    </div>
  );
}