import { useState, useEffect, lazy, Suspense } from 'react';
import {
  useParams,
  useLocation,
  useNavigate,
  Link,
  Routes,
  Route,
} from 'react-router-dom';
import * as movieApi from '../../services/API';
import s from './MovieDetailsView.module.css';
const Cast = lazy(() =>
  import('../Cast/Cast' /* webpackChunkName: "cast-view" */)
);
const Review = lazy(() =>
  import('../Reviews/Reviews' /* webpackChunkName: "review-view" */)
);

export default function MovieDetailsView() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
  const navigate = useNavigate();
  const location = useLocation();
  const backLink = location?.state?.from ?? '/';

  useEffect(() => {
    movieApi.fetchMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  return (
    movie && (
      <>
        <Link to={backLink} className={s.back_link}>
          &#8592; Go back
        </Link>
        <div className={s.movie_container}>
          <div className={s.photo_container}>
            <img
              className={s.poster}
              src={BASE_IMAGE_URL + movie.poster_path}
              alt={movie.title}
            />
          </div>
          <div>
            <h2>{movie.title}</h2>
            <p>User score: {movie.vote_average}</p>
            <h4>Overview</h4>
            <p>{movie.overview}</p>
            <h4>Genres</h4>
            <p>{movie.genres.map(({ name }) => name).join(', ')}</p>
          </div>
        </div>
        <hr />
        <div>
          <p>Additional information:</p>
          <ul>
            <li>
              <Link to="cast" state={location.state}>
                Cast
              </Link>
            </li>
            <li>
              <Link to="reviews" state={location.state}>
                Reviews
              </Link>
            </li>
          </ul>
        </div>
        <hr />
        <Suspense fallback={<>loading...</>}>
          <Routes>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Review />} />
          </Routes>
        </Suspense>
      </>
    )
  );
}
