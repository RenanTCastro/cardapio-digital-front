import React from "react";

import { HomeContainer, TitleContainer, Title, ButtonSettings, ButtonLogout } from "./styles";

import LogoutIcon from "../../assets/logout-icon.svg";
import SettingIcon from "../../assets/setting-icon.svg";

import ButtonCM from "../../components/ButtonCM/ButtonCM";

//     HOME CONTAINERS     //
import CategoryCarrousel from "../../components/CategoryCarrouselCM/CategoryCarrousel";
import ProductCard from "../../components/ProductCardCM/ProductCard";


const Home = () => {
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
            <ButtonCM>Gerar QR code</ButtonCM>
            <CategoryCarrousel/>
            <ProductCard/>
        </HomeContainer>
    )
}

export default Home;