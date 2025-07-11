"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Code } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';

const navLinks = [
  { href: '/#about', label: 'About' },
  { href: '/#services', label: 'Services' },
  { href: '/#portfolio', label: 'Portfolio' },
  { href: '/#testimonials', label: 'Testimonials' },
  { href: '/#contact', label: 'Contact' },
];

export default function Header() {
  const [isSheetOpen, setSheetOpen] = useState(false);

  const closeSheet = () => setSheetOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <Code className="h-6 w-6 text-primary" />
          <span className="font-headline text-lg font-bold">Julio Camargo</span>
        </Link>
        <nav className="hidden md:flex items-center gap-2 lg:gap-4 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-foreground/60 transition-colors hover:text-primary"
              prefetch={false}
            >
              {link.label}
            </Link>
          ))}
           <div className="flex items-center gap-2">
             <Link href="/summarizer" passHref>
                <Button variant="outline" size="sm">AI Summarizer</Button>
             </Link>
             <ThemeToggle />
           </div>
        </nav>
        <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col gap-6 p-6">
              <Link href="/" className="flex items-center gap-2" prefetch={false} onClick={closeSheet}>
                <Code className="h-6 w-6 text-primary" />
                <span className="font-headline text-lg font-bold">Julio Camargo</span>
              </Link>
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg font-medium transition-colors hover:text-primary"
                    prefetch={false}
                    onClick={closeSheet}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="flex items-center justify-between">
                <Link href="/summarizer" passHref>
                   <Button variant="outline" onClick={closeSheet}>AI Summarizer</Button>
                </Link>
                <ThemeToggle />
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
