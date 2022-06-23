import { useEffect, useState } from "react"
import movieDB from "../api/movieDB";
import { Cast, CreditsResponse } from "../interfaces/creditsInterface";
import { MovieFull } from "../interfaces/movieInterface";

interface MovieDetails {
    isLoading: boolean;
    movieFull?: MovieFull;
    cast: Cast[];
}

export const useMovieDetails = (movieId: number) => {
    const [state, setState] = useState<MovieDetails>({
        isLoading: true,
        movieFull: undefined,
        cast: []
    });

    const getMovieDetails = async () => {
        const MovieDetailsPromise = movieDB.get<MovieFull>(`${movieId}`);
        const CastPromise = movieDB.get<CreditsResponse>(`${movieId}/credits`);

        const [movieDetailsResp, CastPromiseResp] = await Promise.all([MovieDetailsPromise, CastPromise]);

        setState({
            isLoading: false,
            movieFull: movieDetailsResp.data,
            cast: CastPromiseResp.data.cast
        });
    }

    useEffect(() => {
        getMovieDetails();
    }, []);

    return {
        ...state
    }
}
