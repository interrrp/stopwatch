import { useEffect, useState } from "react";

export default function useStopwatch(initialSecs: number = 0) {
  const [secs, setSecs] = useState(initialSecs);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (running) {
        setSecs((prevSecs) => prevSecs + 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [running]);

  return {
    secs,

    start: () => setRunning(true),
    stop: () => setRunning(false),
  };
}
