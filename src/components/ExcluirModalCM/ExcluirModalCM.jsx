import { ModelContainer, BackGround, TextContainer } from "./styles"
import xIcon from '../../assets/x-icon.svg'
import ButtonCM from "../ButtonCM/ButtonCM"

function ExcluirModalCM(props){
    return(
        <BackGround>
            <ModelContainer>
                <img src={xIcon} alt="fechar" onClick={()=>props.closeFunc()}/>
                <h3>Deseja excluir a conta</h3>
                <TextContainer>
                    <p >Tem certeza que deseja excluir sua conta?</p>
                    <p>Essa é uma ação irreversível.</p>
                </TextContainer>
                <ButtonCM className="Button">Excluir</ButtonCM>
            </ModelContainer>
        </BackGround>
    )
}
export default ExcluirModalCM