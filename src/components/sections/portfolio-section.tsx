import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce site with product listings, a shopping cart, and a secure checkout process.',
    image: 'https://placehold.co/600x400.png',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'Firebase'],
    liveLink: '#',
    githubLink: '#',
    aiHint: 'e-commerce website'
  },
  {
    title: 'SaaS Dashboard',
    description: 'A complex data visualization dashboard for a SaaS product, providing users with real-time analytics.',
    image: 'https://placehold.co/600x400.png',
    technologies: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
    liveLink: '#',
    githubLink: '#',
    aiHint: 'dashboard analytics'
  },
  {
    title: 'Marketing Website',
    description: 'A sleek and modern marketing website for a tech startup, focused on performance and lead generation.',
    image: 'https://placehold.co/600x400.png',
    technologies: ['Gatsby', 'Contentful', 'Tailwind CSS', 'GraphQL'],
    liveLink: '#',
    githubLink: '#',
    aiHint: 'modern website'
  }
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">My Work</h2>
          <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto mt-4">
            Here are a few projects I've worked on recently. Want to see more? Just ask.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden flex flex-col group">
              <CardHeader className="p-0">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    data-ai-hint={project.aiHint}
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <CardTitle className="font-headline text-2xl mb-2">{project.title}</CardTitle>
                <CardDescription className="mb-4">{project.description}</CardDescription>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <div className="flex w-full justify-start gap-4">
                  <Link href={project.liveLink} passHref legacyBehavior>
                    <a target="_blank" rel="noopener noreferrer">
                      <Button>Live Demo <ArrowUpRight className="ml-2 h-4 w-4" /></Button>
                    </a>
                  </Link>
                  <Link href={project.githubLink} passHref legacyBehavior>
                    <a target="_blank" rel="noopener noreferrer">
                      <Button variant="outline">GitHub</Button>
                    </a>
                  </Link>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}