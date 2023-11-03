import { Suspense, useRef } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import s from './MoviePage.module.css';
import { StyledSection } from './StyledMoviePage';



const MoviePage = ({ movieDetails }) => {
    const location = useLocation();
    const backLinkHref = useRef(location.state?.from ?? "/");

    const { backdrop_path, release_date, vote_average, genres, title, overview, poster_path } = movieDetails;
    
    return <div>
        <Link to={backLinkHref.current} className={s.link}>
              <button className={s.button} type="button">Go back</button>  
        </Link>
        <StyledSection backdrop={backdrop_path}>
            <div className={s.imageConteiner}>
                <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} className={s.image} />
            </div>
            <div>
                <h1>{title} ({release_date.slice(0,4)})</h1>
                <p className={s.userScore}>User Score: {Math.round(vote_average*10)}%</p>
                <h2>Overview</h2>
                <p className={s.overview}>{overview}</p>
                <h2>Genres</h2>
                <ul className={s.list}>{genres.map((genre) => {
                    return <li key={genre.id} className={s.listItem}>
                        <p>{genre.name}</p>
                        </li>
                })}</ul>
            </div>
        
        </StyledSection>
        <section className={s.addInfo}>
            <h3>Additional information</h3>
            <ul className={s.addInfoList}>
                <li className={s.addInfoListItem}>
                    <Link to="cast">
                        <button className={s.addInfoBtn}>Cast</button>
                    </Link>
                </li>
            <li>
                    <Link to="reviews">
                    <button className={s.addInfoBtn}>Reviews</button>
                    </Link>
            </li>
            </ul>
        </section>
        <Suspense fallback={<div>Loading...</div>}>
            <Outlet/>
        </Suspense>
    </div>
}

export default MoviePage;