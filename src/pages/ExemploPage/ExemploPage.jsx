import React from "react";
import { useNavigate } from 'react-router-dom';

import { ButtonExample } from "./styles";

const ExemploPage = () => {
    const navigate = useNavigate();

    return(
        <div>
            <ButtonExample onClick={()=>navigate('/Page2')}>
                CLIQUE AQUI
            </ButtonExample>
        </div>
    )
}

export default ExemploPage;