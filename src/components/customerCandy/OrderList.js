import React, { useContext, useEffect } from "react"
import { OrderContext } from "./OrderProvider"
import { Order } from "./Order"
import { ProductContext } from "../product/ProductProvider"
//import { Link } from "react-router-dom"
import "./Order.css"
import { Product } from "../product/Product"

export const OrderList = props => {
  const { orders, getOrders } = useContext(OrderContext)
  const { products, getProducts } = useContext(ProductContext)

  useEffect(() => {
    getProducts().then(getOrders)
  }, [])

    
  return (
    <div className="orders">
      <h2>I render!</h2>
    
    {/* {products.map(product => {
    const productType = productTypes.find(x => x.id === product.productTypeId)
    
    console.log(product)
    return <Product key={product.id}
      productType={productType}
      product={product} 
      
      />
    
  })} */}
        
    </div>
    )
}