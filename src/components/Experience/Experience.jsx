import SectionTitle from "../SectionTitle";
import { useRef, useEffect } from "react";
import gsap from "gsap";
//import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
    {
        id: 1,
        company: "Independent Projects",
        role: "Self-Employed",
        date: "Dec 2025 – Present",
        descriptions: [
            "Built responsive web applications using React.js, JavaScript, and Tailwind CSS, delivering consistent experiences across desktop and mobile platforms.",
            "Integrated RESTful APIs and implemented Redux-based state management, improving application data flow and maintainability",
            "Created reusable React UI components used across multiple pages, reducing development duplication and improving maintainability.",
            "Optimized frontend performance optimizations including lazy loading and code splitting, improving page load speed and rendering efficiency.",
            "Utilized AI-assisted development tools to accelerate prototyping and streamline development workflows."
        ]
    },
    {
        id: 2,
        company: "Xtracut Systems",
        role: "UI/UX Developer",
        date: "Aug 2024 - Dec 2025",
        descriptions: [
            "Designed and delivered responsive, user-friendly websites and Landing pages for various clients, from educational institutions to corporate entities, including a full web platform for India Nippon Electricals.",
            "Developed high-performance landing pages for marketing campaigns, improving page load speeds by 40% and contributing to a 15% increase in client conversions through optimized UI/UX. ",
            "Translated intricate Figma design systems into pixel-perfect, interactive components that ensured brand consistency for every client project. ",
            "Used a modular development approach, creating a reusable React component library for the team which helped reduce overall build times by 30%. ",
            "Optimized visual hierarchy and front-end application logic across client projects, focusing on providing smooth, intuitive interaction flows."
        ]
    },
    {
        id: 3,
        company: "Virtusa",
        role: "Associate Engineer",
        date: "June 2022 - Aug 2024",
        descriptions: [
            "Collaborated on the frontend development of an internal enterprise portal with UI/UX Designers, creating responsive UI components that helped employees easily access timesheet portals and company tools.",
            "Worked alongside the team to connect frontend UI components with backend REST APIs, ensuring data was retrieved and displayed correctly across the application.",
            "Performed UI testing during the redesign of an internal enterprise portal used by employees to access timesheet and internal tools, ensuring consistent rendering across browsers and devices."
        ]
    }
];

const Experience = () => {
    const timelineWrapperRef = useRef(null);
    const lineRef = useRef(null);
    const dotRefs = useRef([]);

    useEffect(() => {
        gsap.fromTo(
            lineRef.current,
            { scaleY: 0 },
            {
                scaleY: 1,
                ease: "none",
                scrollTrigger: {
                    trigger: timelineWrapperRef.current,
                    start: "top center",
                    end: "bottom center",
                    scrub: 0.7,
                },
            }
        );

        dotRefs.current.forEach((dot) => {
            if (!dot) return;
            gsap.to(dot, {
                backgroundColor: "#FF9000",
                borderColor: "#FF9000",
                boxShadow: "0 0 10px rgba(255,255,255,0.5)",
                duration: 0.1,
                ease: "power3.inOut",
                scrollTrigger: {
                    trigger: dot,
                    start: "top center",
                    toggleActions: "play none none reverse",
                }
            });
        });

        return () => ScrollTrigger.getAll().forEach(t => t.kill());
    }, []);

    return (
        <section className="mx-30 py-20">
            <div className="grid grid-cols-5 items-start">
                <div className="mb-16 col-span-2 sticky top-24">
                    <p className="text-p1 font-body text-secondary">CAREER PATH</p>
                    <SectionTitle title="The journey so far" />
                </div>
                <div className="col-span-3 text-primarywhite">
                    {/* TIMELINE WRAPPER 
          This holds both the absolute line and the relative content. 
        */}
                    <div className="relative w-full md:ml-12 lg:ml-24" ref={timelineWrapperRef}>

                        {/* --- THE LINE CONTAINER --- */}
                        {/* Note the width classes: w-12 md:w-20 */}
                        <div className="absolute top-0 bottom-0 left-0 w-12 md:w-20 flex justify-center z-0">
                            {/* The static background track */}
                            <div className="w-[2px] h-full bg-[#282828] overflow-hidden">
                                {/* The Animated Gradient Line */}
                                <div
                                    ref={lineRef}
                                    className="w-full h-full bg-gradient-to-b from-transparent from via-[#FFB350] via-77% to-[#FF9000] to-100% origin-top"
                                />
                            </div>
                        </div>

                        {/* --- THE CONTENT CONTAINER --- */}
                        <div className="relative z-10 w-full flex flex-col pb-30 pt-10">
                            {experiences.map((exp, index) => (
                                <div key={exp.id} className="flex w-full mb-24 last:mb-0">

                                    {/* THE DOT CONTAINER */}
                                    {/* It uses the exact same width classes (w-12 md:w-20) and justify-center! */}
                                    <div className="w-12 md:w-20 flex justify-center shrink-0 mt-4">
                                        <div
                                            ref={(el) => (dotRefs.current[index] = el)}
                                            // Initial state: black background, gray border. GSAP will animate this to white.
                                            className="w-3 h-3 bg-[#282828] border border-[#282828] rounded-full will-change-transform transition-shadow"
                                        />
                                    </div>

                                    {/* Left side: Company, Role, Date (flex-1 lets it take the rest of the row) */}
                                    <div className="flex-1 flex flex-col gap-8">

                                        <div className="flex flex-col gap-2">
                                            <h4 className="text-h4 font-bold">{exp.company}</h4>
                                            <p className="text-p1 font-light text-muted">{exp.role} ● {exp.date}</p>
                                            <div className="text-p1 max-w-2/3 font-light">
                                                {exp.descriptions.map((desc, i) => (
                                                    <div key={i} className="flex gap-2 text-gray-400 text-[1rem] md:text-[1.2rem] leading-relaxed">
                                                        <p>{desc}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience