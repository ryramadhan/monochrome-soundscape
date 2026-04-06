import { motion } from "framer-motion";

export function Hero() {
  return (
    <motion.section
      className="flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
    >
      <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.35em] text-neutral-500">
        Presence
      </p>
      <h1 className="mb-6 max-w-3xl font-sans text-4xl font-light tracking-tight text-white sm:text-5xl md:text-6xl">
        ikrvell
      </h1>
      <p className="max-w-xl text-balance text-base font-light leading-relaxed text-neutral-400 sm:text-lg">
        Creative Thinker / Passionate music listener / Aesthetic Explorer
      </p>
      <div className="mt-14 h-px w-16 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
    </motion.section>
  );
}
