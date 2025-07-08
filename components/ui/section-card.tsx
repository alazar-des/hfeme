import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionCardProps {
  variant?: "primary" | "secondary";
  className?: string;
  children: ReactNode;
  id?: string;
  gap?: number;
}

export const SectionCard = ({
  variant = "secondary",
  className,
  children,
  id,
  gap = 8,
}: SectionCardProps) => {
  return (
    <div
      id={id}
      className={cn(
        `py-12 lg:py-24 px-4 md:px-8 ${
          variant === "primary" ? "bg-primary" : "bg-white"
        }`,
        className
      )}
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`grid lg:grid-cols-2 lg:gap-24 items-center`}
          style={{
            gap: gap,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
