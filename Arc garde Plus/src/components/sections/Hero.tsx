'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { AnimatedCounter } from '@/components/ui/AnimatedCounter';
import { useBooking } from '@/components/providers';

const stats = [
  { value: 3.2, suffix: 'x', label: 'Average Revenue Growth' },
  { value: 90, suffix: '', label: 'Days to Results' },
  { value: 97, suffix: '%', label: 'Client Success Rate' },
];

const floatingElements = [
  { x: '10%', y: '20%', delay: 0 },
  { x: '80%', y: '15%', delay: 0.5 },
  { x: '15%', y: '70%', delay: 1 },
  { x: '85%', y: '75%', delay: 1.5 },
  { x: '50%', y: '30%', delay: 2 },
];

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const { openBooking } = useBooking();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary-900">
      {/* Background Video/Animation Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-primary-900/80 to-primary-900/90" />
        
        {/* Animated Background Elements */}
        {floatingElements.map((element, index) => (
          <motion.div
            key={index}
            className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-primary-200/10 to-accent-200/10 blur-xl"
            style={{ left: element.x, top: element.y }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8,
              delay: element.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(125,247,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(125,247,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight">
            <span className="block text-white">From Invisible to</span>
            <span className="block text-gradient bg-gradient-to-r from-primary-200 to-accent-200 bg-clip-text text-transparent">
              Unstoppable
            </span>
          </h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center justify-center space-x-4 text-2xl sm:text-3xl md:text-4xl font-display font-semibold"
          >
            <AnimatedCounter 
              value={3} 
              duration={2000}
              className="text-accent-200"
            />
            <span className="text-accent-200">×</span>
            <span className="text-white">Revenue in</span>
            <AnimatedCounter 
              value={90} 
              duration={2000}
              className="text-primary-200"
            />
            <span className="text-white">Days</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg sm:text-xl md:text-2xl text-neutral-300 max-w-4xl mx-auto leading-relaxed"
          >
            <span className="text-white font-medium">(or your money back)</span> — We patch the leaks in traffic, conversion, and GTM so your business stops bleeding money and starts compounding growth.
          </motion.p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
        >
          <Button
            onClick={openBooking}
            size="xl"
            className="group text-lg px-8 py-4"
          >
            Book a 15-minute strategy audit — no fluff
            <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          
          <Button
            variant="secondary"
            size="xl"
            className="group text-lg px-8 py-4"
            onClick={() => {
              document.getElementById('case-studies')?.scrollIntoView({ 
                behavior: 'smooth' 
              });
            }}
          >
            <Play className="mr-2 h-5 w-5" />
            See case studies
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 pt-12 border-t border-neutral-800/50"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gradient mb-2">
                <AnimatedCounter 
                  value={stat.value} 
                  duration={2000}
                  decimals={stat.suffix === 'x' ? 1 : 0}
                />
                <span>{stat.suffix}</span>
              </div>
              <p className="text-neutral-400 text-sm sm:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-neutral-600 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-3 bg-primary-200 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}