import React from "react";
import PropTypes from "prop-types";

import "./style.css";

const Amount = ({ value, currency }) => (
  <div className="amount">
    <p className="value">{value}</p>
    <p className="currency">{currency}</p>
  </div>
);

Amount.propTypes = {
  value: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};

export default Amount;
