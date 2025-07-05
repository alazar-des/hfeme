import Image from "next/image";
import { SectionCard } from "./ui/section-card";
import { SectionHeading } from "./ui/section-heading";

interface Client {
  id: number;
  name: string;
  logo: string;
}

const clients: Client[] = [
  { id: 1, name: "Ethiopian Electric Utility", logo: "/images/eeu.png" },
  { id: 2, name: "Ethio Telecom", logo: "/images/etc.png" },
  { id: 3, name: "Power China", logo: "/images/power-china.jpg" },
  {
    id: 4,
    name: "Ethio Engineering Group",
    logo: "/images/EEG-New-Logo-1-1.jpg",
  },
  { id: 5, name: "OUID Group", logo: "/images/ouid-group.jpeg" },
];

export const Clients = () => {
  return (
    <SectionCard>
      <div className="text-center col-span-full">
        <SectionHeading>Our Clients</SectionHeading>
        <p className="text-[#6D6A70] text-lg leading-relaxed max-w-3xl mx-auto">
          We're proud to work with industry-leading companies who trust NCH
          Europe for their industrial maintenance and facilities management
          solutions.
        </p>
      </div>

      <div className="flex overflow-x-auto no-scrollbar justify-center no-scrollbar gap-4 lg:gap-12 items-center col-span-full">
        {clients.map((client) => (
          <div
            key={client.id}
            className="flex flex-col min-w-32 justify-center items-center transition-colors"
          >
            <Image
              src={client.logo || "/placeholder.svg"}
              alt={`${client.name} logo`}
              width={120}
              height={80}
              className="object-contain hover:grayscale-0 transition-all mb-3"
            />
          </div>
        ))}
      </div>
    </SectionCard>
  );
};
