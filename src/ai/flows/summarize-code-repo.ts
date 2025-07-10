'use server';
/**
 * @fileOverview An AI agent that summarizes code repositories.
 *
 * - summarizeCodeRepo - A function that handles the code repository summarization process.
 * - SummarizeCodeRepoInput - The input type for the summarizeCodeRepo function.
 * - SummarizeCodeRepoOutput - The return type for the summarizeCodeRepo function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeCodeRepoInputSchema = z.object({
  repoUrl: z.string().describe('The URL of the code repository to summarize.'),
});
export type SummarizeCodeRepoInput = z.infer<typeof SummarizeCodeRepoInputSchema>;

const SummarizeCodeRepoOutputSchema = z.object({
  summary: z.string().describe('A summary of the code repository.'),
});
export type SummarizeCodeRepoOutput = z.infer<typeof SummarizeCodeRepoOutputSchema>;

export async function summarizeCodeRepo(input: SummarizeCodeRepoInput): Promise<SummarizeCodeRepoOutput> {
  return summarizeCodeRepoFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeCodeRepoPrompt',
  input: {schema: SummarizeCodeRepoInputSchema},
  output: {schema: SummarizeCodeRepoOutputSchema},
  prompt: `You are an expert software developer. Please summarize the code repository at the following URL.  Base your summary entirely on the information available in the repository itself, such as its description and the code contained within it.  The goal is to provide a concise overview of the project's purpose, functionality, and key technologies used.

Repository URL: {{{repoUrl}}}`,
});

const summarizeCodeRepoFlow = ai.defineFlow(
  {
    name: 'summarizeCodeRepoFlow',
    inputSchema: SummarizeCodeRepoInputSchema,
    outputSchema: SummarizeCodeRepoOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
