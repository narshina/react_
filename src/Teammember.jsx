import React from 'react'
import './style.css'


export const Teammember = (props) => {
  return (
    <div className="team-member" style={{backgroundColor:props.bgcolor}}>
      <img src={props.image} alt={props.name} />
      <h3>{props.name}</h3>
      <p>{props.role}</p>
    </div>
  )
}
