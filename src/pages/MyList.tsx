import useGlobalState from "../store/globasState";
import MovieList from "../components/MovieList";

export function MyList() {
  const myList = useGlobalState((state) => state.myList); // Obtiene myList del estado global
  console.log(myList);

  return (
    <div>
      <h1>Mi Lista de Películas</h1>
      <MovieList movies={myList}></MovieList>
    </div>
  );
}
