"use client";

import { useEffect, useState } from "react";

const Clock = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setDateTime(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div>{dateTime.toLocaleString("en-US")}</div>;
};

export default Clock;
