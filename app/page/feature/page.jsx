import React from 'react'
import Image from 'next/image';
import fourth from ".././../../public/assests/fourth.jpg";
import "./feature.css";
function page() {
  return (
    <>
    <Image
        src={fourth}
        alt="Feature Image"
        className="feature-img"
        />
    </>
  )
}

export default page
