import React, { useState } from 'react';
import './LoginSignup.css';

const LoginSignup = () => {
  const [showLogin, setShowLogin] = useState(true);

  const toggleForm = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        {showLogin ? (
          <div className="login-box">
            <h2>Log In</h2>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a className="forgot-password" href="#">
              Forgot your password?
            </a>
            <button type="submit">Log In</button>
            <button className="google-login">Log In with Google</button>
            <p>
              New to Makaton?{' '}
              <span className="toggle-form" onClick={toggleForm}>
                Sign up
              </span>
            </p>
          </div>
        ) : (
          <div className="signup-box">
            <h2>Create Account</h2>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit">Create Account</button>
            <button className="google-signup">Sign up with Google</button>
            <p>
              Already have an account?{' '}
              <span className="toggle-form" onClick={toggleForm}>
                Log in
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginSignup;
