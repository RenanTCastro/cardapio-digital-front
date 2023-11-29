import { MenuContainer, MenuItem, MenuItemText } from "./styles"
import { Link, useNavigate } from "react-router-dom"
import { ProductsModels as MenuItemModel } from "../../Models/ProductModels"

function ProductCard(){
    const navigate = useNavigate();


    return(
        <section>
            <MenuContainer>
                <h3>Cardápio</h3>
                <ul>
                    {MenuItemModel.map((e)=>(
                        <MenuItem onClick={()=>navigate(`/Product/${e.Id}`)} key={e.Id}>
                            <img src={e.Image}/>
                            <MenuItemText>
                                <Link to='#'><span>{e.Title}</span>
                                <p className="description">{e.Description}</p>
                                <p className="price">R${e.Price}</p></Link>
                            </MenuItemText>
                        </MenuItem>
                    ))}
                </ul>
            </MenuContainer>
        </section>
    )
}

export default ProductCard