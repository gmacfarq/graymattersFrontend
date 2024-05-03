import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import Alerts from "./Alerts";

const INITIAL_FORM_DATA = {
  username: "",
  password: "",
};

function Login({login}) {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [alerts, setAlerts] = useState([]);
  const navigate = useNavigate();

  /** handle form submission */
  async function handleSubmit(evt) {
    evt.preventDefault();
    const response = await fetch("http://localhost:8000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: formData.username,
        password: formData.password,
      }),
      credentials: "include", // Necessary for cookies to be sent and received
    });

    if (response.ok) {
      login(formData.username);
      navigate("/");
    } else {
      // Handle errors, e.g., show a login error message
      const data = await response.json();
      setAlerts([data.detail]);
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
