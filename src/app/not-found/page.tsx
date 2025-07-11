'use client';

import { useSearchParams } from 'next/navigation';

import FooterOptional from '@/components/FooterOptional';
import NotFoundContent from '@/components/NotFoundContent';


export default function NotFoundPage() {
  const searchParams = useSearchParams();
  const keyword = searchParams.get('q')?.toLowerCase() || '';


  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <NotFoundContent keyword={keyword} />
      </main>
      <FooterOptional />
    </div>
  );
}
