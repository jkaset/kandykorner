import React, { useContext, useEffect } from "react"
import { OrderContext } from "./OrderProvider"
//import { Link } from "react-router-dom"
import { Product } from "../product/Product"
import "./Order.css"

export const OrderList = () => {
  const { orders, getOrders } = useContext(OrderContext)

  useEffect(() => {
    getOrders()
  }, [])

  return (
    <div className="orders">
      <h1>Orders</h1>

      <article className="OrderList">
        {
         orders.map(order => <Product key={order.id} order={order} />)
        }
      </article>
    </div>
  )
}