'use client';

import Image from 'next/image';

export default function FooterOptional() {
  return (
    <footer className='w-full border-t border-neutral-300'>
      {/* Desktop */}
      <div className='hidden md:flex items-center justify-between custom-container py-8'>
        <div className='flex items-center gap-2'>
          <Image
            src='/icon/pokeball-colored.svg'
            alt='Pokedex Logo'
            width={24}
            height={24}
          />
          <h1 className='font-semibold text-base text-neutral-900'>Pokedex</h1>
        </div>
        <p className='text-sm text-neutral-600'>Copyright ©2025 Pokedex</p>
      </div>

      {/* Mobile */}
      <div className='md:hidden flex flex-col items-start gap-2 px-6 py-6'>
        <div className='flex items-center gap-2'>
          <Image
            src='/icon/pokeball-colored.svg'
            alt='Pokedex Logo'
            width={20}
            height={20}
          />
          <h1 className='font-semibold text-base text-neutral-900'>Pokedex</h1>
        </div>
        <p className='text-xs text-neutral-600'>Copyright ©2025 Pokedex</p>
      </div>
    </footer>
  );
}
