import { useState } from 'react';
import TimelineGrid from '@/components/TimelineGrid';
import YearInput from '@/components/YearInput';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

export default function Home() {
  const [yearCount, setYearCount] = useState(1);

  const handleExport = () => {
    const data = {
      yearCount,
      exportDate: new Date().toISOString(),
      // Add more timeline data as needed
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `timeline-export-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="container mx-auto p-4 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Timeline Visualization</h1>
        <Button onClick={handleExport} variant="outline" size="sm">
          <Download className="w-4 h-4 mr-2" />
          Export Timeline
        </Button>
      </div>

      <div className="max-w-md">
        <YearInput onSubmit={setYearCount} />
      </div>

      <TimelineGrid yearCount={yearCount} />
    </div>
  );
}