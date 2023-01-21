import React from "react";
import "../App.css";

const Coin = ({
  name,
  icon,
  price,
  symbol,
  websiteUrl,
  id,
  totalSupply,
  priceChange1w,
  priceChange1h,
  priceChange1d,
  marketCap,
}) => {
  return (
    <div className="coin" key={id}>
      <img src={icon} alt={name} />
      <h2> {name} </h2>
      <h3>Price: {price.toFixed(2)}</h3>
      <h3>{symbol}</h3>

      {priceChange1h < 0 ? (
        <h3 className="red">1h {priceChange1h.toFixed(2)}%</h3>
      ) : (
        <h3 className="green">1h {priceChange1h.toFixed(2)}%</h3>
      )}

      {priceChange1h < 0 ? (
        <h3 className="red">1h {priceChange1d.toFixed(2)}%</h3>
      ) : (
        <h3 className="green">1h {priceChange1d.toFixed(2)}%</h3>
      )}

      {priceChange1h < 0 ? (
        <h3 className="red">24h {priceChange1w.toFixed(2)}%</h3>
      ) : (
        <h3 className="green">24h {priceChange1w.toFixed(2)}%</h3>
      )}

      <h3>{totalSupply}</h3>

      <a href={websiteUrl}>
        <button className="webbutton">Website of {name}</button>
      </a>
    </div>
  );
};

export default Coin;
