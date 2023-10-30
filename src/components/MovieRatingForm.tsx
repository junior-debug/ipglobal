import { useState } from "react";
import styled from "styled-components";
import StarRating from "../components/StarRating";
import useGlobalState from "../store/globasState";
import { Movie } from "../pages/Home";
import axios from "axios";

const Card = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h1`
  margin-bottom: 10px;
  font-size: 24px;
  margin-top: 0px;
`;

const CloseButton = styled.button`
  top: 0px;
  right: 0px;
  margin-left: 95%;
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

const ReleaseDate = styled.h2`
  color: #888;
  margin-bottom: 10px;
  font-size: 18px;
`;

const MovieImage = styled.img`
  display: none;
`;

const Overview = styled.p`
  color: #333;
  font-size: 16px;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const API_URL = "https://api.themoviedb.org/3/authentication/guest_session/new";

interface MovieRatingFormProps {
  selectedMovie: Movie | null;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export function MovieRatingForm({
  selectedMovie,
  setShowModal,
}: MovieRatingFormProps) {
  const API_TOK = useGlobalState((state) => state.API_TOK);
  const addMovieToMyList = useGlobalState((state) => state.addMovieToMyList);

  const [rating, setRating] = useState<number>(0);

  const handleRate = (rate: number) => {
    setRating(rate);
  };

  const handleSendRating = () => {
    const options = {
      method: "GET",
      url: API_URL,
      headers: {
        accept: "application/json",
        Authorization: API_TOK,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });

    // Cerrar el modal al enviar la puntuación

    if (selectedMovie) {
      addMovieToMyList(selectedMovie);
    }
    setShowModal(false);

    console.log(`Puntuación enviada: ${rating}`);
  };

  if (!selectedMovie) {
    return null;
  }

  return (
    <Card>
      <CloseButton onClick={() => setShowModal(false)}>×</CloseButton>
      <Title>{selectedMovie.title}</Title>
      <MovieImage
        src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`}
        alt={selectedMovie.title}
      />
      <ReleaseDate>
        Fecha de Lanzamiento: {selectedMovie.release_date}
      </ReleaseDate>
      <Overview>{selectedMovie.overview}</Overview>
      <StarRating onRate={handleRate} />
      <Button onClick={handleSendRating}>Enviar</Button>
    </Card>
  );
}
