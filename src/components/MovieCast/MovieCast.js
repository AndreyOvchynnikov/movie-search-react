import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getActorsByMovieId } from '../../themoviedbAPI';
import s from './MovieCast.module.css';

const MovieCast = () => {
    const { movieId } = useParams();
    const [movieActors, setMovieActors] = useState([]);

    useEffect(() => {
      const fetchMovieActors = async () => {
      try {
      const actors = await getActorsByMovieId(movieId) 
      setMovieActors(actors)
      } catch (error) {
      console.log(error); 
      }
    }
    
    fetchMovieActors();

    }, [movieId])

    return <ul className={s.list}>
        {movieActors.map((actor) => {
            return <li key={actor.id}>
                <img src={actor.profile_path ?
                    `https://image.tmdb.org/t/p/w500${actor.profile_path}` :
                    `https://placehold.co/400x600?text=No\n Image`}
                    alt={actor.name} className={s.image} />
                
                <h2>{actor.name}</h2>
                <p>Character: {actor.character}</p>
           </li>
        })}
    </ul>
}

export default MovieCast;