import React from "react";

interface RatingProps {
  rating: number;
}

const Rating: React.FC<RatingProps> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = Math.floor(5 - rating);

  return (
    <div className="rating text-2xl ">
      {[...Array(fullStars)].map((_, index) => (
        <span key={`full-${index}`}>★</span>
      ))}
      {hasHalfStar && <span>½★</span>}
      {[...Array(emptyStars)].map((_, index) => (
        <span key={`empty-${index}`}>☆</span>
      ))}
    </div>
  );
};

export default Rating;
