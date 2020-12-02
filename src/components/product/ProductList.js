import React, { useState, useContext, useEffect } from "react"
import { ProductContext } from "./ProductProvider"
import { ProductTypeContext } from "../productType/ProductTypeProvider"
import { Product } from "./Product"
import "./Product.css"

export const ProductList = () => {
  // This state changes when `getProducts()` is invoked below
  const { products, searchTerms, getProducts } = useContext(ProductContext)
  const { productTypes, getProductTypes } = useContext(ProductTypeContext)

  const [filteredProducts, setFiltered] = useState([])

  useEffect(() => {
    console.log("ProductList: Initial render before data")
    getProductTypes()
      .then(getProducts)
  }, [])

  useEffect(() => {
    if (searchTerms !== "") {

      const subset = products.filter(product => product.name.toLowerCase().includes(searchTerms))
      setFiltered(subset)
    } else {
      // If the search field is blank, display all products
      setFiltered(products)
    }
  }, [searchTerms, products])

  //   return (
  //     <div className="products">

  //       {products.map(product => {

  //         const productType = productTypes.find(x => x.id === product.productTypeId)

  //         console.log(product)

  //         return <Product key={product.id}
  //           productType={productType}
  //           product={product}
  //         />
  //       })}

  //     </div>
  //   )  
  // }

  return (
    <>
      <h1>Products</h1>
      <div>
        {
          filteredProducts.map(product => {
            const productType = productTypes.find(x => x.id === product.productTypeId)
            return <Product key={product.id}
              productType={productType}
              product={product} />
          })
        }
      </div>
    </>
  )
}


