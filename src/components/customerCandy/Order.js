import React from "react"
import "./Order.css"

export const Order = ({ product }) => (
  <section className="order">
    <li>
      <ul>{product.name}</ul>
      <ul>${product.price}</ul>
    </li>
  </section>
)