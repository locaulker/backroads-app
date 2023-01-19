import React from "react"
import SectionHeader from "./SectionHeader"
import { tours } from "../data"

const Tours = () => {
  return (
    <section className="section" id="tours">
      <SectionHeader header="featured" subHeader="tours" />

      <div className="section-center featured-center">
        {tours.map(tour => {
          const {
            id,
            image,
            date,
            heading,
            info,
            icon,
            location,
            duration,
            cost
          } = tour

          // This snippent is to format the cost price 'cost'
          const tourCost = (
            <span>
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
              }).format(cost)}
            </span>
          )

          return (
            <article key={id} className="tour-card">
              <div className="tour-img-container">
                <img src={image} className="tour-img" alt={heading} />
                <p className="tour-date">{date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{heading}</h4>
                </div>
                <p>{info}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className={icon}></i>
                    </span>{" "}
                    {location}
                  </p>
                  <p>{duration} days</p>
                  <p>from {tourCost}</p>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Tours
