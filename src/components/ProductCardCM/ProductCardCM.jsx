import React from "react";

import { Button } from "./styles";

const ProductCardCM = ({children, onClick, ...rest}) => {
    return(
        <div>
            <img/>
            <div>
                <h4>TITULO</h4>
                <p>DESCRIPTION</p>
                <p>PRICE</p>
            </div>
        </div>
    )
}

export default ProductCardCM;