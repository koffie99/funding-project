import React from "react"

const WhyCard = ({title, desc}) => {
  return (
    <div className="text-[#FFFFFF] border-[1px] border-[#FFFFFF] p-5 rounded border-dashed">
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

export default WhyCard
