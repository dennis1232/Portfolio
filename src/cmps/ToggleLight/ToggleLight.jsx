
import React, { useState } from 'react'

import './ToggleLight.scss'

export const ToggleLight = () => {
  const [checked, setChecked] = useState(true)

  const toggleSwitch = () => {
    setChecked(!checked)
    checked ? document.body.classList.add('dark') : document.body.classList.remove('dark')
  }

  return (
    <div className="switch-wrapper">
      <div className="sun"></div>
      <div className="toggle-wraper">
        <input
          id="checkbox"
          className="checkbox"
          type="checkbox"
          value={checked}
          onClick={toggleSwitch}
        />
        <label className="toggle-label" id="" for="checkbox"  >
          <i className="fas fa-moon"></i>
          <i className="fas fa-sun"></i>
          <div className="ball"></div>
        </label>
      </div>
      <div className="moon"></div>
    </div>
  )
}

