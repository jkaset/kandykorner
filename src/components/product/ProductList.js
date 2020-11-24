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
    getProductTypes()
    .then(getProducts)
  }, [])

  return (
  <div className="products">
  {products.map(product => {
    const productType = productTypes.find(x => x.id === product.productTypeId)
    
    console.log(product)
    return <Product key={product.id}
      productType={productType}
      product={product} />
  })}
  </div>
  )

}
    