import { useState } from 'react';
import TimelineGrid from '@/components/TimelineGrid';
import YearInput from '@/components/YearInput';

export default function Home() {
  const [yearCount, setYearCount] = useState(1);

  return (
    <div className="container mx-auto p-4 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Timeline Visualization</h1>
      </div>

      <div className="max-w-md">
        <YearInput onSubmit={setYearCount} />
      </div>

      <TimelineGrid yearCount={yearCount} />
    </div>
  );
}