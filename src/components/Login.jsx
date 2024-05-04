import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider";
import PropTypes from "prop-types";
import Alerts from "./Alerts";
import GrayAPI from "../Api";

const INITIAL_FORM_DATA = {
  username: "",
  password: "",
};

function Login() {
  const { login } = useContext(AuthContext);
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [alerts, setAlerts] = useState([]);
  const navigate = useNavigate();

  /** handle form submission */
  async function handleSubmit(evt) {
    evt.preventDefault();
  try {
    const response = await GrayAPI.sendLogin(formData);
    if (response && response.message === "Logged in") {
      login(formData.username);
      navigate("/");
    } else {
      // Handle errors, e.g., show a login error message
      if (response && response.detail) {
        setAlerts([response.detail]);
      } else {
        setAlerts(["Unknown error occurred"]);
      }
    }
  } catch (error) {
    console.error("Error occurred:", error);
    setAlerts(["An error occurred while processing your request"]);
  }
}

  /** Update form input. */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((currFormData) => ({
      ...currFormData,
      [name]: value,
    }));
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            onChange={handleChange}
            value={formData.username}
            className="form-control rounded"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            onChange={handleChange}
            value={formData.password}
            className="form-control rounded"
            type="password"
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
      {alerts && <Alerts messages={alerts} />}
    </div>
  );
}

Login.propTypes = {
    login: PropTypes.func.isRequired,
  };

export default Login;
