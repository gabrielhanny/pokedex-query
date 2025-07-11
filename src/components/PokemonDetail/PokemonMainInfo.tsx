import Image from 'next/image';

import PokemonStats from './PokemonStats';

interface Stat {
  name: string;
  value: number;
}

interface PokemonMainInfoProps {
  id: number;
  name: string;
  image: string;
  description?: string;
  types: string[];
  abilities: string[];
  weight: number;
  height: number;
  artwork: string;
  stats: Stat[];
}

export default function PokemonMainInfo({
  id,
  name,
  image,
  description,
  types,
  abilities,
  weight,
  height,
  artwork,
  stats,
}: PokemonMainInfoProps) {
  return (
    <section className='w-full max-w-screen-xl mx-auto px-4 pt-8'>
      <div className='flex flex-col md:flex-row md:gap-8'>
        {/* Left Side - Image */}
        <div className='w-full md:w-1/2 flex justify-center items-start'>
          {image ? (
            <Image
              src={image}
              alt={name}
              width={476}
              height={476}
              className='object-contain'
              priority
            />
          ) : (
            <div className='w-[476px] h-[476px] bg-neutral-100 flex items-center justify-center text-sm text-neutral-400'>
              No Image
            </div>
          )}
        </div>

        {/* Right Side - Info */}
        <div className='w-full md:w-1/2 flex flex-col text-neutral-900 mt-8 md:mt-0'>
          {/* Pokeball, Number, Name, Description */}
          <div className='mb-6'>
            <Image
              src='/images/pokeball-notfound.png'
              alt='Pokeball'
              width={40}
              height={40}
              className='mb-2'
            />
            <p className='text-base text-neutral-500 mb-1'>
              {String(id).padStart(3, '0')}
            </p>
            <h1 className='text-2xl font-bold capitalize mb-2'>{name}</h1>
            <p className='text-base text-neutral-700 leading-relaxed'>
              {description || '—'}
            </p>
          </div>

          {/* Divider */}
          <hr className='border border-neutral-200 mb-6' />

          {/* Grid: Type & Abilities | Size & Artwork */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
            {/* Type */}
            <div>
              <h2 className='text-lg font-semibold mb-2'>Type</h2>
              <div className='flex flex-wrap gap-2'>
                {types.map((type, index) => (
                  <span
                    key={type + index}
                    className='px-3 py-1 rounded-md border border-neutral-300 text-sm font-medium'
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>

            {/* Abilities */}
            <div>
              <h2 className='text-lg font-semibold mb-2'>Abilities</h2>
              <div className='flex flex-wrap gap-2'>
                {abilities.map((ability, index) => (
                  <span
                    key={ability + index}
                    className='px-3 py-1 rounded-md border border-neutral-300 text-sm font-medium'
                  >
                    {ability}
                  </span>
                ))}
              </div>
            </div>

            {/* Size */}
            <div>
              <h2 className='text-lg font-semibold mb-2'>Size</h2>
              <div className='flex items-start gap-8'>
                {/* Weight */}
                <div className='flex flex-col items-center text-center gap-2'>
                  <div className='flex items-center gap-2'>
                    <Image
                      src='/icon/weight.svg'
                      alt='Weight'
                      width={16}
                      height={18}
                    />
                    <span className='text-sm text-neutral-600'>Weight</span>
                  </div>
                  <span className='text-lg font-bold'>{weight} Kg</span>
                </div>

                {/* Height */}
                <div className='flex flex-col items-center text-center gap-2'>
                  <div className='flex items-center gap-2'>
                    <Image
                      src='/icon/height.svg'
                      alt='Height'
                      width={16}
                      height={18}
                    />
                    <span className='text-sm text-neutral-600'>Height</span>
                  </div>
                  <span className='text-lg font-bold'>{height} m</span>
                </div>
              </div>
            </div>

            {/* Artwork */}
            <div>
              <h2 className='text-lg font-semibold mb-2'>Artwork</h2>
              {artwork ? (
                <Image
                  src={artwork}
                  alt='Artwork'
                  width={96}
                  height={96}
                  className='object-contain'
                />
              ) : (
                <div className='w-24 h-24 bg-neutral-100 flex items-center justify-center text-sm text-neutral-400'>
                  No Artwork
                </div>
              )}
            </div>
          </div>

          {/* Divider */}
          <hr className='border border-neutral-200 mb-6' />

          {/* Stats */}
          <PokemonStats stats={stats} />
        </div>
      </div>
    </section>
  );
}
