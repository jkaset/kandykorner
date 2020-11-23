import React from "react"
import "./Location.css"

export const Location = ({ location }) => (
  <section className="location">
    <h3 className="location__name">Address: {location.name}</h3>
    <address className="location__address">{location.address}</address>
    <p>Square footage: {location.squareFootage}</p>
    <p>Handicap accessible? {location.accessible}</p>
  </section>
)