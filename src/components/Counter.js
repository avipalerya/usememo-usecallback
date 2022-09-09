import React, { useMemo, useState } from "react";

export const Counter = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);
  const incrementCounterOne = () => {
    setCounterOne(counterOne + 1);
  };
  const incrementCounterTwo = () => {
    setCounterTwo(counterTwo + 1);
  };

  //usememo hook will return the memoized value,it will be
  //executed only when the dependancy is changed else it will return the meoiized value
  const IsEven = useMemo(() => {
    console.log("IsEven is executed");
    let i = 0;
    while (i < 1000000000) {
      i++;
    }
    return counterTwo % 2 === 0;
  }, [counterTwo]);
  return (
    <div>
      <h1>CounterOne: {counterOne}</h1>
      <h1>counterTwo:{counterTwo}</h1>
      <button onClick={incrementCounterOne}>incrementCounterOne</button>
      <span>{IsEven ? "even" : "odd"}</span>
      <button onClick={incrementCounterTwo}>incrementCounterTwo</button>
    </div>
  );
};
