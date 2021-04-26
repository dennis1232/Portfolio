
import React,{useEffect} from 'react'

import './Skills.scss'
import AOS from "aos";
import "aos/dist/aos.css";

export const Skills= ()=>  {
  useEffect(() => {
    AOS.init({duration:1000})
   
  }, [])

  return(
    <section data-aos="fade-up" className="section skillz">
    <div className="section-title">SKILLS</div>
    <div className="skills section-content">
        <ul className="skills-category">
            <div className="skills-category-label">LANGUAGES</div>
            <li className="skills-category-item">JavaScript (ES6)</li>
            <li className="skills-category-item">TypeScript</li>
            <li className="skills-category-item">HTML</li>
            <li className="skills-category-item">CSS/Sass</li>
        </ul>
        <ul className="skills-category">
            <div className="skills-category-label">FRAMEWORKS</div>
            <li className="skills-category-item">React</li>
            <li className="skills-category-item">Vue</li>
            <li className="skills-category-item">Node.js</li>
            <li className="skills-category-item">CSS/Sass</li>
        </ul>
        <ul className="skills-category">
            <div className="skills-category-label">TOOLS</div>
            <li className="skills-category-item">Git & Github</li>
            <li className="skills-category-item">Chrome DevTools</li>
            <li className="skills-category-item">postman</li>
            <li className="skills-category-item">MongoDB</li>
            <li className="skills-category-item">FireBase</li>
        </ul>
        </div>
</section>
  )
}

