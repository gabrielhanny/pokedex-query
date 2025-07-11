'use client';

import Image from 'next/image';

import SearchInput from '@/components/SearchInput';


export default function Hero() {
  return (
    <section className="bg-primary-300 relative overflow-hidden">
      <div className="custom-container flex flex-col items-center text-center pt-20 md:pt-20 pb-24 md:pb-20">
        {/* Logo Pokemon */}
        <Image
          src="/images/Pokemon.png"
          alt="Pokemon logo"
          width={175}
          height={64}
          className="w-[103px] h-[38px] md:w-[175px] md:h-[64px] mb-4 md:mb-4"
        />

        {/* Title */}
        <h1 className="text-neutral-900 font-bold text-[28px] leading-[38px] md:text-[48px] md:leading-[60px] max-w-[297px] md:max-w-[686px]">
          <span className="block md:inline">Discover the Most</span>{' '}
          <span className="block">Powerful Pokémon</span>{' '}
          <span className="block md:inline">in the Wild!</span>
        </h1>

        {/* Subtitle */}
        <p className="text-neutral-800 text-[14px] font-medium leading-[18px] md:text-[16px] md:leading-[24px] mt-2.5 md:mt-4 max-w-[361px] md:max-w-[686px]">
          Train, Battle, and Collect Your Favorites!
        </p>

        {/* SearchInput */}
        <div className="mt-4 md:mt-8 w-full max-w-[361px] md:max-w-[518px]">
          <SearchInput size="hero" />
        </div>
      </div>

      {/* Cloud dan pokemons */}
      <Image
        src="/images/awan-mobile.png"
        alt="Awan Mobile"
        width={393}
        height={94}
        className="block md:hidden w-full z-10"
      />
      <Image
        src="/images/awan-Desktop.png"
        alt="Awan Desktop"
        width={1440}
        height={150}
        className="hidden md:block w-full z-10"
      />
    </section>
  );
}
