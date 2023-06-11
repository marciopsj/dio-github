import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
:root {
    --bg-color: #22272E;
    --text-color-primary: #FFFFFF;
    --remove-color: #ff0000;
    --border-color: #fafafa;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style: none;
}

body {
    background-color: var(--bg-color);
    color: var(--text-color-primary);
}
`