import "../App.scss";
import React, { useState } from "react";
import axios from "axios";
import Search from "../components/Search";
import Results from "../components/Results";
import Popup from "./Popup";

export default function MoviesTab() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {},
  });
  const apiurl = "http://www.omdbapi.com/?apikey=4ab61677";

  const search = (e) => {
    if (e.key === "Enter") {
      // The "s" stands for search.
      fetch(apiurl + "&s=" + state.s)
        .then((response) => response.json())
        .then((data) => {
          setState((prevState) => {
            return { ...prevState, results: data.Search };
          });
        });
    }
  };
  const handleInput = (e) => {
    let s = e.target.value;
    setState((prevState) => {
      return { ...prevState, s: s };
    });
  };
  const openPopup = (id) => {
    fetch(apiurl + "&i=" + id)
      .then((response) => response.json())
      .then((data) => {
        setState((prevState) => {
          return { ...prevState, results: data.Search };
        });
        let result = data;
        console.log(result);
        setState((prevState) => {
          return { ...prevState, selected: result };
        });
      });
  };
  const closePopup = () => {
    setState((prevState) => {
      return { ...prevState, selected: {} };
    });
  };

  return (
    <div>
      <header>
        <h1> <img src="https://fontmeme.com/permalink/210423/54ae7669563b07c8272f0d1579872696.png"></img></h1>
      </header>
      <Search handleInput={handleInput} search={search} />
      <Results results={state.results} openPopup={openPopup} />
      {typeof state.selected.Title != "undefined" ? (
        <Popup selected={state.selected} closePopup={closePopup} />
      ) : (
        false
      )}
    </div>
  );
}
