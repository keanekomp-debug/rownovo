"use client";

import { motion } from "framer-motion";

export default function StatsStrip() {
  const stats = [
    { label: "Buoys Online", value: 3 },
    { label: "Rivers", value: 2 },
    { label: "Data Points Today", value: 14823 },
    { label: "Datasets", value: 12 }
  ];

  return (
    <div className="border-y border-border py-10">
      <div className="container grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="text-3xl font-mono text-data">{s.value}</div>
            <div className="text-muted text-sm">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
