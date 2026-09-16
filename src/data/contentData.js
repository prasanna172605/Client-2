// Accuquant Services - Data extracted and adapted accurately from mdsrebar.com

export const companyDetails = {
  name: "Accuquant Services",
  tagline: "The one stop destination for state of art Rebar detailing and estimation services",
  subTagline: "Serving structural engineers, fabricators, general contractors and designers globally",
  phoneUSA: "+91 90258 62539",
  phoneIndia: "+91 90258 62539",
  phoneDisplay: "+91 90258 62539",
  email: "info@accuquantservices.com",
  quoteEmail: "quotes@accuquantservices.com",
  address: "Trichy, Tamil Nadu, India & Global Delivery Centers",
  hours: "Mon - Sat: 8:00 AM - 7:00 PM EST",
  experienceYears: "10+",
  projectsCompleted: "650+",
  rebarTonnage: "180,000+",
  accuracyRate: "99.9%"
};

export const fourPillars = [
  {
    number: "01",
    title: "Accuracy",
    desc: "We utilize advanced computer-aided software (Tekla & RebarCAD) to develop accurate and comprehensive placing plans with required sections, eliminating re-work on site."
  },
  {
    number: "02",
    title: "Experienced",
    desc: "Seasoned team of senior rebar detailers and estimators with deep domain expertise in international detailing standards (ACI, CRSI, ASTM, BS 8666, RSIC)."
  },
  {
    number: "03",
    title: "Sustainability",
    desc: "Optimized cutting and bending schedules directly exported to automated shear lines, minimizing steel scrap, cost, and material wastage."
  },
  {
    number: "04",
    title: "Integrity",
    desc: "Uncompromising commitment to professional ethics, strict project timeline adherence, confidentiality, and dependable client support."
  }
];

export const servicesData = [
  {
    id: "01",
    slug: "rebar-detailing",
    tabTitle: "01 Rebar Detailing",
    title: "Rebar Detailing Services",
    image: "./images/service-rebar-detailing.jpg",
    shortDesc: "Comprehensive placing plans, shop drawings, and bar bending schedules (BBS) conforming to ACI & CRSI standards.",
    fullDesc: "At Accuquant Services, we utilize the latest computer-aided software to develop accurate and comprehensive placing plans with required Sections. Our detailers pride themselves in accuracy and adherence to project schedules. Once plans have approved, the cutting and bending details are directly transmitted electronically to our production system and it goes out to equipment. This streamlined process eliminates any additional data entry points and is the most efficient way of processing your order.",
    deliverables: [
      "Foundation & Footing Reinforcement Plans",
      "Columns, Shear Walls & Core Detailing",
      "Beams, Slabs & Post-Tensioned Shop Drawings",
      "Bar Bending Schedules (BBS) with Lap & Bend Details",
      "Electronic data transfer for automated fabrication machinery"
    ],
    software: ["Tekla Structures", "RebarCAD", "AutoCAD Rebar"]
  },
  {
    id: "02",
    slug: "rebar-estimating",
    tabTitle: "02 REBAR ESTIMATING",
    title: "Rebar Estimating & Take-Off",
    image: "./images/service-rebar-estimating.jpg",
    shortDesc: "Accurate material take-offs, tonnage summaries, and bidding estimates for fabricators and contractors.",
    fullDesc: "We provide precise rebar take-offs and tender estimation reports helping fabricators, contractors, and owners win bids competitively. Our detailed quantity breakdowns highlight bar sizes, accessories, wire mesh, couplers, and lap lengths, minimizing financial risk and procurement oversights.",
    deliverables: [
      "Complete Material Quantity Take-Off (MTO)",
      "Rebar Tonnage Breakdown by Size & Grade",
      "Accessories, Chairs, Tie Wires & Coupler Estimates",
      "Bid Tender Proposals with Scope Review",
      "Value Engineering Recommendations"
    ],
    software: ["RebarCAD Takeoff", "Bluebeam Revu", "ASA Software"]
  },
  {
    id: "03",
    slug: "concrete-estimation",
    tabTitle: "03 CONCRETE ESTIMATION",
    title: "Concrete Estimation & Formwork",
    image: "./images/service-concrete-estimation.jpg",
    shortDesc: "High precision concrete volume take-offs, formwork surface calculations, and excavation assessments.",
    fullDesc: "Our concrete takeoff experts assess civil and structural drawing sets to generate itemized volumetric concrete measurements. From deep pile caps and raft foundations to elevated post-tensioned decks and tilt-up panels, we cover the full structural envelope with rigorous verification.",
    deliverables: [
      "Concrete Cubic Yard / Volume Quantification",
      "Formwork Surface Area Calculations (SFCA)",
      "Grade Beams, Slabs-on-Grade & Elevated Slabs",
      "Retaining Walls, Parapets & Precast Elements",
      "Detailed Measurement Sheets (Excel & PDF)"
    ],
    software: ["PlanSwift", "Bluebeam Revu", "AutoCAD"]
  },
  {
    id: "04",
    slug: "bim-3d-rebar",
    tabTitle: "04 BIM – 3D Rebar",
    title: "BIM – 3D Rebar Modeling",
    image: "./images/service-bim-3d.jpg",
    shortDesc: "Intelligent 3D rebar modeling, automated clash detection with MEP systems, and erection simulation.",
    fullDesc: "We construct data-rich LOD 300 to LOD 400 3D reinforcement models inside Tekla Structures and Revit. This ensures zero clash with mechanical, electrical, and plumbing (MEP) conduits, embedded steel plates, and prestressing tendons before a single bar is cut.",
    deliverables: [
      "3D Reinforcement Modeling (LOD 300 - 400)",
      "Clash Detection with MEP & Structural Elements",
      "Constructability & Erection Phasing Simulations",
      "IFC & BVBS Data Exports for Automated Benders",
      "3D Visual Walkthroughs & Coordination Meetings"
    ],
    software: ["Tekla Structures", "Autodesk Revit", "Navisworks"]
  },
  {
    id: "05",
    slug: "cad-drafting",
    tabTitle: "05 CAD Drafting",
    title: "CAD Drafting & Structural Services",
    image: "./images/service-cad-drafting.jpg",
    shortDesc: "Professional 2D/3D CAD drafting, paper-to-CAD conversions, and structural engineering documentation.",
    fullDesc: "Accuquant Services provides dependable CAD drafting solutions for engineering firms, architects, and industrial clients. We transform schematic designs, sketches, and redlines into publication-ready structural working drawings with strict layer management.",
    deliverables: [
      "2D Structural Working & General Arrangement Drawings",
      "Paper / PDF to AutoCAD Layer-Conformant Conversion",
      "As-Built Documentation & Record Drawings",
      "Standard Detail Sheets & Connection Libraries",
      "Rapid Revision & Redline Turnaround"
    ],
    software: ["AutoCAD", "MicroStation", "DraftSight"]
  }
];

export const projectsData = [
  {
    id: "301-east",
    title: "301 EAST",
    category: "Residential",
    image: "./images/project-301-east.jpg",
    location: "New York, NY",
    tonnage: "850 Tons",
    scope: "Complete Rebar Detailing, Foundation Raft & Shear Wall Schedules",
    software: "Tekla Structures & AutoCAD",
    desc: "Multi-story luxury residential tower requiring intricate shear wall rebar scheduling, tight coupler arrangements, and crane erection sequences."
  },
  {
    id: "500-west",
    title: "500 WEST",
    category: "Commercial",
    image: "./images/project-500-west.jpg",
    location: "Manhattan, New York",
    tonnage: "1,400 Tons",
    scope: "Rebar Estimation, Shop Drawings & Automated BBS Export",
    software: "RebarCAD & Tekla Structures",
    desc: "Class-A commercial tower featuring deep basement diaphragm walls, heavy grade beams, and composite slab reinforcement."
  },
  {
    id: "atlantic-station",
    title: "Atlantic Station",
    category: "Infrastructure",
    image: "./images/project-atlantic-station.jpg",
    location: "Atlanta, GA",
    tonnage: "2,100 Tons",
    scope: "3D BIM Rebar Modeling & Structural Detailing",
    software: "Tekla Structures & Navisworks",
    desc: "Mixed-use transit infrastructure development requiring 3D clash coordination between high-density reinforcement cages and transit utility corridors."
  },
  {
    id: "larkin-plaza",
    title: "Larkin-Plaza",
    category: "Commercial",
    image: "./images/project-larkin-plaza.jpg",
    location: "Yonkers, NY",
    tonnage: "950 Tons",
    scope: "Rebar Detailing, Pile Caps, Grade Beams & Podium Slabs",
    software: "AutoCAD & RebarCAD",
    desc: "Riverfront mixed-use development with complex geotechnical foundations, pile caps, and cast-in-place architectural concrete structures."
  },
  {
    id: "valley-avenue",
    title: "VALLEY AVENUE",
    category: "Infrastructure",
    image: "./images/project-valley-avenue.jpg",
    location: "California, USA",
    tonnage: "1,850 Tons",
    scope: "Heavy Civil Detailing, Bridge Abutments & Pier Bents",
    software: "Tekla Structures & RebarCAD",
    desc: "Transportation viaduct and overpass expansion project designed to Caltrans and AASHTO seismic reinforcement specifications."
  }
];

export const testimonialsData = [
  {
    id: 1,
    quote: "Thank-you for sticking to the schedule, it is appreciated!",
    author: "Hillary Rodriguez",
    role: "Senior Project Manager",
    company: "Apex Construction Group",
    rating: 5
  },
  {
    id: 2,
    quote: "Accuquant Services has always worked consistently and diligently to serve our company’s needs and project timelines. With their shop drawings, our company is able to clearly see the quantity, description, placement, bending shapes with dimensions and laps of the reinforcing steel for our project needs. The team at Accuquant Services is detailed oriented and have consistently delivered on our projects that span the New York Metropolitan Area.",
    author: "Annette",
    role: "Lead Structural Engineer",
    company: "Metro Steel Fabricators, NY",
    rating: 5
  },
  {
    id: 3,
    quote: "Quick + Accurate + Best service = Accuquant Services. Highly recommended for heavy commercial detailing.",
    author: "Usher",
    role: "Fabrication Director",
    company: "Tri-State Reinforcing",
    rating: 5
  },
  {
    id: 4,
    quote: "On-site support and quick turnaround on revisions are excellent. Their detailers understand jobsite constraints thoroughly.",
    author: "Mr. Surulirajan",
    role: "Project Manager",
    company: "Global Infrastructure Ltd.",
    rating: 5
  }
];

export const codesAndStandards = [
  { code: "ACI 318", name: "American Concrete Institute (Building Code for Structural Concrete)" },
  { code: "CRSI Manual", name: "Concrete Reinforcing Steel Institute (Standard Practice)" },
  { code: "ASTM Standards", name: "ASTM A615 / A706 Deformed Billet-Steel Bars" },
  { code: "BS 8666", name: "British Standards for Scheduling, Dimensioning & Bending" },
  { code: "RSIC", name: "Reinforcing Steel Institute of Canada Manual" },
  { code: "Eurocode 2", name: "Design of Concrete Structures (EN 1992)" }
];
