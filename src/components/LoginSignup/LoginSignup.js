import {
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import React, { useState } from "react";
import "./LoginSignup.css";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

const LoginSignup = () => {
  const [showLogin, setShowLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState("");
  const [signupMessage, setSignupMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setLoginMessage("Logged in successfully!");
      navigate("/home"); // Redirect to the Home page
    } catch (error) {
      console.error("Error signing in:", error);
      setLoginMessage("Login failed: " + error.message);
    }
  };

  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setSignupMessage("Account created successfully!");
      navigate("/home"); // Redirect to the Home page
    } catch (error) {
      console.error("Error creating account:", error);
      setSignupMessage("Signup failed: " + error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  // ...

  // You can add the {loginMessage} and {signupMessage} within the JSX, where you want to display them.
  // Example: place them right above the Login and Signup buttons, respectively.
  

  const toggleForm = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div className="login-page">
      <div className="login-container">
        {showLogin ? (
          <div className="login-box">
            <h2>Log In</h2>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <a className="forgot-password" href="#">
              Forgot your password?
            </a>
            <button type="submit" onClick={handleLogin}>
              Log In
            </button>
            <button className="google-login" onClick={handleGoogleSignIn}>
              Log In with Google
            </button>

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
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" onClick={handleSignUp}>
              Create Account
            </button>
            <button className="google-signup" onClick={handleGoogleSignIn}>
  Sign up with Google
</button>
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