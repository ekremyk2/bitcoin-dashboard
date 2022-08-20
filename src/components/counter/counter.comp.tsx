import React, { useEffect, useState } from "react";
import "./counter.comp.scss";

const className = "counter-comp";

const Counter = () => {
  const [counter, setCounter] = useState(36000);

  useEffect(() => {
    const interval = setInterval(() => decreaseCounter(1), 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const increaseCounter = (input: number) => {
    if (counter + input < 86400) setCounter((counter) => counter + input);
  };

  const decreaseCounter = (input: number) => {
    if (counter - input > 0) setCounter((counter) => counter - input);
  };

  const resetCounter = () => {
    setCounter(36000);
  };

  const asDate = () => {
    return new Date(counter * 1000);
  };

  return (
    <div className={`${className}`}>
      <div className={`${className}-button-group increment-buttons`}>
        <button
          onClick={() => {
            increaseCounter(3600);
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            increaseCounter(60);
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            increaseCounter(1);
          }}
        >
          +
        </button>
      </div>
      <div className={`${className}-clock-label`}>
        <label>{asDate().toISOString().substring(11, 19)}</label>
      </div>
      <div className={`${className}-button-group decrement-buttons`}>
        <button
          onClick={() => {
            decreaseCounter(3600);
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            decreaseCounter(60);
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            decreaseCounter(1);
          }}
        >
          -
        </button>
      </div>
      <button
        className={`${className}-reset-button`}
        onClick={() => {
          resetCounter();
        }}
      >
        RESET
      </button>
    </div>
  );
};

export default Counter;
