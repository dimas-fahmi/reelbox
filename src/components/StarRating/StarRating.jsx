import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfAlt,
  faStar as faStarEmpty,
} from "@fortawesome/free-solid-svg-icons";

const StarRating = ({ rating, maxRating = 10, starCount = 5 }) => {
  const ratingPerStar = maxRating / starCount;
  const fullStars = Math.floor(rating / ratingPerStar);
  const halfStars = rating % ratingPerStar >= ratingPerStar / 2 ? 1 : 0;
  const emptyStars = starCount - fullStars - halfStars;

  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <FontAwesomeIcon
        className="text-yellow-300"
        key={`full-${i}`}
        icon={faStar}
      />
    );
  }

  if (halfStars) {
    stars.push(
      <FontAwesomeIcon
        className="text-yellow-300"
        key={`half`}
        icon={faStarHalfAlt}
      />
    );
  }

  for (let i = 0; i < emptyStars; i++) {
    stars.push(<FontAwesomeIcon key={`empty-${i}`} icon={faStarEmpty} />);
  }

  return <div>{stars}</div>;
};

export default StarRating;
