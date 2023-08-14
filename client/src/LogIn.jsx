import "./Styles/Login.css";
import Logo from "../assets/Logo.png";
import logoImg from "../assets/logoImg.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../components/components.css";

function LogIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (username, password) => {
    fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((res) => {
      if (res.status === 201) {
        window.location.href = "/dashboard";
      } else {
        alert("Invalid username or password");
      }
    });
  };

  return (
    <div className="container">
      <div className="logoDiv">
        <img src={Logo} className="logoImg" />
      </div>
      <div className="detailsDiv">
        <div className="formContainer">
          <img src={logoImg} className="formImg" />
          <section className="accountSection">
            <h3 className="createAccount">Log in to your account</h3>
            <p className="trialText">Welcome back! Please enter your details</p>
          </section>
          <label className="nameLabel">Username </label>
          <input
            className="input"
            label="Username"
            placeholder="Enter Your Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <label className="nameLabel">Password </label>
          <input
            className="input"
            label="Password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="signInBtn"
            onClick={handleLogin.bind(this, username, password)}
          >
            Sign In
          </button>
          <div className="signUpBar">
            <p className="accountTxt"> Don't have a account?</p>
            <Link to="/SignUp">
              <a className="signUpText">Sign Up</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
