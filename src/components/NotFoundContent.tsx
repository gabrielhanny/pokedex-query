'use client';

import Image from 'next/image';

interface Props {
  keyword: string;
}

export default function NotFoundContent({ keyword }: Props) {
  return (
    <section className="flex flex-col min-h-[calc(100vh-88px)]"> {/* jika header tingginya 88px */}
      {/* Bagian teks kiri */}
      <div className="w-full max-w-screen-xl mx-auto px-4 md:px-8 pt-10 md:pt-16">
        <h1 className="text-lg md:text-xl font-semibold text-neutral-900">
          No results found for “{keyword}”
        </h1>
      </div>

      {/* Bagian pokeball center */}
      <div className="flex flex-grow items-center justify-center">
        <div className="flex flex-col items-center">
          <Image
            src="/images/pokeball-notfound.png"
            alt="Pokémon Not Found"
            width={130}
            height={130}
            className="w-24 h-24 md:w-[130px] md:h-[130px]"
          />
          <p className="pt-6 pb-1 text-md font-bold text-neutral-900">
            Pokémon Not Found
          </p>
          <p className="text-md text-neutral-900">Change Your Keywords</p>
        </div>
      </div>
    </section>
  );
}
