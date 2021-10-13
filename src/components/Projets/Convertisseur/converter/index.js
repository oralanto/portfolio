import React from "react";

import Header from "../Header";
import Currencies from "../Currencies";
import Amount from "../Amount";

import "./style.css";

import currenciesData from "../data/currencies";

class Converter extends React.Component {
  state = {
    baseAmount: 1,
    currency: "Swiss Franc",
    search: "",
  };

  componentDidUpdate(prevProps, prevState) {
    const { currency } = this.state;
    if (currency !== prevState.currency) {
      this.changePageTitle();
    }
  }

  setBaseAmount = (value) => {
    this.setState({
      baseAmount: value,
    });
  };

  setCurrency = (e) => {
    this.setState({
      currency: (this.state.currency = e.target.textContent),
    });
  };

  setSearch = (value) => {
    this.setState({
      search: value,
    });
  };

  getCurrencies = () => {
    let filteredCurrencies = currenciesData;
    const { search } = this.state;
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

  makeConversion = () => {
    const { baseAmount, currency } = this.state;
    const foundCurrency = currenciesData.find(
      (element) => element.name === currency
    );
    const convertedAmount = baseAmount * foundCurrency.rate;

    return Math.round(convertedAmount * 100) / 100;
  };

  render() {
    const { baseAmount, currency, search } = this.state;
    const convertedAmount = this.makeConversion();
    const filteredCurrencies = this.getCurrencies();
    console.log(this.state);
    return (
      <div className="app-converter">
        <div className="presentation">
          Les taux de conversion ne sont pas les taux réel du jour
        </div>
        <div className="converter">
          <Header
            inputValue={baseAmount}
            setBaseAmountValue={this.setBaseAmount}
          />
          <Currencies
            onClick={(e) => this.setCurrency(e)}
            currencies={filteredCurrencies}
            inputValue={search}
            setSearchValue={this.setSearch}
          />
          <Amount value={convertedAmount} currency={currency} />
        </div>
      </div>
    );
  }
}

export default Converter;
