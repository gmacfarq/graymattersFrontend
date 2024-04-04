import PropTypes from "prop-types";

function Alerts({ messages }) {
  return (
    <div>
      {messages.map((alert, idx) => (
        <p key={idx}>{alert}</p>
      ))}
    </div>
  );
}

Alerts.propTypes = {
  messages: PropTypes.array.isRequired,
};

export default Alerts;
