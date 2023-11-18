import { PlayCircle, StopCircle } from "lucide-react";
import { useState } from "react";

type ButtonProps = {
  onStart: () => void;
  onStop: () => void;

  size?: number;
};

export default function StartStopButton({
  onStart,
  onStop,
  size,
}: ButtonProps) {
  const [started, setStarted] = useState(false);

  return (
    <button
      onClick={() => {
        if (started) {
          onStop();
        } else {
          onStart();
        }
        setStarted(!started);
      }}
    >
      {started ? <StopCircle size={size} /> : <PlayCircle size={size} />}
    </button>
  );
}
