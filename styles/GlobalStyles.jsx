import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    * {
        box-sizing: border-box;
        margin: 0; 
        padding: 0;
    }

    *:focus {
        outline: none;
    }

    body {
        font-family: 'Poppins', sans-serif !important;
        line-height: 1;
        padding: 0;
        margin: 0;   
        background-color: #F6F6F6;
        color: black;
    } 

    h1 {
        font-size: ${({ theme }) => theme.fontSizes.h1};
        font-weight: ${({ theme }) => theme.fontWeights.text.h1};
        color: ${({ theme }) => theme.colors.text.black}; 
        @media screen and (max-width: 700px) {

            font-size: ${({ theme }) => theme.fontSizes.h2};
        }
    }

    h2 {
        font-size: ${({ theme }) => theme.fontSizes.h2};
        font-weight: ${({ theme }) => theme.fontWeights.text.h2};
        color: ${({ theme }) => theme.colors.text.black}; 
    }

    h3 {
        font-size: ${({ theme }) => theme.fontSizes.h3};
        font-weight: ${({ theme }) => theme.fontWeights.text.h3};
        color: ${({ theme }) => theme.colors.text.black}; 
    }

    h4 {
        font-size: ${({ theme }) => theme.fontSizes.h4};
        font-weight: ${({ theme }) => theme.fontWeights.text.h4};
        color: ${({ theme }) => theme.colors.text.black}; 
    }

    h5 {
        font-size: ${({ theme }) => theme.fontSizes.h5};
        font-weight: ${({ theme }) => theme.fontWeights.text.h5};
        color: ${({ theme }) => theme.colors.text.black}; 
    }

    p {
        font-size: ${({ theme }) => theme.fontSizes.p}; 
        font-weight: ${({ theme }) => theme.fontWeights.text.p};
        color: ${({ theme }) => theme.colors.text.black}; 
        line-height: ${({ theme }) => theme.lineHeight.p};
    }
    
    a {
        color: ${({ theme }) => theme.colors.text.black}; 
        font-size: ${({ theme }) => theme.fontSizes.p}; 
        font-weight: ${({ theme }) => theme.fontWeights.text.p}; 
        text-decoration: none;
    }

    button {
        padding: 9px 15px;
        color: ${({ theme }) => theme.colors.text.black}; 
        font-weight: ${({ theme }) => theme.fontWeights.text.h5}; 
        border-radius: 50px; 
        border: 3px solid black !important;
        overflow: hidden;
        background-color: transparent;
        font-size: ${({ theme }) => theme.fontSizes.p}; 
        outline: none;
        border: none;
    }

    button:hover {
        cursor: pointer;
    }

    button:disabled {
        opacity: 0.5;
    }

    label {
        font-size: ${({ theme }) => theme.fontSizes.p}; 
        font-weight: ${({ theme }) => theme.fontWeights.text.p}; 
        color: ${({ theme }) => theme.colors.text.black};
    }

    input {
        border: none;
        width: 100%;
        font-size: ${({ theme }) => theme.fontSizes.p}; 
        background-color: ${({ theme }) => theme.colors.brand.secondary}; 
        color: ${({ theme }) => theme.colors.text.white}; 
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus, 
    input:-webkit-autofill:active{
        -webkit-box-shadow: 0 0 0 100px ${({ theme }) => theme.colors.brand.secondary} inset !important;
        -webkit-text-fill-color: ${({ theme }) => theme.colors.text.white} !important;
    }

    input::placeholder {
        color: ${({ theme }) => theme.colors.text.grey}; 
    }

    input:focus {
    }

    input:hover {
        cursor: pointer;
    }

    input[type="checkbox"] {
        background-color: ${({ theme }) => theme.colors.nuetral.bgGrey}; 
        border-radius: ${({ theme }) => theme.borderRadius.base}; 
        margin: 0;
        appearance: none !important;
        outline: none !important;
        -webkit-appearance: none;
    }

    input[type="checkbox"]:checked {
        background-color: ${({ theme }) =>
          theme.colors.brand.black} !important; 
        background-image: url("/icons/white-check.svg");
        background-repeat: no-repeat;
        background-position: center;
        background-size: 50%;
        border: none;
    }

    input[type="checkbox"]:hover {
        cursor: pointer;
    }

    input::-webkit-decoration {
    -webkit-text-fill-color: white;
    background-color: blue;
    }

    select {
        border: none;
        width: 100%;
        font-size: ${({ theme }) => theme.colors.brand.black}; 
        // Below is CSS for the down arrow:
        background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 8'%3E%3Cpath d='M1 0l5 5 5-5'/%3E%3C/svg%3E") no-repeat right center;
        background-size: 12px 12px;
        background-position: calc(100% - 12px) center;
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
    }

    select:focus {
    }

    select:hover {
        cursor: pointer;
    }

    textarea {
        font-family: 'Poppins', sans-serif;
        width: 100% !important;
        min-height: 100px;
        margin: 0px;
        outline: none;
        resize: vertical;
        border: none;
        font-size: ${({ theme }) => theme.fontSizes.p}; 
    }

    textarea:hover {
        cursor: pointer;
    }

    form {
        height: auto;
    }
    
    ::placeholder {
    color: ${({ theme }) => theme.colors.text.grey}; 
    opacity: 1; /* Firefox */
    }

    :-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: ${({ theme }) => theme.colors.text.grey}; 
    }

    ::-ms-input-placeholder { /* Microsoft Edge */
    color: ${({ theme }) => theme.colors.text.grey}; 
}
`;
