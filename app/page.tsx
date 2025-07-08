import { Clients } from "@/components/clients";
import { FeaturedProductsCrousal } from "@/components/featured-products";
import { DesktopHero, MobileHero } from "@/components/home-hero";
import { RecentProjects } from "@/components/recent-projects";
import { CustomButton } from "@/components/ui/custom-button";
import { ScewedImage } from "@/components/ui/scewed-image";
import { SectionCard } from "@/components/ui/section-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { WorkWithUs } from "@/components/work-with-us";
import { allProducts } from "@/data/products";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="relative min-h-[85svh]">
      {/* Hero Section */}
      <MobileHero />
      <DesktopHero />

      {/* Service and Manufacturing Section */}
      <SectionCard className="">
        <div className="grid lg:grid-cols-2 gap-4 items-center col-span-full">
          {/* Chemistry Panel */}
          <div className="bg-primary px-8 py-16 relative overflow-hidden flex flex-col justify-end md:h-142">
            {/* Molecular Structure Background */}
            <div className="absolute inset-0 opacity-20">
              <svg
                viewBox="0 0 800 400"
                className="w-full h-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Molecular structure lines */}
                <g stroke="white" strokeWidth="2">
                  <line x1="100" y1="100" x2="180" y2="100" />
                  <line x1="180" y1="100" x2="220" y2="150" />
                  <line x1="220" y1="150" x2="300" y2="150" />
                  <line x1="300" y1="150" x2="340" y2="100" />
                  <line x1="340" y1="100" x2="420" y2="100" />
                  <line x1="420" y1="100" x2="460" y2="150" />
                  <line x1="460" y1="150" x2="540" y2="150" />
                  <line x1="540" y1="150" x2="580" y2="200" />
                  <line x1="580" y1="200" x2="660" y2="200" />
                  <line x1="660" y1="200" x2="700" y2="150" />
                  <line x1="700" y1="150" x2="780" y2="150" />

                  <line x1="180" y1="100" x2="180" y2="50" />
                  <line x1="220" y1="150" x2="220" y2="200" />
                  <line x1="300" y1="150" x2="300" y2="200" />
                  <line x1="340" y1="100" x2="340" y2="50" />
                  <line x1="420" y1="100" x2="420" y2="50" />
                  <line x1="460" y1="150" x2="460" y2="200" />
                  <line x1="540" y1="150" x2="540" y2="100" />
                  <line x1="580" y1="200" x2="580" y2="250" />
                  <line x1="660" y1="200" x2="660" y2="250" />
                  <line x1="700" y1="150" x2="700" y2="100" />

                  <line x1="180" y1="50" x2="260" y2="50" />
                  <line x1="340" y1="50" x2="420" y2="50" />
                  <line x1="540" y1="100" x2="620" y2="100" />
                  <line x1="620" y1="100" x2="700" y2="100" />
                </g>

                {/* Molecular nodes */}
                <g fill="none" stroke="white" strokeWidth="3">
                  <circle cx="100" cy="100" r="15" />
                  <circle cx="180" cy="100" r="15" />
                  <circle cx="220" cy="150" r="15" />
                  <circle cx="300" cy="150" r="15" />
                  <circle cx="340" cy="100" r="15" />
                  <circle cx="420" cy="100" r="15" />
                  <circle cx="460" cy="150" r="15" />
                  <circle cx="540" cy="150" r="15" />
                  <circle cx="580" cy="200" r="15" />
                  <circle cx="660" cy="200" r="15" />
                  <circle cx="700" cy="150" r="15" />
                  <circle cx="780" cy="150" r="15" />

                  <circle cx="180" cy="50" r="15" />
                  <circle cx="220" cy="200" r="15" />
                  <circle cx="300" cy="200" r="15" />
                  <circle cx="340" cy="50" r="15" />
                  <circle cx="420" cy="50" r="15" />
                  <circle cx="460" cy="200" r="15" />
                  <circle cx="540" cy="100" r="15" />
                  <circle cx="580" cy="250" r="15" />
                  <circle cx="660" cy="250" r="15" />
                  <circle cx="700" cy="100" r="15" />

                  <circle cx="260" cy="50" r="15" />
                  <circle cx="620" cy="100" r="15" />
                </g>
              </svg>
            </div>

            <div className="relative z-10 max-w-lg">
              <h2 className="text-4xl md:text-5xl font-light text-white mb-8">
                Engineering Services That Power Industry
              </h2>
              <p className="text-white text-lg leading-relaxed mb-8">
                From power systems and HVAC installations to structural steel
                fabrication and epoxy flooring — we deliver turnkey
                electromechanical services with speed, safety, and precision.
                Whether upgrading infrastructure or building from the ground up,
                our team ensures quality at every stage.
              </p>
              <CustomButton variant="primary" link="/services">
                View All Products
              </CustomButton>
            </div>
          </div>

          {/* Manufacturing Panel */}
          <div className="relative px-8 py-16 overflow-hidden  flex flex-col justify-end md:h-142">
            <div className="absolute inset-0">
              <Image
                src="/images/cemrecan-yurtman-pun3UkaC5VY-unsplash.jpg"
                alt="Industrial warehouse and manufacturing facility"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-primary/60"></div>
            </div>

            <div className="relative z-10 max-w-lg">
              <h2 className="text-4xl md:text-5xl font-light text-white mb-8">
                Built to Spec. Manufactured to Last.
              </h2>
              <p className="text-white text-lg leading-relaxed mb-8">
                Our in-house manufacturing facility produces high-strength
                components essential for industrial and electrical
                infrastructure. All products are precision-engineered,
                galvanized to specification, and built for durability in
                demanding environments.
              </p>
              <CustomButton variant="primary" link="/products">
                Find out more
              </CustomButton>
            </div>
          </div>
        </div>
      </SectionCard>

      {/* Featured Products */}
      <FeaturedProductsCrousal
        featuredProducts={allProducts.filter(
          (product) => product.featured === true
        )}
      />

      {/* Global Reach Section */}
      <SectionCard variant="primary">
        <div>
          <SectionHeading variant="primary">
            {"Global Standards, Local Expertise"}
          </SectionHeading>
          <p className="text-lg text-white mb-6 leading-relaxed">
            While rooted in Ethiopia, HF Engineering applies international
            standards and best practices to deliver world-class
            electromechanical solutions. Our expertise spans across various
            industrial sectors, from power generation to telecommunications
            infrastructure.
          </p>
          <p className="text-lg text-white mb-8 leading-relaxed">
            We combine local knowledge with global engineering excellence to
            serve Ethiopia&apos;s growing industrial needs, partnering with
            international organizations and maintaining certifications that meet
            worldwide standards.
          </p>
          <CustomButton link="#">Discover more</CustomButton>
        </div>
        <ScewedImage
          imageUrl="/images/service-4.jpg"
          alt="Global Standards, Local Expertise"
          variant="left-scewed"
        />
      </SectionCard>

      {/* Recent Projects */}
      <RecentProjects />

      {/* Our Clients */}
      <Clients />

      {/* Work with Us */}
      <WorkWithUs />
    </div>
  );
}
