import { useState } from "react";
import { Link } from "react-router-dom";

function Chips() {
  const [clickCounts, setClickCounts] = useState(0);

  function increaseChips() {
    setClickCounts(curr => curr + 1);
  }

  return (
    <div>
      <h1>CHIPS!</h1>
      <div>
        <h3>Amount of chips {clickCounts}</h3>
        <button onClick={increaseChips}>MORE CHIPS</button>
      </div>
      <Link to="/">Go Home</Link>
    </div>
  );
}

export default Chips;