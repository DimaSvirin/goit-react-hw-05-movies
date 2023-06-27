import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FetchReview } from 'components/API/API';
import PropTypes from 'prop-types';
import { ReviewStyled } from './Reviews.styled';

const Reviews = () => {
  const [reviev, setReviev] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    FetchReview(id).then(setReviev);
  }, [id]);

  if (reviev.length === 0) {
    return <div>There is no reviews</div>;
  }
  return (
    <ReviewStyled>
      <ul>
        {reviev.map(({ id, content, author }) => (
          <li key={id}>
            <h5>{author}</h5>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </ReviewStyled>
  );
};

Reviews.propTypes = {
  content: PropTypes.string,
  author: PropTypes.string,
};

export default Reviews;
