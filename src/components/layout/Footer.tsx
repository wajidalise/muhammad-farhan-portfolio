import { motion } from 'framer-motion';
import {
  Linkedin,
  Github,
  // Twitter,
  Mail,
} from 'lucide-react';
import MaxWidth from '../shared/MaxWidth';
import { Link, useLocation } from 'react-router-dom';
import handleHashScroll from '@/lib/handleHashScroll';

const quickLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  {
    icon: Linkedin,
    href: 'https://linkedin.com/in/wjid-ali-software-engineer',
    label: 'LinkedIn',
  },
  { icon: Github, href: 'https://github.com/wajidalise', label: 'GitHub' },
  // { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Mail, href: 'mailto:meerfarhan221@gmail.com', label: 'Email' },
];

export const Footer = () => {
  const { pathname } = useLocation();
  return (
    <footer className='py-12 border-t border-border/50'>
      <MaxWidth className=''>
        <div className='grid grid-cols-1 md:grid-cols-11 gap-3 mb-8'>
          {/* Brand */}
          <div className='md:col-span-3 '>
            <h3 className='text-xl font-bold gradient-text mb-2'>Muhammad Farhan</h3>
            <p className='text-sm text-muted-foreground'>
              Senior Frontend Engineer & Technical Architect
            </p>
          </div>
          <div
            className='hidden md:flex items-center justify-center md:col-span-1'
            role='separator'
            aria-orientation='vertical'
          >
            <div className='w-px h-20 bg-primary self-stretch'></div>
          </div>
          {/* Quick Links */}
          <div className='md:col-span-3 '>
            <h4 className='font-semibold mb-4'>Quick Links</h4>
            <nav className='flex flex-wrap gap-4'>
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  to={pathname === '/' ? link.href : `/${link.href}`}
                  onClick={() => handleHashScroll(link.href)}
                  className='text-sm text-muted-foreground hover:text-primary transition-colors'
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div
            className='hidden md:flex items-center justify-center md:col-span-1'
            role='separator'
            aria-orientation='vertical'
          >
            <div className='w-px h-20 bg-primary self-stretch'></div>
          </div>

          {/* Social */}
          <div className='md:col-span-3 '>
            <h4 className='font-semibold mb-4'>Connect</h4>
            <div className='flex gap-4'>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={social.label}
                  className='p-2 rounded-lg bg-muted/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors'
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className='pt-8 border-t border-border/50 flex flex-col md:flex-row justify-center items-center gap-4 text-sm text-muted-foreground'>
          <p>© {new Date().getFullYear()} Muhammad Farhan. All rights reserved.</p>
          {/* <p>Built with React & Tailwind CSS</p> */}
        </div>
      </MaxWidth>
    </footer>
  );
};
