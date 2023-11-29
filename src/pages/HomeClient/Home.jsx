import React from "react";

import { HomeContainer, TitleContainer, Title, ButtonLogout } from "./styles";

import LogoutIcon from "../../assets/logout-icon.svg";

//     HOME CONTAINERS     //
import CategoryCarrousel from "../../components/CategoryCarrouselCM/CategoryCarrouselCM";
import ProductCard from "../../components/ProductCardCM/ProductCardCM";


const HomeClient = () => {
    return(
        <HomeContainer>
            <TitleContainer>
                <Title>Bem vindo(a), Renan Castro!</Title>
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