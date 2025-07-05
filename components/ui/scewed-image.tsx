import { cn } from "@/lib/utils";
import Image from "next/image";

interface ScewedImageProps {
  imageUrl: string;
  alt: string;
  variant: "left-scewed" | "right-scewed";
  sizes?: string;
  className?: string;
}

export const ScewedImage = ({
  imageUrl,
  alt,
  variant,
  sizes = "(max-width: 768px) 100vw, 50vw",
  className,
}: ScewedImageProps) => {
  return (
    <div
      className={cn(
        `relative aspect-[4/3] overflow-hidden ${
          variant === "right-scewed" ? "lg:order-1" : "lg:order-2"
        }`,
        className
      )}
      style={{
        clipPath:
          variant === "right-scewed"
            ? "polygon(0 0, 100% 4%, 100% 96%, 0 100%)"
            : "polygon(0 4%, 100% 0, 100% 100%, 0 96%)",
      }}
    >
      <Image
        src={imageUrl}
        alt={alt}
        fill
        className="object-cover"
        sizes={sizes}
      />
    </div>
  );
};
