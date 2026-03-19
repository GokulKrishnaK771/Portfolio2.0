import { useState } from "react";
import SectionTitle from "../SectionTitle";
import Tag from "../Tags";
import { Link } from 'react-router-dom';
import heroNew from '../../assets/inel/INEL newhomepage.png'

export const UserIcon = () => (
    <svg height="18" width="18" fill="none" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_629_167)">
            <path d="M15.364 11.636C14.3837 10.6558 13.217 9.93013 11.9439 9.49085C13.3074 8.55179 14.2031 6.9802 14.2031 5.20312C14.2031 2.33413 11.869 0 9 0C6.131 0 3.79688 2.33413 3.79688 5.20312C3.79688 6.9802 4.69262 8.55179 6.05609 9.49085C4.78308 9.93013 3.61631 10.6558 2.63605 11.636C0.936176 13.3359 0 15.596 0 18H1.40625C1.40625 13.8128 4.81279 10.4062 9 10.4062C13.1872 10.4062 16.5938 13.8128 16.5938 18H18C18 15.596 17.0638 13.3359 15.364 11.636ZM9 9C6.90641 9 5.20312 7.29675 5.20312 5.20312C5.20312 3.1095 6.90641 1.40625 9 1.40625C11.0936 1.40625 12.7969 3.1095 12.7969 5.20312C12.7969 7.29675 11.0936 9 9 9Z" fill="var(--color-text-muted)" />
        </g>
    </svg>
);

export const ClockIcon = () => (
    <svg height="18" width="18" fill="none" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_629_201)">
            <path d="M12.2067 10.5894L9.69703 8.70714V4.87293C9.69703 4.48741 9.38541 4.17578 8.99988 4.17578C8.61436 4.17578 8.30273 4.48741 8.30273 4.87293V9.05575C8.30273 9.27534 8.40592 9.48241 8.58159 9.61347L11.3701 11.7049C11.4956 11.799 11.642 11.8443 11.7877 11.8443C12.0003 11.8443 12.2095 11.7488 12.3461 11.5647C12.5776 11.2573 12.5149 10.8202 12.2067 10.5894Z" fill="var(--color-text-muted)" />
            <path d="M9 0C4.0371 0 0 4.0371 0 9C0 13.9629 4.0371 18 9 18C13.9629 18 18 13.9629 18 9C18 4.0371 13.9629 0 9 0ZM9 16.6057C4.80674 16.6057 1.39426 13.1933 1.39426 9C1.39426 4.80674 4.80674 1.39426 9 1.39426C13.194 1.39426 16.6057 4.80674 16.6057 9C16.6057 13.1933 13.1933 16.6057 9 16.6057Z" fill="var(--color-text-muted)" />
        </g>
    </svg>
);

export const ChartIcon = () => (
    <svg height="18" width="18" fill="none" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_629_225)">
            <mask height="18" id="mask0_629_225" style={{ "maskType": "luminance" }} width="18" x="0" y="0" maskUnits="userSpaceOnUse">
                <path d="M0 0H18V18H0V0Z" fill="var(--color-text-muted)" />
            </mask>
            <g mask="url(#mask0_629_225)">
                <path d="M17.7803 3.96967C18.0732 4.26256 18.0732 4.73743 17.7803 5.03033L10.6553 12.1553C10.3624 12.4482 9.88755 12.4482 9.59468 12.1553L6.375 8.93565L1.28033 14.0303C0.987435 14.3232 0.512563 14.3232 0.21967 14.0303C-0.0732233 13.7374 -0.0732233 13.2625 0.21967 12.9697L5.84467 7.34467C6.13757 7.05178 6.61244 7.05178 6.90533 7.34467L10.125 10.5643L16.7197 3.96967C17.0126 3.67678 17.4874 3.67678 17.7803 3.96967Z" fill="white" fillRule="evenodd" />
                <path d="M12 4.5C12 4.08579 12.3358 3.75 12.75 3.75H17.25C17.6642 3.75 18 4.08579 18 4.5V9C18 9.41423 17.6642 9.75 17.25 9.75C16.8358 9.75 16.5 9.41423 16.5 9V5.25H12.75C12.3358 5.25 12 4.91421 12 4.5Z" fill="white" fillRule="evenodd" />
            </g>
        </g>
    </svg>
);

export const ArrowUpRightIcon = () => (
    <svg height="20" width="20" fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.3367 7.845L6.16417 15.0175L4.98584 13.8392L12.1575 6.66667H5.83667V5H15.0033V14.1667H13.3367V7.845Z" fill="currentColor" />
    </svg>
);

export const ChevronLeftIcon = () => (
    <svg height="12" width="12" fill="none" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_629_272)">
            <path d="M0.912558 5.77404L10.8257 0.0348326C10.906 -0.0116109 11.0057 -0.0116109 11.0871 0.0348326C11.1674 0.0812761 11.2175 0.167364 11.2175 0.26074V11.7391C11.2175 11.8325 11.1674 11.9186 11.0871 11.965C11.0469 11.988 11.0015 12 10.9567 12C10.9113 12 10.8664 11.9885 10.8257 11.965L0.912558 6.22583C0.832217 6.17887 0.782642 6.09278 0.782642 5.99992C0.782642 5.90706 0.832217 5.82046 0.912558 5.77404Z" fill="#373737" />
        </g>
        <defs>
            <clipPath id="clip0_629_272">
                <rect height="12" width="12" fill="white" transform="matrix(-1 0 0 1 12 0)" />
            </clipPath>
        </defs>
    </svg>
);

export const ChevronRightIcon = () => (
    <svg height="12" width="12" fill="none" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_629_265)">
            <path d="M11.0874 5.77404L1.17429 0.0348326C1.09395 -0.0116109 0.994291 -0.0116109 0.912899 0.0348326C0.832558 0.0812761 0.782471 0.167364 0.782471 0.26074V11.7391C0.782471 11.8325 0.832558 11.9186 0.912899 11.965C0.953081 11.988 0.998473 12 1.04333 12C1.08872 12 1.1336 11.9885 1.17429 11.965L11.0874 6.22583C11.1678 6.17887 11.2174 6.09278 11.2174 5.99992C11.2174 5.90706 11.1678 5.82046 11.0874 5.77404Z" fill="#373737" />
        </g>
        <defs>
            <clipPath id="clip0_629_265">
                <rect height="12" width="12" fill="white" />
            </clipPath>
        </defs>
    </svg>
);

const PROJECTS_DATA = [
    {
        id: 1,
        title: "India Nippon Electricals- Website Revamp",
        description: "Full corporate website redesign for an NSE-listed automotive manufacturer - designed and built solo.",
        tags: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"],
        role: "UI/UX Designer",
        duration: "2-3 Months",
        impact: "% impact or anything impacted",
        caseStudyUrl: '/casestudy/india-nippon',
        liveSiteUrl: 'https://indianippon.com',
        // Replace with actual screenshot: import indiaImg from '../assets/india-nippon.jpg'
        image: heroNew,
    },
    {
        id: 2,
        title: "E-Commerce Platform Redesign",
        description: "Revamped the user experience and interface for a major online retailer, focusing on conversion funnel optimization.",
        tags: ["React", "TailwindCSS", "Framer Motion"],
        role: "Frontend Developer",
        duration: "6 Months",
        impact: "35% increase in checkout conversions",
    },
    {
        id: 3,
        title: "Fintech Mobile Application",
        description: "End-to-end product design for a personal finance management app allowing users to track expenses and investments.",
        tags: ["Product Design", "React Native", "UX Research"],
        role: "Lead Designer",
        duration: "12 Months",
        impact: "1M+ App Store downloads",
    },
];

const FeaturedProjects = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleNext = () => setActiveIndex(prev => (prev + 1) % PROJECTS_DATA.length);
    const handlePrev = () => setActiveIndex(prev => (prev - 1 + PROJECTS_DATA.length) % PROJECTS_DATA.length);

    const activeProject = PROJECTS_DATA[activeIndex];

    return (
        <section id="projects" className="mx-30 py-20">
            <div className="mb-16">
                <p className="text-p1 font-body text-secondary">PROJECTS</p>
                <SectionTitle title="Featured Works" />
            </div>

            <div className="mt-20 mx">
                {/* Carousel Container */}
                <div className="relative w-full max-w-[650px] mx-auto h-[250px] sm:h-[350px] md:h-[400px] flex justify-center items-center perspective-1000">
                    {PROJECTS_DATA.map((project, index) => {
                        let offset = index - activeIndex;
                        const total = PROJECTS_DATA.length;
                        const half = Math.floor(total / 2);
                        if (offset > half) offset -= total;
                        if (offset < -half) offset += total;

                        const isActive = offset === 0;
                        const isPrev = offset === -1;
                        const isNext = offset === 1;

                        let transformStyle = '';
                        let opacityClass = 'opacity-0 pointer-events-none';
                        let zIndex = '-10';
                        let bgClass = 'bg-gradient-to-br from-white to-black/80 border-white/5';

                        if (isActive) {
                            transformStyle = 'translateX(0) scale(1)';
                            opacityClass = 'opacity-100 pointer-events-auto';
                            zIndex = '10';
                            bgClass = 'border-amber-500/60 shadow-[0_0_50px_rgba(249,115,22,0.1)]';
                        } else if (isPrev) {
                            transformStyle = 'translateX(-65%) scale(0.85)';
                            opacityClass = 'opacity-60 pointer-events-auto cursor-pointer hover:opacity-80';
                            zIndex = '0';
                        } else if (isNext) {
                            transformStyle = 'translateX(65%) scale(0.85)';
                            opacityClass = 'opacity-60 pointer-events-auto cursor-pointer hover:opacity-80';
                            zIndex = '0';
                        } else {
                            transformStyle = `translateX(${offset > 0 ? '150%' : '-150%'}) scale(0.7)`;
                        }

                        return (
                            <div
                                key={project.id}
                                className={`absolute w-full h-full rounded-[24px] md:rounded-[32px] border transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] flex flex-col justify-end p-6 md:p-8 backdrop-blur-md ${bgClass} ${opacityClass}`}
                                style={{ transform: transformStyle, zIndex }}
                                onClick={() => {
                                    if (isPrev || isNext) setActiveIndex(index);
                                }}
                            >
                                {project.image && (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="absolute inset-0 w-full h-full object-cover rounded-[24px] md:rounded-[32px]"
                                    />
                                )}

                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent rounded-[24px] md:rounded-[32px]" />

                                {/* Project name on card */}
                                {isActive && (
                                    <div className="relative z-10">
                                        <p className="font-bold text-white text-lg">{project.title}</p>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Active Project Details */}
                <div className="mt-10 text-center max-w-3xl mx-auto flex flex-col items-center">
                    <h2 className="text-3xl sm:text-4xl md:text-[44px] font-body font-medium text-white mb-6 transition-all duration-500">
                        {activeProject.title}
                    </h2>

                    <p className="text-p1 text-muted font-light md:text-lg mb-8 font-body max-w-2xl leading-tight">
                        {activeProject.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap justify-center gap-3 mb-4">
                        {activeProject.tags.map((tag, index) => (
                            <Tag key={index} label={tag} />
                        ))}
                    </div>

                    {/* Meta details */}
                    <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 text-xs md:text-lg text-muted mb-6 font-body">
                        <div className="flex items-center gap-4">
                            <UserIcon /> {activeProject.role}
                        </div>
                        <div className="flex items-center gap-4">
                            <ClockIcon /> {activeProject.duration}
                        </div>
                        <div className="flex items-center gap-4">
                            <ChartIcon /> {activeProject.impact}
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
                        <Link to={activeProject.caseStudyUrl || "#"} className="btn-primary">
                            View Case Study <ArrowUpRightIcon />
                        </Link>
                        <a href={activeProject.liveSiteUrl || "#"} target="_blank" rel="noopener noreferrer" className="btn-secondary bg-[var(--color-text-secondary)] text-[var(--color-text-muted)]">
                            Live Site <ArrowUpRightIcon />
                        </a>
                    </div>

                    {/* Indicators */}
                    <div className="flex items-center justify-center gap-3">
                        <button
                            onClick={handlePrev}
                            className="text-[#555] hover:text-white transition-colors p-2"
                            aria-label="Previous project"
                        >
                            <ChevronLeftIcon />
                        </button>

                        <div className="flex items-center gap-3">
                            {PROJECTS_DATA.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setActiveIndex(i)}
                                    className={`h-2 rounded-full transition-all duration-300 ${i === activeIndex ? 'w-8 bg-white/60' : 'w-2 bg-[#333] hover:bg-white/40'}`}
                                    aria-label={`Go to project ${i + 1}`}
                                />
                            ))}
                        </div>

                        <button
                            onClick={handleNext}
                            className="text-[#555] hover:text-white transition-colors p-2"
                            aria-label="Next project"
                        >
                            <ChevronRightIcon />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProjects;