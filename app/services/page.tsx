import { RecentProjects } from "@/components/recent-projects";
import { ServiceCard } from "@/components/service-card";

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[40svh] lg:h-[60svh] overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out z-0"
          style={{
            backgroundImage: `url('/images/resized-1200x800-image (1).jpg')`,
          }}
        />

        {/* Overlay */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(135deg, rgba(1, 119, 200, 0.7) 0%, rgba(1, 119, 200, 0.2) 100%)",
          }}
        />

        {/* Content*/}
        <div className="relative z-20 flex flex-col items-start justify-center gap-6 h-full px-6 md:px-48 md:w-[70%]">
          <h1 className="text-white text-4xl font-semibold">Our Services</h1>
          <h3 className="text-white text-xl font-meduim lg:block">
            Integrated solutions engineered for performance.
          </h3>
        </div>
      </section>

      <ServiceCard
        variant="secondary"
        heading="Power & Electrical Systems"
        content="Our electrical systems team delivers safe, efficient, and technically sound power solutions — from transformer setup and lighting installation to switch gear panels and power factor correction. We help you ensure a reliable power infrastructure that minimizes downtime, enhances safety, and meets regulatory standards."
        imageUrl="/images/service-1.jpg"
        alt="Industrial Product Manufacturing"
        actionButton="Learn More"
      />
      <ServiceCard
        heading="Solar Energy Solutions"
        content="We design and install cutting-edge solar power systems tailored to your energy needs. Our solutions include solar water pumping, solar street lighting, and complete solar power generation systems. Harness the sun's energy to reduce costs, improve sustainability, and achieve energy independence."
        imageUrl="/images/resized-1200x800-image (1).jpg"
        alt="Industrial Product Manufacturing"
        actionButton="Learn More"
      />
      <ServiceCard
        variant="secondary"
        heading="Mechanical Fabrication & Epoxy Coating"
        content="Our mechanical division fabricates structural steel, sheet metal, tanks, trailers, and custom industrial components with precision. We also deliver high-performance epoxy flooring and coating systems — ensuring durability, corrosion resistance, and a clean, safe industrial workspace."
        imageUrl="/images/service-3.jpg"
        alt="Industrial Product Manufacturing"
        actionButton="Learn More"
      />
      <ServiceCard
        heading="HVAC & Fire Protection Solutions"
        content="Our HVAC and fire safety experts specialize in the installation of advanced air conditioning systems, centralized HVAC, chillers, gas piping, and fire protection units. We create comfortable, controlled, and compliant environments that protect people and assets while maximizing energy efficiency."
        imageUrl="/images/service-2.jpg"
        alt="Industrial Product Manufacturing"
        actionButton="Learn More"
      />
      <ServiceCard
        variant="secondary"
        heading="Industrial Product Manufacturing"
        content="We manufacture essential components for power and distribution networks including transformer bases, cross arms, clamps, insulator pins, and more. Engineered with high-grade materials and galvanization, our products meet demanding industrial standards for strength, conductivity, and longevity."
        imageUrl="/images/service-4.jpg"
        alt="Industrial Product Manufacturing"
        actionButton="Learn More"
      />
      <RecentProjects />
    </div>
  );
}
