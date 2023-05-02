import { Coin } from "../types";
import { numberWithCommas } from "../helpers";

const TopSection = ({ coinData }: { coinData: Coin[] }) => {
  return (
    <section id="home" className="app__top-section">
      <h1 className="top-section__hero">
        Stay up-to-date on <span className="colored-text">Crypto prices</span>{" "}
        and <span className="colored-text">Market trends</span>
      </h1>
      <div className="top-section__crypto">
        {coinData?.slice(0, 4).map((coin, idx) => {
          return (
            <div className="top-section__crypto-coin" key={idx}>
              <img
                className="top-section__crypto-coin__image"
                src={coin.image}
                alt={coin.name}
              />
              <p>
                {coin.name}{" "}
                <span
                  style={{
                    color:
                      +coin.price_change_percentage_24h < 0
                        ? "#ff0000"
                        : "#0ecb81"
                  }}
                >
                  {numberWithCommas(
                    +coin.price_change_percentage_24h.toFixed(2)
                  )}
                  %
                </span>
              </p>
              <p>$ {numberWithCommas(+coin.current_price.toFixed(2))}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TopSection;
