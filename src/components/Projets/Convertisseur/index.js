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
    search: "",
  });

  const setBaseAmount = (event) => {
    setData({
      ...data,
      baseAmount: parseInt(event.target.value, 10),
    });
  };

  const setCurrency = (e) => {
    setData({
      ...data,
      currency: e.target.textContent,
    });
  };

  const setSearch = (value) => {
    setData({
      ...data,
      search: value,
    });
  };

  const getCurrencies = () => {
    let filteredCurrencies = currenciesData;
    const { search } = data;
    if (search !== "") {
      filteredCurrencies = currenciesData.filter((currency) => {
        const loweredCurrencies = currency.name.toLowerCase();
        const loweredSearch = search.toLocaleLowerCase();

        const isIncludeInSearch = loweredCurrencies.includes(loweredSearch);
        return isIncludeInSearch;
      });
    }

    return filteredCurrencies;
  };

  const makeConversion = () => {
    const { baseAmount, currency } = data;
    const foundCurrency = currenciesData.find(
      (element) => element.name === currency
    );
    const convertedAmount = baseAmount * foundCurrency.rate;

    return Math.round(convertedAmount * 100) / 100;
  };

  const { baseAmount, currency, search } = data;
  const convertedAmount = makeConversion();
  const filteredCurrencies = getCurrencies();
  return (
    <div className="app-converter">
      <div className="presentation">
        Les taux de conversion ne sont pas les taux réel du jour
      </div>
      <div className="converter">
        <Header inputValue={baseAmount} setBaseAmountValue={setBaseAmount} />
        <Currencies
          onClick={(e) => setCurrency(e)}
          currencies={filteredCurrencies}
          inputValue={search}
          setSearchValue={setSearch}
        />
        <Amount value={convertedAmount} currency={currency} />
      </div>
    </div>
  );
};

export default Converter;
