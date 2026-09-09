import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  Mail,
  Phone,
  Calendar,
  Send,
  Copy,
  ExternalLink,
  Clock,
  AlertCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import MaxWidth from '../shared/MaxWidth';
import { cn } from '@/lib/utils'; // Agar aapke pas ye utility hai

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isScheduleDialogOpen, setIsScheduleDialogOpen] = useState(false);
  const [selectedMeeting, setSelectedMeeting] = useState<string>('');

  // Proper error state management
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
  });

  // Calendly Meeting Links
  const meetingTypes = [
    {
      id: 'quick',
      title: 'Quick Consultation',
      description: '15-minute intro call to discuss your project',
      duration: '15 min',
      emoji: '⚡',
      url: 'https://calendly.com/wajid_ali/15min',
      color: 'bg-blue-500/10 border-blue-500/20',
    },
    {
      id: 'strategy',
      title: 'Strategy Session',
      description: '30-minute deep dive into requirements and planning',
      duration: '30 min',
      emoji: '🎯',
      url: 'https://calendly.com/wajid_ali/30min',
      color: 'bg-green-500/10 border-green-500/20',
    },
    {
      id: 'architecture',
      title: 'Architecture Review',
      description: '60-minute comprehensive system design discussion',
      duration: '60 min',
      emoji: '🏗️',
      url: 'https://calendly.com/wajid_ali/1h',
      color: 'bg-purple-500/10 border-purple-500/20',
    },
  ];

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // Validation functions
  const validateField = (name: keyof typeof formData, value: string) => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (value.length < 2) return 'Name must be at least 2 characters';
        return '';

      case 'email':
        if (!value.trim()) return 'Email is required';
        if (!emailRegex.test(value)) return 'Please enter a valid email';
        return '';

      case 'message':
        if (!value.trim()) return 'Message is required';
        if (value.length < 10) return 'Message must be at least 10 characters';
        return '';

      default:
        return '';
    }
  };

  const validateForm = () => {
    const newErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      message: validateField('message', formData.message),
    };

    setErrors(newErrors);
    return !newErrors.name && !newErrors.email && !newErrors.message;
  };

  const handleBlur = (field: keyof typeof formData) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const error = validateField(field, formData[field]);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all fields as touched
    setTouched({
      name: true,
      email: true,
      message: true,
    });

    // Validate form
    if (!validateForm()) {
      toast({
        title: '🐞 Error',
        description:
          'Some fields are missing or invalid. Please check and try again.',
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);

      // Reset form
      setFormData({ name: '', email: '', projectType: '', message: '' });
      setErrors({ name: '', email: '', message: '' });
      setTouched({ name: false, email: false, message: false });

      toast({
        title: 'Message sent successfully! 🎉',
        description: "I'll get back to you within 24 hours.",
      });
    }, 1000);
  };

  const handleScheduleCall = (meetingType: (typeof meetingTypes)[0]) => {
    window.open(
      meetingType.url,
      'Calendly Scheduling',
      'width=800,height=600,left=100,top=100',
    );

    setSelectedMeeting(meetingType.id);

    toast({
      title: 'Opening Calendly...',
      description: `Scheduling ${meetingType.duration} ${meetingType.title}`,
    });

    setIsScheduleDialogOpen(false);
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('meerfarhan221@gmail.com');
      toast({
        title: 'Email copied to clipboard! 📧',
        description: 'Ready to paste in your email client.',
      });
    } catch (err) {
      toast({
        title: 'Failed to copy',
        description: 'Please manually copy: meerfarhan221@gmail.com',
        variant: 'destructive',
      });
    }
  };

  const handleCopyPhone = async () => {
    try {
      await navigator.clipboard.writeText('+923443841964');
      toast({
        title: 'Phone number copied! 📞',
        description: 'Ready to paste or call.',
      });
    } catch (err) {
      toast({
        title: 'Failed to copy',
        description: 'Please manually copy: +92 344 3841964',
        variant: 'destructive',
      });
    }
  };

  const handleFormChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Clear error when user starts typing
    if (
      touched[field as keyof typeof touched] &&
      errors[field as keyof typeof errors]
    ) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <section
      id='contact'
      className='py-24 bg-gradient-to-b from-background to-muted/20'
      ref={ref}
    >
      <MaxWidth>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className='text-center mb-16'
        >
          <h2 className='section-heading mb-4'>
            Let's Build Something Exceptional
          </h2>
          <p className='section-subheading mx-auto max-w-2xl'>
            Available for senior frontend roles, consulting, and architectural
            projects
          </p>
        </motion.div>

        <div className='max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12'>
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className='glow-card p-8 h-full'>
              <h3 className='text-xl font-semibold mb-6'>
                Ready to discuss your project?
              </h3>

              <p className='text-muted-foreground mb-6'>
                Whether you need to scale your application, optimize
                performance, or build from scratch—let's discuss how I can help
                drive your business forward.
              </p>

              {/* Contact Details */}
              <div className='space-y-4 mb-8'>
                {/* Email with Copy Button */}
                <div className='flex items-center justify-between px-3 py-2.5 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors group'>
                  <div className='flex items-center gap-4'>
                    <div className='p-2 rounded-lg bg-primary/10'>
                      <Mail
                        size={18}
                        className='text-primary'
                      />
                    </div>
                    <div>
                      <p className='font-medium'>meerfarhan221@gmail.com</p>
                    </div>
                  </div>
                  <Button
                    size='sm'
                    variant='ghost'
                    onClick={handleCopyEmail}
                    className='opacity-70 hover:opacity-100 hover:bg-primary/10'
                  >
                    <Copy size={16} />
                  </Button>
                </div>

                {/* Phone with Copy Button */}
                <div className='flex items-center justify-between px-3 py-2.5 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors group'>
                  <div className='flex items-center gap-4'>
                    <div className='p-2 rounded-lg bg-primary/10'>
                      <Phone
                        size={18}
                        className='text-primary'
                      />
                    </div>
                    <div>
                      <p className='font-medium'>+923441834429</p>
                    </div>
                  </div>
                  <div className='flex gap-2'>
                    <Button
                      size='sm'
                      variant='ghost'
                      onClick={handleCopyPhone}
                      className='opacity-70 hover:opacity-100 hover:bg-primary/10'
                    >
                      <Copy size={16} />
                    </Button>
                    <a
                      href='tel:+923443841964'
                      className='opacity-70 hover:opacity-100 transition-opacity'
                    >
                      <Button
                        size='sm'
                        variant='ghost' 
                      >
                        Call
                      </Button>
                    </a>
                  </div>
                </div>
              </div>

              {/* Schedule Call Button with Dialog */}
              <div className='flex flex-wrap gap-4'>
                <Dialog
                  open={isScheduleDialogOpen}
                  onOpenChange={setIsScheduleDialogOpen}
                >
                  <DialogTrigger asChild>
                    <Button className='bg-primary text-primary-foreground hover:bg-primary/90 gap-2 flex-1'>
                      <Calendar size={18} />
                      Schedule a Call
                    </Button>
                  </DialogTrigger>
                  <DialogContent className='sm:max-w-md'>
                    <DialogHeader>
                      <DialogTitle className='text-xl'>
                        Schedule a Meeting
                      </DialogTitle>
                      <DialogDescription>
                        Choose a meeting type that fits your needs. You'll be
                        redirected to Calendly.
                      </DialogDescription>
                    </DialogHeader>

                    <div className='space-y-3 py-4'>
                      {meetingTypes.map((meeting) => (
                        <div
                          key={meeting.id}
                          className={`p-4 rounded-lg border cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98] ${meeting.color}`}
                          onClick={() => handleScheduleCall(meeting)}
                        >
                          <div className='flex items-start justify-between'>
                            <div className='flex-1'>
                              <div className='flex items-center gap-2 mb-1'>
                                <span className='text-xl'>{meeting.emoji}</span>
                                <h4 className='font-semibold'>
                                  {meeting.title}
                                </h4>
                              </div>
                              <p className='text-sm text-muted-foreground mb-2'>
                                {meeting.description}
                              </p>
                              <div className='flex items-center gap-2 text-xs'>
                                <Clock size={12} />
                                <span className='font-medium'>
                                  {meeting.duration}
                                </span>
                              </div>
                            </div>
                            <ExternalLink
                              size={16}
                              className='text-muted-foreground mt-1'
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className='text-center text-sm text-muted-foreground'>
                      <p>Powered by Calendly • Timezone: PKT (UTC+5)</p>
                    </div>
                  </DialogContent>
                </Dialog>

                <Button
                  variant='outline'
                  className='gap-2 flex-1'
                  onClick={() => window.open('/resume.pdf', '_blank')}
                >
                  Download Resume
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className='glow-card p-8'>
              <div className='flex items-center justify-between mb-6'>
                <h3 className='text-xl font-semibold'>Quick Message</h3>
                <span className='text-xs text-muted-foreground bg-muted px-2 py-1 rounded'>
                  Response time: 24 hours
                </span>
              </div>

              <form
                onSubmit={handleSubmit}
                className='space-y-4'
                noValidate
              >
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                  <div className='space-y-1'>
                    <Input
                      placeholder='Your Name *'
                      required
                      value={formData.name}
                      onChange={(e) => handleFormChange('name', e.target.value)}
                      onBlur={() => handleBlur('name')}
                      className={cn(
                        'bg-muted/50 border-border/50 focus:border-primary',
                        touched.name &&
                          errors.name &&
                          'border-destructive focus:border-destructive',
                      )}
                    />
                    {touched.name && errors.name && (
                      <div className='flex items-center gap-1 text-xs text-destructive'>
                        <AlertCircle size={12} />
                        <span>{errors.name}</span>
                      </div>
                    )}
                  </div>

                  <div className='space-y-1'>
                    <Input
                      type='email'
                      placeholder='Your Email *'
                      required
                      value={formData.email}
                      onChange={(e) =>
                        handleFormChange('email', e.target.value)
                      }
                      onBlur={() => handleBlur('email')}
                      className={cn(
                        'bg-muted/50 border-border/50 focus:border-primary',
                        touched.email &&
                          errors.email &&
                          'border-destructive focus:border-destructive',
                      )}
                    />
                    {touched.email && errors.email && (
                      <div className='flex items-center gap-1 text-xs text-destructive'>
                        <AlertCircle size={12} />
                        <span>{errors.email}</span>
                      </div>
                    )}
                  </div>
                </div>

                <Select
                  value={formData.projectType}
                  onValueChange={(value) =>
                    handleFormChange('projectType', value)
                  }
                >
                  <SelectTrigger className='bg-muted/50 border-border/50'>
                    <SelectValue placeholder='Project Type (Optional)' />
                  </SelectTrigger>
                  <SelectContent className='bg-card border-border'>
                    <SelectItem value='architecture'>
                      Architecture Consultation
                    </SelectItem>
                    <SelectItem value='performance'>
                      Performance Audit
                    </SelectItem>
                    <SelectItem value='development'>
                      Full Development
                    </SelectItem>
                    <SelectItem value='contract'>Contract Work</SelectItem>
                    <SelectItem value='other'>Other</SelectItem>
                  </SelectContent>
                </Select>

                <div className='space-y-1'>
                  <Textarea
                    placeholder='Tell me about your project, timeline, and budget... *'
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) =>
                      handleFormChange('message', e.target.value)
                    }
                    onBlur={() => handleBlur('message')}
                    className={cn(
                      'bg-muted/50 border-border/50 focus:border-primary resize-none',
                      touched.message &&
                        errors.message &&
                        'border-destructive focus:border-destructive',
                    )}
                  />
                  {touched.message && errors.message && (
                    <div className='flex items-center gap-1 text-xs text-destructive'>
                      <AlertCircle size={12} />
                      <span>{errors.message}</span>
                    </div>
                  )}
                </div>

                <Button
                  type='submit'
                  className='w-full bg-primary text-primary-foreground hover:bg-primary/90 gap-2'
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className='flex items-center gap-2'>
                      <div className='h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent' />
                      Sending...
                    </span>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </Button>
              </form>

              <p className='text-xs text-muted-foreground mt-4 text-center'>
                Your information is secure and will only be used to contact you.
              </p>
            </div>
          </motion.div>
        </div>
      </MaxWidth>
    </section>
  );
};
