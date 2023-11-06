import styled from "styled-components";

export const BackGround = styled.div`
position: absolute;
background-color: rgb(0,0,0, 0.7);
width: 100vw;
height: 100vh;
z-index: 10;
`

export const ModelContainer = styled.div`
    text-align: center;
    padding: 20px;
    z-index: 20;
    background-color: white;
    border-radius: 16px;
    width: 80%;
    max-height: 264px;
    height: 100%;
    border: 1px solid;
    margin: 32vh auto;
    img{
        margin-bottom: 20px;
        justify-content: end;
    }
    h3{
        color: var(--neutral-neutral-900, #212134);
        font-weight: 600;
        line-height: 22px;
        margin: 10px 0;
    }
    .Button{
        width: 100%;
        border-radius: 16px;
        margin-top: 20px;
    }
`

export const TextContainer = styled.div`
    p{
        color: var(--neutral-neutral-500, #8E8EA9);
        font-weight: 500;
        line-height: 24px;
    }
`