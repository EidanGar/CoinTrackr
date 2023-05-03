import { Coin } from "../types";
import { truncateText } from "../helpers";

const CTASection = ({ coinData }: { coinData: Coin[] }) => {
  const topGainers =
    (
      coinData?.sort(
        (coinA, coinB) =>
          coinB.price_change_percentage_24h - coinA.price_change_percentage_24h
      ) ?? []
    )?.slice(0, 6) ?? [];

  return (
    <div className="app__cta-section">
      <div className="cta-section__content">
        <h3>Track crypto like Bitcoin, Ethereum, and Dogecoin</h3>
        <p>
          Easily stay up-to-date on the latest developments in the world of
          cryptocurrency.
        </p>
        <a href="#market">Check Market</a>
      </div>
      <div className="cta-section__crypto">
        <span>Top gainers</span>
        <div className="cta-section__crypto-container">
          {topGainers.map((coin, idx) => (
            <div className="cta-section__crypto-coin" key={idx}>
              <img src={coin.image} alt={coin.name} />
              <p>{truncateText(coin.name)}</p>
              <p className="cta-section__crypto-coin__price">
                $
                {+coin.current_price < 0.01
                  ? +coin.current_price
                  : +coin.current_price.toFixed(2)}
              </p>
              <span className="cta-section__crypto-coin__rise">
                🡩{+coin.price_change_percentage_24h.toFixed(2)}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CTASection;
