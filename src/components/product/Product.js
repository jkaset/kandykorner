import React, { useContext } from "react"
import "./Product.css"
import { OrderContext } from "../customerCandy/OrderProvider"
//import { Link } from "react-router-dom"
//import {ProductType} from "../productType/ProductTypeProvider"
//const mappedType = productType(pt => <li>{pt.name}</li>)
export const Product = ({ product, productType }) => {
  const { addOrder } = useContext(OrderContext)
  const createOrder = (productId) => {
    const customer = parseInt(localStorage.getItem('kandy_customer'))

    const newOrder = { productId, customer }

    addOrder(newOrder)
    //get customerId from local storage 
    //and get productId with product.id, post to database
  }
  return (

    <section className="product">
      <h3 className="product__name">{product.name}</h3>
      <p className="product__price"> Price: ${product.price}</p>
      <p className="product__productTypeId">Type: {productType.name}
      </p>
      <button onClick={() => createOrder(product.id)
      
      }>
        Purchase
  </button>
    </section>
  )
}


{/* <button type="submit">Purchase</button> */ }

// type="submit"
//         onClick={evt => {
//           evt.preventDefault() // Prevent browser from submitting the form
//           constructNewEmployee()
//         }}
//         className="btn btn-primary">
//         Hire
//             </button>