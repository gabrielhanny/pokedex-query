import Image from 'next/image';

type Props = {
  src: string;
  alt: string;
};

export default function PokemonImage({ src, alt }: Props) {
  return (
    <div className="pt-6 px-11 pb-[161px]">
      <Image src={src} alt={alt} width={199} height={199} className="mx-auto" />
    </div>
  );
}
