import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SingleCoin } from "./config/api";
import Sidebar from "./Sidebar";
import { LinearProgress } from "@mui/material";
import HtmlReactParser from 'html-react-parser';
import CoinChart from "./CoinChart";
const CoinPage = ({ balance }) => {
  const { id } = useParams();
  const [coin, setCoin] = useState();
  const currency = "USD";
  const symbol = "$";
  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));
    setCoin(data);
    console.log(data);
  };
  console.log(coin);
  useEffect(() => {
    fetchCoin();
  }, []);

  if (!coin) return <LinearProgress style={{ backgroundColor: "gold" }} />;

  return (
    <div className="total-area">
      <Sidebar balance={balance}></Sidebar>
      <div className="main-content">
        <div className="coin-page-head-card">
          <div className="coin-page-head-card-image">
            <img
              src={coin?.image.large}
              alt={coin?.name}
              height="80%"
              style={{ margin: "auto" }}
            />
          </div>
          <div className="coin-page-head-card-name">
            <p style={{ margin: "auto", marginBottom: "auto" }}>
              {coin.name + "(" + coin.symbol.toUpperCase() + ")"}
            </p>
          </div>
        </div>
        <div className="coin-page-info">
          {HtmlReactParser(coin.description.en.split(". ").join(" ").substr(0,700))}
        </div>
        <div className="coin-page-chart">
        <CoinChart coin={coin}/>
        </div>
      </div>
    </div>
  );
};

export default CoinPage;
