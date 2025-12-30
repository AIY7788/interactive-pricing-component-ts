import "./RangeBar.css"

type RangeBar = {
  valueRange: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
};

function RangeBar({ valueRange, setValue }: RangeBar) {
  const valuePercentage = (valueRange / 1_000_000) * 100;

  const handleOnChang = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseInt(e.target.value));
  };
 
  return (
    <div className="range-section">
      <input
        style={{
          background: `linear-gradient(90deg, var(--cyan-soft) ${valuePercentage}%, var(--blue-light-slider) ${valuePercentage}%)`,
        }}
        onChange={handleOnChang}
        type="range"
        className="slice-range"
        min={10_000}
        max={1_000_000}
        value={valueRange}
      />
    </div>
  );
}

export default RangeBar;
