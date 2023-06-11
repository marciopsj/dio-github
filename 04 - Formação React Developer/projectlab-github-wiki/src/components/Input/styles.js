import { styled } from 'styled-components'

export const InputContainer = styled.div`

width: 80%;
height: 62px;
margin: 20px;
border: 1px solid var(--border-color);
border-radius: 20px;

    input {
        background: transparent;
        font-size: 1rem;
        color: var(--text-color-primary);
        padding: 0 20px;
        width: 100%;
        height: inherit ;
        border: transparent;
        border-radius: inherit;
    }

    input:focus {
        outline: 0;
    }

  

`