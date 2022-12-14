import React, { useState, useEffect } from "react";

const App = () => {
  useEffect(() => {
    document.title = "react-countapp";
  });

  const [count, setCount] = useState(0);

  type Msg = "Increment" | "Decrement";

  const handleClick = (msg: Msg) => {
    switch (msg) {
      case "Increment":
        setCount((prevCount) => prevCount + 1);
        break;
      default:
        setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => handleClick("Increment")}>+</button>
      <button onClick={() => handleClick("Decrement")}>-</button>
    </div>
  );
};

export default App;
