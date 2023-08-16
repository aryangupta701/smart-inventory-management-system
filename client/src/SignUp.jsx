import Logo from "../assets/Logo.png";
import logoImg from "../assets/logoImg.png";
import "./Styles/Login.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = (username, password) => {
    fetch("http://localhost:3001/register", {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((res) => {
      if (res.status === 201) {
        window.location.href = "/";
      } else {
        setPassword("");
        setUsername("");
        alert("Please Choose a different username");
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
            <h3 className="createAccount">Create your account</h3>
          </section>
          <label className="nameLabel">Username </label>
          <input
            className="input"
            label="Username"
            placeholder="Enter Your Username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <label className="nameLabel">Password </label>
          <input
            className="input"
            label="Password"
            type="password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button
            className="signInBtn"
            onClick={handleSignUp.bind(this, username, password)}
          >
            Sign Up
          </button>
          <div className="signUpBar">
            <p className="accountTxt"> Already have an account?</p>
            <Link to="/">
              <a className="signUpText">Log in</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
