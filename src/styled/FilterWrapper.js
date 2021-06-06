import styled from 'styled-components';

export const FilterWrapper = styled.div`
margin: 5px 0;
width: 19%;
padding: 5px;
height : 500px;
display: flex;
flex-direction: column;
background-color: #fff;
`;

export const SelectDiv = styled.div`
display: flex;
align-items:center;
flex-diretion: row;
justify-content: flex-start;

*{  
    width: 90px;
    margin: 7px;
}
`;

export const BrandFilter = styled.div`
padding:2px;
width: 214px;
display: flex;
flex-direction: column;
`;

export const ColorFilter = styled.div`
padding:2px;
display: flex;
flex-direction: column;
`;
export const ColorBox = styled.div`
margin : 2px;
display: flex;
flex-direction: row;

div{
    border-radius: 50%;
    width:16px;
    height: auto;
}
`;

 const Col = styled.div`
 margin: 0 5px;
 padding: 0 1px;
 text-align: center;
 background-color: ${({col})=> col || 'white'}; 
 `;

 export const Color = ({col})=> {
    return <Col col={col}>-</Col>
}