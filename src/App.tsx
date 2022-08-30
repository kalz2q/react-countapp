import React, { useState, useEffect } from "react";

const App = () => {
  useEffect(() => {
    document.title = "react-countapp";
  });

  const [count, setCount] = useState(0);

  const handleClick = (i: number) => {
    switch (i) {
      case 1:
        setCount((prevCount) => prevCount + 1);
        break;
      default:
        setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => handleClick(2)}>Click me</button>
    </div>
  );
};

export default App;
