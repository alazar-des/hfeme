"use client";

import Image from "next/image";
import { useState } from "react";

export const DesktopHero = () => {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const services = [
    {
      id: "power",
      title: "Power & Electrical Systems",
      color: "#b5002f",
      hoverHeadline:
        "Reliable Power & Electrical Systems for Critical Infrastructure",
      hoverSubheading:
        "From transformers to lighting and LV panels — we build dependable electrical networks.",
      backgroundImage: "/images/image-1.jpg",
    },
    {
      id: "hvac",
      title: "HVAC & Fire Protection Solutions",
      color: "#009fa0",
      hoverHeadline:
        "HVAC and Fire Systems Engineered for Safety and Efficiency",
      hoverSubheading:
        "Design and installation of AC, chillers, gas lines, and fire control systems.",
      backgroundImage: "/images/image-2.jpg",
    },
    {
      id: "mechanical",
      title: "Mechanical Fabrication & Epoxy Coating",
      color: "#e37a00",
      hoverHeadline: "Precision Mechanical Work & Industrial Surface Coating",
      hoverSubheading:
        "From steel tanks to epoxy floors — engineered for strength and protection.",
      backgroundImage: "/images/image-3.jpg",
    },
    {
      id: "manufacturing",
      title: "Industrial Product Manufacturing",
      color: "#004038",
      hoverHeadline:
        "Engineered Components for Power Distribution and Industry",
      hoverSubheading:
        "Cross arms, strain clamps, insulator pins — built to spec, built to last.",
      backgroundImage: "/images/image-4.jpg",
    },
  ];

  const defaultHeadline = "Engineering Excellence in Electromechanical";
  const defaultSubheading =
    "Delivering precision manufacturing and professional installation services that power infrastructure and industry.";

  const currentHeadline = hoveredService
    ? services.find((s) => s.id === hoveredService)?.hoverHeadline ||
      defaultHeadline
    : defaultHeadline;

  const currentSubheading = hoveredService
    ? services.find((s) => s.id === hoveredService)?.hoverSubheading ||
      defaultSubheading
    : defaultSubheading;

  const currentBackground = hoveredService
    ? services.find((s) => s.id === hoveredService)?.backgroundImage
    : "/images/image-5.jpg";

  return (
    <section className="relative h-[85svh] overflow-hidden hidden md:block">
      {/* Background Image as an optimized Next.js Image */}
      <Image
        src={currentBackground!}
        alt="Background"
        fill
        quality={100}
        priority // preloads image to prevent flash
        className="object-cover object-center"
      />

      {/* Dynamic Overlay */}
      <div
        className="absolute inset-0 transition-all duration-700 ease-in-out z-10"
        style={{
          background: hoveredService
            ? `linear-gradient(135deg, ${
                services.find((s) => s.id === hoveredService)?.color
              }80 0%, ${
                services.find((s) => s.id === hoveredService)?.color
              }3D 100%)`
            : "linear-gradient(135deg, rgba(1, 113, 188, 0.4) 0%, rgba(1, 113, 188, 0.25) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center lg:px-48 pt-20">
        <div className="container flex flex-col mx-auto h-full justify-between">
          <div className="h-full flex flex-col justify-end">
            <div className="max-w-6xl mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-8 leading-tight transition-all duration-500 ease-in-out">
                {currentHeadline}
              </h1>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl md:text-2xl text-white font-normal mb-8">
                {currentSubheading}
              </h2>
            </div>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 max-w-5xl items-end h-68 py-0">
            {services.map((service) => (
              <div
                key={service.id}
                className="group relative backdrop-blur-sm h-48 bg-white/10 p-6 cursor-pointer transition-all duration-500 ease-in-out hover:backdrop-blur-sm hover:bg-white/5 hover:h-52 border border-white/10"
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className="relative z-10">
                  <h3 className="text-lg font-medium text-white mb-4 leading-tight">
                    {service.title}
                  </h3>
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: service.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const MobileHero = () => {
  const services = [
    {
      id: "power",
      title: "Power & Electrical Systems",
      color: "#b5002f",
      hoverHeadline:
        "Reliable Power & Electrical Systems for Critical Infrastructure",
      hoverSubheading:
        "From transformers to lighting and LV panels — we build dependable electrical networks.",
      backgroundImage: "/images/image-1.jpg",
    },
    {
      id: "hvac",
      title: "HVAC & Fire Protection Solutions",
      color: "#009fa0",
      hoverHeadline:
        "HVAC and Fire Systems Engineered for Safety and Efficiency",
      hoverSubheading:
        "Design and installation of AC, chillers, gas lines, and fire control systems.",
      backgroundImage: "/images/image-2.jpg",
    },
    {
      id: "mechanical",
      title: "Mechanical Fabrication & Epoxy Coating",
      color: "#e37a00",
      hoverHeadline: "Precision Mechanical Work & Industrial Surface Coating",
      hoverSubheading:
        "From steel tanks to epoxy floors — engineered for strength and protection.",
      backgroundImage: "/images/image-3.jpg",
    },
    {
      id: "manufacturing",
      title: "Industrial Product Manufacturing",
      color: "#004038",
      hoverHeadline:
        "Engineered Components for Power Distribution and Industry",
      hoverSubheading:
        "Cross arms, strain clamps, insulator pins — built to spec, built to last.",
      backgroundImage: "/images/image-4.jpg",
    },
  ];

  return (
    <section className="flex md:hidden flex-col gap-8">
      <div className="relative h-[40svh]">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out"
          style={{
            backgroundImage: `url('${"/images/image-5.jpg"}')`,
          }}
        />

        {/* Dynamic Overlay */}
        <div
          className="absolute inset-0 transition-all duration-700 ease-in-out"
          style={{
            background:
              "linear-gradient(135deg, rgba(1, 113, 188, 0.4) 0%, rgba(1, 113, 188, 0.25) 100%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col justify-center px-8 pt-20">
          <div className="container flex flex-col mx-auto h-full justify-between">
            <div className="h-full flex flex-col justify-center md:justify-end">
              <div className="max-w-6xl mb-12">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-8 leading-tight transition-all duration-500 ease-in-out">
                  Engineering Excellence in Electromechanical
                </h1>
              </div>

              <div className="mb-12 hidden md:block">
                <h2 className="text-2xl md:text-2xl text-white font-normal mb-8">
                  Delivering precision manufacturing and professional
                  installation services that power infrastructure and industry.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Cards */}
      <div className="flex flex-col gap-8 py-0 px-6 mt-[-64]">
        {services.map((service) => (
          <div key={service.id} className="relative h-36 p-8">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('${service.backgroundImage}')`,
              }}
            />
            {/* Dynamic Overlay */}
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(135deg, ${service.color}80 0%, ${service.color}3D 100%)`,
              }}
            />
            <div className="relative z-10">
              <h3 className="text-lg font-medium text-white mb-4 leading-tight">
                {service.title}
              </h3>
              <div
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: service.color }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
