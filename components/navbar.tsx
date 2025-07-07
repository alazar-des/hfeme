"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MapPinHouseIcon, Menu, PhoneCallIcon, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Products", href: "/products" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  return (
    <nav className="bg-primary shadow-sm relative top-0 z-50 lg:px-24">
      <div className="container mx-auto lg:px-4">
        <div className="flex justify-between items-center lg:h-16">
          <div className="absolute top-8 lg:top-22 flex justify-between w-[80vw] px-8 lg:px-18">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 z-50">
              <div className="w-12 h-8 bg-primary rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">HF</span>
              </div>
              <div className="hidden sm:block">
                <span className="text-lg font-bold text-white">
                  HF EME
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white text-lg transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right side icons */}
          <div className="hidden lg:ml-auto lg:flex items-center space-x-8">
            <div className="flex space-x-8">
              <div className="flex gap-2 items-center justify-center text-white">
                <MapPinHouseIcon className="text-white" />
                <span className="text-sm font-medium">
                  A.A Bole Subcuty, Worda 14 Alem Gebre Building
                </span>
              </div>
              <div className="flex gap-2 items-center justify-center text-white">
                <PhoneCallIcon />
                <span className="text-sm font-medium">
                  +251 911686078 / +251 991606171
                </span>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden absolute top-8 right-8 z-50">
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent rounded-full font-bold border"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X
                  className="w-8 h-8 text-primary border-blue"
                  style={{ width: "2rem", height: "1.75rem" }}
                />
              ) : (
                <Menu
                  className="w-8 h-8 text-white"
                  style={{ width: "2rem", height: "1.75rem" }}
                />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden p-8 border-t absolute pt-24 bg-white w-full shadow-lg h-[100svh] flex flex-col justify-between">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-[#6D6A70] hover:text-primary transition-colors text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="items-center space-x-8 mt-10">
              <div className="flex flex-col space-y-8">
                <div className="flex gap-4 items-center justify-start text-[#6D6A70]">
                  <MapPinHouseIcon className="bg-primary text-white w-8 h-8 p-1.5 rounded-full" />
                  <span className="font-medium">
                    A.A Bole Subcuty, Worda 14 Alem Gebre Building
                  </span>
                </div>
                <div className="flex gap-4 items-center justify-start text-[#6D6A70]">
                  <PhoneCallIcon className="bg-primary text-white w-8 h-8 p-1.5 rounded-full" />
                  <span className="font-medium">
                    +251 911686078 / +251 991606171
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
