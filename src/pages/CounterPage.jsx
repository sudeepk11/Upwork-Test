import React, { useState } from "react";
import Counter from "../components/Counter";
import Button from "../components/ui/Button";
import ResetButton from "../components/ResetButton";
import "../styles/App.css";


function CounterPage() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="app">
      <Counter count={count} />
      <Button text="Increment" onClick={increment} />
      <Button text="Decrement" onClick={decrement} />
      <ResetButton text="Reset" onClick={reset} />
    </div>
  );
}

export default CounterPage;
