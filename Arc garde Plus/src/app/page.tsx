import type { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { CaseStudiesPreview } from '@/components/sections/CaseStudiesPreview';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { CTASection } from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'From Invisible to Unstoppable | Arc Garde++',
  description: '3× Revenue in 90 Days or your money back. We patch the leaks in traffic, conversion, and GTM so your business stops bleeding money and starts compounding growth.',
  openGraph: {
    title: 'From Invisible to Unstoppable | Arc Garde++',
    description: '3× Revenue in 90 Days or your money back. We patch the leaks in traffic, conversion, and GTM so your business stops bleeding money and starts compounding growth.',
    type: 'website',
    url: '/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'From Invisible to Unstoppable | Arc Garde++',
    description: '3× Revenue in 90 Days or your money back. We patch the leaks in traffic, conversion, and GTM so your business stops bleeding money and starts compounding growth.',
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProcessSection />
      <CaseStudiesPreview />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}