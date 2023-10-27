import styled from "styled-components";

export const CategoryContainer = styled.div`

    ul{
        display: flex;
        list-style: none;
        padding: 0;
        overflow: scroll;
        
    }
    ul::-webkit-scrollbar {
    display: none;
    }
`

export const CategoryItem = styled.li`
    text-align: center;
    margin-right: 12px;
    span{
        color: #000;
        text-align: center;
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        line-height: 16px;
        white-space: nowrap;
    }
    img{
        display: block;
        width: 90px;
        height: 72px;
        border-radius: 22px;
    }
`

export const Title = styled.h3`
    color: #FF6100;
    font-size: 16px;
    margin: 8px 0;
    font-weight: 500;
    line-height: normal;
`