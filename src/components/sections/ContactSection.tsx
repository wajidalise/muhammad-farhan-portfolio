import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, Calendar, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-muted/20" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading mb-4">Let's Build Something Exceptional</h2>
          <p className="section-subheading mx-auto">
            Available for senior frontend roles, consulting, and architectural projects
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glow-card p-8 h-full">
              <h3 className="text-xl font-semibold mb-6">Ready to discuss your project?</h3>
              
              <p className="text-muted-foreground mb-8">
                Whether you need to scale your application, optimize performance, or build from 
                scratch—let's discuss how I can help drive your business forward.
              </p>

              <div className="space-y-4 mb-8">
                <a
                  href="mailto:wajidalit11@gmail.com"
                  className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <span>wajidalit11@gmail.com</span>
                </a>
                <a
                  href="tel:+923443841964"
                  className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Phone size={20} className="text-primary" />
                  </div>
                  <span>+92 344 3841964</span>
                </a>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                  <Calendar size={18} />
                  Schedule a Call
                </Button>
                <Button variant="outline" className="gap-2">
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
            <div className="glow-card p-8">
              <h3 className="text-xl font-semibold mb-6">Quick Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Your Name"
                    required
                    className="bg-muted/50 border-border/50 focus:border-primary"
                  />
                  <Input
                    type="email"
                    placeholder="Your Email"
                    required
                    className="bg-muted/50 border-border/50 focus:border-primary"
                  />
                </div>
                
                <Select>
                  <SelectTrigger className="bg-muted/50 border-border/50">
                    <SelectValue placeholder="Project Type" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border">
                    <SelectItem value="architecture">Architecture Consultation</SelectItem>
                    <SelectItem value="performance">Performance Audit</SelectItem>
                    <SelectItem value="development">Full Development</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>

                <Textarea
                  placeholder="Tell me about your project..."
                  rows={4}
                  required
                  className="bg-muted/50 border-border/50 focus:border-primary resize-none"
                />

                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
