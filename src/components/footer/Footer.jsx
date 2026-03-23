import React, { useState } from 'react';
import { Copy, Check, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import RotatingBadge from './RotatingBadge';
import OpportunityPill from '../herosection/OpportunityPill';
import SocialIcon from './SocialIcons';
import githubIcon from "../../assets/Github.svg";
import linkedinIcon from "../../assets/Linkedin.svg";
import mailIcon from "../../assets/Mail.svg";

const Footer = () => {
  const [status, setStatus] = useState('idle');

  const handleCopy = () => {
    navigator.clipboard.writeText('gokulkrishnak771@gmail.com');
    setStatus('clicked');
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <footer id="contact" className="w-full pt-32 flex flex-col items-center relative overflow-hidden">
      <div className='grid grid-cols-1 md:grid-cols-2 mx-4 md:mx-30 items-center justify-center'>
        <div className='flex items-center justify-center order-1 md:order-2'>
          <RotatingBadge />
        </div>
        <div className='flex flex-col items-center md:items-start md:justify-start order-2 md:order-1'>
          <div className="pill-tag mt-5">
            <OpportunityPill />
            <span className="job-profile text-p2 font-light text-[var(--color-border-green)] ">Available for full time roles</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-center md:text-left mt-10 leading-[1.2] tracking-normal text-white">
            From Concept to <span className="text-[var(--color-amber)] font-bold">Creation</span><br />
            Let's Make it <span className="text-white font-bold tracking-tight">Happen!</span>
          </h2>

          <p className="text-muted text-center md:text-left mt-6 text-p1 font-body max-w-3xl leading-relaxed">
            I'm currently open to Frontend Developer and UI/UX Designer roles.<br />
If you're building something great, let's talk.
          </p>

          <div className="flex flex-col md:flex-row flex-wrap justify-center md:justify-start items-center gap-4 mt-6">
            <a href="resume/GokulKrishnaK_Resume.pdf" className="btn-primary flex items-center justify-center" target="_blank" rel="noopener noreferrer">
              <span className=" text-p1 font-body">Download Resume</span>
              <img src="arrow-slant.svg" alt="arrow-slant" />
            </a>

            <button
              onClick={handleCopy}
              className="flex items-center btn-secondary cursor-pointer"
            >
              {status === 'clicked' ? <Check size={18} className="text-green-400" /> : <Copy size={18} className="text-[#6C6C6C]" />}
              <span className=" text-p1 font-body">gokulkrishnak771@gmail.com</span>
            </button>
            <div className='flex items-center gap-4'>
              <SocialIcon
                href="https://github.com/GokulKrishnaK771"
                icon={githubIcon}
                alt="GitHub"
              />
              <SocialIcon
                href="https://www.linkedin.com/in/gokulkrishnak/"
                icon={linkedinIcon}
                alt="LinkedIn"
              />
            </div>
          </div>
        </div>
      </div>



      <div className="w-[95vw] mt-10 flex flex-col items-center">
        <div className="w-[95vw] h-[1px] bg-[var(--color-text-secondary)] mb-6" />
        <p className="text-secondary text-sm md:text-lg font-body text-center px-4 md:px-0">
          Designed & built by Gokul Krishna · ©2026
        </p>
      </div>

      <div className="w-full flex justify-center mt-2 overflow-hidden select-none pointer-events-none">
        <h1 className="text-[20vw] text-secondary font-display leading-[.8] tracking-tighter text-center whitespace-nowrap">
          @gokulkrishnak
        </h1>
      </div>
    </footer>
  );
};

export default Footer;