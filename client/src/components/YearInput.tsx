import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

const formSchema = z.object({
  years: z.string().transform((val) => parseInt(val, 10)).refine(
    (val) => val >= 1 && val <= 100,
    { message: "Please enter a number between 1 and 100" }
  ),
});

interface YearInputProps {
  onSubmit: (years: number) => void;
}

export default function YearInput({ onSubmit }: YearInputProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      years: "1",
    },
  });

  return (
    <Card className="p-6 bg-white/50 backdrop-blur-sm border-none shadow-md">
      <Form {...form}>
        <form onSubmit={form.handleSubmit((data) => onSubmit(data.years))} className="space-y-4">
          <FormField
            control={form.control}
            name="years"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-gray-700 font-medium">Number of Years to Visualize</FormLabel>
                <FormControl>
                  <Input 
                    type="number" 
                    min="1" 
                    max="100" 
                    className="bg-white" 
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full">Generate Timeline</Button>
        </form>
      </Form>
    </Card>
  );
}