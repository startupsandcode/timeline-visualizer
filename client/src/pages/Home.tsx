import { useState, useRef } from 'react';
import TimelineGrid from '@/components/TimelineGrid';
import YearInput from '@/components/YearInput';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import html2canvas from 'html2canvas';

export default function Home() {
  const [yearCount, setYearCount] = useState(1);
  const timelineRef = useRef<HTMLDivElement>(null);

  const handleExport = async () => {
    if (!timelineRef.current) return;

    try {
      const canvas = await html2canvas(timelineRef.current, {
        scale: 2, // Higher quality
        backgroundColor: '#ffffff',
      });

      const image = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = image;
      link.download = `timeline-${new Date().toISOString().split('T')[0]}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error generating timeline image:', error);
    }
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

      <div ref={timelineRef}>
        <TimelineGrid yearCount={yearCount} />
      </div>
    </div>
  );
}