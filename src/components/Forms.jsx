import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import logo from "../assets/like.png";

function Form() {
  // Initial form values
  const initValues = { name: "", email: "", password: "", repeat: "" };
  // State to manage form data
  const [Fdata, setFdata] = useState(initValues);
  // State to manage registration success
  const [register, setRegister] = useState(false);
  // State to manage form validation errors
  const [errs, seterrs] = useState({});

  // Function to handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFdata({ ...Fdata, [name]: value });
  };

  // Function to handle form submission
  const Submit = (e) => {
    e.preventDefault();
    // Validate form data
    const validationErrors = validation(Fdata);
    // Set validation errors
    seterrs(validationErrors);
    // If there are no validation errors, set registration success to true
    if (Object.keys(validationErrors).length === 0) {
      setRegister(true);
    }
  };

  // Effect to perform actions after successful registration
  useEffect(() => {
    if (Object.keys(errs).length === 0 && register) {
      // Perform actions after successful registration if needed
    }
  }, [errs, register]);

  // Function to validate form data
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
      {/* Display success message if there are no errors and registration is successful */}
      {Object.keys(errs).length === 0 && register ? (
        <div
          className="success"
          style={{ backgroundColor: "rgb(158, 220, 152)" }}
        >
          <div>Registration Successful !!</div>
          <img src={logo} alt="" />
        </div>
      ) : null}
      {/* Registration form */}
      <div className="forms">
        <div>
          <form onSubmit={Submit}>
            <h1 className="heading">Registration Form</h1>
            {/* Input for Name */}
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
            {/* Display error for Name */}
            <div className="error">{errs.name}</div>
            {/* Input for Email */}
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
            {/* Display error for Email */}
            <div className="error">{errs.email}</div>
            {/* Input for Password */}
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
            {/* Display error for Password */}
            <div className="error">{errs.password}</div>
            {/* Input for Confirm Password */}
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
            {/* Display error for Confirm Password */}
            <div className="error">{errs.repeat}</div>
            {/* Sign-in link and submit button */}
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
