import { CategoriasContainer, Title, ItemCategoria } from "./styles";

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
        <CategoriasContainer>
            <ul>
                {CategoriasModelsTest.map((e)=>(
                    <ItemCategoria>
                        <img src={e.Image}/>
                        <span>{e.Title}</span>
                    </ItemCategoria>
                ))}
            </ul>
        </CategoriasContainer>
    </section>
    )
}

export default Categorias