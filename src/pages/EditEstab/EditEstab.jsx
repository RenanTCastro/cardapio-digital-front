import { Container, Inputs, InputNameEstab, InputDescEstab, ButtonsContainer } from "./styles"
import { useState } from "react"
import ExcluirModalCM from "../../components/ExcluirModalCM/ExcluirModalCM"
import CancelIcon from '../../assets/cancel-icon.svg'
import ButtonCM from "../../components/ButtonCM/ButtonCM"
import BackTitle from "../../components/BackTitleCM/BackTitle"

function EditEstab(){
    const [nameEstab, setNameEstab] = useState('')
    const [descEstab, setDescEstab] = useState('')
    const [excluir, setExcluir] = useState(false)

    function CloseModal(){
        setExcluir(false)
    }

    return(
        <>
        {excluir && (<ExcluirModalCM closeFunc={CloseModal} />)}
        <Container>
            <BackTitle to='#'>Cardápio</BackTitle>
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