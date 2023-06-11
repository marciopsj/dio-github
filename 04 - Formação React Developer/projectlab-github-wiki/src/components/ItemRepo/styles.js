import { styled } from 'styled-components'

export const ItemContainer = styled.div`
width: 80%;

h3 {
    font-size: 2rem;
    color: var(--text-color-primary);    
}

p {
    font-size: 1rem;
    color: var(--text-color-primary);
    opacity: 60%;
    margin-bottom: 20px;
}

a.remover {
    color: var(--link-remover-color);
}

hr {
    margin: 20px 0;
}
`