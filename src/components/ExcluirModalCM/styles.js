import styled from "styled-components";

export const BackGround = styled.div`
position: absolute;
background-color: rgb(0,0,0, 0.7);
height: 100vh;
width: 100vw;
left: -38px;
z-index: 10;
`

export const ModelContainer = styled.div`
    text-align: center;
    padding: 20px;
    z-index: 20;
    background-color: white;
    border-radius: 16px;
    max-width: 327px;
    width: 100%;
    max-height: 264px;
    height: 100%;
    border: 1px solid;
    margin: 32vh auto;
    img{
        margin-bottom: 20px;
    }
    h3{
        color: var(--neutral-neutral-900, #212134);
        font-weight: 600;
        line-height: 22px;
    }
    .Button{
        width: 100%;
        border-radius: 16px;
    }
`

export const TextContainer = styled.div`
    p{
        color: var(--neutral-neutral-500, #8E8EA9);
        font-weight: 500;
        line-height: 24px;
    }
`