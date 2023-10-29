import styled from "styled-components/macro";

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 40px 25px;
`;

export const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Title = styled.h3`
    color: #FF3131;
    line-height: 0;
`;

export const ButtonSettings = styled.button`
    margin: 10px 0;
    padding: 0;
    border: none;
    background: transparent;
    &:hover {
        cursor: pointer;
    }
`;
export const ButtonLogout = styled.button`
    display: flex;
    justify-content: start;
    align-items: center;
    width: fit-content;
    margin: 10px 0;
    padding: 0;
    font-size: 16px;
    color: #FF3131;
    border: none;
    background: transparent;
    &:hover {
        cursor: pointer;
    }
`;
