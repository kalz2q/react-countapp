import React, { useState, useEffect } from "react";


const App = () => {
  useEffect(() => {
    document.title = "react-countapp";
  });

  const [count, setCount] = useState(0);
  type Msg = "Increment" | "Decrement";
  type BButtonProps = {
    value: Msg;
  };
  const BButton = (props: BButtonProps) => {
    switch (props.value) {
      case "Increment":
        setCount((prevCount) => prevCount + 1);
        return <button onClick={onclick}>"+"</button>;
        break;
      case "Decrement":
        setCount((prevCount) => prevCount - 1);
        return  <button onClick={onclick}>"-"</button>;
        break;
      default: 
        return <button onClick={onclick}>"*****"</button>;
    }
  };


  // const onIncrement = () => {
  //   setCount((prevCount) => prevCount + 1);
  // };

  // const onDecrement = () => {
  //   setCount((prevCount) => prevCount - 1);
  // };

  return (
    <div>
      <div>{count}</div>
      <div>
        {/* <button type="button" onClick={onIncrement}>
          +
        </button>
        <button type="button" onClick={onDecrement}>
          -
        </button> */}
        <BButton value="Increment" />
        <BButton value="Decrement"  />
      </div>
    </div>
  );
};

export default App;
