'use client';

import { useEffect, useState, useCallback } from 'react';

import { fetchPokemonList } from '@/lib/api/pokemon';
import PokemonCard, { PokemonCardProps } from '../PokemonCard/PokemonCard';


export default function PokemonList() {
  const [pokemons, setPokemons] = useState<PokemonCardProps[]>([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const limit = 24;

  const loadPokemon = useCallback(async () => {
    setLoading(true);
    const newPokemon = await fetchPokemonList(limit, offset);

    setPokemons((prev) => {
      const existingIds = new Set(prev.map((p) => p.id));
      const filtered = newPokemon.filter((p) => !existingIds.has(p.id));
      return [...prev, ...filtered];
    });

    setLoading(false);
  }, [limit, offset]);

  useEffect(() => {
    loadPokemon();
  }, [loadPokemon]);

  return (
    <section className="custom-container pt-6 md:pt-24 pb-12 md:pb-[96px]">
      <h2 className="text-neutral-900 font-bold text-[20px] md:text-[32px] text-center md:text-left mb-6">
        List Pokémon
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 place-items-center">
        {pokemons.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            image={pokemon.image}
            abilities={pokemon.abilities}
            types={pokemon.types}
          />
        ))}
      </div>

      {/* Load More Button */}
      <div className="pt-6 flex justify-center">
        <button
          onClick={() => setOffset((prev) => prev + limit)}
          disabled={loading}
          className="border border-neutral-300 rounded-full 
            text-neutral-900 font-semibold 
            px-8 py-3 md:w-[237px] md:h-[52px] w-[180px] h-[44px] 
            text-sm md:text-base"
        >
          {loading ? 'Loading...' : 'Load More'}
        </button>
      </div>
    </section>
  );
}
