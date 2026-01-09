import React from 'react'

const Card = (props) => {


    console.log(props)
  return (
    <>
   <div className="parent">

    <img src="https://images.unsplash.com/photo-1743105351262-3f9e6944920a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D" alt="" />
     <h1>Hi! I'm {props.user}</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem officiis dignissimos quis, atque ut obcaecati aperiam saepe voluptatem asperiores corrupti.
    </p>
    <button className='button'>Click Me!</button>
    
   </div>
    </>
  )
}

export default Card