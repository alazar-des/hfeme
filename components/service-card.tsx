import Image from "next/image";
import { Button } from "./ui/button";

type ServiceCardPrimaryProps = {
  variant?: "primary" | "secondary";
  heading: string;
  content: string;
  actionButton?: React.ReactNode;
  imageUrl: string;
  alt?: string;
};

export const ServiceCard = ({
  variant = "primary",
  heading,
  content,
  actionButton,
  imageUrl,
  alt = "Service image",
}: ServiceCardPrimaryProps) => {
  return (
    <div
      className={`py-24 px-4 md:px-8 ${
        variant === "primary" ? "bg-primary" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          {/* Image Block */}
          <div
            className={`relative aspect-[4/3] overflow-hidden ${
              variant === "primary" ? "lg:order-1" : "lg:order-2"
            }`}
            style={{
              clipPath:
                variant === "primary"
                  ? "polygon(0 0, 100% 4%, 100% 96%, 0 100%)"
                  : "polygon(0 4%, 100% 0, 100% 100%, 0 96%)",
            }}
          >
            <Image
              src={imageUrl}
              alt={alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Text Block */}
          <div
            className={`space-y-10 ${
              variant === "primary" ? "lg:order-2" : "lg:order-1"
            }`}
          >
            <h2
              className={`text-4xl md:text-5xl font-light ${
                variant === "primary" ? "text-white" : "text-primary"
              }`}
            >
              {heading}
            </h2>
            <p
              className={`text-lg leading-relaxed ${
                variant === "primary" ? "text-white" : "text-[#6D6A70]"
              }`}
            >
              {content}
            </p>
            {actionButton && (
              <Button
                variant="outline"
                className={`border-primary text-primary hover:bg-primary hover:text-white rounded-full px-10 py-7 bg-transparent cursor-pointer ${
                  variant === "primary"
                    ? "border-white text-white hover:bg-white hover:text-primary"
                    : ""
                }`}
              >
                {actionButton}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
