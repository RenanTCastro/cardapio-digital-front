import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ProductsModels } from "../../Models/ProductModels"
import { Container, Bottons, ProductContainer, ItemContainer, TextProduct } from "./styles"
import BackTitle from '../../components/BackTitleCM/BackTitle'
import iconLess from '../../assets/icons/iconPlu.svg'
import iconPlus from '../../assets/icons/iconLess.svg'


function ProductAdd(){
    const{ id } = useParams()
    const [quantidade, setQuantidade] = useState(1)
    const [product, setProduct] = useState([])
    const [staticPrice, setStaticPrice] = useState(0)
    const [price, setPrice] = useState(0)

    function formataPreco(preco){
        const precoStr = preco.toString()
        const precoRpl = precoStr.replace('.',',')
        return precoRpl
    }

    function AddPrice(){
        let newPrice = price + staticPrice
        return setPrice(newPrice)
    }

    function RemovePrice(){
        let newPrice = price - staticPrice
        return setPrice(newPrice)
    }

    function incrementa(){
        let numero = quantidade
        if(numero >= 15){
            return
        }else{
            setQuantidade(numero + 1)
            AddPrice()
            console.log(staticPrice)
        }
    }

    function decrementa(){
        let numero = quantidade
        if(numero<= 1){
            return
        }else{
            setQuantidade(numero - 1)
            RemovePrice()
        }
    }

    async function HandleProduct(){
        let productItem = [ProductsModels.find((item)=> item.Id === id)]
        let stringReplaced = productItem[0].Price.replace(',','.')
        let numberPrice = parseFloat(stringReplaced)
        setPrice(numberPrice)
        setStaticPrice(numberPrice)
        setProduct(productItem)
    }

    useEffect(()=>{
        HandleProduct();
    },[])


    return(
        <>
            <Container>
                <BackTitle to="/Home-client">Cardápio</BackTitle>
                {product.map(e =>(
                    <ProductContainer key={e.Id}>
                        <ItemContainer>
                            <img src={e.Image} alt={e.Title} />
                            <TextProduct>
                                <h2>{e.Title}</h2>
                                <p>{e.Description}</p>
                            </TextProduct>
                        </ItemContainer>
                        <Bottons>
                            <div className="incrementadora">
                                <img onClick={()=>decrementa()} src={iconLess}/>
                                <span>{quantidade}</span>
                                <img onClick={()=>incrementa()} src={iconPlus}/>
                            </div>
                            <div className="price">
                                <span>Adicionar</span><span>R${formataPreco(price.toFixed(2))}</span>
                            </div>
                        </Bottons>
                    </ProductContainer>
                ))}
            </Container>
        </>
    )
}

export default ProductAdd