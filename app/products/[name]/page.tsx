"use client";

import { RelatedProductsCrousal } from "@/components/related-products";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CustomButton } from "@/components/ui/custom-button";
import { SectionCard } from "@/components/ui/section-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { allProducts } from "@/data/products";
import { ArrowLeft, CircleCheckBig } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function ProductDetailPage() {
  const { name } = useParams<{ name: string }>();
  const decodedName = decodeURIComponent(name || "");
  const product = allProducts.find((product) => product.name === decodedName);
  const relatedProducts = allProducts.filter(
    (p) => p.type === product?.type && p.name !== product?.name
  );

  return (
    <div className="min-h-screen flex flex-col items-center">
      {product ? (
        <div className="flex items-center flex-col w-full">
          <SectionCard id="overview" className="">
            <Link href="/products" className="col-span-full">
              <Button
                variant="ghost"
                className="group pl-0 flex justify-start items-center gap-3 hover:bg-transparent cursor-pointer  hover:underline "
              >
                <div className="p-1 bg-primary rounded-full">
                  <ArrowLeft className="text-white w-8 h-8" />
                </div>
                <span className="group text-xs text-[#6D6A70]">
                  Go back to products
                </span>
              </Button>
            </Link>
            <div className="col-span-full grid md:grid-cols-3 flex-col md:flex-row gap-8 md:gap-12">
              <div className="col-span-2 flex flex-col gap-8">
                <Badge variant="outline">{product?.type}</Badge>
                <SectionHeading variant="secondary" className="mb-0">
                  {product?.name}
                </SectionHeading>
                <p className="text-[#6D6A70] text-lg">{product.description}</p>
                <CustomButton link="/contact-us" className="mt-4">
                  Make an Enquiry
                </CustomButton>
              </div>
              <div className="h-56">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={224}
                  className="object-cover rounded"
                />
              </div>
            </div>
          </SectionCard>
          <div className="hidden lg:flex w-full flex-1 bg-primary py-4 items-center sticky top-0 z-50">
            <div className="max-w-7xl px-6 md:px-48 md:w-[70%]">
              <div className="flex gap-20 justify-start text-white">
                <span className="text-lg font-medium">Jump To:</span>
                <div className="flex gap-16 text-lg">
                  <Link href="#overview" className="">
                    Overview
                  </Link>
                  <Link href="#features" className="">
                    Features
                  </Link>
                  <Link href="#specifications" className="">
                    Specifications
                  </Link>
                  {relatedProducts.length && (
                    <Link href="#related-products" className="">
                      Related Products
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
          <SectionCard id="features" className="w-full bg-[#E7F1F6]">
            <SectionHeading variant="secondary" className="col-span-full">
              Features
            </SectionHeading>
            <div className="flex flex-col gap-6 col-span-full text-lg text-[#6D6A70]">
              {product.features.map((feature) => (
                <div className="flex gap-4 items-center" key={feature}>
                  <CircleCheckBig className="" />
                  <span className="font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </SectionCard>
          <SectionCard id="specifications" className="w-full" gap={24}>
            <SectionHeading variant="secondary" className="col-span-full mb-0">
              Specifications
            </SectionHeading>
            <div className="col-span-full text-lg">
              {Object.entries(product.specification).map(([key, value]) => (
                <div
                  className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-3 border-b border-muted last:border-b-0 text-[#6D6A70]"
                  key={key}
                >
                  <span className="font-semibold">{key}</span>
                  <span className="">{value}</span>
                </div>
              ))}
            </div>
          </SectionCard>
          {relatedProducts.length && (
            <RelatedProductsCrousal relatedProducts={relatedProducts} />
          )}
        </div>
      ) : (
        <SectionCard className="h-[90vh] col-span-full">
          <p className="text-[#6D6A70] text-2xl">404</p>
          <p className="text-[#6D6A70] text-2xl">Product Not Found</p>
          <Link href="/products" className="text-primary hover:underline">
            Go back to products
          </Link>
        </SectionCard>
      )}
    </div>
  );
}
