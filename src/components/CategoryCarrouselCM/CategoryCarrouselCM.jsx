import { CategoryContainer, Title, CategoryItem } from "./styles";
import { Link } from "react-router-dom";
import { CategoryModels as CategoryModel } from "../../Models/CategoryModels";

function CategoryCarrousel(){
    return(
        <section>
            <Title>Categorias</Title>
            <CategoryContainer>
                <ul>
                    {CategoryModel.map((e)=>(
                        <CategoryItem key={e.Title}>
                            <Link to='#'>
                                <img src={e.Image}/>
                                <span>{e.Title}</span>
                            </Link>
                        </CategoryItem>
                    ))}
                </ul>
            </CategoryContainer>
        </section>
    )
}

export default CategoryCarrousel