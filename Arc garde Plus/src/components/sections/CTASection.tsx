'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle, Calendar, ArrowRight, Shield, Clock, Target } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useBooking } from '@/components/providers';

const benefits = [
  'Comprehensive revenue audit (usually $5K value)',
  'Custom growth roadmap with prioritized initiatives',
  'Competitive analysis and positioning insights',
  'Implementation timeline with clear milestones',
  'Direct access to our senior strategists',
];

const guarantees = [
  { icon: Shield, text: 'No long-term contracts or commitments' },
  { icon: Clock, text: 'Results visible within 30 days' },
  { icon: Target, text: '100% money-back guarantee' },
  { icon: CheckCircle, text: 'Free follow-up consultation included' },
];

export function CTASection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const { openBooking } = useBooking();

  return (
    <section id="cta-section" ref={ref} className="section-padding bg-gradient-to-br from-primary-900 via-neutral-900 to-primary-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary-200/10 rounded-full blur-xl animate-float" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent-200/10 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-primary-200/5 rounded-full blur-lg animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="max-w-7xl mx-auto container-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Main CTA */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center lg:text-left">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-primary-200/10 border border-primary-200/20 text-primary-200 text-sm font-medium mb-6"
              >
                <Calendar className="h-4 w-4 mr-2" />
                Limited Spots Available This Month
              </motion.div>

              {/* Headline */}
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6 leading-tight"
              >
                Ready to <span className="text-gradient">3× Your Revenue</span> in the Next 90 Days?
              </motion.h2>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl text-neutral-300 mb-8 leading-relaxed"
              >
                Book your <strong className="text-white">free 15-minute strategy audit</strong> and discover exactly where your business is leaving money on the table. No fluff, no pitch—just actionable insights you can implement immediately.
              </motion.p>

              {/* Benefits List */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="space-y-3 mb-8"
              >
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="h-5 w-5 text-primary-200 flex-shrink-0" />
                    <span className="text-neutral-300">{benefit}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button
                  onClick={openBooking}
                  size="xl"
                  className="group text-lg px-8 py-4 flex-1 sm:flex-none"
                >
                  Book Your Free Audit Now
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
                
                <Button
                  variant="secondary"
                  size="xl"
                  className="text-lg px-8 py-4"
                  onClick={() => {
                    document.getElementById('case-studies')?.scrollIntoView({ 
                      behavior: 'smooth' 
                    });
                  }}
                >
                  View Success Stories
                </Button>
              </motion.div>

              {/* Urgency Text */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="text-sm text-neutral-400 mt-4"
              >
                ⚡ Only 3 spots remaining for March 2025 • Average booking takes 2 minutes
              </motion.p>
            </div>
          </motion.div>

          {/* Right Column - Guarantees & Social Proof */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Guarantees Card */}
            <div className="card bg-gradient-to-br from-neutral-800/60 to-neutral-900/80 backdrop-blur-sm p-8">
              <h3 className="text-2xl font-display font-semibold text-white mb-6 text-center">
                Our <span className="text-accent-200">Risk-Free</span> Promise
              </h3>
              
              <div className="space-y-4">
                {guarantees.map((guarantee, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="flex items-center space-x-3 p-3 rounded-lg bg-neutral-700/30 hover:bg-neutral-700/50 transition-colors"
                  >
                    <guarantee.icon className="h-5 w-5 text-accent-200 flex-shrink-0" />
                    <span className="text-neutral-200">{guarantee.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="card bg-gradient-to-br from-primary-200/10 to-accent-200/10 border border-primary-200/20 p-8"
            >
              <h4 className="text-xl font-display font-semibold text-white mb-4 text-center">
                Join 200+ Growing Businesses
              </h4>
              
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary-200">$50M+</div>
                  <div className="text-xs text-neutral-400">Revenue Generated</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent-200">97%</div>
                  <div className="text-xs text-neutral-400">Success Rate</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary-200">3.2×</div>
                  <div className="text-xs text-neutral-400">Avg. Growth</div>
                </div>
              </div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-center space-y-4"
            >
              <p className="text-sm text-neutral-400">
                Trusted by startups to Fortune 500 companies
              </p>
              
              {/* Client Logos Placeholder */}
              <div className="flex justify-center items-center space-x-6 opacity-50">
                <div className="w-16 h-8 bg-neutral-700 rounded"></div>
                <div className="w-20 h-8 bg-neutral-700 rounded"></div>
                <div className="w-18 h-8 bg-neutral-700 rounded"></div>
                <div className="w-16 h-8 bg-neutral-700 rounded"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}