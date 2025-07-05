"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { CustomButton } from "./ui/custom-button";
import { SectionHeading } from "./ui/section-heading";
import { ChevronRight } from "lucide-react";
import { useRef, useState } from "react";

interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  type: string;
}

const featuredProducts: Product[] = [
  {
    id: 1,
    name: "T-Off Cross Arm",
    category: "Arm",
    description:
      "Aviation approved water based parts washer cleaner and degreaser",
    image: "/images/T-off-cross-arm.avif",
    type: "Galvanized",
  },
  {
    id: 2,
    name: "Heavy Angle",
    category: "Angle",
    description:
      "Strong water-based industrial cleaner. Specifically designed for Torrent and Automatic Degreasing Systems, delivering boosted performance to get at least 2x...",
    image: "/images/heavy-angle-bracket.jpg",
    type: "Galvanized",
  },
  {
    id: 3,
    name: "Suspension 33kv",
    category: "Insulator",
    description:
      "For degreasing parts to increase productivity. To see the product in action, request a free demo or find out how...",
    image: "/images/33kv-suspension-insulator.jpg",
    type: "Insulator",
  },
  {
    id: 4,
    name: "Pillars",
    category: "Pillar",
    description:
      "Media blasting parts cleaner. Combines media blasting under pressure to impact the contaminant and cause it to shatter away from...",
    image: "/images/pillars.jpg",
    type: "Steel",
  },
];

export const FeaturedProductsCrousal = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const totalSlides = Math.ceil(featuredProducts.length / 3);
  const productsPerSlide = 3;

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
    if (carouselRef.current) {
      const scrollPosition = slideIndex * carouselRef.current.clientWidth;
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  };

  const getCurrentSlideProducts = () => {
    const startIndex = currentSlide * productsPerSlide;
    return featuredProducts.slice(startIndex, startIndex + productsPerSlide);
  };

  return (
    <section
      className="bg-[#E7F1F6] py-32 px-4 md:px-8"
      style={{
        background:
          "linear-gradient(180deg,rgba(231, 241, 246, 1) 50%, rgba(255, 255, 255, 1) 50%)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row gap-8 items-start justify-between md:items-center mb-12">
          <div className="max-w-2xl">
            <SectionHeading>Featured Products</SectionHeading>
            <p className="text-[#6D6A70] text-lg leading-relaxed">
              Explore our latest engineering achievements and successful
              installations across power, HVAC, mechanical, and manufacturing
              projects. See how we bring precision and performance to every site
              we serve.
            </p>
          </div>
          <CustomButton variant="outline" link="/products">
            Veiw All Products
          </CustomButton>
        </div>

        {/* Product Carousel */}
        <div className="relative hidden md:block">
          <div
            ref={carouselRef}
            className="overflow-hidden"
            style={{ scrollSnapType: "x mandatory" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-118">
              {getCurrentSlideProducts().map((product) => (
                <div
                  key={product.id}
                  className="bg-white shadow-lg overflow-hidden flex-shrink-0 h-112"
                  style={{ scrollSnapAlign: "start" }}
                >
                  <div className="p-6">
                    <div className="flex justify-center mb-6">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={150}
                        height={150}
                        className="object-contain"
                      />
                    </div>
                    <div className="text-start mb-4">
                      <span className="text-sm text-[#6D6A70]/90 uppercase tracking-wide">
                        {product.type}
                      </span>
                      <h3 className="text-xl font-semibold text-primary mt-1">
                        {product.name}
                      </h3>
                    </div>
                    <p className="text-[#6D6A70] text-sm leading-relaxed mb-4 line-clamp-4">
                      {product.description}
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-primary text-primary hover:bg-primary hover:text-white rounded-full px-6 py-2 bg-transparent"
                    >
                      <span>View Detail</span>
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                className={`w-18 h-3 rounded-full transition-colors ${
                  index === currentSlide ? "bg-primary" : "bg-gray-400"
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Mobile Products*/}
        <div className="overflow-x-auto pb-4 no-scrollbar md:hidden">
          <div className="flex space-x-6 w-max">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white shadow-lg overflow-hidden flex-shrink-0 h-112 w-[90vw]"
                style={{ scrollSnapAlign: "start" }}
              >
                <div className="p-6">
                  <div className="flex justify-center mb-6">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={150}
                      height={150}
                      className="object-contain"
                    />
                  </div>
                  <div className="text-start mb-4">
                    <span className="text-sm text-[#6D6A70]/90 uppercase tracking-wide">
                      {product.type}
                    </span>
                    <h3 className="text-xl font-semibold text-primary mt-1">
                      {product.name}
                    </h3>
                  </div>
                  <p className="text-[#6D6A70] text-sm leading-relaxed mb-4 line-clamp-4">
                    {product.description}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary text-primary hover:bg-primary hover:text-white rounded-full px-6 py-2 bg-transparent"
                  >
                    <span>View Detail</span>
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
