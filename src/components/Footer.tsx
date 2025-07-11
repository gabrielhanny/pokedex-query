'use client';

import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="border-t border-neutral-300 px-6 md:px-0 py-6 md:py-8">
      {/* Desktop */}
      <div className="hidden md:flex items-center gap-2 custom-container">
        <Image
          src="/icon/pokeball-colored.svg"
          alt="Pokedex Logo"
          width={24}
          height={24}
          className="mr-4"
        />
        <h1 className="font-semibold text-xl leading-none text-neutral-900">
          Pokedex
        </h1>
        <p className="ml-2 text-base font-normal text-neutral-600">
          Copyright ©2025 Pokedex
        </p>
      </div>

      {/* Mobile */}
      <div className="md:hidden flex flex-col items-start gap-4">
        <div className="flex items-center gap-2">
          <Image
            src="/icon/pokeball-colored.svg"
            alt="Pokedex Logo"
            width={24}
            height={24}
          />
          <h1 className="font-semibold text-base leading-none text-neutral-900">
            Pokedex
          </h1>
        </div>
        <p className="text-xs text-neutral-600 font-normal">
          Copyright ©2025 Pokedex
        </p>
      </div>
    </footer>
  );
}
