import { FetchCasts } from "components/API/API";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PropTypes from 'prop-types';
import { CastStyled } from 'components/Cast/Cast.styled';
import nopersonphoto from "../../images/nopersonphoto.png"

const Cast = () => {
    const [casts, setCasts] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        FetchCasts(id).then(setCasts);
    }, [id]);

    return (
        { casts } && (
          <CastStyled>
            <h2>Cast:</h2>
            <ul>
              {casts?.length === 0 ? (
                <p>We don't have any casts for this movies</p>
              ) : (
                casts?.map(({ profile_path, name, character, cast_id }) => (
                  <li className="thumb-cast" key={cast_id}>
                    <p>Character: {character || 'none'}</p>
                    <p>Name: {name || 'none'}</p>
                    <img src={profile_path ? `https://image.tmdb.org/t/p/w200/${profile_path}` : nopersonphoto} alt={name} />
    
                    <br />
                  </li>
                ))
              )}
            </ul>
          </CastStyled>
        )
      );
};

Cast.propTypes = {
    profile_path: PropTypes.string,
    name: PropTypes.string,
    character: PropTypes.string
};

export default Cast;
