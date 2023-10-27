import { ContainerCardapio, ItemCardapio, TextItemCardapio } from "./styles"

function Cardapio(){
    const ItensCardapio = [
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
        <ContainerCardapio>
            <ul>
                {ItensCardapio.map((e)=>(
                    <ItemCardapio key={e.Id}>
                        <img src={e.Image}/>
                        <TextItemCardapio>
                            <span>{e.Title}</span>
                            <p className="description">{e.Description}</p>
                            <p className="price">{e.Price}</p>
                        </TextItemCardapio>
                    </ItemCardapio>
                ))}
            </ul>
        </ContainerCardapio>
    )
}

export default Cardapio