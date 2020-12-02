import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "./location/LocationProvider"
import { LocationList } from "./location/LocationList"
import { ProductProvider } from "./product/ProductProvider"
import { ProductList } from "./product/ProductList"
import { ProductTypeProvider } from "./productType/ProductTypeProvider"
import { ProductSearch } from "./product/ProductSearch"
import { EmployeeProvider } from "./employee/EmployeeProvider"
import { EmployeeList } from "./employee/EmployeeList"
import { EmployeeForm } from "./employee/EmployeeForm"
import { OrderProvider } from "./customerCandy/OrderProvider"
import { OrderList } from "./customerCandy/OrderList"
import { CustomerProvider } from "./customer/CustomerProvider"
import { CustomerList } from "./customer/CustomerList"


export const ApplicationViews = (props) => {
  return (
    <>
      <LocationProvider>
        {/* Render the location list when http://localhost:3000/ */}
        <Route exact path="/">
          <LocationList />
        </Route>
      </LocationProvider>

      <ProductProvider>
        <OrderProvider>
          <ProductTypeProvider>
            {/* <Route exact path="/products">
              <ProductList />
            </Route> */}
            <Route exact path="/products" render={
                props => {
                    return <>
                        <ProductSearch />
                        <ProductList {...props} />
                    </>
                }
            } />
          </ProductTypeProvider>
        </OrderProvider>
      </ProductProvider>

      <EmployeeProvider>
        <LocationProvider>
          <Route exact path="/employees" render={
            props => <EmployeeList {...props} />
          } />

          <Route exact path="/employees/create" render={
            props => <EmployeeForm {...props} />
          } />
        </LocationProvider>
      </EmployeeProvider>

      <OrderProvider>
        <ProductProvider>
        <Route exact path="/orders" render={
            props => <OrderList {...props} />
          } />
        </ProductProvider>
      </OrderProvider>

      <CustomerProvider>
      <Route path="/customers">
          <CustomerList />
        </Route>
      </CustomerProvider>

    </>
  )
}