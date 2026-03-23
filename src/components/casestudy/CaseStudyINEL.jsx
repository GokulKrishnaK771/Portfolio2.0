import { useEffect } from 'react'
import { Link } from 'react-router-dom'

// ── Swap nulls with your actual imports when ready ──
import heroNew from '../../assets/inel/INEL newhomepage.png'
import heroOld from '../../assets/inel/INEL oldhomepage.jpg'
import productsImg from '../../assets/inel/INEL-new-products.jpg'
import interactionVideo from '../../assets/inel/inel-interaction.mp4'
// import figmaImg from '../../assets/inel-figma.jpg'

const IMAGES = {
  heroNew: heroNew,
  heroOld: heroOld,
  products: productsImg,
  interactionVideo: interactionVideo,
  figma: null,
}

function Img({ src, alt, height = 'h-[420px]', caption }) {
  return (
    <div className="mb-2">
      {src ? (
        <img src={src} alt={alt} className={`w-full ${height} object-cover rounded-xl block`} />
      ) : (
        <div className={`w-full ${height} bg-white/[0.04] border border-white/[0.08] rounded-xl flex items-center justify-center font-body text-xs text-white/20`}>
          {alt} - add screenshot here
        </div>
      )}
      {caption && (
        <p className="font-body text-[11px] text-white/25 text-center mt-2 italic">{caption}</p>
      )}
    </div>
  )
}

function Tag({ children }) {
  return (
    <span className="inline-flex items-center border-2 border-[var(--color-border)] rounded-full px-3 py-1 font-light text-p3 text-muted m-[3px]">
      {children}
    </span>
  )
}

function SectionLabel({ children }) {
  return <p className="font-body text-p3 text-secondary uppercase tracking-[2px] mb-3">{children}</p>
}

function SectionHeading({ children }) {
  return <h2 className="font-bold text-h4 text-primarywhite leading-tight mb-4">{children}</h2>
}

function BodyText({ children, className = '' }) {
  return (
    <p className={`font-body text-p3 text-muted leading-[1.85] mb-4 ${className}`}>{children}</p>
  )
}

function ProblemCard({ title, description }) {
  return (
    <div className="bg-secondary border-y border-r border-[var(--color-border-hover)] border-l-2 border-l-[var(--color-amber)] rounded-r-xl px-5 py-4 mb-3">
      <p className="font-bold text-p3 text-white/85 mb-1.5">{title}</p>
      <p className="font-light text-p2 text-white/45 leading-[1.7]">{description}</p>
    </div>
  )
}

function DecisionCard({ title, description }) {
  return (
    <div className="border border-[var(--color-border-hover)] rounded-xl px-5 py-5 mb-3">
      <p className="font-bold text-p2 text-white/88 mb-2">{title}</p>
      <p className="font-light text-p3 text-white/45 leading-[1.75]">{description}</p>
    </div>
  )
}

function MetricCard({ value, label, color = 'text-[var(--color-amber)]' }) {
  return (
    <div className="bg-[var(--color-text-secondary)]/[0.2] border border-white/[0.08] rounded-xl px-6 py-5 text-center">
      <p className={`font-display text-h3 leading-none mb-1.5 ${color}`}>{value}</p>
      <p className="font-light text-p3 text-muted">{label}</p>
    </div>
  )
}

function ProcessStep({ step, title, body }) {
  return (
    <div className="grid grid-cols-[48px_1fr] gap-5 mb-7 items-start">
      <p className="font-display text-h3 text-[var(--color-amber)] opacity-70 pt-0.5">{step}</p>
      <div>
        <p className="font-bold text-p2 text-white/88 mb-2">{title}</p>
        <p className="font-light text-p3 text-white/50 leading-[1.8]">{body}</p>
      </div>
    </div>
  )
}

function Learning({ title, body }) {
  return (
    <div className="flex gap-4 mb-6 items-start">
      <div className="w-2 h-2 rounded-full bg-[var(--color-amber)] shrink-0 mt-[7px]" />
      <div>
        <p className="font-bold text-p2 text-white/85 mb-1.5">{title}</p>
        <p className="font-light text-p3 text-muted leading-[1.8]">{body}</p>
      </div>
    </div>
  )
}

export default function CaseStudyINEL() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="bg-[var(--color-bg)] min-h-screen text-white">

      {/* Navbar */}
      {/* <nav className="fixed top-0 left-0 right-0 z-[100] flex justify-between items-center px-10 py-5 bg-[rgba(8,8,8,0.9)] backdrop-blur-xl border-b border-white/[0.06]">
        <Link to="/" className="font-body text-[13px] text-white/50 flex items-center gap-1.5 transition-colors duration-200 hover:text-white/90">
          ← Back to portfolio
        </Link>
        <span className="font-body text-[13px] text-white/30">Case Study</span>
      </nav> */}

      {/* Hero banner */}
      <div className=" bg-gradient-to-b from-[rgba(180,80,0,0.15)] to-transparent border-white/[0.06]">
        <div className="max-w-[1000px] mx-auto px-10 pt-[60px]">

          <h1 className="font-display text-h2 text-white/95 leading-[1.05] tracking-[-1px] mb-5">
            India Nippon<br />
            <span className="text-[var(--color-amber)]">Electricals</span>
          </h1>

          <p className="font-light text-p2 text-muted leading-[1.75] max-w-[600px] mb-6">
            Full corporate website redesign for one of India's leading automotive ignition system manufacturers - an NSE-listed company supplying TVS, Hero, Bajaj, Honda, Yamaha, and 15+ other OEMs.
          </p>

           <div className="flex flex-wrap gap-2 mb-6">
            <Tag>UI/UX Design</Tag>
            <Tag>Website Development</Tag>
            <Tag>Corporate Website</Tag>
            <Tag>2024–25</Tag>
          </div>

          {/* Role table */}
          <div className="grid grid-cols-4 gap-[5px] bg-[var(--color-amber)]/[0.06] rounded-xl overflow-hidden mb-12 max-sm:grid-cols-2">
            {[
              { label: 'Role', value: 'UI/UX Designer & Frontend Contributor' },
              { label: 'Duration', value: '2–3 Months' },
              { label: 'Year', value: '2024–25' },
              { label: 'Deliverable', value: 'Full Website' },
            ].map(item => (
              <div key={item.label} className="bg-white/[0.03] px-5 py-4">
                <p className="font-light text-[.8rem] text-muted uppercase tracking-[1px] mb-1.5">{item.label}</p>
                <p className="font-bold text-p2 text-white/85">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-[1100px] mx-auto px-10">
          <Img src={IMAGES.heroNew} alt="India Nippon new website hero" height="h-[500px]"/>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-[900px] mx-auto px-10 py-20">

        {/* 01 Overview */}
        <div className="mb-20">
          <SectionLabel>01 - Overview</SectionLabel>
          <SectionHeading>The Brief</SectionHeading>
          <BodyText>
            India Nippon Electricals Ltd (INEL) is a publicly listed company on the NSE, and one of India's leading manufacturers of automotive ignition systems, mechatronic components, and EV solutions. Their clients include{' '}
            <span className="text-primarywhite">TVS, Hero, Bajaj, Honda, Yamaha, Royal Enfield, KTM, Kawasaki</span>,{' '}
            and 15+ other major OEMs. They ship <span className="text-primarywhite">11 million+ units annually</span> across 12+ countries and employ 2,000+ people.
          </BodyText>
          <BodyText>
            Despite being a significant player in the automotive sector, their digital presence did not reflect the scale and credibility of their business.{' '}
            <span className="text-[var(--color-amber)] italic">Xtracut was engaged to redesign and rebuild the entire corporate website from scratch.</span>
          </BodyText>
          <BodyText>
            I was the sole designer on this project - responsible for every page, from initial Figma wireframes through to final design handoff and component library contribution.
          </BodyText>
        </div>

        {/* 02 Problem */}
        <div className="mb-20">
          <SectionLabel>02 - The Problem</SectionLabel>
          <SectionHeading>What was broken</SectionHeading>
          <BodyText>
            INEL's existing website suffered from several compounding issues that were hurting their business credibility - particularly with international OEM partners and potential investors.
          </BodyText>

          <div className="mb-8">
            <Img src={IMAGES.heroOld} alt="India Nippon old website" height="h-full" caption="The old site - cluttered navigation, certification banners above the fold, no clear hierarchy" />
          </div>

          <ProblemCard title="Credibility Gap" description="Outdated visual design that did not reflect INEL's scale as an NSE-listed, globally recognised manufacturer. The site led with certification badges - content for employees, not customers or investors." />
          <ProblemCard title="Broken Mobile Experience" description="The site was not responsive - the mobile experience was broken across key pages, critical for a modern corporate audience visiting from phones." />
          <ProblemCard title="Poor Navigation Structure" description="Navigation was confusing - users had difficulty finding products, investor information, and contact details quickly. No clear paths for OEM partners, investors, and job seekers." />
          <ProblemCard title="Slow Performance" description="Slow page load times were impacting both user experience and search visibility. No image optimisation, no lazy loading, no performance considerations." />
          <ProblemCard title="Low Enquiry Conversion" description="No clear CTAs or journey for OEM partners to get in touch. The site was not converting visitors into enquiries effectively." />

          <div className="bg-[var(--color-amber-subtle)] border border-[var(--color-amber)]/20 rounded-xl px-6 py-5 mt-6">
            <p className="font-body text-p2 text-white/60 leading-[1.75]">
              <span className="text-[var(--color-amber)] font-bold">The business stakes: </span>
              INEL's website is visited by procurement teams from global OEM brands, institutional investors, potential employees, and media. A weak digital presence was directly undermining trust and enquiry volume for a company operating at this scale.
            </p>
          </div>
        </div>

        {/* 03 Process */}
        <div className="mb-20">
          <SectionLabel>03 - My Process</SectionLabel>
          <SectionHeading>How I approached it</SectionHeading>
          <ProcessStep step="01" title="Discovery & Stakeholder Alignment" body="I began with a structured discovery call with the key stakeholder from INEL and their direct manager. Rather than jumping straight into design, I made sure I understood the business context first - their brand positioning, their primary audiences, and what success looked like for them." />
          <ProcessStep step="02" title="Competitor & Reference Research" body="I analysed competitor websites from global automotive manufacturers - Bosch, Denso, Valeo. The pattern was clear: dark, cinematic, engineering-forward. I identified where INEL could match industry standards and where they could differentiate." />
          <ProcessStep step="03" title="Design in Figma" body="I designed every page of the website in Figma before any development began - homepage, about, products, technology, investors, sustainability, careers, newsroom, and contact. Built a reusable component library." />
          <ProcessStep step="04" title="Weekly Iteration with Client" body="I had weekly review calls with the INEL stakeholder and their boss to walk through design progress, gather feedback, and iterate. I maintained a feedback log and presented design rationale for every key decision - not just showing screens but explaining why." />
          <ProcessStep step="05" title="Frontend Implementation" body="After final design approval, I contributed to the frontend implementation in Next.js and Tailwind CSS - translating Figma designs into pixel-perfect components, building reusable UI elements for the team, and supporting the integration of third-party APIs including the live NSE/BSE stock ticker for the investor section." />

          {/* <div className="mt-8">
            <Img src={IMAGES.figma} alt="Figma design system" height="h-[400px]" caption="Component library and page designs in Figma" />
          </div> */}
        </div>

        {/* 04 Key Design Decisions */}
        <div className="mb-20">
          <SectionLabel>04 - Key Design Decisions</SectionLabel>
          <SectionHeading>Why I made the choices I made</SectionHeading>
          <DecisionCard title="Clean corporate aesthetic - credibility through whitespace" description="The old site felt cluttered despite using dark colours. I went the opposite direction - bright, whitespace-driven, and structured. INEL's audience is OEM procurement teams and institutional investors, both of whom trust clarity over drama. The hero is the one exception - a full-screen dark video of vehicle light trails - creating cinematic impact at entry before giving way to clean white sections below." />
          <DecisionCard title="Diagonal section cuts - the signature detail" description="The key visual decision was diagonal cuts between content sections. It breaks the typical boxy corporate layout and gives the page a sense of momentum. An automotive company should feel like it's in motion. This detail is what the client noticed first." />
          <DecisionCard title="Video hero - immediate scale communication" description="Rather than a static hero image, I designed a full-screen video hero that immediately communicates the scale and movement of manufacturing. Paired with a bold headline and two clear CTAs, this was designed to reduce bounce immediately." />
          <DecisionCard title="OEM partner logo marquee - trust signal" description="20+ OEM partner logos (TVS, Hero, Bajaj, Honda, Yamaha, KTM etc.) placed prominently as a continuous scrolling strip. For a B2B company, social proof from recognisable brands is one of the strongest conversion signals." />
          <DecisionCard title="Navigation restructure - four user paths" description="The old navigation was flat and hard to scan. I restructured into a clear system with logical groupings - Products, Investors, Careers, and ESS Portal for the distinct user types." />
          <DecisionCard title="Data-heavy sections - clarity over density" description="The investor and sustainability sections required displaying complex data. I used large stat callouts (85% renewable energy, 39 patents, 11M+ units) rather than tables - making numbers readable for both analysts and general visitors." />

          {/* <div className="mt-8">
            <Img src={IMAGES.products} alt="India Nippon product pages" height="h-full" caption="Product catalogue pages - clean grid with clear hierarchy" />
          </div> */}
        </div>

        {/* Before & After */}
        <div className="mb-20">
          <SectionLabel>Before &amp; After</SectionLabel>
          <SectionHeading>The transformation</SectionHeading>
          <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
            <Img src={IMAGES.heroOld} alt="Old India Nippon site" height="h-[280px]" caption="Before - 2024" />
            <Img src={IMAGES.heroNew} alt="New India Nippon site" height="h-[280px]" caption="After - redesigned" />
          </div>
          {/* <div className="mt-4">
            <video src={IMAGES.interactionVideo} alt="Mobile responsive views" controls height="h-[340px]" caption="Mobile-first responsive design - one of the primary failure points of the old site" />
          </div> */}
        </div>

        {/* 05 Results */}
        <div className="mb-20">
          <SectionLabel>05 - Results</SectionLabel>
          <SectionHeading>What changed</SectionHeading>
          <BodyText>
            The redesigned website is live and actively used by INEL's global OEM partners, institutional investors, media, and job seekers. The credit{' '}
            <span className="text-white/90">'Design &amp; developed by Xtracut'</span> is published in the footer - a public acknowledgement on a website representing an NSE-listed company.
          </BodyText>

          <div className="grid grid-cols-2 gap-3 mb-8 max-sm:grid-cols-1">
            <MetricCard value="30%" label="Faster page development via reusable component library" />
            <MetricCard value="+30%" label="Average conversion lift on campaign landing pages" color="text-[#4ade80]" />
            <MetricCard value="20+" label="OEM partner logos featured as trust signals" color="text-[#c4b5fd]" />
            <MetricCard value="Every page" label="Designed & implemented solo across all sections" color="text-white/70" />
          </div>

          <BodyText>
            The investor section integrates live NSE/BSE stock data. The careers section has structured FAQs and culture content. The newsroom features press coverage from The Hindu and Mobility Outlook. Each section serves a distinct audience - all designed to the same visual standard.
          </BodyText>
        </div>

        {/* 06 Learnings */}
        <div className="mb-20">
          <SectionLabel>06 - What I Learned</SectionLabel>
          <SectionHeading>Reflections</SectionHeading>
          <Learning title="Stakeholder management is a design skill" body="Weekly reviews with decision-makers kept the project on track and built trust - the design was never a surprise at handoff. Presenting rationale, not just screens, changed how clients engaged with feedback." />
          <Learning title="Enterprise B2B design requires a different lens" body="Credibility, data clarity, and navigation efficiency matter more than delight and animation. The goal is to make procurement managers trust faster, not just impress them visually." />
          <Learning title="Building what you design saves time and fidelity" body="Building the component library in both Figma and code simultaneously ensured design-to-dev fidelity and reduced rework significantly. This is now a standard part of my process." />
          <Learning title="QA background is a design superpower" body="My QA roots meant I caught edge cases in responsive layouts and cross-browser rendering that a designer without dev exposure would have missed. It showed up in the quality of the final product." />
        </div>

        {/* Bottom CTA */}
        <div className="border-t border-white/[0.08] pt-12 flex justify-between items-center flex-wrap gap-5">
          <div>
            <p className="font-body text-p2 text-white/30 mb-1.5">Live project</p>
            <a href="https://indianippon.com" className="flex items-center justify-center text-white gap-3" target="_blank" rel="noopener noreferrer">
              <span className=" text-p1 font-body">indianippon.com</span>
              <svg height="20" width="20" fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.3367 7.845L6.16417 15.0175L4.98584 13.8392L12.1575 6.66667H5.83667V5H15.0033V14.1667H13.3367V7.845Z" fill="currentColor" />
              </svg>
            </a>
          </div>
          <div className="flex gap-3 flex-wrap">
            <a href="/#" className="btn-secondary flex items-center justify-center">
              <svg height="20" width="20" fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 9H3.8L9.4 3.4L8 2L0 10L8 18L9.4 16.6L3.8 11H20V9Z" fill="currentColor" />
              </svg>
              <span className=" text-p2font-body">Back to portfolio</span>
            </a>
            <a href="/#contact" className="btn-primary flex items-center justify-center">
              <span className=" text-p2 font-body">Let's Work</span>
              <img src="/arrow-slant.svg" alt="arrow-slant" />
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}
