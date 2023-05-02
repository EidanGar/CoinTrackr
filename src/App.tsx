import { useState, useEffect } from "react";
import "./styles.css";
import getCoinData from "./helpers/getCoinData";
import Navigation from "./components/Navigation";
import TopSection from "./components/TopSection";
import CTASection from "./components/CTASection";
import CryptoMarket from "./components/CryptoMarket";
import WhySection from "./components/WhySection";
import JoinSection from "./components/JoinSection";
import * as Types from "./types";

const App = () => {
  const [coinData, setCoinData] = useState<Types.Coin[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchAndSetData = async () => {
      const fetchedData = await getCoinData();
      if (JSON.stringify(fetchedData) === JSON.stringify(coinData)) return;
      console.log("Fetched Data:", fetchedData);
      setCoinData(fetchedData);
    };

    setIsLoading(true);
    fetchAndSetData();
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  return (
    <div className="app">
      <Navigation />
      <TopSection coinData={coinData} isLoading={isLoading} />
      {!isLoading && <CTASection coinData={coinData} />}
      {!isLoading && <CryptoMarket coinData={coinData} />}
      <WhySection />
      <JoinSection />
    </div>
  );
};

export default App;
