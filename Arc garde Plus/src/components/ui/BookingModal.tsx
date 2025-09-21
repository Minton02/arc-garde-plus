'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, CheckCircle } from 'lucide-react';
import { useBooking } from '@/components/providers';
import { Button } from '@/components/ui/Button';

const benefits = [
  'Comprehensive revenue audit (usually $5K value)',
  'Custom growth roadmap with clear next steps',
  'Competitive analysis and market positioning insights',
  'Direct access to our senior growth strategists',
];

export function BookingModal() {
  const { isBookingOpen, closeBooking } = useBooking();

  useEffect(() => {
    if (isBookingOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isBookingOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isBookingOpen) {
        closeBooking();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isBookingOpen, closeBooking]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeBooking();
    }
  };

  return (
    <AnimatePresence>
      {isBookingOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={handleBackdropClick}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.3 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden bg-neutral-900 border border-neutral-700 rounded-2xl shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={closeBooking}
              className="absolute top-4 right-4 z-10 p-2 text-neutral-400 hover:text-white transition-colors duration-200 rounded-lg hover:bg-neutral-800/50"
              aria-label="Close modal"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2 h-full min-h-[600px]">
              {/* Left Side - Information */}
              <div className="p-8 lg:p-12 bg-gradient-to-br from-primary-900/50 to-neutral-900 flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  {/* Header */}
                  <div className="mb-8">
                    <div className="flex items-center space-x-2 text-primary-200 mb-4">
                      <Calendar className="h-5 w-5" />
                      <span className="text-sm font-medium uppercase tracking-wider">Free Strategy Audit</span>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-4">
                      Book Your <span className="text-gradient">Growth Audit</span>
                    </h2>
                    <p className="text-lg text-neutral-300 leading-relaxed">
                      Get a comprehensive analysis of your revenue leaks and a custom roadmap to 3× your growth in 90 days.
                    </p>
                  </div>

                  {/* Benefits */}
                  <div className="space-y-4 mb-8">
                    <h3 className="text-xl font-semibold text-white mb-4">What you'll get:</h3>
                    {benefits.map((benefit, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                        className="flex items-start space-x-3"
                      >
                        <CheckCircle className="h-5 w-5 text-primary-200 flex-shrink-0 mt-0.5" />
                        <span className="text-neutral-300">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Duration & Format */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex items-center space-x-6 text-sm text-neutral-400"
                  >
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>15 minutes</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>Video call</span>
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              {/* Right Side - Calendly Embed */}
              <div className="bg-white relative overflow-hidden">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="h-full"
                >
                  {/* Calendly Embed Placeholder */}
                  <div className="h-full w-full flex items-center justify-center bg-gray-50">
                    <div className="text-center p-8">
                      <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Calendly Integration
                      </h3>
                      <p className="text-gray-600 mb-6">
                        In production, this would be a Calendly widget embed for booking appointments.
                      </p>
                      <Button
                        onClick={() => {
                          // In production, this would open Calendly
                          window.open('https://calendly.com/arcgarde/strategy-audit', '_blank');
                          closeBooking();
                        }}
                        className="bg-primary-900 hover:bg-primary-800 text-white"
                      >
                        Open Calendly
                      </Button>
                      <p className="text-xs text-gray-500 mt-4">
                        Replace this with actual Calendly embed code:
                        <br />
                        <code className="bg-gray-100 px-2 py-1 rounded text-xs">
                          &lt;iframe src="https://calendly.com/..."&gt;
                        </code>
                      </p>
                    </div>
                  </div>

                  {/* Actual Calendly Embed Code (commented out for demo) */}
                  {/*
                  <iframe
                    src="https://calendly.com/arcgarde/strategy-audit?embed_domain=arcgarde.com&embed_type=Inline"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    title="Schedule a Strategy Audit"
                  ></iframe>
                  */}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}