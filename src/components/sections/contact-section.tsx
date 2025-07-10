import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function ContactSection() {
  return (
    <section id="contact" className="bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Get In Touch</h2>
          <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto mt-4">
            Have a project in mind? I'd love to hear from you.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <Card>
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="space-y-2">
                  <Input id="name" placeholder="Your Name" required />
                </div>
                <div className="space-y-2">
                  <Input id="email" type="email" placeholder="Your Email" required />
                </div>
                <div className="space-y-2">
                  <Textarea id="message" placeholder="Your Message" rows={5} required />
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
          <div className="space-y-6">
            <h3 className="font-headline text-2xl font-bold">Contact Information</h3>
            <p className="text-muted-foreground">
              You can also reach me directly through email, phone, or my social channels.
            </p>
            <div className="space-y-4">
              <a href="mailto:contact@juliocamargo.dev" className="flex items-center gap-4 group">
                <Mail className="h-6 w-6 text-primary" />
                <span className="text-lg group-hover:text-primary transition-colors">contact@juliocamargo.dev</span>
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-4 group">
                <Phone className="h-6 w-6 text-primary" />
                <span className="text-lg group-hover:text-primary transition-colors">+1 (234) 567-890</span>
              </a>
            </div>
            <div className="flex items-center gap-4 mt-6">
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Button variant="outline" size="icon">
                  <Github className="h-6 w-6" />
                </Button>
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Button variant="outline" size="icon">
                  <Linkedin className="h-6 w-6" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}