import React from "react"
import "./Product.css"
//import { Link } from "react-router-dom"
//import {ProductType} from "../productType/ProductTypeProvider"
//const mappedType = productType(pt => <li>{pt.name}</li>)

export const Product = ({ product, type}) => (
  <section className="product">
    <h3 className="product__name">{product.name}</h3>
    <p className="product__price"> Price: ${product.price}</p>
    <p className="product__productTypeId">Type: {type.name}
    </p>
  </section>
)