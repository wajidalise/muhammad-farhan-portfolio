import { motion, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import {
  ExternalLink,
  Github,
  ArrowRight,
  Building,
  Users,
  PieChart,
  Lock,
  FileText,
  BarChart,
  Globe,
  ShoppingBag,
  Check,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import MaxWidth from '@/components/shared/MaxWidth';

// Project type definition for better TypeScript support
interface Project {
  id: string;
  title: string;
  description: string;
  role: string;
  image: string;
  tech: string[];
  highlights: string[];
  liveUrl: string;
  githubUrl?: string;
  modules: string[];
  category: 'enterprise' | 'ecommerce' | 'saas' | 'portfolio' | 'static';
  status: 'live' | 'development' | 'completed';
  metrics?: {
    impact?: string;
    users?: string;
    performance?: string;
  };
  gradient: string;
}

const projects: Project[] = [
  {
    id: 'smart-life',
    title: 'Smart Life - IoT Management Platform',
    description:
      'Enterprise-grade IoT dashboard for real-time device monitoring, analytics, and management with AI-powered insights',
    role: 'Lead Frontend Developer & Technical Architect',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    tech: [
      'React.js',
      'TypeScript',
      'Zustand',
      'React Query',
      'Shadcn UI',
      'Tailwind CSS',
      'Recharts',
      'Socket.io',
    ],
    highlights: [
      'Reduced API calls by 30% through React Query optimization',
      '40% faster initial load times with code splitting',
      '7+ modules with consistent design system',
      'Real-time data updates with WebSocket integration',
      'Accessibility compliance (WCAG 2.1)',
    ],
    liveUrl: '',
    modules: [
      'Auth',
      'Controls',
      'Analytics',
      'Location Tracking',
      'Account Management',
      'Message Centre',
      'Apps Appearance',
    ],
    category: 'enterprise',
    status: 'live',
    metrics: {
      impact: 'Monitors 10K+ IoT devices',
      performance: '95+ Lighthouse scores',
    },
    gradient: 'from-blue-500/20 to-purple-500/20',
  },
  {
    id: 'device-financing',
    title: 'Device Financing System',
    description:
      'Full-stack financial platform processing $500K+ monthly transactions with automated approval workflows',
    role: 'Senior Frontend Developer',
    image:
      'https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=800&h=600&fit=crop',
    tech: [
      'Next.js',
      'TypeScript',
      'Material-UI',
      'Redux Toolkit',
      'Formik',
      'Yup',
      'Chart.js',
    ],
    highlights: [
      '95+ Lighthouse performance scores across all metrics',
      'SEO-optimized rendering for financial content',
      'Secure transaction processing with encryption',
      'Automated document verification system',
      'Multi-currency support with real-time rates',
    ],
    liveUrl: '',
    modules: [
      'User Management',
      'Customer Portal',
      'Payment Processing',
      'Device Locking',
      'Installment Tracking',
      'Reports & Analytics',
    ],
    category: 'enterprise',
    status: 'live',
    metrics: {
      impact: '$500K+ monthly transactions',
      users: '1K+ active business users',
    },
    gradient: 'from-green-500/20 to-teal-500/20',
  },
  {
    id: 'linkdsm',
    title: 'LinkDSM - Business Management Suite',
    description:
      'Multi-tenant CRM platform with role-based access control, workflow automation, and business intelligence',
    role: 'Frontend Lead & System Architect',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
    tech: [
      'Next.js',
      'TypeScript',
      'Zustand',
      'Shadcn UI',
      'Tailwind CSS',
      'React Table',
      'React Hook Form',
    ],
    highlights: [
      '35% faster development through component library',
      'Granular role-based permissions system',
      'Optimized data consistency with optimistic updates',
      'Advanced filtering and search capabilities',
      'Real-time notifications and alerts',
    ],
    liveUrl: '',
    modules: [
      'Authentication',
      'Business Management',
      'Customer CRM',
      'Account Management',
      'Deal Pipeline',
      'Reporting',
    ],
    category: 'saas',
    status: 'live',
    metrics: {
      users: '500+ business accounts',
      performance: '98% uptime SLA',
    },
    gradient: 'from-purple-500/20 to-pink-500/20',
  },
  {
    id: 'ems',
    title: 'Employee Management System',
    description:
      'Comprehensive HR platform for employee lifecycle management, document tracking, and performance analytics',
    role: 'Full-stack Developer',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
    tech: [
      'Next.js',
      'TypeScript',
      'Shadcn UI',
      'Tailwind CSS',
      'Prisma',
      'PostgreSQL',
    ],
    highlights: [
      'Automated document expiration alerts',
      'Performance review workflow automation',
      'Biometric attendance integration',
      'Salary processing and payroll management',
      'Compliance reporting dashboard',
    ],
    liveUrl: '',
    modules: [
      'Authentication',
      'Employee Directory',
      'Documents Management',
      'Tasks & Projects',
      'Performance Reviews',
      'Reports',
    ],
    category: 'enterprise',
    status: 'live',
    gradient: 'from-orange-500/20 to-red-500/20',
  },
  // Static Websites
  {
    id: 'agile-vectors',
    title: 'Agile Vectors',
    description:
      'Corporate website for software development agency with service showcase and client portfolio',
    role: 'Frontend Developer & Designer',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    tech: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'React Intersection Observer',
    ],
    highlights: [
      'Optimized for 95+ PageSpeed Insights score',
      'SEO-friendly structure with semantic HTML',
      'Smooth animations and micro-interactions',
      'Mobile-first responsive design',
      'Fast content delivery with SSG',
    ],
    liveUrl: 'https://www.agilevectors.com/',
    category: 'static',
    status: 'live',
    modules: ['Homepage', 'Services', 'Portfolio', 'Team', 'Contact'],
    gradient: 'from-cyan-500/20 to-blue-500/20',
  },
  {
    id: 'sanabil',
    title: 'Sanabil',
    description:
      'Modern fintech platform interface for digital banking and financial services',
    role: 'Frontend Developer',
    image:
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
    tech: ['React.js', 'Tailwind CSS', 'Framer Motion', 'Chart.js'],
    highlights: [
      'Interactive financial dashboard',
      'Real-time transaction visualization',
      'Secure authentication flows',
      'Cross-browser compatibility',
      'Accessible interface design',
    ],
    liveUrl: 'https://sanabil.so/',
    category: 'static',
    status: 'live',
    modules: ['Dashboard', 'Transactions', 'Accounts', 'Reports', 'Settings'],
    gradient: 'from-emerald-500/20 to-green-500/20',
  },
  {
    id: 'onefam',
    title: 'OneFam',
    description:
      'Community platform for family management and social connection',
    role: 'Frontend Developer',
    image:
      'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&h=600&fit=crop',
    tech: ['Next.js', 'Tailwind CSS', 'React Hook Form', 'React Query'],
    highlights: [
      'Family tree visualization',
      'Event planning and calendar',
      'Photo sharing gallery',
      'Real-time chat functionality',
      'Privacy-focused design',
    ],
    liveUrl: 'https://onefam.vercel.app/',
    category: 'static',
    status: 'live',
    modules: ['Family Network', 'Events', 'Gallery', 'Chat', 'Settings'],
    gradient: 'from-amber-500/20 to-yellow-500/20',
  },
  {
    id: 'brain',
    title: 'Brain',
    description:
      'Educational platform for cognitive training and brain exercises',
    role: 'Frontend Developer',
    image:
      'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React Spring'],
    highlights: [
      'Interactive brain training exercises',
      'Progress tracking dashboard',
      'Gamified learning experience',
      'Performance analytics',
      'Responsive touch interactions',
    ],
    liveUrl: 'https://brain-bice-seven.vercel.app/',
    category: 'static',
    status: 'live',
    modules: ['Exercises', 'Progress', 'Analytics', 'Profile'],
    gradient: 'from-violet-500/20 to-purple-500/20',
  },
  {
    id: 'fly-stays',
    title: 'OnTheFlyStay',
    description:
      'Booking platform for last-minute hotel reservations and travel deals',
    role: 'Frontend Developer',
    image:
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
    tech: ['Next.js', 'Tailwind CSS', 'React Dates', 'Mapbox'],
    highlights: [
      'Real-time availability checking',
      'Interactive map integration',
      'Seamless booking flow',
      'Mobile-first design',
      'Fast search and filtering',
    ],
    liveUrl: 'https://fly-stays.vercel.app/',
    category: 'static',
    status: 'live',
    modules: ['Search', 'Booking', 'Map', 'Profile', 'Reviews'],
    gradient: 'from-rose-500/20 to-pink-500/20',
  },
  {
    id: 'ubibby',
    title: 'UBIBBY',
    description:
      'E-commerce platform for unique products with advanced filtering and cart management',
    role: 'Frontend Developer',
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'React Query', 'Stripe'],
    highlights: [
      'Advanced product filtering system',
      'Secure payment processing',
      'Real-time inventory updates',
      'User wishlist and favorites',
      'Order tracking dashboard',
    ],
    liveUrl: 'https://ubibby.vercel.app/',
    category: 'ecommerce',
    status: 'live',
    modules: ['Products', 'Cart', 'Checkout', 'Orders', 'Account'],
    gradient: 'from-indigo-500/20 to-blue-500/20',
  },
];

// Categorized projects for filtering
// const projectCategories = [
//   { id: 'all', label: 'All Projects', count: projects.length },
//   { id: 'enterprise', label: 'Enterprise Systems', count: projects.filter(p => p.category === 'enterprise').length },
//   { id: 'static', label: 'Static Websites', count: projects.filter(p => p.category === 'static').length },
//   { id: 'saas', label: 'SaaS Platforms', count: projects.filter(p => p.category === 'saas').length },
//   { id: 'ecommerce', label: 'E-commerce', count: projects.filter(p => p.category === 'ecommerce').length },
// ];

// Get icon based on project category
const getCategoryIcon = (category: Project['category']) => {
  switch (category) {
    case 'enterprise':
      return <Building size={16} />;
    case 'saas':
      return <PieChart size={16} />;
    case 'ecommerce':
      return <ShoppingBag size={16} />;
    case 'portfolio':
      return <Globe size={16} />;
    default:
      return <Globe size={16} />;
  }
};

// Get status color
const getStatusColor = (status: Project['status']) => {
  switch (status) {
    case 'live':
      return 'bg-green-500/20 text-green-600 border-green-500/30';
    case 'development':
      return 'bg-blue-500/20 text-blue-600 border-blue-500/30';
    case 'completed':
      return 'bg-gray-500/20 text-gray-600 border-gray-500/30';
  }
};

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <section
      className='py-24'
      ref={ref}
    >
      <MaxWidth>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className='text-center mb-12'
        >
          <h2 className='section-heading mb-4'>Selected Work</h2>
          <p className='section-subheading mx-auto max-w-3xl'>
            Enterprise applications showcasing architecture & performance
            expertise.
            {/* <span className='block text-primary/80 mt-2 text-lg font-medium'>
              {projects.length}+ production applications delivered with measurable impact
            </span> */}
          </p>
        </motion.div>

        {/* Category Filter */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='flex flex-wrap justify-center gap-3 mb-12'
        >
          {projectCategories.map((category) => (
            <button
              key={category.id}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                category.id === 'all'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              {category.label}
              <span className='ml-2 text-xs opacity-80'>({category.count})</span>
            </button>
          ))}
        </motion.div> */}

        {/* Projects Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className='group relative'
            >
              <div
                className={`glow-card h-full flex flex-col ${project.gradient} border border-border/50`}
              >
                {/* Project Header with Status */}
                <div className='relative h-48 overflow-hidden rounded-t-lg'>
                  <img
                    src={project.image}
                    alt={project.title}
                    className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-105'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent' />

                  {/* Status Badge */}
                  <div className='absolute top-4 left-4'>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}
                    >
                      {project.status === 'live'
                        ? '🚀 Live'
                        : project.status === 'development'
                          ? '🔧 In Development'
                          : '✅ Completed'}
                    </span>
                  </div>

                  {/* Category Badge */}
                  <div className='absolute top-4 right-4 flex items-center gap-2 px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm text-sm'>
                    {getCategoryIcon(project.category)}
                    <span className='capitalize'>{project.category}</span>
                  </div>

                  {/* Overlay Links */}
                  <div className='absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='p-2 rounded-lg bg-background/80 backdrop-blur-sm text-foreground hover:text-primary transition-colors'
                        title='Live Demo'
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='p-2 rounded-lg bg-background/80 backdrop-blur-sm text-foreground hover:text-primary transition-colors'
                        title='View Code'
                      >
                        <Github size={18} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className='p-6 flex-1 flex flex-col'>
                  <div className='mb-3'>
                    <span className='text-xs font-medium text-primary/80 bg-primary/10 px-2 py-1 rounded'>
                      {project.role}
                    </span>
                  </div>

                  <h3 className='text-xl font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2'>
                    {project.title}
                  </h3>

                  <p className='text-muted-foreground text-sm mb-4 flex-1'>
                    {project.description}
                  </p>

                  {/* Metrics */}
                  {project.metrics && (
                    <div className='grid grid-cols-2 gap-2 mb-4'>
                      {project.metrics.impact && (
                        <div className='text-xs bg-muted/50 p-2 rounded'>
                          <div className='font-medium'>Impact</div>
                          <div className='text-primary'>
                            {project.metrics.impact}
                          </div>
                        </div>
                      )}

                      {project.metrics.users && (
                        <div className='text-xs bg-muted/50 p-2 rounded'>
                          <div className='font-medium'>Users</div>
                          <div className='text-primary'>
                            {project.metrics.users}
                          </div>
                        </div>
                      )}
                      {project.metrics.performance && (
                        <div className='text-xs bg-muted/50 p-2 rounded'>
                          <div className='font-medium'>Performance</div>
                          <div className='text-primary'>
                            {project.metrics.performance}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Tech Stack */}
                  <div className='flex flex-wrap gap-2 mb-4'>
                    {project.tech.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className='px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20'
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className='px-2 py-1 text-xs text-muted-foreground'>
                        +{project.tech.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Highlights */}
                  <div className='space-y-2'>
                    <h4 className='text-sm font-semibold text-foreground/80'>
                      Key Achievements
                    </h4>
                    <ul className='space-y-1'>
                      {project.highlights.slice(0, 3).map((highlight, idx) => (
                        <li
                          key={idx}
                          className='text-xs text-muted-foreground flex items-start gap-1.5'
                        >
                          <span className='text-primary'>✓</span>
                          {/* <Check className='text-primary mt-0.5 w-3.5 h-3.5' /> */}
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Modules */}
                  <div className='mt-4 pt-4 border-t border-border/50'>
                    <h4 className='text-sm font-semibold text-foreground/80 mb-2'>
                      Modules
                    </h4>
                    <div className='flex flex-wrap gap-1.5'>
                      {project.modules.map((module, idx) => (
                        <span
                          key={idx}
                          className='px-2 py-0.5 text-xs rounded-full bg-muted/50 text-muted-foreground'
                        >
                          {module}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects Mention */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className='glow-card text-center bg-muted/30 rounded-2xl p-8'
        >
          <h3 className='text-2xl font-bold mb-3'>Additional Portfolio</h3>
          <p className='text-muted-foreground mb-6 max-w-2xl mx-auto'>
            Worked on 20+ additional projects including Deiludrum, Dunkit,
            Mindnet, Softotech, Bluel, LocalCoin, Islo, TechDev, BestoBakers,
            AutoBiz, FlexiShop and more—each solving unique business challenges
            with tailored technical solutions.
          </p>
          <div className='flex flex-wrap justify-center gap-3 mb-8'>
            {[
              'Deiludrum',
              'Dunkit',
              'Mindnet',
              'Softotech',
              'Bluel',
              'LocalCoin',
              'Islo',
              'TechDev',
              'BestoBakers',
              'AutoBiz',
              'FlexiShop',
            ].map((project) => (
              <span
                key={project}
                className='px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20 transition-colors'
              >
                {project}
              </span>
            ))}
          </div>
          {/* <Button
            variant='outline'
            size='lg'
            className='gap-2'
          >
            View Detailed Case Studies
            <ArrowRight size={18} />
          </Button> */}
        </motion.div>
      </MaxWidth>
    </section>
  );
};
