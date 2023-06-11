import { styled } from 'styled-components'

export const ButtonContainer = styled.button`
background-color: #fafafa; 
width: 80%;
height: 62px;
margin: 20px;
border: 1px solid var(--border-color);
border-radius: 20px;

&: hover {
    cursor: pointer;
    opacity: 60%;
}
      

`