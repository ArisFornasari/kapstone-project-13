import React from "react";
import StarRating from './StarRating'
function Result({ result, openPopup }) {
  return (
    <div className="result" onClick={() => openPopup(result.imdbID)}>
      <img src={result.Poster} alt="Movie Poster" />
      <h3>{result.Title}</h3>
      <StarRating />
    </div>
  );
}

export default Result;
