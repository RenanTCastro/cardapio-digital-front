import styled from "styled-components";

export const MenuContainer = styled.div`
    h3{
        color: #FF6100;
        font-size: 16px;
        font-weight: 500;
        line-height: normal;
        margin: 0;
    }
    ul{
        list-style: none;
        padding: 0;
    }
    @media (min-width: 1024px) {
        ul{
            display: grid;
            grid-template-columns: 1fr 1fr;
            column-gap: 5px;
        }
    }
`

export const MenuItem = styled.li`
    align-items: center;
    display: flex;
    gap: 10px;
    margin-bottom: 16px;
    img{
        width: 90px;
        height: 72px;
        border-radius: 22px;
        padding: 5px 0;
    }
`

export const MenuItemText = styled.div`
    span{
        color: #000;
        font-size: 14px;
        font-weight: 600;
        line-height: normal;
    }
    a{
        text-decoration: none;
        cursor: pointer;
    }
    .description{
        width: 100%;
        color: #404040;
        font-size: 12px;
        font-weight: 400;
        line-height: normal;
        margin: 0;
    }
    .price{
        margin: 0;
        color: #000;
        font-size: 12px;
        font-weight: 500;
        line-height: normal;
    }
`