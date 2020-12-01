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
  
  {orders.map(order => {
    const product = products.find(x => x.id === order.productId)
    
    console.log(product)
    return <Order key={order.id}
      product={product}
      
      
      />
    
  })}
      
  </div>

  )
}
    

    