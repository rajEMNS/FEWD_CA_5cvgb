import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import logo from "../assets/like.png";

function Form() {
  const initValues = { name: "", email: "", password: "", repeat: "" };
  const [Fdata, setFdata] = useState(initValues);
  const [register, setRegister] = useState(false);
  const [errs, seterrs] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFdata({ ...Fdata, [name]: value });
  };

  const Submit = (e) => {
    e.preventDefault();
    const validationErrors = validation(Fdata);
    seterrs(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setRegister(true);
    }
  };

  useEffect(() => {
    if (Object.keys(errs).length === 0 && register) {
    }
  }, [errs, register]);

  const validation = (values) => {
    const err = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

    if (!values.name) {
      err.name = "Name is required";
    } else if (values.name.length > 30 || values.name.length < 3) {
      err.name = "Name must be between 3 and 30 characters!";
    }

    if (!values.email) {
      err.email = "Email is required";
    } else if (!regex.test(values.email)) {
      err.email = "This is not a valid email format!";
    }

    if (!values.password) {
      err.password = "Password is required";
    } else if (values.password.length < 10) {
      err.password = "Password should be at least 10 characters!";
    } else if (!specialCharRegex.test(values.password)) {
      err.password = "Password should contain at least one special character!";
    }

    if (!values.repeat) {
      err.repeat = "Repeat your Password!";
    } else if (values.repeat !== values.password) {
      err.repeat = "Passwords don't match!";
    }

    return err;
  };

  return (
    <>
      {Object.keys(errs).length === 0 && register ? (
        <div
          className="success"
          style={{ backgroundColor: "rgb(158, 220, 152)" }}
        >
          <div>Registration Successful !!</div>
          <img src={logo} alt="" />
        </div>
      ) : null}
      <div className="forms">
        <div>
          <form onSubmit={Submit}>
            <h1 className="heading">Registration Form</h1>
            <div className="boxe">
              <label className="input-titles">Name:</label>
              <input
                type="text"
                name="name"
                value={Fdata.name}
                onChange={handleChange}
                className="input-btns name"
                placeholder="  Enter your name"
              />
            </div>
            <div className="error">{errs.name}</div>
            <div className="boxe">
              <label className="input-titles">Email:</label>
              <input
                type="text"
                name="email"
                value={Fdata.email}
                onChange={handleChange}
                className="input-btns email"
                placeholder="  email@gmail.com"
              />
            </div>
            <div className="error">{errs.email}</div>
            <div className="boxe">
              <label className="input-titles">Password:</label>
              <input
                type="password"
                name="password"
                value={Fdata.password}
                onChange={handleChange}
                className="input-btns password"
                placeholder="  **********"
              />
            </div>
            <div className="error">{errs.password}</div>
            <div className="boxe">
              <label className="input-titles">Confirm Password:</label>
              <input
                type="password"
                name="repeat"
                value={Fdata.repeat}
                onChange={handleChange}
                className="input-btns ConformPassword"
                id="ConformPassword"
                placeholder="  **********"
              />
            </div>
            <div className="error">{errs.repeat}</div>
            <div className="signin">
              <p className="text">
                Already have an account?
                <Link className="link" to="/home">
                  Click here !!
                </Link>
              </p>
              <button className="signup-btn" type="submit">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Form;
