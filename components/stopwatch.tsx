"use client";

import StartStopButton from "@/components/start-stop-button";
import useStopwatch from "@/lib/stopwatch";
import { formatSecs } from "@/lib/time";

export default function Stopwatch() {
  const { secs, start, stop } = useStopwatch();

  return (
    <div>
      <p>{formatSecs(secs)} has elapsed since you opened this page.</p>
      <StartStopButton onStart={start} onStop={stop} size={64} />
    </div>
  );
}
