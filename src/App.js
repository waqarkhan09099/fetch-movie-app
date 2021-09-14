import React, { useState, useEffect } from 'react';
import Wrapper from './Components/Wrapper/Wrapper'
import Movie from './Components/MovieData/Movie'
import { ButtonUi } from './Components/UI/UI'
import CustomForm from './Components/Custom Movies/MovieForm'


function App() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const data1=[]
  async function fetchDataHandler() {
    // async function fetchData() {
    setLoading(false)
    // const response = await fetch(`https://swapi.dev/api/films/`)
    const response = await fetch(`https://my-react-project-fd7ea-default-rtdb.firebaseio.com/movies.json`)
    const data = await response.json();
    // setMovies(data.results);
    // we apply loop for get data form keys and are random from firebase
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
        {loading && movies.length === 0 && <p>Movies not found</p>}
        {!loading && movies.length === 0 && <p>Loading...</p>}
        {movies.length > 0 && <Movie data={movies} />}
      </Wrapper>
    </>
  );
}

export default App;
