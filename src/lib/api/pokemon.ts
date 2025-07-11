const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';
const SPECIES_URL = 'https://pokeapi.co/api/v2/pokemon-species';

export const fetchPokemonList = async (limit = 24, offset = 0) => {
  const response = await fetch(`${BASE_URL}?limit=${limit}&offset=${offset}`);
  const data = await response.json();

  const detailedData = await Promise.all(
    data.results.map(async (pokemon: any) => {
      const res = await fetch(pokemon.url);
      const detail = await res.json();
      return normalizePokemonData(detail);
    })
  );

  return detailedData;
};

export const fetchPokemonByName = async (name: string) => {
  const response = await fetch(`${BASE_URL}/${name.toLowerCase()}`);
  if (response.status === 404) return null;
  if (!response.ok) throw new Error('Failed to fetch Pokémon');

  const detail = await response.json();
  return normalizePokemonData(detail);
};

export const getPokemonDetail = async (name: string) => {
  const res = await fetch(`${BASE_URL}/${name.toLowerCase()}`);
  if (res.status === 404) return null;
  if (!res.ok) throw new Error('Failed to fetch Pokémon detail');
  const detail = await res.json();

  const species = await fetchPokemonSpecies(detail.id);
  const evolution = await fetchEvolutionChain(species.evolution_chain.url);

  return normalizeFullPokemonData(detail, species, evolution);
};

// List & Search Card
export const normalizePokemonData = (detail: any) => {
  return {
    id: detail.id,
    name: detail.name,
    image: detail.sprites.other['official-artwork'].front_default || '',
    abilities: detail.abilities.slice(0, 2).map((a: any) => a.ability.name),
    types: detail.types.slice(0, 2).map((t: any) => t.type.name),
  };
};

// Detail Page 
export const normalizeFullPokemonData = (detail: any, species: any, evolution: any) => {
  return {
    id: detail.id,
    name: detail.name,
    image: detail.sprites.other['official-artwork'].front_default || '',
    artwork: detail.sprites.other['official-artwork'].front_default || '',
    abilities: detail.abilities.map((a: any) => a.ability.name),
    types: detail.types.map((t: any) => t.type.name),
    weight: detail.weight / 10, // convert to kg
    height: detail.height / 10, // convert to m
    description: extractEnglishDescription(species),
    stats: detail.stats.map((s: any) => ({
      name: s.stat.name,
      value: s.base_stat,
    })),
    evolution,
  };
};

// /pokemon-species/{id}
const fetchPokemonSpecies = async (id: number) => {
  const res = await fetch(`${SPECIES_URL}/${id}`);
  if (!res.ok) throw new Error('Failed to fetch Pokémon species');
  return res.json();
};

const extractEnglishDescription = (species: any) => {
  const entry = species.flavor_text_entries.find(
    (entry: any) => entry.language.name === 'en'
  );
  return entry ? entry.flavor_text.replace(/\f|\n/g, ' ') : 'No description available.';
};

// evolution_chain.url
const fetchEvolutionChain = async (url: string) => {
  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to fetch evolution chain');
  const data = await res.json();

  const evolutions: { id: number; name: string; image: string }[] = [];

  const extractEvolutions = (chain: any) => {
    if (!chain) return;
    const name = chain.species.name;
    const id = extractIdFromUrl(chain.species.url);
    evolutions.push({
      id,
      name,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
    });
    if (chain.evolves_to.length > 0) {
      extractEvolutions(chain.evolves_to[0]); 
    }
  };

  extractEvolutions(data.chain);
  return evolutions;
};

// ID from URL 
const extractIdFromUrl = (url: string) => {
  const segments = url.split('/');
  return parseInt(segments[segments.length - 2]);
};
