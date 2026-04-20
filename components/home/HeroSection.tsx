"use client";

import { motion } from "framer-motion";
import Button from "../ui/Button";

export default function HeroSection() {
  return (
    <section className="relative h-[100dvh] flex flex-col justify-center items-center text-center overflow-hidden">

      {/* animated background */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_#00B4D8_0%,transparent_70%)] animate-pulse" />

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-6xl md:text-7xl font-heading"
      >
        Rivers made visible.
      </motion.h1>

      <p className="mt-6 text-muted max-w-xl">
        A solar-powered network of autonomous buoys, delivering real-time
        environmental intelligence.
      </p>

      <div className="mt-10 flex gap-4">
        <Button>Track Live →</Button>
        <Button variant="secondary">How It Works →</Button>
      </div>
    </section>
  );
}
