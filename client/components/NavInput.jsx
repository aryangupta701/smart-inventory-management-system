import "./components.css";
import Search from "../assets/Search.png";
import Notification from "../assets/Notification.png";

function NavInput(props) {
  // eslint-disable-next-line react/prop-types
  const { profilePic, placeholder } = props;
  return (
    <div className="navBarContainer">
      <input placeholder={placeholder} className="searchInput" />
      <img src={Search} className="searchIcon" />
      <div className="navRightBars">
        <img src={Notification} className="notification" />
        <img src={profilePic} className="profilePic" />
      </div>
    </div>
  );
}

export default NavInput;
