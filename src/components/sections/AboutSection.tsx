import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import MaxWidth from '../shared/MaxWidth';

const expertiseTags = [
  'Next.js Architecture',
  'React Server Components',
  'Core Web Vitals',
  'Technical SEO',
  'TypeScript',
  'State Management',
  'Performance Optimization',
  'CI/CD Pipelines',
];

const philosophyPoints = [
  { title: 'Performance First', desc: 'Every millisecond matters' },
  {
    title: 'Scalable Architecture',
    desc: 'Build for today, plan for tomorrow',
  },
  { title: 'SEO-Centric Development', desc: 'Rank well, convert better' },
  {
    title: 'Clean & Maintainable',
    desc: 'Code that lasts beyond current team',
  },
  { title: 'Business Alignment', desc: 'Technology serving business goals' },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id='about'
      className='py-24 relative'
      ref={ref}
    >
      <MaxWidth className=''>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className='max-w-4xl mx-auto'
        >
          <h2 className='section-heading text-center mb-4'>
            Architect of{' '}
            <span className='gradient-text'>Scalable Frontend Solutions</span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className='text-muted-foreground text-center mb-12 max-w-2xl mx-auto'
          >
            Building enterprise-grade web applications with focus on technical
            excellence
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='glow-card p-8 mb-10'
          >
            <p className='text-lg leading-relaxed mb-6'>
              I'm{' '}
              <span className='text-foreground font-semibold'>Wajid Ali</span>,
              a Senior Frontend Engineer with{' '}
              <span className='gradient-text font-semibold'>3 years</span> of
              experience building enterprise-grade web applications. My
              expertise lies in architecting{' '}
              <span className='text-foreground font-medium'>
                high-performance React.js/Next.js applications
              </span>{' '}
              with focus on technical excellence, SEO optimization, and
              measurable business impact.
            </p>
            <p className='text-muted-foreground leading-relaxed'>
              I don't just write code—I design{' '}
              <span className='text-foreground'>scalable systems</span> that
              serve thousands of users, optimize{' '}
              <span className='text-foreground'>Core Web Vitals</span> for
              superior user experience, and implement{' '}
              <span className='text-foreground'>technical SEO strategies</span>{' '}
              that improve organic visibility by 30-40%.
            </p>
          </motion.div>

          {/* Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className='mb-10'
          >
            <h3 className='text-xl font-semibold mb-6 text-center'>
              My Development Philosophy
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
              {philosophyPoints.map((point, index) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className='p-4 rounded-lg bg-muted/30 border border-border/50 hover:border-primary/30 transition-colors'
                >
                  <div className='font-medium text-foreground mb-1'>
                    {point.title}
                  </div>
                  <div className='text-sm text-muted-foreground'>
                    {point.desc}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Expertise Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className='flex flex-wrap justify-center gap-3'
          >
            {expertiseTags.map((tag, index) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                className='skill-tag'
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </MaxWidth>
    </section>
  );
};
