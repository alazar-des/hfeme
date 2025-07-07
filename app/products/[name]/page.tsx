"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CustomButton } from "@/components/ui/custom-button";
import { SectionCard } from "@/components/ui/section-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { allProducts } from "@/data/products";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function ProductDetailPage() {
  const { name } = useParams<{ name: string }>();
  const decodedName = decodeURIComponent(name || "");
  const product = allProducts.find((product) => product.name === decodedName);

  return (
    <div className="min-h-screen flex flex-col items-center">
      {product ? (
        <div className="flex items-center flex-col w-full">
          <SectionCard className="">
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
          <div className="hidden lg:flex w-full flex-1 bg-primary py-4 items-center">
            <div className="max-w-7xl px-6 md:px-48 md:w-[70%]">
              <div className="flex gap-20 justify-start text-white">
                <span className="text-lg font-medium">Jump To:</span>
                <div className="flex gap-16 text-lg">
                  <Link href="#features" className="hover:underline">
                    Features
                  </Link>
                  <Link href="#specifications" className="hover:underline">
                    Specifications
                  </Link>
                  <Link href="#applications" className="hover:underline">
                    Applications
                  </Link>
                </div>
              </div>
            </div>
          </div>
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
