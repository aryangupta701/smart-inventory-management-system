import "./components.css";
function CustomInput(props) {
  const { label, placeholder } = props;

  return (
    <div className="inputContainer">
      <div className="nameInputContainer">
        <label className="nameLabel">{label} </label>
        <input className="input" placeholder={placeholder} />
      </div>
    </div>
  );
}

export default CustomInput;
