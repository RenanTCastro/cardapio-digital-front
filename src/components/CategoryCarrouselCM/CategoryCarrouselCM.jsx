import { CategoryContainer, Title, CategoryItem } from "./styles";

function CategoryCarrousel(){
    const CategoryModel = [
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
        <CategoryContainer>
            <ul>
                {CategoryModel.map((e)=>(
                    <CategoryItem key={e.Title}>
                        <img src={e.Image}/>
                        <span>{e.Title}</span>
                    </CategoryItem>
                ))}
            </ul>
        </CategoryContainer>
    </section>
    )
}

export default CategoryCarrousel