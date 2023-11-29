import React from "react";

import { HomeContainer, TitleContainer, Title, ButtonSettings, ButtonLogout } from "./styles";

import LogoutIcon from "../../assets/logout-icon.svg";
import SettingIcon from "../../assets/setting-icon.svg";

import ButtonCM from "../../components/ButtonCM/ButtonCM";

//     HOME CONTAINERS     //
import CategoryCarrousel from "../../components/CategoryCarrouselCM/CategoryCarrouselCM";
import ProductCard from "../../components/ProductCardCM/ProductCardCM";

import api from "../../services/api";

const Home = () => {

    const generateQr = async () => {
        try {
            const data = {
                user_id: "0",
                user_name: "teste"
            }

            const response = await api.post("/gerar-qr", data, {
                responseType: 'arraybuffer',
                headers: { 'Accept': 'application/pdf' },
            });
    
            const pdfBlob = new Blob([response.data], { type: 'application/pdf' });
            const pdfUrl = URL.createObjectURL(pdfBlob);
    
            window.open(pdfUrl, '_blank');
        } catch (error) {
            console.error('Erro ao gerar o QR code e o PDF:', error);
        }
    }

    return(
        <HomeContainer>
            <TitleContainer>
                <Title>Bem vindo(a), D'Itália</Title>
                <ButtonSettings>
                    <img src={SettingIcon} alt="icone sair"/>
                </ButtonSettings>
            </TitleContainer>
            <ButtonLogout>
                <img src={LogoutIcon} alt="icone sair"/>
                Sair
            </ButtonLogout>
            <ButtonCM>Nova refeição</ButtonCM>
            <ButtonCM onClick={()=>generateQr()}>Gerar QR code</ButtonCM>
            <CategoryCarrousel/>
            <ProductCard/>
        </HomeContainer>
    )
}

export default Home;