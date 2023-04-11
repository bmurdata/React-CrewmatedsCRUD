import React from 'react'
import { useState } from 'react'
import './Card.css'
import more from './more.png'
import { Link } from 'react-router-dom'


const Card = (props) =>  {

  const [count, setCount] = useState(0)
  const updateCount = () => {
    setCount((count) => count + 1);
  }

  return (
      <div className="Card">
          <Link to={'edit/'+ props.id}><img className="moreButton" alt="edit button" src={more} /></Link>
          <h2 className="title"><span style={{ color: props.description }}>{props.title}</span></h2>
          <h3 className="author">{"Speed " + props.author}</h3>
          <p className="description">{props.description}</p>
          <Link to={'view/'+ props.id}>View Details</Link>
        
      </div>
  );
};

export default Card;