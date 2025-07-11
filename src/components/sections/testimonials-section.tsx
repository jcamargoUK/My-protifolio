import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const testimonials = [
  {
    quote: "Julio is an exceptional developer who delivers high-quality work on time. His attention to detail and problem-solving skills are top-notch. I couldn't be happier with the results.",
    name: 'Jane Doe',
    title: 'CEO, Tech Corp',
    avatar: 'https://placehold.co/40x40.png',
    aiHint: 'woman portrait'
  },
  {
    quote: "Working with Julio was a fantastic experience. He is not only a skilled developer but also a great communicator. He transformed our ideas into a beautiful, functional website.",
    name: 'John Smith',
    title: 'Founder, Creative Co.',
    avatar: 'https://placehold.co/40x40.png',
    aiHint: 'man portrait'
  },
  {
    quote: "The performance and design of our new website have exceeded all our expectations. Julio's expertise was invaluable throughout the project. Highly recommended!",
    name: 'Emily White',
    title: 'Marketing Director, Innovate Ltd.',
    avatar: 'https://placehold.co/40x40.png',
    aiHint: 'woman professional'
  }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-gradient-to-b from-background-alt to-background border-y py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">What My Clients Say</h2>
          <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto mt-4">
            I'm proud to have built strong relationships and successful projects.
          </p>
        </div>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="p-8 text-center flex flex-col items-center">
                      <p className="text-xl italic mb-6">"{testimonial.quote}"</p>
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial.aiHint} />
                          <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
