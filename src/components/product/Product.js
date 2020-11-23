import React from "react"
import "./Product.css"

export const Product = ({ product }) => (
  <section className="product">
    <h3 className="product__name">{product.name}</h3>
    <p className="product__price"> Price: ${product.price}</p>
    <p className="product__productTypeId">Type: {product.productTypeId}</p>
  </section>
)