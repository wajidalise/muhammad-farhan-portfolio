import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MaxWidth from '../shared/MaxWidth';
import { Link, useLocation } from 'react-router-dom';
import handleHashScroll from '@/lib/handleHashScroll';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  console.log(pathname, 'pathname');
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className='sticky top-3 z-50 '
    >
      <MaxWidth className=''>
        <nav className='backdrop-blur-xl border border-primary rounded-full bg-primary/10 px-6 h-16 flex items-center justify-between '>
          <a href='#'>
            <img src='/farhan.jpeg' alt='Muhammad Farhan' className='h-10 w-10 rounded-full object-cover' />
          </a>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center gap-8'>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={pathname === '/' ? link.href : `/${link.href}`}
                onClick={() => handleHashScroll(link.href)}
                className='nav-link text-sm'
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Button
            size='sm'
            className='bg-primary text-primary-foreground hover:bg-primary/90 hidden md:block'
          >
            <a href='#contact'>Hire Me</a>
          </Button>

          {/* Mobile Menu Button */}
          <button
            className='md:hidden p-2 text-foreground'
            onClick={() => setIsOpen(!isOpen)}
            aria-label='Toggle menu'
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </MaxWidth>

      {/* Mobile Navigation */}
      {/* <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className='md:hidden bg-background border-b border-border/50'
          >
            <MaxWidth className='px-6 py-4 flex flex-col gap-4 border border-yellow-500'>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className='text-muted-foreground hover:text-foreground transition-colors py-2'
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button className='w-full bg-primary text-primary-foreground'>
                <a
                  href='#contact'
                  onClick={() => setIsOpen(false)}
                >
                  Hire Me
                </a>
              </Button>
            </MaxWidth>
          </motion.div>
        )}
      </AnimatePresence> */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className='fixed inset-0 z-40 bg-black/20 backdrop-blur-sm'
            />

            {/* Drawer */}
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 260, damping: 25 }}
              className='fixed top-0 right-0 z-50 h-full w-[80%] max-w-sm bg-gradient-to-b from-primary/10 to-secondary/10 backdrop-blur-xl shadow-xl'
            >
              <div className='p-6 flex flex-col gap-6'>
                {/* Close Button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className='self-end'
                >
                  <X size={24} />
                </button>

                {/* Links */}
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={pathname === '/' ? link.href : `/${link.href}`}
                    onClick={() => {
                      handleHashScroll(link.href);
                      setIsOpen(false);
                    }}
                    className='text-lg font-medium'
                  >
                    {link.label}
                  </Link>
                ))}

                <Button className='mt-4'>
                  <a href='#contact'>Hire Me</a>
                </Button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
