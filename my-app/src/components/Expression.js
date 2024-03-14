import React, { useEffect, useState } from "react";

const Expression = () => {
  const numbers = [1, 2, 3, 4, 5];
  const listItems = numbers.map((number) => <li>{number}</li>);

  const [currDate, setCurrDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Today is {currDate.toTimeString()}</h1>
      <ul>{listItems}</ul>
    </div>
  );
};

export default Expression;
