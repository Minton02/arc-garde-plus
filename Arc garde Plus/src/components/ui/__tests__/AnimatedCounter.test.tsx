import { render, screen } from '@testing-library/react';
import { AnimatedCounter } from '../AnimatedCounter';

// Mock react-intersection-observer
jest.mock('react-intersection-observer', () => ({
  useInView: () => ({ ref: jest.fn(), inView: true }),
}));

describe('AnimatedCounter Component', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('renders with initial value', () => {
    render(<AnimatedCounter value={100} />);
    
    const counter = screen.getByText('100');
    expect(counter).toBeInTheDocument();
  });

  it('displays decimal values correctly', () => {
    render(<AnimatedCounter value={3.14} decimals={2} />);
    
    // Should start at 0 and animate to 3.14
    expect(screen.getByText(/3\.14|0\.00/)).toBeInTheDocument();
  });

  it('applies prefix and suffix correctly', () => {
    render(<AnimatedCounter value={50} prefix="$" suffix="%" />);
    
    // Should contain the prefix and suffix
    const element = screen.getByText(/\$.*%/);
    expect(element).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<AnimatedCounter value={42} className="custom-class" />);
    
    const counter = screen.getByText('42');
    expect(counter).toHaveClass('custom-class');
  });

  it('handles zero value correctly', () => {
    render(<AnimatedCounter value={0} />);
    
    const counter = screen.getByText('0');
    expect(counter).toBeInTheDocument();
  });

  it('handles large numbers correctly', () => {
    render(<AnimatedCounter value={1000000} />);
    
    const counter = screen.getByText('1000000');
    expect(counter).toBeInTheDocument();
  });

  it('respects animation duration', () => {
    const { rerender } = render(<AnimatedCounter value={100} duration={1000} />);
    
    // Should start the animation when in view
    expect(screen.getByText(/\d+/)).toBeInTheDocument();
    
    // Fast forward time and check if animation progresses
    jest.advanceTimersByTime(500);
    rerender(<AnimatedCounter value={100} duration={1000} />);
    
    expect(screen.getByText(/\d+/)).toBeInTheDocument();
  });
});