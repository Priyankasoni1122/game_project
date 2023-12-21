import styled from "styled-components";


export const Button = styled.button`
align-items: center;
padding: 10px 18px;
width: 220px;
height: 44px;
background-color: black;
border-radius: 5px;
color: white;
border: none;
font-size: 16px;
cursor: pointer;
 
&:hover {
    background-color: #a39c9c;
    border: 1px solid black;
    color: black
}

`;

export const OutLineButton = styled(Button)`
background-color: white;
border: 1px solid black;
color: black;
&:hover {
    background-color: black;
    border: 1px solid transparent;
    color: white;
}
`;