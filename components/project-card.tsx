import Image from "next/image";
import { Button } from "./ui/button";

type ProductCardProps = {
  imageUrl: string;
  title: string;
  description: string;
  buttonText: string;
  badgeText: string;
  badgeColor: string;
};

export const ProjectCard = ({
  imageUrl,
  title,
  description,
  buttonText,
  badgeText,
  badgeColor,
}: ProductCardProps) => {
  return (
    <div className="bg-white shadow-lg overflow-hidden w-80 flex-shrink-0">
      <div className="relative h-48">
        <Image
          src={imageUrl}
          alt="Industrial parts cleaning equipment"
          fill
          className="object-cover"
        />
        <div className="absolute top-4 left-4">
          <span
            className="text-white px-3 py-1 rounded-full text-sm font-medium"
            style={{
              backgroundColor: badgeColor,
            }}
          >
            {badgeText}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-medium text-primary mb-3">{title}</h3>
        <p className="text-[#6D6A70] text-sm mb-4 line-clamp-3">
          {description}
        </p>
        <Button
          variant="outline"
          size="sm"
          className="border-primary text-primary hover:bg-primary hover:text-white rounded-full px-6 py-2 bg-transparent"
        >
          {buttonText}
        </Button>
      </div>
    </div>
  );
};
