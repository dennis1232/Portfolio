
import React, { useEffect } from 'react'

import './Background.scss'
import AOS from "aos";
import "aos/dist/aos.css";

export const Background = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 })

  }, [])
  return (
    <section data-aos="fade-up" className="section background">
      <div className="section-title">BACKGROUND</div>
      <div className="section-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis repellendus quaerat molestiae. Assumenda, dolore. Maxime, voluptatibus dignissimos debitis neque ut nostrum, veritatis aspernatur asperiores saepe dolor enim error! Quas, veniam.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis repellendus quaerat molestiae. Assumenda, dolore. Maxime, voluptatibus dignissimos debitis neque ut nostrum, veritatis aspernatur asperiores saepe dolor enim error! Quas, veniam.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis repellendus quaerat molestiae. Assumenda, dolore. Maxime, voluptatibus dignissimos debitis neque ut nostrum, veritatis aspernatur asperiores saepe dolor enim error! Quas, veniam.</p>
      </div>
    </section>
  )
}

