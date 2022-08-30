import React, { useState, useEffect } from "react";

const App = () => {
  useEffect(() => {
    document.title = "react-countapp";
  });

  const [count, setCount] = useState(0);
  type Msg = "Increment" | "Decrement";
  type ButtonProps = {
    value: Msg;
    onClick: () => void;
  };

  const handleClick = (s: Msg) => {
    switch (s) {
      case "Increment":
        setCount((prevCount) => prevCount + 1);
        return onclick;
      case "Decrement":
        setCount((prevCount) => prevCount - 1);
        return onclick;
    }
  };

  const Button = (props: ButtonProps) => {
    // handleClick(props.value);
    switch (props.value) {
      case "Increment":
        return <button onClick={props.onClick}>{"+"}</button>;
      case "Decrement":
        return <button onClick={props.onClick}>{"-"}</button>;
    }
  };

  const renderButton = (s: Msg) => {
    return <Button value={s} onClick={() => onclick} />;
  };

  return (
    <div>
      <div>{count}</div>
      <div>
        {renderButton("Increment")}
        {renderButton("Decrement")}
      </div>
    </div>
  );
};

export default App;
