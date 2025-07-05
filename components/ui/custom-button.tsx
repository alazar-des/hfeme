import Link from "next/link";
import { Button } from "./button";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface CustomButtonProps {
  link: string;
  variant?: "primary" | "outline";
  className?: string;
  children: ReactNode;
}

export const CustomButton = ({
  link,
  variant = "outline",
  className,
  children,
}: CustomButtonProps) => {
  return (
    <Link href={link} className="block">
      <Button
        variant="outline"
        className={cn(
          `border-primary text-primary text-base font-medium hover:bg-primary hover:text-white rounded-full px-10 py-7 bg-transparent cursor-pointer ${
            variant === "primary"
              ? "border-white text-white hover:bg-white hover:text-primary"
              : ""
          }`,
          className
        )}
      >
        {children}
      </Button>
    </Link>
  );
};
