import styled from "styled-components";

export const ProductWrapper = styled.div`
  margin: 5px 0;
  width: 79%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;   
  background-color: #fff;
`;

export const ProductSection = styled.div`
  box-sizing: border-box;
  justify-content: center;
  width: 280px;
  height: 320px;
  div{
  text-align: center;
  }
  :hover {
    
  }
`;

export const PImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  height: 220px;
  object-fit: contain;
`;
export const PTitle = styled.label`
  font-family: "Catamaran", "sans-serif";
  font-size: 0.9rem;
  word-spacing: 2px;  
  text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
`;
export const PRating = styled.div`
  margin: 5px 0;
  width: 10%;
  color: white;
  text-direction:ltr;
  border-radius: 2px;
  background-color: green;
`;
export const PPrice = styled.div`
width: 15%;

`;
