'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Search, Target, Rocket, TrendingUp } from 'lucide-react';

const processSteps = [
  {
    icon: Search,
    title: 'Deep Audit',
    description: 'We identify exactly where your revenue is leaking across traffic, conversion, and GTM processes.',
    timeline: 'Week 1',
    color: 'from-primary-200 to-primary-100',
  },
  {
    icon: Target,
    title: 'Strategic Roadmap',
    description: 'Custom growth strategy with prioritized initiatives based on highest ROI opportunities.',
    timeline: 'Week 2',
    color: 'from-accent-200 to-accent-100',
  },
  {
    icon: Rocket,
    title: 'Rapid Implementation',
    description: 'We work alongside your team to execute the strategy with precision and speed.',
    timeline: 'Weeks 3-8',
    color: 'from-primary-200 to-accent-200',
  },
  {
    icon: TrendingUp,
    title: 'Scale & Optimize',
    description: 'Continuous optimization and scaling to compound your growth momentum.',
    timeline: 'Weeks 9-12',
    color: 'from-accent-100 to-primary-200',
  },
];

export function ProcessSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="section-padding bg-neutral-900/50">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
            Our <span className="text-gradient">Proven Process</span>
          </h2>
          <p className="text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto">
            We don't guess. We follow a systematic approach that has generated over $50M in additional revenue for our clients.
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-200 via-accent-200 to-primary-200 transform md:-translate-x-1/2"></div>

          {/* Process Steps */}
          <div className="space-y-12 md:space-y-16">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-gradient-to-r from-primary-200 to-accent-200 rounded-full transform md:-translate-x-1/2 shadow-glow z-10"></div>

                {/* Content Card */}
                <div className={`flex-1 ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="card card-hover p-8 bg-gradient-to-br from-neutral-800/60 to-neutral-900/80 backdrop-blur-sm"
                  >
                    {/* Icon */}
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${step.color} mb-6`}>
                      <step.icon className="h-8 w-8 text-primary-900" />
                    </div>

                    {/* Timeline Badge */}
                    <div className="inline-block px-3 py-1 bg-primary-200/10 text-primary-200 text-sm font-medium rounded-full mb-4">
                      {step.timeline}
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-display font-semibold text-white mb-4">
                      {step.title}
                    </h3>
                    <p className="text-neutral-300 text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16 pt-12 border-t border-neutral-800/50"
        >
          <p className="text-xl text-neutral-300 mb-6">
            Ready to see this process in action for your business?
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              onClick={() => {
                document.getElementById('cta-section')?.scrollIntoView({ 
                  behavior: 'smooth' 
                });
              }}
              className="btn btn-primary text-lg px-8 py-4"
            >
              Get Your Free Strategy Audit
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}