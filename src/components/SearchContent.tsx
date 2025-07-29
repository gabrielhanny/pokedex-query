// src/components/SearchContent.tsx
'use client'; // THIS IS ESSENTIAL for client-side hooks

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

import PokemonCard from '@/components/PokemonCard/PokemonCard';

import { useSearchPokemon } from '@/hooks/usePokemonQuery'; // Assuming this is a custom client hook

export default function SearchContent() { // No props from parent needed, all handled internally
  const searchParams = useSearchParams();
  const keyword = searchParams.get('name')?.toLowerCase() || '';
  const router = useRouter();

  const { data: pokemon, isLoading, isError } = useSearchPokemon(keyword);

  useEffect(() => {
    // Only redirect if keyword exists (meaning a search was attempted)
    // and there's no result, and it's not loading or an error state.
    // Ensure this logic correctly handles all cases without infinite loops.
    if (!isLoading && !isError && keyword && !pokemon) {
      router.replace(`/not-found?q=${keyword}`);
    }
  }, [isLoading, isError, keyword, pokemon, router]);

  const renderContent = () => {
    if (!keyword) {
      return (
        <h1 className='text-xl font-bold'>Please enter a Pokémon name.</h1>
      );
    }

    if (isLoading) {
      return (
        <p className='text-center text-neutral-900'>Loading search result...</p>
      );
    }

    if (isError) {
      return (
        <p className='text-center text-red-500'>
          Something went wrong. Please try again.
        </p>
      );
    }

    if (!pokemon) {
      // If keyword exists but no pokemon found after loading, render "No result"
      // This case is already handled by the useEffect redirecting to /not-found,
      // but a fallback here for immediate render might be useful before redirect.
      // For now, if useEffect redirects, this won't be reached.
      return null; // Or a specific "No Pokemon found" message if you prefer not to redirect
    }

    return (
      <>
        <h1 className='text-2xl font-bold mb-4'>
          Result for: <span className='text-primary-500'>{keyword}</span>
        </h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
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
    <main className='flex-grow custom-container py-8'>
      {renderContent()}
    </main>
  );
}