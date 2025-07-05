import { ContactForm } from "@/components/contact-form";

export default function ContactUsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[40svh] lg:h-[60svh] overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out z-0"
          style={{
            backgroundImage: `url('/images/image-4.jpg')`,
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
          <h1 className="text-white text-4xl font-semibold">Contact US</h1>
          <h3 className="text-white text-xl font-meduim lg:block">
            Let’s connect and power progress together.
          </h3>
        </div>
      </section>

      {/* Make an Enquiry Section */}

      <ContactForm />
    </div>
  );
}
