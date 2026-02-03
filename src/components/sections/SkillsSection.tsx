import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Code2, 
  Database, 
  Palette, 
  Gauge, 
  GitBranch,
  Layers
} from "lucide-react";
import MaxWidth from "../shared/MaxWidth";

const skillCategories = [
  {
    title: "Core Architecture",
    icon: Layers,
    skills: [
      "Next.js (App Router, React Server Components, SSR/SSG)",
      "React.js (Hooks, Context, Concurrent Features)",
      "TypeScript",
      "JavaScript (ES6+)",
    ],
  },
  {
    title: "State & Data Management",
    icon: Database,
    skills: [
      "Zustand",
      "Redux Toolkit",
      "React Query (TanStack)",
      "Context API",
      "REST APIs",
      "GraphQL Integration",
    ],
  },
  {
    title: "UI/UX Development",
    icon: Palette,
    skills: [
      "Tailwind CSS",
      "Shadcn UI",
      "Material-UI",
      "Framer Motion",
      "Responsive Design",
      "Accessibility",
    ],
  },
  {
    title: "Performance & SEO",
    icon: Gauge,
    skills: [
      "Core Web Vitals Optimization",
      "Lighthouse",
      "Technical SEO",
      "Image Optimization",
      "Bundle Analysis",
    ],
  },
  {
    title: "Development Ecosystem",
    icon: GitBranch,
    skills: [
      "Git/GitHub",
      "Vite",
      "Webpack",
      "Turborepo",
      "CI/CD (Vercel, GitHub Actions)",
      "Testing (Jest, RTL)",
    ],
  },
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 bg-muted/20" ref={ref}>
      <MaxWidth >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading mb-4">Technical Stack</h2>
          <p className="section-subheading mx-auto">
            Modern technologies for building scalable applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="glow-card p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <category.icon size={24} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>
              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <Code2 size={12} className="text-primary/50" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </MaxWidth>
    </section>
  );
};
