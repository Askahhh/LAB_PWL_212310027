import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Impor file CSS Bootstrap

const Expression = () => {
  const [currDate, setCurrDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <h1 className="mt-5">Today is {currDate.toTimeString()}</h1>
    </div>
  );
};

export default Expression;
