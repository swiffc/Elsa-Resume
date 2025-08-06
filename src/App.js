import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, User, Briefcase, FolderOpen, Award, MessageCircle, Download, Mail, Phone, MapPin, Calendar, ChevronRight, Wrench, Zap, Globe, CheckCircle, TrendingUp, Users, Award as AwardIcon, Target, Lightbulb, Settings, ChevronLeft, Building, ArrowLeftRight, ExternalLink, Shield } from 'lucide-react';
import { clsx } from 'clsx';
const projectData = {
    elsa: [
        {
            id: "international-energy-operations",
            title: "International Energy Sector Operations - West Africa",
            description: "Executed critical engineering operations in Equatorial Guinea's energy sector, demonstrating expertise in international project management and cross-cultural engineering collaboration essential for global oil and gas operations.",
            category: "International Energy Operations",
            technologies: ["International Project Management", "Cross-Cultural Engineering", "Energy Sector Operations", "Risk Assessment", "Regulatory Compliance"],
            impact: "Proven international energy sector experience • Cross-cultural engineering leadership • Global operations expertise",
            highlights: [
                "Successfully operated in West Africa's energy sector, gaining invaluable experience in international oil and gas markets",
                "Demonstrated cultural adaptability and engineering excellence in challenging international environments",
                "Developed expertise in international regulatory compliance and safety standards critical for global energy operations",
                "Built strong foundation in international project coordination essential for multinational energy companies",
                "Gained firsthand understanding of global energy infrastructure and operational challenges",
                "Established proven track record of delivering results in complex international engineering environments"
            ],
            timeline: "2018 - Present",
            client: "International Energy Sector - Equatorial Guinea"
        },
        {
            id: "ut-tyler-foundation",
            title: "Engineering Excellence Through UT Tyler Education",
            description: "Leveraged comprehensive mechanical engineering education from University of Texas at Tyler to build strong foundation in quality systems, manufacturing processes, and technical problem-solving.",
            category: "Educational Foundation & Professional Development",
            technologies: ["Mechanical Engineering Principles", "Quality Systems", "Manufacturing Processes", "Technical Analysis", "Problem Solving"],
            impact: "Strong engineering foundation • Comprehensive technical knowledge • Practical application skills",
            highlights: [
                "Completed rigorous mechanical engineering curriculum at respected Texas engineering program",
                "Mastered fundamental engineering principles in thermodynamics, materials science, and manufacturing",
                "Developed strong analytical and problem-solving skills applicable across quality and manufacturing roles",
                "Built solid foundation in quality control systems enabling immediate professional contribution",
                "Gained comprehensive understanding of manufacturing processes supporting continuous improvement initiatives"
            ],
            timeline: "4 years",
            client: "University of Texas at Tyler"
        },
        {
            id: "industrial-quality-systems",
            title: "Industrial Quality Systems & Regulatory Compliance",
            description: "Engineered comprehensive quality control systems for industrial manufacturing operations, implementing rigorous inspection protocols and regulatory compliance frameworks essential for oil and gas industry standards.",
            category: "Quality Systems & Regulatory Compliance",
            technologies: ["Quality Management Systems", "Regulatory Compliance", "Precision Measurement", "Industrial Standards", "Safety Protocols"],
            impact: "99.8% quality compliance achieved • Zero safety incidents • Regulatory excellence",
            highlights: [
                "Achieved 99.8% quality compliance rate through systematic implementation of industrial quality standards",
                "Developed comprehensive regulatory compliance documentation meeting stringent industry requirements",
                "Implemented precision measurement protocols ensuring accuracy critical for high-stakes industrial operations",
                "Established robust safety and quality protocols preventing non-conforming products from reaching operations",
                "Coordinated cross-functional teams to optimize quality workflows and maintain operational excellence",
                "Executed calibration audits and measurement system validation essential for critical industrial applications"
            ],
            timeline: "1.5 years (2017-2018)",
            client: "AmTex Machine Products - Industrial Operations"
        },
        {
            id: "process-optimization-excellence",
            title: "Industrial Process Optimization & Operational Excellence",
            description: "Spearheaded comprehensive process optimization initiatives using Lean Six Sigma methodologies, delivering substantial operational improvements and cost reductions critical for competitive industrial operations.",
            category: "Process Excellence & Operational Efficiency",
            technologies: ["Lean Six Sigma Green Belt", "Process Analysis", "Operational Excellence", "Cost Optimization", "Performance Metrics"],
            impact: "15% production capacity improvement • 25% waste reduction • Significant cost savings",
            highlights: [
                "Achieved 15% improvement in production capacity through systematic process analysis and optimization",
                "Reduced operational waste by 25% through implementation of Lean methodologies and continuous improvement",
                "Delivered significant cost savings through elimination of process inefficiencies and bottlenecks",
                "Enhanced equipment reliability and reduced downtime through predictive maintenance protocols",
                "Established performance metrics and reporting systems enabling data-driven operational decisions",
                "Implemented root cause analysis procedures preventing recurring operational issues"
            ],
            timeline: "2 years",
            client: "Diamond Blocks Services - Process Engineering"
        },
        {
            id: "reliability-safety-systems",
            title: "Reliability Engineering & Safety-Critical Systems",
            description: "Developed and implemented reliability engineering protocols and safety-critical quality systems essential for high-stakes industrial operations where failure is not an option.",
            category: "Reliability Engineering & Safety Systems",
            technologies: ["Reliability Engineering", "Safety-Critical Systems", "Failure Analysis", "Risk Assessment", "Quality Assurance"],
            impact: "Zero critical failures • 99.9% reliability achieved • Exceptional safety record",
            highlights: [
                "Achieved zero critical failures through implementation of robust reliability engineering protocols",
                "Maintained 99.9% system reliability through systematic quality assurance and preventive measures",
                "Developed comprehensive failure analysis procedures preventing costly operational disruptions",
                "Implemented safety-critical quality systems ensuring operational integrity in high-stakes environments",
                "Established risk assessment protocols identifying and mitigating potential failure modes before occurrence",
                "Created comprehensive documentation systems supporting regulatory compliance and operational excellence"
            ],
            timeline: "2 years",
            client: "AmTex Machine Products - Critical Systems"
        }
    ]
};
// Add academic and personal projects for Elsa
const academicProjects = {
    wife: [
        {
            id: "senior-design-project",
            title: "Manufacturing Process Optimization - Senior Design Project",
            description: "Led team capstone project focused on optimizing manufacturing workflow efficiency using Lean principles and data analysis, achieving measurable improvements in theoretical production scenarios.",
            category: "Academic Engineering Excellence",
            technologies: ["Lean Manufacturing", "Process Analysis", "Data Collection", "CAD Design", "Team Leadership"],
            impact: "Academic excellence demonstrated • Team leadership experience • Process optimization focus • Top project recognition",
            highlights: [
                "Led cross-functional team of 4 engineering students in comprehensive capstone project",
                "Applied Lean manufacturing principles to identify and eliminate waste in production processes",
                "Conducted detailed time-motion studies and statistical analysis of manufacturing workflows",
                "Designed improved process layout using CAD software resulting in theoretical efficiency gains",
                "Presented findings to industry panel receiving recognition for practical application potential"
            ],
            timeline: "2 semesters",
            client: "UT Tyler Engineering Department"
        },
        {
            id: "internship-quality-systems",
            title: "Quality Systems Implementation Internship",
            description: "Completed engineering internship focused on quality control systems and process improvement, gaining hands-on experience with industrial manufacturing environments.",
            category: "Engineering Internship Experience",
            technologies: ["Quality Control", "ISO Standards", "Statistical Process Control", "Measurement Systems", "Documentation"],
            impact: "Hands-on industry experience • Quality systems knowledge • Process improvement skills",
            highlights: [
                "Implemented quality control procedures following ISO standards and best practices",
                "Assisted in statistical process control data collection and analysis initiatives",
                "Learned precision measurement techniques using industrial calibration equipment",
                "Developed technical documentation for quality assurance procedures",
                "Collaborated with experienced engineers gaining valuable mentorship and industry insights"
            ],
            timeline: "Summer internship",
            client: "Manufacturing Partner Company"
        },
        {
            id: "engineering-competition",
            title: "Regional Engineering Design Competition",
            description: "Participated in regional engineering competition designing cost-effective solutions for real-world manufacturing challenges, demonstrating innovative problem-solving abilities.",
            category: "Engineering Competition & Innovation",
            technologies: ["Engineering Design", "Cost Analysis", "Project Management", "Presentation Skills", "Innovation"],
            impact: "Competitive recognition earned • Innovation skills demonstrated • Problem-solving excellence",
            highlights: [
                "Designed innovative engineering solution for complex manufacturing challenge within budget constraints",
                "Conducted comprehensive cost-benefit analysis comparing multiple design alternatives",
                "Managed project timeline and deliverables ensuring competition deadline compliance",
                "Presented technical solution to panel of industry experts demonstrating communication skills",
                "Achieved regional recognition for creative approach to engineering problem-solving"
            ],
            timeline: "6 months",
            client: "Texas Engineering Society"
        }
    ]
};
// Portfolio Data
const profiles = {
    david: {
        name: "David Cornealius",
        title: "Senior Mechanical Designer",
        email: "DavidCornealius@gmail.com",
        phone: "832-584-1634",
        location: "Houston, TX",
        summary: "Innovative and detail-oriented Mechanical Design Engineer with over 15 years of experience in the design and development of mechanical systems. Proven track record in leading projects from concept through to production, with a strong focus on sustainability and efficiency. Seeking to leverage expertise in CAD software and project management to contribute to cutting-edge projects.",
        avatar: "DC",
        profileImage: "/david-profile.jpg",
    },
    wife: {
        name: "Elsa Nlang Monsuy",
        title: "Mechanical Engineer",
        email: "elsamonsuy@yahoo.com",
        phone: "(713) 820-2968",
        location: "Houston, TX",
        summary: "Passionate Mechanical Engineer who thrives on solving complex challenges and bringing innovative ideas to life. As a proud 2019 UT Tyler graduate, I've had the incredible opportunity to manage multi-million dollar construction projects across West Africa, where I discovered my love for leading diverse, international teams. I'm energized by the intersection of technical precision and creative problem-solving – whether I'm optimizing manufacturing processes with Lean Six Sigma or designing solutions in CAD. Being trilingual has opened doors to meaningful collaborations across cultures, and I bring both fresh engineering insights and real-world grit to every project I tackle.",
        avatar: "EN",
        profileImage: "/elsa-profile.jpg",
    }
};
const allExperiences = {
    david: [
        {
            id: "chart-industries",
            company: "Chart Industries (Hudson Products)",
            position: "Senior Mechanical Designer",
            location: "New York, NY",
            startDate: "Sep 2019",
            endDate: "Present",
            logo: "🏭",
            color: "blue",
            description: [
                "• Led design innovation for high-efficiency gas compression systems, delivering significant efficiency improvements that reduced client operational costs",
                "• Spearheaded 30+ mechanical design projects using SolidWorks and AutoCAD, streamlining development workflows and accelerating project delivery timelines",
                "• Drove cross-functional collaboration with process engineers, ensuring full ASME compliance while maintaining project schedules through systematic design reviews",
                "• Implemented advanced CFD analysis techniques that optimized flow patterns, resulting in measurable reductions in compression power requirements",
                "• Mentored team of 5 junior engineers, establishing design standards that improved team productivity and reduced design iterations significantly"
            ],
            technologies: ["SolidWorks", "AutoCAD", "CFD Analysis", "HTRI", "PV Elite", "ASME Standards", "Project Leadership"]
        },
        {
            id: "inova-geophysical",
            company: "Inova Geophysical",
            position: "Senior Mechanical Designer",
            location: "Sugar Land, TX",
            startDate: "Oct 2018",
            endDate: "Sep 2019",
            logo: "🌊",
            color: "teal",
            description: [
                "• Delivered substantial cost savings by redesigning seismic vehicle components, reducing manufacturing costs while significantly improving product durability",
                "• Revolutionized design automation processes, shortening development cycles and enabling faster prototype delivery for critical client projects",
                "• Created comprehensive technical documentation that streamlined manufacturing processes, reducing assembly time and minimizing assembly errors",
                "• Established strategic supplier partnerships, optimizing material selection and ensuring compliance with industry standards while negotiating cost reductions",
                "• Implemented rigorous quality control protocols that achieved excellent delivery performance with minimal defects during tenure"
            ],
            technologies: ["SolidWorks", "Manufacturing Optimization", "Cost Engineering", "Supplier Management", "Quality Control"]
        },
        {
            id: "kbr",
            company: "KBR",
            position: "Senior Mechanical Designer",
            location: "Houston, TX",
            startDate: "May 2014",
            endDate: "Oct 2018",
            logo: "⚙️",
            color: "orange",
            description: [
                "• Successfully delivered major petrochemical EPC projects valued at $500M+, maintaining excellent on-time delivery record while ensuring zero safety incidents",
                "• Engineered complex process equipment with comprehensive PV Elite calculations, validating structural integrity for high-pressure vessels up to 2,500 PSI",
                "• Translated process engineering requirements into detailed mechanical designs, achieving full ASME compliance and streamlining design review processes",
                "• Optimized piping system designs that reduced material usage while improving flow efficiency, contributing to significant project cost savings",
                "• Established design excellence standards that became company-wide best practices, improving overall project quality ratings"
            ],
            technologies: ["AVEVA P&ID", "PV Elite", "ASME Code", "Process Equipment Design", "Piping Systems", "Project Management"]
        },
        {
            id: "control-flow",
            company: "Control Flow, Inc.",
            position: "Mechanical Designer",
            location: "Houston, TX",
            startDate: "Dec 2010",
            endDate: "May 2014",
            logo: "🌊",
            color: "blue",
            description: [
                "• Achieved exceptional reliability ratings in motion compensation systems for offshore drilling, significantly exceeding industry standards and preventing costly downtime",
                "• Designed robust hydraulic systems capable of 1,500,000 lbs tension capacity, enabling safe deepwater operations in challenging 6-meter sea states",
                "• Developed integrated accumulator systems for North Sea operations, ensuring reliable operation in extreme environmental conditions",
                "• Streamlined hydraulic cylinder design processes, reducing manufacturing complexity while improving load capacity through innovative design solutions",
                "• Implemented comprehensive safety-first design principles that maintained excellent safety record throughout tenure on high-risk offshore projects"
            ],
            technologies: ["AutoCAD", "Hydraulic Systems", "Motion Compensation", "Offshore Engineering", "Safety Systems", "FEA Analysis"]
        }
    ],
    wife: [
        {
            id: "systel",
            company: "Systel",
            position: "Mechanical Designer",
            location: "Sugarland, TX",
            startDate: "Jan 2020",
            endDate: "Present",
            logo: "",
            color: "emerald",
            description: [
                "Create Parts/BOMs via Engineering Change Order (ECO) tool ERP system",
                "Create/Revise assembly documentation via Autodesk Inventor software",
                "Prepare drawings layouts using AutoCAD, Inventor, and Solid works",
                "Support Manufacturing personnel during production assembly",
                "Interface with Manufacturers/Vendors for specifications of purchased components support",
                "Sales/Marketing/Customer by providing conceptual drawings/modeling of products"
            ],
            technologies: ["AutoCAD", "Autodesk Inventor", "SolidWorks", "ERP Systems", "Engineering Change Orders", "Manufacturing Support", "Technical Documentation"]
        },
        {
            id: "diamonds-blocks",
            company: "Diamond Blocks Services",
            position: "Manufacturing Engineering Intern",
            location: "Malabo, Equatorial Guinea",
            startDate: "May 2018",
            endDate: "Aug 2018",
            logo: "🏗️",
            color: "purple",
            description: [
                "Interpreted design engineering drawings and blueprints",
                "Conducted time studies to improve production capacity",
                "Validated product sub-system reliability performance",
                "Provide technical support to maintenance, production quality, and safety department",
                "Participated in team lead efforts to continually improve the product development process"
            ],
            technologies: ["Engineering Drawings", "Blueprint Interpretation", "Time Studies", "Reliability Testing", "Production Quality", "Process Improvement", "Technical Support"]
        },
        {
            id: "amtex-machine",
            company: "AmTex Machine Products",
            position: "QC Inspector",
            location: "Houston, TX",
            startDate: "Aug 2016",
            endDate: "Apr 2018",
            logo: "🔍",
            color: "blue",
            description: [
                "Performed routine quality inspections to ensure consistency in all products",
                "Performed first article inspection and routine dimensional inspections",
                "Performed weekly requirement evaluations in coordination with material operations and planning teams",
                "Assuring that non-conforming products are properly identified and documented",
                "Maintains, monitors, and records information pertaining to product and production",
                "Conducts online specification checks, dimensional inspections, and tool calibration audits"
            ],
            technologies: ["Quality Inspections", "First Article Inspection", "Dimensional Inspections", "Material Operations", "Documentation", "Specification Checks", "Tool Calibration"]
        }
    ]
};
const allSkills = {
    david: [
        {
            category: "CAD Software",
            icon: _jsx(Wrench, { className: "w-6 h-6" }),
            items: ["SolidWorks", "Autodesk Inventor", "AutoCAD", "AVEVA P&ID", "Autodesk Vault PDM"]
        },
        {
            category: "Engineering Analysis",
            icon: _jsx(Zap, { className: "w-6 h-6" }),
            items: ["HTRI", "CFD Analysis", "PV Elite", "FEA", "Thermal Analysis", "Stress Analysis"]
        },
        {
            category: "Standards & Codes",
            icon: _jsx(Target, { className: "w-6 h-6" }),
            items: ["ASME Y14.5 GD&T", "API Standards", "ASME Code", "ISO Standards", "DNV-GL", "NORSOK"]
        }
    ],
    wife: [
        {
            category: "Education & Engineering Foundation",
            icon: _jsx(AwardIcon, { className: "w-6 h-6" }),
            items: ["B.S. Mechanical Engineering - University of Texas at Tyler (2019)", "Strong Engineering Fundamentals", "ABET-Accredited Program Graduate", "Academic Excellence & Dean's List Recognition", "Senior Design Project Leadership", "Engineering Competition Participation"]
        },
        {
            category: "Project Management & Leadership",
            icon: _jsx(Users, { className: "w-6 h-6" }),
            items: ["International Construction Project Management", "Cross-Cultural Team Coordination", "Budget Management ($1M+ Projects)", "MS Project & Scheduling", "Stakeholder Communication", "Risk Assessment & Mitigation"]
        },
        {
            category: "CAD & Design Software",
            icon: _jsx(Wrench, { className: "w-6 h-6" }),
            items: ["SolidWorks (Advanced)", "AutoCAD", "MS Project", "Technical Drawings & Specifications", "3D Modeling & Assembly Design", "Engineering Documentation"]
        },
        {
            category: "Quality & Process Excellence",
            icon: _jsx(Target, { className: "w-6 h-6" }),
            items: ["Lean Six Sigma Green Belt", "Quality Control Systems", "First Article Inspection", "Statistical Process Control", "ISO Standards Knowledge", "Dimensional Analysis & Calibration"]
        },
        {
            category: "International & Communication",
            icon: _jsx(Globe, { className: "w-6 h-6" }),
            items: ["Spanish (Native)", "English (Fluent)", "French (Conversational)", "International Project Experience", "Cross-Cultural Communication", "Technical Translation"]
        },
        {
            category: "Fresh Engineering Perspective",
            icon: _jsx(Lightbulb, { className: "w-6 h-6" }),
            items: ["Latest Engineering Technologies", "Modern Industry Standards", "Innovative Problem-Solving", "Rapid Learning & Adaptation", "Digital-Native Technical Skills", "Fresh Graduate Energy & Enthusiasm"]
        }
    ]
};
// Company Details Data
const companyDetails = {
    "chart-industries": {
        id: "chart-industries",
        name: "Chart Industries (Hudson Products Division)",
        logo: "🏭",
        industry: "Cryogenic Equipment & Heat Transfer Systems",
        founded: "1992 (Hudson Products acquired 2018)",
        headquarters: "Ball Ground, GA (Hudson: Beasley, TX)",
        employees: "12,000+ globally (Hudson Division: 500+)",
        description: "Chart Industries is a leading global manufacturer of highly engineered equipment servicing multiple applications in the clean energy and industrial gas markets. The Hudson Products division, acquired in 2018, specializes in air-cooled heat exchangers, Fin-Fan® systems, and Tuf-Lite® axial flow fans for the oil, gas, and petrochemical industries.",
        businessFocus: [
            "Cryogenic Equipment Manufacturing",
            "Air-Cooled Heat Exchanger Design & Manufacturing",
            "LNG & Petrochemical Processing Equipment",
            "Heat Transfer Technology Innovation",
            "Clean Energy Solutions",
            "Industrial Gas Equipment"
        ],
        keyProducts: [
            "Fin-Fan® Air-Cooled Heat Exchangers",
            "Tuf-Lite® Axial Flow Fans",
            "Cryogenic Storage & Distribution Systems",
            "LNG Equipment & Liquefaction Plants",
            "Heat Transfer Equipment",
            "Industrial Cooling Systems"
        ],
        marketPosition: "Leading global manufacturer with NYSE listing (GTLS), operating the world's largest air-cooled heat exchanger manufacturing facility in Beasley, TX (120 acres, 400,000 ft² under roof).",
        workflowTitle: "Air-Cooled Heat Exchanger Design & Engineering Workflow",
        designProcess: [
            {
                phase: "Project Initiation & Requirements Analysis",
                description: "Collaborate with thermal engineers and clients to define heat exchanger specifications, operating conditions, and performance requirements for LNG and petrochemical applications using Chart's proprietary software and industry-leading tools.",
                deliverables: ["Project specifications", "Heat duty calculations", "Operating parameter definitions", "Environmental requirements"],
                tools: ["HTRI software", "CFD analysis tools", "Chart proprietary software", "HYSIS", "AspenOne"],
                duration: "1-2 weeks"
            },
            {
                phase: "Thermal & Mechanical Design",
                description: "Design finned tube bundles, determine fan configurations, and optimize heat transfer performance using advanced thermal modeling, CFD analysis, and finite element analysis for superior engineering solutions.",
                deliverables: ["3D tube bundle models", "Fan selection specifications", "Heat transfer calculations", "Performance curves"],
                tools: ["SolidWorks", "Autodesk Inventor", "HTRI", "CFD Analysis", "RISA 3-D structural analysis", "Finite element analysis"],
                duration: "3-4 weeks"
            },
            {
                phase: "3D Modeling & Assembly Design",
                description: "Create detailed 3D models of heat exchanger components including tube bundles, supporting structures, and fan assemblies with 99.8% design accuracy using Chart's streamlined engineering processes.",
                deliverables: ["Complete 3D assemblies", "Component models", "Assembly drawings", "Structural analysis"],
                tools: ["SolidWorks", "Autodesk Inventor", "PDM systems", "VBA automation macros"],
                duration: "4-6 weeks"
            },
            {
                phase: "Manufacturing & Quality Assurance",
                description: "Support manufacturing at Chart's world-class Beasley facility with comprehensive documentation, quality control, and fabrication support for the industry's most demanding applications.",
                deliverables: ["Manufacturing specifications", "Quality procedures", "Fabrication drawings", "Final documentation"],
                tools: ["Manufacturing systems", "Quality control systems", "Chart Lifecycle services"],
                duration: "2-4 weeks"
            },
            {
                phase: "Aftermarket & Service Support",
                description: "Provide comprehensive aftermarket services through Chart's industry-leading service network, including commissioning, training, and lifecycle support for optimal equipment performance.",
                deliverables: ["Service procedures", "Training materials", "Aftermarket support", "Performance optimization"],
                tools: ["Chart Service network", "Hudson Service team", "Field service support", "Chart Parts"],
                duration: "Ongoing lifecycle support"
            }
        ],
        majorProjects: [
            {
                name: "LNG Facility Heat Exchanger Systems",
                type: "Large-Scale Industrial",
                value: "$50M+ Annual Portfolio",
                description: "Design of air-cooled heat exchangers for major LNG and petrochemical facilities worldwide through Chart's Hudson Products division, achieving industry-leading efficiency improvements and supporting clean energy transition.",
                challenges: [
                    "Extreme operating conditions (-40°F to 120°F)",
                    "High-pressure applications (up to 2,500 PSI)",
                    "Complex multi-phase heat transfer requirements",
                    "Strict environmental and safety regulations",
                    "Clean energy transition requirements"
                ],
                solutions: [
                    "Chart's proprietary design software and engineering tools",
                    "Advanced CFD analysis and thermal optimization",
                    "Custom finned tube configurations using Hy-Fin® technology",
                    "Innovative Tuf-Lite® fan systems for maximum efficiency",
                    "Comprehensive testing at world's largest manufacturing facility"
                ],
                outcomes: [
                    "99.8% design accuracy across 200+ drawings annually",
                    "15% heat transfer efficiency improvements",
                    "60+ successful LNG project implementations",
                    "Zero safety incidents in manufactured equipment",
                    "Industry-leading performance in clean energy applications"
                ]
            },
            {
                name: "World-Class Manufacturing Excellence",
                type: "Manufacturing & Operations",
                value: "$100M+ Facility Investment",
                description: "Operations at Chart's Beasley, TX facility - the world's largest air-cooled heat exchanger manufacturing facility, featuring 120 acres, 400,000 ft² under roof, and state-of-the-art equipment.",
                challenges: [
                    "Complex large-scale manufacturing requirements",
                    "Custom engineered-to-order products",
                    "Stringent quality and safety standards",
                    "Global supply chain coordination",
                    "Continuous capacity expansion needs"
                ],
                solutions: [
                    "State-of-the-art manufacturing processes and equipment",
                    "34 fixed cranes (3-30 tons) and 2 mobile crawler cranes",
                    "720,000 ft² of storage and marshalling space",
                    "Advanced machine shop with bespoke capabilities",
                    "Comprehensive quality control and testing systems"
                ],
                outcomes: [
                    "World's largest air-cooled heat exchanger facility",
                    "Industry-leading manufacturing capabilities",
                    "Recent 50,000 ft² capacity expansion completed",
                    "Hundreds of thousands of products operating globally",
                    "Chart Industries' NYSE-listed performance (GTLS)"
                ]
            }
        ],
        companyStats: [
            { label: "Annual Revenue", value: "$1.5B+", icon: _jsx(TrendingUp, { className: "w-5 h-5" }) },
            { label: "Design Accuracy", value: "99.8%", icon: _jsx(CheckCircle, { className: "w-5 h-5" }) },
            { label: "Global Employees", value: "12,000+", icon: _jsx(Users, { className: "w-5 h-5" }) },
            { label: "Manufacturing Space", value: "400K ft²", icon: _jsx(Building, { className: "w-5 h-5" }) }
        ],
        designRole: "Mechanical Designer - Air-Cooled Heat Exchangers",
        roleImpact: [
            "Lead mechanical design for 60+ LNG and petrochemical projects annually",
            "Achieved 99.8% design accuracy across 200+ technical drawings",
            "Collaborated with thermal engineers using Chart's proprietary software",
            "Implemented VBA automation reducing design time by 70%",
            "Contributed to Chart Industries' clean energy transition initiatives"
        ],
        technicalFocus: [
            "Air-Cooled Heat Exchanger Design",
            "Fin-Fan® & Tuf-Lite® Technologies",
            "3D Mechanical Modeling & CAD",
            "Thermal System Optimization",
            "Manufacturing Process Support",
            "Clean Energy Applications"
        ]
    },
    "inova-geophysical": {
        id: "inova-geophysical",
        name: "INOVA Geophysical",
        logo: "🌍",
        industry: "Seismic Data Acquisition & Geophysical Equipment",
        founded: "2010 (Joint Venture: ION Geophysical & BGP)",
        headquarters: "Sugar Land, TX",
        employees: "500+ globally",
        description: "INOVA Geophysical designs and manufactures advanced seismic data acquisition systems, Vibroseis vehicles, and digital sensors for the global oil and gas exploration industry. Leader in land seismic technology with operations worldwide.",
        businessFocus: [
            "Land Seismic Data Acquisition Systems",
            "Vibroseis Source Vehicle Manufacturing",
            "Digital Seismic Sensor Technology",
            "Geophysical Equipment Innovation",
            "Global Energy Exploration Support"
        ],
        keyProducts: [
            "AHV-IV™ & AHV-V TITAN Vibrators",
            "Quantum® Nodal Recording Systems",
            "G3i® NXT Cable Systems",
            "Seismic Source Controllers",
            "Digital 3C Receivers & Geophones"
        ],
        marketPosition: "#1 Vibrator manufacturer globally with 50+ years of seismic vehicle innovation and the world's most advanced nodal recording technology.",
        workflowTitle: "Vibroseis Vehicle Design & Manufacturing Workflow",
        designProcess: [
            {
                phase: "Seismic Requirements & Specifications",
                description: "Define vibroseis vehicle requirements for harsh field environments, analyzing operating conditions from -40°F to 120°F with extreme terrain capabilities.",
                deliverables: ["Vehicle specifications", "Environmental requirements", "Performance targets", "Safety standards"],
                tools: ["Field analysis software", "Environmental modeling", "Performance simulation", "Safety assessment tools"],
                duration: "2-3 weeks"
            },
            {
                phase: "Hydraulic System Design",
                description: "Design advanced hydraulic systems for vibration generation, chassis control, and high-pressure operations up to 3,500 PSI for seismic energy transmission.",
                deliverables: ["Hydraulic schematics", "Component specifications", "Pressure calculations", "System integration plans"],
                tools: ["Autodesk Inventor", "Hydraulic simulation software", "CAD modeling", "System analysis tools"],
                duration: "4-6 weeks"
            },
            {
                phase: "Chassis & Mechanical Assembly",
                description: "Create 3D mechanical assemblies for vehicle chassis, vibration mechanisms, and structural components using automated API scripts for streamlined integration.",
                deliverables: ["3D chassis models", "Assembly drawings", "Mechanical specifications", "Integration procedures"],
                tools: ["Autodesk Inventor", "Inventor API scripts", "Assembly automation", "Structural analysis"],
                duration: "6-8 weeks"
            },
            {
                phase: "GD&T Documentation & Manufacturing",
                description: "Develop precise 2D drawings with ASME Y14.5 GD&T standards for manufacturing and assembly operations, ensuring zero tolerance stack-up issues.",
                deliverables: ["GD&T drawings", "Manufacturing specifications", "Assembly procedures", "Quality standards"],
                tools: ["ASME Y14.5 GD&T", "Technical drawing software", "Manufacturing guidelines", "Quality systems"],
                duration: "3-4 weeks"
            },
            {
                phase: "Testing & Field Validation",
                description: "Support field testing and validation of vibroseis vehicles in operational environments, ensuring performance meets seismic acquisition requirements.",
                deliverables: ["Test procedures", "Performance validation", "Field reports", "Optimization recommendations"],
                tools: ["Field testing equipment", "Data acquisition systems", "Performance monitoring", "Analysis software"],
                duration: "4-6 weeks"
            }
        ],
        majorProjects: [
            {
                name: "AHV-IV Series Vibroseis Fleet",
                type: "Seismic Vehicle Manufacturing",
                value: "$100M+ Program",
                description: "Design and manufacturing of advanced Vibroseis vehicles for global seismic acquisition, featuring automated assembly integration reducing production time by 70%.",
                challenges: [
                    "Extreme environmental operating conditions",
                    "High-precision seismic energy transmission requirements",
                    "Complex hydraulic system integration",
                    "Rapid manufacturing scale-up demands"
                ],
                solutions: [
                    "Inventor API automation for assembly integration",
                    "Advanced hydraulic system design and testing",
                    "Robust chassis engineering for harsh environments",
                    "Streamlined manufacturing processes"
                ],
                outcomes: [
                    "70% reduction in assembly integration time",
                    "120 hours monthly time savings through automation",
                    "Zero tolerance stack-up issues in manufacturing",
                    "Global fleet deployment success across 30+ countries"
                ]
            },
            {
                name: "Quantum Nodal System Development",
                type: "Digital Technology Innovation",
                value: "$50M+ Development",
                description: "Supporting mechanical design for revolutionary nodal seismic recording systems, enabling wireless data acquisition and HyperQ communication technology.",
                challenges: [
                    "Miniaturization of complex electronics",
                    "Environmental protection for field deployment",
                    "Wireless communication reliability",
                    "Battery life optimization"
                ],
                solutions: [
                    "Compact mechanical housing design",
                    "Advanced environmental sealing systems",
                    "Optimized component layout for performance",
                    "Integrated power management solutions"
                ],
                outcomes: [
                    "Industry-leading nodal recording capability",
                    "220,000+ node deployments globally",
                    "Enhanced data quality and acquisition efficiency",
                    "Revolutionary wireless QC monitoring"
                ]
            }
        ],
        companyStats: [
            { label: "Global Market Share", value: "#1", icon: _jsx(TrendingUp, { className: "w-5 h-5" }) },
            { label: "Vibrator Experience", value: "50+ Years", icon: _jsx(Calendar, { className: "w-5 h-5" }) },
            { label: "Countries Served", value: "30+", icon: _jsx(Building, { className: "w-5 h-5" }) },
            { label: "Innovation Patents", value: "100+", icon: _jsx(Settings, { className: "w-5 h-5" }) }
        ],
        designRole: "Senior Mechanical Designer - Seismic Equipment",
        roleImpact: [
            "Designed mechanical systems for world's most advanced Vibroseis vehicles",
            "Implemented API automation reducing assembly time by 70%",
            "Achieved zero tolerance stack-up issues in precision manufacturing",
            "Supported global deployment of seismic acquisition equipment",
            "Contributed to revolutionary nodal recording system development"
        ],
        technicalFocus: [
            "Vibroseis Vehicle Design",
            "Hydraulic System Engineering",
            "Chassis & Mechanical Assembly",
            "ASME Y14.5 GD&T Standards",
            "Manufacturing Process Automation",
            "Field Environment Engineering"
        ]
    },
    "kbr": {
        id: "kbr",
        name: "KBR",
        logo: "🏢", // This will be updated to show KBR branding
        industry: "Engineering, Procurement & Construction (EPC)",
        founded: "1901",
        headquarters: "Houston, Texas",
        employees: "28,000+",
        description: "KBR is a global provider of differentiated professional services and technologies across the asset and program lifecycle within the Government Solutions and Sustainable Technology Solutions markets. We deliver science, technology and engineering solutions to governments and companies around the world.",
        businessFocus: [
            "Government Solutions & Defense",
            "Sustainable Technology Solutions",
            "Engineering, Procurement & Construction",
            "Refinery & Chemical Plant Engineering",
            "LNG & Gas Processing Facilities",
            "Technology & Consulting Services",
            "Infrastructure & Civil Engineering"
        ],
        keyProducts: [
            "Petrochemical EPC Projects",
            "LNG Processing Facilities",
            "Refinery Engineering Services",
            "Process Equipment Design",
            "Technology Solutions",
            "Government Defense Programs",
            "Sustainable Energy Solutions"
        ],
        marketPosition: "Leading global EPC contractor with over $500M+ petrochemical projects, delivering science, technology and engineering solutions with the mission of 'Delivering Solutions, Changing the World®'",
        workflowTitle: "EPC Project Engineering & Process Equipment Design Workflow",
        designProcess: [
            {
                phase: "Front-End Engineering Design (FEED)",
                description: "Develop preliminary engineering designs, process specifications, and project feasibility studies for major petrochemical and refinery projects.",
                deliverables: ["Process flow diagrams", "Equipment specifications", "Cost estimates", "Project schedules"],
                tools: ["Process simulation software", "ASPEN Plus", "HYSYS", "Engineering design systems"],
                duration: "8-16 weeks"
            },
            {
                phase: "Detailed Engineering & P&ID Development",
                description: "Create comprehensive piping and instrumentation diagrams, equipment layouts, and detailed engineering specifications for EPC project execution.",
                deliverables: ["P&ID drawings", "Equipment datasheets", "Piping specifications", "Instrumentation lists"],
                tools: ["AutoCAD", "P&ID software", "3D modeling systems", "Engineering databases"],
                duration: "12-24 weeks"
            },
            {
                phase: "Process Equipment Design & Validation",
                description: "Design and validate process equipment including pressure vessels, heat exchangers, and mechanical systems with full ASME compliance.",
                deliverables: ["Equipment designs", "Structural calculations", "ASME code compliance", "Vendor specifications"],
                tools: ["SolidWorks", "Autodesk Inventor", "PV Elite", "ASME Standards", "API Standards"],
                duration: "8-16 weeks"
            },
            {
                phase: "Procurement & Vendor Management",
                description: "Manage procurement processes for major equipment and materials, ensuring quality, delivery, and cost optimization for $500M+ projects.",
                deliverables: ["Procurement packages", "Vendor evaluations", "Material specifications", "Quality plans"],
                tools: ["SAP", "Procurement systems", "Vendor management platforms", "Quality assurance tools"],
                duration: "16-32 weeks"
            },
            {
                phase: "Construction Support & Commissioning",
                description: "Provide engineering support during construction, commissioning, and startup phases, ensuring project success and operational readiness.",
                deliverables: ["Construction drawings", "Commissioning procedures", "Startup support", "Performance validation"],
                tools: ["Construction management systems", "Commissioning software", "Performance monitoring", "Documentation systems"],
                duration: "24-52 weeks"
            }
        ],
        majorProjects: [
            {
                name: "Lake Charles LNG Transformation",
                type: "Large-Scale LNG Project",
                value: "$16.45M MTPA Capacity",
                description: "Engineering, procurement, and construction management for transforming existing import facility into world-class LNG export facility with three liquefaction trains.",
                challenges: [
                    "Complex conversion from import to export facility",
                    "Three liquefaction trains integration",
                    "Existing infrastructure modifications",
                    "Environmental and safety compliance"
                ],
                solutions: [
                    "Advanced process engineering for LNG liquefaction",
                    "Modular construction approach for efficiency",
                    "Comprehensive safety and environmental systems",
                    "State-of-the-art automation and control systems"
                ],
                outcomes: [
                    "World-class LNG export facility design",
                    "Enhanced global energy security contribution",
                    "Cleanest operating facility in the United States",
                    "Successful EPC contract award and execution"
                ]
            },
            {
                name: "Petrochemical Refinery Projects",
                type: "Process Equipment Design",
                value: "$500M+ Total Value",
                description: "Design of process equipment and piping systems for major petrochemical EPC projects including refineries and chemical processing facilities.",
                challenges: [
                    "Complex process requirements translation",
                    "High-pressure vessel design (up to 2,500 PSI)",
                    "ASME code compliance across multiple projects",
                    "Integration with existing facility infrastructure"
                ],
                solutions: [
                    "Advanced process engineering and modeling",
                    "Comprehensive structural integrity analysis",
                    "Full ASME and API standards compliance",
                    "Innovative piping and equipment layouts"
                ],
                outcomes: [
                    "15+ major petrochemical projects completed",
                    "Zero safety incidents in equipment operation",
                    "Enhanced process efficiency and reliability",
                    "Successful facility startups and commissioning"
                ]
            }
        ],
        companyStats: [
            { label: "Global Projects", value: "$500M+", icon: _jsx(TrendingUp, { className: "w-5 h-5" }) },
            { label: "Industry Experience", value: "120+ Years", icon: _jsx(Calendar, { className: "w-5 h-5" }) },
            { label: "Global Employees", value: "36,000+", icon: _jsx(Users, { className: "w-5 h-5" }) },
            { label: "Countries Operations", value: "33", icon: _jsx(Building, { className: "w-5 h-5" }) }
        ],
        designRole: "Senior Mechanical Designer - Process Equipment",
        roleImpact: [
            "Designed process equipment for $500M+ petrochemical EPC projects",
            "Collaborated with process engineers on major refinery projects",
            "Executed PV Elite calculations for high-pressure vessel design",
            "Ensured full ASME compliance across 15+ major projects",
            "Contributed to successful LNG and petrochemical facility developments"
        ],
        technicalFocus: [
            "Process Equipment Design",
            "Pressure Vessel Engineering",
            "P&ID Development",
            "ASME & API Standards Compliance",
            "Petrochemical Process Systems",
            "EPC Project Support"
        ]
    },
    "control-flow": {
        id: "control-flow",
        name: "Control Flow Inc.",
        logo: "⚙️",
        industry: "Offshore Drilling & Motion Compensation Systems",
        founded: "1975",
        headquarters: "Houston, TX",
        employees: "200+",
        description: "Control Flow Inc. specializes in design and manufacturing of motion compensation systems, wellhead equipment, and offshore drilling solutions. Established expertise in Drill String Compensators, Production Riser Tensioners, and offshore pressure control equipment.",
        businessFocus: [
            "Motion Compensation Systems",
            "Offshore Drilling Equipment",
            "Wellhead & Pressure Control Systems",
            "Subsea Equipment Manufacturing",
            "Marine & Military Applications"
        ],
        keyProducts: [
            "Drill String Compensators (DSC)",
            "Production Riser Tensioner Modules (PRT®)",
            "Ultimate Mo-Comp Cylinder Assemblies (UMCCA™)",
            "Blowout Preventers (BOPs)",
            "Wellhead Equipment & Christmas Trees"
        ],
        marketPosition: "Leading manufacturer of motion compensation systems for offshore drilling with 50+ years of proven reliability in deepwater operations and harsh marine environments.",
        workflowTitle: "Motion Compensation System Design & Engineering Workflow",
        designProcess: [
            {
                phase: "Offshore Requirements Analysis",
                description: "Analyze offshore drilling platform requirements, sea state conditions, and motion compensation specifications for deepwater operations up to 6-meter sea states.",
                deliverables: ["Motion analysis reports", "Environmental specifications", "Load calculations", "Performance requirements"],
                tools: ["Motion simulation software", "Environmental modeling", "Load analysis tools", "Marine engineering systems"],
                duration: "3-4 weeks"
            },
            {
                phase: "Hydraulic System Design",
                description: "Design high-pressure hydraulic systems for motion compensation, including accumulators, cylinders, and control systems operating at 3,500 PSI.",
                deliverables: ["Hydraulic schematics", "Component specifications", "Pressure calculations", "Control system design"],
                tools: ["SolidWorks", "Autodesk Inventor", "Hydraulic simulation", "Pressure analysis software"],
                duration: "6-8 weeks"
            },
            {
                phase: "Mechanical Assembly & Integration",
                description: "Create detailed mechanical designs for compensator assemblies, tensioner modules, and integrated accumulator systems for offshore platforms.",
                deliverables: ["3D mechanical models", "Assembly drawings", "Integration specifications", "Structural analysis"],
                tools: ["SolidWorks", "Autodesk Inventor", "Structural analysis", "Marine engineering software"],
                duration: "8-12 weeks"
            },
            {
                phase: "API Standards Compliance",
                description: "Ensure all designs meet API 16F standards and offshore safety requirements for motion compensation and drilling equipment.",
                deliverables: ["API compliance documentation", "Safety certifications", "Quality standards", "Testing procedures"],
                tools: ["API 16F Standards", "Safety analysis software", "Compliance management", "Quality systems"],
                duration: "4-6 weeks"
            },
            {
                phase: "Testing & Offshore Validation",
                description: "Conduct comprehensive testing and validation of motion compensation systems in simulated and actual offshore conditions.",
                deliverables: ["Test procedures", "Performance validation", "Offshore trials", "Reliability reports"],
                tools: ["Test equipment", "Motion simulators", "Data acquisition", "Performance monitoring"],
                duration: "8-16 weeks"
            }
        ],
        majorProjects: [
            {
                name: "Motion Compensation System Automation",
                type: "Offshore Drilling Technology",
                value: "$25M+ Development Program",
                description: "Design and manufacturing of advanced motion compensation systems for offshore drilling operations, including Drill String Compensators with 99.7% reliability rating.",
                challenges: [
                    "Extreme offshore operating conditions",
                    "High-pressure hydraulic systems (3,500 PSI)",
                    "6-meter sea state compensation requirements",
                    "99.7% reliability standards for critical operations"
                ],
                solutions: [
                    "Advanced hydraulic cylinder design with integrated accumulators",
                    "Robust mechanical engineering for marine environments",
                    "Comprehensive motion simulation and modeling",
                    "Redundant safety systems and fail-safes"
                ],
                outcomes: [
                    "99.7% reliability rating for Drill String Compensators",
                    "Successful operation in North Sea extreme conditions",
                    "1,500,000 lbs tension capacity for deepwater platforms",
                    "Zero safety incidents in offshore operations"
                ]
            },
            {
                name: "Production Riser Tensioner Development",
                type: "Deepwater Equipment",
                value: "$15M+ Project Value",
                description: "Development of Production Riser Tensioner Modules (PRT®) for deepwater drilling platforms with 1,500,000 lbs tension capacity.",
                challenges: [
                    "Extreme deepwater operating conditions",
                    "Massive tension loads (1.5M lbs capacity)",
                    "Complex hydraulic cylinder assemblies",
                    "Integration with existing platform systems"
                ],
                solutions: [
                    "Ultra-high capacity hydraulic cylinder design",
                    "Advanced materials for marine environment resistance",
                    "Modular design for platform integration",
                    "Comprehensive load distribution systems"
                ],
                outcomes: [
                    "Successfully deployed on multiple deepwater platforms",
                    "1,500,000 lbs tension capacity achievement",
                    "Enhanced drilling efficiency and safety",
                    "Industry-leading performance in harsh marine conditions"
                ]
            }
        ],
        companyStats: [
            { label: "Industry Experience", value: "50+ Years", icon: _jsx(Calendar, { className: "w-5 h-5" }) },
            { label: "Reliability Rating", value: "99.7%", icon: _jsx(CheckCircle, { className: "w-5 h-5" }) },
            { label: "Tension Capacity", value: "1.5M lbs", icon: _jsx(TrendingUp, { className: "w-5 h-5" }) },
            { label: "Global Installations", value: "500+", icon: _jsx(Building, { className: "w-5 h-5" }) }
        ],
        designRole: "Mechanical Designer - Motion Compensation Systems",
        roleImpact: [
            "Designed motion compensation systems for offshore drilling operations",
            "Developed hydraulic cylinder assemblies for Production Riser Tensioners",
            "Created detailed designs for Ultimate Mo-Comp Cylinder Assemblies",
            "Achieved 99.7% reliability rating for critical offshore equipment",
            "Supported deepwater drilling operations in extreme marine environments"
        ],
        technicalFocus: [
            "Motion Compensation System Design",
            "High-Pressure Hydraulic Systems",
            "Offshore Equipment Engineering",
            "API 16F Standards Compliance",
            "Marine Environment Engineering",
            "Deepwater Platform Integration"
        ]
    },
    "systel-designer": {
        id: "systel-designer",
        name: "Systel Inc.",
        logo: "🔧",
        industry: "Rugged Computing & Industrial Technology",
        founded: "1978",
        headquarters: "Sugar Land, TX",
        employees: "200+",
        description: "Systel Inc. is a leading manufacturer of rugged computing solutions for defense, industrial, and commercial applications. Specializing in mission-critical systems that operate in extreme environments with uncompromising reliability.",
        businessFocus: [
            "MIL-SPEC Rugged Computer Manufacturing",
            "Industrial Computing Solutions",
            "Custom Engineering Design",
            "Defense & Aerospace Systems",
            "Mission-Critical Technology"
        ],
        keyProducts: [
            "MIL-SPEC Rugged Computers",
            "Industrial Embedded Systems",
            "Rackmount Computing Solutions",
            "Custom Electronic Enclosures",
            "Mission-Critical Servers"
        ],
        marketPosition: "Leading provider of rugged computing solutions for defense and industrial applications with ISO 9001:2015 and AS9100D:2016 certifications.",
        workflowTitle: "Mechanical Design & Manufacturing Engineering Workflow",
        designProcess: [
            {
                phase: "Requirements Analysis & Design Planning",
                description: "Analyze customer requirements for rugged computing solutions, defining mechanical specifications, environmental conditions, and manufacturing constraints.",
                deliverables: ["Design requirements", "Environmental specifications", "Manufacturing feasibility analysis", "Project timeline"],
                tools: ["ERP systems", "Requirements management", "Design planning software", "Customer interface systems"],
                duration: "1-2 weeks"
            },
            {
                phase: "3D Mechanical Design & Modeling",
                description: "Create detailed 3D models and assemblies for rugged computer enclosures, thermal management systems, and mechanical components using advanced CAD software.",
                deliverables: ["3D models", "Assembly drawings", "Component specifications", "Design validation"],
                tools: ["Autodesk Inventor", "AutoCAD", "SolidWorks", "3D modeling software"],
                duration: "3-4 weeks"
            },
            {
                phase: "Manufacturing Documentation & BOM Creation",
                description: "Develop comprehensive manufacturing documentation, bills of materials, and assembly instructions to optimize production schedules and reduce material costs.",
                deliverables: ["Technical drawings", "BOMs", "Assembly documentation", "Manufacturing specifications"],
                tools: ["ERP systems", "BOM management", "Documentation software", "Manufacturing planning tools"],
                duration: "2-3 weeks"
            },
            {
                phase: "Production Support & Continuous Improvement",
                description: "Support manufacturing teams with technical guidance, troubleshooting, and process improvements to enhance efficiency and reduce production delays.",
                deliverables: ["Manufacturing support", "Process improvements", "Technical guidance", "Quality enhancements"],
                tools: ["Manufacturing systems", "Quality control tools", "Process optimization software", "Production tracking"],
                duration: "Ongoing"
            },
            {
                phase: "Sales & Marketing Collaboration",
                description: "Create conceptual drawings and technical presentations for sales and marketing teams to support customer engagement and business development.",
                deliverables: ["Conceptual drawings", "Technical presentations", "Customer proposals", "Marketing materials"],
                tools: ["Design visualization", "Presentation software", "Customer interface tools", "Marketing systems"],
                duration: "1-2 weeks per project"
            }
        ],
        majorProjects: [
            {
                name: "Rugged Computing Platform Development",
                type: "Product Design & Manufacturing",
                value: "$25M+ Annual Production",
                description: "Complete mechanical design and manufacturing support for rugged computing platforms serving defense and industrial markets with enhanced reliability and performance.",
                challenges: [
                    "Extreme environmental operating conditions",
                    "MIL-SPEC compliance requirements",
                    "Complex thermal management needs",
                    "High reliability and durability standards"
                ],
                solutions: [
                    "Advanced thermal design and modeling",
                    "Robust mechanical engineering for harsh environments",
                    "Optimized manufacturing processes and workflows",
                    "Comprehensive testing and validation procedures"
                ],
                outcomes: [
                    "10% reduction in material costs through BOM optimization",
                    "15% improvement in manufacturing efficiency",
                    "12% decrease in production delays",
                    "5% increase in sales through enhanced conceptual designs"
                ]
            },
            {
                name: "Custom Military Computing Solutions",
                type: "Defense Contractor Projects",
                value: "$10M+ Contract Value",
                description: "Design and manufacturing of specialized computing solutions for military applications requiring extreme ruggedness and mission-critical reliability.",
                challenges: [
                    "Stringent military specifications and standards",
                    "Rapid prototyping and deployment requirements",
                    "Custom design modifications for specific missions",
                    "Quality assurance and certification processes"
                ],
                solutions: [
                    "Streamlined design and documentation processes",
                    "Advanced manufacturing techniques and automation",
                    "Rigorous quality control and testing protocols",
                    "Collaborative engineering and customer support"
                ],
                outcomes: [
                    "100% on-time delivery for critical military contracts",
                    "Zero quality defects in delivered systems",
                    "Enhanced customer satisfaction and repeat business",
                    "Successful certification for defense applications"
                ]
            }
        ],
        companyStats: [
            { label: "Manufacturing Experience", value: "45+ Years", icon: _jsx(Calendar, { className: "w-5 h-5" }) },
            { label: "Quality Certification", value: "ISO 9001", icon: _jsx(CheckCircle, { className: "w-5 h-5" }) },
            { label: "Defense Contracts", value: "$50M+", icon: _jsx(Building, { className: "w-5 h-5" }) },
            { label: "Product Reliability", value: "99.9%", icon: _jsx(TrendingUp, { className: "w-5 h-5" }) }
        ],
        designRole: "Mechanical Designer - Rugged Computing Systems",
        roleImpact: [
            "Optimized production schedules and reduced material costs by 10%",
            "Improved manufacturing efficiency by 15% through enhanced documentation",
            "Reduced production delays by 12% through effective team support",
            "Contributed to 5% sales increase through compelling conceptual designs",
            "Maintained zero quality defects in critical defense applications"
        ],
        technicalFocus: [
            "Rugged Computer Enclosure Design",
            "Thermal Management Systems",
            "Manufacturing Process Optimization",
            "ERP System Integration",
            "Technical Documentation & BOM Management",
            "Sales & Marketing Support"
        ]
    },
    "diamonds-blocks": {
        id: "diamonds-blocks",
        name: "Diamonds Blocks Services",
        logo: "🏗️",
        industry: "Construction & Project Management",
        founded: "2015",
        headquarters: "Malabo, Equatorial Guinea",
        employees: "150+",
        description: "Diamonds Blocks Services is a leading construction and project management company in Equatorial Guinea, specializing in large-scale infrastructure projects, commercial construction, and industrial facility development across Central Africa.",
        businessFocus: [
            "Large-Scale Construction Projects",
            "Infrastructure Development",
            "Project Management & Coordination",
            "Industrial Facility Construction",
            "International Project Execution"
        ],
        keyProducts: [
            "Commercial Construction Projects",
            "Infrastructure Development",
            "Industrial Facility Construction",
            "Project Management Services",
            "Engineering & Design Services"
        ],
        marketPosition: "Leading construction company in Equatorial Guinea with expertise in managing complex international projects and infrastructure development across Central Africa.",
        workflowTitle: "Construction Project Management & Engineering Workflow",
        designProcess: [
            {
                phase: "Project Initiation & Specifications",
                description: "Generate comprehensive project specifications, define scope, and establish project parameters for large-scale construction and infrastructure projects.",
                deliverables: ["Project specifications", "Scope definitions", "Feasibility studies", "Risk assessments"],
                tools: ["MS Project", "Project planning software", "CAD systems", "Specification management"],
                duration: "2-4 weeks"
            },
            {
                phase: "Conceptual Design & Engineering",
                description: "Develop general and conceptual design solutions using advanced engineering software and coordinate with multidisciplinary teams.",
                deliverables: ["Conceptual designs", "Engineering drawings", "Design calculations", "Material specifications"],
                tools: ["SolidWorks", "MS Project", "CAD software", "Engineering analysis tools"],
                duration: "6-10 weeks"
            },
            {
                phase: "Project Coordination & Data Analysis",
                description: "Coordinate project activities, analyze data, and manage schedules to ensure efficient project execution and stakeholder alignment.",
                deliverables: ["Project schedules", "Coordination plans", "Data analysis reports", "Progress tracking"],
                tools: ["MS Project", "Data analysis software", "Coordination platforms", "Progress monitoring tools"],
                duration: "Ongoing throughout project"
            },
            {
                phase: "Stakeholder Management & Communication",
                description: "Schedule and conduct regular project meetings with contractors, engineers, and stakeholders to ensure project alignment and progress.",
                deliverables: ["Meeting schedules", "Progress reports", "Stakeholder communications", "Action items"],
                tools: ["Communication platforms", "Meeting management", "Reporting systems", "Collaboration tools"],
                duration: "Weekly/Monthly throughout project"
            },
            {
                phase: "Continuous Improvement & Optimization",
                description: "Implement continuous improvement initiatives for existing tooling, equipment, and processes to enhance project efficiency and quality.",
                deliverables: ["Improvement plans", "Process optimizations", "Equipment upgrades", "Efficiency metrics"],
                tools: ["Process improvement tools", "Performance monitoring", "Optimization software", "Quality systems"],
                duration: "Ongoing"
            }
        ],
        majorProjects: [
            {
                name: "Central Africa Infrastructure Development",
                type: "Large-Scale Infrastructure",
                value: "$50M+ Program",
                description: "Management of comprehensive infrastructure development projects across Equatorial Guinea and Central Africa, including commercial and industrial facilities.",
                challenges: [
                    "Complex international project coordination",
                    "Multi-stakeholder management requirements",
                    "Remote location logistical challenges",
                    "Cultural and language considerations"
                ],
                solutions: [
                    "Advanced project management methodologies",
                    "Comprehensive stakeholder engagement strategies",
                    "Efficient logistics and supply chain management",
                    "Cross-cultural team coordination"
                ],
                outcomes: [
                    "Successful completion of 10+ major infrastructure projects",
                    "Enhanced regional development and economic growth",
                    "Improved project delivery timelines by 25%",
                    "Strong stakeholder satisfaction and repeat business"
                ]
            },
            {
                name: "Industrial Facility Construction Program",
                type: "Industrial Construction",
                value: "$30M+ Portfolio",
                description: "Design and construction management for industrial facilities, including manufacturing plants and processing facilities across Equatorial Guinea.",
                challenges: [
                    "Complex industrial design requirements",
                    "Environmental and safety compliance",
                    "Local workforce development needs",
                    "Equipment and material procurement challenges"
                ],
                solutions: [
                    "Specialized industrial engineering expertise",
                    "Comprehensive safety and environmental programs",
                    "Local workforce training and development",
                    "Strategic procurement and logistics management"
                ],
                outcomes: [
                    "Successful delivery of 5+ industrial facilities",
                    "Zero safety incidents during construction",
                    "Local workforce skill development and employment",
                    "Enhanced industrial capacity in the region"
                ]
            }
        ],
        companyStats: [
            { label: "Projects Completed", value: "15+", icon: _jsx(Building, { className: "w-5 h-5" }) },
            { label: "Project Value", value: "$80M+", icon: _jsx(TrendingUp, { className: "w-5 h-5" }) },
            { label: "Countries Served", value: "3", icon: _jsx(Calendar, { className: "w-5 h-5" }) },
            { label: "Success Rate", value: "100%", icon: _jsx(CheckCircle, { className: "w-5 h-5" }) }
        ],
        designRole: "Construction Project Manager - Infrastructure Development",
        roleImpact: [
            "Managed generation of project specifications for major infrastructure projects",
            "Coordinated data analysis and project scheduling using MS Project",
            "Conducted regular meetings with contractors, engineers, and stakeholders",
            "Implemented continuous improvement initiatives for equipment and processes",
            "Delivered monthly stakeholder updates and progress reports"
        ],
        technicalFocus: [
            "Project Management & Coordination",
            "Infrastructure Development",
            "Stakeholder Communication",
            "Data Analysis & Reporting",
            "Continuous Improvement",
            "International Project Execution"
        ]
    },
    "amtex-qc": {
        id: "amtex-qc",
        name: "AmTex Machine Product",
        logo: "🔍",
        industry: "Manufacturing & Quality Control",
        founded: "1985",
        headquarters: "Houston, TX",
        employees: "300+",
        description: "AmTex Machine Product is a precision manufacturing company specializing in high-quality machined components and assemblies for aerospace, energy, and industrial applications. Known for stringent quality control and dimensional accuracy.",
        businessFocus: [
            "Precision Manufacturing",
            "Quality Control & Inspection",
            "Aerospace Component Manufacturing",
            "Industrial Machining Services",
            "Dimensional Inspection Services"
        ],
        keyProducts: [
            "Precision Machined Components",
            "Aerospace Parts & Assemblies",
            "Industrial Equipment Components",
            "Custom Manufacturing Solutions",
            "Quality Control Services"
        ],
        marketPosition: "Leading precision manufacturing company in Houston with expertise in aerospace and industrial component production, known for exceptional quality control and dimensional accuracy.",
        workflowTitle: "Quality Control & Manufacturing Inspection Workflow",
        designProcess: [
            {
                phase: "Product Quality Planning",
                description: "Develop comprehensive quality plans and inspection procedures to ensure consistency and reliability across all manufactured products.",
                deliverables: ["Quality plans", "Inspection procedures", "Control charts", "Specification reviews"],
                tools: ["Quality management systems", "Statistical process control", "Inspection planning software", "Standards databases"],
                duration: "1-2 weeks"
            },
            {
                phase: "First Article & Routine Inspection",
                description: "Perform first article inspections and routine dimensional inspections to verify conformance to specifications and drawings.",
                deliverables: ["First article reports", "Dimensional inspection results", "Conformance certificates", "Non-conformance reports"],
                tools: ["Coordinate measuring machines", "Dimensional inspection equipment", "Measuring instruments", "Documentation systems"],
                duration: "Ongoing per production schedule"
            },
            {
                phase: "Material Operations Coordination",
                description: "Coordinate with material operations and planning teams for weekly requirement evaluations and production scheduling optimization.",
                deliverables: ["Requirement evaluations", "Material coordination reports", "Production schedules", "Quality metrics"],
                tools: ["ERP systems", "Material planning software", "Coordination platforms", "Scheduling tools"],
                duration: "Weekly coordination cycles"
            },
            {
                phase: "Non-Conformance Management",
                description: "Identify, document, and manage non-conforming products to ensure proper identification and corrective action implementation.",
                deliverables: ["Non-conformance reports", "Corrective action plans", "Root cause analysis", "Process improvements"],
                tools: ["Quality management systems", "CAPA software", "Documentation systems", "Analysis tools"],
                duration: "As required per incidents"
            },
            {
                phase: "Production Monitoring & Documentation",
                description: "Maintain, monitor, and record comprehensive information pertaining to product quality and production performance.",
                deliverables: ["Quality records", "Production monitoring reports", "Performance metrics", "Compliance documentation"],
                tools: ["Data collection systems", "Monitoring software", "Record keeping systems", "Reporting tools"],
                duration: "Continuous monitoring"
            }
        ],
        majorProjects: [
            {
                name: "Aerospace Component Quality Assurance",
                type: "Quality Control Program",
                value: "$10M+ Production Volume",
                description: "Comprehensive quality control program for aerospace component manufacturing, ensuring highest standards of dimensional accuracy and material compliance.",
                challenges: [
                    "Stringent aerospace quality requirements",
                    "Complex dimensional inspection needs",
                    "Material certification requirements",
                    "Zero-defect manufacturing standards"
                ],
                solutions: [
                    "Advanced coordinate measuring machine (CMM) inspection",
                    "Statistical process control implementation",
                    "Comprehensive first article inspection procedures",
                    "Rigorous material certification processes"
                ],
                outcomes: [
                    "99.9% quality conformance achievement",
                    "Zero customer quality incidents",
                    "AS9100 aerospace certification maintenance",
                    "Enhanced customer satisfaction and retention"
                ]
            },
            {
                name: "Industrial Manufacturing Quality Systems",
                type: "Quality Management Implementation",
                value: "$5M+ Quality Investment",
                description: "Implementation of comprehensive quality management systems for industrial component manufacturing with focus on dimensional inspection and tool calibration.",
                challenges: [
                    "Complex industrial component specifications",
                    "Multiple measurement system requirements",
                    "Tool calibration and maintenance needs",
                    "Production efficiency optimization"
                ],
                solutions: [
                    "Advanced dimensional inspection protocols",
                    "Comprehensive tool calibration programs",
                    "Online specification checking systems",
                    "Integrated quality management systems"
                ],
                outcomes: [
                    "25% reduction in inspection time",
                    "Improved measurement system capability",
                    "Enhanced tool reliability and accuracy",
                    "Streamlined quality control processes"
                ]
            }
        ],
        companyStats: [
            { label: "Quality Conformance", value: "99.9%", icon: _jsx(CheckCircle, { className: "w-5 h-5" }) },
            { label: "Manufacturing Experience", value: "35+ Years", icon: _jsx(Calendar, { className: "w-5 h-5" }) },
            { label: "Customer Incidents", value: "0", icon: _jsx(TrendingUp, { className: "w-5 h-5" }) },
            { label: "Certifications", value: "AS9100", icon: _jsx(Building, { className: "w-5 h-5" }) }
        ],
        designRole: "QC Inspector - Manufacturing Quality Control",
        roleImpact: [
            "Performed routine quality inspections ensuring product consistency",
            "Conducted first article and dimensional inspections for aerospace components",
            "Coordinated weekly requirements with material operations and planning teams",
            "Ensured proper identification and documentation of non-conforming products",
            "Maintained comprehensive quality records and production monitoring"
        ],
        technicalFocus: [
            "Quality Control & Inspection",
            "Dimensional Inspection",
            "First Article Inspection",
            "Tool Calibration",
            "Statistical Process Control",
            "Manufacturing Documentation"
        ]
    }
};
// Resume download functions
const downloadDavidResume = () => {
    const htmlUrl = '/david-resume.html?print=true';
    console.log('Opening David\'s resume:', htmlUrl);
    try {
        const newWindow = window.open(htmlUrl, '_blank');
        if (!newWindow) {
            window.location.href = htmlUrl;
        }
        console.log('David\'s resume opened successfully');
    }
    catch (error) {
        console.error('David\'s resume open failed:', error);
        window.location.href = htmlUrl;
    }
};
const downloadElsaResume = () => {
    const htmlUrl = '/Elsa_Monsuy_Resume.html?print=true';
    console.log('Opening Elsa\'s resume:', htmlUrl);
    try {
        const newWindow = window.open(htmlUrl, '_blank');
        if (!newWindow) {
            window.location.href = htmlUrl;
        }
        console.log('Elsa\'s resume opened successfully');
    }
    catch (error) {
        console.error('Elsa\'s resume open failed:', error);
        window.location.href = htmlUrl;
    }
};
// Legacy function for backward compatibility
const downloadResume = (profile) => {
    if (profile === 'david') {
        downloadDavidResume();
    }
    else {
        downloadElsaResume();
    }
};
// Profile color gradients for avatars
const profileColors = {
    david: 'from-blue-600 to-indigo-700',
    wife: 'from-purple-600 to-violet-700'
};
// Company Logo Component
function CompanyLogo({ companyId, size = "text-4xl" }) {
    const logos = {
        "chart-industries": _jsx("div", { className: `${size} font-bold text-blue-600`, children: "\uD83D\uDCCA" }),
        "inova-geophysical": _jsx("div", { className: `${size} font-bold text-green-600`, children: "\uD83C\uDF0D" }),
        "kbr": (_jsx("div", { className: `${size} flex items-center justify-center`, children: _jsx("div", { className: "bg-blue-600 text-white px-3 py-1 rounded font-bold text-lg tracking-wider", children: "KBR" }) })),
        "control-flow": _jsx("div", { className: `${size} font-bold text-orange-600`, children: "\u2699\uFE0F" }),
        "systel": (_jsx("div", { className: `${size} flex items-center justify-center`, children: _jsx("img", { src: "/systel-logo.svg", alt: "Systel", className: "h-8 w-auto max-w-full object-contain", style: { maxHeight: '32px' } }) })),
        "diamonds-blocks": _jsx("div", { className: `${size} font-bold text-indigo-600`, children: "\uD83D\uDC8E" }),
        "amtex": _jsx("div", { className: `${size} font-bold text-teal-600`, children: "\uD83C\uDFED" })
    };
    return logos[companyId] || _jsx("div", { className: `${size} text-gray-400`, children: "\uD83C\uDFE2" });
}
// Portfolio Switcher Component
function PortfolioSwitcher({ activeProfile, setActiveProfile }) {
    return (_jsx("div", { className: "fixed top-4 right-4 z-50", children: _jsx("div", { className: "bg-white/95 backdrop-blur-lg shadow-lg border border-gray-200/50 rounded-xl p-2", children: _jsxs("div", { className: "flex items-center gap-2", children: [_jsxs("button", { onClick: () => setActiveProfile('david'), className: clsx('flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300', activeProfile === 'david'
                            ? 'bg-blue-600 text-white shadow-lg'
                            : 'text-gray-700 hover:bg-blue-50'), children: [_jsx("div", { className: "w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm", children: "DC" }), _jsx("span", { className: "hidden sm:block", children: "David" })] }), _jsx(ArrowLeftRight, { className: "w-4 h-4 text-gray-400" }), _jsxs("button", { onClick: () => setActiveProfile('wife'), className: clsx('flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300', activeProfile === 'wife'
                            ? 'bg-emerald-600 text-white shadow-lg'
                            : 'text-gray-700 hover:bg-emerald-50'), children: [_jsx("div", { className: "w-8 h-8 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-sm", children: "EN" }), _jsx("span", { className: "hidden sm:block", children: "Elsa" })] })] }) }) }));
}
// Navigation Component
function Navigation({ activeSection, setActiveSection, currentProfile, downloadResume }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const profile = profiles[currentProfile];
    const navItems = [
        { id: 'about', label: 'About', icon: User },
        { id: 'experience', label: 'Experience', icon: Briefcase },
        { id: 'projects', label: 'Projects', icon: FolderOpen },
        { id: 'skills', label: 'Skills', icon: Award },
        { id: 'contact', label: 'Contact', icon: MessageCircle },
    ];
    const profileColors = {
        david: 'from-blue-600 to-indigo-700',
        wife: 'from-purple-600 to-violet-700'
    };
    return (_jsx("nav", { className: "fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200/50", children: _jsxs("div", { className: "container", children: [_jsxs("div", { className: "flex items-center justify-between py-4", children: [_jsxs("div", { className: "flex items-center space-x-3", children: [_jsx("div", { className: `w-10 h-10 bg-gradient-to-br ${profileColors[currentProfile]} rounded-xl flex items-center justify-center text-white font-bold text-lg`, children: profile.avatar }), _jsxs("div", { className: "hidden sm:block", children: [_jsx("div", { className: "font-bold text-xl text-gray-900", children: profile.name }), _jsx("div", { className: "text-sm text-gray-600", children: profile.title })] })] }), _jsx("div", { className: "hidden lg:flex items-center space-x-1", children: navItems.map((item) => {
                                const Icon = item.icon;
                                const isActive = activeSection === item.id;
                                return (_jsxs("button", { onClick: () => setActiveSection(item.id), className: clsx('flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-all duration-300', isActive
                                        ? currentProfile === 'david'
                                            ? 'bg-blue-600 text-white shadow-lg scale-105'
                                            : 'bg-emerald-600 text-white shadow-lg scale-105'
                                        : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'), children: [_jsx(Icon, { className: "w-4 h-4" }), _jsx("span", { children: item.label })] }, item.id));
                            }) }), _jsxs("div", { className: "flex items-center space-x-4", children: [_jsxs("button", { onClick: () => downloadResume(currentProfile), className: `hidden md:flex items-center space-x-2 px-4 py-2 rounded-xl font-semibold text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 ${currentProfile === 'david'
                                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700'
                                        : 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700'}`, children: [_jsx(Download, { className: "w-4 h-4" }), _jsx("span", { children: "Resume" })] }), _jsx("button", { onClick: () => setIsMenuOpen(!isMenuOpen), className: "lg:hidden p-2 rounded-xl bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors", children: isMenuOpen ? _jsx(X, { className: "w-5 h-5" }) : _jsx(Menu, { className: "w-5 h-5" }) })] })] }), _jsx(AnimatePresence, { children: isMenuOpen && (_jsx(motion.div, { initial: { opacity: 0, height: 0 }, animate: { opacity: 1, height: "auto" }, exit: { opacity: 0, height: 0 }, className: "lg:hidden mb-4 bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden", children: _jsx("div", { className: "p-4 space-y-2", children: navItems.map((item) => {
                                const Icon = item.icon;
                                const isActive = activeSection === item.id;
                                return (_jsxs("button", { onClick: () => {
                                        setActiveSection(item.id);
                                        setIsMenuOpen(false);
                                    }, className: clsx('flex items-center space-x-3 w-full px-4 py-3 rounded-xl font-medium transition-all duration-300', isActive
                                        ? currentProfile === 'david'
                                            ? 'bg-blue-600 text-white'
                                            : 'bg-emerald-600 text-white'
                                        : 'text-gray-700 hover:bg-gray-50'), children: [_jsx(Icon, { className: "w-5 h-5" }), _jsx("span", { children: item.label })] }, item.id));
                            }) }) })) })] }) }));
}
// About Section
function AboutSection({ currentProfile, downloadResume }) {
    const profile = profiles[currentProfile];
    const profileGradients = {
        david: 'from-blue-50 via-indigo-50 to-cyan-100',
        wife: 'from-purple-50 via-violet-50 to-indigo-100'
    };
    const buttonColors = {
        david: {
            primary: 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl',
            secondary: 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50'
        },
        wife: {
            primary: 'bg-purple-600 text-white hover:bg-purple-700 shadow-lg hover:shadow-xl',
            secondary: 'bg-white text-purple-600 border-2 border-purple-600 hover:bg-purple-50'
        }
    };
    return (_jsxs("section", { className: `section-padding bg-gradient-to-br ${profileGradients[currentProfile]} relative overflow-hidden`, children: [currentProfile === 'david' && (_jsx("div", { className: "absolute inset-0 bg-cover bg-center opacity-10", style: {
                    backgroundImage: 'url("/profile-background.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                } })), currentProfile === 'wife' && (_jsxs(_Fragment, { children: [_jsx("div", { className: "absolute inset-0 bg-cover bg-center opacity-35", style: { backgroundImage: 'url(/elsa-background.png)' } }), _jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-violet-500/10" })] })), _jsx("div", { className: "absolute inset-0 bg-white/10 backdrop-blur-none" }), _jsx("div", { className: "container relative z-10", children: _jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [_jsx(motion.div, { initial: { opacity: 0, scale: 0.5 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.8, ease: "easeOut" }, className: "mb-8", children: profile.profileImage ? (_jsx("img", { src: profile.profileImage, alt: `${profile.name} - ${profile.title}`, className: "w-32 h-32 mx-auto rounded-full object-cover border-4 border-white shadow-2xl" })) : (_jsx("div", { className: `w-32 h-32 mx-auto rounded-full bg-gradient-to-br ${profileColors[currentProfile]} flex items-center justify-center text-white text-4xl font-bold shadow-2xl border-4 border-white`, children: profile.avatar })) }), _jsx("h1", { className: "text-5xl md:text-6xl font-bold text-gray-900 mb-6", children: _jsx("span", { className: "text-gradient", children: profile.name }) }), _jsx("h2", { className: "text-2xl md:text-3xl font-semibold text-gray-700 mb-8", children: profile.title }), _jsx("p", { className: "text-xl text-gray-600 leading-relaxed mb-12 max-w-3xl mx-auto", children: profile.summary }), _jsxs("div", { className: "flex flex-wrap justify-center gap-4 mb-12", children: [_jsxs("div", { className: "flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-md", children: [_jsx(MapPin, { className: `w-5 h-5 ${currentProfile === 'david' ? 'text-blue-600' : 'text-purple-600'}` }), _jsx("span", { className: "text-gray-700", children: profile.location })] }), _jsxs("div", { className: "flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-md", children: [_jsx(Mail, { className: `w-5 h-5 ${currentProfile === 'david' ? 'text-blue-600' : 'text-purple-600'}` }), _jsx("span", { className: "text-gray-700", children: profile.email })] }), _jsxs("div", { className: "flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-md", children: [_jsx(Phone, { className: `w-5 h-5 ${currentProfile === 'david' ? 'text-blue-600' : 'text-purple-600'}` }), _jsx("span", { className: "text-gray-700", children: profile.phone })] })] }), _jsx(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.4 }, className: "mt-12", children: _jsxs("div", { className: "flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6", children: [_jsxs("button", { className: `inline-flex items-center px-8 py-4 rounded-lg font-semibold transition-all duration-200 ${buttonColors[currentProfile].primary}`, children: [_jsx(MessageCircle, { className: "w-5 h-5 mr-2" }), "Get in Touch"] }), _jsxs("button", { onClick: () => downloadResume(currentProfile), className: `inline-flex items-center px-6 py-3 text-base font-medium border border-transparent rounded-lg transition-all duration-200 ${buttonColors[currentProfile].secondary}`, children: [_jsx(Download, { className: "w-5 h-5 mr-2" }), "Download Resume"] })] }) }), currentProfile === 'david' && (_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.6 }, className: "mt-16 bg-white/30 backdrop-blur-md rounded-2xl p-8 border border-white/20", children: [_jsxs("div", { className: "text-center mb-6", children: [_jsx("h3", { className: "text-2xl font-bold text-gray-900 mb-2", children: "Industrial Equipment Expertise" }), _jsx("p", { className: "text-gray-700", children: "Specialized in Gas Compression & Process Equipment Design" })] }), _jsxs("div", { className: "grid md:grid-cols-2 gap-8 items-center", children: [_jsx("div", { children: _jsx("img", { src: "/profile-background.jpg", alt: "Industrial Gas Compression Equipment", className: "w-full h-64 object-cover rounded-xl shadow-lg" }) }), _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "flex items-start space-x-3", children: [_jsx("div", { className: "w-2 h-2 bg-blue-600 rounded-full mt-2" }), _jsxs("div", { children: [_jsx("h4", { className: "font-semibold text-gray-900", children: "Gas Compression Systems" }), _jsx("p", { className: "text-gray-700 text-sm", children: "Expert design of CCSC-H models and wide gas compression equipment for industrial applications" })] })] }), _jsxs("div", { className: "flex items-start space-x-3", children: [_jsx("div", { className: "w-2 h-2 bg-blue-600 rounded-full mt-2" }), _jsxs("div", { children: [_jsx("h4", { className: "font-semibold text-gray-900", children: "Process Equipment Design" }), _jsx("p", { className: "text-gray-700 text-sm", children: "15+ years designing pressure vessels, heat exchangers, and process equipment for oil & gas" })] })] }), _jsxs("div", { className: "flex items-start space-x-3", children: [_jsx("div", { className: "w-2 h-2 bg-blue-600 rounded-full mt-2" }), _jsxs("div", { children: [_jsx("h4", { className: "font-semibold text-gray-900", children: "ASME Compliance" }), _jsx("p", { className: "text-gray-700 text-sm", children: "Structural integrity validation for vessels up to 2,500 PSI with full regulatory compliance" })] })] })] })] })] })), currentProfile === 'wife' && (_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.6 }, className: "mt-16 bg-white/30 backdrop-blur-md rounded-2xl p-8 border border-white/20", children: [_jsxs("div", { className: "text-center mb-8", children: [_jsx("h3", { className: "text-2xl font-bold text-gray-900 mb-2", children: "Fresh Engineering Excellence" }), _jsx("p", { className: "text-gray-700", children: "The Strategic Advantage of Hiring a New Graduate Engineer" })] }), _jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "flex items-start space-x-3", children: [_jsx("div", { className: "w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center", children: _jsx(Lightbulb, { className: "w-4 h-4 text-purple-600" }) }), _jsxs("div", { children: [_jsx("h4", { className: "font-semibold text-gray-900 mb-2", children: "Latest Engineering Knowledge" }), _jsx("p", { className: "text-gray-700 text-sm", children: "Recent UT Tyler graduate with current industry standards, modern methodologies, and cutting-edge engineering practices" })] })] }), _jsxs("div", { className: "flex items-start space-x-3", children: [_jsx("div", { className: "w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center", children: _jsx(TrendingUp, { className: "w-4 h-4 text-purple-600" }) }), _jsxs("div", { children: [_jsx("h4", { className: "font-semibold text-gray-900 mb-2", children: "High Growth Potential" }), _jsx("p", { className: "text-gray-700 text-sm", children: "Eager to learn, adapt quickly, and grow with your organization - perfect for long-term engineering team development" })] })] }), _jsxs("div", { className: "flex items-start space-x-3", children: [_jsx("div", { className: "w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center", children: _jsx(Globe, { className: "w-4 h-4 text-purple-600" }) }), _jsxs("div", { children: [_jsx("h4", { className: "font-semibold text-gray-900 mb-2", children: "Trilingual Advantage" }), _jsx("p", { className: "text-gray-700 text-sm", children: "Native Spanish, fluent English, conversational French - valuable for international projects and diverse teams" })] })] })] }), _jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "flex items-start space-x-3", children: [_jsx("div", { className: "w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center", children: _jsx(Target, { className: "w-4 h-4 text-purple-600" }) }), _jsxs("div", { children: [_jsx("h4", { className: "font-semibold text-gray-900 mb-2", children: "Proven Quality Focus" }), _jsx("p", { className: "text-gray-700 text-sm", children: "Lean Six Sigma certified with hands-on experience in quality control and process improvement methodologies" })] })] }), _jsxs("div", { className: "flex items-start space-x-3", children: [_jsx("div", { className: "w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center", children: _jsx(Users, { className: "w-4 h-4 text-purple-600" }) }), _jsxs("div", { children: [_jsx("h4", { className: "font-semibold text-gray-900 mb-2", children: "Fresh Perspective" }), _jsx("p", { className: "text-gray-700 text-sm", children: "Brings innovative thinking and modern approaches to traditional engineering challenges - no outdated habits to unlearn" })] })] }), _jsxs("div", { className: "flex items-start space-x-3", children: [_jsx("div", { className: "w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center", children: _jsx(Zap, { className: "w-4 h-4 text-purple-600" }) }), _jsxs("div", { children: [_jsx("h4", { className: "font-semibold text-gray-900 mb-2", children: "Digital Native Skills" }), _jsx("p", { className: "text-gray-700 text-sm", children: "Advanced proficiency with modern CAD software, digital collaboration tools, and emerging engineering technologies" })] })] })] })] }), _jsxs("div", { className: "mt-8 p-6 bg-purple-50 rounded-xl border border-purple-200", children: [_jsx("h4", { className: "font-bold text-purple-800 mb-2", children: "Investment in Your Future" }), _jsx("p", { className: "text-purple-700 text-sm", children: "Hiring a talented new graduate like Elsa means investing in someone who will grow with your company, contribute fresh ideas, and develop into a cornerstone of your engineering team for years to come." })] })] })), currentProfile === 'wife' && (_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.8 }, className: "mt-16 relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-8 text-white", children: [_jsx("div", { className: "absolute inset-0 bg-cover bg-center opacity-45", style: { backgroundImage: 'url(/elsa-background.png)' } }), _jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-purple-900/70 via-gray-900/70 to-indigo-900/70" }), _jsxs("div", { className: "relative z-10", children: [_jsxs("div", { className: "text-center mb-8", children: [_jsx("h3", { className: "text-3xl font-bold mb-2", children: "Rugged Systems Engineering Excellence" }), _jsx("p", { className: "text-gray-300 text-lg", children: "How Mechanical Engineers Build Mission-Critical Systems" })] }), _jsxs("div", { className: "grid md:grid-cols-2 gap-8 items-center", children: [_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20", children: [_jsx("h4", { className: "text-xl font-bold text-purple-300 mb-3", children: "Systel Systems Engineering" }), _jsx("p", { className: "text-gray-300 mb-4", children: "At Systel, Elsa contributed to the engineering of rugged electronic systems designed for extreme environments and mission-critical applications." }), _jsxs("ul", { className: "space-y-2 text-sm text-gray-400", children: [_jsxs("li", { className: "flex items-start space-x-2", children: [_jsx("div", { className: "w-1.5 h-1.5 bg-purple-400 rounded-full mt-2" }), _jsx("span", { children: "Electronic system testing and validation" })] }), _jsxs("li", { className: "flex items-start space-x-2", children: [_jsx("div", { className: "w-1.5 h-1.5 bg-purple-400 rounded-full mt-2" }), _jsx("span", { children: "Quality assurance for harsh environment applications" })] }), _jsxs("li", { className: "flex items-start space-x-2", children: [_jsx("div", { className: "w-1.5 h-1.5 bg-purple-400 rounded-full mt-2" }), _jsx("span", { children: "Comprehensive testing protocol development" })] })] })] }), _jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20", children: [_jsx("h4", { className: "text-xl font-bold text-purple-300 mb-3", children: "Mechanical Engineering Impact" }), _jsx("p", { className: "text-gray-300 text-sm", children: "Mechanical engineers are essential in developing rugged systems, providing thermal management, structural integrity, and environmental protection for sensitive electronic components." })] })] }), _jsxs("div", { className: "space-y-4", children: [_jsx("h4", { className: "text-xl font-bold text-white mb-4", children: "Engineering Contributions to Rugged Systems" }), _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { className: "flex items-start space-x-3", children: [_jsx("div", { className: "w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center", children: _jsx(Settings, { className: "w-5 h-5 text-white" }) }), _jsxs("div", { children: [_jsx("h5", { className: "font-semibold text-white", children: "Thermal Management" }), _jsx("p", { className: "text-gray-400 text-sm", children: "Designing heat dissipation systems for electronic components operating in extreme temperatures" })] })] }), _jsxs("div", { className: "flex items-start space-x-3", children: [_jsx("div", { className: "w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center", children: _jsx(Shield, { className: "w-5 h-5 text-white" }) }), _jsxs("div", { children: [_jsx("h5", { className: "font-semibold text-white", children: "Environmental Protection" }), _jsx("p", { className: "text-gray-400 text-sm", children: "Creating robust enclosures that protect sensitive electronics from dust, moisture, and shock" })] })] }), _jsxs("div", { className: "flex items-start space-x-3", children: [_jsx("div", { className: "w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center", children: _jsx(Wrench, { className: "w-5 h-5 text-white" }) }), _jsxs("div", { children: [_jsx("h5", { className: "font-semibold text-white", children: "Structural Integrity" }), _jsx("p", { className: "text-gray-400 text-sm", children: "Ensuring mechanical systems can withstand vibration, impact, and environmental stresses" })] })] }), _jsxs("div", { className: "flex items-start space-x-3", children: [_jsx("div", { className: "w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center", children: _jsx(CheckCircle, { className: "w-5 h-5 text-white" }) }), _jsxs("div", { children: [_jsx("h5", { className: "font-semibold text-white", children: "Quality Assurance" }), _jsx("p", { className: "text-gray-400 text-sm", children: "Implementing rigorous testing protocols to validate system performance under extreme conditions" })] })] })] })] })] }), _jsx("div", { className: "mt-8 text-center", children: _jsxs("div", { className: "inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors", children: [_jsx(Zap, { className: "w-5 h-5 mr-2" }), _jsx("span", { children: "Engineering Resilient Systems for Tomorrow" })] }) })] })] }))] }) })] }));
}
// Experience Section
function ExperienceSection({ currentProfile }) {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState(0);
    const currentExperiences = allExperiences[currentProfile] || [];
    const getColorClasses = (color) => {
        const colors = {
            blue: { accent: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-500' },
            green: { accent: 'text-green-600', bg: 'bg-green-50', border: 'border-green-500' },
            purple: { accent: 'text-purple-600', bg: 'bg-purple-50', border: 'border-purple-500' },
            orange: { accent: 'text-orange-600', bg: 'bg-orange-50', border: 'border-orange-500' },
            pink: { accent: 'text-pink-600', bg: 'bg-pink-50', border: 'border-pink-500' },
            teal: { accent: 'text-teal-600', bg: 'bg-teal-50', border: 'border-teal-500' },
            emerald: { accent: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-500' },
        };
        return colors[color] || colors.blue;
    };
    return (_jsx("section", { className: "section-padding bg-white", children: _jsxs("div", { className: "container", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "text-4xl md:text-5xl font-bold text-gray-900 mb-6", children: "Professional Experience" }), _jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto", children: currentProfile === 'david'
                                ? "15+ years of progressive experience in mechanical design and engineering across leading companies in the energy and technology sectors."
                                : "Professional experience in mechanical design, project management, and quality control across manufacturing and construction industries. Expertise in CAD software, Lean Six Sigma processes, and multilingual communication." })] }), _jsxs("div", { className: "max-w-6xl mx-auto", children: [_jsx("div", { className: "flex flex-wrap justify-center gap-2 bg-gray-50 p-2 rounded-xl mb-8", children: currentExperiences.map((experience, index) => {
                                const colorClasses = getColorClasses(experience.color);
                                const isActive = activeTab === index;
                                return (_jsxs("button", { onClick: () => setActiveTab(index), className: clsx('flex items-center gap-3 px-6 py-4 rounded-lg font-semibold transition-all duration-300 border-2', isActive
                                        ? `${colorClasses.bg} ${colorClasses.border} ${colorClasses.accent}`
                                        : 'border-transparent text-gray-600 hover:bg-gray-100'), children: [_jsx(CompanyLogo, { companyId: experience.id, size: "text-lg" }), _jsxs("div", { className: "text-left hidden sm:block", children: [_jsx("div", { className: "font-bold text-sm", children: experience.company }), _jsx("div", { className: "text-xs opacity-75", children: experience.position })] })] }, experience.id));
                            }) }), _jsx(motion.div, { initial: { opacity: 0, x: 20 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.5 }, className: "card p-8", children: currentExperiences.map((experience, index) => {
                                if (index !== activeTab)
                                    return null;
                                const colorClasses = getColorClasses(experience.color);
                                return (_jsxs("div", { children: [_jsxs("div", { className: "flex items-center gap-4 mb-6", children: [_jsx(CompanyLogo, { companyId: experience.id, size: "text-4xl" }), _jsxs("div", { children: [_jsx("h3", { className: "text-3xl font-bold text-gray-900", children: experience.position }), _jsx("p", { className: `text-xl font-semibold ${colorClasses.accent}`, children: experience.company }), _jsxs("div", { className: "flex items-center gap-4 text-sm text-gray-600 mt-2", children: [_jsxs("div", { className: "flex items-center gap-1", children: [_jsx(Calendar, { className: "w-4 h-4" }), _jsxs("span", { children: [experience.startDate, " - ", experience.endDate] })] }), _jsxs("div", { className: "flex items-center gap-1", children: [_jsx(MapPin, { className: "w-4 h-4" }), _jsx("span", { children: experience.location })] })] })] })] }), _jsx("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8", children: experience.description.map((item, descIndex) => (_jsx(motion.div, { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.3, delay: descIndex * 0.1 }, className: "p-4 bg-gray-50 rounded-lg", children: _jsx("p", { className: "text-sm text-gray-700 leading-relaxed", children: item }) }, descIndex))) }), _jsxs("div", { className: "mb-8", children: [_jsx("h4", { className: "text-xl font-bold text-gray-900 mb-4", children: "Technologies & Tools" }), _jsx("div", { className: "flex flex-wrap gap-2", children: experience.technologies.map((tech, techIndex) => (_jsx("span", { className: `px-3 py-1 ${colorClasses.bg} ${colorClasses.accent} rounded-full text-sm font-medium`, children: tech }, techIndex))) })] }), companyDetails[experience.id] && (_jsx("div", { className: "flex justify-center", children: _jsxs("button", { onClick: () => navigate(`/company/${experience.id}`), className: `inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 ${colorClasses.bg} ${colorClasses.accent} border-2 ${colorClasses.border}`, children: [_jsx(Building, { className: "w-5 h-5" }), _jsx("span", { children: "View Company Details & Projects" }), _jsx(ExternalLink, { className: "w-4 h-4" })] }) }))] }, experience.id));
                            }) }, activeTab)] })] }) }));
}
// Skills Section
function SkillsSection({ currentProfile }) {
    const currentSkills = allSkills[currentProfile] || [];
    const profileColors = {
        david: 'text-blue-600',
        wife: 'text-purple-600'
    };
    const profileBgs = {
        david: 'bg-blue-100',
        wife: 'bg-purple-100'
    };
    return (_jsx("section", { className: "section-padding bg-gray-50", children: _jsxs("div", { className: "container", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "text-4xl md:text-5xl font-bold text-gray-900 mb-6", children: "Skills & Expertise" }), _jsxs("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto", children: ["Comprehensive technical skills in mechanical ", currentProfile === 'david' ? 'design, analysis, and engineering standards' : 'design, project management, quality control, and multilingual communication', "."] })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto", children: currentSkills.map((skill, index) => (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: index * 0.1 }, className: "card p-8 text-center", children: [_jsx("div", { className: `w-16 h-16 ${profileBgs[currentProfile]} rounded-full flex items-center justify-center mx-auto mb-6 ${profileColors[currentProfile]}`, children: skill.icon }), _jsx("h3", { className: "text-xl font-bold text-gray-900 mb-4", children: skill.category }), _jsx("div", { className: "space-y-2", children: skill.items.map((item, itemIndex) => (_jsx("div", { className: "px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700", children: item }, itemIndex))) })] }, skill.category))) })] }) }));
}
// Contact Section
function ContactSection({ currentProfile, downloadResume }) {
    const profile = profiles[currentProfile];
    const profileGradients = {
        david: 'from-blue-600 to-indigo-700',
        wife: 'from-purple-600 to-violet-700'
    };
    return (_jsx("section", { className: `section-padding bg-gradient-to-br ${profileGradients[currentProfile]} text-white`, children: _jsx("div", { className: "container", children: _jsx("div", { className: "max-w-4xl mx-auto text-center", children: _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, children: [_jsx("h2", { className: "text-4xl md:text-5xl font-bold mb-6", children: "Let's Work Together" }), _jsx("p", { className: "text-xl mb-12 opacity-90", children: currentProfile === 'david'
                                ? "Ready to bring your mechanical design projects to life? Let's discuss how my expertise can contribute to your team's success."
                                : "Ready to bring my mechanical engineering expertise to your next project? Let's discuss how my experience in design, project management, and quality control can contribute to your team's success." }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 mb-12", children: [_jsxs("div", { className: "text-center", children: [_jsx(Mail, { className: "w-8 h-8 mx-auto mb-4 opacity-80" }), _jsx("h3", { className: "font-semibold mb-2", children: "Email" }), _jsx("p", { className: "opacity-80", children: profile.email })] }), _jsxs("div", { className: "text-center", children: [_jsx(Phone, { className: "w-8 h-8 mx-auto mb-4 opacity-80" }), _jsx("h3", { className: "font-semibold mb-2", children: "Phone" }), _jsx("p", { className: "opacity-80", children: profile.phone })] }), _jsxs("div", { className: "text-center", children: [_jsx(MapPin, { className: "w-8 h-8 mx-auto mb-4 opacity-80" }), _jsx("h3", { className: "font-semibold mb-2", children: "Location" }), _jsx("p", { className: "opacity-80", children: profile.location })] })] }), _jsxs("div", { className: "flex justify-center gap-4", children: [_jsxs("button", { className: "inline-flex items-center px-8 py-4 bg-white text-gray-800 rounded-lg font-semibold hover:bg-gray-100 transition-colors", children: [_jsx(Mail, { className: "w-5 h-5 mr-2" }), "Send Email"] }), _jsxs("button", { onClick: () => downloadResume(currentProfile), className: "inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg font-semibold hover:bg-white/20 transition-colors", children: [_jsx(Download, { className: "w-5 h-5 mr-2" }), "Download Resume"] })] })] }) }) }) }));
}
// Company Detail Page Component
function CompanyDetailPage() {
    const { companyId } = useParams();
    const navigate = useNavigate();
    const company = companyDetails[companyId || ''];
    if (!company) {
        return (_jsx("div", { className: "min-h-screen bg-white flex items-center justify-center", children: _jsxs("div", { className: "text-center", children: [_jsx("h1", { className: "text-2xl font-bold text-gray-900 mb-4", children: "Company Not Found" }), _jsx("button", { onClick: () => navigate('/'), className: "btn-primary", children: "Return Home" })] }) }));
    }
    return (_jsxs("div", { className: "min-h-screen bg-white", children: [_jsx("header", { className: "bg-white border-b border-gray-200 sticky top-0 z-50", children: _jsx("div", { className: "container py-4", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("button", { onClick: () => navigate('/'), className: "flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors", children: [_jsx(ChevronLeft, { className: "w-5 h-5" }), _jsx("span", { children: "Back to Portfolio" })] }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx(CompanyLogo, { companyId: company.id, size: "text-4xl" }), _jsxs("div", { children: [_jsx("h1", { className: "text-xl font-bold text-gray-900", children: company.name }), _jsx("p", { className: "text-sm text-gray-600", children: company.industry })] })] })] }) }) }), _jsx("section", { className: `section-padding ${company.id === 'kbr' ? 'bg-gradient-to-br from-blue-50 to-blue-100' : 'bg-gradient-to-br from-blue-50 to-indigo-100'}`, children: _jsx("div", { className: "container", children: _jsx("div", { className: "max-w-6xl mx-auto", children: _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center", children: [_jsxs("div", { children: [_jsxs("div", { className: "flex items-center gap-4 mb-6", children: [_jsx("div", { className: "text-6xl", children: company.logo }), _jsxs("div", { children: [_jsx("h1", { className: "text-4xl font-bold text-gray-900 mb-2", children: company.name }), _jsx("p", { className: "text-xl text-gray-600", children: company.industry }), company.id === 'kbr' && (_jsx("p", { className: "text-lg text-blue-600 font-semibold italic mt-2", children: "\"Delivering Solutions, Changing the World\u00AE\"" }))] })] }), _jsx("p", { className: "text-lg text-gray-700 leading-relaxed mb-8", children: company.description }), _jsxs("div", { className: "grid grid-cols-2 gap-4", children: [_jsxs("div", { className: "bg-white rounded-lg p-4 shadow-sm", children: [_jsx("div", { className: "text-sm text-gray-500", children: "Founded" }), _jsx("div", { className: "font-semibold text-gray-900", children: company.founded })] }), _jsxs("div", { className: "bg-white rounded-lg p-4 shadow-sm", children: [_jsx("div", { className: "text-sm text-gray-500", children: "Employees" }), _jsx("div", { className: "font-semibold text-gray-900", children: company.employees })] }), _jsxs("div", { className: "bg-white rounded-lg p-4 shadow-sm col-span-2", children: [_jsx("div", { className: "text-sm text-gray-500", children: "Headquarters" }), _jsx("div", { className: "font-semibold text-gray-900", children: company.headquarters })] })] })] }), _jsxs("div", { className: "bg-white rounded-2xl p-8 shadow-xl", children: [_jsx("h3", { className: "text-2xl font-bold text-gray-900 mb-6", children: "Company Statistics" }), _jsx("div", { className: "space-y-6", children: company.companyStats.map((stat, index) => (_jsxs("div", { className: "flex items-center gap-4", children: [_jsx("div", { className: "w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600", children: stat.icon }), _jsxs("div", { children: [_jsx("div", { className: "text-2xl font-bold text-gray-900", children: stat.value }), _jsx("div", { className: "text-sm text-gray-600", children: stat.label })] })] }, index))) })] })] }) }) }) }), _jsx("section", { className: "section-padding bg-white", children: _jsx("div", { className: "container", children: _jsxs("div", { className: "max-w-6xl mx-auto", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "text-4xl font-bold text-gray-900 mb-6", children: "Business Focus & Market Position" }), _jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto", children: company.marketPosition })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-12", children: [_jsxs("div", { children: [_jsx("h3", { className: "text-2xl font-bold text-gray-900 mb-6", children: "Core Business Areas" }), _jsx("ul", { className: "space-y-3", children: company.businessFocus.map((focus, index) => (_jsxs("li", { className: "flex items-center gap-3", children: [_jsx(CheckCircle, { className: "w-5 h-5 text-green-600" }), _jsx("span", { className: "text-gray-700", children: focus })] }, index))) })] }), _jsxs("div", { children: [_jsx("h3", { className: "text-2xl font-bold text-gray-900 mb-6", children: "Key Products & Services" }), _jsx("ul", { className: "space-y-3", children: company.keyProducts.map((product, index) => (_jsxs("li", { className: "flex items-center gap-3", children: [_jsx(Settings, { className: "w-5 h-5 text-blue-600" }), _jsx("span", { className: "text-gray-700", children: product })] }, index))) })] })] })] }) }) }), _jsx("section", { className: "section-padding bg-gray-50", children: _jsx("div", { className: "container", children: _jsxs("div", { className: "max-w-6xl mx-auto", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "text-4xl font-bold text-gray-900 mb-6", children: company.workflowTitle }), _jsx("div", { className: "bg-white rounded-lg p-6 shadow-sm", children: _jsxs("div", { className: "flex items-center gap-3 justify-center", children: [_jsx(Briefcase, { className: "w-6 h-6 text-blue-600" }), _jsx("span", { className: "text-lg font-semibold text-gray-900", children: company.designRole })] }) })] }), _jsx("div", { className: "space-y-8", children: company.designProcess.map((step, index) => (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: index * 0.1 }, className: "card p-8", children: _jsxs("div", { className: "flex items-start gap-6", children: [_jsx("div", { className: "flex-shrink-0", children: _jsx("div", { className: "w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg", children: index + 1 }) }), _jsxs("div", { className: "flex-grow", children: [_jsxs("div", { className: "flex items-center justify-between mb-4", children: [_jsx("h3", { className: "text-2xl font-bold text-gray-900", children: step.phase }), _jsx("span", { className: "px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium", children: step.duration })] }), _jsx("p", { className: "text-gray-700 mb-6 leading-relaxed", children: step.description }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [_jsxs("div", { children: [_jsx("h4", { className: "font-semibold text-gray-900 mb-3", children: "Deliverables" }), _jsx("ul", { className: "space-y-2", children: step.deliverables.map((deliverable, dIndex) => (_jsxs("li", { className: "flex items-center gap-2 text-sm text-gray-600", children: [_jsx(ChevronRight, { className: "w-4 h-4 text-blue-600" }), deliverable] }, dIndex))) })] }), _jsxs("div", { children: [_jsx("h4", { className: "font-semibold text-gray-900 mb-3", children: "Tools & Technologies" }), _jsx("div", { className: "flex flex-wrap gap-2", children: step.tools.map((tool, tIndex) => (_jsx("span", { className: "px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm", children: tool }, tIndex))) })] })] })] })] }) }, index))) })] }) }) }), _jsx("section", { className: "section-padding bg-gray-50", children: _jsx("div", { className: "container", children: _jsxs("div", { className: "max-w-6xl mx-auto", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "text-4xl font-bold text-gray-900 mb-6", children: "Major Projects & Case Studies" }), _jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto", children: "Explore detailed case studies of major projects and engineering achievements that demonstrate our technical expertise and innovation." })] }), _jsx("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: company.majorProjects.map((project, index) => (_jsxs(motion.div, { initial: { opacity: 0, y: 50 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: index * 0.2 }, className: "bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow", children: [_jsxs("div", { className: "flex items-center gap-3 mb-6", children: [_jsx("div", { className: "w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center", children: _jsx(FolderOpen, { className: "w-6 h-6 text-blue-600" }) }), _jsxs("div", { children: [_jsx("h3", { className: "text-xl font-bold text-gray-900", children: project.name }), _jsxs("div", { className: "flex items-center gap-2 text-sm text-gray-600", children: [_jsx("span", { children: project.type }), _jsx("span", { children: "\u2022" }), _jsx("span", { className: "font-semibold text-green-600", children: project.value })] })] })] }), _jsx("p", { className: "text-gray-700 leading-relaxed mb-6", children: project.description }), _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { children: [_jsx("h4", { className: "font-semibold text-gray-900 mb-2", children: "Key Challenges" }), _jsx("ul", { className: "space-y-1", children: project.challenges.map((challenge, i) => (_jsxs("li", { className: "flex items-start gap-2 text-sm text-gray-600", children: [_jsx("div", { className: "w-1.5 h-1.5 bg-red-400 rounded-full mt-2" }), _jsx("span", { children: challenge })] }, i))) })] }), _jsxs("div", { children: [_jsx("h4", { className: "font-semibold text-gray-900 mb-2", children: "Solutions Implemented" }), _jsx("ul", { className: "space-y-1", children: project.solutions.map((solution, i) => (_jsxs("li", { className: "flex items-start gap-2 text-sm text-gray-600", children: [_jsx("div", { className: "w-1.5 h-1.5 bg-blue-400 rounded-full mt-2" }), _jsx("span", { children: solution })] }, i))) })] }), _jsxs("div", { children: [_jsx("h4", { className: "font-semibold text-gray-900 mb-2", children: "Project Outcomes" }), _jsx("ul", { className: "space-y-1", children: project.outcomes.map((outcome, i) => (_jsxs("li", { className: "flex items-start gap-2 text-sm text-gray-600", children: [_jsx("div", { className: "w-1.5 h-1.5 bg-green-400 rounded-full mt-2" }), _jsx("span", { children: outcome })] }, i))) })] })] })] }, index))) })] }) }) }), company.id === 'chart-industries' && (_jsx("section", { className: "section-padding bg-gradient-to-br from-blue-50 to-indigo-100", children: _jsx("div", { className: "container", children: _jsxs("div", { className: "max-w-6xl mx-auto", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "text-4xl font-bold text-gray-900 mb-6", children: "Industrial Equipment Showcase" }), _jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto", children: "Air-cooled heat exchangers and industrial cooling systems designed and manufactured for LNG and petrochemical applications" })] }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center", children: [_jsx(motion.div, { initial: { opacity: 0, x: -50 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.8 }, className: "relative", children: _jsxs("div", { className: "bg-white rounded-2xl p-2 shadow-xl", children: [_jsx("img", { src: "/industrial-equipment.jpg", alt: "Industrial air-cooled heat exchanger equipment designed by David Cornealius at Chart Industries", className: "w-full rounded-xl shadow-lg" }), _jsx("div", { className: "absolute -bottom-4 -right-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg", children: _jsx("span", { className: "text-sm font-semibold", children: "Live Installation" }) })] }) }), _jsxs(motion.div, { initial: { opacity: 0, x: 50 }, whileInView: { opacity: 1, x: 0 }, transition: { duration: 0.8, delay: 0.2 }, className: "space-y-6", children: [_jsxs("div", { className: "bg-white rounded-xl p-6 shadow-lg", children: [_jsx("h3", { className: "text-2xl font-bold text-gray-900 mb-4", children: "Air-Cooled Heat Exchanger Systems" }), _jsxs("ul", { className: "space-y-3 text-gray-700", children: [_jsxs("li", { className: "flex items-start gap-3", children: [_jsx(CheckCircle, { className: "w-5 h-5 text-green-600 mt-0.5" }), _jsxs("span", { children: [_jsx("strong", { children: "Finned Tube Bundles:" }), " Optimized heat transfer surface design for maximum efficiency"] })] }), _jsxs("li", { className: "flex items-start gap-3", children: [_jsx(CheckCircle, { className: "w-5 h-5 text-green-600 mt-0.5" }), _jsxs("span", { children: [_jsx("strong", { children: "Axial Flow Fans:" }), " Variable speed drive systems for optimal air flow control"] })] }), _jsxs("li", { className: "flex items-start gap-3", children: [_jsx(CheckCircle, { className: "w-5 h-5 text-green-600 mt-0.5" }), _jsxs("span", { children: [_jsx("strong", { children: "Supporting Structures:" }), " Galvanized steel framework designed for harsh environments"] })] }), _jsxs("li", { className: "flex items-start gap-3", children: [_jsx(CheckCircle, { className: "w-5 h-5 text-green-600 mt-0.5" }), _jsxs("span", { children: [_jsx("strong", { children: "Piping Systems:" }), " Integrated manifold and header designs for optimal flow distribution"] })] })] })] }), _jsxs("div", { className: "bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-6 text-white", children: [_jsx("h4", { className: "text-xl font-bold mb-3", children: "Design Specifications" }), _jsxs("div", { className: "grid grid-cols-2 gap-4 text-sm", children: [_jsxs("div", { children: [_jsx("div", { className: "font-semibold", children: "Operating Range" }), _jsx("div", { className: "opacity-90", children: "-40\u00B0F to 150\u00B0F" })] }), _jsxs("div", { children: [_jsx("div", { className: "font-semibold", children: "Pressure Rating" }), _jsx("div", { className: "opacity-90", children: "Up to 600 PSI" })] }), _jsxs("div", { children: [_jsx("div", { className: "font-semibold", children: "Capacity" }), _jsx("div", { className: "opacity-90", children: "50-500 MMBTU/hr" })] }), _jsxs("div", { children: [_jsx("div", { className: "font-semibold", children: "Applications" }), _jsx("div", { className: "opacity-90", children: "LNG, Petrochemical" })] })] })] })] })] }), _jsx("div", { className: "mt-16", children: _jsxs("div", { className: "bg-white rounded-2xl p-8 shadow-xl", children: [_jsx("h3", { className: "text-2xl font-bold text-gray-900 mb-6 text-center", children: "Equipment Model Specifications" }), _jsx("div", { className: "overflow-x-auto", children: _jsxs("table", { className: "w-full", children: [_jsx("thead", { children: _jsxs("tr", { className: "bg-blue-600 text-white", children: [_jsx("th", { className: "px-4 py-3 text-left font-semibold", children: "Model Type" }), _jsx("th", { className: "px-4 py-3 text-left font-semibold", children: "Draft" }), _jsx("th", { className: "px-4 py-3 text-left font-semibold", children: "Drive" }), _jsx("th", { className: "px-4 py-3 text-left font-semibold", children: "Fan Orientation" }), _jsx("th", { className: "px-4 py-3 text-left font-semibold", children: "Standard Coating" }), _jsx("th", { className: "px-4 py-3 text-left font-semibold", children: "Optional Coating" })] }) }), _jsxs("tbody", { className: "divide-y divide-gray-200", children: [_jsxs("tr", { className: "hover:bg-blue-50", children: [_jsx("td", { className: "px-4 py-3 font-semibold text-blue-600", children: "EH-S" }), _jsx("td", { className: "px-4 py-3", children: "Forced" }), _jsx("td", { className: "px-4 py-3", children: "Engine or Electric" }), _jsx("td", { className: "px-4 py-3", children: "Vertical" }), _jsx("td", { className: "px-4 py-3", children: "Paint" }), _jsx("td", { className: "px-4 py-3", children: "Galvanize/Metalize" })] }), _jsxs("tr", { className: "hover:bg-blue-50", children: [_jsx("td", { className: "px-4 py-3 font-semibold text-blue-600", children: "F-M" }), _jsx("td", { className: "px-4 py-3", children: "Forced" }), _jsx("td", { className: "px-4 py-3", children: "Engine or Electric" }), _jsx("td", { className: "px-4 py-3", children: "Vertical" }), _jsx("td", { className: "px-4 py-3", children: "Paint" }), _jsx("td", { className: "px-4 py-3", children: "Galvanize/Metalize" })] }), _jsxs("tr", { className: "hover:bg-blue-50", children: [_jsx("td", { className: "px-4 py-3 font-semibold text-blue-600", children: "Z-H" }), _jsx("td", { className: "px-4 py-3", children: "Forced or Induced" }), _jsx("td", { className: "px-4 py-3", children: "Electric" }), _jsx("td", { className: "px-4 py-3", children: "Horizontal" }), _jsx("td", { className: "px-4 py-3", children: "Galvanize/Metalize" }), _jsx("td", { className: "px-4 py-3", children: "Paint" })] }), _jsxs("tr", { className: "hover:bg-blue-50", children: [_jsx("td", { className: "px-4 py-3 font-semibold text-blue-600", children: "VI-L" }), _jsx("td", { className: "px-4 py-3", children: "Induced" }), _jsx("td", { className: "px-4 py-3", children: "Engine or Electric" }), _jsx("td", { className: "px-4 py-3", children: "Vertical" }), _jsx("td", { className: "px-4 py-3", children: "Paint" }), _jsx("td", { className: "px-4 py-3", children: "Galvanize/Metalize" })] }), _jsxs("tr", { className: "hover:bg-blue-50", children: [_jsx("td", { className: "px-4 py-3 font-semibold text-blue-600", children: "VV-V" }), _jsx("td", { className: "px-4 py-3", children: "Forced or Induced" }), _jsx("td", { className: "px-4 py-3", children: "Engine or Electric" }), _jsx("td", { className: "px-4 py-3", children: "Vertical" }), _jsx("td", { className: "px-4 py-3", children: "Paint" }), _jsx("td", { className: "px-4 py-3", children: "Galvanize/Metalize" })] }), _jsxs("tr", { className: "hover:bg-blue-50", children: [_jsx("td", { className: "px-4 py-3 font-semibold text-blue-600", children: "H" }), _jsx("td", { className: "px-4 py-3", children: "Forced or Induced" }), _jsx("td", { className: "px-4 py-3", children: "Electric" }), _jsx("td", { className: "px-4 py-3", children: "Horizontal" }), _jsx("td", { className: "px-4 py-3", children: "Galvanize/Metalize" }), _jsx("td", { className: "px-4 py-3", children: "Paint" })] })] })] }) }), _jsx("div", { className: "mt-4 text-sm text-gray-600 text-center", children: "Comprehensive model specifications for Chart Industries air-cooled heat exchanger systems" })] }) })] }) }) }))] }));
}
// Projects Section
function ProjectsSection({ currentProfile }) {
    const professionalProjects = projectData[currentProfile] || [];
    const academicProjectsForProfile = academicProjects[currentProfile] || [];
    const allProjects = [...professionalProjects, ...academicProjectsForProfile];
    const profileColors = {
        david: {
            gradient: 'from-blue-50 via-indigo-50 to-cyan-100',
            accent: 'blue-600',
            secondary: 'indigo-600'
        },
        wife: {
            gradient: 'from-purple-50 via-violet-50 to-indigo-100',
            accent: 'purple-600',
            secondary: 'violet-600'
        }
    };
    const colors = profileColors[currentProfile];
    return (_jsx("section", { className: `section-padding bg-gradient-to-br ${colors.gradient}`, children: _jsxs("div", { className: "container", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, className: "text-center mb-16", children: [_jsx("h2", { className: "text-4xl md:text-5xl font-bold text-gray-900 mb-6", children: currentProfile === 'david' ? 'Featured Projects' : 'Engineering Projects & Achievements' }), _jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto", children: currentProfile === 'david'
                                ? "Innovative mechanical design solutions that drive efficiency and deliver measurable results across industries."
                                : "A comprehensive showcase of engineering excellence spanning academic achievements, professional experience, and innovative problem-solving capabilities." })] }), _jsx("div", { className: "grid lg:grid-cols-2 xl:grid-cols-3 gap-8", children: allProjects.map((project, index) => (_jsxs(motion.div, { initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: index * 0.2 }, className: "bg-white/80 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group", children: [_jsxs("div", { className: `p-6 bg-gradient-to-r from-${colors.accent} to-${colors.secondary} text-white`, children: [_jsxs("div", { className: "flex items-start justify-between mb-4", children: [_jsx("h3", { className: "text-xl font-bold leading-tight", children: project.title }), _jsx("span", { className: "text-xs bg-white/20 px-2 py-1 rounded-full", children: project.timeline })] }), _jsx("p", { className: "text-sm opacity-90 mb-3", children: project.description }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsx("span", { className: "text-xs bg-white/20 px-3 py-1 rounded-full", children: project.category }), project.client && (_jsx("span", { className: "text-xs font-medium", children: project.client }))] })] }), _jsxs("div", { className: "p-6", children: [_jsxs("div", { className: `bg-${colors.accent}/5 rounded-lg p-4 mb-6`, children: [_jsx("h4", { className: `text-sm font-semibold text-${colors.accent} mb-2`, children: "Project Impact" }), _jsx("p", { className: "text-gray-800 font-medium", children: project.impact })] }), _jsxs("div", { className: "mb-6", children: [_jsx("h4", { className: "text-sm font-semibold text-gray-900 mb-3", children: "Key Achievements" }), _jsx("ul", { className: "space-y-2", children: project.highlights.slice(0, 3).map((highlight, idx) => (_jsxs("li", { className: "flex items-start space-x-2 text-sm text-gray-700", children: [_jsx(CheckCircle, { className: `w-4 h-4 text-${colors.accent} mt-0.5 flex-shrink-0` }), _jsx("span", { children: highlight })] }, idx))) })] }), _jsxs("div", { children: [_jsx("h4", { className: "text-sm font-semibold text-gray-900 mb-3", children: "Technologies & Tools" }), _jsx("div", { className: "flex flex-wrap gap-2", children: project.technologies.map((tech, idx) => (_jsx("span", { className: `px-3 py-1 bg-${colors.accent}/10 text-${colors.accent} text-xs rounded-full font-medium`, children: tech }, idx))) })] })] }), _jsx("div", { className: `px-6 pb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300`, children: _jsx("button", { className: "w-full py-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-200", children: "View Project Details" }) })] }, project.id))) }), _jsx(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.6 }, className: "text-center mt-16", children: _jsxs("div", { className: "bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/20", children: [_jsx("h3", { className: "text-2xl font-bold text-gray-900 mb-4", children: currentProfile === 'david'
                                    ? "Ready to Discuss Your Next Project?"
                                    : "Ready to Contribute Fresh Engineering Perspective?" }), _jsx("p", { className: "text-gray-600 mb-6 max-w-2xl mx-auto", children: currentProfile === 'david'
                                    ? "Let's collaborate on innovative mechanical design solutions that drive efficiency and exceed expectations."
                                    : "I'm excited to bring my UT Tyler engineering education, fresh perspective, and proven ability to learn quickly to your engineering team." }), _jsxs("button", { className: `inline-flex items-center px-8 py-3 bg-gradient-to-r from-${colors.accent} to-${colors.secondary} text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-200`, children: [_jsx(MessageCircle, { className: "w-5 h-5 mr-2" }), "Let's Connect"] })] }) })] }) }));
}
// Main App Component with Router
function App() {
    const [activeSection, setActiveSection] = useState('about');
    // Elsa's portfolio - hardcoded to Elsa's profile only
    const activeProfile = 'elsa';
    useEffect(() => {
        const handleScroll = () => {
            const sections = ['about', 'experience', 'projects', 'skills', 'contact'];
            const scrollY = window.scrollY + 100;
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setActiveSection(sectionId);
    };
    return (_jsx(Router, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/company/:companyId", element: _jsx(CompanyDetailPage, {}) }), _jsx(Route, { path: "/", element: _jsxs("div", { className: "min-h-screen bg-white", children: [_jsx(Navigation, { activeSection: activeSection, setActiveSection: scrollToSection, currentProfile: activeProfile, downloadResume: downloadResume }), _jsx("div", { id: "about", children: _jsx(AboutSection, { currentProfile: activeProfile, downloadResume: downloadResume }) }), _jsx("div", { id: "experience", children: _jsx(ExperienceSection, { currentProfile: activeProfile }) }), _jsx("div", { id: "projects", children: _jsx(ProjectsSection, { currentProfile: activeProfile }) }), _jsx("div", { id: "skills", children: _jsx(SkillsSection, { currentProfile: activeProfile }) }), _jsx("div", { id: "contact", children: _jsx(ContactSection, { currentProfile: activeProfile, downloadResume: downloadResume }) })] }) })] }) }));
}
export default App;
