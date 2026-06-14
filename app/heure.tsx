"use client";

import { useEffect, useState } from "react";

export const Clock = () => {
  const [dateTime, setDateTime] = useState<Date | null>(null);

  useEffect(() => {
    setDateTime(new Date());
    const interval = setInterval(() => setDateTime(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div>{dateTime ? dateTime.toLocaleString("en-US") : null}</div>;
};
