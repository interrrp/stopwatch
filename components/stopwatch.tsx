"use client";

import useStopwatch from "@/lib/stopwatch";
import { formatSecs } from "@/lib/time";

export default function Stopwatch() {
  const { secs, start, stop } = useStopwatch();

  return (
    <div>
      <p>{formatSecs(secs)} has elapsed since you opened this page.</p>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
    </div>
  );
}
