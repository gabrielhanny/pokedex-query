import { useQuery } from '@tanstack/react-query';

import { fetchPokemonList } from '../api/pokemon';

export const usePokemonListQuery = (limit = 24, offset = 0) =>
  useQuery({
    queryKey: ['pokemon-list', limit, offset],
    queryFn: ({ queryKey }) => {
      const [, rawLimit, rawOffset] = queryKey;
      const safeLimit = Number(rawLimit);
      const safeOffset = Number(rawOffset);
      return fetchPokemonList(safeLimit, safeOffset);
    },
    staleTime: 1000 * 60 * 5,
  });
