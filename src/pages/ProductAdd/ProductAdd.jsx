import { useParams } from "react-router-dom"
import { ProductsModels } from "../../Models/ProductModels"

function ProductAdd(){
    const{ id } = useParams()

    return(
        <>
        <h2>oi</h2>
        <span>meu produto é {id}</span>
        </>
    )
}

export default ProductAdd