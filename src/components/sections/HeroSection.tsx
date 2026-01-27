import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const stats = [
  { value: 2.5, suffix: "+", label: "Years Experience" },
  { value: 40, suffix: "+", label: "Projects Delivered" },
  { value: 95, suffix: "+", label: "Avg Lighthouse Score" },
  { value: 99.9, suffix: "%", label: "Uptime Maintained" },
];

const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const stepValue = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += stepValue;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span className="gradient-text">
      {count % 1 === 0 ? Math.floor(count) : count.toFixed(1)}{suffix}
    </span>
  );
};

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="px-4 py-2 rounded-full bg-muted/50 text-sm text-muted-foreground border border-border/50">
              Senior Frontend Engineer
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight"
          >
            Transforming Ideas Into{" "}
            <span className="gradient-text">High-Performance</span>{" "}
            Web Experiences
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Specializing in <span className="text-foreground font-medium">React.js & Next.js</span> architecture, 
            <span className="text-foreground font-medium"> Core Web Vitals optimization</span>, and{" "}
            <span className="text-foreground font-medium">Technical SEO</span>. I build scalable applications 
            that drive business growth through modern frontend solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4 justify-center mb-20"
          >
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
              <a href="#projects" className="flex items-center gap-2">
                View My Work
                <ArrowRight size={18} />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-border hover:bg-muted gap-2">
              <a href="#contact" className="flex items-center gap-2">
                <Download size={18} />
                Download Resume
              </a>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="stat-card"
              >
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
