import React from "react"
import "./Customer.css"

export const Customer = ({ customer }) => (
  <section className="customer">
    {customer.name}
  </section>
)

