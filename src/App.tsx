import './App.css'

function App() {
  return (
    <>
      <div className="hero-section">
        <h1>Simple, traffic-based pricing</h1>
        <p>Sing-up for our 30-day trial. No credit card required</p>
      </div>

      <div className="page-views">
        <h2>100k pageviews</h2>
        <div className="range-section">
          <input
            type="range"
            className="slice-range"
            min={0}
            max={100}
            // value={20}
          />
        </div>

        <p>
          <span className="price">$16.00</span> / month
        </p>

        <div className="billing">
          <p>Monthly Billing</p>
          <label className="toggle-section">
            <input type="checkbox" />
            <span className="slice-toggle"></span>
          </label>
          <p>
            Yearly Billing <span>-25%</span>
          </p>
        </div>

        <hr />

        <ul>
          <li>Unlimited Websites</li>
          <li>100% data ownership</li>
          <li>Email Reports</li>
        </ul>

        <button>Start my trial</button>
      </div>
    </>
  );
}

export default App
