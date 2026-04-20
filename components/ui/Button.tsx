"use client";

import { motion } from "framer-motion";

export default function Button({ children, variant = "primary", ...props }: any) {
  const base = "px-6 py-3 rounded font-medium transition";

  const styles =
    variant === "primary"
      ? "bg-primary text-black hover:bg-primaryDeep"
      : "border border-border hover:bg-surface2";

  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
      className={`${base} ${styles}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}
