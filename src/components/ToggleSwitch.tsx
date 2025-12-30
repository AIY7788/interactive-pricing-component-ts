import "./ToggleSwitch.css"

type IsYearly = {
  isYearly: boolean;
  setIsYearly: React.Dispatch<React.SetStateAction<boolean>>;
};

function ToggleSwitch({ isYearly, setIsYearly }: IsYearly) {
  const handleOnchang = () => {
    setIsYearly(isYearly ? false : true);
  };

  return (
    <div className="billing">
      <p>Monthly Billing</p>
      <label className="toggle-switch">
        <input onChange={handleOnchang} type="checkbox" checked={isYearly} />
        <span className="slice-toggle"></span>
      </label>
      <p>
        Yearly Billing
        <span className="discount">
          -25% <span>discount</span>
        </span>
      </p>
    </div>
  );
}

export default ToggleSwitch;