import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import "./Contact.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    let timer;
    if (formSubmitted) {
      timer = setTimeout(() => {
        setFormSubmitted(false);
      }, 3000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [formSubmitted]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Validate the form inputs
    const validationErrors = {};
    if (name.trim() === "") {
      validationErrors.name = "Name is required";
    }
    if (email.trim() === "") {
      validationErrors.email = "Email is required";
    }
    if (password.trim() === "") {
      validationErrors.password = "Password is required";
    } else if (password.length < 6) {
      validationErrors.password =
        "Password should be at least 6 characters long";
    }

    // Set the errors state
    setErrors(validationErrors);

    // If there are no validation errors, submit the form
    if (Object.keys(validationErrors).length === 0) {
      // Perform form submission logic here
      setFormSubmitted(true);

      //It will empty again
      setName("");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <>
      <Navbar />
      <h2>Subscribe To Ambula</h2>

      <div className="box">
        <div className="left_side_img">
          <img
            src="https://ambula.app/assets/images/3740749.jpg"
            alt="friend_img"
          />
        </div>

        <div className="form-container">
          <form onSubmit={handleFormSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-input"
                placeholder=" "
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="name" className="form-label">
                Name *
              </label>
              {errors.name && (
                <span className="error-message">{errors.name}</span>
              )}
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-input"
                placeholder=" "
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="email" className="form-label">
                Email *
              </label>
              {errors.email && (
                <span className="error-message">{errors.email}</span>
              )}
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-input"
                placeholder=" "
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="password" className="form-label">
                Password *
              </label>
              {errors.password && (
                <span className="error-message">{errors.password}</span>
              )}
            </div>
            <button className="contact_button" type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {formSubmitted && (
        <div className="popup">
          <p>Form submitted successfully!</p>
        </div>
      )}
    </>
  );
}
