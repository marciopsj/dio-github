import styled, { css } from 'styled-components'
import { IButtonPropsStyled } from './types'

export const ButtonContainer = styled.button<IButtonPropsStyled>`
    width: 100%;
    height: 42px;

    border-radius: 21px;

    ${({ disabled }) =>
        disabled !== true && 
        css`        
            background-color: #81259D;
            color: #FFF; 
            border: 1px solid #81259D;


            &:hover {
            opacity: 0.6;
            cursor:pointer;
            }
        `}    
`