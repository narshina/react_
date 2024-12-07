import React from 'react'
import { Teammember } from './Teammember'
import './style.css'
import img from './img.jpg'

export const Team = () => {
  return (
    <div className="team-container">
      <Teammember name="Adam Jonson" role="Developer" image={img} />
      <Teammember name="Linda Larson" role="Manager" image={img}  />
      <Teammember name="Marry Hudson" role="Designer" image={img} bgcolor="gray" />
      <Teammember name="Nina Hudson" role="Designer" image={img}  />
      <Teammember name="Margo Larson" role="Manager" image={img}  />
      <Teammember name="Nicole Scavo" role="Manager" image={img}  />
    </div>
  )
}
