import { useState, ChangeEvent, MouseEventHandler } from "react";
import styled from "styled-components";

const SearchInput = styled.input`
  padding: 8px;
  border: none;
  border-radius: 4px;
  width: 27em;
`;

const SearchButton = styled.button`
  /* Estilos del botón de búsqueda */
  padding: 8px 16px; /* Padding interior */
  background-color: #4caf50; /* Color de fondo */
  color: white; /* Color del texto */
  border: none; /* Sin borde */
  border-radius: 4px; /* Bordes redondeados */
  cursor: pointer; /* Cambia el cursor al pasar el ratón */
  transition: background-color 0.3s ease; /* Efecto de transición en el color de fondo */
  margin-left: 1em;

  &:hover {
    background-color: #45a049; /* Cambia el color de fondo al pasar el ratón */
  }
`;

interface SearchMovieProps {
  handleSearch: (searchTerm: string) => void;
}

export function SearchMovie(props: SearchMovieProps): JSX.Element {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleButtonClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    props.handleSearch(searchTerm);
  };

  return (
    <>
      <SearchInput
        type="text"
        placeholder="Buscar..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <SearchButton onClick={handleButtonClick}>Buscar</SearchButton>
    </>
  );
}
