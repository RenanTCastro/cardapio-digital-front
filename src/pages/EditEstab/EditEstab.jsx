import { Container, BackText, Inputs, InputNameEstab, InputDescEstab, ButtonsContainer } from "./styles"
import ExcluirModalCM from "../../components/ExcluirModalCM/ExcluirModalCM"
import { Link } from "react-router-dom"
import CancelIcon from '../../assets/cancel-icon.svg'
import { useState } from "react"
import ButtonCM from "../../components/ButtonCM/ButtonCM"

function EditEstab(){
    const [nameEstab, setNameEstab] = useState('')
    const [descEstab, setDescEstab] = useState('')
    const [excluir, setExcluir] = useState(false)

    function CloseModal(){
        setExcluir(false)
    }

    return(
        <>
        <Container>
            {excluir && (<ExcluirModalCM closeFunc={CloseModal} />)}
            <BackText>
                <Link to='#'><i class="fa-solid fa-chevron-left"></i></Link>Cardápio
            </BackText>
            <Inputs>
                <div className="NomeEstabContainer">
                    <InputNameEstab onChange={(e)=> setNameEstab(e.target.value)} value={nameEstab} type="text" placeholder="Nome do estabelecimento" />
                    <img onClick={()=>setNameEstab('')} src={CancelIcon} alt="" />
                </div>
                <div className="DescEstabContainer">
                    <InputDescEstab onChange={(e)=> setDescEstab(e.target.value)} value={descEstab} type='text' placeholder='Descrição'></InputDescEstab>
                    <img onClick={()=>setDescEstab('')} src={CancelIcon} alt="" />
                </div>
            </Inputs>
            <ButtonsContainer>
                <ButtonCM>Salvar alterações</ButtonCM>
                <ButtonCM onClick={()=>setExcluir(true)}>Excluir conta</ButtonCM>
            </ButtonsContainer>
        </Container>
        </>
    )
}

export default EditEstab