import axios from "axios";
const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'api_key=1908df0a632eb4291cd1ba925f0a1a18'


export async function FetchTrends() {
       try {
               const response = await axios(`${BASE_URL}trending/movie/day?${API_KEY}`);
               return response.data.results;
       } catch (error) {
               console.log(error);
        };
};

export async function FetchFilm(searchValue) {
        try {
                const response = await axios(`${ BASE_URL }search/movie?${ API_KEY }&query=${ searchValue }&include_adult=false&language=en-US&page=1`);
                return response.data.results;
        } catch (error) {
                console.log(error);
        };
};

export async function FetchDetails(id) {
        try {
                const response = await axios(`${BASE_URL}movie/${id}?language=en-US&${API_KEY}`);
                return response.data;
        } catch (error) {
                console.log(error);
        };
};

export async function FetchCasts(id) {
        try {
                const response = await axios(`${BASE_URL}movie/${id}/credits?language=en-US&${API_KEY}`);
                return response.data.cast;

        } catch (error) {
                console.log(error);
        };
};

export async function FetchReview(id) {
        try {
                const response = await axios(`${BASE_URL}movie/${id}/reviews?language=en-US&page=1&${API_KEY}`);
                return response.data.results;

        } catch (error) {
                console.log(error);
        }
}