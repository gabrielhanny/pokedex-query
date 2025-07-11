type Props = {
  abilities: string[];
};

export default function PokemonAbility({ abilities }: Props) {
  return (
    <div className='pt-4 px-6 pb-6 flex flex-wrap gap-2'>
      {abilities.map((ability, idx) => (
        <div
          key={idx}
          className='px-2 py-1 bg-neutral-300 rounded-md text-sm font-medium text-neutral-900'
        >
          {ability}
        </div>
      ))}
    </div>
  );
}
