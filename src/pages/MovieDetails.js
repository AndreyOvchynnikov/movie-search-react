import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMoviesById } from '../themoviedbAPI';
import MoviePage from "components/MoviePage";


const MovieDetails = () => {
    const { movieId } = useParams();
    const [movieDetails, setMovieDetails] = useState(null);

    useEffect(() => {
      const getMovieDetails = async () => {
      try {
      const movie = await getMoviesById(movieId) 
      setMovieDetails(movie)
      } catch (error) {
      console.log(error); 
      }
    }
    
    getMovieDetails();

    }, [movieId])

     if (!movieDetails) {
        return
    }
   
    return <MoviePage movieDetails={movieDetails} />
}

export default MovieDetails;