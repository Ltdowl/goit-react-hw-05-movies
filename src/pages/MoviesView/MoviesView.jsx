import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchMovie } from '../../services/API';
import MoviesLinkList from '../../components/MoviesLinkList/MoviesLinkList';

export default function MoviesView() {
  const [movies, setMovies] = useState(null);
  const [query, setQuery] = useState('');

  const [searchParams, setSearchParams] = useSearchParams();
  const curentPos = searchParams.get('query');

  useEffect(() => {
    if (!curentPos) return;
    fetchSearchMovie(curentPos)
      .then(data => {
        if (data.length === 0) {
          setSearchParams({});
          return;
        }
        setMovies(data);
      })
      .catch(error => console.error(error));
  }, [curentPos, setSearchParams]);

  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      console.log('Enter the text');
      return;
    }
    setSearchParams({ query: query.trim() });
  };
  const handelInputChange = e => {
    const text = e.currentTarget.value.toLowerCase();
    setQuery(text);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input name={query} onChange={handelInputChange} type="text"></input>
        <input type="submit" value="Search" />
      </form>
      {movies && <MoviesLinkList data={movies.results} />}
    </>
  );
}
