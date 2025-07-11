'use client';

import { useQuery } from '@tanstack/react-query';

import { fetchPokemonByName } from '@/lib/api/pokemon';

export const useSearchPokemon = (keyword: string) => {
  return useQuery({
    queryKey: ['pokemon-search', keyword],
    queryFn: () => fetchPokemonByName(keyword),
    enabled: !!keyword, 
  });
};
