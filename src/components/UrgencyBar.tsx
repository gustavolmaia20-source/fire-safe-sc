import { motion } from "framer-motion";
import { AlertTriangle, Clock } from "lucide-react";

export function UrgencyBar() {
  return (
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.8 }}
      className="fixed top-16 left-0 right-0 z-30 bg-accent py-2 text-center text-sm font-semibold text-accent-foreground md:top-20"
    >
      <div className="container flex items-center justify-center gap-2 flex-wrap">
        <AlertTriangle className="h-4 w-4 shrink-0" />
        <span>
          <strong>Fiscalização intensificada em SC em 2026.</strong>{" "}
          Regularize antes de ser notificado.
        </span>
        <Clock className="ml-1 h-4 w-4 shrink-0" />
        <span className="hidden sm:inline">Orçamento gratuito em até 24h.</span>
      </div>
    </motion.div>
  );
}
