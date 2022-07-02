import { fetchMovieCredits } from '../../services/API';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import s from './Cast.module.css';
import noImage from '../../images/noimg.jpg'

export default function Cast() {
  const [movieCredits, setMovieCredits] = useState(null);
  const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieCredits(movieId).then(setMovieCredits);
  }, [movieId]);

  return (
    movieCredits && (
      <div>
        <ul>
          {movieCredits.cast.map(
            ({ cast_id, original_name, character, profile_path }) => (
              <li key={cast_id}>
                <img
                  className={s.profile_image}
                  src={
                    profile_path
                      ? `${BASE_IMAGE_URL}${profile_path}`
                      : noImage
                  }
                  alt={original_name}
                />
                <p>{original_name}</p>
                <p>Character: {character}</p>
              </li>
            )
          )}
        </ul>
      </div>
    )
  );
}
