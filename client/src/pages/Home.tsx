import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/lib/firebase';
import { Redirect } from 'wouter';
import TimelineGrid from '@/components/TimelineGrid';
import YearInput from '@/components/YearInput';
import { Button } from '@/components/ui/button';

export default function Home() {
  const [user] = useAuthState(auth);
  const [yearCount, setYearCount] = useState(1);

  if (!user) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="container mx-auto p-4 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Timeline Visualization</h1>
        <Button 
          variant="outline"
          onClick={() => auth.signOut()}
        >
          Sign Out
        </Button>
      </div>

      <div className="max-w-md">
        <YearInput onSubmit={setYearCount} />
      </div>

      <TimelineGrid yearCount={yearCount} />
    </div>
  );
}