import { Coin } from "../types";
import backupData from "./backupCoinData";

const getCoinData = async () => {
  const fetchData = async () => {
    const CoinsApiUrl =
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h&locale=en";
    try {
      const coinApiResponse = await fetch(CoinsApiUrl);
      let rawCoinData = await coinApiResponse.json();

      if (!rawCoinData) {
        rawCoinData = backupData;
      }

      const coins = rawCoinData.map(
        ({
          id,
          name,
          image,
          current_price,
          market_cap,
          market_cap_rank,
          price_change_percentage_24h,
        }: Coin) => ({
          id,
          name,
          image,
          current_price,
          market_cap,
          market_cap_rank,
          price_change_percentage_24h,
        })
      );

      return coins;
    } catch (error) {
      if (error instanceof Error) {
        console.error(`${error.name}: ${error.message}`);
      }
      return backupData;
    }
  };

  return fetchData();
};

export default getCoinData;
