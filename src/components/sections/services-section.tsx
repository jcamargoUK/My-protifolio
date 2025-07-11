import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CodeXml, ServerCog, Rocket } from 'lucide-react';

const services = [
  {
    icon: <CodeXml className="h-10 w-10 text-primary group-hover:text-primary-foreground transition-colors duration-300" />,
    title: 'Front-End Development',
    description: 'Creating beautiful, responsive, and intuitive user interfaces with modern technologies like React and Next.js.'
  },
  {
    icon: <ServerCog className="h-10 w-10 text-primary group-hover:text-primary-foreground transition-colors duration-300" />,
    title: 'Full-Stack Solutions',
    description: 'Building robust and scalable full-stack applications, from database design to API development and deployment.'
  },
  {
    icon: <Rocket className="h-10 w-10 text-primary group-hover:text-primary-foreground transition-colors duration-300" />,
    title: 'Website Optimization',
    description: 'Improving website performance, speed, and SEO to enhance user experience and drive more traffic.'
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-gradient-to-b from-background-alt to-background border-y py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Services I Offer</h2>
          <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto mt-4">
            I provide a range of services to help you achieve your digital goals.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group text-center p-6 flex flex-col items-center shadow-lg hover:shadow-2xl transition-all duration-300 bg-card text-card-foreground hover:bg-primary hover:text-primary-foreground hover:scale-105"
            >
              <CardHeader className="items-center">
                {service.icon}
                <CardTitle className="mt-4 font-headline text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardDescription className="text-base text-muted-foreground group-hover:text-primary-foreground/90 transition-colors duration-300">
                {service.description}
              </CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
