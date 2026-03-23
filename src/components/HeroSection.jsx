import OpportunityPill from "./herosection/OpportunityPill"
import { useState, useEffect } from "react"

const roles = ['Developer', 'Designer']

const typeWriter = (words, typingSpeed = 80, deletingSpeed = 50, pauseTime = 2000) => {
    const [text, setText] = useState('')
    const [wordIndex, setWordIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        const currentWord = words[wordIndex]

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setText(currentWord.substring(0, text.length + 1))
                if (text.length + 1 === currentWord.length) {
                    setTimeout(() => setIsDeleting(true), pauseTime)
                }
            } else {
                setText(currentWord.substring(0, text.length - 1))
                if (text.length - 1 === 0) {
                    setIsDeleting(false)
                    setWordIndex(prev => (prev + 1) % words.length)
                }
            }
        }, isDeleting ? deletingSpeed : typingSpeed)

        return () => clearTimeout(timeout)
    }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime])

    return text
}

const HeroSection = () => {
    const displayText = typeWriter(roles)

    const [firstWord] = displayText.split(' ')

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
                    <h1 className="absolute top-50 sm:top-20 font-display-book 2xl:text-[19rem] lg:text-[15rem] md:text-[13rem] sm:text-[10rem] xs:text-[9rem] text-[6rem] leading-[1.1] text-center text-primarywhite">
                        Creative<br />
                        <span>
                            {firstWord || '\u00A0'}
                            {/* <span className="animate-pulse">|</span> */}
                        </span>

                    </h1>
                    <img
                        className="absolute bottom-0  w-[350px] md:w-[400px] lg:w-[450px] xl:w-[500px] 2xl:w-[530px]"
                        src="hero.png"
                        alt="Gokul Krishna K Creative Developer"
                    />
                </div>

                {/* Bottom row */}
                <div className="flex flex-col sm:flex-row sm:justify-between items-center sm:items-end gap-4 z-1 sm:-mb-5 -mb-15 bottom-0">
                    <div className="flex flex-col gap-2 items-center sm:items-start">
                        <h4 className="text-h3 font-body text-primarywhite sm:text-center text-left">Hi, I'm Gokul Krishna</h4>
                        <p className="text-p1 font-body max-w-xs md:max-w-sm font-light text-primarywhite text-center sm:text-left">
                            Crafting digital experiences. Engineering them for the web.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4 sm:gap-5 sm:items-end">
                        <div className="pill-tag self-start sm:self-auto">
                            <OpportunityPill />
                            <span className="text-p2 font-body text-primarywhite">Open to new opportunities</span>
                        </div>

                        <a href="resume/GokulKrishnaK_Resume.pdf" className="btn-primary self-start sm:self-auto" target="_blank" rel="noopener noreferrer">
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