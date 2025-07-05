"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface FormData {
  fullName: string;
  companyName: string;
  emailAddress: string;
  phoneNumber: string;
  address: string;
  townCity: string;
  reasonForContacting: string;
  message: string;
  acceptPrivacy: boolean;
}

interface ContactFormProps {
  className?: string;
}

export const ContactForm = ({ className }: ContactFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    companyName: "",
    emailAddress: "",
    phoneNumber: "",
    address: "",
    townCity: "",
    reasonForContacting: "Demo",
    message: "",
    acceptPrivacy: false,
  });

  // Form handling
  const handleInputChange = (
    field: keyof FormData,
    value: string | boolean
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <h2 className="text-4xl md:text-5xl font-light text-primary mb-6">
              Make an Enquiry
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Please fill in our contact form and a member of our team will be
              in touch.
            </p>
            <form
              onSubmit={handleSubmit}
              className={cn("space-y-6", className)}
            >
              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full name{" "}
                  <span className="text-red-500 text-xs">*required</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  placeholder="Enter your full name here"
                  value={formData.fullName}
                  onChange={(e) =>
                    handleInputChange("fullName", e.target.value)
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary/80 focus:border-transparent"
                  required
                />
              </div>

              {/* Company Name */}
              <div>
                <label
                  htmlFor="companyName"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Company name{" "}
                  <span className="text-red-500 text-xs">*required</span>
                </label>
                <input
                  type="text"
                  id="companyName"
                  placeholder="Enter your company name"
                  value={formData.companyName}
                  onChange={(e) =>
                    handleInputChange("companyName", e.target.value)
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary/80 focus:border-transparent"
                  required
                />
              </div>

              {/* Email Address */}
              <div>
                <label
                  htmlFor="emailAddress"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email address{" "}
                  <span className="text-red-500 text-xs">*required</span>
                </label>
                <input
                  type="email"
                  id="emailAddress"
                  placeholder="Please enter your email address"
                  value={formData.emailAddress}
                  onChange={(e) =>
                    handleInputChange("emailAddress", e.target.value)
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary/80 focus:border-transparent"
                  required
                />
              </div>

              {/* Phone Number */}
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone number{" "}
                  <span className="text-red-500 text-xs">*required</span>
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  placeholder="Enter your phone number here"
                  value={formData.phoneNumber}
                  onChange={(e) =>
                    handleInputChange("phoneNumber", e.target.value)
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary/80 focus:border-transparent"
                  required
                />
              </div>

              {/* Address */}
              <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  placeholder="Please enter your address"
                  value={formData.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary/80 focus:border-transparent"
                />
              </div>

              {/* Town/City */}
              <div>
                <label
                  htmlFor="townCity"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Town/City
                </label>
                <input
                  type="text"
                  id="townCity"
                  placeholder="Please enter your town/city"
                  value={formData.townCity}
                  onChange={(e) =>
                    handleInputChange("townCity", e.target.value)
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary/80 focus:border-transparent"
                />
              </div>

              {/* Reason for Contacting */}
              <div>
                <label
                  htmlFor="reasonForContacting"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Reason for contacting{" "}
                  <span className="text-red-500 text-xs">*required</span>
                </label>
                <input
                  type="text"
                  id="reasonForContacting"
                  value={formData.reasonForContacting}
                  onChange={(e) =>
                    handleInputChange("reasonForContacting", e.target.value)
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary/80 focus:border-transparent"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message{" "}
                  <span className="text-red-500 text-xs">*required</span>
                </label>
                <textarea
                  id="message"
                  rows={6}
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/80 focus:border-transparent resize-none"
                  required
                />
              </div>

              {/* Privacy Statement */}
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="acceptPrivacy"
                  checked={formData.acceptPrivacy}
                  onChange={(e) =>
                    handleInputChange("acceptPrivacy", e.target.checked)
                  }
                  className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-primary"
                  required
                />
                <div>
                  <label
                    htmlFor="acceptPrivacy"
                    className="text-sm text-gray-700"
                  >
                    I have read and accept the privacy statement{" "}
                    <span className="text-red-500 text-xs">*required</span>
                  </label>
                  <p className="text-xs text-gray-500 mt-1">
                    You can find out about your rights and choices and how we
                    use your information in our{" "}
                    <a href="#" className="text-primary underline">
                      Privacy Statement
                    </a>
                    .
                  </p>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="default"
                size="lg"
                className="rounded-full px-10 py-7 "
              >
                Submit Enquiry
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-primary rounded-lg p-8 text-white h-fit">
              <div className="bg-white p-3 rounded mb-6 w-fit">
                <span className="text-primary font-bold text-2xl">HF EME</span>
              </div>

              <h3 className="text-2xl font-semibold mb-6">
                HF Electro Mechanical Engineering
              </h3>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5" />
                  <span>+251 911686078</span>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5" />
                  <span>+251 991606171</span>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5" />
                  <span>customer.services@hfeme.com</span>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5" />
                  <span>info@hfeme.com</span>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5" />
                  <span>sales@hfeme.com</span>
                </div>

                <div className="flex items-start space-x-3 mt-6">
                  <MapPin className="w-5 h-5 mt-1" />
                  <div>
                    <p>Ethiopia</p>
                    <p>Addis Ababa</p>
                    <p>Bole Subcuty</p>
                    <p>Worda 14</p>
                    <p>Alem Gebre Building Office No 502</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
