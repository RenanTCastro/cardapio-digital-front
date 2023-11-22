import styled from "styled-components";

export const LogoCM = styled.img`
  margin: 2rem 1rem 0 0;
  width: 10rem;
  border-radius: 0.5rem;
  
  @media (min-width: 858px) and (max-width: 1180px) {
    width: 15%;
    }   
 `;
    
    
export const h1CM = styled.h1`
  color: #ff6100;
  font-size: 1.2rem;
  margin: 0.6rem 1rem 0 0;
 `;

export const h2CM = styled.h2`
  color: rgba(840, 70, 0, 0.6);
  font-size: 0.6rem;
  padding: 0 4.5rem 0 0;
  margin: 0.3rem 0 0 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DescricaoCM = styled.textarea`
  width: 19rem;
  font-family: Inter;
  font-size: 0.8rem;
  padding: 0.6rem 0 5rem 0;
  margin: 0.5rem 0 0.3rem;
  border: none;
  border-bottom: 0.1rem solid #ccc;
`;

export const Return = styled.p`
  color: #ff6100;
  font-size: 0.7rem;
  padding: 0.6rem 8rem 0 0;
  margin: 0.3rem 0 0 5rem;
  display: flex;
  gap: 0.3rem;
`;

export const labelError = styled.label`
  color: #ff6100;
  font-size: 0.7rem;
`;
