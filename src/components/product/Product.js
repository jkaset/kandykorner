import React from "react"
import "./Product.css"
//import { Link } from "react-router-dom"
//import {ProductType} from "../productType/ProductTypeProvider"
//const mappedType = productType(pt => <li>{pt.name}</li>)

export const Product = ({ product, productType}) => (
  <section className="product">
    <h3 className="product__name">{product.name}</h3>
    <p className="product__price"> Price: ${product.price}</p>
    <p className="product__productTypeId">Type: {productType.name}
    </p>
    <button type="submit">Purchase</button>
  </section>
)

// type="submit"
//         onClick={evt => {
//           evt.preventDefault() // Prevent browser from submitting the form
//           constructNewEmployee()
//         }}
//         className="btn btn-primary">
//         Hire
//             </button>