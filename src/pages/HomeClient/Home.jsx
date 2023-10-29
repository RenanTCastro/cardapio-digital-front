import React from "react";

import { HomeContainer, TitleContainer, Title, ButtonSettings, ButtonLogout } from "./styles";

import LogoutIcon from "../../assets/logout-icon.svg";
import SettingIcon from "../../assets/setting-icon.svg";

//     HOME CONTAINERS     //
import CategoryCarrousel from "../../components/CategoryCarrouselCM/CategoryCarrouselCM";
import ProductCard from "../../components/ProductCardCM/ProductCardCM";


const HomeClient = () => {
    return(
        <HomeContainer>
            <TitleContainer>
                <Title>Bem vindo(a), Renan Castro!</Title>
                <ButtonSettings>
                    <img src={SettingIcon} alt="icone sair"/>
                </ButtonSettings>
            </TitleContainer>
            <ButtonLogout>
                <img src={LogoutIcon} alt="icone sair"/>
                Sair
            </ButtonLogout>
            <CategoryCarrousel/>
            <ProductCard/>
        </HomeContainer>
    )
}

export default HomeClient;