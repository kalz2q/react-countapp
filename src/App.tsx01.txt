import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const onIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const onDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div>
      <div>{count}</div>
      <div>
        <button type="button" onClick={onIncrement}>
          +
        </button>
        <button type="button" onClick={onDecrement}>
          -
        </button>
      </div>
    </div>
  );
};
export default App;
