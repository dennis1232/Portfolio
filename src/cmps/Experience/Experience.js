
import React, { useEffect } from 'react'

import AOS from 'aos'
import "aos/dist/aos.css";
import './Experience.scss'

import Pdf from '../../assets/documents/CV.pdf'

export const Experience = () => {
  useEffect(() => {
    AOS.init({ duration: 900 })

  }, [])
  return (
    <section data-aos="fade-up" className="section experience">

      <div className="section-title ">experience</div>
      <div className="section-content jobs">
        <div className="job">
          <div className="time-place">
            <div className="job-company">
              <a href="https://www.codaproject.co.il/project/1857/" target="_blank">Coda - LatetPe</a>
            </div>
            <div className="job-time"> Jan 2021 - Present</div>
          </div>
          <div className="job-position">Latet Pe by Coda Project, volunteer work: A game app that helps parent and children to
                                                    communicate better to increase the child’s protection:</div>
          <ul className='doing'>
            <li>Build front-end architecture.</li>
            <li>mplement front-end logic, including state management using React context and
            hooks.
            </li>
            <li>Implement UX/UI with SASS and Material UI library.
            </li>
          </ul>
        </div>
        <a href={Pdf} target="_blank" className="resume" data-aos="fade-right">View My Resume <i data-aos="fade-right" className="fas fa-arrow-right"></i></a>
      </div>

    </section>
  )
}

