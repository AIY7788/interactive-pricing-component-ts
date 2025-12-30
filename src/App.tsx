import "./App.css";
import RangeBar from "./components/RangeBar";
import ToggleSwitch from "./components/ToggleSwitch" 
import formatNuberViews from "./utils/formatViews";
import { useState } from "react";
import { useDebounce } from "./hooks/useDebounce";

function App() {
  const [valueRange, setValue] = useState<number>(100000);
  const [isYearly, setIsYearly] = useState<boolean>(false);
  
  const debouncedValueRange = useDebounce(valueRange);
  
  const calculateMoney = (valueRange: number, isYearly: boolean) => {
    let monthlyPrice = 0;
    
    if (valueRange < 50_000) monthlyPrice = 8;
    else if (valueRange < 100_000) monthlyPrice = 12;
    else if (valueRange < 500_000) monthlyPrice = 16;
    else if (valueRange < 1_000_000) monthlyPrice = 24;
    else monthlyPrice = 36;
    
    return isYearly ? monthlyPrice * 12 * 0.75 : monthlyPrice;
  };

  const price = calculateMoney(debouncedValueRange, isYearly);
  
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
            <span className="price">${price.toFixed(2)}</span> / {isYearly? "year" : "month"}
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
