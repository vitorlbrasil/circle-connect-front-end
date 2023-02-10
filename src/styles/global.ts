import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        border: 0;
        font: inherit;
        font-size: 100%;
        vertical-align: baseline;
        box-sizing: border-box;
    }

    body {
        line-height: 1;
        font-family: "Nunito", sans-serif;
    }

    ul {
        list-style: none;
    }

    :root {
        --primary-color: #3F7FBF;
        --secondary-color: #5FCAED;
        --tertiary-color: #97D3C5;

        --grey-4: #121214;
        --grey-3: #212529;
        --grey-2: #343b41;
        --grey-1: #E7E8EC;
        --grey-0: #F1F1F1;

        --success: #3fe864;
        --alert: #e83f5b;
    }

    .App{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        width: 100%;
        min-height: 100vh;
        background-color: var(--grey-0);
    }

    /* .container{
        width: 100%;
        max-width: 720px;
        padding: 0 0.75rem;
        margin: 0 auto;
    } */

    // input, select {
    //     height: 3rem;
    //     width: 100%;
    //     padding: 0 1rem;
    //     border: 1px solid transparent;
    //     border-radius: 0.5rem;
    //     font-size: 1rem;
    //     color: var(--grey-1);
    //     background-color: var(--grey-2);
    // }

    // input:focus-visible {
    // color: var(--grey-0);
    // outline: 1px solid var(--grey-0);
    // }

    .Toastify__toast-theme--light {
    background: var(--grey-0);
    color: var(--primary-color);
    }

    .Toastify__close-button--light {
    color: var(--grey-0);
    opacity: 1;
    }
`;
