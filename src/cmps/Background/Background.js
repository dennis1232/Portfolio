
import React, { useEffect } from 'react'

import './Background.scss'
import AOS from "aos";
import "aos/dist/aos.css";
import Me from '../../assets/profile.jpg'

export const Background = () => {
  useEffect(() => {
    AOS.init({ duration: 700 })

  }, [])
  return (
    <section data-aos="fade-up" className="section background">
      <div className="section-title ">BACKGROUND</div>
      <div className="section-content">
        <div className='content flex' >
          <div>

            <p>Hello everyone my name is Dennis Nemirovski 23 years old, I am FullStack Developer, seeking to take on exiciting new challenges.</p>
            <br/>
            <p>Passion for problem solving and experience in the latetest web technologies such as React.js, Vue.js, Native and Node.js</p>
            <br/>
            <p>My interest in web development started in 2020 when I finished my service at IDF as Krav Maga Instructor</p>
          </div>
          <img className='profile-picture' src={Me} alt="" />
        </div>
      </div>
    </section>
  )
}

