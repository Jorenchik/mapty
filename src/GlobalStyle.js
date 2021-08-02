import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
  --font-small: 1.4rem;
  --font-medium: 1.5rem;

  --color-brand--1: #ffb545;
  --color-brand--2: #00c46a;

  --color-dark--1: #2d3439;
  --color-dark--2: #42484d;
  --color-light--1: #aaa;
  --color-light--2: #ececec;
  --color-light--3: rgb(214, 222, 224);

  --color-red--1: #ff0033;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%;
  box-sizing: border-box;
}

/* GENERAL */
a:link,
a:visited {
  color: var(--color-brand--1);
}
`;
