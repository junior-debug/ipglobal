import useGlobalState from "../store/globasState";
import { useEffect, useState } from "react";
import MovieList from "../components/MovieList";
import axios, { AxiosResponse } from "axios";

const API_URL = "https://api.themoviedb.org/3/movie/popular";

interface Movie {
  id: number;
  title: string;
  release_date: string;
  overview: string;
  poster_path: string;
  // ... otras propiedades de la película
}

interface MovieResponse {
  results: Movie[];
}

export function Home() {
  const [localMovies, setLocalMovies] = useState<Movie[]>([]);

  const API_KEY = useGlobalState((state) => state.API_KEY);
  const movies = useGlobalState((state) => state.movies);

  useEffect(() => {
    setLocalMovies(movies);
  }, [movies]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: AxiosResponse<MovieResponse> = await axios.get(
          API_URL,
          {
            params: {
              api_key: API_KEY,
            },
          }
        );
        setLocalMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // El segundo argumento del useEffect asegura que la solicitud se haga solo una vez (equivalente a componentDidMount en las clases)

  return (
    <>
      <h1>Lista de Películas Populares</h1>
      <MovieList movies={localMovies}></MovieList>
    </>
  );
}

export type { Movie };
