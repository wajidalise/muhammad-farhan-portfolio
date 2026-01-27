import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Smart Life - IoT Management Platform",
    description: "Real-time IoT dashboard for enterprise device monitoring and analytics",
    tech: ["React.js", "Zustand", "React Query", "Shadcn UI", "Tailwind CSS"],
    highlights: [
      "Reduced API calls by 30% through React Query optimization",
      "40% faster load times with efficient state management",
      "7+ modules with consistent UI patterns",
    ],
    gradient: "from-primary to-secondary",
  },
  {
    title: "Device Financing System",
    description: "Financial platform processing $500K+ monthly transactions",
    tech: ["Next.js", "TypeScript", "Material-UI", "Redux Toolkit"],
    highlights: [
      "95+ Lighthouse performance scores",
      "SEO-optimized rendering for financial content",
      "Scalable architecture for enterprise growth",
    ],
    gradient: "from-secondary to-accent",
  },
  {
    title: "LinkDSM - Business Management Suite",
    description: "Multi-tenant CRM with role-based access control",
    tech: ["Next.js", "TypeScript", "Zustand", "Shadcn UI"],
    highlights: [
      "35% faster development through modular architecture",
      "Granular permissions across business units",
      "Optimized data consistency workflows",
    ],
    gradient: "from-accent to-primary",
  },
];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading mb-4">Selected Work</h2>
          <p className="section-subheading mx-auto">
            Enterprise applications showcasing architecture & performance expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.15 }}
              className="glow-card group"
            >
              {/* Gradient header */}
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded bg-muted/50 text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Highlights */}
                <ul className="space-y-1 mb-6">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Actions */}
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="gap-2 flex-1">
                    <ExternalLink size={14} />
                    Live Demo
                  </Button>
                  <Button variant="ghost" size="sm" className="gap-2">
                    <Github size={14} />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <Button variant="outline" size="lg" className="gap-2">
            View All 40+ Projects
            <ArrowRight size={18} />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
