import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, TrendingUp } from "lucide-react";

const experiences = [
  {
    title: "Senior Frontend Engineer",
    company: "Varxus",
    period: "Oct 2024 - Present",
    description: "Led frontend architecture for enterprise applications",
    achievements: [
      "95+ Lighthouse scores across all applications",
      "40% improvement in Core Web Vitals",
      "30% reduction in API calls through optimized data fetching",
      "25% faster team delivery through component-driven development",
    ],
  },
  {
    title: "Frontend Engineer",
    company: "Agile Vectors",
    period: "Feb 2023 - Jul 2024",
    description: "Engineered financial and business systems",
    achievements: [
      "$500K+ monthly transaction processing platforms",
      "35% SEO improvement through SSR implementation",
      "85% reduction in runtime errors via TypeScript",
      "99.9% uptime for mission-critical applications",
    ],
  },
];

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 bg-muted/20" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading mb-4">Professional Journey</h2>
          <p className="section-subheading mx-auto">
            Building impactful solutions across enterprises and startups
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title + exp.company}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              className="timeline-item"
            >
              <div className="glow-card p-6 ml-4">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-primary">
                      <Briefcase size={16} />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
                    {exp.period}
                  </span>
                </div>
                
                <p className="text-muted-foreground mb-4 italic">{exp.description}</p>
                
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <TrendingUp size={16} className="text-primary mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
