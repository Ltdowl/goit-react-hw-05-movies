import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function MoviesLinkList(data) {
  const location = useLocation();
  return (
    data && (
      <ul>
        {data.data.map(({ id, original_title }) => {
          return (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {original_title}
              </Link>
            </li>
          );
        })}
      </ul>
    )
  );
}

MoviesLinkList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_title: PropTypes.string.isRequired,
    })
  ),
};
