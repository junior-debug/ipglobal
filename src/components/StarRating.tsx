import React, { useState } from "react";
import styled from "styled-components";

interface StarProps {
  selected: boolean;
}

const StarContainer = styled.div`
  display: inline-block;
  margin-right: 10px;
`;

const Star = styled.span<StarProps>`
  font-size: 24px;
  cursor: pointer;
  color: ${(props) => (props.selected ? "#FFD700" : "#ccc")};
`;

interface StarRatingProps {
  onRate: (rating: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({ onRate }) => {
  const [rating, setRating] = useState<number>(0);

  const handleStarClick = (index: number) => {
    setRating(index + 1);
    onRate(index + 1);
  };

  return (
    <StarContainer>
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          selected={index < rating}
          onClick={() => handleStarClick(index)}
        >
          ★
        </Star>
      ))}
    </StarContainer>
  );
};

export default StarRating;
