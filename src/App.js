import "./App.scss";
import "./App.css";
import Intro from "./components/Intro";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Popup from "./components/Popup";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Alert from "./components/layout/Alert";
import MoviesTab from "./components/MoviesTab";
//Redux
import { Provider } from "react-redux";
import store from "./store";
import setAuthToken from "./utils/setAuthToken";
import { loadUser } from "./actions/auth";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
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
      fetch(apiurl + "&s=" + state.s).then(({ data }) => {
        let results = data.Search;
        setState((prevState) => {
          return { ...prevState, results: results };
        });
      });
    }
  };
  // const handleInput = (e) => {
  //   let s = e.target.value;
  //   setState((prevState) => {
  //     return { ...prevState, s: s };
  //   });
  // };
  // const openPopup = (id) => {
  //   axios(apiurl + "&i=" + id).then(({ data }) => {
  //     let result = data;
  //     console.log(result);
  //     setState((prevState) => {
  //       return { ...prevState, selected: result };
  //     });
  //   });
  // };
  const closePopup = () => {
    setState((prevState) => {
      return { ...prevState, selected: {} };
    });
  };

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <div className="App">
        <main>
          <Router>
            <Navbar />
            <Alert />
            <Switch>
              <Route path="/" exact component={Intro} />
              <Route path="/signup" exact component={Signup} />
              <Route path="/signin" exact component={Signin} />
              <Route path="/movies" exact component={MoviesTab} />
            </Switch>
            {/* <header><h1>Movie Database</h1></header>
          <Search handleInput={handleInput} search={search} />
          <Results results={state.results} openPopup={openPopup} /> */}
          </Router>
          {typeof state.selected.Title != "undefined" ? (
            <Popup selected={state.selected} closePopup={closePopup} />
          ) : (
            false
          )}
        </main>
      </div>
    </Provider>
  );
};

export default App;
