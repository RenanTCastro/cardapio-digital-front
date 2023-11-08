import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 25px;
`

export const ProductContainer = styled.div`
    text-align: center;
    img{
        width: 100%;
        max-width: 500px;
    }
`
export const TextProduct = styled.div`
    text-align: start;
    h2{
        width: 198px;
        font-weight: 500;
        font-size: 24px;
        font-family: Inter;
        color: #000;
        margin:20px 0 10px 0;
    }
    p{
        color: #000;
        font-family: Inter;
        font-size: 14px;
        font-weight: 400;
        margin-top: 10px;
    }
`
export const ItemContainer = styled.div`
    max-width: 500px;
    margin:0  auto;
    margin-bottom: 282px;
    `

export const Bottons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    column-gap: 8px;
    margin-bottom: 98px;
    .incrementadora{
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #B9B9B9;
        border-radius: 14px;
        width: 56px;
        height: 22px;
        padding: 14px 20px;
        span{
            color: #000;
            text-align: center;
            font-feature-settings: 'case' on;
            font-size: 17px;
            font-weight: 200;
            line-height: 22px; /* 129.412% */
            letter-spacing: -0.408px;
            margin: 0 5px;
        }
        img{
            width: 32px;
            height: 32px;
        }
    }
    .price{
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #FF6100;
        color: white;
        font-size: 17px;
        font-weight: 500;
        letter-spacing: -0.408px;
        border-radius: 14px;
        max-width: 234px;
        width: 100%;
        max-height: 50px;
        height: 100%;
        padding: 14px 20px;
    }

`