"use client";

import StartStopButton from "@/components/start-stop-button";
import useStopwatch from "@/lib/stopwatch";
import { formatSecs } from "@/lib/time";

export default function Stopwatch() {
  const { secs, start, stop } = useStopwatch();

  return (
    <div className="text-center space-y-8">
      <p className="text-8xl">{formatSecs(secs)}</p>
      <StartStopButton onStart={start} onStop={stop} size={64} />
    </div>
  );
}
