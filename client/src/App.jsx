import { useNavigation } from "react-router-dom";
import "./Styles/app.css";

function App() {
  const navigation = useNavigation();

  return (
    <>
      <div>
        <h1>Hello Everyone</h1>
      </div>
      <div className="buttonDiv">
        <button onClick={() => navigation("/LogIn")}>
          <h1>Log In</h1>
        </button>
        <button onClick={() => navigation("/SignUp")}>
          <h1>Sign Up</h1>
        </button>
      </div>
    </>
  );
}

export default App;
