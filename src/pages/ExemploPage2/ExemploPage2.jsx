import React from "react";
import { useNavigate } from 'react-router-dom';

import { ButtonExample } from "./styles";

const ExemploPage2 = () => {
    const navigate = useNavigate();

    return(
        <div>
            <ButtonExample onClick={()=>navigate('/')}>
                CLIQUE AQUI 
            </ButtonExample>
        </div>
    )
}

export default ExemploPage2;