import React, { useContext, useEffect } from "react"
import { ProductContext } from "./ProductProvider"
import { Product } from "./Product"
import "./Product.css"

export const ProductList = () => {
  // This state changes when `getProducts()` is invoked below
  const { products, getProducts } = useContext(ProductContext)

  useEffect(() => {
    console.log("ProductList: Initial render before data")
    getProducts()
  }, [])

  return (
    <div className="products">
      {
        products.map(p => <Product key={p.id} product={p} />)
      }
    </div>
  )
}