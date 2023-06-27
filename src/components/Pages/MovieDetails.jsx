import { FetchDetails } from "components/API/API";
import React, { useState, useEffect, Suspense } from "react"
import { Link, Outlet, useLocation, useParams } from "react-router-dom"
import { Details } from './Pages.styled';


const MovieDetails = () => {
    const [details, setDetails] = useState(null);
    const { id } = useParams();
    const {
        title = '',
        poster_path = '',
        overview = '',
        genres = [],
        vote_average = ''
    } = details || {};

    useEffect(() => {
        FetchDetails(id).then(setDetails)
    }, [id]);

    const location = useLocation();
    
    
    return (
        <Details>
            <div>
                <Link to={location.state?.from ?? '/'}>Back</Link>
            </div>
            <article>
            <div className="card">
                <img src={`https://image.tmdb.org/t/p/w200/${poster_path}`} className="card-img-top" alt="..." />
                <div>
                    <h2>{title}</h2>
                    <p>{overview}</p>
                </div>
                <ul>
                    <li><span>Genre:</span> {genres.map(({ name }) => name).join(', ')}</li>
                    <li><span>Rating:</span> {vote_average}</li>
                </ul>
            </div>
            </article>
            <ul>
                <Link to="cast">Cast</Link>
                <Link to="reviews">Reviews</Link>
            </ul>

            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </Details>
    );
    
};

export default MovieDetails;


