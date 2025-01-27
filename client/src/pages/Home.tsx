import { useState, useRef } from 'react';
import TimelineGrid from '@/components/TimelineGrid';
import YearInput from '@/components/YearInput';
import { Button } from '@/components/ui/button';
import { Download, Share2 } from 'lucide-react';
import html2canvas from 'html2canvas';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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

  const handleShare = async () => {
    if (!timelineRef.current) return;

    try {
      const canvas = await html2canvas(timelineRef.current, {
        scale: 2,
        backgroundColor: '#ffffff',
      });

      const blob = await new Promise<Blob>((resolve) => {
        canvas.toBlob((blob) => resolve(blob!), 'image/png', 1.0);
      });

      if (navigator.share) {
        const file = new File([blob], 'timeline.png', { type: 'image/png' });
        await navigator.share({
          title: 'My Timeline',
          text: 'Check out my timeline visualization!',
          files: [file],
        }).catch((error) => {
          console.log('Error sharing:', error);
        });
      } else {
        // Fallback to opening in new tab
        const url = URL.createObjectURL(blob);
        window.open(url, '_blank');
        URL.revokeObjectURL(url);
      }
    } catch (error) {
      console.error('Error sharing timeline:', error);
    }
  };

  return (
    <div className="container mx-auto p-4 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Timeline Visualization</h1>
        <div className="flex gap-2">
          <Button onClick={handleExport} variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={handleShare}>
                Share Timeline
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
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