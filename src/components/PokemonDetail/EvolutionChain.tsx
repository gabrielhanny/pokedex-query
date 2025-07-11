import Image from 'next/image';
import Link from 'next/link';

interface Evolution {
  id: number;
  name: string;
  image: string;
}

interface EvolutionChainProps {
  evolutions: Evolution[];
}

export default function EvolutionChain({ evolutions }: EvolutionChainProps) {
  if (!evolutions || evolutions.length === 0) return null;

  return (
    <section className='w-full px-4 md:px-0 py-12'>
      <h2 className='text-xl font-semibold text-neutral-900 mb-6'>
        Evolution Chain
      </h2>

      <div className='flex flex-col md:flex-row md:flex-wrap gap-6'>
        {evolutions.map((pokemon) => (
          <Link
            key={pokemon.id}
            href={`/pokemon/${pokemon.name}`}
            className='flex flex-col items-start border border-neutral-300 rounded-xl p-4 w-full md:w-48 md:h-64 hover:shadow-sm transition-all'
          >
            <Image
              src={pokemon.image}
              alt={pokemon.name}
              width={128}
              height={128}
              className='mb-4 w-32 h-32 object-contain self-center'
            />

            <span className='text-sm text-neutral-700 mb-1'>
              {pokemon.id.toString().padStart(3, '0')}
            </span>
            <span className='text-base font-medium text-neutral-900 capitalize'>
              {pokemon.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
