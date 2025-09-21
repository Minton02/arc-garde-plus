'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'CEO',
    company: 'TechFlow Solutions',
    image: '/testimonial-1.jpg',
    rating: 5,
    quote: "Arc Garde++ completely transformed our business. In just 6 months, we went from struggling to reach $500K ARR to confidently scaling toward $2M. Their systematic approach to identifying and fixing revenue leaks was exactly what we needed.",
    metrics: {
      growth: '400%',
      timeframe: '6 months',
      revenue: '$2M ARR'
    }
  },
  {
    id: 2,
    name: 'Marcus Rodriguez',
    role: 'Founder',
    company: 'Urban Essentials',
    image: '/testimonial-2.jpg',
    rating: 5,
    quote: "I was skeptical about another growth consultant, but Arc Garde++ delivered results that speak for themselves. Our ROAS improved by 450% and we're now consistently profitable on every channel. Best investment we've made.",
    metrics: {
      growth: '1200%',
      timeframe: '8 months',
      revenue: '$12M Revenue'
    }
  },
  {
    id: 3,
    name: 'Jennifer Walsh',
    role: 'Managing Partner',
    company: 'Strategic Advisors Inc.',
    image: '/testimonial-3.jpg',
    rating: 5,
    quote: "They didn't just help us grow—they repositioned us as the premium choice in our market. Our average deal size increased by 800% and clients now seek us out instead of us chasing them. Game-changing partnership.",
    metrics: {
      growth: '800%',
      timeframe: '4 months',
      revenue: 'Deal Size'
    }
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'VP of Marketing',
    company: 'InnovateLabs',
    image: '/testimonial-4.jpg',
    rating: 5,
    quote: "The depth of their analysis was incredible. They found conversion opportunities our internal team missed for months. Implementation was seamless, and results came faster than promised. Couldn't be happier.",
    metrics: {
      growth: '340%',
      timeframe: '3 months',
      revenue: 'Conversion Rate'
    }
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Auto-rotate testimonials
  useEffect(() => {
    if (!inView) return;
    
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [inView]);

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <section ref={ref} className="section-padding bg-neutral-900/80">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-lg md:text-xl text-neutral-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what business leaders say about working with Arc Garde++.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative h-[500px] md:h-[400px] overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute inset-0"
              >
                <div className="card bg-gradient-to-br from-neutral-800/60 to-neutral-900/80 backdrop-blur-sm p-8 md:p-12 h-full flex flex-col justify-center">
                  {/* Quote Icon */}
                  <div className="flex justify-center mb-6">
                    <Quote className="h-12 w-12 text-primary-200/30" />
                  </div>

                  {/* Rating */}
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-accent-200 fill-current" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-lg md:text-xl text-neutral-200 text-center leading-relaxed mb-8 font-medium">
                    "{testimonials[currentIndex].quote}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
                    {/* Avatar */}
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-200 to-accent-200 flex items-center justify-center">
                      <span className="text-primary-900 font-bold text-lg">
                        {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>

                    {/* Details */}
                    <div className="text-center md:text-left">
                      <div className="text-white font-semibold text-lg">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-neutral-400">
                        {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                      </div>
                    </div>

                    {/* Metrics */}
                    <div className="text-center md:text-right">
                      <div className="text-2xl font-bold text-gradient">
                        {testimonials[currentIndex].metrics.growth}
                      </div>
                      <div className="text-neutral-400 text-sm">
                        {testimonials[currentIndex].metrics.revenue} in {testimonials[currentIndex].metrics.timeframe}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-neutral-800/80 hover:bg-neutral-700/80 text-white transition-colors duration-200"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-neutral-800/80 hover:bg-neutral-700/80 text-white transition-colors duration-200"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? 'bg-primary-200 scale-125'
                    : 'bg-neutral-600 hover:bg-neutral-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}