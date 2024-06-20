

import React from "react"
import styles from '../styles/Profilecard.module.css';

const OfferCard = ({title, desc, photo}) => {
  return (
    <div className="text-black  ">
      
      <h3>
        <span className="text-2xl text-regular font-bold">
          {title}
        </span>
        <br />
      </h3>
      <br />
      <p>
        {desc}
      </p>
    </div>
  )
}

export default OfferCard