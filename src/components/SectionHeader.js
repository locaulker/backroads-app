import React from "react"

const SectionHeader = ({ header, subHeader }) => {
  return (
    <div className="section-title">
      <h2>
        {header} <span>{subHeader}</span>
      </h2>
    </div>
  )
}

export default SectionHeader
