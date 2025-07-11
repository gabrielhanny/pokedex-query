'use client';

import Image from 'next/image';
import Link from 'next/link';

export type PokemonCardProps = {
  id: number;
  name: string;
  image: string;
  types: string[];
  abilities: string[];
};

export default function PokemonCard({
  id,
  name,
  image,
  types,
  abilities,
}: PokemonCardProps) {
  return (
    <Link
      href={`/pokemon/${name}`}
      className="w-[361px] md:w-[288px] min-h-[384px] bg-white border border-neutral-200 shadow-sm rounded-2xl px-4 md:px-6 pt-6 pb-6 flex flex-col items-center transition hover:shadow-md"
    >
      {/* Image Container */}
      <div className="w-[199px] h-[199px] relative">
        <div className="absolute inset-0 bg-neutral-100 rounded-full" />
        <Image
          src={image}
          alt={name}
          width={199}
          height={199}
          className="relative z-10 object-contain"
        />
      </div>

      {/* ID & Name */}
      <div className="pt-6 w-full max-w-[240px] text-left">
        <p className="text-sm text-neutral-500 font-normal leading-[20px]">
          #{String(id).padStart(3, '0')}
        </p>
        <h3 className="text-xl text-neutral-900 font-semibold capitalize leading-[28px]">
          {name}
        </h3>
      </div>

      {/* Types */}
      <div className="pt-4 flex flex-wrap gap-2 justify-start max-w-[240px] w-full">
        {types.map((type) => (
          <span
            key={type}
            className="px-2 py-1 text-sm font-medium text-neutral-900 bg-white border border-neutral-300 rounded-md"
          >
            {type}
          </span>
        ))}
      </div>

      {/* Type + Ability Badge */}
      <div className="pt-4 flex flex-wrap gap-2 justify-start max-w-[240px] w-full">
        {[...types, ...abilities].slice(0, 2).map((item) => (
          <span
            key={item}
            className="px-2 py-1 text-sm font-medium text-neutral-900 bg-white border border-neutral-300 rounded-md"
          >
            {item}
          </span>
        ))}
      </div>
    </Link>
  );
}
