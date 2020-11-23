import React from "react"
import { Route } from "react-router-dom"
// import { LocationList } from "./location/LocationList"
// import { LocationProvider } from "./location/LocationProvider"
// import { ProductList } from "./product/ProductList"
// import { ProductProvider } from "./product/ProductProvider"
import { NavBar } from "./nav/NavBar"
import { ApplicationViews } from "./ApplicationViews"
import "./KandyKorner.css"

export const KandyKorner = () => (
  <>

    <NavBar />
    <ApplicationViews />

  </>
)
{/* <h2>KandyKorner</h2>
<small>Do you want a piece of  kandy?</small> */}
  {/* <h2>Locations</h2>
  <LocationProvider>
    <LocationList />
  </LocationProvider>
  
  <h2>Products</h2>
  <ProductProvider>
    <ProductList />
  </ProductProvider> */}