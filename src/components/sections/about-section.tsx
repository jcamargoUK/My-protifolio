import Image from 'next/image';
import { Badge } from '@/components/ui/badge';

const skills = [
  'React', 'Next.js', 'TypeScript', 'JavaScript (ES6+)',
  'Node.js', 'Tailwind CSS', 'Firebase', 'GraphQL', 'HTML5 & CSS3'
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-gradient-to-b from-background to-background-alt py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-2">
            <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://placehold.co/600x600.png"
                alt="Julio Camargo"
                fill
                className="object-cover"
                data-ai-hint="professional developer portrait"
              />
            </div>
          </div>
          <div className="md:col-span-3">
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-muted-foreground mb-6 text-lg">
              I'm a passionate freelance web developer with a knack for creating elegant and efficient solutions. With over 5 years of experience, I've helped startups and established businesses bring their visions to life. My approach is centered on communication, collaboration, and a relentless pursuit of quality. I don't just write code; I build digital experiences that are intuitive, performant, and user-friendly.
            </p>
            <h3 className="text-xl font-semibold mb-4">My Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map(skill => (
                <Badge key={skill} variant="secondary" className="text-sm">{skill}</Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
