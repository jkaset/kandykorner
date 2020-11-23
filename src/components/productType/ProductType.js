import React from "react"
//import "./Employee.css"

export const ProductType = ({ productType }) => (
    <section className="productType">
        <h3 className="productType__name">{productType.name}</h3>
    </section>
)