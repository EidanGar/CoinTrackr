import { Coin } from "../types";
import { useState } from "react";
import { numberWithCommas, simplifyNumber } from "../helpers";

const CryptoMarket = ({ coinData }: { coinData: Coin[] }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const sortedCoinData = coinData.sort(
    (a, b) => +a.market_cap_rank - +b.market_cap_rank
  );

  const MarketRow = ({ coin }: { coin: Coin }) => (
    <tr className="market__content__row">
      <td className="row__coin">
        <img src={coin.image} alt={coin.name} />
        <span>{coin.name}</span>
      </td>
      <td className="row__price">
        $ {numberWithCommas(+coin?.current_price.toFixed(2))}
      </td>
      <td
        style={{
          color: +coin?.price_change_percentage_24h < 0 ? "#ff0000" : "#0ecb81",
        }}
        className="row__change"
      >
        {numberWithCommas(+coin?.price_change_percentage_24h.toFixed(2))} %
      </td>
      <td className="row__market">
        $ {simplifyNumber(+coin?.market_cap.toFixed(2))}
      </td>
    </tr>
  );

  const PageButton = ({ idx }: { idx: number }) => (
    <a
      href="#market"
      onClick={() => setCurrentPage(idx)}
      className={`market__page ${currentPage === idx && "selected__page"}`}
    >
      {" "}
    </a>
  );

  return (
    <div id="market" className="app__market">
      <h2 className="market__title">Market Update</h2>
      <table className="market__content">
        <thead>
          <tr className="market__content__header">
            <th>Coin</th>
            <th>Price</th>
            <th>24h Change</th>
            <th>Market Cap</th>
          </tr>
        </thead>
        <tbody className="market__content__rows">
          {sortedCoinData
            ?.slice(currentPage * 10, (currentPage + 1) * 10)
            .map((coin, idx) => (
              <MarketRow key={idx} coin={coin} />
            ))}
        </tbody>
      </table>
      <div className="market__pagination">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((a, idx) => (
          <PageButton key={idx} idx={idx} />
        ))}
      </div>
      <a className="market__attribution" href="https://www.coingecko.com/">
        Data provided by CoinGecko
      </a>
    </div>
  );
};

export default CryptoMarket;
