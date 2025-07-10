'use server';

import { summarizeCodeRepo, type SummarizeCodeRepoInput } from '@/ai/flows/summarize-code-repo';
import { z } from 'zod';

const FormSchema = z.object({
  repoUrl: z.string().url({ message: "Please enter a valid GitHub repository URL." })
    .regex(/^https:\/\/github\.com\/[\w-]+\/[\w-.]+$/, "Please enter a valid GitHub repository URL (e.g., https://github.com/owner/repo).")
});

export interface ActionState {
  summary?: string;
  error?: string;
  repoUrl?: string;
}

export async function getRepoSummary(prevState: ActionState, formData: FormData): Promise<ActionState> {
  const repoUrl = formData.get('repoUrl') as string;
  const validatedFields = FormSchema.safeParse({
    repoUrl,
  });

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors.repoUrl?.[0],
      repoUrl
    };
  }

  try {
    const input: SummarizeCodeRepoInput = { repoUrl: validatedFields.data.repoUrl };
    const result = await summarizeCodeRepo(input);
    return { summary: result.summary, repoUrl };
  } catch (e) {
    console.error(e);
    const errorMessage = e instanceof Error ? e.message : 'An unexpected error occurred.';
    return { 
        error: `Failed to generate summary: ${errorMessage}. Please check the URL and try again.`,
        repoUrl
    };
  }
}