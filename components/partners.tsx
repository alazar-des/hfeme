import Image from "next/image";
import { SectionCard } from "./ui/section-card";
import { SectionHeading } from "./ui/section-heading";

interface Partner {
  id: number;
  name: string;
  logo: string;
}

const partners: Partner[] = [
  { id: 1, name: "HAST Enterprise", logo: "/images/hast.jpeg" },
  { id: 2, name: "kadisco Paints", logo: "/images/kadisco.jpeg" },
  { id: 3, name: "Abyssinia", logo: "/images/abyssinia.jpg" },
  { id: 4, name: "Africon Real Estate", logo: "/images/africon-logo-01.webp" },
];

export const Partners = () => {
  return (
    <SectionCard className="">
      <div className="text-center col-span-full">
        <SectionHeading>Our Partners</SectionHeading>
        <p className="text-[#6D6A70] text-lg leading-relaxed max-w-3xl mx-auto">
          Strategic partnerships with technology leaders enable us to deliver
          cutting-edge solutions and maintain our position at the forefront of
          industrial innovation.
        </p>
      </div>

      <div className="flex overflow-x-auto justify-center no-scrollbar gap-4 lg:gap-12 items-center col-span-full">
        {partners.map((partner) => (
          <div
            key={partner.id}
            className="flex flex-col min-w-24 justify-center items-center p-4 rounded-lg transition-colors"
          >
            <Image
              src={partner.logo || "/placeholder.svg"}
              alt={`${partner.name} logo`}
              width={120}
              height={80}
              className="object-contain filter transition-all mb-3"
            />
          </div>
        ))}
      </div>
    </SectionCard>
  );
};
