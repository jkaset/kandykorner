import React, { useContext, useEffect } from "react"
import { CustomerContext } from "./CustomerProvider"
import { Customer } from "./Customer"
import "./Customer.css"

export const CustomerList = ({ history }) => {
  const { getCustomers, customers } = useContext(CustomerContext)

  // Initialization effect hook -> Go get Customer data
  useEffect(() => {
    getCustomers()
  }, [])

  return (
    <>
      <h1>Customers</h1>

      <div className="customers">
        {
          customers.map(customer => {
            return <Customer key={customer.id} customer={customer} />
          })
        }
      </div>
    </>
  )
}