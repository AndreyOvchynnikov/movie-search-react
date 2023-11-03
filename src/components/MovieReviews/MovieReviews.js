import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getReviewsByMovieId } from '../../themoviedbAPI';
import s from './MovieReviews.module.css';

const MovieReviews = () => {
    const { movieId } = useParams();
    const [movieReviews, setMovieReviews] = useState([]);

    useEffect(() => {
      const fetchMovieReviews = async () => {
      try {
      const rewiews = await getReviewsByMovieId(movieId) 
      setMovieReviews(rewiews)
      } catch (error) {
      console.log(error); 
      }
    }
    
    fetchMovieReviews();

    }, [movieId])

    return <ul>
        {movieReviews.length === 0? <p>No reviews</p> : movieReviews.map((review) => {
            return <li key={review.id} className={s.listItem}>
                <h2>{review.author}</h2>
                <p>{review.content}</p>
           </li>
        })}
    </ul>
}

export default MovieReviews;