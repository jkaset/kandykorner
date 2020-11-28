import React, { useContext, useEffect } from "react"
import { OrderContext } from "./OrderProvider"
import { Link } from "react-router-dom"
import "./Order.css"

export const OrderList = props => {
  const { orders, getOrders } = useContext(OrderContext)

  useEffect(() => {
    getOrders()
  }, [])

  return (
    <div className="orders">
      <h1>Orders</h1>

      <button onClick={() => props.history.push("/orders/create")}>
        Purchase
            </button>

      <article className="OrderList">
        {
          Orders.map(order => {
            return <Link key={order.id} to={`/orders/${order.id}`}>
              <h3>{order.name}</h3>
            </Link>
          })
        }
      </article>
    </div>
  )
}