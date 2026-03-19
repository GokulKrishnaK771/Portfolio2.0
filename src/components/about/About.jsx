import SectionTitle from '../SectionTitle'
import Tag from '../Tags'
import GithubContributions from './GitHubContributions'
import OpportunityPill from '../herosection/OpportunityPill'

const Toolbox = [
    "Figma",
    "Adobe XD",
    "Adobe Photoshop",
    "Adobe Illustrator",
    "React",
    "Next.js",
    "TailwindCSS",
    "Redux",
    "TypeScript",
    "JavaScript",
    "Git",
    "GitHub",
    "Framer Motion",
    "API Intengration",    
]

const LocationIcon = () => (
    <svg height="18" width="14" fill="none" viewBox="0 0 14 18" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.75 0C3.0285 0 0 3.0495 0 6.79875C0 12.126 6.1155 17.6265 6.37575 17.8575C6.483 17.9527 6.6165 18 6.75 18C6.8835 18 7.017 17.9528 7.12425 17.8582C7.3845 17.6265 13.5 12.126 13.5 6.79875C13.5 3.0495 10.4715 0 6.75 0ZM6.75 10.5C4.68225 10.5 3 8.81775 3 6.75C3 4.68225 4.68225 3 6.75 3C8.81775 3 10.5 4.68225 10.5 6.75C10.5 8.81775 8.81775 10.5 6.75 10.5Z" fill="#FFB350" />
    </svg>
)

const About = () => {
    return (
        <section id="about" className="mx-4 md:mx-30 py-20">
            <div className="mb-20">
                <p className="text-p1 font-body text-secondary">ABOUT ME</p>
                <SectionTitle title="The story behind the work" />
            </div>
            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 row-auto gap-6 max-w-7xl mx-auto">

                {/* Who I am */}
                <div className="md:col-span-2 border border-white/10 rounded-[24px] p-8 md:p-10 flex flex-col">
                    <h3 className="text-secondary font-body text-p1 mb-6">Who I am</h3>
                    <p className="text-primarywhite font-light text-p1 leading-relaxed max-w-3xl">
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in
                        a piece of classical Latin literature from 45 BC, making it over 2000 years old.
                        Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,
                        looked up one of the more obscure Latin words, consectetur, from a Lorem
                        Ipsum passage, and going through
                    </p>
                </div>

                {/* Currently */}
                <div className="md:col-span-1 border border-white/10 rounded-[24px] p-8 md:p-10 flex flex-col">
                    <h3 className="text-secondary font-body text-p1 mb-6">Currently</h3>

                    <div className="flex flex-col items-start gap-6">
                        <div className="pill-tag">
                            <OpportunityPill />
                            <span className="job-profile text-p2 font-light text-[#00FF29] ">Open to new opportunities</span>
                        </div>

                        <div className="pill-tagorange">
                            <LocationIcon />
                            <span className="job-profile text-p2 font-light text-[var(--color-amber)] ">Chennai, India</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 md:mt-auto">
                        <span className="text-[6rem] font-display text-[var(--color-amber)]">3+</span>
                        <span className="text-muted fontl-light text-p1 max-w-md">Years of<br />real work</span>
                    </div>
                </div>

                {/* Github Activity */}
                <div className="md:col-span-2 border border-white/10 rounded-[24px] p-8 md:p-10 flex flex-col min-h-[280px]">
                    <div className='flex justify-between'>
                        <h3 className="text-secondary font-body text-p1">Github Activity</h3>
                        <div className="flex items-center gap-2 text-muted font-light">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full">
                                <svg fill="currentColor" height="24" viewBox="0 0 16 16" width="24"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
                            </div>

                            <a href="https://github.com/GokulKrishnaK" className="text-sm font-semibold">
                                @GokulKrishnaK771
                            </a>

                        </div>
                    </div>
                    <div className="text-white  pt-10">
                        <GithubContributions />
                    </div>
                </div>

                {/* Current Mood */}
                <div className="md:col-span-1 border border-white/10 rounded-[24px] p-8 md:p-10 flex flex-col min-h-[280px]">
                    <h3 className="text-secondary font-body text-p1 mb-6">Current Mood</h3>
                    {/* Content goes here */}
                </div>

                {/* My Toolbox */}
                <div className="md:col-span-3 bg-[#0a0a0a]/80 border border-white/10 rounded-[24px] p-8 md:p-10 flex flex-col">
                    <h3 className="text-secondary font-body text-p1 mb-6">My Toolbox</h3>
                    <div className="flex flex-wrap gap-4">
                        {Toolbox.map((tool, i) => (
                            <Tag key={i} label={`${tool}`} />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About