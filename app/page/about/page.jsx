"use client";

import React, { useEffect, useRef, useState } from "react";
import "./about.css";
import Image from "next/image";
import acess from "../../../public/assests/acess.jpg";
import right from "../../../public/assests/sub-title-right.svg";
import left from "../../../public/assests/sub-title-left.svg";
const AboutSection = () => {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress based on section position
      // When section is at bottom: progress = 0 (dull)
      // When section is at top: progress = 1 (bright white)
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      
      // Calculate progress (0 to 1)
      let progress = 0;
      
      if (sectionTop < windowHeight && sectionTop > -sectionHeight) {
        // Section is visible
        progress = Math.max(0, Math.min(1, 1 - (sectionTop / windowHeight)));
      } else if (sectionTop <= -sectionHeight) {
        // Section has scrolled past
        progress = 1;
      }
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate opacity based on scroll progress
  // 0.3 (dull) to 1 (bright white)
  const textOpacity = 0.3 + (scrollProgress * 0.7);

  return (
    <>
    <section className="about-section" ref={sectionRef}>
      <div className="about-container">
      <div className="about">
        <Image
          src={left}
          alt="Left decoration"/>
          &nbsp;&nbsp;&nbsp;
        <p>Who we are</p>
        &nbsp;&nbsp;&nbsp;
        <Image
          src={right}
          alt="Right decoration"/>
      </div>

     <h1 className="about-heading">
  <span
    className="about-heading-fill"
    style={{
      '--fill-percent': `${scrollProgress * 100}%`
    }}
  >
    At Yunuak, we help organizations transform operations <br />
    through digital innovation, process engineering, and smart <br />
    technology. We believe every business deserves strategies <br />
    that drive efficiency, scalability, and sustainable growth. Our <br />
    team blends deep industry expertise with a <br />
    forward-thinking approach to streamline supply chains, <br />
    optimize workflows, and deliver future-ready solutions like <br/>
    our ERP system YunutyConnect and mobile applications.
  </span>
</h1>

        <button className="about-button">
          More About Us
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 20 20" 
            fill="none" 
            className="arrow-icon"
          >
            <path 
              d="M4 10H16M16 10L11 5M16 10L11 15" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Background Grid Effect */}
      <div className="grid-background"></div>


    </section>
    <Image
        src={acess}
        alt="About Image"
        className="acess-img"
        />

        
</>
  );
};

export default AboutSection;