"use client";

import { FileText, Lock, MoreHorizontal, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { SectionCard } from "./ui/section-card";

interface Certification {
  id: number;
  title: string;
  outcome: string;
  borderColor: string;
  image: string;
}

const certifications: Certification[] = [
  {
    id: 1,
    title: "MSc. Cybersecurity",
    outcome: "First Class",
    borderColor: "border-orange-400",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 2,
    title: "BA (Hons) Business Management",
    outcome: "Second Class (Upper Division)",
    borderColor: "border-orange-400",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 3,
    title: "A-Levels",
    outcome: "A",
    borderColor: "border-teal-400",
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 4,
    title: "Study Abroad Year",
    outcome: "GPA: 3.334",
    borderColor: "border-orange-400",
    image: "/placeholder.svg?height=400&width=300",
  },
];

export const Certification = () => {
  const [fullScreenImage, setFullScreenImage] = useState<string | null>(null);
  // Full screen image handling
  const openFullScreen = (imageUrl: string) => {
    setFullScreenImage(imageUrl);
  };

  const closeFullScreen = () => {
    setFullScreenImage(null);
  };

  return (
    <div>
      <SectionCard>
        <div className="text-center col-span-full">
          <h2 className="text-4xl md:text-5xl font-light text-blue-600 mb-6">
            Our Certifications
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
            Our team's professional qualifications and certifications
            demonstrate our commitment to excellence and continuous learning in
            industrial solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 col-span-full">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className={`bg-white rounded-lg shadow-lg overflow-hidden border-t-4 ${cert.borderColor} cursor-pointer hover:shadow-xl transition-shadow`}
              onClick={() => openFullScreen(cert.image)}
            >
              <div className="p-6">
                {/* Certificate Icon */}
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                    <FileText className="w-8 h-8 text-gray-600" />
                  </div>
                </div>

                {/* Certificate Content */}
                <div className="text-center mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    Outcome: {cert.outcome}
                  </p>
                </div>

                {/* Bottom Icons */}
                <div className="flex justify-between items-center">
                  <Lock className="w-4 h-4 text-gray-400" />
                  <MoreHorizontal className="w-4 h-4 text-gray-400" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionCard>
      {/* Full Screen Image Modal */}
      {fullScreenImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeFullScreen}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <Image
              src={fullScreenImage || "/placeholder.svg"}
              alt="Full screen certificate"
              width={800}
              height={600}
              className="object-contain max-w-full max-h-[90vh]"
            />
          </div>
        </div>
      )}
    </div>
  );
};
