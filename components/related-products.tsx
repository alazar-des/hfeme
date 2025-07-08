"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { CustomButton } from "./ui/custom-button";
import { SectionHeading } from "./ui/section-heading";
import { ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import { Product } from "@/types/products";
import Link from "next/link";

interface RelatedProductsCrousalProps {
  relatedProducts: Product[];
  id?: string;
}

export const RelatedProductsCrousal = ({
  relatedProducts,
  id = "related-products",
}: RelatedProductsCrousalProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const totalSlides = Math.ceil(relatedProducts.length / 3);
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
    return relatedProducts.slice(startIndex, startIndex + productsPerSlide);
  };

  return (
    <section
      id={id}
      className="bg-[#E7F1F6] py-32 px-4 md:px-8 w-full"
      style={{
        background:
          "linear-gradient(180deg,rgba(231, 241, 246, 1) 50%, rgba(255, 255, 255, 1) 50%)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row gap-8 items-start justify-between md:items-center mb-12">
          <div className="max-w-2xl">
            <SectionHeading>Related Products</SectionHeading>
            <p className="text-[#6D6A70] text-lg leading-relaxed">
              Take a look at some of our related products...
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
                    <Link href={`/products/${product.name}`}>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-primary text-primary hover:bg-primary hover:text-white rounded-full px-6 py-2 bg-transparent"
                      >
                        <span>View Detail</span>
                        <ChevronRight className="w-4 h-4" />
                      </Button>
                    </Link>
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
            {relatedProducts.map((product) => (
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
                  <Link href={`/products/${product.name}`}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-primary text-primary hover:bg-primary hover:text-white rounded-full px-6 py-2 bg-transparent"
                    >
                      <span>View Detail</span>
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
