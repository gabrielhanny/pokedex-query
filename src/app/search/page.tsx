'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';


import Footer from '@/components/Footer';
import PokemonCard from '@/components/PokemonCard/PokemonCard';

import { useSearchPokemon } from '@/hooks/usePokemonQuery';


export default function SearchPage() {
  const searchParams = useSearchParams();
  const keyword = searchParams.get('name')?.toLowerCase() || '';
  const router = useRouter();

  const { data: pokemon, isLoading, isError } = useSearchPokemon(keyword);

  useEffect(() => {
    if (!isLoading && !isError && keyword && !pokemon) {
      router.replace(`/not-found?q=${keyword}`);
    }
  }, [isLoading, isError, keyword, pokemon, router]);

  const renderContent = () => {
    if (!keyword) {
      return <h1 className="text-xl font-bold">Please enter a Pokémon name.</h1>;
    }

    if (isLoading) {
      return <p className="text-center text-neutral-900">Loading search result...</p>;
    }

    if (isError) {
      return (
        <p className="text-center text-red-500">
          Something went wrong. Please try again.
        </p>
      );
    }

    if (!pokemon) {
      return null; 
    }

    return (
      <>
        <h1 className="text-2xl font-bold mb-4">
          Result for: <span className="text-primary-500">{keyword}</span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <PokemonCard
            id={pokemon.id}
            name={pokemon.name}
            image={pokemon.image}
            abilities={pokemon.abilities}
            types={pokemon.types}
          />
        </div>
      </>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow custom-container py-8">{renderContent()}</main>
      <Footer />
    </div>
  );
}
