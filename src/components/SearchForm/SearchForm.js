import s from './SearchForm.module.css';

const SearchForm = ({getMovieRequest}) => {
  return  <form onSubmit={getMovieRequest} className={s.form}>
            <input
                type="text"
                name="request" 
                className={s.input}
                placeholder=" search movie..."
                autoFocus            
            />
            <button type="submit" className={s.button}>Search</button>
        </form>
}

export default SearchForm;