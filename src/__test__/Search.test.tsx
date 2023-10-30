import { render, fireEvent } from "@testing-library/react";
import { SearchMovie } from "../components/Search";

test("renders SearchMovie component", () => {
  const mockHandleSearch = jest.fn();
  const { getByPlaceholderText, getByText } = render(
    <SearchMovie handleSearch={mockHandleSearch} />
  );

  // Verificar que el componente se haya renderizado correctamente
  const searchInput = getByPlaceholderText("Buscar...");
  const searchButton = getByText("Buscar");

  // Simular un cambio en el input
  fireEvent.change(searchInput, { target: { value: "Avengers" } });

  // Simular clic en el botón de búsqueda
  fireEvent.click(searchButton);

  // Verificar que la función handleSearch se haya llamado con el término de búsqueda correcto
  expect(mockHandleSearch).toHaveBeenCalledWith("Avengers");
});
