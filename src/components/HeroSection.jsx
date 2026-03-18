import OpportunityPill from "./herosection/OpportunityPill"
import MarqueeStrip from "./herosection/MarqueeStrip"
import SectionTitle from "./SectionTitle"

const HeroSection = () => {
    return (
        <section >
            <div className="h-[calc(100vh-5.7rem)] mx-30">
            <div className="absolute inset-0 -z-[1]">
                <img src="herobg.png" alt="hero-bg" className='object-cover h-full w-full' />
            </div>
            <div className="container mx-auto">
                <div className="flex flex-col items-center justify-center h-full">
                    <h1 className="font-display leading-[1.1] text-center herotext text-primarywhite">Creative<br />Developer</h1>
                    <img className="absolute -bottom-6 scale-[.95]" src="hero.png" alt="Gokul Krishna K Creative Developer" />
                </div>
            </div>
            <div className="flex justify-between pt-10">
                <div className='intro-text items-start'>
                    <h4 className='text-h3 font-body text-primarywhite'>Hi, I'm Gokul Krishna K</h4>
                    <p className='text-p2 font-body max-w-sm font-light text-primarywhite'>Crafting digital experiences and built them, from NSE-listed corporate platforms to AI-powered developer tools.</p>
                </div>
                 <div className="flex flex-col gap-5">
                    <div className="pill-tag">
                        <OpportunityPill />
                        <span className="job-profile text-p2 font-body text-primarywhite ">Open to new opportunities</span>
                    </div>
                    <a href="resume/GokulKrishnaK_Resume.pdf" className="btn-primary flex items-center justify-center">
                        <span className=" text-p1 font-body">Download Resume</span>
                        <img src="arrow-slant.svg" alt="arrow-slant" />
                    </a>
                </div>        
            </div>
            </div>
            <div className="z-10">
                <MarqueeStrip
                    items={["INTERACTIVE", "ENGAGING", "RESPONSIVE", "DYNAMIC", "ACCESSIBLE"]}
                    speed={50}
                />
            </div>
        </section>
    )
}

export default HeroSection