"use client";

import { ContactForm } from "@/components/contact-form";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  image: string;
  type: string;
}

const allProducts: Product[] = [
  {
    id: 1,
    name: "Suspension 15kv",
    category: "Insulator",
    description:
      "ADS 800 is your automatic degreasing system with a large basket diameter of 800mm and a high payload capacity of...",
    image: "/images/15kv-suspension-insulator.webp",
    type: "Insulator",
  },
  {
    id: 2,
    name: "Suspension 33kv",
    category: "Insulator",
    description:
      "For degreasing parts to increase productivity. To see the product in action, request a free demo or find out how...",
    image: "/images/33kv-suspension-insulator.jpg",
    type: "Insulator",
  },
  {
    id: 3,
    name: "Heavy Angle",
    category: "Angle",
    description:
      "Strong water-based industrial cleaner. Specifically designed for Torrent and Automatic Degreasing Systems, delivering boosted performance to get at least 2x...",
    image: "/images/heavy-angle-bracket.jpg",
    type: "Galvanized",
  },
  {
    id: 4,
    name: "T-Off Cross Arm",
    category: "Arm",
    description:
      "Aviation approved water based parts washer cleaner and degreaser",
    image: "/images/T-off-cross-arm.avif",
    type: "Galvanized",
  },
  {
    id: 5,
    name: "Transformer Seat",
    category: "Transformer Stracture",
    description:
      "Fully enclosed water based parts cleaner with 3 key elements: high pressure, heat and innovative chemistry. To see the product...",
    image: "/images/transformer-seat.png",
    type: "Galvanized",
  },
  {
    id: 11,
    name: "Transformer Base",
    category: "Transformer Stracture",
    description:
      "Fully enclosed water based parts cleaner with 3 key elements: high pressure, heat and innovative chemistry. To see the product...",
    image: "/images/transformer-base-steel-m201_590x600_0718.jpg",
    type: "Galvanized",
  },
  {
    id: 6,
    name: "Tie Straps",
    category: "Strap",
    description:
      "Fully enclosed water based parts cleaner with 3 key elements: high pressure, heat and innovative chemistry. To see the product...",
    image: "/images/tie-straps.png",
    type: "Galvanized",
  },
  {
    id: 7,
    name: "Pillars",
    category: "Pillar",
    description:
      "Media blasting parts cleaner. Combines media blasting under pressure to impact the contaminant and cause it to shatter away from...",
    image: "/images/pillars.jpg",
    type: "Steel",
  },
  {
    id: 8,
    name: "Strain Clamp",
    category: "Clamp",
    description:
      "Large water based media blasting parts cleaner. Combines water and media to deliver a scrubbing action on the contaminant which...",
    image: "/images/clamp.webp",
    type: "Galvanized",
  },
  {
    id: 9,
    name: "HT Pin",
    category: "Pin",
    description:
      "Water based media blasting parts cleaner. Combines water and media to deliver a scrubbing action on the contaminant which enables...",
    image: "/images/pin_20kit.webp",
    type: "Galvanized",
  },
  {
    id: 10,
    name: "Collar",
    category: "Collar",
    description:
      "This is an additional product that will be shown when Load More is clicked...",
    image: "/images/collar.webp",
    type: "Galvanized",
  },
  {
    id: 12,
    name: "Aluminum Clamp",
    category: "Clamp",
    description:
      "This is an additional product that will be shown when Load More is clicked...",
    image:
      "/images/Aluminium-Alloy-Tension-Clamp-Strain-Clamp-Cable-Clamp.avif",
    type: "Aluminum",
  },
  {
    id: 13,
    name: "Earthing Rod",
    category: "Earthing",
    description:
      "This is an additional product that will be shown when Load More is clicked...",
    image: "/images/earthing-rod.jpeg",
    type: "Copper",
  },
  {
    id: 14,
    name: "Ball Eye",
    category: "Clamp",
    description:
      "This is an additional product that will be shown when Load More is clicked...",
    image:
      "/images/galvanized_steel_ball_eye_large_rated_failure_load_range_70kn_550kn.webp",
    type: "Galvanized",
  },
  {
    id: 15,
    name: "Insulator Pin",
    category: "Pin",
    description:
      "This is an additional product that will be shown when Load More is clicked...",
    image: "/images/insulator-pin.jpg",
    type: "Galvanized",
  },
  {
    id: 16,
    name: "MV/LV Hook",
    category: "Hook",
    description:
      "This is an additional product that will be shown when Load More is clicked...",
    image: "/images/MV:LV-hook.png",
    type: "Galvanized",
  },
];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] =
    useState<string>("All Products");
  const [visibleProducts, setVisibleProducts] = useState<number>(9);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const categories = [
    "All Products",
    ...Array.from(new Set(allProducts.map((product) => product.category))),
  ];

  const filteredProducts =
    selectedCategory === "All Products"
      ? allProducts
      : allProducts.filter((product) => product.category === selectedCategory);

  const displayedProducts = filteredProducts.slice(0, visibleProducts);
  const hasMoreProducts = visibleProducts < filteredProducts.length;

  const handleLoadMore = () => {
    setVisibleProducts((prev) => Math.min(prev + 9, filteredProducts.length));
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setVisibleProducts(9);
    setIsDropdownOpen(false);
  };
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[40svh] lg:h-[60svh] overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out z-0"
          style={{
            backgroundImage: `url('/images/image-1.jpg')`,
          }}
        />

        {/* Overlay */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(135deg, rgba(1, 113, 188, 0.7) 0%, rgba(1, 113, 188, 0.2) 100%)",
          }}
        />

        {/* Content*/}
        <div className="relative z-20 flex flex-col items-start justify-center gap-6 h-full px-6 md:px-48 md:w-[70%]">
          <h1 className="text-white text-4xl font-semibold">
            Products From HF
          </h1>
          <h3 className="text-white text-xl font-meduim lg:block">
            Precision-built components for critical infrastructure.
          </h3>
        </div>
      </section>
      <section className="bg-white py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
              Browse our Parts Cleaning products
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
              Use the filtering options or view all products to find the
              solution you are looking for. Please contact our team for more
              information, product demonstrations or to purchase.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="bg-gray-50 rounded-lg p-6 mb-12">
            <div className="flex flex-col lg:flex-row items-start lg:items-center space-x-4 space-y-4">
              <span className="text-gray-700 font-medium">
                What can we help you find today?
              </span>
              <div className="flex items-center space-x-4">
                <Button
                  className={`rounded-full px-6 py-2 ${
                    selectedCategory === "All Products"
                      ? "bg-gray-800 text-white hover:bg-gray-700"
                      : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                  }`}
                  onClick={() => handleCategoryChange("All Products")}
                >
                  All Products
                </Button>
                <span className="text-gray-500">or</span>
                <div className="relative">
                  <Button
                    variant="outline"
                    className="rounded-full px-6 py-2 bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    {selectedCategory === "All Products"
                      ? "--Select Cate..."
                      : selectedCategory}
                  </Button>
                  {isDropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-10 min-w-[150px]">
                      {categories
                        .filter((cat) => cat !== "All Products")
                        .map((category) => (
                          <button
                            key={category}
                            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg"
                            onClick={() => handleCategoryChange(category)}
                          >
                            {category}
                          </button>
                        ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {displayedProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
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
                    <span className="text-sm text-gray-500 uppercase tracking-wide">
                      {product.type}
                    </span>
                    <h3 className="text-xl font-semibold text-gray-800 mt-1">
                      {product.name}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-4">
                    {product.description}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white rounded-full px-4 py-2 bg-transparent flex items-center space-x-2"
                  >
                    <span>Learn More</span>
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Section */}
          <div className="text-center">
            <p className="text-gray-600 mb-4">
              Showing {displayedProducts.length} of {filteredProducts.length}{" "}
              products
            </p>
            {hasMoreProducts && (
              <Button
                variant="outline"
                size="lg"
                className="border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white rounded-full px-8 py-3 bg-transparent"
                onClick={handleLoadMore}
              >
                Load More Products
              </Button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
