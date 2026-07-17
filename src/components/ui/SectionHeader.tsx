import AnimatedSection from "@/components/ui/AnimatedSection";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label?: string;
  title: string;
  titleAccent?: string; // Part of title to render in red
  subtitle?: string;
  align?: "left" | "center" | "right";
  dark?: boolean;
  className?: string;
}

export default function SectionHeader({
  label,
  title,
  titleAccent,
  subtitle,
  align = "left",
  dark = false,
  className = "",
}: SectionHeaderProps) {
  const alignClass = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  }[align];

  return (
    <div className={cn("flex flex-col gap-4", alignClass, className)}>
      {label && (
        <AnimatedSection delay={0}>
          <div className="flex items-center gap-5">
            {(align === "left" || align === "center") && <span className="red-accent-line" />}
            <span className="label-text">{label}</span>
            {(align === "right" || align === "center") && <span className="red-accent-line" />}
          </div>
        </AnimatedSection>
      )}

      <AnimatedSection delay={0.1}>
        <h2
          className={cn(
            "heading-lg max-w-3xl",
            dark ? "text-white" : "text-[var(--black)]"
          )}
        >
          {title}
          {titleAccent && (
            <span className="gradient-text"> {titleAccent}</span>
          )}
        </h2>
      </AnimatedSection>

      {subtitle && (
        <AnimatedSection delay={0.2}>
          <p
            className={cn(
              "text-lg leading-relaxed max-w-2xl",
              dark ? "text-white/60" : "text-[var(--gray-500)]"
            )}
          >
            {subtitle}
          </p>
        </AnimatedSection>
      )}
    </div>
  );
}
