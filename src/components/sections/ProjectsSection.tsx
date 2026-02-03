import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, ArrowRight, Building, PieChart, ShoppingBag, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MaxWidth from '../shared/MaxWidth';
import { useNavigate } from 'react-router-dom';

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
];

 
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

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const navigate = useNavigate();

  return (
    <section
      id='projects'
      className='py-24'
      ref={ref}
    >
      <MaxWidth>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className='text-center mb-16'
        >
          <h2 className='section-heading mb-4'>Selected Work</h2>
          <p className='section-subheading mx-auto'>
            Enterprise applications showcasing architecture & performance
            expertise
          </p>
        </motion.div>

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

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className='text-center'
        >
          <Button
            variant='outline'
            size='lg'
            className='gap-2'
            onClick={() => navigate('/projects')}
          >
            View All 40+ Projects
            <ArrowRight size={18} />
          </Button>
        </motion.div>
      </MaxWidth>
    </section>
  );
};
