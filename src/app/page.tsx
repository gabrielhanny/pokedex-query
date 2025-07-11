import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import PokemonList from '@/components/PokemonList/PokemonList';


const Home = () => {
  return (
    <main>
      <Hero />
      <PokemonList />
      <Footer />
    </main>
  );
};

export default Home;
