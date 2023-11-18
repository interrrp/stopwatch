export function formatSecs(secs: number): string {
  const mins = Math.floor(secs / 60);
  const secsLeft = secs % 60;
  return `${mins}:${secsLeft.toString().padStart(2, "0")}`;
}
