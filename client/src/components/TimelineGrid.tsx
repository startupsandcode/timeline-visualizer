import { useMemo } from 'react';
import DayBox from './DayBox';
import DecadeMarker from './DecadeMarker';

interface TimelineGridProps {
  yearCount: number;
}

export default function TimelineGrid({ yearCount }: TimelineGridProps) {
  const days = useMemo(() => {
    const today = new Date();
    const endDate = new Date();
    endDate.setFullYear(today.getFullYear() + yearCount);
    
    const daysArray = [];
    let currentDate = new Date(today);
    
    while (currentDate <= endDate) {
      daysArray.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
    
    return daysArray;
  }, [yearCount]);

  const decades = useMemo(() => {
    const decadeYears = new Set();
    days.forEach(date => {
      const year = date.getFullYear();
      if (year % 10 === 0) {
        decadeYears.add(year);
      }
    });
    return Array.from(decadeYears) as number[];
  }, [days]);

  return (
    <div className="w-full overflow-x-auto">
      <div className="relative grid grid-cols-[repeat(auto-fill,minmax(20px,1fr))] gap-0.5 p-4">
        {days.map((date, index) => (
          <DayBox key={index} date={date} />
        ))}
        {decades.map((year) => (
          <DecadeMarker key={year} year={year} />
        ))}
      </div>
    </div>
  );
}
