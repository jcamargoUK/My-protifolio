import Link from 'next/link';
import { Github, Linkedin, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer className="w-full bg-muted">
      <div className="container mx-auto py-8 px-4 md:px-6 flex flex-col sm:flex-row items-center justify-between">
        <div className="flex items-center gap-2 mb-4 sm:mb-0">
          <Code className="h-6 w-6 text-primary" />
          <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Julio Camargo. All rights reserved.</p>
        </div>
        <div className="flex items-center gap-4">
          <Link href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Button variant="ghost" size="icon">
              <Github className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Button variant="ghost" size="icon">
              <Linkedin className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </footer>
  );
}