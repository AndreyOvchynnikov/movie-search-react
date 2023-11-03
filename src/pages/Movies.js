import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovie } from '../themoviedbAPI';
import { useEffect } from 'react';
import MovieSearchList from '../components/MovieSearchList';
import SearchForm from '../components/SearchForm';

const Movies = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const request = searchParams.get("request") || '';
    const [searchResult, setsearchResult] = useState([]);
     
    const getMovieRequest = (event) => {
        event.preventDefault();
        setSearchParams({ request: event.currentTarget.elements.request.value })
        event.currentTarget.reset() 
    }

    useEffect(() => {
        if (request === '') {
           return
       }      

      const getSearch = async () => {
      try {
      const movies = await getSearchMovie(request) 
      setsearchResult(movies)
      } catch (error) {
      console.log(error); 
      }
    }
    
    getSearch();
        
    }, [request])
    
    
    return <>
        <SearchForm getMovieRequest={getMovieRequest} />
        <MovieSearchList movies={searchResult} />
    </>
}

export default Movies;