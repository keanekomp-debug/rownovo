"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="h-[100dvh] flex flex-col justify-center items-center text-center relative">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-7xl font-heading"
      >
        Rivers made visible.
      </motion.h1>

      <p className="mt-6 text-muted max-w-xl">
        A solar-powered network of autonomous buoys, turning rivers into open,
        real-time data streams.
      </p>

      <div className="mt-10 flex gap-4">
        <Link href="/tracker" className="bg-primary text-black px-6 py-3 rounded">
          Track Live →
        </Link>
        <Link href="/technology" className="border border-border px-6 py-3 rounded">
          How It Works →
        </Link>
      </div>
    </section>
  );
}
