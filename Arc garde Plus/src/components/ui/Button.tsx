import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 will-change-transform',
  {
    variants: {
      variant: {
        primary: 'bg-primary-200 text-primary-900 hover:bg-primary-100 focus-visible:ring-primary-200 shadow-glow hover:shadow-lg hover:-translate-y-0.5',
        secondary: 'bg-transparent border border-primary-200 text-primary-200 hover:bg-primary-200 hover:text-primary-900 focus-visible:ring-primary-200',
        accent: 'bg-accent-200 text-primary-900 hover:bg-accent-100 focus-visible:ring-accent-200 shadow-glow-gold hover:shadow-lg hover:-translate-y-0.5',
        ghost: 'hover:bg-neutral-800/50 hover:text-white text-neutral-300',
        outline: 'border border-neutral-700 bg-transparent hover:bg-neutral-800/50 text-white hover:text-white',
      },
      size: {
        sm: 'h-9 px-4 py-2 text-sm',
        md: 'h-11 px-6 py-3',
        lg: 'h-13 px-8 py-4 text-base',
        xl: 'h-16 px-10 py-5 text-lg',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, loading, children, disabled, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        disabled={disabled || loading}
        whileHover={!disabled && !loading ? { scale: 1.02 } : {}}
        whileTap={!disabled && !loading ? { scale: 0.98 } : {}}
        {...props}
      >
        {loading && (
          <svg
            className="mr-2 h-4 w-4 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        )}
        {children}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };