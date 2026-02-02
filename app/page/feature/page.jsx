"use client";
import React, { useState } from "react"; 
import Image from 'next/image';
import fourth from ".././../../public/assests/fourth.jpg";
import fifth from ".././../../public/assests/fifth.jpg";
import right from "../../../public/assests/sub-title-right.svg";
import left from "../../../public/assests/sub-title-left.svg";

import "./feature.css";
function Page() {

     const images = ["/assests/f1.png", "/assests/f2.png", "/assests/f3.png"];
  const [index, setIndex] = useState(0);

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };
  return (
    <>
    <Image
        src={fourth}
        alt="Feature Image"
        className="feature-img"
        />

<Image
        src={fifth}
        alt="Feature Image"
        className="fifth"
        />

<div className="cta">
  <section className="cta-banner">
      <div className="cta-container">
        <div className="cta-content">
          <h2 className="cta-text">
            Stop writer's block and generate fresh content ideas with our AI assistant. Take your content to next level!
          </h2>
        </div>
        
        <div className="cta-button-wrapper">
          <button className="cta-button">
            Get A Demo
          </button>
        </div>
      </div>
      
      <div className="cta-grid-bg"></div>
    </section>
</div>


<div className="built-section">
  <div className="built-container">
    <div className="built-left">
      <div className="built-subtitle">
          <Image
                     src={left}
                     alt=""
                     width={79}
                     height={17}
                     className="no-shrink"
                   />
&nbsp;&nbsp;&nbsp;
        <p>Built for you</p>
        &nbsp;&nbsp;&nbsp;
             <Image
                     src={right}
                     alt=""
                     width={79}
                     height={17}
                     className="no-shrink"
                   />
      </div>

      <h2>What We've Built for You</h2>
      <p className="built-desc">
        Designed to simplify operations, accelerate growth, and help businesses thrive in an ever-evolving digital world.
      </p>

      <button className="built-btn">Explore More →</button>
    </div>

    <div className="built-right">
        {/* <h3>Realtime-Tracking Data</h3> */}
        {/* <p>Track your content performance and leverage data-driven insights.</p> */}
     <div
      className="card-preview"
      onClick={nextImage}
      style={{
        backgroundImage: `url(${images[index]})`,
        cursor: "pointer",
      }}
    > </div>   </div>
  </div>
</div>
    </>
  )
}

export default Page
