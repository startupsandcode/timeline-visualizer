import { useMemo } from 'react';
import DayBox from './DayBox';
import DecadeMarker from './DecadeMarker';
import YearMarker from './YearMarker';

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

  const yearPositions = useMemo(() => {
    const positions: { [key: number]: number } = {};
    let lastYear = days[0].getFullYear();
    let yearStartIndex = 0;

    days.forEach((date, index) => {
      const currentYear = date.getFullYear();
      if (currentYear !== lastYear) {
        positions[currentYear] = Math.floor(index / 18);
        lastYear = currentYear;
        yearStartIndex = index;
      }
    });

    // Add the first year
    positions[days[0].getFullYear()] = 0;

    return positions;
  }, [days]);

  const years = useMemo(() => {
    return Object.keys(yearPositions).map(Number).sort((a, b) => a - b);
  }, [yearPositions]);

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
    <div className="relative w-full overflow-x-auto">
      <div className="sticky left-0 w-16 h-full bg-white z-10" /> {/* Year markers background */}
      <div className="relative min-w-[800px]"> {/* Minimum width to prevent squishing */}
        <div className="ml-20 grid auto-cols-[20px] grid-flow-col gap-0.5 p-4">
          {/* Year markers with fixed position */}
          <div className="absolute left-0 top-0 bottom-0 w-16 flex flex-col">
            {years.map((year) => (
              <YearMarker 
                key={year} 
                year={year} 
                index={yearPositions[year]} 
              />
            ))}
          </div>

          {/* Timeline content */}
          <div className="relative grid auto-cols-[20px] grid-flow-col gap-0.5">
            {days.map((date, index) => (
              <DayBox key={index} date={date} />
            ))}
          </div>

          {/* Decade markers */}
          <div className="absolute top-0 left-0 right-0">
            {decades.map((year) => (
              <DecadeMarker key={year} year={year} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}