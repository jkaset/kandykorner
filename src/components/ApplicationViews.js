import React from "react"
import { Route } from "react-router-dom"
import { LocationProvider } from "./location/LocationProvider"
import { LocationList } from "./location/LocationList"
import { ProductProvider } from "./product/ProductProvider"
import { ProductList } from "./product/ProductList"
import { ProductTypeProvider } from "./productType/ProductTypeProvider"
//import { ProductTypeList } from "./productType/ProductTypeList"

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
        <ProductTypeProvider>
          <Route exact path="/products">
            <ProductList />
          </Route>
        </ProductTypeProvider>
      </ProductProvider>

    </>
  )
}