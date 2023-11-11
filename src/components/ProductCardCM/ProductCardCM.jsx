import { MenuContainer, MenuItem, MenuItemText } from "./styles"
import { Link } from "react-router-dom"

function ProductCard(){
    const MenuItemModel = [
        {
            Id: '1',
            Image: 'https://placehold.co/90x72',
            Title: 'Filé de Boi com Salada Alemã',
            Description: 'Carne brasileira regada ao molho, acompanhada de uma deliciosa salada típica da Alemanha.',
            Price: 'R$ 64,90'
        },
        {
            Id: '2',
            Image: 'https://placehold.co/90x72',
            Title: 'Filé de Boi com Salada Alemã',
            Description: 'Carne brasileira regada ao molho, acompanhada de uma deliciosa salada típica da Alemanha.',
            Price: 'R$ 64,90'
        },
        {
            Id: '3',
            Image: 'https://placehold.co/90x72',
            Title: 'Filé de Boi com Salada Alemã',
            Description: 'Carne brasileira regada ao molho, acompanhada de uma deliciosa salada típica da Alemanha.',
            Price: 'R$ 64,90'
        },
        {
            Id: '4',
            Image: 'https://placehold.co/90x72',
            Title: 'Filé de Boi com Salada Alemã',
            Description: 'Carne brasileira regada ao molho, acompanhada de uma deliciosa salada típica da Alemanha.',
            Price: 'R$ 64,90'
        },
        {
            Id: '5',
            Image: 'https://placehold.co/90x72',
            Title: 'Filé de Boi com Salada Alemã',
            Description: 'Carne brasileira regada ao molho, acompanhada de uma deliciosa salada típica da Alemanha.',
            Price: 'R$ 64,90'
        }
    ]

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