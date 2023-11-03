import { Link, useLocation } from "react-router-dom";
import s from './MovieSearchList.module.css';


const MovieSearchList = ({ movies }) => {
    const location = useLocation();
    return (
        <ul>
            {movies.map((movie) => {
                return <li key={movie.id} className={s.listItem}>
                    <Link to={`${movie.id}`} state={{from: location}}>{movie.title}</Link>
                </li> 
            })}
        </ul>
    )
}

export default MovieSearchList;