import "./App.css";
import RangeBar from "./components/RangeBar";
import ToggleSwitch from "./components/ToggleSwitch" 
import { useState, useEffect } from "react";

function App() {
  const [valueRange, setValue] = useState<number>(100000);
  const [isYearly, setIsYearly] = useState<boolean>(false);
  const [price, setPrice] = useState<number>(0)

  const formatNuberViews = (views: number) => {
    return new Intl.NumberFormat("en", {
      notation: "compact",
      maximumFractionDigits: 1,
    }).format(views);
  };

  useEffect(() => {
    const calculateMoney = (): void => {
      let monthlyPrice = 0;

      if (valueRange < 50_000) monthlyPrice = 8;
      else if (valueRange < 100_000) monthlyPrice = 12;
      else if (valueRange < 500_000) monthlyPrice = 16;
      else if (valueRange < 1_000_000) monthlyPrice = 24;
      else monthlyPrice = 36;

      setPrice(isYearly ? monthlyPrice * 12 * 0.75 : monthlyPrice);
    };
    calculateMoney()
  }, [valueRange, isYearly])

  return (
    <>
      <div className="hero-section">
        <h1>Simple, traffic-based pricing</h1>
        <p>Sing-up for our 30-day trial. No credit card required</p>
      </div>

      <div className="page-views">
        <div className="section-top-pageviews">
          <h2>{formatNuberViews(valueRange)} pageviews</h2>

          <RangeBar valueRange={valueRange} setValue={setValue} />

          <p className="price-contain">
            <span className="price">${price.toFixed(2)}</span> / month
          </p>
        </div>

        <ToggleSwitch isYearly={isYearly} setIsYearly={setIsYearly} />

        <hr />

        <div className="section-bottom-pageviews">
          <ul>
            <li>Unlimited Websites</li>
            <li>100% data ownership</li>
            <li>Email Reports</li>
          </ul>

          <button>Start my trial</button>
        </div>
      </div>
    </>
  );
}

export default App;
