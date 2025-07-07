"use client";

import { Button } from "@/components/ui/button";
import { allProducts } from "@/data/products";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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
        <div className="relative z-20 flex flex-col items-start justify-center gap-6 h-full px-6 md:px-48 lg:w-[70%]">
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
