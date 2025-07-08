export const allProducts = [
  {
    id: 1,
    name: "Suspension 15kv",
    category: "Insulator",
    description:
      "Designed for medium-voltage overhead line applications, the 15kV suspension insulator ensures electrical isolation and mechanical support in distribution systems.",
    image: "/images/15kv-suspension-insulator.webp",
    type: "Insulator",
    features: [
      "High dielectric strength",
      "Weather and UV resistant material",
      "Easy installation with standard fittings",
    ],
    specification: {
      "Voltage Rating": "15kV",
      Material: "Porcelain or Composite",
      "Tensile Strength": ">=70kN",
      "Creepage Distance": ">=250mm",
    },
    featured: false,
  },
  {
    id: 2,
    name: "Suspension 33kv",
    category: "Insulator",
    description:
      "Used in high-voltage distribution lines, this 33kV suspension insulator offers superior strength and insulation for long-span overhead networks.",
    image: "/images/33kv-suspension-insulator.jpg",
    type: "Insulator",
    features: [
      "Designed for higher voltage tolerance",
      "Resistant to flashover and pollution",
      "Long service life under outdoor conditions",
    ],
    specification: {
      "Voltage Rating": "33kV",
      Material: "Porcelain or Polymer",
      "Tensile Strength": ">=90kN",
      "Creepage Distance": ">=400mm",
    },
    featured: true,
  },
  {
    id: 3,
    name: "Heavy Angle",
    category: "Angle",
    description:
      "A galvanized steel angle bracket used to support structural and load-bearing electrical fittings, crossarms, or pole-mounted systems.",
    image: "/images/heavy-angle-bracket.jpg",
    type: "Galvanized",
    features: [
      "Hot-dip galvanized for corrosion resistance",
      "Heavy-duty structural support",
      "Drilled for versatile mounting",
    ],
    specification: {
      Material: "Galvanized Steel",
      Thickness: "5-10mm",
      Angle: "90°",
      Coating: "Hot-dip galvanized (>=70μm)",
    },
    featured: false,
  },
  {
    id: 4,
    name: "T-Off Cross Arm",
    category: "Arm",
    description:
      "A rugged T-off cross arm used in pole-top construction to support conductors and hardware assemblies.",
    image: "/images/T-off-cross-arm.avif",
    type: "Galvanized",
    features: [
      "Designed for lateral branching from main lines",
      "Robust structural integrity",
      "Galvanized surface for longevity",
    ],
    specification: {
      Material: "Mild Steel",
      Finish: "Hot-dip galvanized",
      Length: "1200mm-1800mm",
      "Hole Pattern": "Universal",
    },
    featured: true,
  },
  {
    id: 5,
    name: "Transformer Seat",
    category: "Transformer Stracture",
    description:
      "A structural steel seat designed to securely hold pole-mounted transformers in distribution networks.",
    image: "/images/transformer-seat.png",
    type: "Galvanized",
    features: [
      "Stable base for transformer mounting",
      "Weatherproof galvanized construction",
      "Reinforced load-bearing design",
    ],
    specification: {
      Material: "Galvanized Steel",
      "Load Capacity": "Up to 1.5 tons",
      Dimensions: "Customizable",
      "Surface Finish": "Hot-dip galvanized",
    },
    featured: false,
  },
  {
    id: 11,
    name: "Transformer Base",
    category: "Transformer Stracture",
    description:
      "Structural base platform to support distribution transformers on pole structures.",
    image: "/images/transformer-base-steel-m201_590x600_0718.jpg",
    type: "Galvanized",
    features: [
      "Rigid base with secure anchoring points",
      "Engineered for transformer load bearing",
      "Corrosion protection for outdoor environments",
    ],
    specification: {
      Material: "Steel",
      Finish: "Hot-dip galvanized",
      "Load Capacity": "Up to 2 tons",
      Dimensions: "Variable/customizable",
    },
    featured: false,
  },
  {
    id: 6,
    name: "Tie Straps",
    category: "Strap",
    description:
      "Heavy-duty tie straps used for securing crossarms, insulators, and other components to poles.",
    image: "/images/tie-straps.png",
    type: "Galvanized",
    features: [
      "Pre-punched holes for easy installation",
      "Corrosion-resistant finish",
      "High tensile strength",
    ],
    specification: {
      Material: "Galvanized Steel",
      Length: "300mm-600mm",
      Width: "40-50mm",
      Thickness: "4-6mm",
    },
    featured: true,
  },
  {
    id: 7,
    name: "Pillars",
    category: "Pillar",
    description:
      "Steel pillars for supporting outdoor electrical equipment such as switchgear and terminal boxes.",
    image: "/images/pillars.jpg",
    type: "Steel",
    features: [
      "Load-bearing vertical support",
      "Available in various heights and profiles",
      "Durable outdoor finish",
    ],
    specification: {
      Material: "Steel",
      Height: "2-4 meters",
      "Cross-section": "Square or circular",
      Finish: "Powder coated or galvanized",
    },
    featured: false,
  },
  {
    id: 8,
    name: "Strain Clamp",
    category: "Clamp",
    description:
      "A mechanical connector designed to anchor conductors in tensioned lines, preventing slippage.",
    image: "/images/clamp.webp",
    type: "Galvanized",
    features: [
      "Strong clamping force",
      "Corrosion resistance under tension",
      "Compatible with ACSR or AAC conductors",
    ],
    specification: {
      Material: "Galvanized Steel",
      "Conductor Range": "16-95mm²",
      "Rated Load": "Up to 70kN",
    },
    featured: true,
  },
  {
    id: 9,
    name: "HT Pin",
    category: "Pin",
    description:
      "A high-tension insulator pin used to mount pin-type insulators on poles.",
    image: "/images/pin_20kit.webp",
    type: "Galvanized",
    features: [
      "Threaded top for insulator attachment",
      "Hot-dip galvanized for durability",
      "Standard dimensions for utility use",
    ],
    specification: {
      Material: "Galvanized Steel",
      Thread: '1" UNC',
      Length: "240mm-300mm",
      "Tensile Strength": ">=15kN",
    },
    featured: false,
  },
  {
    id: 10,
    name: "Collar",
    category: "Collar",
    description:
      "Galvanized steel collar used to reinforce pole fittings and distribute mechanical stress evenly.",
    image: "/images/collar.webp",
    type: "Galvanized",
    features: [
      "Clamps components firmly to poles",
      "Easy bolt-on installation",
      "Weather-resistant finish",
    ],
    specification: {
      Material: "Galvanized Steel",
      "Inner Diameter": "100-150mm",
      Thickness: "4-6mm",
      Coating: "Hot-dip galvanized",
    },
    featured: false,
  },
  {
    id: 12,
    name: "Aluminum Clamp",
    category: "Clamp",
    description:
      "Tension clamp made of high-strength aluminum alloy for connecting power cables under tension.",
    image:
      "/images/Aluminium-Alloy-Tension-Clamp-Strain-Clamp-Cable-Clamp.avif",
    type: "Aluminum",
    features: [
      "Lightweight and corrosion-resistant",
      "Suitable for ACSR, AAAC conductors",
      "Easy to install with secure grip",
    ],
    specification: {
      Material: "Aluminum Alloy",
      "Rated Tension": "40-70kN",
      "Conductor Size": "16-120mm²",
      Standard: "IEC/ANSI compliant",
    },
    featured: false,
  },
  {
    id: 13,
    name: "Earthing Rod",
    category: "Earthing",
    description:
      "Copper-bonded steel rod for safely grounding electrical systems, dissipating fault currents.",
    image: "/images/earthing-rod.jpeg",
    type: "Copper",
    features: [
      "High conductivity with corrosion resistance",
      "Pointed end for easy driving",
      "Low resistance to earth",
    ],
    specification: {
      Material: "Copper-bonded Steel",
      Diameter: "16mm",
      Length: "1.2m-3m",
      "Copper Thickness": ">=254 microns",
    },
    featured: false,
  },
  {
    id: 14,
    name: "Ball Eye",
    category: "Clamp",
    description:
      "Forged steel ball eye used in string insulator fittings for dead-end or suspension configurations.",
    image:
      "/images/galvanized_steel_ball_eye_large_rated_failure_load_range_70kn_550kn.webp",
    type: "Galvanized",
    features: [
      "High mechanical strength",
      "Secure interlocking with socket components",
      "Galvanized finish",
    ],
    specification: {
      Material: "Galvanized Forged Steel",
      "Rated Load": "70kN-550kN",
      "Pin Diameter": "16-20mm",
      Standard: "IEC/BS",
    },
    featured: true,
  },
  {
    id: 15,
    name: "Insulator Pin",
    category: "Pin",
    description:
      "Pin hardware for fixing insulators to crossarms or pole tops, designed for medium-voltage applications.",
    image: "/images/insulator-pin.jpg",
    type: "Galvanized",
    features: [
      "Threaded rod for insulator mounting",
      "Welded base or bolt-through design",
      "Galvanized for extended life",
    ],
    specification: {
      Material: "Mild Steel",
      Length: "200-300mm",
      "Thread Type": "ANSI standard",
      Coating: "Hot-dip galvanized",
    },
    featured: false,
  },
  {
    id: 16,
    name: "MV/LV Hook",
    category: "Hook",
    description:
      "A multipurpose hook used in medium and low-voltage overhead line installations to suspend cables or equipment.",
    image: "/images/MV:LV-hook.png",
    type: "Galvanized",
    features: [
      "Formed steel with galvanized coating",
      "Suitable for messenger wire or cable support",
      "Corrosion resistant",
    ],
    specification: {
      Material: "Galvanized Steel",
      "Hook Opening": "12-20mm",
      Mounting: "Bolt-on or clamp",
      Finish: "Hot-dip galvanized",
    },
    featured: false,
  },
];
