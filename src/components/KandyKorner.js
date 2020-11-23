import React from "react"
//import { Route } from "react-router-dom"
import { LocationList } from "./location/LocationList"
import { LocationProvider } from "./location/LocationProvider"
import "./KandyKorner.css"

export const KandyKorner = () => (
  <>
    <h2>KandyKorner</h2>
    <small>Do you want a piece of  kandy?</small>

      <h2>Locations</h2>
    <LocationProvider>
        <LocationList />
    </LocationProvider>
  </>
)