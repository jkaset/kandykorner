import React, { useContext, useEffect } from "react"
import { ProductContext } from "./ProductProvider"
import { ProductTypeContext } from "../productType/ProductTypeProvider"
import { Product } from "./Product"
import "./Product.css"

export const ProductList = () => {
  // This state changes when `getProducts()` is invoked below
  const { products, getProducts } = useContext(ProductContext)
  const { productTypes, getProductTypes } = useContext(ProductTypeContext)

  useEffect(() => {
    console.log("ProductList: Initial render before data")
    getProducts()
      .then(getProductTypes)
  }, [])

  return (
  <div className="products">
  {products.map(product => {
    const pt = productTypes.find(x => x.id === product.productTypeId)

    return <Product key={product.id}
      productType={pt}
      product={product} />
  })}
  </div>
  )

}
    // return (
    //   <div className="products">
    //     {
    //       products.map(p => <Product key={p.id} product={p} />)
    //     }
    //   </div>
    // )