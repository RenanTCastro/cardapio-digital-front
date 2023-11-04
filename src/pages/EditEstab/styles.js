import styled from "styled-components/macro";

export const Container = styled.div`
    z-index: 1;
    position: relative;
    max-width: 338px;
    width: 100%;
    margin: 0 auto;
    height: 100vh;
    display: flex;
    flex-direction: column;
`
export const BackText = styled.h2`
    color: #FF6100;
    margin-top: 64px;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    width: 100%;
    margin-bottom: 28px;
    i{
        color: #FF6100;
        margin-right: 4px;
    }
`
export const Inputs = styled.div`
    .NomeEstabContainer{
        position: relative;
        img{
            padding: 0 9px;
            padding-bottom: 19px;
            position: absolute;
            border-bottom: 1px solid;
        }
    }
    .DescEstabContainer{
        position: relative;
        img{
            padding: 0 9px;
            padding-bottom: 102px;
            position: absolute;
            border-bottom: thin solid;
        }
    }
    margin-bottom: 316px;
`

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const InputNameEstab = styled.input`
    &::placeholder{
        position: absolute;
        top: 1px;
        font-size: 17px;
    }
    border: none;
    border-bottom: thin solid;
    width: 286px;
    padding: 11px 16px 11px 0px;
    flex: 1 0 0;
    margin-bottom: 30px;
`
export const InputDescEstab = styled.input`
    &::placeholder{
        position: absolute;
        top: 1px;
        font-size: 17px;
    }
    text-align: justify;
    border: none;
    border-bottom: thin solid;
    
    padding: 11px 16px 11px 0px;
    height: 98px;
    width: 286px;
    flex: 1 0 0;
    margin-bottom: 30px;
`