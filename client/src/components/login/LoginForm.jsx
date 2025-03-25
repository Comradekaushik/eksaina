import React from "react";
import "./LoginForm.css";
import { useState } from "react";
import {useNavigate } from "react-router-dom";



function LoginForm() {
    const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };


  const handlesubmit = async (event) => {
    event.preventDefault();
    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Please enter a valid email address");
      return;
    }

    const formData = {
      email: email,
      
      password: password,
    };

    try {
      const response = await fetch("http://127.0.0.1:9090/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      setPassword("");
      setEmail("");
      
      if (result.login === "success") {
        localStorage.setItem("token", result.token);
        localStorage.setItem("email", result.email);
        localStorage.setItem("userid", result.userid);
        localStorage.setItem("name", result.name);

        console.log(localStorage.getItem("token"));

        navigate("/home");
      } else if (
        result.registered === "false" &&
        result.alreadyregistered === "true"
      ) {
        alert("Username already in use please choose a different one");
      } else {
        alert("Something went wrong!");
      }

      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  };











  return (
    <div id="login-form-principal-container">
      <div id="login-form-logo-container">
        <div id="login-form-logo-image-container">
          {/* <img
            id="login-form-logo-image"
            src={require("../../assets/images/eksaina-test-logo.png")}
            alt="logo-login"
          /> */}
        </div>
        <div id="login-heading">Sign in to Eksaina</div>
        <div id="enter-credentials-message-container">
          Please enter your credentials.
        </div>
      </div>
      <form onSubmit={handlesubmit}>
        <div>
          <div className="input-container">
            <label
              for="login-username-or-email-input-label"
              className="input-label"
            >
              Enter your email or username
            </label>

            <input
              type="text"
              id="login-username-or-email-input"
              className="input-field"
              onChange={handleChangeEmail}
              value={email}
            //   autoComplete="off"
              required
            />
          </div>
          <div className="input-container">
            <label for="login-password-input" className="input-label">
              Enter your password
            </label>

            <input
              type="password"
              id="login-password-input"
              className="input-field"
              onChange={handleChangePassword}
              value={password}
              required
            />
          </div>
          <div>
            <input type="submit" id="login-submit-button" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
