'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useBooking } from '@/components/providers';

export function StickyBooking() {
  const [isVisible, setIsVisible] = useState(false);
  const { openBooking } = useBooking();

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero section (approximately 100vh)
      setIsVisible(window.scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ 
            type: "spring", 
            stiffness: 500, 
            damping: 30,
            duration: 0.3
          }}
          className="fixed bottom-6 right-6 z-50 md:bottom-8 md:right-8"
        >
          <Button
            onClick={openBooking}
            className="group shadow-2xl shadow-primary-200/20 bg-primary-200 hover:bg-primary-100 text-primary-900 px-6 py-3 rounded-full font-medium flex items-center space-x-2 animate-pulse-glow"
          >
            <Calendar className="h-5 w-5" />
            <span className="hidden sm:inline">Book Audit</span>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-2 h-2 bg-primary-900 rounded-full opacity-60"
            />
          </Button>

          {/* Tooltip for mobile */}
          <div className="sm:hidden absolute -top-12 right-0 bg-neutral-800 text-white text-xs px-3 py-1 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
            Book Strategy Audit
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-neutral-800"></div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}