import { FC } from 'react';

interface YearMarkerProps {
  year: number;
  index: number;
}

const YearMarker: FC<YearMarkerProps> = ({ year, index }) => {
  return (
    <div 
      className="text-sm font-medium text-gray-600 py-2.5"
      style={{
        transform: `translateY(${index * 20}px)`,
      }}
    >
      {year}
    </div>
  );
};

export default YearMarker;