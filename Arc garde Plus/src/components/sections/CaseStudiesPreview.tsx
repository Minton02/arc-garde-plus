'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Users, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';

const caseStudies = [
  {
    id: 'saas-startup',
    title: 'SaaS Startup → $2M ARR',
    client: 'TechFlow Solutions',
    industry: 'B2B SaaS',
    challenge: 'Stagnant growth at $400K ARR with high churn rates',
    image: '/case-study-1.jpg',
    metrics: [
      { icon: DollarSign, label: 'Revenue Growth', value: '5x', color: 'text-accent-200' },
      { icon: TrendingUp, label: 'Conversion Rate', value: '+340%', color: 'text-primary-200' },
      { icon: Users, label: 'Churn Reduction', value: '-67%', color: 'text-green-400' },
    ],
    timeline: '6 months',
    quote: "Arc Garde++ didn't just grow our revenue—they transformed our entire go-to-market strategy.",
    author: 'Sarah Chen, CEO',
    tags: ['Lead Generation', 'Conversion Optimization', 'Retention'],
  },
  {
    id: 'ecommerce-brand',
    title: 'E-commerce → 8-Figure Revenue',
    client: 'Urban Essentials',
    industry: 'D2C E-commerce',
    challenge: 'Struggling to scale beyond $1M with rising acquisition costs',
    image: '/case-study-2.jpg',
    metrics: [
      { icon: DollarSign, label: 'Revenue Growth', value: '12x', color: 'text-accent-200' },
      { icon: TrendingUp, label: 'ROAS Improvement', value: '+450%', color: 'text-primary-200' },
      { icon: Users, label: 'Customer LTV', value: '+280%', color: 'text-green-400' },
    ],
    timeline: '8 months',
    quote: "They found revenue opportunities we never knew existed. Game-changing results.",
    author: 'Marcus Rodriguez, Founder',
    tags: ['Paid Advertising', 'CRO', 'Email Marketing'],
  },
  {
    id: 'consulting-firm',
    title: 'Consulting Firm → Market Leader',
    client: 'Strategic Advisors Inc.',
    industry: 'B2B Consulting',
    challenge: 'Commoditized positioning in a crowded market',
    image: '/case-study-3.jpg',
    metrics: [
      { icon: DollarSign, label: 'Deal Size', value: '+800%', color: 'text-accent-200' },
      { icon: TrendingUp, label: 'Pipeline Growth', value: '+600%', color: 'text-primary-200' },
      { icon: Users, label: 'Close Rate', value: '+240%', color: 'text-green-400' },
    ],
    timeline: '4 months',
    quote: "We went from competing on price to being the premium choice in our category.",
    author: 'Jennifer Walsh, Managing Partner',
    tags: ['Positioning', 'Content Strategy', 'Sales Enablement'],
  },
];

export function CaseStudiesPreview() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="case-studies" ref={ref} className="section-padding bg-primary-900">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
            Real Results for <span className="text-gradient">Real Businesses</span>
          </h2>
          <p className="text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto">
            Don't take our word for it. See how we've transformed businesses across industries with our proven growth methodology.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Link href={`/case-studies/${study.id}`}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="card card-hover h-full bg-gradient-to-br from-neutral-800/60 to-neutral-900/80 backdrop-blur-sm overflow-hidden group cursor-pointer"
                >
                  {/* Image Placeholder */}
                  <div className="h-48 bg-gradient-to-br from-primary-200/20 to-accent-200/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent" />
                    <div className="absolute bottom-4 left-6 right-6">
                      <div className="flex items-center space-x-2 text-sm text-neutral-300 mb-2">
                        <span>{study.industry}</span>
                        <span>•</span>
                        <span>{study.timeline}</span>
                      </div>
                      <h3 className="text-xl font-display font-semibold text-white group-hover:text-primary-200 transition-colors">
                        {study.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6">
                    {/* Challenge */}
                    <p className="text-neutral-400 text-sm mb-6 leading-relaxed">
                      {study.challenge}
                    </p>

                    {/* Metrics */}
                    <div className="grid grid-cols-1 gap-4 mb-6">
                      {study.metrics.map((metric, metricIndex) => (
                        <div key={metricIndex} className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <metric.icon className="h-4 w-4 text-neutral-400" />
                            <span className="text-sm text-neutral-300">{metric.label}</span>
                          </div>
                          <AnimatedCounter
                            value={parseInt(metric.value.replace(/[^\d]/g, '')) || 0}
                            suffix={metric.value.replace(/[\d]/g, '')}
                            className={`text-lg font-bold ${metric.color}`}
                          />
                        </div>
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="border-l-2 border-primary-200/30 pl-4 mb-4">
                      <p className="text-neutral-300 text-sm italic mb-2">
                        "{study.quote}"
                      </p>
                      <cite className="text-primary-200 text-xs font-medium">
                        — {study.author}
                      </cite>
                    </blockquote>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-primary-200/10 text-primary-200 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-neutral-700/50">
                      <span className="text-sm text-neutral-400">Deep dive</span>
                      <ArrowRight className="h-4 w-4 text-primary-200 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <Button
            asChild
            variant="secondary"
            size="lg"
            className="group"
          >
            <Link href="/case-studies">
              View All Case Studies
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}