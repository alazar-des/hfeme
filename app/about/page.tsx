import { Certification } from "@/components/certification";
import { ContactForm } from "@/components/contact-form";
import { Partners } from "@/components/partners";
import { Card, CardContent } from "@/components/ui/card";
import { CustomButton } from "@/components/ui/custom-button";
import { ScewedImage } from "@/components/ui/scewed-image";
import { SectionCard } from "@/components/ui/section-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { ArrowRight, Award, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

export default function AboutUsPage() {
  const faqs = [
    {
      question: "How can I get in touch with the HF team?",
      answer:
        "You can contact us through our contact page, email, or phone. We're always ready to discuss your engineering needs.",
    },
    {
      question: "How long have you been in business?",
      answer:
        "HF Engineering has been serving Ethiopia's industrial sector for over 15 years, since 2009.",
    },
    {
      question: "How can I get a quote for Safety Data Sheets?",
      answer:
        "Contact our technical team with your specific requirements, and we'll provide comprehensive safety documentation.",
    },
    {
      question: "Where is HF Engineering based?",
      answer:
        "We are based in Addis Ababa, Ethiopia, with our head office in Bole Subcity and manufacturing facilities in the industrial zone.",
    },
    {
      question: "Do you provide training and technical support?",
      answer:
        "Yes, we provide comprehensive training and ongoing technical support for all our solutions and products.",
    },
    {
      question: "What are your quality standards?",
      answer:
        "We maintain ISO 9001:2015 certification and follow international quality standards in all our operations.",
    },
    {
      question: "How big is HF Engineering?",
      answer:
        "We have over 50 expert engineers and technicians serving clients across Ethiopia's industrial sector.",
    },
    {
      question: "Can I request a site visit or consultation?",
      answer:
        "We offer on-site consultations and technical assessments for all potential projects.",
    },
  ];
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[40svh] lg:h-[60svh] overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out z-0"
          style={{
            backgroundImage: `url('/images/image-1.jpg')`,
          }}
        />

        {/* Overlay */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(135deg, rgba(1, 113, 188, 0.7) 0%, rgba(1, 113, 188, 0.2) 100%)",
          }}
        />

        {/* Content*/}
        <div className="relative z-20 flex flex-col items-start justify-center gap-6 h-full px-6 md:px-48 md:w-[70%]">
          <h1 className="text-white text-4xl font-semibold">Who Are We</h1>
          <h3 className="text-white text-xl font-meduim block">
            Driven by engineering excellence and built on trust.
          </h3>
        </div>
      </section>

      {/* Global Reach Section */}
      <SectionCard>
        <div>
          <SectionHeading>{"Global Standards, Local Expertise"}</SectionHeading>
          <p className="text-lg text-[#6D6A70] mb-6 leading-relaxed">
            While rooted in Ethiopia, HF Engineering applies international
            standards and best practices to deliver world-class
            electromechanical solutions. Our expertise spans across various
            industrial sectors, from power generation to telecommunications
            infrastructure.
          </p>
          <p className="text-lg text-[#6D6A70] mb-8 leading-relaxed">
            We combine local knowledge with global engineering excellence to
            serve Ethiopia's growing industrial needs, partnering with
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

      {/* Success Through Science */}
      <SectionCard className="py-20 bg-gray-50">
        <div className="relative aspect-[4/3] overflow-hidden hidden md:block">
          <Image
            src="/images/spencer-davis-QTKwYmMumfk-unsplash.jpg"
            alt="Inovation"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="bg-primary text-white p-8 lg:p-12">
          <SectionHeading variant="primary">
            Success through science
          </SectionHeading>
          <p className="text-lg mb-6 leading-relaxed text-blue-100">
            Our engineering approach is grounded in scientific principles and
            rigorous testing. Every solution we develop undergoes comprehensive
            analysis to ensure optimal performance, safety, and longevity.
          </p>
          <p className="text-lg mb-8 leading-relaxed text-blue-100">
            From electrical system design to HVAC optimization, we leverage
            advanced engineering methodologies and cutting-edge technology to
            deliver solutions that exceed expectations.
          </p>
          <CustomButton link="#" variant="primary">
            Learn more
          </CustomButton>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden md:hidden block">
          <Image
            src="/images/spencer-davis-QTKwYmMumfk-unsplash.jpg"
            alt="Inovation"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </SectionCard>

      {/* HF Engineering Overview */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <SectionHeading variant="primary">HF Engineering</SectionHeading>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              As Ethiopia's leading electromechanical engineering firm, we
              specialize in comprehensive industrial solutions that power the
              nation's growth and development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="min-h-56 bg-[#147fd6] shadow-lg p-6 mb-6">
                <h3 className="text-2xl font-bold mb-4">Our Purpose</h3>
                <div>
                  <span className="leading-relaxed font-semibold">
                    To empower progress through reliable, efficient, and
                    future-ready engineering solutions.
                  </span>{" "}
                  <span className="text-blue-100 leading-relaxed">
                    We deliver precision manufacturing and industrial services
                    that enable our clients to build and operate essential
                    infrastructure across Ethiopia and beyond.
                  </span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="min-h-56 bg-[#147fd6] shadow-lg p-6 mb-6">
                <h3 className="text-2xl font-bold mb-4">Our Ambition</h3>
                <div>
                  <span className="leading-relaxed font-semibold">
                    To be the region’s most trusted and innovative
                    electromechanical partner.
                  </span>{" "}
                  <span className="text-blue-100 leading-relaxed">
                    Committed to environmentally responsible practices,
                    energy-efficient solutions, and sustainable manufacturing
                    processes that benefit Ethiopia's future.
                  </span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="min-h-56 bg-[#147fd6] shadow-lg p-6 mb-6">
                <h3 className="text-2xl font-bold mb-4">Our Commitments</h3>
                <div>
                  <span className="leading-relaxed font-semibold">
                    We operate with purpose, deliver with precision, and grow
                    with integrity.
                  </span>{" "}
                  <span className="text-blue-100 leading-relaxed">
                    Our work is guided by principles that ensure every project
                    reflects our dedication to quality, accountability, and
                    long-term impact.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Products */}
      <SectionCard>
        <div>
          <SectionHeading>Our Products</SectionHeading>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            HF Engineering manufactures a comprehensive range of electrical
            infrastructure components and industrial equipment. From transformer
            bases and cross arms to custom fabricated solutions, our products
            meet the highest quality standards.
          </p>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            All our products undergo rigorous testing and quality control
            processes, ensuring reliability and longevity in Ethiopia's
            demanding industrial environments.
          </p>
          <CustomButton link="/products">Discover Products</CustomButton>
        </div>
        <div className="bg-gray-200 h-80 flex items-center justify-center">
          <div className="text-center">
            <Award className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">Quality Manufacturing</p>
          </div>
        </div>
      </SectionCard>

      {/* Our Partners */}
      <Partners />

      {/* FAQ Section */}
      <SectionCard>
        <div className="text-center col-span-full">
          <SectionHeading>FAQ</SectionHeading>
          <p className="text-lg text-gray-600">
            Frequently asked questions about our services, products, and company
            operations.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4 col-span-full">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className="border-0 shadow-sm hover:shadow-md transition-shadow rounded-none"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900 flex-1">
                    {faq.question}
                  </h3>
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center ml-4">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </div>
                <p className="text-gray-600 mt-3 leading-relaxed">
                  {faq.answer}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionCard>

      {/* Contact Us Section*/}
      <SectionCard className="bg-accent">
        <div className="col-span-full ">
          <ContactForm className="col-span-full" />
        </div>
      </SectionCard>
    </div>
  );
}
