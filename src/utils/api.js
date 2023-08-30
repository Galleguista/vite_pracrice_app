export const fetchCharacters = async () => {
    try {
      const data = await fetch('https://rickandmortyapi.com/api/character');
      const response = await data.json();
      return response.results;
    } catch (error) {
      console.error(error);
    }
  };
  