import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { loginRequest } from "../fetchRequest";
import { useStore } from "../store";

const Signin = () => {
  const dispatch = useStore((state) => state.dispatch);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    loginRequest(formData.email, formData.password).then((data) =>
      dispatch({ type: "LOGIN", payload: data })
    );
    console.log("Success");
  };
  return (
    <Fragment>
      <h1 className="large text-primary">Sign In</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Sign Into Your Account
      </p>
      <form className="form" onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => onChange(e)}
            minLength="6"
          />
        </div>

        <input type="submit" className="btn btn-primary" value="Sign In " />
      </form>
      <p className="sign-in">
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </Fragment>
  );
};

export default Signin;
