import { ProjectCard } from "./project-card";
import { Button } from "./ui/button";

export const RecentProjects = () => {
  return (
    <section className="bg-[#E7F1F6] py-32 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-start mb-12">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-light text-primary mb-6">
              Our Resent Projects
            </h2>
            <p className="text-[#6D6A70] text-lg leading-relaxed">
              Explore our latest engineering achievements and successful
              installations across power, HVAC, mechanical, and manufacturing
              projects. See how we bring precision and performance to every site
              we serve.
            </p>
          </div>
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-white rounded-full py-7 px-10 bg-transparent hidden md:flex"
          >
            See More
          </Button>
        </div>

        {/* Horizontally Scrollable Cards */}
        <div className="overflow-x-auto pb-4 no-scrollbar">
          <div className="flex space-x-6 w-max">
            <ProjectCard
              imageUrl="/images/image-320x200-3.jpg"
              title="T-off Cross Arm"
              description="Precision-manufactured T-off cross arms engineered for durability and strength, supporting efficient power distribution infrastructure across key utility projects."
              buttonText="View Detail"
              badgeText="Manufacturing"
              badgeColor="#004038"
            />
            <ProjectCard
              imageUrl="/images/image-320x200-4.jpg"
              title="Epoxy flooring"
              description="High-performance epoxy flooring installation providing industrial-grade protection, chemical resistance, and a seamless finish for heavy-duty operational environments."
              buttonText="View Detail"
              badgeText="Epoxy"
              badgeColor="#E37A00"
            />
            <ProjectCard
              imageUrl="/images/image-320x200-2.jpg"
              title="Air conditioning system installation"
              description="Complete installation of advanced air conditioning units, delivering reliable cooling, energy efficiency, and climate control for large commercial facilities."
              buttonText="View Detail"
              badgeText="HVAC"
              badgeColor="#009FA0"
            />
            <ProjectCard
              imageUrl="/images/image-320x200-1.jpg"
              title="33KV/15Kv Suspension"
              description="Production of galvanized 33KV suspension structures designed for high-voltage power lines, ensuring mechanical reliability and long-term performance in harsh conditions.]["
              buttonText="View Detail"
              badgeText="Manufacturing"
              badgeColor="#004038"
            />
            <ProjectCard
              imageUrl="/images/image-320x200.jpg"
              title="Addis Ababa Power Line Rehabilitation"
              description="Rehabilitation of aging power infrastructure in Addis Ababa, upgrading transmission lines and enhancing grid reliability to support growing urban energy demands."
              buttonText="View Detail"
              badgeText="Electrical"
              badgeColor="#B5002F"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
