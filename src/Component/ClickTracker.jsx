import { useState } from "react";

function ClickTracker() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="card">
      <h2>Total Clicks: {count}</h2>

      <button onClick={handleClick}>Like</button>
      <button onClick={handleClick}>Share</button>
      <button onClick={handleClick}>Subscribe</button>
    </div>
  );
}

export default ClickTracker;
