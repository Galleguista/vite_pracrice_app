import React, { Fragment, useEffect, useState } from 'react';
import Card from './components/Card';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import { fetchCharacters } from './utils/api';

const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const charData = await fetchCharacters();
      setCharacters(charData);
    };

    fetchData().catch(console.error);
  }, []);

  return (
    <Fragment>
      <Navigation />
      <section className="h-96 dark:bg-gray-800 grid place-content-center">
        <p className='text-8xl font-black text-black'>The Rick and Morty API</p>
      </section>
      <div className="grid grid-cols-2 mt-5 mx-5 gap-6">
        {characters.map(character => (
          <Card key={character.id} character={character} />
        ))}
      </div>
      <Footer />
    </Fragment>
  );
};

export default App;
