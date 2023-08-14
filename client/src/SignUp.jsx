import Logo from "../assets/Logo.png";
import logoImg from "../assets/logoImg.png";
import googleImg from "../assets/SocialIcon.png";
import CustomInput from "../components/CustomInput";
import "./Styles/Login.css";

function SignUp() {
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
            <p className="trialText">Start your 30 days trial</p>
          </section>
          <CustomInput label="Name" placeholder="Enter your name" />
          <CustomInput label="Email*" placeholder="Enter Your Email" />
          <CustomInput label="Password*" placeholder="Create a Password" />
          <span className="passwordHighlite">
            Must be at least 8 characters
          </span>
          {/* <div className="checkBoxLine">
            <section className="checkBoxSection">
              <input type="checkbox" />
              <span className="rememberDaysTxt">Remember for 30 days</span>
            </section>
            <a className="forgotPasswordTxt">Forgot Password</a>
          </div> */}
          <button className="signInBtn">Sign In</button>
          <button className="googleSignIn">
            <img src={googleImg} className="googleImage" />
            <span className="googleText">Sign In with Google</span>
          </button>
          <div className="signUpBar">
            <p className="accountTxt"> Already have an account?</p>
            <a className="signUpText">Log in</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
