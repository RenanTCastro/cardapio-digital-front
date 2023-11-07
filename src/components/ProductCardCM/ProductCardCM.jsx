import { MenuContainer, MenuItem, MenuItemText } from "./styles"
import { Link } from "react-router-dom"
import { ProductsModels as MenuItemModel } from "../../Models/ProductModels"

function ProductCard(){
    return(
        <section>
            <MenuContainer>
                <h3>Cardápio</h3>
                <ul>
                    {MenuItemModel.map((e)=>(
                        <MenuItem key={e.Id}>
                            <img src={e.Image}/>
                            <MenuItemText>
                                <Link to='#'><span>{e.Title}</span>
                                <p className="description">{e.Description}</p>
                                <p className="price">{e.Price}</p></Link>
                            </MenuItemText>
                        </MenuItem>
                    ))}
                </ul>
            </MenuContainer>
        </section>
    )
}

export default ProductCard