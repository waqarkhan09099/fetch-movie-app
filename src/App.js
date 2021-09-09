import React, { useState } from 'react';
import Wrapper from './Components/Wrapper/Wrapper'
import Movie from './Components/MovieData/Movie'
import { ButtonUi } from './Components/UI/UI'


function App() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  async function fetchDataHandler (){
    // async function fetchData() {
      setLoading(false)
      const response = await fetch(`https://swapi.dev/api/films/`)
      const data = await response.json();
      setMovies(data.results);

    // }
    setLoading(true)
    // fetchData();
  }
  return (
    <>
      <Wrapper>
        <ButtonUi onClick={fetchDataHandler}>Fetch Data</ButtonUi>
      </Wrapper>
      <Wrapper>
        {loading && movies.length === 0 && <p>Movies not found</p>}
        {!loading && movies.length === 0 && <p>Loading...</p>}
        {movies.length > 0 && <Movie data={movies} />}
      </Wrapper>
    </>
  );
}

export default App;
