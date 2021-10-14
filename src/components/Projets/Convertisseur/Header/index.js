import React from "react";
import PropTypes from "prop-types";

import "./style.css";

const Header = ({ inputValue, setBaseAmountValue }) => (
  <header className="header">
    <h1 className="title">Converter</h1>
    <input
      type="number"
      className="base-amount"
      min={0}
      value={inputValue}
      onChange={setBaseAmountValue}
    />
    Euro(s)
  </header>
);

Header.propTypes = {
  inputValue: PropTypes.number.isRequired,
  setBaseAmountValue: PropTypes.func.isRequired,
};

export default Header;
