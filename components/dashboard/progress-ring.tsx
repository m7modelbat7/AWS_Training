type ProgressRingProps = {
  value: number;
  size?: number;
  strokeWidth?: number;
};

export function ProgressRing({ value, size = 140, strokeWidth = 12 }: ProgressRingProps) {
  const boundedValue = Math.max(0, Math.min(100, value));
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference - (boundedValue / 100) * circumference;

  return (
    <div className="relative inline-flex items-center justify-center" style={{ height: size, width: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className="text-muted"
          fill="transparent"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          className="text-primary"
          fill="transparent"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
        />
      </svg>
      <div className="absolute text-center">
        <p className="text-3xl font-semibold leading-none">{boundedValue}%</p>
        <p className="pt-1 text-xs text-muted-foreground">readiness</p>
      </div>
    </div>
  );
}
