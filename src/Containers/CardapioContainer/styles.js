import styled from "styled-components";

export const ContainerCardapio = styled.div`
    ul{
        list-style: none;
        padding: 0;
    }
`

export const ItemCardapio = styled.li`
    align-items: center;
    display: flex;
    img{
        width: 90px;
        height: 72px;
        border-radius: 22px;
    }
`

export const TextItemCardapio = styled.div`
    span{
        color: #000;
        font-family: Inter;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }
    .description{
        width: 238px;
        color: #404040;
        font-family: Inter;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin: 0;
    }
    .price{
        margin: 0;
        color: #000;
        font-family: Inter;
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }
`