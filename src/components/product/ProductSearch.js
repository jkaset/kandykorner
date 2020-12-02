import React, { useContext } from "react"
import { ProductContext } from "./ProductProvider"
import "./Product.css"

export const ProductSearch = (props) => {
    const { setTerms } = useContext(ProductContext)

    return (
        <>
            Product search:
            <input type="text"
                className="input--wide"
                onKeyUp={
                    (keyEvent) => setTerms(keyEvent.target.value)
                }
                placeholder="Search for a product... " />
        </>
    )
}