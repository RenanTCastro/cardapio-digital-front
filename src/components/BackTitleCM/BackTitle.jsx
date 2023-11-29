import { BackText } from "./styles"
import { Link } from "react-router-dom"

function BackTitle({children, to}){
    return(
        <>
            <BackText>
                <Link to={to}><i class="fa-solid fa-chevron-left"></i>{children}</Link>
            </BackText>
        </>
    )
}

export default BackTitle