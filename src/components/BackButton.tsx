'use client';

import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';


export default function BackButton() {
  const router = useRouter();

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
      <div className="h-16 md:h-20 flex items-center">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-neutral-900"
        >
          <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" strokeWidth={2} />
          <span className="text-base font-medium">Back</span>
        </button>
      </div>
    </div>
  );
}
