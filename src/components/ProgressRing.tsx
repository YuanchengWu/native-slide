interface ProgressRingProps {
  progress: number
}

export function ProgressRing({ progress }: ProgressRingProps): JSX.Element {
  const radius = 29.34
  const stroke = 4.67
  const normalizedRadius = radius - stroke * 2
  const circumference = normalizedRadius * 2 * Math.PI
  const strokeDashoffset = circumference - (progress / 100) * circumference

  return (
    <svg height={radius * 2} width={radius * 2}>
      <circle
        stroke="#E9E9E9"
        fill="transparent"
        strokeWidth={stroke}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <circle
        stroke="#FFCA5C"
        fill="transparent"
        strokeWidth={stroke}
        strokeDasharray={circumference + " " + circumference}
        style={{ strokeDashoffset, rotate: "90deg", transformOrigin: "center" }}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
    </svg>
  )
}
