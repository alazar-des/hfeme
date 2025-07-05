import Image from "next/image";
import { Button } from "./ui/button";
import { SectionCard } from "./ui/section-card";
import { SectionHeading } from "./ui/section-heading";
import { CustomButton } from "./ui/custom-button";

export const WorkWithUs = () => {
  return (
    <SectionCard>
      {/* Left Side - Text Content */}
      <div className="space-y-6">
        <SectionHeading>Partner With Us</SectionHeading>

        <p className="text-gray-600 text-lg leading-relaxed">
          We collaborate with trusted vendors, suppliers, and service providers
          who share our commitment to quality, reliability, and long-term
          impact. Let’s build lasting value together—one project, one
          partnership at a time.
        </p>
        <CustomButton variant="outline" link="/contact-us">
          Contact Us
        </CustomButton>
      </div>

      {/* Right Side - Staggered Images */}
      <div className="relative h-96 lg:h-[500px]">
        {/* Top Right - Industrial Worker */}
        <div
          className="absolute top-0 right-10 w-32 h-32 lg:w-48 lg:h-48 z-10"
          
        >
          <Image
            src="/images/image-5.jpg"
            alt="Industrial worker in tunnel"
            fill
            className=" shadow-lg object-cover"
          />
        </div>

        {/* Middle Left - Video Conference */}
        <div
          className="absolute top-32 left-0 w-48 h-32 lg:w-62 lg:h-48 z-20"
          style={{
            clipPath: "polygon(0 0, 100% 4%, 100% 96%, 0 100%)",
          }}
        >
          <Image
            src="/images/image-1.jpg"
            alt="Video conference meeting on laptop"
            fill
            className="shadow-lg object-cover"
          />
        </div>

        {/* Bottom Right - Team Meeting */}
        <div
          className="absolute bottom-10 right-0 w-56 h-40 lg:w-72 lg:h-56 z-30"
          style={{
            clipPath: "polygon(0 4%, 100% 0, 100% 100%, 0 96%)",
          }}
        >
          <Image
            src="/images/image-4.jpg"
            alt="Professional team meeting with hard hats and safety vests"
            fill
            className="shadow-lg object-cover"
          />
        </div>
      </div>
    </SectionCard>
  );
};
