import { Link, useLocation } from "react-router-dom";
import s from './MovieTrendingList.module.css'


const MovieTrendingList = ({ movies }) => {
    const location = useLocation();
    return (
        <ul className={s.list}>
            {movies.map((movie) => {
                return <li key={movie.id} className={s.listItem}>
                    <Link to={`movies/${movie.id}`} state={{from: location}}>{movie.title}</Link>
                </li> 
            })}
        </ul>
    )
}

export default MovieTrendingList;