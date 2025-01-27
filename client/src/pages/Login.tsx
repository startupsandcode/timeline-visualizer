import { useAuthState } from 'react-firebase-hooks/auth';
import { Redirect } from 'wouter';
import { auth, signInWithGoogle } from '@/lib/firebase';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Login() {
  const [user] = useAuthState(auth);

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md mx-4">
        <CardHeader>
          <CardTitle>Timeline Visualization</CardTitle>
        </CardHeader>
        <CardContent>
          <Button 
            onClick={signInWithGoogle}
            className="w-full"
          >
            Sign in with Google
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}