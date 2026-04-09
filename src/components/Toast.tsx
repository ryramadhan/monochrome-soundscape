import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
}

export function Toast({ message, isVisible, onClose }: ToastProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20, x: "-50%" }}
          animate={{ opacity: 1, y: 0, x: "-50%" }}
          exit={{ opacity: 0, y: -20, x: "-50%" }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed top-24 left-1/2 z-50 flex max-w-[85vw] items-center gap-3 rounded-sm border border-white/10 bg-neutral-900/90 px-5 py-3 shadow-lg backdrop-blur-sm sm:max-w-sm"
        >
          <div className="h-2 w-2 shrink-0 rounded-full bg-white/60" />
          <p className="max-w-[70vw] text-xs font-light leading-relaxed tracking-wide text-neutral-200 sm:max-w-none">
            {message}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}