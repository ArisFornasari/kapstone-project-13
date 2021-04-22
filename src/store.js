// import create from "zustand";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;

// import { devtools, redux } from "zustand/middleware";

// define the store's initial state
// const initialState = { user: { token: "" }, messages: [] };

// set action types
// export const LOGIN = "LOGIN";
// export const LOGOUT = "LOGOUT";
// export const SIGNUP = "SIGNUP";

// define reducer function
// const reducer = (state, action) => {
//   switch (action.type) {
//     case LOGIN:
//       return { user: { token: action.payload }, ...state };
//     case SIGNUP:
//       return { user: action.payload };
//     case LOGOUT:
//       return { user: {} };
//     default:
//       return state;
//   }
// };

// create useStore hook
// export const useStore = create(devtools(redux(reducer, initialState)));
