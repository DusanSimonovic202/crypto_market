import "./App.css";
import { useEffect, useState } from "react";
import Axios from "axios";
import Coin from "./components/Coin";

function App() {
  const [listOfCoins, setListOfCoins] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0").then(
      (response) => {
        setListOfCoins(response.data.coins);
      }
    );
  }, []);

  const filterCoins = listOfCoins.filter((coin) => {
    return coin.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="App">
      <div className="cryptoHeader">
        <h2 className="header">Welcome to Crypto Today</h2>
        <input
          type="text"
          placeholder="Search for specific coin..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="cryptoDisplay">
        {filterCoins.map((coin) => {
          return (
            <Coin
              totalSupply={coin.totalSupply}
              priceChange1w={coin.priceChange1w}
              priceChange1h={coin.priceChange1h}
              priceChange1d={coin.priceChange1d}
              marketCap={coin.marketCap}
              id={coin.id}
              websiteUrl={coin.websiteUrl}
              name={coin.name}
              icon={coin.icon}
              price={coin.price}
              symbol={coin.symbol}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
