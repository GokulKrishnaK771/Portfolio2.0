import SectionTitle from "../SectionTitle";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
    {
        id: 1,
        company: "Freelance Designer & Developer",
        role: "Self-Employed",
        date: "Dec 2025 – Present",
        descriptions: [
            "Taking on freelance projects while going deep on frontend engineering. Designed and built the Pallanguzhi 3D landing page for Shilpashastra - from Figma layout to Three.js implementation with GSAP animations. Built and shipped the AI Component Builder - a live React tool that generates React,Tailwind UI components from natural language prompts using AI API integration and Redux state management."
        ]
    },
    {
        id: 2,
        company: "Xtracut Systems",
        role: "UI/UX Developer",
        date: "Aug 2024 - Dec 2025",
        descriptions: [
            "Led the full redesign of India Nippon Electricals' corporate website - the most complex project I've worked on. Sole designer across every page, from Figma wireframes to design handoff, and contributed to building the React component library used across the project. Also shipped high-conversion landing pages for marketing campaigns and designed social media assets for corporate and education clients."
        ]
    },
    {
        id: 3,
        company: "Virtusa",
        role: "Associate Engineer",
        date: "June 2022 - Aug 2024",
        descriptions: [
            "I performed UI and functional testing on Google Nest Hub display devices - validating interface behaviour across real hardware. Also built and ran automation test suites for web applications using Selenium, Java, TestNG, and Maven.",
            "Two years of breaking software gave me something most designers and developers don't have - I instinctively think about what fails before I think about what works. That mindset shapes everything I build today."
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
        <section className="px-4 sm:px-8 md:px-16 lg:px-[7.5rem] py-20">

            {/* Mobile title - static, only visible below md */}
            <div className="xl:hidden mb-10">
                <p className="section-label">CAREER PATH</p>
                <SectionTitle title="The journey so far" />
            </div>

            <div className="grid grid-cols-5 items-start">

                {/* Desktop sticky title - hidden on mobile */}
                <div className="hidden xl:block lg:col-span-2 sticky top-24">
                    <p className="section-label">CAREER PATH</p>
                    <SectionTitle title="The journey so far" />
                </div>

                {/* Timeline - full width on mobile, 3 cols on md+ */}
                <div className="col-span-5 xl:col-span-3 text-primarywhite">
                    <div className="relative w-full md:ml-12 lg:ml-24" ref={timelineWrapperRef}>

                        {/* Line track */}
                        <div className="absolute top-0 bottom-0 left-0 w-8 md:w-20 flex justify-center z-0">
                            <div className="w-[2px] h-full bg-[#282828] overflow-hidden">
                                <div
                                    ref={lineRef}
                                    className="w-full h-full bg-gradient-to-b from-transparent from via-[#FFB350] via-77% to-[#FF9000] to-100% origin-top"
                                />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="relative z-10 w-full flex flex-col pb-16 md:pb-30 pt-10">
                            {experiences.map((exp, index) => (
                                <div key={exp.id} className="flex w-full mb-12 md:mb-24 last:mb-0">

                                    {/* Dot */}
                                    <div className="w-8 md:w-20 flex justify-center shrink-0 mt-1 md:mt-4">
                                        <div
                                            ref={(el) => (dotRefs.current[index] = el)}
                                            className="w-3 h-3 bg-[#282828] border border-[#282828] rounded-full will-change-transform transition-shadow"
                                        />
                                    </div>

                                    {/* Entry content */}
                                    <div className="flex-1 flex flex-col gap-4 md:gap-8">
                                        <div className="flex flex-col gap-2">
                                            <h4 className="text-h4 font-bold leading-tight">{exp.company}</h4>
                                            <p className="text-p1 font-light text-muted">{exp.role} ● {exp.date}</p>
                                            <div className="flex flex-col gap-1 mt-1">
                                                {exp.descriptions.map((desc, i) => (
                                                    <div key={i} className="flex gap-2 text-gray-400 text-[1rem] md:text-[1.2rem] leading-relaxed">
                                                        <span className="text-gray-500 mt-1.5 text-[10px]">●</span>
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
    );
}

export default Experience;