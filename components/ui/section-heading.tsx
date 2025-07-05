import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionHeadingProps {
  variant?: "primary" | "secondary";
  className?: string;
  children: ReactNode;
}

export const SectionHeading = ({
  variant = "secondary",
  className,
  children,
}: SectionHeadingProps) => {
  return (
    <h2
      className={cn(
        `text-4xl md:text-5xl font-light mb-12 ${
          variant === "primary" ? "text-white" : "text-primary"
        }`,
        className
      )}
    >
      {children}
    </h2>
  );
};
