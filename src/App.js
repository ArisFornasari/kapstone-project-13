import React, { useState } from "react";
import axios from "axios";

import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Search from "./components/Search";
import Results from "./components/Results";
import Popup from "./components/Popup";
import Signup from "./components/Signup";
import Signin from "./components/Signin";

function App() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {},
  });
  const apiurl = "http://www.omdbapi.com/?apikey=4ab61677";
  //i=tt3896198&apikey=4ab61677
  const search = (e) => {
    if (e.key === "Enter") {
      // The "s" stands for search.
      axios(apiurl + "&s=" + state.s).then(({ data }) => {
        let results = data.Search;

        setState((prevState) => {
          return { ...prevState, results: results };
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
    axios(apiurl + "&i=" + id).then(({ data }) => {
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
    <div className="App">
      <main>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact />
            <Route path="/signup" exact component={Signup} />
            <Route path="/signin" exact component={Signin} />
          </Switch>

          <header>
            <h1>Movie Database</h1>
          </header>
          <Search handleInput={handleInput} search={search} />

          <Results results={state.results} openPopup={openPopup} />
        </Router>

        {typeof state.selected.Title != "undefined" ? (
          <Popup selected={state.selected} closePopup={closePopup} />
        ) : (
          false
        )}
      </main>
    </div>
  );
}

export default App;
