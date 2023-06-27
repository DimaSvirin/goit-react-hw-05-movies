import { Link, useLocation } from 'react-router-dom';
import { Ol } from './MovieList.styled';

export const MovieList = ({ data }) => {
  const location = useLocation();
  return (
    <Ol>
      {data &&
        data.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        ))}
    </Ol>
  );
};
