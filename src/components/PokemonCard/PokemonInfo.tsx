type Props = {
  number: string;
  name: string;
};

export default function PokemonInfo({ number, name }: Props) {
  return (
    <div className="pt-[25px] px-6">
      <p className="text-neutral-500 text-md">{number}</p>
      <p className="text-neutral-900 text-xl font-semibold">{name}</p>
    </div>
  );
}
