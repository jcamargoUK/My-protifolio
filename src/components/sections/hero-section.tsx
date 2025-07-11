import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="bg-card border-b">
      <div className="container mx-auto px-4 md:px-6 text-center flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
        <div className="max-w-3xl">
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-4">
            Transforming Ideas into Digital Realities
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Hi, I'm Julio Camargo. I build fast, responsive, and beautiful websites that help businesses grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact">
              <Button 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-background hover:text-primary border-2 border-primary transition-transform duration-200 hover:scale-105"
              >
                Hire Me
              </Button>
            </Link>
            <Link href="/#portfolio">
              <Button
                size="lg"
                variant="outline"
                className="bg-[#F97316] text-secondary hover:bg-secondary hover:text-[#F97316] border-2 border-[#F97316] transition-all duration-200 hover:scale-105"
              >
                View My Work
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
