import SummarizerForm from './summarizer-form';

export default function SummarizerPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter mb-4">
          AI Code Repository Summarizer
        </h1>
        <p className="text-lg text-muted-foreground">
          Enter a public GitHub repository URL to get an AI-generated summary of its purpose, functionality, and key technologies.
        </p>
      </div>
      <SummarizerForm />
    </div>
  );
}