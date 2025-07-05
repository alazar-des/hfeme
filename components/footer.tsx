import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Footer() {
  const companyProducts = [
    "Transformer Bases",
    "Cross Arms",
    "Strain Clamps",
    "Insulator Pins",
    "Guy Wire Accessories",
    "Pole Hardware",
  ];

  const usefulWebsites = [
    "Ethiopian Electric Utility",
    "Ethio Telecom",
    "Ministry of Water & Energy",
    "Ethiopian Standards Agency",
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-8 bg-white rounded flex items-center justify-center">
                <span className="text-primary font-bold text-sm">HF</span>
              </div>
              <span className="text-xl font-medium">
                Industrial solutions since 2009
              </span>
            </div>
            <p className="text-blue-100 text-sm leading-relaxed mb-6">
              Leading electromechanical engineering and manufacturing firm
              serving Ethiopia's industrial sector with innovative, sustainable
              solutions.
            </p>
            <Button className="bg-white text-primary hover:bg-gray-100 text-sm px-4 py-2 cursor-pointer">
              Contact HF Engineering
            </Button>
          </div>

          {/* Company Products */}
          <div>
            <h3 className="text-xl font-medium mb-6">Company Products</h3>
            <ul className="space-y-3">
              {companyProducts.map((product) => (
                <li key={product}>
                  <Link
                    href="/products"
                    className="text-blue-100 hover:text-white transition-colors text-sm"
                  >
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Websites */}
          <div>
            <h3 className="text-xl font-medium mb-6">Useful websites</h3>
            <ul className="space-y-3">
              {usefulWebsites.map((website) => (
                <li key={website}>
                  <Link
                    href="#"
                    className="text-blue-100 hover:text-white transition-colors text-sm"
                  >
                    {website}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-medium mb-6">Contact</h3>
            <div className="space-y-3 text-sm text-blue-100">
              <p>HF Electromechanical Engineering PLC</p>
              <p>
                A.A Bole Subcity, Woreda 14
                <br />
                Alem Gebre Building, Office 502
                <br />
                Addis Ababa, Ethiopia
              </p>
              <p>
                Phone: +251 911 686 078
                <br />
                Phone: +251 991 606 171
              </p>
              <p>Email: hf4engineering@gmail.com</p>

              <div className="flex space-x-3 pt-4">
                <div className="w-8 h-8 bg-white  rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">f</span>
                </div>
                <div className="w-8 h-8 bg-white  rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">in</span>
                </div>
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">@</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#7ebae1a0] mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-blue-100">
            <div className="mb-4 md:mb-0">
              © {new Date().getFullYear()} HF Electromechanical Engineering PLC.
              All rights reserved.
            </div>
            <div className="flex items-center space-x-4">
              <span>A member of the Ethiopian Engineering Federation</span>
              <div className="w-8 h-6 bg-white rounded flex items-center justify-center">
                <span className="text-blue-600 text-xs font-bold">EEF</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
