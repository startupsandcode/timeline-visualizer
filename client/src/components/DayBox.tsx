import { format } from 'date-fns';
import { Card } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

interface DayBoxProps {
  date: Date;
}

export default function DayBox({ date }: DayBoxProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Card 
          className="w-5 h-5 border border-blue-200 hover:border-blue-500 transition-colors cursor-pointer"
          onClick={() => alert(format(date, 'PPP'))}
        />
      </TooltipTrigger>
      <TooltipContent>
        {format(date, 'PPP')}
      </TooltipContent>
    </Tooltip>
  );
}
