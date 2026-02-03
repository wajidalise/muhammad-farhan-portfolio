import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import MaxWidth from "../shared/MaxWidth";

const metrics = [
  { value: "95%", label: "Average Lighthouse Score", desc: "Across all production applications" },
  { value: "40%", label: "Core Web Vitals Improvement", desc: "Through systematic optimization" },
  { value: "30%", label: "SEO Ranking Boost", desc: "For client applications" },
  { value: "85%", label: "Runtime Error Reduction", desc: "Via TypeScript implementation" },
  { value: "$500K+", label: "Monthly Transactions", desc: "Processed by financial systems" },
  { value: "10K+", label: "Daily Active Users", desc: "Served by architected applications" },
];

export const MetricsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24" ref={ref}>
      <MaxWidth>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading mb-4">Measurable Impact</h2>
          <p className="section-subheading mx-auto">
            Quantifiable results from delivering high-quality solutions
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="glow-card p-6 text-center group"
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2 group-hover:scale-105 transition-transform">
                {metric.value}
              </div>
              <div className="font-medium text-foreground mb-1">{metric.label}</div>
              <div className="text-sm text-muted-foreground">{metric.desc}</div>
            </motion.div>
          ))}
        </div>
      </MaxWidth>
    </section>
  );
};
