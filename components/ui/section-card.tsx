import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionCardProps {
  variant?: "primary" | "secondary";
  className?: string;
  children: ReactNode;
}

export const SectionCard = ({
  variant = "secondary",
  className,
  children,
}: SectionCardProps) => {
  return (
    <div
      className={cn(
        `py-12 lg:py-24 px-4 md:px-8 ${
          variant === "primary" ? "bg-primary" : "bg-white"
        }`,
        className
      )}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-24 items-center">
          {children}
        </div>
      </div>
    </div>
  );
};
