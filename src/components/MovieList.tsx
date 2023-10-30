import { useState } from "react";
import styled from "styled-components";
import { Movie } from "../pages/Home";
import { MovieRatingForm } from "./MovieRatingForm";

const MovieListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 16px;
  margin: 20px;
`;

const MovieCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  cursor: pointer;
`;

const MovieImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const MovieReleaseDate = styled.p`
  font-size: 14px;
  color: #666;
`;

const ModalWrapper = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MovieTitle = styled.h2`
  color: black;
  font-size: 24px;
  margin-bottom: 10px;
`;

const MovieOverview = styled.p`
  color: black;
  font-size: 12px;
  display: none;
`;

export default function MovieList({ movies }: any) {
  const openModal = (movie: Movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };

  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  return (
    <div>
      <MovieListContainer>
        {movies.map((movie: Movie) => (
          <MovieCard key={movie.id}>
            <MovieImage
              onClick={() => openModal(movie)}
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <MovieTitle>{movie.title}</MovieTitle>
            <MovieReleaseDate>{movie.release_date}</MovieReleaseDate>
            <MovieOverview>{movie.overview}</MovieOverview>
          </MovieCard>
        ))}
        {showModal && (
          <ModalWrapper>
            <MovieRatingForm
              selectedMovie={{
                id: selectedMovie?.id || 0,
                title: selectedMovie?.title || "",
                release_date: selectedMovie?.release_date || "",
                overview: selectedMovie?.overview || "",
                poster_path: selectedMovie?.poster_path || "",
              }}
              setShowModal={setShowModal}
            />
          </ModalWrapper>
        )}
      </MovieListContainer>
    </div>
  );
}
