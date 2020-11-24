import React, { useContext, useEffect } from "react"
import { ProductTypeContext } from "./ProductTypeProvider"
import { ProductType } from "./ProductType"
import "./ProductType.css"

export const ProductTypeList = () => {
  const { productTypes, getProductTypes } = useContext(ProductTypeContext)

  useEffect(() => {
    console.log("ProductTypeList: Initial render before data")
    getProductTypes()
  }, [])

  return (
    <div className="productTypes">
      {
        productTypes.map(productType => <ProductType key={productType.id}
        productType={productType} />)
      }
    </div>
  )
}