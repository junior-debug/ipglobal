import useGlobalState from "../store/globasState";
import axios from "axios";
import { SearchMovie } from "../components/Search";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  color: inherit; /* Hereda el color del texto del padre */
  text-decoration: none; /* Elimina el subrayado predeterminado */
  /* Agrega más estilos según sea necesario */
`;

const HeaderContainer = styled.div`
  background-color: #333;
  color: white;
  padding: 16px;
  display: flex;
  align-items: center;
`;

const ResponsiveCont = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 16px;
`;

const NavItem = styled.li`
  font-size: 18px;
`;

export function Header() {
  const API_KEY = useGlobalState((state) => state.API_KEY);
  const setMovies = useGlobalState((state) => state.setMovies);

  const handleSearch = (term: string) => {
    const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${term}&include_adult=false&language=en-US&page=1`;

    axios
      .get(apiUrl)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching search results:", error);
        // Mantén los resultados anteriores en caso de error
      });
  };

  return (
    <HeaderContainer>
      <ResponsiveCont>
        <h1>Mi Aplicación</h1>
        <NavList>
          <NavItem>
            <StyledLink to="/">Movies</StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to="/MyList">My List</StyledLink>
          </NavItem>
        </NavList>
      </ResponsiveCont>
      <ResponsiveCont>
        <SearchMovie handleSearch={handleSearch} />
      </ResponsiveCont>
    </HeaderContainer>
  );
}
