import { useState, useEffect } from "react";
import "./styles.css";
import getCoinData from "./getCoinData";
import Navigation from "./components/Navigation";
import TopSection from "./components/TopSection";
import CTASection from "./components/CTASection";
import CryptoMarket from "./components/CryptoMarket";
import WhySection from "./components/WhySection";
import JoinSection from "./components/JoinSection";
import Loading from "./components/Loading";
import * as Types from "./types";

const App = () => {
  const [coinData, setCoinData] = useState<Types.Coin[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchAndSetData = async () => {
      setIsLoading(true);
      const fetchedData = await getCoinData();
      if (JSON.stringify(fetchedData) === JSON.stringify(coinData)) return;
      setCoinData(fetchedData);
      setIsLoading(false);
    };

    fetchAndSetData();
  }, [coinData]);

  return (
    <div className="app">
      <Navigation />
      {isLoading && <Loading />}
      {!isLoading && <TopSection coinData={coinData} />}
      {!isLoading && <CTASection coinData={coinData} />}
      {!isLoading && <CryptoMarket coinData={coinData} />}
      <WhySection />
      <JoinSection />
    </div>
  );
};

export default App;
