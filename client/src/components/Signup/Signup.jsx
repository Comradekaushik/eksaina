import React from "react";
import { Link } from "react-router-dom";
import SignupForm from "./SignupForm";
import "./Signup.css";

function Signup() {
  return (
    <div id="signup-form-principal-container">
      <div id="signup-form-box-container">
        <div id="signup-form-logo-container">
          {/* <div>
                <img src="" alt="logo-login"/>
            </div> */}
          <div id="signup-page-logo">EKSAINA</div>
          <div id="signup-message">Sign up For Eksaina</div>
        </div>

        <SignupForm />

        <div id="signup-tnc-message">
          By continuing, you agree to our{" "}
          <span>
            <Link className="signup-page-links" to="/user-agreement">
              User Agreement
            </Link>{" "}
          </span>
          and acknowledge that you understand the{" "}
          <span>
            <Link className="signup-page-links" to="/privacy-policy">
              Privacy Policy
            </Link>
          </span>
          .
        </div>
        <div id="signup-bottom-login-instead">
          Already have an account?{" "}
          <Link className="signup-page-links" to="/login">
            Login{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
