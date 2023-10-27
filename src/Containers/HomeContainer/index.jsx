import { ContainerCategorias, Title, ItemCategoria } from "./styles";

function Categorias(){
    const CategoriasModelsTest = [
        {
            Title: 'Vinhos',
            Image: 'https://placehold.co/90x72'
        },
        {
            Title: 'Pratos Principais',
            Image:  'https://placehold.co/90x72'
        },
        {
            Title: 'Entradas',
            Image:  'https://placehold.co/90x72'
        },
        {
            Title: 'Sobremesas',
            Image:  'https://placehold.co/90x72'
        },
    ]

    return(
    <section>
        <Title>Categorias</Title>
        <ContainerCategorias>
            <ul>
                {CategoriasModelsTest.map((e)=>(
                    <ItemCategoria key={e.Title}>
                        <img src={e.Image}/>
                        <span>{e.Title}</span>
                    </ItemCategoria>
                ))}
            </ul>
        </ContainerCategorias>
    </section>
    )
}

export default Categorias