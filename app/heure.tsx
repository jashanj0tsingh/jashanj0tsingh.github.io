"use client";

import { useEffect, useState } from "react";

type DigitalClock = {
  time: string;
};

export const Clock = ({ time: initial }: DigitalClock) => {
  const [dateTime, setDateTime] = useState(new Date(initial));

  useEffect(() => {
    const interval = setInterval(() => setDateTime(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div>{dateTime.toLocaleString("en-US")}</div>;
};
