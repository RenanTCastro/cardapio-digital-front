import styled from "styled-components/macro";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 25px;
`
export const Inputs = styled.div`
    width: 100%;
    .NomeEstabContainer{
        position: relative;
        margin-bottom: 30px;
        border-bottom: thin solid rgba(0,0,0,0.3);
        
        img{
            padding: 0 9px;
            position: absolute;
            right: 0;
        }
    }
    .DescEstabContainer{
        position: relative;
        border-bottom: thin solid rgba(0,0,0,0.3);
        margin-bottom: 30px;
        img{
            right: 0;
            padding: 0 9px;
            position: absolute;
        }
    }
    margin-bottom: 316px;
`

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const InputNameEstab = styled.input`
    &::placeholder{
        font-size: 17px;
    }
    &:focus{
        box-shadow: 0 0 0 0;
        border: 0 none;
        outline: 0;
    }
    border: none;
    width: 95%;
    padding: 11px 16px 11px 0px;
`
export const InputDescEstab = styled.textarea`
    &::placeholder{
        font-size: 17px;
    }
    &:focus{
        box-shadow: 0 0 0 0;
        border: 0 none;
        outline: 0;
    }
    font-family: Inter;
    font-weight: 400;
    resize: none;
    border: none;
    padding: 11px 16px 11px 0px;
    height: 98px;
    width: 95%;
`