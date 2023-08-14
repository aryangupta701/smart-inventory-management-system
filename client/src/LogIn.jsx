import "./Styles/Login.css";
import Logo from "../assets/Logo.png";
import logoImg from "../assets/logoImg.png";
import googleImg from "../assets/SocialIcon.png";
import CustomInput from "../components/CustomInput";

function LogIn() {
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
          <CustomInput label="Email" placeholder="Enter Your Email" />
          <CustomInput label="Password" placeholder="Enter Password" />
          <div className="checkBoxLine">
            <section className="checkBoxSection">
              <input type="checkbox" />
              <span className="rememberDaysTxt">Remember for 30 days</span>
            </section>
            <a className="forgotPasswordTxt">Forgot Password</a>
          </div>
          <button className="signInBtn">Sign In</button>
          <button className="googleSignIn">
            <img src={googleImg} className="googleImage" />
            <span className="googleText">Sign In with Google</span>
          </button>
          <div className="signUpBar">
            <p className="accountTxt"> Don't have a account?</p>
            <a className="signUpText">Sign Up</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
