import React, { useState } from "react";

import Header from "./Header";
import Currencies from "./Currencies";
import Amount from "./Amount";

import "./style.css";

import currenciesData from "./data/currencies";

const Converter = () => {
  const [data, setData] = useState({
    baseAmount: 1,
    currency: "Swiss Franc",
  });

  const setBaseAmount = (event) => {
    setData({
      baseAmount: parseInt(event.target.value, 10),
      currency: data.currency,
    });
  };

  const setCurrency = (e) => {
    setData({ baseAmount: data.baseAmount, currency: e.target.textContent });
  };

  const makeConversion = () => {
    const { baseAmount, currency } = data;
    const foundCurrency = currenciesData.find(
      (element) => element.name === currency
    );
    const convertedAmount = baseAmount * foundCurrency.rate;

    return Math.round(convertedAmount * 100) / 100;
  };

  const { baseAmount, currency } = data;
  const convertedAmount = makeConversion();
  return (
    <div className="app-converter">
      <div className="presentation">
        Les taux de conversion ne sont pas les taux réel du jour
      </div>
      <div className="converter">
        <Header inputValue={baseAmount} setBaseAmountValue={setBaseAmount} />
        <Currencies
          onClick={(e) => setCurrency(e)}
          currencies={currenciesData}
        />
        <Amount value={convertedAmount} currency={currency} />
      </div>
    </div>
  );
};

export default Converter;
