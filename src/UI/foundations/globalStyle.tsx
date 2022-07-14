import {createGlobalStyle, css} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-size: 62.5%;
    font-family: "Roboto", sans-serif;
    transition: background 0.2s ease-in, color 0.2s ease-in;
    height: 100%;
    width: 100%;
    overflow-x: hidden;
  }

  ${[5, 10, 15, 20].map(
          (size) => css`
            ${["top", "right", "bottom", "left"].map(
                    (dir) => css`
                      .m${dir[0]}-${size} {
                        margin-${dir}: ${size}px;
                      }
                    `
            )}
          `
  )}
  ${[5, 10, 15, 20].map(
          (size) => css`
            ${["top", "right", "bottom", "left"].map(
                    (dir) => css`
                      .p${dir[0]}-${size} {
                        padding-${dir}: ${size}px;
                      }
                    `
            )}
          `
  )}

  ;
`
