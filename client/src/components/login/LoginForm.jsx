import React from 'react';
import "./LoginForm.css";

function LoginForm() {
  return (
    <div id="login-form-principal-container">
        <div id="login-form-logo-container">
            <div id="login-form-logo-image-container">
                <img id="login-form-logo-image" src={require("../../assets/images/eksaina-test-logo.png")} alt="logo-login"/>
            </div>
            <div id="login-heading">
                Sign in to Eksaina
            </div>
            <div id="enter-credentials-message-container">
                Please enter your credentials.
            </div>

        </div>
        <form>
            <div> 
                <div className='input-container'>
                    <label for="login-username-or-email-input-label" className="input-label">Enter your email or username</label>
                
                    <input type = "text" id="login-username-or-email-input" className="input-field"/>
                </div>
                <div className='input-container'>
                    <label for="login-password-input" className="input-label">Enter your password</label>
                
                    <input type="password" id="login-password-input" className="input-field"/>    
                </div>
                <div>
                    <input type = "submit" id='login-submit-button'/>
                </div>  
                
            </div>
        </form>
        
    </div> 
  )
}

export default LoginForm;