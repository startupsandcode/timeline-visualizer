import { FC } from 'react';

interface YearMarkerProps {
  year: number;
  index: number;
}

const YearMarker: FC<YearMarkerProps> = ({ year, index }) => {
  return (
    <div 
      className="absolute -left-16 text-sm font-medium text-gray-600"
      style={{
        top: `${index * 20}px`
      }}
    >
      {year}
    </div>
  );
};

export default YearMarker;
