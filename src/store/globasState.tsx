import { create } from "zustand";

interface GlobalState1 {
  addMovieToMyList: any;
  API_KEY: string;
  API_TOK: string;
  movies: any[]; // Estado para todas las películas
  myList: any[]; // Estado para las películas seleccionadas
  setMovies: (movies: any[]) => void;
}

const useGlobalState = create<GlobalState1>((set) => ({
  API_KEY: "8f781d70654b5a6f2fa69770d1d115a3",
  API_TOK:
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZjNmYzNlODNlNWNlNjMzNzgzNmNjZTk3MDU2MWFmOCIsInN1YiI6IjY1MzdmZjg0ZjQ5NWVlMDBmZjY1ZDNlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.s9QQ8hTGF7Kc1e17zSQ73RTK-QVtXWKj62eE2ycTgTQ",
  movies: [], // Estado para todas las películas
  myList: [], // Estado para las películas seleccionadas
  setMovies: (movies) => set({ movies }),
  setMyList: (myList: any) => set({ myList }),
  addMovieToMyList: (movie: any) =>
    set((state) => ({ myList: [...state.myList, movie] })),
}));

export default useGlobalState;
