import { format } from 'date-fns';
import { Card } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

interface DayBoxProps {
  date: Date;
}

export default function DayBox({ date }: DayBoxProps) {
  const year = date.getFullYear();
  const isEvenYear = year % 2 === 0;

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Card 
          className={`w-5 h-5 hover:border-blue-500 transition-colors cursor-pointer ${
            isEvenYear ? 'border-blue-200' : 'border-green-200'
          }`}
          onClick={() => alert(format(date, 'PPP'))}
        />
      </TooltipTrigger>
      <TooltipContent>
        {format(date, 'PPP')}
      </TooltipContent>
    </Tooltip>
  );
}