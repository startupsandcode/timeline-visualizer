interface DecadeMarkerProps {
  year: number;
}

export default function DecadeMarker({ year }: DecadeMarkerProps) {
  return (
    <div 
      className="absolute -top-8 text-sm font-medium text-gray-600"
      style={{
        left: `calc(${(year % 10) * 20}px + 1rem)`,
      }}
    >
      {year}
    </div>
  );
}