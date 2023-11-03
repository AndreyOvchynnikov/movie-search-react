import { useState, useEffect } from 'react';
import MovieTrendingList from '../components/MovieTrendingList';
import { getTrendingMovies } from '../themoviedbAPI';

const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
      const getMovies = async () => {
      try {
      await getTrendingMovies().then(movies => 
      setMovies(movies))
      } catch (error) {
      console.log(error); 
      }
    }

    getMovies();

    }, [])


    return <>
        <MovieTrendingList movies={movies} />
    </>
}

export default Home;