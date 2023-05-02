import { Coin } from "./types";

const getCoinData = async () => {
  const fetchData = async () => {
    const CoinsApiUrl =
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";
    try {
      const coinApiResponse = await fetch(CoinsApiUrl);
      if (!coinApiResponse.ok) throw new Error(coinApiResponse.statusText);
      const rawCoinData = await coinApiResponse.json();
      const coins = rawCoinData.map(
        ({
          id,
          name,
          image,
          current_price,
          market_cap,
          market_cap_rank,
          price_change_percentage_24h
        }: Coin) => ({
          id,
          name,
          image,
          current_price,
          market_cap,
          market_cap_rank,
          price_change_percentage_24h
        })
      );
      return coins;
    } catch (error) {
      if (error instanceof Error) {
        console.error(`${error.name}: ${error.message}`);
      }
    }
  };

  return fetchData();
};

export default getCoinData;
