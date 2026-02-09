"use client";

import { useEffect, useState } from "react";

const useClock = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getDate = () => {
    return now.toLocaleDateString("pt-BR");
  };

  const getTime = () => {
    return now.toLocaleTimeString("pt-BR");
  };

  return { getDate, getTime };
};

export default useClock;
