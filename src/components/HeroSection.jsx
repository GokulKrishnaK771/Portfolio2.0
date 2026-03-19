import OpportunityPill from "./herosection/OpportunityPill"

const HeroSection = () => {
    return (
        <section className="relative w-full overflow-hidden h-screen">
            <div className="absolute inset-0 -z-[1]">
                <img
                    src="herobg.png"
                    alt="hero-bg"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="h-[calc(100vh-5rem)] px-4 sm:px-8 md:px-16 lg:px-[7.5rem] flex flex-col justify-between">

                {/* Hero title */}
                <div className="flex-1 flex flex-col items-center justify-center md:pt-10">
                    <h1 className="font-display herotext leading-[1.1] text-center text-primarywhite">
                        Creative<br />Developer
                    </h1>
                    <img
                        className="absolute bottom-0  w-[400px] md:w-[450px] lg:w-[500px] xl:w-[530px]"
                        src="hero.png"
                        alt="Gokul Krishna K Creative Developer"
                    />
                </div>

                {/* Bottom row */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 z-1 -mb-5 bottom-0">
                    <div className="flex flex-col gap-2">
                        <h4 className="text-h3 font-body text-primarywhite">Hi, I'm Gokul Krishna</h4>
                        <p className="text-p1 font-body max-w-xs md:max-w-sm font-light text-primarywhite">
                            Crafting digital experiences. Engineering them for the web.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4 sm:gap-5 sm:items-end">
                        <div className="pill-tag self-start sm:self-auto">
                            <OpportunityPill />
                            <span className="text-p2 font-body text-primarywhite">Open to new opportunities</span>
                        </div>

                        <a href="resume/GokulKrishnaK_Resume.pdf"
                            className="btn-primary self-start sm:self-auto"
                        >
                            <span className="text-p1 font-body">Download Resume</span>
                            <img src="arrow-slant.svg" alt="arrow-slant" />
                        </a>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default HeroSection