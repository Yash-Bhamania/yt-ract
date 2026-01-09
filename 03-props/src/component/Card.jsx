import React from 'react'

const Card = (props) => {
  return (
    <>
        <div >
      <div className="card">
        <img src={props.img} alt="Haan yhi image hai" />
        <h1>{props.name}</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <button>View profile</button>
      </div>
    </div>
    </>
  )
}

export default Card