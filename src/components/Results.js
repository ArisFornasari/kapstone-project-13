import React from "react";
import Result from "./Result";

function Results({ results, openPopup }) {
  return (
    <section className="results">
      {results &&
        results.map((result) => (
          <Result key={result.imdbID} result={result} openPopup={openPopup} />
        ))}
    </section>
  );
}
//store id on user model
//map through users watch list
//querry to db
export default Results;
