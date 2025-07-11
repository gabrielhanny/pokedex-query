'use client';

import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

import { useEffect, useState } from 'react';

import SearchInput from './SearchInput';


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={clsx(
        'sticky top-0 z-50 w-full transition-colors duration-300',
        scrolled ? 'bg-white border-b border-neutral-200' : 'bg-primary-300'
      )}
    >
      <div className="custom-container h-16 md:h-20 flex items-center justify-between gap-2 px-4">
        {/* Pokéball + Pokedex */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/icon/pokeball-colored.svg"
            alt="Pokeball"
            width={32}
            height={32}
            className="w-6 h-6 md:w-8 md:h-8"
          />
          {/* Teks "Pokedex" when scroll */}
          <span
            className={clsx(
              'text-neutral-900 font-semibold tracking-tight leading-6',
              'text-lg md:text-2xl',
              scrolled ? 'hidden md:block' : 'block'
            )}
          >
            Pokedex
          </span>
        </Link>

        {/* Search Input when scroll */}
        {scrolled && (
          <div className="flex-1 max-w-[600px] md:block">
            <SearchInput size="desktop" />
          </div>
        )}
      </div>
    </nav>
  );
}
