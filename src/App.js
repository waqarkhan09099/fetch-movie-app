import React, { useState, useEffect } from 'react';
import Wrapper from './Components/Wrapper/Wrapper'
import Movie from './Components/MovieData/Movie'
import { ButtonUi } from './Components/UI/UI'
import CustomForm from './Components/Custom Movies/MovieForm'


function App() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError]=useState(null)
  const data1=[]
  async function fetchDataHandler() {
    // async function fetchData() {
    setLoading(false)
    setError(null)
    // const response = await fetch(`https://swapi.dev/api/films/`)
    try{
      
      const response = await fetch(`https://my-react-project-fd7ea-default-rtdb.firebaseio.com/movies.json`)
      const data = await response.json();
      // setMovies(data.results);
      // we apply loop for get data form keys and are random from firebase
      if(!response.ok){
        throw new Error('Something went Wrong');
      }
      for(let key in data){
        data1.push({
          title:data[key].title,
          ReleaseDate:data[key].ReleaseDate,
          director:data[key].director,
          about:data[key].about,
        })
      }
      setMovies(data1);
      // console.log(data);
      // }
    }
    catch(error){
      setError(error.message);
    }
    setLoading(true)
    // fetchData();
  }

  async function getDataFunc(data){
    const response=await fetch(`https://my-react-project-fd7ea-default-rtdb.firebaseio.com/movies.json`,{
      method:"POST",
      body:JSON.stringify(data),
      headers:{
          'Content-Type':'application/json'
      }

    });

  }
  return (
    <>
      <CustomForm Data={getDataFunc}/>
      <Wrapper>
        <ButtonUi onClick={fetchDataHandler}>Fetch Data</ButtonUi>
      </Wrapper>
      <Wrapper>
        {loading && movies.length === 0 && !error && <p>Movies not found</p>}
        {!loading && movies.length === 0 && <p>Loading...</p>}
        {!loading && error && <p>{error}</p>}
        {movies.length > 0 && <Movie data={movies} />}
      </Wrapper>
    </>
  );
}

export default App;
