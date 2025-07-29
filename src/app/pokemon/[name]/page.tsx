// src/app/pokemon/[name]/page.tsx

import { notFound } from 'next/navigation';

import BackButton from '@/components/BackButton';
import FooterOptional from '@/components/FooterOptional';
import EvolutionChain from '@/components/PokemonDetail/EvolutionChain';
import PokemonMainInfo from '@/components/PokemonDetail/PokemonMainInfo';

import { getPokemonDetail } from '@/lib/api/pokemon';

// --- Perubahan Penting di sini untuk Next.js 15 ---
// Definisikan tipe Params sebagai Promise
type PageParams = Promise<{ name: string }>;

interface PokemonDetailPageProps {
  params: PageParams; // Gunakan tipe Promise untuk params
}

export default async function PokemonDetailPage({
  params,
}: PokemonDetailPageProps) { // Gunakan interface yang baru
  // Lakukan await pada params untuk mendapatkan objek { name: string } yang sebenarnya
  const { name } = await params;

  const pokemon = await getPokemonDetail(name); // Gunakan 'name' yang sudah di-await

  if (!pokemon) return notFound();

  return (
    <>
      <main className="pt-6 md:pt-12 px-4 md:px-8">
        <div className="w-full max-w-screen-xl mx-auto">
          <div className="mb-6 md:mb-12">
            <BackButton />
          </div>

          <div className="mb-12">
            <PokemonMainInfo
              id={pokemon.id}
              name={pokemon.name}
              image={pokemon.image}
              description={pokemon.description || ''}
              types={pokemon.types || []}
              abilities={pokemon.abilities || []}
              weight={pokemon.weight}
              height={pokemon.height}
              artwork={pokemon.artwork || ''}
              stats={pokemon.stats}
            />
          </div>

          {pokemon.evolution && pokemon.evolution.length > 0 && (
            <div className="mb-12">
              <EvolutionChain evolutions={pokemon.evolution} />
            </div>
          )}
        </div>
      </main>

      <div className="hidden md:block">
        <FooterOptional />
      </div>
      {/* Footer mobile */}
      <div className="block md:hidden">
        <FooterOptional />
      </div>
    </>
  );
}