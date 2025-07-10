'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { useEffect } from 'react';
import { getRepoSummary, type ActionState } from './actions';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Loader2, Terminal } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Summarizing...
        </>
      ) : (
        'Summarize'
      )}
    </Button>
  );
}

export default function SummarizerForm() {
  const initialState: ActionState = {};
  const [state, dispatch] = useFormState(getRepoSummary, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: state.error,
      });
    }
  }, [state.error, toast]);

  return (
    <div className="max-w-3xl mx-auto">
      <Card className="mb-8">
        <CardContent className="p-6">
          <form action={dispatch} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                name="repoUrl"
                placeholder="https://github.com/example/repo"
                required
                className="flex-grow"
                defaultValue={state.repoUrl}
              />
              <SubmitButton />
            </div>
            {state?.error && !state.summary && (
              <p className="text-sm text-destructive">{state.error}</p>
            )}
          </form>
        </CardContent>
      </Card>

      {state?.summary && (
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-2xl">Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="whitespace-pre-wrap">{state.summary}</p>
          </CardContent>
        </Card>
      )}

      {!state?.summary && !state?.error && (
        <Alert>
          <Terminal className="h-4 w-4" />
          <AlertTitle>Waiting for input</AlertTitle>
          <AlertDescription>
            Enter a repository URL above to generate a summary.
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
}