import { useState } from "react";
import { motion } from "framer-motion";
import { Download, Check, Loader2, LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface DownloadButtonProps {
  fileUrl: string;
  fileName: string;
  label: string;
  subtitle?: string;
  icon?: LucideIcon;
  variant?: "primary" | "secondary";
  className?: string;
}

type Status = "idle" | "loading" | "success";

export const DownloadButton = ({
  fileUrl,
  fileName,
  label,
  subtitle,
  icon: Icon = Download,
  variant = "primary",
  className,
}: DownloadButtonProps) => {
  const [status, setStatus] = useState<Status>("idle");
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const id = Date.now();
    setRipples((r) => [...r, { x: e.clientX - rect.left, y: e.clientY - rect.top, id }]);
    setTimeout(() => setRipples((r) => r.filter((rp) => rp.id !== id)), 600);

    if (status !== "idle") return;
    setStatus("loading");

    // Track download event (analytics-ready hook)
    try {
      (window as unknown as { dataLayer?: unknown[] }).dataLayer?.push({
        event: "file_download",
        file_name: fileName,
      });
    } catch {
      /* noop */
    }

    try {
      const res = await fetch(fileUrl);
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
      setStatus("success");
      setTimeout(() => setStatus("idle"), 2000);
    } catch {
      setStatus("idle");
    }
  };

  const isPrimary = variant === "primary";

  return (
    <motion.button
      type="button"
      onClick={handleClick}
      aria-label={`${label}${subtitle ? `, ${subtitle}` : ""}`}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      animate={{ y: [0, -2, 0] }}
      transition={{ y: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
      className={cn(
        "group relative overflow-hidden rounded-2xl px-6 py-4 min-h-14",
        "flex items-center gap-3 font-medium",
        "border backdrop-blur-xl transition-all duration-300",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        isPrimary
          ? "bg-gradient-to-r from-primary/90 to-primary text-primary-foreground border-primary/50 shadow-[0_0_30px_-5px_hsl(var(--primary)/0.5)] hover:shadow-[0_0_50px_-5px_hsl(var(--primary)/0.8)]"
          : "bg-card/40 text-foreground border-border hover:border-primary/50 hover:bg-card/60 hover:shadow-[0_0_30px_-10px_hsl(var(--primary)/0.4)]",
        className,
      )}
    >
      {/* Animated border glow */}
      <span className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <span className="absolute inset-[-1px] rounded-2xl bg-gradient-to-r from-primary/0 via-primary/60 to-primary/0 blur-md" />
      </span>

      {/* Shine sweep */}
      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:translate-x-full transition-transform duration-1000" />

      {/* Ripples */}
      {ripples.map((r) => (
        <span
          key={r.id}
          className="pointer-events-none absolute rounded-full bg-white/40 animate-ping"
          style={{ left: r.x - 10, top: r.y - 10, width: 20, height: 20 }}
        />
      ))}

      <span className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-white/15 backdrop-blur-sm">
        {status === "loading" ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : status === "success" ? (
          <Check className="w-5 h-5" />
        ) : (
          <Icon className="w-5 h-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        )}
      </span>

      <span className="relative flex flex-col items-start leading-tight text-left">
        <span className="text-sm font-semibold">
          {status === "success" ? "Downloaded!" : status === "loading" ? "Preparing…" : label}
        </span>
        {subtitle && (
          <span className={cn("text-xs font-normal", isPrimary ? "text-primary-foreground/80" : "text-muted-foreground")}>
            {subtitle}
          </span>
        )}
      </span>
    </motion.button>
  );
};