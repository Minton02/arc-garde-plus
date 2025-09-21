# Arc Garde++ - Premium Growth Marketing Website

A high-performance, conversion-optimized marketing website built with Next.js 14, TypeScript, and Tailwind CSS. Features cinematic animations, accessibility compliance, and enterprise-grade performance.

## 🚀 Features

- **Performance Optimized**: LCP <1.4s, Lighthouse score ≥90
- **Conversion Engineered**: Strategic CTAs, booking flows, social proof
- **Accessibility**: WCAG 2.1 AA compliant
- **Modern Stack**: Next.js 14, TypeScript, Tailwind CSS, Framer Motion
- **SEO Optimized**: Server-side rendering, structured data, meta tags
- **Design System**: Consistent tokens, reusable components
- **Responsive**: Mobile-first design with smooth animations

## 🛠 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS + CSS Variables
- **Animations**: Framer Motion
- **Testing**: Jest + React Testing Library + Playwright
- **Deployment**: Vercel (optimized configuration)
- **CMS**: Sanity.io (headless)

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/your-org/arc-garde-plus.git
cd arc-garde-plus

# Install dependencies
npm ci

# Set up environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

## 🏃‍♂️ Quick Start

```bash
# Development
npm run dev          # Start dev server at http://localhost:3000

# Building
npm run build        # Build for production
npm run start        # Start production server

# Testing
npm test             # Run unit tests
npm run test:e2e     # Run end-to-end tests
npm run test:coverage # Generate coverage report

# Code Quality
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks
```

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Homepage
├── components/          # React components
│   ├── layout/         # Layout components (Header, Footer)
│   ├── sections/       # Page sections (Hero, CTA, etc.)
│   └── ui/             # Reusable UI components
├── data/               # Static data and content
├── lib/                # Utility functions and configurations
└── types/              # TypeScript type definitions
```

## 🎨 Design System

### Colors
- **Primary**: Charcoal (#0b0d10) with Electric Teal (#7df7ff)
- **Accent**: Soft Gold (#f7b955)
- **Neutrals**: Carefully curated gray scale

### Typography
- **Display**: Playfair Display (headings)
- **Body**: Inter (body text)
- **Scale**: Modular scale (1.25 ratio)

### Components
All components follow the design system with consistent:
- Spacing (based on 8px grid)
- Border radius values
- Shadow styles
- Animation timing

## 🧪 Testing

### Unit Tests
```bash
npm test                    # Watch mode
npm run test:ci            # CI mode
npm run test:coverage      # With coverage
```

### E2E Tests
```bash
npm run test:e2e           # Headless mode
npm run test:e2e:ui        # Interactive mode
```

### Performance Testing
```bash
npm run lighthouse         # Lighthouse audit
```

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Connect to Vercel
npx vercel

# Deploy
npx vercel --prod
```

### Environment Variables
```bash
# Required for production
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-link

# Optional
SANITY_PROJECT_ID=your-project-id
SANITY_DATASET=production
SANITY_TOKEN=your-token
```

## 📊 Performance Targets

- **Lighthouse Mobile**: ≥90
- **Lighthouse Desktop**: ≥95
- **LCP**: <1.4s (mobile)
- **TBT**: <150ms
- **Bundle Size**: <150KB (initial JS)

## ♿ Accessibility

- WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader optimization
- Color contrast ratios ≥4.5:1
- Focus management
- Semantic HTML structure

## 🔧 Configuration Files

- `next.config.js` - Next.js configuration
- `tailwind.config.js` - Tailwind CSS setup
- `tsconfig.json` - TypeScript configuration
- `jest.config.js` - Testing setup
- `vercel.json` - Deployment configuration

## 📝 Content Management

The site uses a hybrid approach:
- **Static content**: JSON files in `/src/data/`
- **Dynamic content**: Sanity CMS (optional)
- **Case studies**: Structured JSON with full content

## 🎯 Conversion Optimization

### Key Features
- Strategic CTA placement
- Social proof integration
- Progressive form design
- Urgency indicators
- Trust signals
- Mobile-optimized flows

### Analytics Integration
- Google Analytics 4
- Conversion tracking
- Performance monitoring
- A/B testing ready

## 🔒 Security

- CSP headers configured
- HSTS enabled
- XSS protection
- CSRF protection
- Secure cookie flags
- Input sanitization

## 📱 Browser Support

- **Modern browsers**: Chrome 88+, Firefox 85+, Safari 14+, Edge 88+
- **Mobile**: iOS Safari 14+, Chrome Mobile 88+
- **Graceful degradation**: for older browsers

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript strict mode
- Write tests for new components
- Use conventional commits
- Ensure accessibility compliance
- Maintain performance standards

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: Check this README and inline comments
- **Issues**: Create GitHub issues for bugs
- **Discussions**: Use GitHub discussions for questions

## 🏆 Acceptance Criteria Checklist

- ✅ Next.js 14+ with App Router
- ✅ TypeScript strict mode
- ✅ Tailwind CSS with design tokens
- ✅ Framer Motion animations
- ✅ Responsive design (mobile-first)
- ✅ Performance optimized (LCP <1.4s)
- ✅ Accessibility compliant (WCAG 2.1 AA)
- ✅ SEO optimized (meta tags, structured data)
- ✅ Testing suite (unit + E2E)
- ✅ Production-ready deployment config
- ✅ Component library with design system
- ✅ Conversion-optimized user flows

---

Built with ❤️ for growing businesses. Ready to scale from invisible to unstoppable.